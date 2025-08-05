import { GoogleGenAI, Type } from "@google/genai";
import { type ReportData } from '../types';

if (!process.env.API_KEY) {
  throw new Error("La variable de entorno API_KEY no está configurada.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Helper function to convert file to a base64 string and format it for the API
const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: {
      data: await base64EncodedDataPromise,
      mimeType: file.type,
    },
  };
};

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    serologicalStatus: {
      type: Type.STRING,
      description: "Diagnóstico conciso del estado serológico (ej: 'Hepatitis B crónica HBeAg-negativa', 'Inmunidad por vacunación', 'Infección aguda resuelta').",
    },
    summary: {
      type: Type.STRING,
      description: "Un breve resumen del caso clínico basado en los marcadores serológicos encontrados."
    },
    interpretation: {
      type: Type.STRING,
      description: "Una explicación detallada que conecta los marcadores serológicos con el estado clínico, explicando el significado de cada resultado en el contexto del paciente.",
    },
    recommendations: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
      },
      description: "Una lista de recomendaciones claras y accionables basadas en las guías clínicas más recientes (EASL, AASLD), como pruebas adicionales, inicio de tratamiento, seguimiento, o vacunación de contactos.",
    },
    detectedMarkers: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          marker: { 
            type: Type.STRING, 
            description: "Nombre del marcador de Hepatitis B detectado (ej: HBsAg, anti-HBs)." 
          },
          value: { 
            type: Type.STRING, 
            description: "El valor o resultado del marcador reportado en el análisis (ej: 'Positivo', 'Negativo', '150.5 UI/L')."
          },
          interpretation: { 
            type: Type.STRING, 
            description: "Interpretación breve y específica de este marcador (ej: 'Indica infección activa', 'Indica inmunidad protectora')." 
          },
        },
        required: ["marker", "value", "interpretation"],
      },
      description: "Una lista de los marcadores de VHB identificados en el informe del laboratorio.",
    },
  },
  required: ["serologicalStatus", "summary", "interpretation", "recommendations", "detectedMarkers"],
};


export const analyzeLabReport = async (labReportText: string, file: File | null): Promise<ReportData> => {
  const systemInstruction = `Eres un asistente de hepatología experto en la interpretación de la serología de la Hepatitis B. Tu tarea es analizar un informe de laboratorio médico, que puede ser texto, una imagen o ambos. Debes realizar OCR si es una imagen. Identifica los marcadores de Hepatitis B y genera un informe estructurado y conciso para un profesional médico. Tu análisis debe basarse en las guías de práctica clínica internacionales más actuales (como las de la EASL y AASLD). La salida debe ser exclusivamente un objeto JSON que se adhiera al esquema proporcionado. No incluyas explicaciones adicionales fuera del formato JSON. Identifica los siguientes marcadores si están presentes: HBsAg, anti-HBs (o HBsAb), anti-HBc total (o HBcAb), anti-HBc IgM, HBeAg, anti-HBe (o HBeAb), y Carga Viral VHB (o ADN VHB). Proporciona una interpretación clara y recomendaciones prácticas.`;

  const promptParts: any[] = [];

  let userPrompt = "Por favor, analiza el siguiente informe de laboratorio y genera el informe de interpretación serológica de Hepatitis B en el formato JSON especificado.";

  if (file) {
    userPrompt += " El informe principal se encuentra en la imagen adjunta.";
  }
  if (labReportText.trim()) {
     userPrompt += `\n\nTambién se ha proporcionado el siguiente texto:\n---\n${labReportText.trim()}\n---`;
  }
  
  promptParts.push({ text: userPrompt });

  if (file) {
    const imagePart = await fileToGenerativePart(file);
    promptParts.push(imagePart);
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: promptParts }],
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        temperature: 0.2,
      },
    });

    const jsonText = response.text.trim();
    const parsedData: ReportData = JSON.parse(jsonText);
    return parsedData;

  } catch (error) {
    console.error("Error al llamar a la API de Gemini:", error);
    throw new Error("La generación de la respuesta de la IA falló.");
  }
};
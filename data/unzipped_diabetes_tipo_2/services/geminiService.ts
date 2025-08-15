import { GoogleGenAI, Type } from "@google/genai";
import type { Treatment, GlucoseReading, AnalysisResponse, FundusAnalysisResponse, UserProfile, PersonalizedGoalsResponse } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const analysisResponseSchema = {
    type: Type.OBJECT,
    properties: {
        analisisGeneral: { 
            type: Type.STRING,
            description: "Análisis general del control glucémico del paciente en español."
        },
        fenomenoDetectado: {
            type: Type.OBJECT,
            properties: {
                nombre: { 
                    type: Type.STRING,
                    enum: ['Ninguno', 'Fenómeno del Alba', 'Efecto Somogyi'],
                    description: "El fenómeno detectado (Alba, Somogyi, o Ninguno)."
                },
                explicacion: { 
                    type: Type.STRING,
                    description: "Explicación clara y sencilla del fenómeno detectado en español."
                },
                consejoCorreccion: {
                    type: Type.STRING,
                    description: "Consejo específico para corregir el fenómeno detectado en español."
                }
            },
            required: ['nombre', 'explicacion', 'consejoCorreccion']
        },
        sugerencias: {
            type: Type.ARRAY,
            description: "Lista de sugerencias de ajuste de tratamiento.",
            items: {
                type: Type.OBJECT,
                properties: {
                    area: {
                        type: Type.STRING,
                        enum: ['Insulina Lenta', 'Insulina Rápida', 'Antidiabéticos Orales', 'Estilo de Vida', 'Monitorización'],
                        description: "Área del tratamiento a ajustar."
                    },
                    ajuste: {
                        type: Type.STRING,
                        description: "Sugerencia de ajuste concreta (ej. 'Aumentar 2 unidades', 'Considerar añadir Metformina')."
                    },
                    justificacion: {
                        type: Type.STRING,
                        description: "Justificación de la sugerencia basada en los datos proporcionados."
                    }
                },
                required: ['area', 'ajuste', 'justificacion']
            }
        }
    },
    required: ['analisisGeneral', 'fenomenoDetectado', 'sugerencias']
};

const fundusAnalysisResponseSchema = {
    type: Type.OBJECT,
    properties: {
        interpretacion: {
            type: Type.STRING,
            description: "Explicación detallada de los hallazgos del informe de fondo de ojo en un lenguaje sencillo para el paciente."
        },
        severidad: {
            type: Type.STRING,
            enum: ['Normal', 'Retinopatía Diabética No Proliferativa Leve', 'Retinopatía Diabética No Proliferativa Moderada', 'Retinopatía Diabética No Proliferativa Severa', 'Retinopatía Diabética Proliferativa', 'No concluyente'],
            description: "Clasificación de la severidad de la retinopatía diabética."
        },
        recomendaciones: {
            type: Type.STRING,
            description: "Recomendaciones para el paciente, como la frecuencia de seguimiento o la necesidad de consultar a un oftalmólogo especialista en retina. Debe incluir siempre un aviso de que consulte a su médico."
        }
    },
    required: ['interpretacion', 'severidad', 'recomendaciones']
};

const personalizedGoalsResponseSchema = {
    type: Type.OBJECT,
    properties: {
        hba1c: {
            type: Type.STRING,
            description: "Objetivo de Hemoglobina Glicosilada (HbA1c), p. ej., '< 7.0%' o '7.5-8.0%'."
        },
        ayunas: {
            type: Type.STRING,
            description: "Rango objetivo para la glucemia en ayunas, p. ej., '80-130 mg/dL'."
        },
        postprandial: {
            type: Type.STRING,
            description: "Objetivo para la glucemia 2 horas post-comida, p. ej., '< 180 mg/dL'."
        },
        justificacion: {
            type: Type.STRING,
            description: "Justificación clara y concisa de por qué se establecen estos objetivos para este perfil de paciente, basada en las guías clínicas (ADA/AACE)."
        }
    },
    required: ['hba1c', 'ayunas', 'postprandial', 'justificacion']
};


export const getTreatmentAnalysis = async (
  treatment: Treatment,
  readings: GlucoseReading[]
): Promise<AnalysisResponse> => {
    const prompt = `
    **Análisis de Tratamiento de Diabetes Tipo 2**

    **Contexto:**
    Eres un endocrinólogo experto en IA. Tu misión es analizar los datos de un paciente con diabetes tipo 2 y proporcionar recomendaciones de ajuste de tratamiento basadas en la evidencia científica más reciente (guías AACE/ADA). Debes identificar patrones específicos como el Fenómeno del Alba y el Efecto Somogyi. Tu respuesta debe ser educativa, segura y enfatizar que no reemplaza una consulta médica.

    **Datos del Paciente:**

    **1. Tratamiento Actual:**
    - Insulina Lenta (basal): ${treatment.longActingInsulin.dose} unidades.
    - Insulina Rápida (prandial): ${treatment.rapidActingInsulin.dose} unidades (asumir dosis fija para simplificar, a menos que se especifique lo contrario).
    - Antidiabéticos Orales:
      ${treatment.oralMeds.map(med => `- ${med.name}: ${med.dose}`).join('\n') || 'Ninguno.'}

    **2. Registros de Glucemia (últimos días):**
    ${readings.map(r => `- ${new Date(r.timestamp).toLocaleString('es-ES')}: ${r.value} mg/dL (${r.context})`).join('\n')}

    **Instrucciones de Análisis:**

    1.  **Evalúa el Control General:** Analiza las glucemias. ¿Están en rango? ¿Hay hipoglucemias o hiperglucemias predominantes? La glucemia en ayunas objetivo es 80-130 mg/dL. La post-comida <180 mg/dL.
    2.  **Busca Fenómenos Específicos:**
        *   **Fenómeno del Alba:** Busca un patrón de glucemia normal en la madrugada (2-4 AM) seguido de una hiperglucemia en ayunas.
        *   **Efecto Somogyi:** Busca un patrón de hipoglucemia en la madrugada (2-4 AM) seguido de una hiperglucemia reactiva en ayunas. Si no hay datos de madrugada, infiere la posibilidad si las glucemias en ayunas son altas a pesar de dosis altas de insulina basal nocturna.
    3.  **Proporciona Sugerencias Claras:** Basado en tu análisis, genera un plan de ajuste. Prioriza la seguridad (evitar hipoglucemias). Los ajustes de insulina basal deben ser graduales (ej. 10-20% o 1-2 unidades).

    **Formato de Salida Obligatorio:**
    Responde ÚNICAMENTE con el objeto JSON que cumple con el schema proporcionado. No incluyas texto adicional fuera del JSON.
  `;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: analysisResponseSchema,
            temperature: 0.2
        },
    });

    const jsonText = response.text;
    const parsedResponse = JSON.parse(jsonText);
    
    if (!parsedResponse.analisisGeneral || !parsedResponse.fenomenoDetectado || !parsedResponse.sugerencias) {
        throw new Error("La respuesta de la IA no tiene la estructura esperada.");
    }

    return parsedResponse as AnalysisResponse;

  } catch (error) {
    console.error("Error al llamar a la API de Gemini:", error);
    if (error instanceof Error) {
        throw new Error(`Error en la comunicación con la IA: ${error.message}`);
    }
    throw new Error("Ocurrió un error desconocido al procesar la solicitud.");
  }
};

export const getFundusAnalysis = async (reportText: string): Promise<FundusAnalysisResponse> => {
    const prompt = `
    **Análisis de Informe de Fondo de Ojo para Paciente Diabético**

    **Contexto:**
    Eres un oftalmólogo experto en IA especializado en retinopatía diabética. Tu tarea es interpretar el siguiente informe de un examen de fondo de ojo de un paciente diabético. Debes explicar los hallazgos en términos sencillos que un paciente pueda entender, clasificar la severidad y dar recomendaciones claras.

    **Informe del Paciente:**
    "${reportText}"

    **Instrucciones de Análisis:**
    1.  **Interpreta los Hallazgos:** Lee el informe y extrae los hallazgos clave. Busca términos como microaneurismas, hemorragias, exudados duros/algodonosos, neovasos, edema macular, etc. Explica qué significa cada uno de forma simple.
    2.  **Clasifica la Severidad:** Basado en los hallazgos, clasifica el estado según la escala de retinopatía diabética (Normal, NPDR Leve/Moderada/Severa, PDR).
    3.  **Proporciona Recomendaciones:** Aconseja al paciente sobre los próximos pasos. Esto podría incluir la frecuencia de los futuros exámenes, la importancia del control glucémico y de la presión arterial, o la necesidad de una consulta con un especialista en retina. **Siempre** debes terminar la recomendación con la frase: "Recuerda que esta interpretación es una guía educativa y no reemplaza la evaluación y el diagnóstico de tu oftalmólogo. Consulta con él tus resultados."

    **Formato de Salida Obligatorio:**
    Responde ÚNICAMENTE con el objeto JSON que cumple con el schema proporcionado. No incluyas texto adicional fuera del JSON.
  `;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: fundusAnalysisResponseSchema,
            temperature: 0.1
        },
    });

    const jsonText = response.text;
    return JSON.parse(jsonText) as FundusAnalysisResponse;

  } catch (error) {
    console.error("Error al llamar a la API de Gemini para análisis de fondo de ojo:", error);
    if (error instanceof Error) {
        throw new Error(`Error en la comunicación con la IA: ${error.message}`);
    }
    throw new Error("Ocurrió un error desconocido al procesar la solicitud de fondo de ojo.");
  }
};


export const getPersonalizedGoals = async (profile: Omit<UserProfile, 'age'> & { age: number }): Promise<PersonalizedGoalsResponse> => {
    const prompt = `
    **Cálculo de Objetivos Glucémicos Personalizados para Diabetes Tipo 2**

    **Contexto:**
    Eres un endocrinólogo experto en IA. Tu tarea es determinar los objetivos glucémicos (HbA1c, ayunas, postprandial) para un paciente con diabetes tipo 2, basándote en su perfil clínico y las guías de práctica clínica de la ADA/AACE. La personalización es clave.

    **Perfil del Paciente:**
    - Edad: ${profile.age} años.
    - Comorbilidades y complicaciones existentes: "${profile.comorbidities || 'No especificadas'}"
    - Riesgo de hipoglucemia (reportado por el paciente o su médico): ${profile.hypoglycemiaRisk}
    - Esperanza de vida (evaluación clínica): ${profile.lifeExpectancy}

    **Instrucciones de Análisis:**
    1.  **Considera los Factores:**
        *   **Pacientes jóvenes y sanos:** Objetivos más estrictos (p. ej., HbA1c < 6.5-7.0%) si se pueden alcanzar sin hipoglucemias significativas.
        *   **Pacientes mayores, con comorbilidades (enfermedad cardiovascular, renal, etc.), alto riesgo de hipoglucemia o esperanza de vida limitada:** Objetivos menos estrictos (p. ej., HbA1c < 7.5-8.5%) para priorizar la seguridad y calidad de vida.
    2.  **Determina los Objetivos:** Proporciona un valor o rango específico para HbA1c, glucemia en ayunas y glucemia postprandial.
    3.  **Justifica la Decisión:** Explica brevemente por qué estos objetivos son apropiados para este paciente en particular, citando los factores de su perfil que más influyeron en la decisión.

    **Formato de Salida Obligatorio:**
    Responde ÚNICAMENTE con el objeto JSON que cumple con el schema proporcionado. No incluyas texto adicional fuera del JSON.
  `;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: personalizedGoalsResponseSchema,
            temperature: 0.1
        },
    });

    const jsonText = response.text;
    return JSON.parse(jsonText) as PersonalizedGoalsResponse;

  } catch (error) {
    console.error("Error al llamar a la API de Gemini para objetivos personalizados:", error);
    if (error instanceof Error) {
        throw new Error(`Error en la comunicación con la IA: ${error.message}`);
    }
    throw new Error("Ocurrió un error desconocido al procesar la solicitud de objetivos.");
  }
};
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const model = "gemini-2.5-flash";

export const generateDosingProtocol = async (drugs: string[]): Promise<string> => {
    const drugList = drugs.join(', ');
    const prompt = `
    Actúa como un farmacólogo experto en cuidados paliativos. Un médico está preparando una perfusión subcutánea continua para un paciente terminal para manejar los síntomas al final de la vida. La perfusión contiene los siguientes fármacos: ${drugList}.

    Proporciona una guía detallada y paso a paso para preparar esta perfusión. La guía debe ser práctica y segura. Incluye:
    1.  Diluyente recomendado (ej. suero salino fisiológico).
    2.  Cálculos de concentración para un período de 24 horas en un infusor de 20-30ml.
    3.  Orden de mezcla recomendado para minimizar interacciones.
    4.  Consideraciones especiales para la mezcla de estos fármacos específicos.
    5.  Signos a vigilar en el paciente tras iniciar la perfusión.

    El objetivo principal es asegurar que el paciente permanezca confortable, sin dolor ni angustia. El tono debe ser profesional, claro y de apoyo para el médico. Responde en formato Markdown.
    `;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating dosing protocol:", error);
        return "Hubo un error al generar el protocolo. Por favor, inténtelo de nuevo.";
    }
};

export const generateFamilyAdvice = async (): Promise<string> => {
    const prompt = `
Escribe una carta unificada dirigida a los familiares y cuidadores de un ser querido que se encuentra en la etapa final de su vida. El propósito de esta carta es brindar consuelo, información y guía práctica en un solo documento, fácil de leer y entender.

La carta debe comenzar con el título: "# Consejos para familiares y cuidadores"

A continuación, desarrolla los siguientes temas de forma integrada y fluida, como si fuera una conversación cálida:
1.  **Comprensión del Proceso:** Explica de manera general y empática que muchos de los cambios que observan (como dormir más, comer menos o cambios en la respiración) son parte del proceso natural del cuerpo al prepararse para descansar.
2.  **Pérdida de Apetito y Sed:** Aconseja no forzar la comida ni la bebida. Sugiere alternativas para mostrar cuidado, como humedecer los labios, ofrecer pequeños sorbos de agua si la persona lo desea, y explica que la compañía es más importante que la comida en estos momentos.
3.  **Aumento del Sueño y Cambios en la Conciencia:** Explica que es normal que duerman más o que parezcan confusos. Anima a la familia a hablarle con suavidad, a poner música tranquila y a simplemente estar presentes.
4.  **Cuidados Prácticos y Confort:** Ofrece consejos concretos que les permitan sentirse útiles y brindar alivio, como:
    *   **Cuidado de la boca:** Cómo mantenerla limpia y húmeda para mayor comodidad.
    *   **Cuidado de la piel:** Sugerencias sencillas para prevenir escaras, como cambiar de postura suavemente.
    *   **Entorno:** La importancia de un ambiente tranquilo, con luz suave y sin ruidos fuertes.
5.  **Comunicación y Apoyo Emocional:** Recuérdales que su presencia es el regalo más valioso. Anímales a compartir recuerdos, a tomarse de la mano, y a permitirse sentir y expresar sus emociones.
6.  **Cambios en la Respiración:** Describe los posibles cambios en el patrón respiratorio de forma tranquilizadora, explicando que usualmente no causan angustia al paciente, para que la familia no se alarme.

Usa un tono cercano y de apoyo, evitando la jerga médica. Estructura la carta para que sea fácil de seguir.

Cierra la carta con la frase de apoyo "Con afecto y apoyo". No añadas ninguna firma como "Tu nombre" o "El equipo de cuidados" después. Responde en formato Markdown.
    `;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating family advice:", error);
        return "Hubo un error al generar el consejo. Por favor, inténtelo de nuevo.";
    }
};

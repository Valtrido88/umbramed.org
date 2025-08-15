
import { GoogleGenAI, Type } from "@google/genai";
import type { ObesityPlan, NutrientRichDiet, FoodInteractionInfo, HighMetaboliteFoods, ConditionDiet, DayPlan } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = "gemini-2.5-flash";

const mealSchema = {
    type: Type.OBJECT,
    properties: {
        nombre: { type: Type.STRING },
        platos: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ["nombre", "platos"]
};

const dayPlanSchema = {
    type: Type.OBJECT,
    properties: {
        dia: { type: Type.STRING },
        comidas: { type: Type.ARRAY, items: mealSchema }
    },
    required: ["dia", "comidas"]
};


export const generateObesityPlan = async (patientInfo: { age: number; weight: number; height: number; gender: 'masculino' | 'femenino'; activity: string; preferences: string }): Promise<ObesityPlan> => {
    const prompt = `
      Basado en la evidencia científica más reciente para el tratamiento de la obesidad en atención primaria, crea un plan integral y personalizado para un paciente con las siguientes características:
      - Edad: ${patientInfo.age} años
      - Sexo: ${patientInfo.gender}
      - Peso: ${patientInfo.weight} kg
      - Altura: ${patientInfo.height} cm
      - Nivel de actividad: ${patientInfo.activity}
      - Preferencias o restricciones alimentarias: ${patientInfo.preferences}

      El plan debe ser realista, fácil de seguir y estar enfocado en la creación de hábitos saludables a largo plazo. No uses ingredientes exóticos o caros.

      Genera una respuesta en formato JSON con la siguiente estructura:
      {
        "planDieta": [ (un plan de 7 días) ],
        "planEjercicios": [ (3-5 ejercicios sencillos con descripción y series/repeticiones) ],
        "consejosGenerales": [ (5 consejos prácticos sobre hidratación, sueño, manejo del estrés, etc.) ]
      }
    `;

    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    planDieta: {
                        type: Type.ARRAY,
                        items: dayPlanSchema
                    },
                    planEjercicios: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                nombre: { type: Type.STRING },
                                descripcion: { type: Type.STRING },
                                series_repeticiones: { type: Type.STRING }
                            },
                             required: ["nombre", "descripcion", "series_repeticiones"]
                        }
                    },
                    consejosGenerales: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING }
                    }
                },
                 required: ["planDieta", "planEjercicios", "consejosGenerales"]
            }
        }
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as ObesityPlan;
};

export const generateNutrientRichDiet = async (nutrient: string): Promise<NutrientRichDiet> => {
    const prompt = `
      Crea una guía para un paciente con niveles límite bajos de ${nutrient}, pero que no requiere tratamiento farmacológico. La guía debe incluir:
      1. El nombre de la dieta (ej: "Dieta Rica en Hierro").
      2. Una breve descripción del porqué es importante este nutriente.
      3. Una lista de alimentos ricos en ${nutrient} fáciles de encontrar.
      4. Un plan de comidas de ejemplo para un día completo (desayuno, almuerzo, cena) que incorpore estos alimentos.

      Genera la respuesta en formato JSON.
    `;
    
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    nombreDieta: { type: Type.STRING },
                    descripcion: { type: Type.STRING },
                    alimentosRecomendados: { type: Type.ARRAY, items: { type: Type.STRING } },
                    planComidasEjemplo: dayPlanSchema
                },
                required: ["nombreDieta", "descripcion", "alimentosRecomendados", "planComidasEjemplo"]
            }
        }
    });
    
    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as NutrientRichDiet;
};


export const generateFoodInteractionInfo = async (): Promise<FoodInteractionInfo> => {
    const prompt = `
        Crea una lista de alimentos para pacientes que toman Sintrom (acenocumarol). La lista debe estar dividida en dos categorías claras:
        1. Alimentos que AUMENTAN el efecto del Sintrom (aumentan el INR), con una breve explicación de por qué.
        2. Alimentos que DISMINUYEN el efecto del Sintrom (reducen el INR, principalmente ricos en Vitamina K), con una breve explicación.

        La explicación debe ser sencilla y comprensible para un paciente. Usa un lenguaje claro. No incluyas una introducción, solo las listas.

        Genera la respuesta en formato JSON.
    `;
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    alimentosQueAumentanEfecto: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                nombre: { type: Type.STRING },
                                explicacion: { type: Type.STRING }
                            },
                             required: ["nombre", "explicacion"]
                        }
                    },
                    alimentosQueDisminuyenEfecto: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                nombre: { type: Type.STRING },
                                explicacion: { type: Type.STRING }
                            },
                            required: ["nombre", "explicacion"]
                        }
                    }
                },
                required: ["alimentosQueAumentanEfecto", "alimentosQueDisminuyenEfecto"]
            }
        }
    });
    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as FoodInteractionInfo;
};

export const generateHighMetaboliteFoods = async (): Promise<HighMetaboliteFoods> => {
    const prompt = `
        Crea una lista de alimentos a evitar para pacientes con problemas de metabolismo. La lista debe estar dividida en dos categorías claras:
        1. Alimentos altos en triglicéridos.
        2. Alimentos altos en ácido úrico (ricos en purinas).

        Para cada alimento, añade una breve nota del motivo por el que se debe evitar. La explicación debe ser sencilla y comprensible para un paciente.

        Genera la respuesta en formato JSON.
    `;
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    alimentosAltosEnTrigliceridos: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                alimento: { type: Type.STRING },
                                motivo: { type: Type.STRING }
                            },
                            required: ["alimento", "motivo"]
                        }
                    },
                    alimentosAltosEnAcidoUrico: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                alimento: { type: Type.STRING },
                                motivo: { type: Type.STRING }
                            },
                            required: ["alimento", "motivo"]
                        }
                    }
                },
                required: ["alimentosAltosEnTrigliceridos", "alimentosAltosEnAcidoUrico"]
            }
        }
    });
    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as HighMetaboliteFoods;
};

export const generateConditionDiet = async (condition: 'gastroenteritis' | 'estreñimiento'): Promise<ConditionDiet> => {
    const prompt = `
        Crea un plan nutricional para un paciente con ${condition}.
        Si es gastroenteritis, debe ser una dieta blanda de recuperación, progresiva.
        Si es estreñimiento, debe ser una dieta rica en fibra y líquidos.

        El plan debe incluir:
        1. Nombre de la dieta.
        2. Descripción de su objetivo.
        3. Consejos generales y prácticos para manejar la condición.
        4. Un plan de comidas de ejemplo para un día.

        Usa un lenguaje claro y de apoyo para el paciente. Genera la respuesta en formato JSON.
    `;
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    nombre: { type: Type.STRING },
                    descripcion: { type: Type.STRING },
                    consejos: { type: Type.ARRAY, items: { type: Type.STRING } },
                    planComidas: dayPlanSchema
                },
                required: ["nombre", "descripcion", "consejos", "planComidas"]
            }
        }
    });
    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as ConditionDiet;
};

import { Question, Difficulty } from '../types';

const initialQuestions: Question[] = [
    // Definición y Categorización
    {
        id: 1,
        questionText: "Según el PAI de Riesgo Vascular, ¿qué define la Prevención Secundaria?",
        options: [
            { text: "Identificar y actuar sobre factores de riesgo en personas sin enfermedad vascular." },
            { text: "Actuar sobre personas que ya tienen una enfermedad vascular (EV) conocida y documentada." },
            { text: "Realizar cribado oportunista en la población general mayor de 40 años." },
            { text: "Tratar a pacientes con un riesgo SCORE > 10%." }
        ],
        correctAnswerIndex: 1,
        rationale: "El PASO 1 del PAI es claro: la Prevención Secundaria se aplica si se identifica EV previa (cardiopatía isquémica, enfermedad cerebrovascular, arteriopatía periférica). Si no se identifica, es Prevención Primaria.",
        difficulty: Difficulty.EASY,
    },
    {
        id: 2,
        questionText: "En el PASO 2 (Detección de Factores de Riesgo Vascular), ¿cuál NO es uno de los FRV a registrar mediante anamnesis?",
        options: [
            { text: "Hábito tabáquico y clasificación." },
            { text: "Diagnóstico previo de dislipemia o tratamiento con hipolipemiantes." },
            { text: "Diagnóstico previo de apnea del sueño." },
            { text: "Diagnóstico previo de HTA o tratamiento con antihipertensivos." }
        ],
        correctAnswerIndex: 2,
        rationale: "El PAI especifica claramente los 5 FRV a registrar en la anamnesis inicial: Hábito tabáquico, HTA, Diabetes, Dislipemia y Obesidad. La apnea del sueño, aunque es un factor de riesgo importante, no está en este listado inicial del PASO 2.",
        difficulty: Difficulty.MEDIUM,
    },
    // Estadios de Cambio
    {
        id: 3,
        questionText: "Un paciente fumador que le dice: 'Sé que debería dejarlo, pero no sé si seré capaz. Quizás después del verano me lo plantee', se encuentra en el estadio de cambio de:",
        options: [
            { text: "Precontemplación." },
            { text: "Contemplación." },
            { text: "Preparación para la acción." },
            { text: "Acción." }
        ],
        correctAnswerIndex: 1,
        rationale: "El paciente está en la fase de Contemplación. Reconoce el problema y está dispuesto a actuar en los próximos 6 meses, pero aún experimenta ambivalencia ('no sé si seré capaz'). El precontemplativo no intenta actuar en los próximos 6 meses.",
        difficulty: Difficulty.EASY,
    },
    // Estimación del Riesgo Vascular (SCORE y Alto Riesgo)
    {
        id: 4,
        questionText: "Según el PAI de Riesgo Vascular, se utiliza el modelo SCORE para calcular el riesgo. Se considera que un paciente tiene RIESGO ALTO cuando su SCORE es:",
        options: [
            { text: "≥ 1%" },
            { text: "≥ 5%" },
            { text: "≥ 10%" },
            { text: "≥ 20%" }
        ],
        correctAnswerIndex: 1,
        rationale: "El punto de corte fundamental del modelo SCORE para países de bajo riesgo, según el PAI, es del 5%. Un riesgo ≥ 5% clasifica al paciente como de Riesgo Alto y requiere una intervención más intensiva.",
        difficulty: Difficulty.HARD,
    },
    {
        id: 5,
        questionText: "¿Cuál de los siguientes pacientes sería clasificado DIRECTAMENTE como de RIESGO ALTO sin necesidad de calcular el SCORE?",
        options: [
            { text: "Hombre de 55 años, fumador, con colesterol total de 210 mg/dl y TAS de 135 mmHg." },
            { text: "Mujer de 60 años con HTA controlada con enalapril y obesidad." },
            { text: "Paciente con Diabetes Mellitus de 20 años de evolución y nefropatía." },
            { text: "Paciente con hiperuricemia y esteatosis hepática." }
        ],
        correctAnswerIndex: 2,
        rationale: "El PAI lista 4 grupos que son directamente clasificados como de riesgo alto: 1) Enfermedad vascular establecida, 2) Diabetes Mellitus de más de 15 años de evolución o con nefropatía, 3) Dislipemias familiares aterogénicas, y 4) HTA estadio 3 o con afectación de órganos diana.",
        difficulty: Difficulty.HARD,
    },
    {
        id: 6,
        questionText: "Un varón de 60 años, no fumador, con TAS de 145 mmHg y colesterol total de 232 mg/dl (6 mmol/L), ¿qué riesgo cardiovascular tiene según la tabla SCORE?",
        options: [
            { text: "2%" },
            { text: "4%" },
            { text: "6%" },
            { text: "9%" }
        ],
        correctAnswerIndex: 2,
        rationale: "Buscando en la tabla SCORE para VARONES, no fumadores, edad 60 años, en la fila de TAS 140 y columna de colesterol 6 mmol/L, el valor de riesgo es 6%. Esto lo clasifica como Riesgo Alto.",
        difficulty: Difficulty.MEDIUM,
    },
    // Objetivos Terapéuticos
    {
        id: 7,
        questionText: "En un paciente con prevención secundaria (ya ha tenido un infarto), ¿cuál es el objetivo de cLDL según el PAI?",
        options: [
            { text: "cLDL < 130 mg/dl" },
            { text: "cLDL < 115 mg/dl" },
            { text: "cLDL < 100 mg/dl o reducción del 30% sobre el basal." },
            { text: "cLDL < 70 mg/dl" }
        ],
        correctAnswerIndex: 2,
        rationale: "Para Prevención Secundaria, el PAI establece un objetivo de cLDL < 100 mg/dl o una reducción del 30% sobre el valor basal. Aunque guías más recientes son más estrictas (<70 o <55), la respuesta correcta según este PAI es <100.",
        difficulty: Difficulty.MEDIUM,
    },
    {
        id: 8,
        questionText: "En un paciente con diabetes y nefropatía con proteinuria > 1 g/día, ¿cuál es el objetivo de control de la Presión Arterial?",
        options: [
            { text: "< 140/90 mmHg" },
            { text: "< 130/80 mmHg" },
            { text: "< 125/75 mmHg" },
            { text: "< 120/80 mmHg" }
        ],
        correctAnswerIndex: 2,
        rationale: "El PAI establece objetivos de PA más estrictos en ciertas poblaciones. Para pacientes con nefropatía y proteinuria superior a 1 g/día, el objetivo es el más exigente: < 125/75 mmHg.",
        difficulty: Difficulty.HARD,
    },
    {
        id: 9,
        questionText: "¿Cuál es el objetivo de HbA1c para la mayoría de los pacientes con Diabetes Mellitus según el PAI?",
        options: [
            { text: "< 6.5%" },
            { text: "< 7%" },
            { text: "< 8%" },
            { text: "Depende del riesgo cardiovascular." }
        ],
        correctAnswerIndex: 1,
        rationale: "El objetivo general de control glucémico en diabetes es una HbA1c < 7%. Se puede intensificar el tratamiento si es > 8%. Un objetivo más estricto (<6.5%) se reserva para pacientes jóvenes sin comorbilidad.",
        difficulty: Difficulty.EASY,
    },
    // Tratamiento Farmacológico
    {
        id: 10,
        questionText: "En un paciente en prevención primaria con RV alto y un cLDL de 170 mg/dl, ¿cuándo se debe considerar iniciar tratamiento farmacológico?",
        options: [
            { text: "Inmediatamente al diagnóstico." },
            { text: "Tras 3 meses de intervención en estilos de vida si no se alcanzan objetivos." },
            { text: "Cuando el cLDL es > 190 mg/dl." },
            { text: "Tras seis meses de medidas no farmacológicas (modificación de estilos de vida) si no se consiguen los objetivos." }
        ],
        correctAnswerIndex: 3,
        rationale: "Para pacientes en prevención primaria con RV alto, el tratamiento farmacológico se considera si el cLDL es ≥160 mg/dl DESPUÉS de seis meses de intervención en el estilo de vida sin alcanzar los objetivos.",
        difficulty: Difficulty.MEDIUM,
    },
    {
        id: 11,
        questionText: "Según el PAI, ¿cuál es el fármaco hipolipemiante de primera elección por su relación coste-efectividad?",
        options: [
            { text: "Atorvastatina" },
            { text: "Rosuvastatina" },
            { text: "Simvastatina (20-40 mg/día)" },
            { text: "Ezetimiba" }
        ],
        correctAnswerIndex: 2,
        rationale: "El PAI es explícito en este punto: 'Los medicamentos hipolipemiantes de primera elección son las estatinas. Por su relación coste - efectividad, la simvastatina (20-40 mg/día) debe ser la de elección, salvo que existan otras razones justificadas'.",
        difficulty: Difficulty.EASY,
    },
    {
        id: 12,
        questionText: "¿En qué situación NO se debe ofrecer tratamiento antiagregante (AAS) según el PAI?",
        options: [
            { text: "En todos los pacientes en prevención secundaria." },
            { text: "En personas en prevención primaria con un RV muy aumentado (>10%) y PA controlada." },
            { text: "En personas con RV bajo." },
            { text: "En todos los pacientes con diabetes." }
        ],
        correctAnswerIndex: 2,
        rationale: "El PAI indica que en personas con RV bajo, la relación riesgo/beneficio de la antiagregación es desfavorable. En diabéticos, depende del nivel de riesgo, no del diagnóstico en sí.",
        difficulty: Difficulty.MEDIUM,
    },
    {
        id: 13,
        questionText: "Para el tratamiento de la HTA, ¿qué grupo de fármacos se consideran de primera elección según el PAI?",
        options: [
            { text: "Betabloqueantes." },
            { text: "Alfabloqueantes." },
            { text: "Tiazidas, IECA y antagonistas del calcio." },
            { text: "Diuréticos de asa." }
        ],
        correctAnswerIndex: 2,
        rationale: "El PAI especifica que 'Los fármacos de primera elección son las tiazidas, los IECA y los antagonistas del calcio' debido a su demostrada eficacia y buena relación coste-efectividad.",
        difficulty: Difficulty.EASY,
    },
    // Seguimiento
    {
        id: 14,
        questionText: "Tras una intervención para modificar los FRV, ¿con qué periodicidad se debe recalcular el riesgo vascular (RV) global?",
        options: [
            { text: "Cada 6 meses." },
            { text: "Cada 1 o 2 años." },
            { text: "Cada 5 años." },
            { text: "Solo si hay un nuevo evento cardiovascular." }
        ],
        correctAnswerIndex: 1,
        rationale: "El PASO 6: SEGUIMIENTO indica que se volverá a calcular el RV para evaluar la reducción del riesgo global tras la intervención cada 1 o 2 años, según el riesgo previo.",
        difficulty: Difficulty.MEDIUM,
    },
    {
        id: 15,
        questionText: "En un paciente con Riesgo Vascular ALTO en el que se inician intervenciones, ¿cuándo se recomienda la primera revisión?",
        options: [
            { text: "Al año." },
            { text: "A los 6 meses." },
            { text: "A los 3 meses." },
            { text: "No se especifica una revisión, solo seguimiento a demanda." }
        ],
        correctAnswerIndex: 2,
        rationale: "La tabla del PASO 5 especifica que para pacientes con RV >5% (ALTO), tras la intervención inicial (información escrita e intervención mínima), se debe realizar una Revisión a los 3 meses.",
        difficulty: Difficulty.MEDIUM,
    }
];

const allQuestions = [...initialQuestions].map((q, index) => ({ ...q, id: index + 1 }));

const placeholderCount = 90 - allQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: allQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre el PAI de Riesgo Vascular número ${i + 1}`,
  options: [{ text: "Opción A - Correcta" }, { text: "Opción B" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 0,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI de Riesgo Vascular.",
  difficulty: Difficulty.MEDIUM,
}));

const finalQuestions = [...allQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { finalQuestions as quizQuestions };
import { Question, Difficulty } from '../types';

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "Según el PAI de EPOC, ¿cuál es el criterio espirométrico indispensable para confirmar el diagnóstico de EPOC en un paciente con sospecha clínica?",
    options: [
      { text: "Un FEV1 < 80% del valor de referencia." },
      { text: "Un cociente FEV1/FVC < 0,70 tras realizar una prueba broncodilatadora." },
      { text: "Un cociente FEV1/FVC < 0,70 antes de la prueba broncodilatadora." },
      { text: "Una Capacidad Vital Forzada (FVC) < 80% del valor de referencia." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI es claro y se alinea con todas las guías internacionales: el diagnóstico de EPOC requiere la demostración de una limitación al flujo aéreo no completamente reversible. Esto se define por un cociente FEV1/FVC post-broncodilatador inferior a 0,70.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    questionText: "En la clasificación del impacto de la EPOC en el estado de salud (grupos A, B, C, D), ¿qué dos parámetros se utilizan?",
    options: [
      { text: "El grado de obstrucción (FEV1) y la edad del paciente." },
      { text: "La intensidad de los síntomas y el historial de agudizaciones del último año." },
      { text: "El IMC y la presencia de comorbilidades cardiovasculares." },
      { text: "El nivel de disnea (mMRC) y el FEV1." }
    ],
    correctAnswerIndex: 1,
    rationale: "La clasificación combinada de la EPOC (GOLD 2019, adoptada por el PAI) evalúa el impacto de la enfermedad en el paciente basándose en la carga sintomática (evaluada con mMRC o CAT) y el riesgo de futuras agudizaciones (basado en el historial de exacerbaciones del año previo).",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    questionText: "Un paciente con EPOC presenta una disnea mMRC de 3 y un CAT de 18. El año pasado tuvo una agudización que no requirió ingreso. ¿En qué grupo (A, B, C o D) se clasificaría?",
    options: [
      { text: "Grupo A" },
      { text: "Grupo B" },
      { text: "Grupo C" },
      { text: "Grupo D" }
    ],
    correctAnswerIndex: 1,
    rationale: "El paciente es muy sintomático (mMRC ≥ 2 o CAT ≥ 10). Sin embargo, es de bajo riesgo de agudizaciones, ya que solo tuvo una agudización moderada (≤1 y sin hospitalización). Por tanto, se clasifica como Grupo B (Más síntomas, bajo riesgo).",
    difficulty: Difficulty.HARD,
  },
  {
    id: 4,
    questionText: "Para un paciente clasificado en el Grupo C de GOLD, ¿cuál es el tratamiento farmacológico de inicio recomendado por el PAI?",
    options: [
      { text: "Un SABA a demanda." },
      { text: "Un LABA (broncodilatador beta-agonista de acción larga)." },
      { text: "Un LAMA (broncodilatador antimuscarínico de acción larga)." },
      { text: "Una combinación LABA + Corticoide Inhalado (CI)." }
    ],
    correctAnswerIndex: 2,
    rationale: "Para el Grupo C (pocos síntomas, alto riesgo de agudizaciones), el tratamiento de elección para iniciar es un LAMA, ya que ha demostrado ser superior a los LABA en la prevención de exacerbaciones.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 5,
    questionText: "Según los criterios de Anthonisen, ¿cuándo se recomienda iniciar tratamiento antibiótico en una agudización de EPOC?",
    options: [
      { text: "Siempre que el esputo sea de color verde." },
      { text: "En pacientes con fiebre alta (>38.5ºC)." },
      { text: "Cuando están presentes los tres síntomas cardinales: aumento de disnea, aumento de volumen del esputo y aumento de la purulencia." },
      { text: "Solo si la PCR es superior a 50 mg/L." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI recomienda el uso de antibióticos ante la presencia de los tres síntomas cardinales de Anthonisen (Tipo I) o ante la presencia de dos, si uno de ellos es el aumento de la purulencia del esputo (Tipo II). También en pacientes que requieran ventilación mecánica.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 6,
    questionText: "¿Cuál es la pauta recomendada de corticoides sistémicos en una agudización de EPOC que no requiere ingreso?",
    options: [
      { text: "Prednisona 60 mg/día durante 15 días." },
      { text: "Prednisona 0,5 mg/kg/día (máximo 40 mg) durante 5-7 días." },
      { text: "Metilprednisolona intravenosa durante 3 días." },
      { text: "No se recomiendan corticoides sistémicos de forma ambulatoria." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI recomienda una dosis de 0,5 mg/kg de prednisona (con un máximo de 40 mg) durante un período corto, de 5 a 7 días. Pautas más largas no han demostrado mayor beneficio y sí más efectos secundarios.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 7,
    questionText: "¿Cuál es el objetivo de saturación de oxígeno (SpO2) que se debe buscar en un paciente con agudización de EPOC e hipercapnia conocida?",
    options: [
      { text: "94-98%" },
      { text: "Siempre > 95%" },
      { text: "88-92%" },
      { text: "No es necesario monitorizar la SpO2." }
    ],
    correctAnswerIndex: 2,
    rationale: "En pacientes con EPOC y riesgo de hipercapnia, una oxigenoterapia demasiado agresiva puede disminuir el estímulo respiratorio y empeorar la retención de CO2. Por ello, el objetivo de SpO2 es más conservador, entre 88-92%, para asegurar una oxigenación suficiente sin inducir una narcosis por CO2.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 8,
    questionText: "Un paciente con EPOC estable clasificado como GOLD 4, Grupo D, refiere disnea persistente a pesar de tratamiento con LAMA+LABA. ¿Cuál sería el siguiente paso terapéutico a considerar?",
    options: [
      { text: "Añadir un corticoide inhalado (CI), formando una triple terapia." },
      { text: "Añadir teofilinas." },
      { text: "Añadir un mucolítico como N-acetilcisteína." },
      { text: "Derivar para trasplante pulmonar." }
    ],
    correctAnswerIndex: 0,
    rationale: "En un paciente del grupo D que persiste sintomático a pesar de la doble broncodilatación, el siguiente escalón es añadir un corticoide inhalado para conformar la triple terapia (LAMA+LABA+CI), especialmente si tiene antecedentes de agudizaciones o eosinofilia.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 9,
    questionText: "¿Qué vacunación, además de la antigripal anual, se recomienda de forma sistemática en los pacientes con EPOC?",
    options: [
      { text: "Vacuna frente al Herpes Zóster." },
      { text: "Vacuna frente al Neumococo." },
      { text: "Vacuna frente a la tosferina (dTpa)." },
      { text: "Vacuna frente al VPH." }
    ],
    correctAnswerIndex: 1,
    rationale: "La neumonía es una causa frecuente y grave de agudización de la EPOC. Por ello, el PAI, siguiendo las recomendaciones generales, indica la vacunación antineumocócica (con VNP23 y/o VNC13 según pautas) en todos los pacientes con EPOC.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 10,
    questionText: "¿Cuál de las siguientes condiciones NO es una indicación de ventilación mecánica no invasiva (VMNI) en una agudización grave de EPOC?",
    options: [
      { text: "Acidosis respiratoria (pH < 7,35) con hipercapnia (PaCO2 > 45 mm Hg)." },
      { text: "Disnea intensa con uso de musculatura accesoria." },
      { text: "Parada respiratoria inminente." },
      { text: "Hipoxemia persistente a pesar de oxigenoterapia." }
    ],
    correctAnswerIndex: 2,
    rationale: "La VMNI está indicada en la agudización grave con acidosis respiratoria para disminuir el trabajo respiratorio. Sin embargo, una parada respiratoria inminente o establecida es una contraindicación absoluta, ya que el paciente no puede proteger la vía aérea y requiere intubación orotraqueal y ventilación invasiva.",
    difficulty: Difficulty.HARD,
  }
];

// Generate placeholder questions to reach the target count
const placeholderCount = 110 - quizQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: quizQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre EPOC número ${i + 1}`,
  options: [{ text: "Opción A - Correcta" }, { text: "Opción B" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 0,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI de EPOC.",
  difficulty: Difficulty.MEDIUM,
}));

const finalQuestions = [...quizQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { finalQuestions as quizQuestions };

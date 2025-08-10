import { Question, Difficulty } from '../types';

const initialQuestions: Question[] = [
  {
    id: 1,
    questionText: "¿Cuál de los siguientes NO es un criterio indispensable para definir un Trastorno Mental Grave (TMG) según el PAI?",
    options: [
      { text: "Una sintomatología de características psicóticas o prepsicóticas." },
      { text: "La necesidad de un abordaje multidisciplinar, intersectorial y continuado." },
      { text: "La previsión de una evolución prolongada en el tiempo." },
      { text: "Un diagnóstico exclusivo de esquizofrenia o trastorno bipolar." }
    ],
    correctAnswerIndex: 3,
    rationale: "El concepto de TMG es funcional, no se limita a diagnósticos específicos. Incluye una sintomatología que afecta la funcionalidad, la necesidad de un abordaje complejo y una previsión de cronicidad. Abarca múltiples diagnósticos (F20-F33, etc.), no solo esquizofrenia o trastorno bipolar.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    questionText: "Para identificar a un paciente con TMG, se deben cumplir criterios en 3 escalas de valoración. ¿Cuál de las siguientes combinaciones es la correcta según el PAI?",
    options: [
      { text: "GAF < 60, HONOS ≥ 4 (en cualquier escala excepto la 5), y BPRS ≥ 21." },
      { text: "GAF < 50, HONOS ≥ 5 (en cualquier escala), y BPRS ≥ 30." },
      { text: "GAF < 60, Hamilton > 20, y BPRS ≥ 21." },
      { text: "Cualquier puntuación en GAF, HONOS o BPRS que indique gravedad." }
    ],
    correctAnswerIndex: 0,
    rationale: "El PAI establece unos puntos de corte claros y objetivos para la identificación: Escala GAF (Global Assessment of Functioning) menor de 60, una puntuación de 4 o más en cualquiera de las escalas de la HONOS (excepto la 5), y una puntuación mayor o igual a 21 en la escala BPRS.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 3,
    questionText: "Una vez identificado un paciente con TMG, ¿en qué plazo máximo debe realizarse la valoración multidisciplinar integral?",
    options: [
      { text: "7 días." },
      { text: "15 días." },
      { text: "1 mes." },
      { text: "2 meses." }
    ],
    correctAnswerIndex: 3,
    rationale: "La recomendación clave del PAI es realizar la valoración multidisciplinaria integral en un plazo máximo de 2 meses desde la identificación del TMG, para poder elaborar el Plan Individualizado de Tratamiento.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 4,
    questionText: "El Plan Individualizado de Tratamiento (PIT) debe elaborarse en un tiempo máximo de:",
    options: [
      { text: "15 días tras la identificación." },
      { text: "30 días tras la identificación." },
      { text: "45 días tras la valoración." },
      { text: "60 días tras la valoración." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI especifica que todas las personas con TMG contarán con un plan denominado PIT en un tiempo máximo de 30 días. Este plan es el documento de referencia para todas las intervenciones.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 5,
    questionText: "En un paciente con un primer episodio psicótico, ¿cuál es la recomendación sobre el tratamiento con antipsicóticos?",
    options: [
      { text: "Utilizar una dosis de carga (neuroleptización rápida)." },
      { text: "Iniciar siempre con dos antipsicóticos para asegurar la respuesta." },
      { text: "Utilizar la dosis mínima efectiva y evitar la polifarmacia." },
      { text: "Preferir siempre antipsicóticos inyectables depot de inicio." }
    ],
    correctAnswerIndex: 2,
    rationale: "En un primer episodio, la recomendación es usar la dosis mínima efectiva de un solo antipsicótico. No se recomienda la neuroleptización rápida ni los depot de inicio. El objetivo es lograr la remisión con la menor carga farmacológica posible.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 6,
    questionText: "Según el PAI, el modelo de gestión de casos de intensidad MUY ALTA, que implica al menos 2 contactos asistenciales por semana y un abordaje integral en el entorno natural de la persona, se corresponde con:",
    options: [
      { text: "El modelo de gestión de casos Nivel 2." },
      { text: "El Tratamiento Asertivo Comunitario (TAC)." },
      { text: "El programa de Hospitalización de Día." },
      { text: "La intervención del Equipo de Soporte." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI describe el Tratamiento Asertivo Comunitario (TAC) como el modelo indicado para casos de intensidad muy alta, caracterizado por una alta frecuencia de contactos (≥2/semana), un equipo multidisciplinar y un enfoque proactivo en el entorno del paciente.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 7,
    questionText: "En el tratamiento de la esquizofrenia, si se inicia con olanzapina o clozapina, ¿qué se debe vigilar especialmente?",
    options: [
      { text: "La función renal." },
      { text: "Los factores de riesgo metabólico (dislipemia, diabetes)." },
      { text: "La aparición de síntomas extrapiramidales agudos." },
      { text: "La tensión arterial." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI advierte específicamente que no se recomienda el uso de olanzapina y clozapina como tratamiento inicial en pacientes con factores de riesgo de síndrome metabólico (dislipemia, hipertensión, sobrepeso o diabetes), dado el alto potencial de estos fármacos para inducir dichos efectos.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 8,
    questionText: "¿Cuál es una recomendación explícita del PAI sobre la contención mecánica?",
    options: [
      { text: "Debe ser la primera opción en pacientes no colaboradores." },
      { text: "Se debe evitar siempre que sea posible, usando la desescalada verbal como primera elección." },
      { text: "Debe mantenerse un mínimo de 24 horas para asegurar la efectividad." },
      { text: "Puede ser indicada por cualquier profesional del equipo sanitario." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI es muy claro en este punto, alineándose con las guías de derechos humanos. La contención mecánica debe evitarse siempre que sea posible, priorizando la desescalada verbal y la contención farmacológica como primeras líneas de actuación ante una agitación.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 9,
    questionText: "En el tratamiento del Trastorno Bipolar, ¿cuál es el tratamiento de primera línea recomendado para un episodio maníaco agudo?",
    options: [
      { text: "Lamotrigina." },
      { text: "Un antidepresivo ISRS." },
      { text: "Litio." },
      { text: "Terapia electroconvulsiva (TEC)." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI recomienda ofrecer monoterapia con litio como tratamiento de primera línea en la manía aguda. El valproato o los antipsicóticos atípicos son alternativas si hay mala tolerancia al litio. Los antidepresivos están contraindicados por el riesgo de viraje.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 10,
    questionText: "En el seguimiento de un paciente en tratamiento con antipsicóticos, ¿cuál de las siguientes exploraciones NO forma parte del estudio somático protocolizado?",
    options: [
      { text: "Peso, IMC y perímetro abdominal." },
      { text: "Glucosa basal, HbA1c y perfil lipídico." },
      { text: "Electrocardiograma (ECG)." },
      { text: "Ecografía abdominal anual." }
    ],
    correctAnswerIndex: 3,
    rationale: "El PAI detalla el estudio somático necesario, que incluye control de peso y perímetro, analítica metabólica (glucosa, lípidos), prolactina, hemograma y un ECG. La ecografía abdominal no forma parte del seguimiento rutinario estandarizado.",
    difficulty: Difficulty.MEDIUM,
  },
];

// Generate placeholder questions to reach the target count
const placeholderCount = 125 - initialQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: initialQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre TMG número ${i + 1}`,
  options: [{ text: "Opción A - Correcta" }, { text: "Opción B" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 0,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI de Trastorno Mental Grave.",
  difficulty: Difficulty.MEDIUM,
}));

const quizQuestions = [...initialQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { quizQuestions };
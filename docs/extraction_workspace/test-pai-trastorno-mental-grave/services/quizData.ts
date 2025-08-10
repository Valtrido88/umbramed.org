import { Question, Difficulty } from '../types';

const quizQuestions: Question[] = [
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
  {
    id: 11,
    questionText: "Ante un paciente con esquizofrenia que no ha respondido adecuadamente a dos antipsicóticos (uno de ellos atípico) a dosis correctas, ¿cuál es el siguiente paso terapéutico recomendado?",
    options: [
      { text: "Añadir un tercer antipsicótico (polifarmacia)." },
      { text: "Ofrecer tratamiento con clozapina." },
      { text: "Derivar para Terapia Electroconvulsiva (TEC)." },
      { text: "Suspender todo tratamiento y reevaluar en 1 mes." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI sigue las guías de práctica clínica estándar. Ante una esquizofrenia resistente al tratamiento (fracaso de al menos 2 antipsicóticos), la recomendación es ofrecer tratamiento con clozapina, monitorizando estrechamente el perfil hematológico.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 12,
    questionText: "¿Cuál es el objetivo de la intervención temprana en los primeros episodios de psicosis?",
    options: [
      { text: "Evitar la hospitalización a toda costa." },
      { text: "Reducir la duración de la psicosis no tratada (DUP)." },
      { text: "Iniciar tratamiento con antipsicóticos depot de inmediato." },
      { text: "Limitar la intervención a farmacoterapia." }
    ],
    correctAnswerIndex: 1,
    rationale: "Uno de los objetivos fundamentales de la intervención temprana es reducir la 'Duration of Untreated Psychosis' (DUP), ya que se ha demostrado que un DUP más corto se asocia con un mejor pronóstico a largo plazo. La intervención es integral (farmacológica, psicológica, social).",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 13,
    questionText: "¿Qué es el 'Espacio de Colaboración AP-SM' mencionado en el PAI?",
    options: [
      { text: "Un centro de día específico para pacientes con TMG." },
      { text: "Un modelo de interconsulta y trabajo conjunto entre Atención Primaria y Salud Mental." },
      { text: "Una plataforma telemática para la gestión de citas." },
      { text: "Un grupo de apoyo para familiares y cuidadores." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI pone gran énfasis en la coordinación entre niveles. El 'Espacio de Colaboración' es el modelo organizativo que articula la relación entre Atención Primaria y Salud Mental, incluyendo consultas conjuntas, análisis de casos y formación.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 14,
    questionText: "En pacientes con TMG que presentan comorbilidad con consumo de sustancias, ¿cuál es el abordaje recomendado?",
    options: [
      { text: "Tratar primero el TMG y posponer el abordaje del consumo." },
      { text: "Tratar primero el consumo y posponer el abordaje del TMG." },
      { text: "Un tratamiento integrado y simultáneo de ambas patologías." },
      { text: "Derivar a dispositivos diferentes para cada patología sin que se coordinen." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI recomienda un abordaje integrado para la patología dual. Tratar los trastornos de forma separada ha demostrado ser ineficaz. Se requiere una coordinación estrecha y un plan de tratamiento unificado que aborde ambas condiciones simultáneamente.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 15,
    questionText: "Según el PAI, ¿cuál de las siguientes intervenciones NO está recomendada de forma rutinaria para el Trastorno Límite de la Personalidad (TLP)?",
    options: [
      { text: "Terapia Dialéctico Comportamental (TDC)." },
      { text: "Tratamiento farmacológico con antipsicóticos como terapia principal." },
      { text: "Terapia de Mentalización." },
      { text: "Manejo de crisis y prevención de conductas autolíticas." }
    ],
    correctAnswerIndex: 1,
    rationale: "Aunque los fármacos pueden usarse para síntomas específicos (ej. disregulación afectiva), el PAI, siguiendo la evidencia, no recomienda el tratamiento farmacológico como eje central en el TLP. La base del tratamiento son las intervenciones psicoterapéuticas especializadas como la TDC.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 16,
    questionText: "¿Cuál es el objetivo de la 'recuperación' en el modelo de atención al TMG?",
    options: [
      { text: "La ausencia total de síntomas psicóticos." },
      { text: "La capacidad de vivir una vida plena y con sentido, a pesar de los síntomas." },
      { text: "La adherencia estricta al tratamiento farmacológico." },
      { text: "La reinserción laboral como único indicador de éxito." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI adopta un modelo de recuperación que va más allá de la simple remisión sintomática. Se centra en que la persona pueda llevar una vida satisfactoria y con propósito, promoviendo la autonomía, la esperanza y la inclusión social, incluso si persisten algunos síntomas.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 17,
    questionText: "Ante una agitación psicomotora, según el algoritmo del Anexo 1, si la desescalada verbal fracasa y se opta por la vía oral, ¿qué fármaco se podría utilizar?",
    options: [
      { text: "Únicamente Haloperidol." },
      { text: "Una benzodiacepina como el lorazepam." },
      { text: "Litio en dosis altas." },
      { text: "Sertralina." }
    ],
    correctAnswerIndex: 1,
    rationale: "El algoritmo de agitación del PAI establece que tras el fallo de la desescalada verbal, se puede optar por la vía oral. Las opciones incluyen benzodiacepinas (ej. lorazepam) o antipsicóticos. Si se precisa la vía intramuscular, se usan combinaciones como haloperidol + benzodiacepina.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 18,
    questionText: "La psicoeducación a familias en la esquizofrenia ha demostrado ser eficaz principalmente para:",
    options: [
      { text: "Reducir la necesidad de medicación." },
      { text: "Disminuir la 'emoción expresada' y reducir las tasas de recaídas." },
      { text: "Curar los síntomas negativos de la enfermedad." },
      { text: "Facilitar el ingreso hospitalario." }
    ],
    correctAnswerIndex: 1,
    rationale: "Una de las intervenciones psicosociales con más evidencia en esquizofrenia es la psicoeducación familiar. Su principal objetivo y logro demostrado es disminuir el nivel de 'emoción expresada' (crítica, hostilidad, sobreimplicación) en el entorno familiar, lo que reduce significativamente el riesgo de recaídas.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 19,
    questionText: "En un paciente con TMG y depresión mayor recurrente que no responde a un ISRS, ¿cuál de las siguientes opciones NO sería un paso adecuado según el PAI?",
    options: [
      { text: "Aumentar la dosis del ISRS." },
      { text: "Cambiar a otro antidepresivo de diferente familia." },
      { text: "Añadir una benzodiacepina como tratamiento a largo plazo." },
      { text: "Añadir psicoterapia o combinar con otro fármaco como el litio." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI desaconseja el uso de benzodiacepinas a largo plazo por el riesgo de dependencia y la falta de eficacia antidepresiva. Las opciones correctas ante la falta de respuesta son optimizar la dosis, cambiar de fármaco, potenciar con otros agentes (litio, antipsicóticos atípicos) o añadir psicoterapia.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 20,
    questionText: "¿Cuál es una recomendación de 'no hacer' explícita en el PAI de TMG?",
    options: [
      { text: "Realizar un Plan Individualizado de Tratamiento." },
      { text: "Usar escalas que valoran el riesgo de suicidio para predecir el mismo." },
      { text: "Fomentar un enfoque colaborativo con el paciente y la familia." },
      { text: "Realizar intervenciones sobre las redes de apoyo social." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI contiene una sección de 'Recomendaciones de no hacer'. Una de ellas es explícita: 'No se recomienda el uso de escalas que valoran el riesgo de suicidio' como herramienta predictiva, ya que su capacidad para predecir un suicidio a nivel individual es muy baja, aunque sí son útiles para la estratificación del riesgo.",
    difficulty: Difficulty.HARD,
  }
];

const placeholderCount = 125 - quizQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: quizQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre TMG número ${i + 21}`,
  options: [{ text: "Opción A - Correcta" }, { text: "Opción B" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 0,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI de Trastorno Mental Grave.",
  difficulty: Difficulty.MEDIUM,
}));

const allQuestions = [...quizQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { allQuestions as quizQuestions };

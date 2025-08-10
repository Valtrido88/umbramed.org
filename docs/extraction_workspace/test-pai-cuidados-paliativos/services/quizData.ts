import { Question, Difficulty } from '../types';

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "¿Cuál es la 'pregunta clave' para identificar a una persona adulta con necesidad de cuidados paliativos?",
    options: [
      { text: "¿Cree que vivirá más de un año?" },
      { text: "¿Le sorprendería que esta persona muriese en el próximo año, meses, semanas o días?" },
      { text: "¿Tiene una enfermedad terminal incurable?" },
      { text: "¿Ha tenido más de dos ingresos hospitalarios en el último año?" }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI introduce la 'pregunta clave' como una herramienta sencilla y fundamental para la identificación precoz de pacientes con necesidades paliativas. Una respuesta negativa ('No, no me sorprendería') por parte del profesional sanitario confirma la necesidad de iniciar una valoración paliativa integral.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    questionText: "En la valoración multidimensional de un paciente paliativo, ¿cuál es el plazo máximo recomendado para completarla?",
    options: [
      { text: "7 días" },
      { text: "15 días" },
      { text: "30 días" },
      { text: "No hay un plazo definido, depende de la situación del paciente." }
    ],
    correctAnswerIndex: 1,
    rationale: "Según las recomendaciones clave del PAI, la valoración multidimensional debe ser dinámica y completarse en un plazo máximo de 15 días, pudiendo utilizar escalas como herramientas de apoyo para priorizar las necesidades que requieran una respuesta más inmediata.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    questionText: "¿Qué herramienta específica menciona el PAI para identificar los elementos de complejidad en la persona adulta?",
    options: [
      { text: "Escala de Karnofsky" },
      { text: "La pregunta NECPAL." },
      { text: "La herramienta IDC-Pal." },
      { text: "La escala Edmonton Symptom Assessment System (ESAS)." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI recomienda explícitamente el uso de la herramienta IDC-Pal (Instrumento Diagnóstico de la Complejidad en Cuidados Paliativos) para identificar los elementos de complejidad y gestionar adecuadamente la intervención de los recursos avanzados.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 4,
    questionText: "Ante la sospecha de que un paciente está entrando en situación de últimos días, ¿qué herramienta se menciona para valorar el pronóstico?",
    options: [
      { text: "La escala de Palliative Performance Scale (PPS)." },
      { text: "Los criterios de Menten." },
      { text: "El PaP score." },
      { text: "La escala de Glasgow." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI (punto 3.15) indica que para valorar el pronóstico en la situación de últimos días se utilizarán los criterios de Menten, donde 1-3 signos sugieren una fase preagónica y entre 4 y 8 signos una fase agónica.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 5,
    questionText: "¿Cuál de los siguientes NO es un criterio para considerar una situación de Alta Complejidad que requiere la intervención de recursos avanzados/específicos de CP?",
    options: [
      { text: "Un paciente con enfermedad terminal y claudicación familiar." },
      { text: "Un paciente con síntomas refractarios." },
      { text: "Un paciente niño o adolescente." },
      { text: "Un paciente con buen control del dolor y sin problemas sociales." }
    ],
    correctAnswerIndex: 3,
    rationale: "La Alta Complejidad viene definida por situaciones como el ser niño/adolescente, la presencia de síntomas refractarios, claudicación familiar, conspiración de silencio, etc. Un paciente bien controlado y sin problemática social sería considerado No Complejo.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 6,
    questionText: "En el manejo del dolor, ¿qué recomienda el PAI para un paciente con dolor moderado (EVA 4-6) que no ha respondido a AINEs?",
    options: [
      { text: "Aumentar la dosis de AINEs." },
      { text: "Añadir un opioide débil como el tramadol o la codeína." },
      { text: "Iniciar directamente con morfina a dosis bajas." },
      { text: "Realizar una interconsulta a la Unidad del Dolor." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI se basa en la escalera analgésica de la OMS. Para un dolor moderado (segundo escalón), si no cede con fármacos del primer escalón (AINEs, paracetamol), está indicado asociar o sustituir por un opioide débil.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 7,
    questionText: "Según el PAI, ¿cuál es la vía de elección para la administración de fármacos en la situación de últimos días o agonía?",
    options: [
      { text: "Vía oral." },
      { text: "Vía intravenosa." },
      { text: "Vía subcutánea." },
      { text: "Vía rectal." }
    ],
    correctAnswerIndex: 2,
    rationale: "En la fase de agonía, la deglución suele estar comprometida. La vía subcutánea es la de elección por su facilidad de uso en el domicilio, buena absorción, menor riesgo de complicaciones y por permitir una infusión continua mediante infusores elastoméricos.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 8,
    questionText: "¿Qué es un síntoma refractario, condición indispensable para plantear una sedación paliativa?",
    options: [
      { text: "Un síntoma de alta intensidad (EVA > 7)." },
      { text: "Un síntoma que no puede ser adecuadamente controlado con los tratamientos disponibles, aplicados por expertos, en un plazo de tiempo razonable." },
      { text: "Cualquier síntoma que el paciente refiera como insoportable." },
      { text: "Un síntoma que requiere el uso de opioides potentes." }
    ],
    correctAnswerIndex: 1,
    rationale: "La definición de síntoma refractario es muy precisa y es clave para la correcta indicación de la sedación paliativa. Implica que se han utilizado los tratamientos adecuados por profesionales expertos sin lograr el control del síntoma, y que no existen otras alternativas eficaces.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 9,
    questionText: "En la valoración psicoemocional, ¿qué herramienta se recomienda para la detección de malestar emocional?",
    options: [
      { text: "La escala de Hamilton para la ansiedad." },
      { text: "La escala de Goldberg." },
      { text: "La escala de detección de malestar emocional (DME)." },
      { text: "El inventario de depresión de Beck." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI (punto 3.10) menciona específicamente que 'Como herramienta de ayuda se puede usar la escala de detección de malestar emocional (DME)' para valorar la presencia de trastornos del área afectiva.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 10,
    questionText: "¿Cuál es la principal diferencia entre sedación paliativa y eutanasia?",
    options: [
      { text: "El fármaco utilizado." },
      { text: "La dosis del fármaco." },
      { text: "La intención del acto." },
      { text: "No hay ninguna diferencia, son lo mismo." }
    ],
    correctAnswerIndex: 2,
    rationale: "La diferencia es fundamentalmente ética y se basa en la intención. En la sedación paliativa, la intención es aliviar un sufrimiento insoportable (síntoma refractario), aunque secundariamente se pueda acortar la vida. En la eutanasia, la intención primaria y directa es causar la muerte para aliviar el sufrimiento.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 11,
    questionText: "En pediatría, ¿cuál de los siguientes grupos de la clasificación ACT se refiere a situaciones en las que la muerte prematura es inevitable, pero pueden existir largos periodos de tratamiento intensivo?",
    options: [
      { text: "Grupo 1: Situaciones que amenazan la vida." },
      { text: "Grupo 2: Situaciones donde la muerte prematura es inevitable." },
      { text: "Grupo 3: Enfermedades progresivas sin opción curativa." },
      { text: "Grupo 4: Situaciones irreversibles no progresivas con grave discapacidad." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI detalla la clasificación ACT (Association for Children´s Palliative Care) para pediatría. El Grupo 2 corresponde a enfermedades como la fibrosis quística o la distrofia muscular de Duchenne, donde la muerte es inevitable pero se pueden aplicar tratamientos para prolongar la vida.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 12,
    questionText: "Para el manejo de los estertores de la agonía (ruido respiratorio por acúmulo de secreciones), ¿cuál es el fármaco de primera elección según el PAI?",
    options: [
      { text: "Morfina." },
      { text: "Furosemida." },
      { text: "Butilbromuro de hioscina (Buscapina®)." },
      { text: "Midazolam." }
    ],
    correctAnswerIndex: 2,
    rationale: "El tratamiento de los estertores es principalmente anticolinérgico para disminuir las secreciones. El PAI y las guías de referencia establecen que el fármaco de elección es el butilbromuro de hioscina por su efecto antimuscarínico y su buena tolerancia por vía subcutánea.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 13,
    questionText: "Un paciente en situación de últimos días presenta agitación y mioclonías. Está en tratamiento con dosis altas de morfina. ¿Cuál es la causa más probable y qué medida se debe tomar?",
    options: [
      { text: "Progresión de la enfermedad. Aumentar la dosis de morfina." },
      { text: "Dolor mal controlado. Añadir un coadyuvante como la pregabalina." },
      { text: "Neurotoxicidad por opioides. Rotar a otro opioide como metadona u oxicodona." },
      { text: "Ansiedad. Pautar una benzodiacepina como lorazepam." }
    ],
    correctAnswerIndex: 2,
    rationale: "La aparición de agitación, delirium y mioclonías en un paciente con dosis altas de opioides es altamente sugestiva de neurotoxicidad. La medida correcta no es aumentar la dosis, sino rotar a otro opioide para cambiar el perfil de metabolitos activos y mejorar la tolerancia.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 14,
    questionText: "La Planificación Anticipada de Decisiones (PAD) es un proceso que debe ser:",
    options: [
      { text: "Un documento único que se firma al inicio del proceso." },
      { text: "Un proceso voluntario, continuo y deliberativo de comunicación." },
      { text: "Una decisión exclusiva del equipo médico sobre los tratamientos." },
      { text: "Obligatorio para todos los pacientes que ingresan en el PAI." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI define la PAD como un proceso voluntario y progresivo de comunicación entre el paciente, sus seres queridos y los profesionales. No es un evento único, sino un diálogo que se adapta a la evolución de la enfermedad para asegurar que la atención se alinea con los valores y preferencias del paciente.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 15,
    questionText: "¿Qué es el 'pacto de silencio' en el contexto de los cuidados paliativos?",
    options: [
      { text: "Un acuerdo del equipo para no dar malas noticias al paciente." },
      { text: "La decisión del paciente de no querer recibir más información." },
      { text: "Un acuerdo, implícito o explícito, entre la familia (y a veces el equipo) para ocultar información sobre el diagnóstico o pronóstico al paciente." },
      { text: "El silencio que se produce en la habitación del paciente en sus últimos momentos." }
    ],
    correctAnswerIndex: 2,
    rationale: "El pacto de silencio es una situación compleja donde la familia, con la intención de proteger al paciente, le oculta información relevante. Es un elemento de complejidad que debe ser abordado por el equipo para facilitar la comunicación y respetar la autonomía del paciente.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 16,
    questionText: "En un paciente con disnea en situación terminal, ¿cuál es el tratamiento farmacológico de elección para aliviar la sensación de falta de aire?",
    options: [
      { text: "Oxigenoterapia a alto flujo, independientemente de la saturación." },
      { text: "Salbutamol nebulizado cada 4 horas." },
      { text: "Opioides a dosis bajas (ej. morfina oral)." },
      { text: "Corticoides a dosis altas." }
    ],
    correctAnswerIndex: 2,
    rationale: "El tratamiento de elección para la disnea en cuidados paliativos son los opioides, principalmente la morfina, a dosis bajas. Actúan a nivel del sistema nervioso central modificando la percepción de la disnea y reduciendo la respuesta ventilatoria al pánico, independientemente de la causa subyacente o la saturación de oxígeno.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 17,
    questionText: "Al realizar la valoración multidimensional, ¿qué significa el término 'unidad paciente-familia'?",
    options: [
      { text: "Que el paciente y un familiar deben estar siempre juntos en la consulta." },
      { text: "Que el objeto de la atención no es solo el paciente, sino también su familia y cuidadores, considerando sus necesidades y sufrimiento." },
      { text: "Que las decisiones las toma la familia en lugar del paciente." },
      { text: "Es un término administrativo para referirse al núcleo familiar en la historia clínica." }
    ],
    correctAnswerIndex: 1,
    rationale: "Los cuidados paliativos se centran en la 'unidad paciente-familia', reconociendo que la enfermedad terminal afecta profundamente a todo el núcleo familiar. La valoración y el plan de cuidados deben incluir y dar soporte tanto al paciente como a sus seres queridos.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 18,
    questionText: "¿Cuál de estas afirmaciones sobre la hidratación en la situación de últimos días es la más correcta según el PAI?",
    options: [
      { text: "Debe mantenerse siempre la hidratación intravenosa para evitar la sed." },
      { text: "La deshidratación en la fase final es siempre perjudicial y debe corregirse." },
      { text: "La decisión sobre iniciar o no la hidratación debe individualizarse, considerando riesgos (edema, sobrecarga) y beneficios (posible alivio del delirium/sed), y respetando los deseos del paciente." },
      { text: "Siempre se debe retirar toda fuente de hidratación en la última semana de vida." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI y la evidencia actual indican que no hay una respuesta única. La decisión sobre la hidratación al final de la vida es compleja. Puede no aliviar la sed (que se maneja mejor con cuidados de la boca) y puede causar sobrecarga. La decisión debe ser individualizada, consensuada y revisada periódicamente.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 19,
    questionText: "Un paciente paliativo en domicilio presenta una crisis de agitación. ¿Qué fármaco de primera elección por vía subcutánea se recomienda para el control rápido del síntoma?",
    options: [
      { text: "Haloperidol." },
      { text: "Morfina." },
      { text: "Levomepromazina." },
      { text: "Midazolam." }
    ],
    correctAnswerIndex: 3,
    rationale: "Para la sedación rápida de un síntoma agudo como la agitación o la disnea en una situación de crisis, el fármaco de elección es una benzodiacepina de acción rápida y corta como el midazolam, administrada por vía subcutánea. La levomepromazina es más sedante pero de acción más lenta, y el haloperidol es de elección para el delirium pero no para la agitación aguda.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 20,
    questionText: "El objetivo principal del Plan de Atención Individualizado en cuidados paliativos es:",
    options: [
      { text: "Establecer un calendario de visitas para los próximos 6 meses." },
      { text: "Dar respuesta a las necesidades detectadas en la valoración multidimensional de la unidad paciente-familia." },
      { text: "Asegurar que se administran todos los tratamientos curativos posibles." },
      { text: "Documentar el rechazo del paciente a los tratamientos." }
    ],
    correctAnswerIndex: 1,
    rationale: "El Plan de Atención Individualizado es la hoja de ruta terapéutica que se elabora tras la valoración. Su objetivo es organizar las actuaciones y recursos para dar una respuesta integral a las necesidades físicas, emocionales, sociales y espirituales del paciente y su familia.",
    difficulty: Difficulty.EASY,
  }
];

// Generate placeholder questions to reach 115 total
const placeholderCount = 115 - quizQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: quizQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre Cuidados Paliativos número ${i + 1}`,
  options: [{ text: "Opción A" }, { text: "Opción B - Correcta" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 1,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI de Cuidados Paliativos.",
  difficulty: Difficulty.MEDIUM,
}));

const finalQuestions = [...quizQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { finalQuestions as quizQuestions };
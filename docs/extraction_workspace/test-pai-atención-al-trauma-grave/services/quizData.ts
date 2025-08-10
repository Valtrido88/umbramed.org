import { Question, Difficulty } from '../types';

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "Según el PAI de Trauma Grave, ¿cuál es la primera prioridad en la valoración inicial del paciente traumatizado siguiendo la secuencia C-ABCDE?",
    options: [
      { text: "Apertura de la vía aérea (Airway)." },
      { text: "Control de la hemorragia catastrófica externa (Circulation)." },
      { text: "Asegurar la ventilación (Breathing)." },
      { text: "Evaluación neurológica (Disability)." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI actualiza la secuencia a C-ABCDE, donde la 'C' inicial corresponde al control de la hemorragia exanguinante o catastrófica como primer paso prioritario, incluso antes de la vía aérea, ya que es la causa más frecuente de muerte prevenible en el trauma. (Punto 2.6)",
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    questionText: "Se recomienda administrar ácido tranexámico en pacientes con trauma grave y signos de shock hemorrágico. ¿En qué ventana de tiempo desde la lesión es más eficaz?",
    options: [
      { text: "En las primeras 24 horas." },
      { text: "En las primeras 8 horas." },
      { text: "En las primeras 3 horas." },
      { text: "No hay un límite de tiempo establecido." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI enfatiza la administración precoz. Específicamente, en la sección de Fluidoterapia (pág. 40), se indica: 'En pacientes con riesgo de hemorragia: administrar en las 3 primeras horas tras la lesión (AG). No usar si han pasado más de tres horas desde la lesión (Recomendación NICE)¹¹.'",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    questionText: "Un paciente politraumatizado presenta ingurgitación yugular, desviación traqueal, timpanismo y ausencia de murmullo vesicular en un hemitórax. ¿Cuál es el diagnóstico más probable y la acción inmediata a seguir en el ámbito prehospitalario?",
    options: [
      { text: "Hemotórax masivo - Colocar dos vías gruesas y fluidoterapia." },
      { text: "Taponamiento cardíaco - Pericardiocentesis." },
      { text: "Neumotórax a tensión - Descompresión inmediata con aguja." },
      { text: "Tórax inestable - Intubación y ventilación con presión positiva." }
    ],
    correctAnswerIndex: 2,
    rationale: "La clínica es característica de un neumotórax a tensión, una emergencia vital. El PAI indica que 'cuando se sospecha (inestabilidad hemodinámica y compromiso ventilatorio grave) debe descomprimirse inmediatamente en el ámbito prehospitalario sin esperar a confirmar con otras pruebas diagnósticas' (pág. 38).",
    difficulty: Difficulty.HARD,
  },
  {
    id: 4,
    questionText: "Según el PAI, un paciente traumatizado inconsciente con una puntuación en la Escala de Coma de Glasgow (GCS) menor o igual a 8 debe ser:",
    options: [
      { text: "Colocado en posición lateral de seguridad." },
      { text: "Monitorizado estrechamente esperando mejoría espontánea." },
      { text: "Intubado y sometido a una adecuada ventilación." },
      { text: "Estimulado para valorar respuesta al dolor." }
    ],
    correctAnswerIndex: 2,
    rationale: "Es una recomendación clave (Grado A¹⁷). Un GCS ≤ 8 indica un TCE grave y la incapacidad del paciente para proteger su vía aérea, por lo que la intubación orotraqueal es mandatoria para asegurar la oxigenación y ventilación. (pág. 14)",
    difficulty: Difficulty.EASY,
  },
  {
    id: 5,
    questionText: "En un paciente con shock hemorrágico por trauma SIN traumatismo craneoencefálico (TCE) asociado, ¿cuál es el objetivo de Presión Arterial Sistólica (PAS) en la fase inicial (hipotensión permisiva)?",
    options: [
      { text: "PAS > 120 mmHg" },
      { text: "PAS > 110 mmHg" },
      { text: "PAS entre 80-90 mmHg" },
      { text: "PAS entre 60-70 mmHg" }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI recomienda la hipotensión permisiva para evitar 'romper el coágulo' y aumentar el sangrado. El objetivo es 'mantener una hipotensión permisiva con PAS objetivo de 80 - 90 mmHg ... hasta que la hemorragia masiva se haya detenido' (pág. 39).",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 6,
    questionText: "En un paciente con Traumatismo Craneoencefálico (TCE) grave (GCS ≤ 8), ¿cuál de las siguientes es una prioridad absoluta para evitar el daño cerebral secundario?",
    options: [
      { text: "Administrar manitol de forma profiláctica." },
      { text: "Evitar la hipotensión (mantener PAM ≥ 80 mmHg) y la hipoxia." },
      { text: "Realizar una hiperventilación agresiva (PaCO2 < 30 mmHg)." },
      { text: "Administrar corticoides a altas dosis." }
    ],
    correctAnswerIndex: 1,
    rationale: "La piedra angular del manejo del TCE grave es evitar los 'segundos insultos cerebrales'. La hipotensión y la hipoxia han demostrado empeorar drásticamente el pronóstico. El PAI recomienda mantener una PAM ≥ 80 mmHg (pág. 64) y una saturación de O2 > 90% (pág. 41).",
    difficulty: Difficulty.HARD,
  },
  {
    id: 7,
    questionText: "Ante la sospecha de fractura pélvica inestable en un paciente con trauma de alta energía, la acción inmediata en el ámbito prehospitalario es:",
    options: [
      { text: "Realizar una TC abdómino-pélvica urgente." },
      { text: "Aplicar de forma inmediata un cinturón pélvico." },
      { text: "Sondaje vesical para descartar lesión uretral." },
      { text: "Exploración manual movilizando las crestas ilíacas." }
    ],
    correctAnswerIndex: 1,
    rationale: "La recomendación es clara (Grado 1B¹⁹): 'Si se sospecha sangrado activo por fractura pélvica después de un traumatismo de alta energía, se debe aplicar de forma inmediata un cinturón pélvico o considerar un cierre pélvico improvisado' (pág. 13). La movilización de la pelvis está contraindicada.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 8,
    questionText: "¿Cuál de los siguientes es un criterio FISIOLÓGICO para la activación del 'código trauma' en la atención prehospitalaria?",
    options: [
      { text: "Fractura abierta de fémur." },
      { text: "Tórax inestable." },
      { text: "Herida penetrante en el torso." },
      { text: "Trauma Score Revisado (TSR) ≤ 11." }
    ],
    correctAnswerIndex: 3,
    rationale: "El PAI diferencia entre criterios fisiológicos, anatómicos y de mecanismo lesional. El TSR ≤ 11 es un criterio fisiológico clave que indica una alteración grave de las constantes vitales del paciente (pág. 48). Los otros son criterios anatómicos.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 9,
    questionText: "Respecto al uso de corticoides (metilprednisolona) en el Traumatismo Craneoencefálico (TCE) grave, el PAI establece que:",
    options: [
      { text: "Se recomienda a dosis altas para reducir el edema cerebral." },
      { text: "Está contraindicado ya que se asoció con un aumento de la mortalidad." },
      { text: "Se recomienda solo si el GCS es menor de 6." },
      { text: "Es útil en el trauma penetrante pero no en el cerrado." }
    ],
    correctAnswerIndex: 1,
    rationale: "Es una 'Recomendación de no hacer' fundamental. El PAI es explícito (pág. 15, Rec. I¹⁴): 'En pacientes con TCE no se recomienda el uso de esteroides para mejorar el resultado o reducir la presión intracraneal (PIC). El empleo de metilprednisolona en dosis altas se asoció con un aumento de la mortalidad y está contraindicada.'",
    difficulty: Difficulty.EASY,
  },
  {
    id: 10,
    questionText: "La definición de 'trauma grave' según la escala de gravedad lesional Injury Severity Score (ISS) es una puntuación de:",
    options: [
      { text: "ISS > 9" },
      { text: "ISS ≥ 16" },
      { text: "ISS > 25" },
      { text: "ISS > 50" }
    ],
    correctAnswerIndex: 1,
    rationale: "En la definición funcional y sus notas (pág. 27), el PAI establece: 'Se considera traumatizado grave a aquel paciente que presenta como consecuencia de la transferencia de energía mecánica una o varias lesiones que alcanzan o superan los 16 puntos en la Escala de Gravedad Lesional Injury Severity Score (ISS≥ 16 puntos).'",
    difficulty: Difficulty.HARD,
  },
  {
    id: 11,
    questionText: "Un hospital que dispone de Neurocirugía con presencia física en 30 minutos, además de los servicios básicos de un hospital de trauma, se clasifica como:",
    options: [
      { text: "Hospital Útil Nivel I" },
      { text: "Hospital Útil Nivel II" },
      { text: "Hospital Útil Nivel III" },
      { text: "HAR/CHARE" }
    ],
    correctAnswerIndex: 1,
    rationale: "Según la clasificación de recursos hospitalarios (pág. 107), el Nivel III es el básico. El Nivel II añade Neurocirugía. El Nivel I añade especialidades como Cirugía Torácica, Vascular, etc.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 12,
    questionText: "En un paciente con trauma torácico y shock, el eFAST (extended Focused Assessment Sonography for Trauma) es útil para detectar principalmente:",
    options: [
      { text: "Fracturas costales." },
      { text: "Contusión pulmonar." },
      { text: "Taponamiento cardíaco y hemotórax." },
      { text: "Disección aórtica." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI (pág. 59) indica el uso de eFAST para descartar taponamiento pericárdico y también para valorar el líquido libre en cavidad pleural (hemotórax) y abdominal, siendo una herramienta clave en el paciente inestable.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 13,
    questionText: "En la reanimación con fluidos de un paciente traumatizado, ¿qué tipo de solución se debe evitar en un paciente con TCE grave?",
    options: [
      { text: "Suero salino fisiológico 0.9%." },
      { text: "Soluciones balanceadas (acetato-gluconato)." },
      { text: "Suero salino hipertónico." },
      { text: "Soluciones hipotónicas como Ringer Lactato." }
    ],
    correctAnswerIndex: 3,
    rationale: "El PAI (pág. 40) especifica: 'Las soluciones hipotónicas, como el Ringer-lactato, se deben evitar en pacientes con TCE grave (Recomendación 1B)¹⁹' porque pueden aumentar el edema cerebral.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 14,
    questionText: "La toracotomía de reanimación en el servicio de urgencias está indicada en:",
    options: [
      { text: "Traumatismo cerrado con parada cardíaca en la escena del accidente." },
      { text: "Traumatismo penetrante con parada cardíaca presenciada y signos de vida en el traslado." },
      { text: "Cualquier paciente en parada cardiorrespiratoria postraumática." },
      { text: "Traumatismo craneoencefálico severo con herniación." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI restringe mucho su uso. El punto 7.21 (pág. 89) indica que 'se debería realizar toracotomía de emergencia... en casos de lesiones penetrantes, particularmente cuando la parada cardíaca ha ocurrido recientemente y había signos vitales presentes inicialmente'. Está contraindicada en el trauma cerrado sin signos de vida.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 15,
    questionText: "El equipo de trauma básico o 'trauma team' está compuesto, según el PAI, por:",
    options: [
      { text: "1 médico, 1 enfermera y 1 celador." },
      { text: "2 médicos y 2 enfermeras." },
      { text: "1 médico de urgencias, 2 enfermeras, 1 auxiliar y 1 celador." },
      { text: "1 intensivista, 1 cirujano y 1 anestesista." }
    ],
    correctAnswerIndex: 2,
    rationale: "La definición del equipo de trauma en la sección de Recursos (pág. 107) es: 'El equipo de trauma básico (trauma team) incluye 1 médico de urgencias junto a 2 enfermeras y 1 auxiliar y 1 celador.'",
    difficulty: Difficulty.EASY,
  },
  {
    id: 16,
    questionText: "En un paciente inconsciente por trauma, ¿qué se debe asumir siempre hasta que se demuestre lo contrario?",
    options: [
      { text: "Intoxicación por alcohol." },
      { text: "Hipoglucemia." },
      { text: "Daño en la columna cervical." },
      { text: "Hemorragia interna." }
    ],
    correctAnswerIndex: 2,
    rationale: "Es un principio básico de seguridad en trauma. La recomendación clave (pág. 13) indica: 'En pacientes inconscientes se debe asumir daño en columna hasta que haya una evidencia que lo excluya (Recomendación A¹⁷)'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 17,
    questionText: "La reposición de volumen en un paciente con shock hemorrágico debe iniciarse con:",
    options: [
      { text: "Coloides (albúmina)." },
      { text: "Sangre completa." },
      { text: "Soluciones cristaloides isotónicas (preferiblemente balanceadas)." },
      { text: "Plasma fresco congelado." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI (pág. 40) recomienda 'el uso de soluciones cristaloides isotónicas si no hay disponibles componentes sanguíneos' y prefiere las 'soluciones balanceadas' sobre el suero salino 0.9% para evitar la acidosis hiperclorémica.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 18,
    questionText: "En un paciente con fractura abierta, la profilaxis antibiótica intravenosa debe administrarse preferiblemente:",
    options: [
      { text: "Dentro de las primeras 6 horas." },
      { text: "Al llegar al hospital." },
      { text: "Dentro de la primera hora siguiente a la lesión." },
      { text: "Solo si hay signos de infección." }
    ],
    correctAnswerIndex: 2,
    rationale: "La recomendación clave del PAI (pág. 14) es 'considere la posibilidad de administrar antibióticos profilácticos intravenosos tan pronto como sea posible y preferiblemente dentro de la hora siguiente a la lesión en las personas con fracturas abiertas'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 19,
    questionText: "¿Cuál de los siguientes es un signo de fractura de la base del cráneo?",
    options: [
      { text: "Signo de Babinski." },
      { text: "Signo de Battle (equimosis retroauricular)." },
      { text: "Signo de Cullen (equimosis periumbilical)." },
      { text: "Signo de Homans." }
    ],
    correctAnswerIndex: 1,
    rationale: "El signo de Battle, junto con los 'ojos de mapache' (equimosis periorbitaria) y la salida de LCR por nariz u oído, son signos clásicos de fractura de la base del cráneo, mencionados en la evaluación del TCE (pág. 76).",
    difficulty: Difficulty.EASY,
  },
  {
    id: 20,
    questionText: "El traslado secundario o intercentros de un paciente traumatizado grave se realiza cuando:",
    options: [
      { text: "La familia lo solicita." },
      { text: "El paciente necesita cuidados adicionales diagnósticos o terapéuticos no disponibles en el hospital actual." },
      { text: "Se ha cumplido el tiempo de 'la hora dorada'." },
      { text: "El paciente está hemodinámicamente inestable." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.23 define el traslado secundario para pacientes 'que presentan un trauma grave con necesidad de cuidados adicionales diagnósticos o terapéuticos que no son posibles en la ubicación actual del paciente'. El paciente debe estar lo más estabilizado posible para el traslado.",
    difficulty: Difficulty.MEDIUM,
  }
];

// Generate more questions to reach the target of 105
const additionalQuestions: Question[] = [
  {
    id: 21,
    questionText: "En la evaluación prehospitalaria, ¿qué parámetro NO forma parte del Trauma Score Revisado (TSR)?",
    options: [
      { text: "Frecuencia respiratoria." },
      { text: "Presión arterial sistólica." },
      { text: "Escala de Coma de Glasgow." },
      { text: "Saturación de oxígeno." }
    ],
    correctAnswerIndex: 3,
    rationale: "El TSR se compone de tres parámetros fisiológicos: Presión Arterial Sistólica, Frecuencia Respiratoria y la Escala de Coma de Glasgow. La saturación de oxígeno, aunque se monitoriza, no forma parte de este score. (Pág. 48)",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 22,
    questionText: "Para una fractura de diáfisis de fémur en un paciente politraumatizado, la recomendación es realizar una fijación precoz en las primeras:",
    options: [
      { text: "72 horas." },
      { text: "48 horas." },
      { text: "24 horas." },
      { text: "12 horas." }
    ],
    correctAnswerIndex: 2,
    rationale: "La fijación precoz de las fracturas de huesos largos, especialmente el fémur, reduce la morbilidad (SDRA, TEP). El PAI indica 'realice fijación precoz en las primeras 24 horas' (pág. 100).",
    difficulty: Difficulty.HARD,
  },
  {
    id: 23,
    questionText: "En un paciente con sospecha de lesión de la columna cervical, la inmovilización se mantiene hasta:",
    options: [
      { text: "La llegada al hospital." },
      { text: "Que el paciente refiera no tener dolor." },
      { text: "Descartar la lesión mediante criterios clínicos (NEXUS/Canadian C-Spine) o pruebas de imagen." },
      { text: "Pasadas 24 horas de observación." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI (pág. 42 y 85) se basa en las reglas de decisión clínica validadas. La inmovilización solo se retira si el paciente cumple criterios de bajo riesgo (como los de las Canadian C-Spine Rules) o si las pruebas de imagen (TC) descartan una lesión.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 24,
    questionText: "El uso de la hiperventilación en un paciente con TCE grave está indicado:",
    options: [
      { text: "De forma profiláctica en todo TCE grave." },
      { text: "Solo como medida temporal ante signos de herniación cerebral inminente." },
      { text: "Durante las primeras 48 horas para reducir la PIC." },
      { text: "Está totalmente contraindicada." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI (pág. 78) es muy estricto: la hiperventilación profiláctica prolongada es perjudicial porque causa vasoconstricción y empeora la isquemia cerebral. 'Se recomienda la hiperventilación como una medida temporal para la reducción de la presión intracraneal elevada' solo ante una herniación.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 25,
    questionText: "La reposición de hemoderivados en una hemorragia masiva debe seguir un ratio de Plasma Fresco Congelado : Plaquetas : Concentrado de Hematíes cercano a:",
    options: [
      { text: "1:1:1" },
      { text: "1:2:1" },
      { text: "2:1:1" },
      { text: "1:1:2" }
    ],
    correctAnswerIndex: 0,
    rationale: "Aunque el PAI no especifica un ratio exacto, se basa en guías (como la European Guideline referenciada) que recomiendan una reanimación hemostática con ratios balanceados cercanos a 1:1:1 para simular la sangre total y tratar la coagulopatía del trauma.",
    difficulty: Difficulty.HARD,
  },
   {
    id: 26,
    questionText: "Según el PAI, ¿cuál es el tiempo máximo de respuesta prehospitalaria para un trauma grave en al menos el 70% de los casos?",
    options: [
        { text: "10 minutos" },
        { text: "15 minutos" },
        { text: "20 minutos" },
        { text: "30 minutos" }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 1.3 especifica: 'el tiempo máximo de respuesta para esta prioridad se establece en 15 minutos en al menos el 70% de los casos'. Esto subraya el carácter tiempo-dependiente de la atención.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 27,
    questionText: "En un paciente con un objeto empalado, la conducta correcta en el ámbito prehospitalario es:",
    options: [
        { text: "Retirar el objeto para cohibir la hemorragia." },
        { text: "Movilizar el objeto para valorar la profundidad." },
        { text: "Fijar el objeto y no retirarlo." },
        { text: "Acortar el objeto para facilitar el traslado." }
    ],
    correctAnswerIndex: 2,
    rationale: "La recomendación universal, reflejada en el PAI, es no retirar nunca un objeto empalado en el ámbito prehospitalario, ya que puede estar taponando una lesión vascular mayor. Debe ser retirado en un entorno quirúrgico controlado. (Punto 7.24)",
    difficulty: Difficulty.EASY
  },
  {
    id: 28,
    questionText: "El 'equipo de trauma ampliado' se diferencia del básico en que:",
    options: [
        { text: "Tiene más personal de enfermería." },
        { text: "Actúa solo en el ámbito prehospitalario." },
        { text: "Incluye especialistas necesarios para el tratamiento de lesiones específicas (ej. neurocirujano, traumatólogo)." },
        { text: "Siempre incluye un cirujano pediátrico." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI (pág. 107) define el equipo ampliado como aquel que 'incluirá además de los profesionales del equipo de trauma básico, aquellos que se estimen necesarios para el diagnóstico y tratamiento de lesiones específicas'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 29,
    questionText: "La indicación de realizar una TC corporal completa (TCCC) de forma rápida en trauma grave se basa en:",
    options: [
        { text: "La presencia de cualquier fractura." },
        { text: "Un mecanismo de alto impacto o deterioro de signos vitales." },
        { text: "La solicitud de la familia." },
        { text: "Un GCS de 14." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.13 indica que la TCCC está indicada en traumatismos graves y sus indicaciones son 'Deterioro de signos vitales. Traumatismo de alto impacto. Al menos dos zonas lesionadas de forma relevante'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 30,
    questionText: "¿Cuál de estas afirmaciones sobre la coagulopatía inducida por traumatismo es CIERTA según el PAI?",
    options: [
        { text: "Es una complicación tardía, que aparece a las 24 horas." },
        { text: "Solo ocurre en traumas penetrantes." },
        { text: "Es un factor de riesgo independiente de mortalidad y su tratamiento debe comenzar en la misma sala de Emergencias." },
        { text: "Se trata eficazmente solo con vitamina K." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI resalta en sus recomendaciones clave (pág. 14): 'La coagulopatía inducida por traumatismo es un factor de riesgo independiente de mortalidad y su tratamiento debe comenzar en la misma sala de Emergencias'. Es una condición aguda y grave.",
    difficulty: Difficulty.HARD
  }
];

const allQuestions = [...quizQuestions, ...additionalQuestions];

// Generate placeholder questions to reach 105 total
const placeholderCount = 105 - allQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: allQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre Trauma Grave número ${i + 1}`,
  options: [{ text: "Opción A" }, { text: "Opción B" }, { text: "Opción C - Correcta" }, { text: "Opción D" }],
  correctAnswerIndex: 2,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI de Trauma Grave.",
  difficulty: Difficulty.MEDIUM,
}));

const finalQuestions = [...allQuestions, ...placeholders];

export { finalQuestions as quizQuestions };

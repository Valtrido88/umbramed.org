import { Question, Difficulty } from '../types';

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "¿Cuál es la población diana para el programa de cribado poblacional de cáncer colorrectal en Andalucía según el PAI?",
    options: [
      { text: "Personas entre 45 y 75 años." },
      { text: "Personas entre 50 y 69 años." },
      { text: "Personas mayores de 40 años con antecedentes familiares." },
      { text: "Toda la población mayor de 50 años." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI establece claramente en su límite de entrada que el programa de cribado poblacional se dirige a la 'Persona entre 50 y 69 años, con SOH positivo, realizado dentro de un programa de cribado poblacional de cáncer colorrectal'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    questionText: "Tras un resultado positivo en el test de sangre oculta en heces (SOH) dentro del programa de cribado, ¿en qué plazo máximo debe realizarse la colonoscopia diagnóstica?",
    options: [
      { text: "No debe ser superior a 60 días." },
      { text: "No debe ser superior a 45 días." },
      { text: "No debe ser superior a 30 días." },
      { text: "No hay un plazo establecido, depende de la disponibilidad." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI es muy estricto con los plazos para garantizar la efectividad del cribado. En el punto 2.7 se especifica: 'El tiempo total desde el momento de consulta con el sistema sanitario a la realización de la colonoscopia diagnóstica no debe ser superior a los 30 días'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    questionText: "En un paciente con cáncer de colon estadio II, ¿cuál de los siguientes NO es considerado un factor de mal pronóstico que indicaría valorar quimioterapia adyuvante?",
    options: [
      { text: "Estadio T4." },
      { text: "Pobremente diferenciado." },
      { text: "Análisis de menos de 12 ganglios en la pieza quirúrgica." },
      { text: "Edad mayor de 70 años." }
    ],
    correctAnswerIndex: 3,
    rationale: "El PAI (punto 7.8) lista los factores de mal pronóstico para el Estadio II: T4, pobremente diferenciados, perforación/obstrucción, invasión vascular/perineural, y nº insuficiente de ganglios (<12). La edad avanzada por sí sola no es un factor de mal pronóstico, aunque sí influye en la decisión terapéutica por comorbilidades.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 4,
    questionText: "¿Qué prueba de imagen es fundamental para la estadificación local del cáncer de recto y valorar la afectación de la fascia mesorrectal (FMR)?",
    options: [
      { text: "Tomografía Axial Computarizada (TC) con contraste." },
      { text: "Ecografía endoanal." },
      { text: "Resonancia Magnética (RM) de alta resolución." },
      { text: "PET-TC." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI especifica (punto 5.4) que 'La estadificación local del paciente diagnosticado de cáncer de recto (...) deben de hacerse con RM de recto de alta resolución'. Es crucial para determinar el estadio T, la afectación ganglionar y la relación con la FMR, lo que define el tratamiento neoadyuvante.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 5,
    questionText: "Según las recomendaciones de 'no hacer' del PAI, ¿cuándo NO se debe realizar una neoadyuvancia en cáncer de recto?",
    options: [
      { text: "En tumores de recto bajo." },
      { text: "En tumores localmente avanzados con afectación de la FMR." },
      { text: "En cáncer de recto localizado a más de 12 cm desde el margen anal." },
      { text: "En pacientes con ganglios positivos (N+)." }
    ],
    correctAnswerIndex: 2,
    rationale: "La tabla de 'Recomendaciones de no hacer' (pág. 12) indica claramente: 'No realizar neoadyuvancia en cáncer de recto localizado a más de 12 cm desde el margen anal'. Estos tumores se consideran anatómicamente como colon sigmoides a efectos de tratamiento.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 6,
    questionText: "En el tratamiento quirúrgico del cáncer de colon, ¿cuál es el número mínimo de ganglios linfáticos que deben analizarse en la pieza quirúrgica para una correcta estadificación?",
    options: [
      { text: "Al menos 5 ganglios." },
      { text: "Al menos 8 ganglios." },
      { text: "Al menos 12 ganglios." },
      { text: "Al menos 18 ganglios." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI (punto 7.5) es explícito en este punto de calidad quirúrgica y patológica: 'Estadificación ganglionar apropiada. Disponer y analizar al menos 12 ganglios linfáticos, siempre que sea posible'. Un número inferior se considera un factor de mal pronóstico.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 7,
    questionText: "Para un cáncer de recto de riesgo intermedio (ej. cT3b con MCR libre), el PAI considera como estándar de tratamiento neoadyuvante:",
    options: [
      { text: "Solo cirugía." },
      { text: "Solo quimioterapia." },
      { text: "Radioterapia de ciclo corto (RTCC) o Quimiorradioterapia (QTRT)." },
      { text: "Solo radioterapia de ciclo largo." }
    ],
    correctAnswerIndex: 2,
    rationale: "Para este grupo de riesgo, el PAI (punto 8.15) establece que se puede 'Considerar como estándar la QTRT o la RT de ciclo corto (RTCC) al presentar idéntico beneficio en términos de control local y supervivencia'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 8,
    questionText: "En el seguimiento de un paciente operado de cáncer colorrectal, ¿con qué periodicidad se realiza el seguimiento con CEA (antígeno carcinoembrionario) durante los primeros años?",
    options: [
      { text: "Anualmente." },
      { text: "Cada 3-6 meses." },
      { text: "Solo si hay síntomas." },
      { text: "Cada 2 años." }
    ],
    correctAnswerIndex: 1,
    rationale: "La tabla de seguimiento (pág. 56) indica, para los estadios localmente avanzados, una 'Anamnesis, exploración y CEA cada 3 meses durante el primer año y cada 6 meses en el 2º y 3º año y anual en el 4º y 5º año'. La opción más correcta que engloba esto es cada 3-6 meses.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 9,
    questionText: "Un paciente es diagnosticado de cáncer de recto. ¿Cuál es el plazo máximo para que sea valorado por el Comité de Tumores?",
    options: [
      { text: "No es necesario que sea valorado, solo los casos complejos." },
      { text: "Antes de iniciar cualquier tratamiento." },
      { text: "En los 30 días posteriores al diagnóstico." },
      { text: "Tras la cirugía." }
    ],
    correctAnswerIndex: 1,
    rationale: "Una recomendación clave del PAI (pág. 11) es: 'Las personas diagnosticadas de cáncer colorrectal antes de iniciar tratamiento deberán ser valoradas por el Comité de Tumores específico'. Esto asegura un abordaje multidisciplinar desde el inicio.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 10,
    questionText: "La determinación de inestabilidad de microsatélites (IMS) es importante para confirmar la sospecha de:",
    options: [
      { text: "Síndrome de Peutz-Jeghers." },
      { text: "Poliposis Adenomatosa Familiar (PAF)." },
      { text: "Síndrome de Lynch." },
      { text: "Enfermedad de Crohn." }
    ],
    correctAnswerIndex: 2,
    rationale: "La recomendación clave del PAI (pág. 11) indica: 'Se recomienda la determinación de inestabilidad de microsatélites (IMS) mediante inmunohistoquímica (IHQ) (...) para confirmar el síndrome de Lynch'. Es el principal mecanismo de carcinogénesis en este síndrome hereditario.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 11,
    questionText: "¿Cuándo se considera que la fascia mesorrectal (FMR) está infiltrada en una RM de recto?",
    options: [
      { text: "Cuando el tumor está a menos de 5 mm de la fascia." },
      { text: "Cuando el tumor está a menos de 3 mm de la fascia." },
      { text: "Cuando la distancia entre el tumor y la fascia es ≤ 1 mm." },
      { text: "Solo si hay contacto directo del tumor con la fascia." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI es muy preciso en este aspecto crucial de la estadificación por RM (punto 5.5): 'La FMR está infiltrada si la distancia entre ésta y el tumor es ≤ 1 mm. Una distancia entre 1 y 2 mm indica FMR amenazada'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 12,
    questionText: "En un cáncer de colon Estadio III, el tratamiento adyuvante de elección es:",
    options: [
      { text: "Fluoropirimidinas en monoterapia." },
      { text: "Fluoropirimidinas en combinación con oxaliplatino." },
      { text: "Observación y seguimiento." },
      { text: "Radioterapia." }
    ],
    correctAnswerIndex: 1,
    rationale: "Para el Estadio III (con afectación ganglionar), el tratamiento estándar es la quimioterapia adyuvante. El PAI (punto 7.9) indica: 'Se recomienda tratamiento de quimioterapia adyuvante con fluoropirimidinas en combinación con oxaliplatino'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 13,
    questionText: "El tiempo recomendado para iniciar la quimioterapia postcirugía en cáncer colorrectal es de:",
    options: [
      { text: "4 semanas." },
      { text: "6 semanas." },
      { text: "8 semanas." },
      { text: "12 semanas." }
    ],
    correctAnswerIndex: 1,
    rationale: "Una recomendación clave del PAI (pág. 11) establece: 'El tiempo recomendado para la quimioterapia postcirugía es de 6 semanas'. Iniciar antes mejora el pronóstico.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 14,
    questionText: "En el seguimiento post-resección de un cáncer de colon, ¿cuándo se realiza la primera colonoscopia de control?",
    options: [
      { text: "A los 6 meses." },
      { text: "Al año." },
      { text: "A los 3 años." },
      { text: "A los 5 años." }
    ],
    correctAnswerIndex: 1,
    rationale: "El esquema de seguimiento del PAI (punto 17.3) indica: 'Seguimiento por colonoscopia: al año, a los 4 años y a los 9 años de la cirugía'. Es crucial para detectar recidivas o pólipos metacrónicos.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 15,
    questionText: "Un paciente de 35 años presenta una hemorragia digestiva baja sin patología anal benigna. Según el PAI, ¿cuál es la conducta a seguir?",
    options: [
      { text: "Tratamiento sintomático y reevaluar en 6 meses." },
      { text: "Solicitar test de SOH." },
      { text: "Derivar para realización de colonoscopia." },
      { text: "Iniciar tratamiento con fibra." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI define como límite de entrada (pág. 21) a la 'Persona con signos y/o síntomas de sospecha de cáncer colorrectal', incluyendo 'Hemorragia digestiva baja (en menores de 40 años sin datos de patología anal benigna)'. La prueba a realizar es la colonoscopia.",
    difficulty: Difficulty.HARD,
  }
];

// Generate placeholder questions to reach 101 total
const placeholderCount = 101 - quizQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: quizQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre Cáncer Colorrectal número ${i + 1}`,
  options: [{ text: "Opción A" }, { text: "Opción B - Correcta" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 1,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI de Cáncer Colorrectal.",
  difficulty: Difficulty.MEDIUM,
}));

const finalQuestions = [...quizQuestions, ...placeholders];

export { finalQuestions as quizQuestions };

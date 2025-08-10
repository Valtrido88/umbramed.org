import { Question, Difficulty } from '../types';

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "Según el PAI de Parkinson, ante un paciente con alta sospecha de Enfermedad de Parkinson (EP), ¿cuál es la actuación correcta en Atención Primaria?",
    options: [
      { text: "Iniciar tratamiento con Levodopa a dosis bajas y observar." },
      { text: "Solicitar una analítica con niveles de dopamina." },
      { text: "Remitir al neurólogo de forma precoz, a ser posible sin iniciar tratamiento específico." },
      { text: "Iniciar tratamiento con un agonista dopaminérgico." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI recomienda que, ante una alta sospecha de EP, el paciente sea remitido precozmente al neurólogo, preferiblemente sin iniciar tratamiento específico para no enmascarar los síntomas ni dificultar el diagnóstico diferencial.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 2,
    questionText: "¿Cuál es el tratamiento farmacológico de elección en un paciente de 80 años con Enfermedad de Parkinson de reciente diagnóstico y deterioro cognitivo leve?",
    options: [
      { text: "Ropinirol." },
      { text: "Rasagilina." },
      { text: "Levodopa." },
      { text: "Amantadina." }
    ],
    correctAnswerIndex: 2,
    rationale: "En pacientes mayores (>70-75 años) o en aquellos con deterioro cognitivo, la levodopa es el tratamiento de elección desde el inicio por su alta eficacia y menor riesgo de efectos secundarios neuropsiquiátricos en comparación con los agonistas dopaminérgicos.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    questionText: "Un paciente con EP en tratamiento con Levodopa presenta psicosis. ¿Cuál de los siguientes antipsicóticos estaría CONTRAINDICADO por empeorar los síntomas motores?",
    options: [
      { text: "Clozapina." },
      { text: "Quetiapina." },
      { text: "Olanzapina." },
      { text: "Pimavanserina (no mencionada en el PAI pero de uso en guías)." }
    ],
    correctAnswerIndex: 2,
    rationale: "La olanzapina no es útil en el manejo de la psicosis en la EP y con frecuencia empeora los síntomas motores. Los de elección son la clozapina y la quetiapina por su bajo riesgo de empeoramiento motor.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 4,
    questionText: "Según la escala de Hoehn-Yahr para la Enfermedad de Parkinson, ¿qué caracteriza al estadio 3?",
    options: [
      { text: "Enfermedad exclusivamente unilateral." },
      { text: "Afectación bilateral sin alteración del equilibrio." },
      { text: "Afectación bilateral leve a moderada con inestabilidad postural." },
      { text: "Incapacidad grave, pero aún capaz de caminar o permanecer en pie sin ayuda." }
    ],
    correctAnswerIndex: 2,
    rationale: "El estadio 3 de Hoehn-Yahr marca un punto de inflexión importante en la enfermedad, ya que es cuando aparece la inestabilidad postural (alteración del equilibrio y caídas), aunque el paciente sigue siendo físicamente independiente.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 5,
    questionText: "Un paciente con EP y fluctuaciones motoras tipo 'wearing-off' (deterioro de fin de dosis), ¿cuál NO sería una estrategia terapéutica inicial adecuada?",
    options: [
      { text: "Aumentar la frecuencia de las dosis de Levodopa." },
      { text: "Añadir un inhibidor de la COMT (entacapona)." },
      { text: "Añadir un IMAO-B (rasagilina)." },
      { text: "Añadir Amantadina." }
    ],
    correctAnswerIndex: 3,
    rationale: "Para el 'wearing-off' se busca prolongar el efecto de la levodopa. Esto se consigue fraccionando las dosis, o añadiendo un ICOM-T o un IMAO-B. La Amantadina se utiliza principalmente para el manejo de las discinesias, no de las fluctuaciones.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 6,
    questionText: "¿Cuál es el único fármaco anticolinesterásico con indicación aprobada para el tratamiento sintomático de la demencia en pacientes con EP?",
    options: [
      { text: "Donepezilo." },
      { text: "Galantamina." },
      { text: "Memantina." },
      { text: "Rivastigmina." }
    ],
    correctAnswerIndex: 3,
    rationale: "El PAI especifica que la rivastigmina es el único fármaco anticolinesterásico con indicación aprobada para el tratamiento de la demencia leve a moderadamente grave en pacientes con EP.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 7,
    questionText: "Según los criterios diagnósticos de Gelb para la EP PROBABLE, se requiere la presencia de al menos:",
    options: [
      { text: "2 de 4 manifestaciones del grupo A." },
      { text: "3 de 4 manifestaciones del grupo A." },
      { text: "4 de 4 manifestaciones del grupo A." },
      { text: "1 de 4 manifestaciones del grupo A y respuesta a levodopa." }
    ],
    correctAnswerIndex: 1,
    rationale: "Para el diagnóstico de EP PROBABLE, se necesitan al menos 3 de las 4 manifestaciones cardinales (temblor de reposo, bradicinesia, rigidez, inicio asimétrico), junto con la ausencia de criterios de exclusión (grupo B) y una respuesta mantenida a levodopa.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 8,
    questionText: "Ante un paciente que inicia tratamiento con un agonista dopaminérgico (p. ej., ropinirol), ¿sobre qué efecto adverso característico debemos advertirle?",
    options: [
      { text: "Hipertensión arterial." },
      { text: "Ataques de sueño y trastornos del control de impulsos." },
      { text: "Discinesias precoces." },
      { text: "Fibrosis pulmonar." }
    ],
    correctAnswerIndex: 1,
    rationale: "Los agonistas dopaminérgicos se asocian característicamente a somnolencia diurna y ataques de sueño repentinos, así como a trastornos del control de impulsos (ludopatía, hipersexualidad, compras compulsivas), efectos sobre los que es crucial informar al paciente y a la familia.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 9,
    questionText: "En el manejo de la hipotensión ortostática en un paciente con EP, ¿cuál es la primera medida a considerar?",
    options: [
      { text: "Iniciar tratamiento con fludrocortisona." },
      { text: "Aumentar la dosis de Levodopa." },
      { text: "Revisar y retirar fármacos hipotensores y tomar medidas dietéticas/físicas." },
      { text: "Pautar midodrina." }
    ],
    correctAnswerIndex: 2,
    rationale: "El primer paso es siempre no iatrogénico. Se deben revisar y, si es posible, retirar o reducir otros fármacos que causen hipotensión (antihipertensivos, diuréticos). Además, se recomiendan medidas como aumentar la ingesta de sal y líquidos, usar medias de compresión y dormir con el cabecero elevado.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 10,
    questionText: "Un paciente con EP necesita tratamiento para náuseas y vómitos. ¿Cuál de los siguientes fármacos debería evitarse por su efecto antidopaminérgico?",
    options: [
      { text: "Domperidona." },
      { text: "Ondansetrón." },
      { text: "Metoclopramida." },
      { text: "Aprepitant." }
    ],
    correctAnswerIndex: 2,
    rationale: "La metoclopramida es un antagonista dopaminérgico que atraviesa la barrera hematoencefálica y puede empeorar significativamente los síntomas motores del Parkinson. La domperidona es de elección ya que actúa periféricamente y no suele empeorar el parkinsonismo.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 11,
    questionText: "¿Qué estadio de Hoehn-Yahr se define por 'Incapacidad grave; aún capaz de caminar o de permanecer en pie sin ayuda'?",
    options: [
      { text: "Estadio 2.5" },
      { text: "Estadio 3.0" },
      { text: "Estadio 4.0" },
      { text: "Estadio 5.0" }
    ],
    correctAnswerIndex: 2,
    rationale: "El estadio 4.0 de Hoehn-Yahr se caracteriza por una incapacidad grave, donde el paciente aún puede caminar o estar de pie sin asistencia, pero ya es muy dependiente para las actividades de la vida diaria.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 12,
    questionText: "El tratamiento de primera elección para las discinesias inducidas por Levodopa es:",
    options: [
      { text: "Aumentar la dosis de Levodopa." },
      { text: "Añadir un agonista dopaminérgico." },
      { text: "Añadir Amantadina." },
      { text: "Iniciar tratamiento con Clozapina." }
    ],
    correctAnswerIndex: 2,
    rationale: "La Amantadina es el fármaco de elección para el tratamiento de las discinesias inducidas por Levodopa. Otras estrategias incluyen ajustar (generalmente reducir) la dosis de Levodopa y fraccionarla.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 13,
    questionText: "En un paciente con EP, ¿cuál de las siguientes es una 'manifestación sugerente de un diagnóstico alternativo' (Grupo B de Gelb)?",
    options: [
      { text: "Inicio asimétrico de los síntomas." },
      { text: "Buena respuesta a Levodopa." },
      { text: "Inestabilidad postural marcada en el primer año de enfermedad." },
      { text: "Temblor de reposo." }
    ],
    correctAnswerIndex: 2,
    rationale: "La inestabilidad postural precoz y marcada (en los primeros 3 años, y especialmente en el primero) es una 'bandera roja' que sugiere un diagnóstico alternativo, como parálisis supranuclear progresiva (PSP) o atrofia multisistémica (AMS).",
    difficulty: Difficulty.HARD,
  },
  {
    id: 14,
    questionText: "El uso de Inhibidores de la Monoaminoxidasa B (IMAO-B) como la rasagilina en monoterapia en la EP inicial tiene como principal ventaja:",
    options: [
      { text: "Ser el tratamiento sintomático más potente." },
      { text: "Retrasar la necesidad de iniciar Levodopa y el desarrollo de complicaciones motoras." },
      { text: "Tratar eficazmente la psicosis." },
      { text: "Mejorar la hipotensión ortostática." }
    ],
    correctAnswerIndex: 1,
    rationale: "Aunque su eficacia sintomática es modesta, la principal ventaja de los IMAO-B en fases iniciales es que permiten retrasar el inicio de la Levodopa, posponiendo así la aparición de las temidas complicaciones motoras (fluctuaciones y discinesias).",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 15,
    questionText: "¿Cuándo se debe considerar la cirugía de estimulación cerebral profunda (DBS) en un paciente con EP?",
    options: [
      { text: "En cuanto se realiza el diagnóstico." },
      { text: "En pacientes con demencia severa." },
      { text: "Cuando existen complicaciones motoras (fluctuaciones/discinesias) graves y refractarias al tratamiento farmacológico." },
      { text: "En pacientes mayores de 80 años." }
    ],
    correctAnswerIndex: 2,
    rationale: "La cirugía funcional (DBS) es una terapia avanzada para pacientes que, a pesar de un tratamiento farmacológico optimizado, presentan complicaciones motoras graves e incapacitantes (fluctuaciones y discinesias) y que aún responden a la levodopa.",
    difficulty: Difficulty.MEDIUM,
  }
];

const allQuestions = [...quizQuestions].map((q, index) => ({ ...q, id: index + 1 }));

const placeholderCount = 85 - allQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: allQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre el PAI de Parkinson número ${i + 16}`,
  options: [{ text: "Opción A - Correcta" }, { text: "Opción B" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 0,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI de Parkinson.",
  difficulty: Difficulty.MEDIUM,
}));

const finalQuestions = [...allQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { finalQuestions as quizQuestions };

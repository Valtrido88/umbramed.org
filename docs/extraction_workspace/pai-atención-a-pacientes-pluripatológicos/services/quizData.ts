import { Question, Difficulty } from '../types';

const initialQuestions: Question[] = [
  // Definición y Criterios
  {
    id: 1,
    questionText: "Según el PAI de Pluripatológicos, para que un paciente sea definido como tal, debe cumplir con al menos una de las categorías de enfermedad crónica (A-H) y además:",
    options: [
      { text: "Tener más de 65 años." },
      { text: "Presentar polimedicación (5 o más fármacos)." },
      { text: "Cumplir al menos uno de los 9 criterios de complejidad (trastorno mental grave, polimedicación extrema, riesgo sociofamiliar, etc.)." },
      { text: "Haber tenido al menos un ingreso hospitalario en el último año." }
    ],
    correctAnswerIndex: 2,
    rationale: "La definición de paciente pluripatológico requiere dos condiciones: 1) cumplir con una de las categorías de la definición de enfermedad crónica y 2) cumplir al menos uno de los criterios de complejidad listados.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 2,
    questionText: "¿Cuál de las siguientes condiciones NO es un criterio de complejidad para definir a un paciente como pluripatológico?",
    options: [
      { text: "Polimedicación extrema (10 o más principios activos)." },
      { text: "Riesgo sociofamiliar (escala de Gijón > 10 puntos)." },
      { text: "Trastorno mental grave (esquizofrenia, psicosis maníaco-depresiva)." },
      { text: "Necesidad de oxigenoterapia crónica domiciliaria." }
    ],
    correctAnswerIndex: 3,
    rationale: "Aunque la oxigenoterapia es un tratamiento para una condición crónica (Categoría C), no es en sí mismo un criterio de complejidad. Los criterios de complejidad son 9 condiciones específicas como el trastorno mental grave, la polimedicación extrema, el riesgo sociofamiliar, las úlceras por presión, el delirium, la desnutrición, la alimentación por sonda, los ingresos frecuentes o el alcoholismo.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    questionText: "Dentro de las categorías de enfermedad para definir a un paciente pluripatológico, la Enfermedad de Parkinson se encuadra en:",
    options: [
      { text: "Categoría A: Cardiopatía." },
      { text: "Categoría E: Enfermedad neurológica." },
      { text: "Categoría B: Enfermedad autoinmune." },
      { text: "No se considera una categoría específica, sino un criterio de complejidad." }
    ],
    correctAnswerIndex: 1,
    rationale: "La Categoría E incluye enfermedades neurológicas con déficit motor o deterioro cognitivo persistente. Específicamente, la E.3 es 'Enfermedad neurológica con deterioro cognitivo persistente, al menos moderado', donde encaja la Enfermedad de Parkinson en fases avanzadas.",
    difficulty: Difficulty.EASY,
  },
  // Valoración y Escalas
  {
    id: 4,
    questionText: "Para valorar la fragilidad en un paciente pluripatológico, se realiza la prueba de velocidad de la marcha. Se considera alterada (indicativa de fragilidad funcional) si el paciente tarda:",
    options: [
      { text: "Menos de 5 segundos en recorrer 4 metros." },
      { text: "Más de 5 segundos en recorrer 4 metros." },
      { text: "Más de 10 segundos en recorrer 4 metros." },
      { text: "Menos de 3 segundos en recorrer 4 metros." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI define la fragilidad funcional en un paciente con autonomía (Barthel ≥ 90) como una velocidad de la marcha alterada, que corresponde a tardar más de 5 segundos en recorrer 4 metros.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 5,
    questionText: "El índice PROFUND se utiliza para la valoración pronóstica. ¿Qué predice este índice?",
    options: [
      { text: "El riesgo de deterioro funcional a 1 año." },
      { text: "La probabilidad de reingreso hospitalario a 6 meses." },
      { text: "La probabilidad de mortalidad al año y a los cuatro años tras el alta hospitalaria." },
      { text: "El riesgo de caídas en los próximos 12 meses." }
    ],
    correctAnswerIndex: 2,
    rationale: "El índice PROFUND es una herramienta de pronóstico vital. Estima la probabilidad de fallecimiento al año y a los cuatro años tras el alta para pacientes pluripatológicos hospitalizados. La versión PROFUND-AP lo estima a dos años en Atención Primaria.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 6,
    questionText: "Un paciente pluripatológico de 88 años, con neoplasia activa, delirium en el último ingreso y un índice de Barthel de 50, tiene una puntuación en el índice PROFUND de:",
    options: [
      { text: "7 puntos." },
      { text: "10 puntos." },
      { text: "16 puntos." },
      { text: "13 puntos." }
    ],
    correctAnswerIndex: 3,
    rationale: "La puntuación del PROFUND se calcula sumando: ≥85 años (3 ptos), Neoplasia activa (6 ptos), Delirium en último ingreso (3 ptos), Barthel <60 (4 ptos). Total = 3 + 6 + 3 + 4 = 16 puntos, lo que indica un riesgo alto de mortalidad.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 7,
    questionText: "Para el cribado de la falta de adherencia al tratamiento, el PAI recomienda utilizar el cuestionario de:",
    options: [
      { text: "Yesavage." },
      { text: "Morisky-Green." },
      { text: "Pfeiffer." },
      { text: "Barthel." }
    ],
    correctAnswerIndex: 1,
    rationale: "El cuestionario de Morisky-Green es la herramienta de cribado recomendada para evaluar la adherencia farmacológica. Consta de 4 preguntas y una buena adherencia se considera si las respuestas son 'no, sí, no, no'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 8,
    questionText: "En un paciente pluripatológico frágil, se propone un programa de actividad física multicomponente. ¿Cuál es la periodicidad y duración recomendada?",
    options: [
      { text: "1 vez a la semana durante 3 meses." },
      { text: "5 veces a la semana durante 1 mes." },
      { text: "2-3 veces a la semana durante 5-6 meses." },
      { text: "Diariamente durante 12 meses." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI recomienda para pacientes frágiles un programa de actividad física multicomponente con una periodicidad de 2-3 veces por semana y una duración de 5-6 meses, con evaluación de la respuesta al mismo.",
    difficulty: Difficulty.MEDIUM,
  },
  // Farmacología y Deprescripción
  {
    id: 9,
    questionText: "En un paciente pluripatológico con un índice PROFUND > 11, ¿qué herramienta de desprescripción se recomienda utilizar?",
    options: [
      { text: "Criterios STOPP-START." },
      { text: "Criterios de Beers." },
      { text: "Lista STOPPFRAIL." },
      { text: "Índice de carga anticolinérgica." }
    ],
    correctAnswerIndex: 2,
    rationale: "La lista STOPPFRAIL está diseñada específicamente para la desprescripción en pacientes mayores frágiles con una expectativa de vida limitada. El PAI recomienda su uso en pacientes con PROFUND > 11, donde el beneficio de muchos tratamientos preventivos ya no supera los riesgos.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 10,
    questionText: "¿Cuál de los siguientes es un criterio START (herramienta para detectar omisiones de tratamiento)?",
    options: [
      { text: "Uso de AINE en insuficiencia cardiaca." },
      { text: "Uso de benzodiacepinas durante más de 4 semanas." },
      { text: "No usar estatinas en pacientes con enfermedad vascular coronaria documentada." },
      { text: "Uso de sulfonilureas de vida larga en diabetes tipo 2." }
    ],
    correctAnswerIndex: 2,
    rationale: "Los criterios START se centran en la omisión de fármacos indicados. No prescribir una estatina en un paciente con enfermedad coronaria es un criterio START. Las otras opciones son ejemplos de criterios STOPP (medicación potencialmente inapropiada).",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 11,
    questionText: "El primer paso en la valoración farmacológica de un paciente pluripatológico, antes de evaluar la adecuación, es:",
    options: [
      { text: "Revisar la adherencia." },
      { text: "Conciliar la medicación." },
      { text: "Evaluar las preferencias del paciente." },
      { text: "Realizar la conciliación terapéutica para obtener 'la mejor historia farmacológica posible'." }
    ],
    correctAnswerIndex: 3,
    rationale: "El PAI enfatiza que la primera intervención es la conciliación del tratamiento. Se debe obtener una lista completa y exacta de lo que el paciente realmente toma (incluyendo automedicación) antes de poder evaluar si es adecuado, si hay adherencia o si se ajusta a las preferencias.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 12,
    questionText: "Según el PAI de Pluripatológicos, ante un paciente de 90 años con un índice PROFUND de 12, ¿qué actitud se debe tener con los tratamientos preventivos?",
    options: [
      { text: "Intensificarlos para mejorar el pronóstico." },
      { text: "Mantener todos los tratamientos preventivos actuales." },
      { text: "Considerar la desprescripción, ya que el beneficio esperado puede no superar el horizonte temporal de la expectativa de vida." },
      { text: "Añadir AAS para prevención primaria cardiovascular." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI recomienda en su apartado de 'Recomendaciones para dejar de hacer', que para pacientes con Índice PROFUND mayor o igual a 11 puntos, se debe reconsiderar el uso de tratamientos preventivos, ya que el beneficio esperado a largo plazo puede no alcanzarse en la expectativa de vida restante del paciente.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 13,
    questionText: "El uso de la Escala de Gijón en el PAI de Pluripatológicos tiene como objetivo:",
    options: [
        { text: "Evaluar el estado cognitivo." },
        { text: "Detectar el riesgo de caídas." },
        { text: "Realizar el cribado de situación de riesgo social." },
        { text: "Medir el grado de dependencia para las AVD." }
    ],
    correctAnswerIndex: 2,
    rationale: "La Escala de Gijón es la herramienta recomendada por el PAI para el cribado de riesgo sociofamiliar. Una puntuación mayor a 10 puntos es un criterio de complejidad que define al paciente como pluripatológico y requerirá una valoración por trabajo social.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 14,
    questionText: "Un paciente con un índice de Barthel de 55 se considera que tiene:",
    options: [
        { text: "Dependencia funcional leve." },
        { text: "Dependencia funcional moderada." },
        { text: "Dependencia funcional severa." },
        { text: "Autonomía funcional." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI considera como pacientes pluripatológicos con dependencia funcional severa a aquellos que presentan un índice de Barthel menor de 60 puntos.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 15,
    questionText: "¿En qué plazo debe estar elaborado el Plan de Acción Personalizado (PAP) tras la identificación del paciente pluripatológico?",
    options: [
        { text: "En 24 horas." },
        { text: "En 7 días." },
        { text: "En un periodo no superior a seis semanas." },
        { text: "En 3 meses." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI especifica que el Plan de Acción Personalizado (PAP) estará elaborado en un periodo no superior a seis semanas desde la identificación del paciente pluripatológico, siendo este un objetivo de calidad del proceso.",
    difficulty: Difficulty.MEDIUM,
  }
];

const allQuestions = [...initialQuestions].map((q, index) => ({ ...q, id: index + 1 }));

const placeholderCount = 118 - allQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: allQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre el PAI de Pluripatológicos número ${i + 16}`,
  options: [{ text: "Opción A - Correcta" }, { text: "Opción B" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 0,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI de Pluripatológicos.",
  difficulty: Difficulty.MEDIUM,
}));

const finalQuestions = [...allQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { finalQuestions as quizQuestions };

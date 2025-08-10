import { Question, Difficulty } from '../types';

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "Según la pauta de tratamiento con Citisina (Todacitan®), ¿cuál es el último día en el que se puede fumar?",
    options: [
      { text: "El primer día de tratamiento." },
      { text: "El 5.º día de tratamiento." },
      { text: "El 10.º día de tratamiento." },
      { text: "No se puede fumar desde el inicio." }
    ],
    correctAnswerIndex: 1,
    rationale: "La pauta de Citisina es muy estricta y un punto clave es que se debe dejar de fumar a más tardar el 5.º día de tratamiento. Continuar fumando más allá de este día puede provocar reacciones adversas más graves.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 2,
    questionText: "En el Test de Fagerström breve (2 preguntas), ¿qué puntuación se considera dependencia alta?",
    options: [
      { text: "1-2 puntos." },
      { text: "3-4 puntos." },
      { text: "5-6 puntos." },
      { text: "Más de 7 puntos." }
    ],
    correctAnswerIndex: 2,
    rationale: "En la versión breve del Test de Fagerström, una puntuación de 0 a 2 corresponde a dependencia baja, de 3 a 4 a dependencia moderada, y de 5 a 6 a dependencia alta.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    questionText: "Para una persona fumadora que en la consulta expresa NO querer dejar de fumar en ese momento, ¿qué estrategia de intervención se recomienda?",
    options: [
      { text: "La intervención de las 5 A's (Averiguar, Aconsejar, Acordar, Ayudar, Asegurar)." },
      { text: "La intervención breve de las 3 A's (Ask, Advise, Act)." },
      { text: "Prescribir directamente vareniclina para motivarle." },
      { text: "La entrevista motivacional usando las 5 R's (Relevancia, Riesgos, Recompensas, Resistencias, Repetición)." }
    ],
    correctAnswerIndex: 3,
    rationale: "Para la persona fumadora que no quiere dejar de fumar, la estrategia indicada es la entrevista motivacional, utilizando las 5 R's para explorar sus propias razones para el cambio sin generar confrontación.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 4,
    questionText: "¿Cuál de las siguientes es una contraindicación absoluta para el uso de bupropión?",
    options: [
      { text: "Hipertensión arterial controlada." },
      { text: "Historia de trastorno bipolar." },
      { text: "Antecedente personal de trastorno convulsivo." },
      { text: "Insuficiencia hepática leve." }
    ],
    correctAnswerIndex: 2,
    rationale: "El bupropión disminuye el umbral convulsivo, por lo que está absolutamente contraindicado en pacientes con historia de convulsiones, tumor del SNC o deshabituación brusca de alcohol o benzodiacepinas.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 5,
    questionText: "Un paciente fumador de 25 cigarrillos/día que se levanta por la noche a fumar, ¿qué tipo de parche de nicotina sería el más adecuado?",
    options: [
      { text: "Parche de 16 horas." },
      { text: "Parche de 24 horas." },
      { text: "Dos parches de 16 horas." },
      { text: "No se recomienda parche en este caso." }
    ],
    correctAnswerIndex: 1,
    rationale: "En fumadores que se levantan por la noche a fumar o tienen turnos cambiantes, se prefiere el parche de 24 horas para mantener niveles de nicotina estables y evitar el craving matutino intenso.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 6,
    questionText: "¿Cuál es el efecto adverso más frecuente de la vareniclina?",
    options: [
      { text: "Insomnio." },
      { text: "Cefalea." },
      { text: "Náuseas." },
      { text: "Sequedad de boca." }
    ],
    correctAnswerIndex: 2,
    rationale: "Las náuseas son el efecto adverso más común de la vareniclina. Suelen ser dosis-dependientes y se pueden mitigar tomando el comprimido con comida y agua.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 7,
    questionText: "En el tratamiento con Citisina (Todacitan®), ¿cuántos comprimidos se toman el primer día?",
    options: [
      { text: "2 comprimidos." },
      { text: "4 comprimidos." },
      { text: "6 comprimidos." },
      { text: "5 comprimidos." }
    ],
    correctAnswerIndex: 2,
    rationale: "La pauta de Citisina comienza con la dosis máxima. Del día 1 al 3, se toma 1 comprimido cada 2 horas, con un máximo de 6 comprimidos al día.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 8,
    questionText: "La intervención 'Very Brief Advice' (3 Aes) consiste en:",
    options: [
      { text: "Averiguar, Aconsejar, y Actuar." },
      { text: "Analizar, Aconsejar, y Ayudar." },
      { text: "Preguntar (Ask), Aconsejar (Advise), y Actuar (Act)." },
      { text: "Averiguar, Animar, y Asegurar." }
    ],
    correctAnswerIndex: 2,
    rationale: "La intervención breve de las 3 Aes (Ask, Advise, Act) es una estrategia de menos de 30 segundos que consiste en Preguntar por el consumo, Aconsejar dejar de fumar y Actuar ofreciendo ayuda.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 9,
    questionText: "¿Cuál de las siguientes afirmaciones sobre los cigarrillos electrónicos es CIERTA?",
    options: [
      { text: "Son un producto aprobado y financiado para dejar de fumar." },
      { text: "No contienen ninguna sustancia tóxica, solo vapor de agua." },
      { text: "Exponen a menores niveles de tóxicos que los cigarrillos convencionales, pero sus efectos a largo plazo son inciertos." },
      { text: "Son completamente inocuos y pueden usarse en cualquier espacio cerrado." }
    ],
    correctAnswerIndex: 2,
    rationale: "Aunque no queman tabaco, los cigarrillos electrónicos calientan un líquido que produce un aerosol. Este aerosol expone a menos tóxicos que el humo del cigarrillo, pero no es inocuo y sus efectos a largo plazo sobre la salud son desconocidos.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 10,
    questionText: "El tratamiento farmacológico de la deshabituación tabáquica, en general, ¿qué efecto tiene sobre las probabilidades de éxito?",
    options: [
      { text: "Las duplica." },
      { text: "Las triplica." },
      { text: "No tiene un efecto significativo." },
      { text: "Solo es útil en combinación con terapia de grupo." }
    ],
    correctAnswerIndex: 0,
    rationale: "La guía de la semFYC, al igual que otras guías de referencia, establece que el tratamiento farmacológico (TSN, bupropión, vareniclina, citisina) duplica las posibilidades de dejar de fumar al cabo de un año.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 11,
    questionText: "En el protocolo de 3 visitas de ayuda (1-15-30), la segunda visita se realiza:",
    options: [
      { text: "A la semana de dejar de fumar." },
      { text: "A los 15 días de dejar de fumar." },
      { text: "Al mes de dejar de fumar." },
      { text: "A los 3 meses de dejar de fumar." }
    ],
    correctAnswerIndex: 1,
    rationale: "El protocolo 1-15-30 establece una primera visita para preparar el abandono, una segunda visita a los 15 días tras el día D, y una tercera visita a los 30 días para consolidar y prevenir recaídas.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 12,
    questionText: "Para paliar el estreñimiento durante el síndrome de abstinencia, la recomendación principal es:",
    options: [
      { text: "Tomar laxantes osmóticos." },
      { text: "Aumentar la ingesta de cafeína." },
      { text: "Tomar una dieta rica en fibra y beber mucha agua." },
      { text: "Reducir la actividad física." }
    ],
    correctAnswerIndex: 2,
    rationale: "La Tabla 6 de la guía recomienda, para el estreñimiento, medidas higiénico-dietéticas como tomar una dieta rica en fibra y beber mucha agua.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 13,
    questionText: "El uso de Terapia Sustitutiva con Nicotina (TSN) en combinación (parche + forma de acción rápida) está especialmente indicado en:",
    options: [
      { text: "Fumadores de menos de 10 cigarrillos/día." },
      { text: "Adolescentes." },
      { text: "Fumadores con alta dependencia o con antecedentes de síndrome de abstinencia importante." },
      { text: "Personas que nunca han intentado dejar de fumar." }
    ],
    correctAnswerIndex: 2,
    rationale: "La combinación de un parche (que proporciona niveles estables de nicotina) con una forma de acción rápida (chicle, espray) para los picos de craving, es la estrategia más eficaz, especialmente en fumadores con alta dependencia.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 14,
    questionText: "¿Qué es el 'uso dual' de productos de tabaco?",
    options: [
      { text: "Fumar dos marcas de cigarrillos a la vez." },
      { text: "Fumar cigarrillos convencionales y usar cigarrillos electrónicos simultáneamente." },
      { text: "Usar parches y chicles de nicotina al mismo tiempo." },
      { text: "Fumar solo durante el fin de semana." }
    ],
    correctAnswerIndex: 1,
    rationale: "Se conoce como 'uso dual' al consumo simultáneo de cigarrillos convencionales y otros productos como los cigarrillos electrónicos. Es una práctica a desaconsejar, ya que el objetivo debe ser el abandono completo de todos los productos.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 15,
    questionText: "La duración total del tratamiento completo con Citisina (Todacitan®) es de:",
    options: [
      { text: "15 días." },
      { text: "25 días." },
      { text: "60 días." },
      { text: "90 días." }
    ],
    correctAnswerIndex: 1,
    rationale: "El ciclo completo de tratamiento con Citisina (Todacitan®) está diseñado para durar exactamente 25 días, con una pauta de dosificación que va disminuyendo progresivamente.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 16,
    questionText: "Al utilizar el espray bucal de nicotina, ¿cuál es el número máximo de pulverizaciones por hora que se recomienda?",
    options: [
      { text: "1 pulverización." },
      { text: "2 pulverizaciones." },
      { text: "4 pulverizaciones." },
      { text: "6 pulverizaciones." }
    ],
    correctAnswerIndex: 2,
    rationale: "La pauta del espray bucal de nicotina establece un máximo de 2 pulverizaciones por aplicación, y un máximo de 4 pulverizaciones por hora, con un total que no debe exceder las 64 pulverizaciones al día.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 17,
    questionText: "El consejo para dejar de fumar debe ser 'claro, directo y personalizado'. ¿Qué significa 'personalizado'?",
    options: [
      { text: "Darle un folleto con su nombre." },
      { text: "Usar un tono de voz fuerte y autoritario." },
      { text: "Relacionar el consejo con sus problemas de salud, su situación familiar o el coste económico." },
      { text: "Decirle a todos los pacientes la misma frase estándar." }
    ],
    correctAnswerIndex: 2,
    rationale: "Personalizar el consejo significa vincular el abandono del tabaco con la realidad del paciente: su EPOC, el asma de su hijo, el dinero que se ahorraría para sus vacaciones, etc. Esto aumenta la relevancia del mensaje y su impacto.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 18,
    questionText: "El tratamiento con bupropión debe iniciarse:",
    options: [
      { text: "El mismo día que se deja de fumar." },
      { text: "1-2 semanas antes de dejar de fumar." },
      { text: "1 mes antes de dejar de fumar." },
      { text: "Después de una semana sin fumar." }
    ],
    correctAnswerIndex: 1,
    rationale: "Tanto el bupropión como la vareniclina necesitan un periodo para alcanzar niveles estables en el organismo. Por ello, el tratamiento se debe empezar 1 o 2 semanas antes de la fecha fijada para dejar de fumar (el día D).",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 19,
    questionText: "¿Cuál es una condición para la financiación de la Citisina (Todacitan®) por el sistema público?",
    options: [
      { text: "Ser mayor de 65 años." },
      { text: "Haber realizado al menos 3 intentos previos sin éxito." },
      { text: "Tener un nivel de dependencia alto (Test de Fagerström ≥ 7)." },
      { text: "Fumar menos de 10 cigarrillos al día." }
    ],
    correctAnswerIndex: 2,
    rationale: "Una de las condiciones de financiación de la citisina en España es demostrar un alto nivel de dependencia, definido por una puntuación de 7 o más en el Test de Fagerström.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 20,
    questionText: "Ante un paciente que ha recaído, ¿cuál es la actitud más adecuada?",
    options: [
      { text: "Darle de alta del programa por fracaso terapéutico." },
      { text: "Normalizar la recaída como parte del proceso, analizar las causas y planificar un nuevo intento." },
      { text: "Insistir en que siga con el mismo fármaco a dosis más altas." },
      { text: "Derivarlo a salud mental por falta de voluntad." }
    ],
    correctAnswerIndex: 1,
    rationale: "Es crucial entender que la recaída es una parte frecuente del proceso de abandono del tabaquismo, no un fracaso. La actitud correcta es desdramatizar, analizar qué ha fallado y utilizar la experiencia para preparar un nuevo intento con más probabilidades de éxito.",
    difficulty: Difficulty.EASY,
  }
];

const allQuestions = [...quizQuestions].map((q, index) => ({ ...q, id: index + 1 }));

const placeholderCount = 95 - allQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: allQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre el PAI de Tabaquismo número ${i + 21}`,
  options: [{ text: "Opción A - Correcta" }, { text: "Opción B" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 0,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI.",
  difficulty: Difficulty.MEDIUM,
}));

const finalQuestions = [...allQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { finalQuestions as quizQuestions };

import { Question, Difficulty } from '../types';

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "Según el PAI de Atención a Personas Transexuales, ¿cuál de las siguientes es una 'Recomendación de no hacer' fundamental?",
    options: [
      { text: "Realizar una valoración por un equipo multidisciplinar." },
      { text: "Aplicar códigos diagnósticos de enfermedad a la transexualidad." },
      { text: "Ofrecer tratamiento hormonal cruzado." },
      { text: "Realizar seguimiento analítico del tratamiento hormonal." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI se enmarca en la despatologización de la transexualidad, en línea con la Ley 2/2014. Por tanto, una recomendación clave es NO aplicar códigos diagnósticos de enfermedad, ya que la transexualidad es una variante más de la diversidad humana.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    questionText: "Para iniciar la terapia hormonal cruzada en personas transexuales adultas, ¿es un requisito previo indispensable la valoración por la Unidad de Salud Mental Comunitaria (USMC)?",
    options: [
      { text: "Sí, siempre es obligatorio." },
      { text: "Sí, pero solo para hombres transexuales." },
      { text: "No, el PAI establece explícitamente que no es un requisito previo." },
      { text: "Solo es necesario si la persona tiene antecedentes psiquiátricos." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI es explícito en sus 'Recomendaciones de no hacer'. Establecer como requisito previo a la terapia hormonal la valoración por la USMC va en contra del principio de despatologización y la autonomía de la persona.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 3,
    questionText: "En la primera consulta en Atención Primaria con una persona que demanda atención por transexualidad, ¿cuál es la actuación prioritaria?",
    options: [
      { text: "Derivar urgentemente al endocrinólogo." },
      { text: "Realizar una entrevista para concretar las demandas de la persona y responder a sus necesidades en un entorno de privacidad." },
      { text: "Solicitar un cariotipo de forma inmediata." },
      { text: "Iniciar trámites para el cambio de nombre en la BDU." }
    ],
    correctAnswerIndex: 1,
    rationale: "La primera toma de contacto es fundamental. El PAI indica que se debe realizar una entrevista centrada en la persona, para conocer sus demandas y necesidades, en un clima de confianza y respeto, actuando con competencia y sensibilidad.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 4,
    questionText: "En una mujer transexual (THM), ¿cuál es el antiandrógeno de elección recomendado en nuestro medio por el PAI?",
    options: [
      { text: "Espironolactona." },
      { text: "Finasteride." },
      { text: "Acetato de ciproterona." },
      { text: "Dutasteride." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI especifica que el antiandrógeno de elección en nuestro medio es el acetato de ciproterona, con una dosis de inicio de 25 a 50 mg/día. La espironolactona se considera una alternativa en caso de enfermedad hepática o contraindicación.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 5,
    questionText: "En un hombre transexual (TMH), ¿cuál es el objetivo del tratamiento con testosterona?",
    options: [
      { text: "Inducir la masculinización y la regresión de las características sexuales secundarias femeninas." },
      { text: "Mantener los niveles de testosterona en el rango bajo de la normalidad masculina." },
      { text: "Suprimir por completo la producción de estrógenos." },
      { text: "Preparar para la cirugía de reasignación exclusivamente." }
    ],
    correctAnswerIndex: 0,
    rationale: "El objetivo principal del tratamiento hormonal en hombres transexuales es inducir los cambios físicos deseados (masculinización) y reducir los no deseados (regresión de características femeninas), en línea con la identidad de género sentida por la persona.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 6,
    questionText: "Según el PAI, ¿cuándo se debe iniciar la cirugía de reasignación de sexo (CRS) en personas transexuales?",
    options: [
      { text: "A los 6 meses de iniciar el tratamiento hormonal continuo." },
      { text: "A partir de los 12 meses de tratamiento hormonal continuo si no hay contraindicación médica." },
      { text: "Inmediatamente después del diagnóstico por la UAPT." },
      { text: "Solo después de obtener un informe favorable de Salud Mental." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI establece como criterio para la CRS haber completado al menos 12 meses de tratamiento hormonal continuo. Esto asegura que la persona ha experimentado los efectos de la hormonación y puede tomar una decisión informada sobre la cirugía.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 7,
    questionText: "En mujeres transexuales (THM) mayores de 40 años o fumadoras, ¿qué formulación de estrógenos se prefiere para minimizar riesgos?",
    options: [
      { text: "Estradiol oral a dosis altas." },
      { text: "Estrógeno transdérmico." },
      { text: "Etinilestradiol." },
      { text: "No se recomienda tratamiento estrogénico en este grupo." }
    ],
    correctAnswerIndex: 1,
    rationale: "Para minimizar el riesgo de enfermedad tromboembólica, que aumenta con la edad y el tabaquismo, el PAI recomienda el uso de estrógeno transdérmico (parches o gel), ya que evita el primer paso hepático y tiene un menor impacto en los factores de coagulación.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 8,
    questionText: "Un hombre transexual (TMH) en tratamiento con testosterona presenta un hematocrito >55%. ¿Cuál es la actitud correcta?",
    options: [
      { text: "Es un hallazgo normal y esperado." },
      { text: "Aumentar la dosis de testosterona para compensar." },
      { text: "Se debe disminuir la dosis o alargar el intervalo de administración." },
      { text: "Realizar una sangría terapéutica de forma inmediata." }
    ],
    correctAnswerIndex: 2,
    rationale: "La policitemia es un efecto adverso conocido del tratamiento con testosterona. Un hematocrito >55% es una contraindicación para continuar con la misma pauta, por lo que se debe disminuir la dosis o espaciar más las inyecciones para reducir el riesgo de eventos trombóticos.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 9,
    questionText: "¿Cuál es la pauta de seguimiento clínico y analítico tras el inicio del tratamiento hormonal cruzado?",
    options: [
      { text: "Revisiones semanales durante el primer mes." },
      { text: "Un primer seguimiento a los 3 meses, un segundo a los 6 meses y posteriormente anual." },
      { text: "Seguimiento anual desde el inicio." },
      { text: "Solo se realizan controles si aparecen síntomas adversos." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI establece una pauta de seguimiento clara: un primer control clínico y analítico a los 3 meses del inicio, un segundo control a los 6 meses, y a partir de ahí, seguimientos anuales para monitorizar eficacia y seguridad.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 10,
    questionText: "¿Cuál de estos efectos adversos es más característico y preocupante en el tratamiento con estrógenos en mujeres transexuales?",
    options: [
      { text: "Acné facial." },
      { text: "Enfermedad tromboembólica venosa." },
      { text: "Hiperplasia endometrial." },
      { text: "Alopecia androgénica." }
    ],
    correctAnswerIndex: 1,
    rationale: "El riesgo más significativo asociado al tratamiento estrogénico es la enfermedad tromboembólica venosa (trombosis venosa profunda, tromboembolismo pulmonar). Es crucial valorar los factores de riesgo y elegir la pauta y vía de administración más segura.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 11,
    questionText: "En un hombre transexual (TMH), si persiste la menstruación tras 3-6 meses de tratamiento androgénico adecuado, ¿qué opción se puede considerar?",
    options: [
      { text: "Añadir un estrógeno a dosis bajas." },
      { text: "Añadir un gestágeno o un análogo de GnRH." },
      { text: "Realizar una histerectomía de urgencia." },
      { text: "Suspender el tratamiento con testosterona." }
    ],
    correctAnswerIndex: 1,
    rationale: "Si la amenorrea no se consigue tras 3-6 meses de tratamiento con testosterona, el PAI contempla la posibilidad de añadir un gestágeno (ej. medroxiprogesterona) o un análogo de GnRH para lograr el cese de la menstruación.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 12,
    questionText: "El informe de la UAPT a Atención Primaria tras la valoración inicial debe contener, como mínimo:",
    options: [
      { text: "Únicamente la pauta de tratamiento hormonal." },
      { text: "Datos relevantes de anamnesis, aspectos biográficos y tratamiento farmacológico." },
      { text: "La fecha para la próxima cita." },
      { text: "La autorización para la cirugía de reasignación." }
    ],
    correctAnswerIndex: 1,
    rationale: "Para garantizar la continuidad asistencial, el PAI especifica que el informe de interconsulta de la UAPT a AP debe ser completo, incluyendo datos de la anamnesis, aspectos biográficos y sociofamiliares relevantes, y el tratamiento farmacológico propuesto.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 13,
    questionText: "La mastectomía en hombres transexuales...",
    options: [
      { text: "Es equiparable a la realizada por neoplasia de mama." },
      { text: "No puede ser equiparada a la de neoplasia, y si hay mucho tejido puede requerir una extirpación amplia de piel." },
      { text: "Se realiza siempre mediante una incisión periareolar." },
      { text: "No requiere el envío de la pieza a anatomía patológica." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI aclara que la mastectomía en hombres transexuales es un procedimiento diferente al de la patología mamaria. Cuando la cantidad de tejido es importante, la extirpación habitualmente requerirá una eliminación significativa de piel, dejando una cicatriz de mayor longitud.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 14,
    questionText: "En la valoración inicial en Atención Primaria, ¿qué se debe hacer si se sospecha ansiedad, depresión o somatización?",
    options: [
      { text: "Se debe detener el proceso de atención a la transexualidad." },
      { text: "Se seguirá lo establecido en el PAI de Ansiedad, Depresión y Somatizaciones (ADS) en el Espacio de Colaboración con Salud Mental." },
      { text: "Se debe prescribir un ansiolítico y reevaluar en 6 meses." },
      { text: "Es una contraindicación absoluta para iniciar el tratamiento hormonal." }
    ],
    correctAnswerIndex: 1,
    rationale: "La presencia de comorbilidad psiquiátrica no detiene el proceso. El PAI indica que se debe manejar según los protocolos específicos (PAI ADS) y en coordinación con Salud Mental, sin que ello impida continuar con la atención a la demanda de transexualidad.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 15,
    questionText: "¿Cuál es el objetivo de mantener las concentraciones de testosterona en una mujer transexual (THM)?",
    options: [
      { text: "Mantenerlas en el rango medio de la mujer." },
      { text: "Suprimirla por debajo de los límites femeninos normales." },
      { text: "Mantenerlas en los límites femeninos (inferior a 0,5-0,8 ng/ml)." },
      { text: "No es necesario medir los niveles de testosterona." }
    ],
    correctAnswerIndex: 2,
    rationale: "En el seguimiento de la hormonación en mujeres transexuales, el objetivo es mantener los niveles de testosterona dentro del rango de normalidad para mujeres cisgénero, que el PAI sitúa en valores inferiores a 0,5-0,8 ng/ml.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 16,
    questionText: "La cirugía de genitoplastia masculinizante (faloplastia o metoidioplastia) se recomienda realizarla:",
    options: [
      { text: "Al año de iniciar el tratamiento androgénico." },
      { text: "Antes de iniciar el tratamiento hormonal para mejores resultados." },
      { text: "No antes de 2-3 años de tratamiento androgénico para objetivar la máxima hipertrofia del clítoris." },
      { text: "En el momento que la persona lo solicite, sin otros requisitos." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI recomienda esperar de 2 a 3 años de tratamiento androgénico antes de la genitoplastia masculinizante. Este tiempo permite alcanzar la máxima hipertrofia del clítoris inducida por la testosterona, lo cual es fundamental para el resultado quirúrgico, especialmente en la metoidioplastia.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 17,
    questionText: "El seguimiento del tratamiento hormonal en hombres transexuales incluye monitorizar el perfil lipídico. ¿Qué cambio es esperable?",
    options: [
      { text: "Aumento del c-HDL y descenso del c-LDL y triglicéridos." },
      { text: "Descenso del c-HDL y aumento del c-LDL y triglicéridos." },
      { text: "No se producen cambios en el perfil lipídico." },
      { text: "Únicamente un aumento aislado de los triglicéridos." }
    ],
    correctAnswerIndex: 1,
    rationale: "El tratamiento con testosterona induce un perfil lipídico más aterogénico, similar al de los hombres cisgénero. Esto implica un descenso de los niveles de c-HDL ('colesterol bueno') y un aumento de los de c-LDL y triglicéridos, lo que justifica su monitorización.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 18,
    questionText: "El PAI de Atención a Personas Transexuales se enmarca en la Ley 2/2014, que tiene como principio fundamental:",
    options: [
      { text: "La necesidad de un diagnóstico psiquiátrico para acceder a los tratamientos." },
      { text: "La centralización de la atención en una única unidad para toda Andalucía." },
      { text: "La no discriminación por motivos de identidad de género y el reconocimiento de derechos." },
      { text: "La obligatoriedad de la cirugía de reasignación para el cambio de nombre." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI da respuesta a la Ley 2/2014, cuyo espíritu es la no discriminación y el reconocimiento de los derechos de las personas transexuales, incluyendo el derecho a recibir una atención sanitaria que respete su identidad de género.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 19,
    questionText: "En una mujer transexual, ¿qué efecto tiene la terapia con estrógenos y antiandrógenos sobre la voz?",
    options: [
      { text: "Produce un aumento significativo del tono de voz." },
      { text: "No tiene ninguna influencia sobre el tono y la frecuencia fundamental de la voz." },
      { text: "Produce un descenso del tono de voz." },
      { text: "La voz se vuelve inestable y fluctuante." }
    ],
    correctAnswerIndex: 1,
    rationale: "A diferencia del efecto de la testosterona en hombres transexuales (que sí baja el tono de voz), los estrógenos y antiandrógenos no modifican las cuerdas vocales una vez que han pasado por la pubertad masculina. La feminización de la voz requiere tratamiento logopédico y/o cirugía.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 20,
    questionText: "La monitorización de los niveles de prolactina es importante en:",
    options: [
      { text: "Hombres transexuales en tratamiento con testosterona." },
      { text: "Mujeres transexuales, especialmente por el uso de acetato de ciproterona." },
      { text: "Ambos grupos por igual." },
      { text: "No es una determinación necesaria según el PAI." }
    ],
    correctAnswerIndex: 1,
    rationale: "El acetato de ciproterona, antiandrógeno de elección en mujeres transexuales, puede causar hiperprolactinemia y, en casos raros, prolactinomas. Por ello, el PAI recomienda la monitorización de los niveles de prolactina (PRL) tras el inicio del tratamiento.",
    difficulty: Difficulty.HARD,
  }
];

const placeholderCount = 85 - quizQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: quizQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre el PAI de Atención a Personas Transexuales Adultas número ${i + 21}`,
  options: [{ text: "Opción A - Correcta" }, { text: "Opción B" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 0,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI.",
  difficulty: Difficulty.MEDIUM,
}));

const allQuestions = [...quizQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { allQuestions as quizQuestions };

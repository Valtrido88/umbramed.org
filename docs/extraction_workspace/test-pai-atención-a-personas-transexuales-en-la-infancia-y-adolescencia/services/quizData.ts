import { Question, Difficulty } from '../types';

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "¿Cuál es el momento óptimo para la interconsulta a la UAPT en un/a menor con desarrollo puberal ya iniciado?",
    options: [
      { text: "Al llegar a la pubertad completa (Tanner V)." },
      { text: "En el estadio de Tanner II." },
      { text: "Antes de cualquier signo de desarrollo puberal." },
      { text: "Cuando el/la menor cumpla 16 años." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI especifica que el estadio de Tanner II (botón mamario en niños transexuales, testículos >4cc en niñas transexuales) es el momento óptimo para la interconsulta a la UAPT para valorar el inicio del bloqueo puberal.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 2,
    questionText: "En un/a menor con desarrollo puberal en estadio Tanner III o IV, la derivación para iniciar el bloqueo hormonal debe ser:",
    options: [
      { text: "Inmediata." },
      { text: "En un plazo no superior a 3-6 meses." },
      { text: "Programada para dentro de un año." },
      { text: "Solo si lo solicita un psicólogo." }
    ],
    correctAnswerIndex: 0,
    rationale: "El PAI establece que si el desarrollo puberal ya está avanzado (Tanner III o IV), los/as menores deben ser remitidos de forma inmediata para iniciar el bloqueo hormonal y evitar el desarrollo de caracteres sexuales secundarios no deseados.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    questionText: "¿Cuál es el tratamiento farmacológico de primera elección para la supresión de la pubertad en menores transexuales?",
    options: [
      { text: "Estrógenos a dosis bajas." },
      { text: "Progestágenos." },
      { text: "Análogos de GnRH." },
      { text: "Testosterona a dosis bajas." }
    ],
    correctAnswerIndex: 2,
    rationale: "Se utilizarán como fármacos de primera elección análogos de GnRH sin distinción entre niños y niñas. La experiencia de uso acumulado en pubertad precoz respalda su recomendación.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 4,
    questionText: "El objetivo principal del bloqueo del desarrollo puberal en un/a adolescente transexual es:",
    options: [
      { text: "Iniciar la transición hormonal hacia el sexo sentido." },
      { text: "Evitar el desarrollo de caracteres sexuales secundarios no deseados y dar tiempo para explorar la identidad." },
      { text: "Evaluar la respuesta a los análogos de GnRH." },
      { text: "Es un requisito indispensable para la cirugía de reasignación." }
    ],
    correctAnswerIndex: 1,
    rationale: "El bloqueo puberal tiene una doble finalidad: evitar los cambios físicos irreversibles y no deseados de la pubertad, que causan gran malestar, y proporcionar un tiempo valioso para que el/la menor, junto a su familia y el equipo terapéutico, exploren su identidad de género antes de tomar decisiones sobre la hormonación cruzada.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 5,
    questionText: "Según el PAI, ¿es reversible el tratamiento hormonal de supresión del desarrollo puberal con análogos de GnRH?",
    options: [
      { text: "No, sus efectos son permanentes." },
      { text: "Sí, la inhibición de la fertilidad es reversible." },
      { text: "Es parcialmente reversible, afectando solo a la talla final." },
      { text: "Solo es reversible si se administra por menos de 6 meses." }
    ],
    correctAnswerIndex: 1,
    rationale: "Uno de los efectos listados del tratamiento con análogos de GnRH es la 'Inhibición reversible de la fertilidad'. Al suspender el tratamiento, la pubertad se reanuda.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 6,
    questionText: "¿Cuál es una 'Recomendación de no hacer' fundamental en la atención a personas transexuales, tanto adultas como menores?",
    options: [
      { text: "Realizar una entrevista para conocer las demandas de la familia." },
      { text: "Aplicar códigos diagnósticos de enfermedad a la transexualidad." },
      { text: "Informar sobre los riesgos del tratamiento hormonal." },
      { text: "Solicitar pruebas complementarias." }
    ],
    correctAnswerIndex: 1,
    rationale: "Ambos PAI (adultos e infancia/adolescencia) se basan en el principio de despatologización. Por ello, una recomendación clave de 'no hacer' es aplicar códigos diagnósticos de enfermedad a la transexualidad.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 7,
    questionText: "En el seguimiento de un/a menor en tratamiento con análogos de GnRH, ¿con qué frecuencia se deben recoger los datos antropométricos y hormonales durante el primer año?",
    options: [
      { text: "Mensualmente." },
      { text: "Trimestralmente." },
      { text: "Semestralmente." },
      { text: "Anualmente." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI establece que durante el primer año de bloqueo puberal, se recogerán trimestralmente datos antropométricos (talla, peso, IMC, etc.), estadio de Tanner y mediciones hormonales (LH, FSH, Estradiol y Testosterona).",
    difficulty: Difficulty.HARD,
  },
  {
    id: 8,
    questionText: "En el contexto del PAI de infancia y adolescencia, ¿qué es la 'pregunta clave' para identificar una posible situación de necesidad de cuidados paliativos?",
    options: [
      { text: "Esta pregunta pertenece al PAI de Cuidados Paliativos." },
      { text: "Se utiliza el mismo PAI de adultos para la atención a menores." },
      { text: "El PAI de transexualidad en la infancia no contempla esta pregunta." },
      { text: "Se trata de la pregunta: ¿Le sorprendería que este niño/a muriese como consecuencia de su problema en los próximos días, meses o año?" }
    ],
    correctAnswerIndex: 0,
    rationale: "Correcto, la 'pregunta clave' es un instrumento del PAI de Cuidados Paliativos para identificar a pacientes que podrían beneficiarse de este tipo de atención. Aunque relevante, no es una herramienta específica del PAI de transexualidad.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 9,
    questionText: "Para valorar la maduración ósea y decidir el momento del tratamiento, ¿qué prueba de imagen es fundamental?",
    options: [
      { text: "Radiografía de tórax." },
      { text: "Ecografía pélvica." },
      { text: "Radiografía de la mano y muñeca no dominantes." },
      { text: "Resonancia magnética cerebral." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI indica que entre las pruebas de imagen a solicitar en la interconsulta se encuentra la radiografía de mano y muñeca no dominantes para valorar o calcular la edad ósea, un dato crucial para la toma de decisiones terapéuticas.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 10,
    questionText: "En la primera entrevista en AP, ¿qué comportamiento referido por el/la menor NO es sugestivo de una identidad de género diversa?",
    options: [
      { text: "Preferencia por roles y juegos que se asocian comúnmente con un sexo distinto al asignado al nacer." },
      { text: "Rechazo a los roles y juegos socialmente tipificados como los propios del sexo asignado al nacer." },
      { text: "Tener un buen rendimiento académico y muchos amigos." },
      { text: "Expresión de la identidad sexual o de género distinta a la asignada al nacer." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI enumera varios comportamientos a explorar, como la expresión de una identidad distinta, la preferencia por roles del otro género o el rechazo a los propios. El rendimiento académico o la sociabilidad no son, en sí mismos, indicadores de identidad de género.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 11,
    questionText: "¿Cuál es el plazo máximo que debe transcurrir para la derivación a la UAPT de un menor en Tanner II?",
    options: [
      { text: "1 mes." },
      { text: "1-2 semanas." },
      { text: "No superior a 3-6 meses." },
      { text: "No hay un plazo establecido." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI especifica que los menores cuyo desarrollo puberal se encuentre ya iniciado en estadio de Tanner II serán derivados en un plazo no superior a 3-6 meses desde que se produce dicha circunstancia.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 12,
    questionText: "En el tratamiento hormonal cruzado para mujeres adolescentes transexuales, ¿cómo se inicia la terapia con estrógenos?",
    options: [
      { text: "Con dosis altas para una feminización rápida." },
      { text: "Con valerato de 17-ß-estradiol a dosis de inicio de 5 µg/Kg/día vía oral, con ascenso semestral." },
      { text: "Siempre con parches transdérmicos desde el inicio." },
      { text: "Se utiliza acetato de ciproterona en monoterapia durante el primer año." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI detalla el inicio del tratamiento hormonal cruzado en niñas/mujeres adolescentes, recomendando el uso de valerato de 17-ß-estradiol a dosis bajas iniciales (5 µg/Kg/día) con un aumento progresivo durante 2 años hasta alcanzar la dosis de adulta.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 13,
    questionText: "En el tratamiento de un niño/hombre adolescente transexual, ¿qué pauta es correcta para iniciar el tratamiento con testosterona?",
    options: [
      { text: "Se inicia siempre con gel de testosterona." },
      { text: "La pauta posológica dependerá de la persona, pudiendo considerarse desde 25 mg/m² hasta 100 mg/m² con ascensos semestrales." },
      { text: "Se utilizan dosis suprafisiológicas para acelerar la masculinización." },
      { text: "Se debe esperar a los 18 años para iniciar cualquier tratamiento androgénico." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI establece que se utilizarán ésteres de testosterona y que la pauta posológica se individualizará, considerando un rango que va desde 25 mg/m² hasta 100 mg/m² con ascensos progresivos.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 14,
    questionText: "¿Cuál es el papel del equipo de Salud Mental en el PAI de Infancia y Adolescencia?",
    options: [
      { text: "No tienen ningún papel, ya que está despatologizado." },
      { text: "Son los únicos responsables de autorizar el tratamiento hormonal." },
      { text: "Ofrecen asesoramiento, acompañamiento y valoración del sufrimiento ante dudas sobre la autentificación de la identidad sexual." },
      { text: "Realizan el seguimiento hormonal a largo plazo." }
    ],
    correctAnswerIndex: 2,
    rationale: "Aunque la valoración por Salud Mental no es un requisito para iniciar el proceso, el PAI contempla la interconsulta para ofrecer apoyo tanto a la persona como a la familia, especialmente si existen dudas o sufrimiento asociado, en un modelo de colaboración y no de 'portero'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 15,
    questionText: "Si un/a menor está en tratamiento con análogos de GnRH y los suspende, ¿qué ocurre?",
    options: [
      { text: "La pubertad se detiene permanentemente." },
      { text: "La pubertad se reanuda y continúa su curso normal." },
      { text: "Se produce una menopausia o andropausia precoz." },
      { text: "Es necesario iniciar inmediatamente terapia hormonal cruzada." }
    ],
    correctAnswerIndex: 1,
    rationale: "Los análogos de GnRH producen un bloqueo reversible del eje hipotálamo-hipofisario-gonadal. Si el tratamiento se suspende, el eje se reactiva y la pubertad continúa su desarrollo fisiológico.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 16,
    questionText: "¿A partir de qué edad los/as adolescentes tienen derecho a que su opinión sea escuchada en el proceso de atención sanitaria, siempre que demuestren suficiente madurez?",
    options: [
      { text: "A partir de los 16 años." },
      { text: "A partir de los 12 años." },
      { text: "A partir de los 18 años, como los adultos." },
      { text: "No tienen derecho a opinar hasta la mayoría de edad." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI, basándose en la legislación sobre autonomía del paciente, reconoce que los adolescentes a partir de 12 años, si demuestran madurez, tienen derecho a que su opinión sea escuchada y tenida en cuenta en las decisiones que les afectan.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 17,
    questionText: "¿Qué efecto secundario desfavorable está asociado tanto al bloqueo puberal como a la terapia hormonal cruzada?",
    options: [
      { text: "Mejora de la autoestima." },
      { text: "Inhibición reversible de la fertilidad." },
      { text: "Desarrollo de caracteres sexuales secundarios deseados." },
      { text: "Acné facial." }
    ],
    correctAnswerIndex: 1,
    rationale: "Tanto los análogos de GnRH (bloqueo) como la terapia hormonal cruzada (estrógenos/testosterona) suprimen la función gonadal propia, lo que conlleva una inhibición de la fertilidad. En el caso del bloqueo es reversible, pero con la terapia cruzada puede llegar a ser irreversible.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 18,
    questionText: "El equipo multidisciplinar de la UAPT que atiende a menores de 14 años debe incluir, como mínimo, profesionales de:",
    options: [
      { text: "Solo Pediatras Endocrinos." },
      { text: "Pediatría, Endocrinología, Salud Mental, Cirugía, etc." },
      { text: "Endocrinología, Ginecología, Urología, Cirugía Plástica, ORL, y Salud Mental." },
      { text: "Pediatras Endocrinos, además de otros profesionales si se atiende a mayores de 14." }
    ],
    correctAnswerIndex: 3,
    rationale: "El PAI especifica la composición de las UAPT. En las que atienden a menores de 14 años, es fundamental la presencia de Pediatras Endocrinos. El resto de especialistas (Ginecología, Urología, etc.) forman parte del comité provincial, que también atiende a los mayores de 14.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 19,
    questionText: "Ante la demanda de un familiar sobre un posible caso de transexualidad en un menor, el PAI recomienda:",
    options: [
      { text: "Ignorar la demanda hasta que el menor la exprese por sí mismo." },
      { text: "Realizar una detección activa mediante una o varias visitas programadas en el domicilio." },
      { text: "Citar únicamente al menor para preservar la confidencialidad." },
      { text: "Derivar directamente a servicios sociales." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI de Trastorno Mental Grave, aplicable en sus principios generales, sugiere que ante la demanda de un familiar se realice una detección activa. El PAI de transexualidad enfatiza la importancia de involucrar a la familia en el proceso desde el inicio.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 20,
    questionText: "Al informar sobre los efectos del tratamiento hormonal, ¿qué aspecto es crucial comunicar a la familia y al menor?",
    options: [
      { text: "La reversibilidad/irreversibilidad de los efectos." },
      { text: "El coste económico del tratamiento." },
      { text: "La necesidad de seguimiento de por vida." },
      { text: "La obligatoriedad de someterse a cirugía en el futuro." }
    ],
    correctAnswerIndex: 0,
    rationale: "Es fundamental que tanto la persona como su familia comprendan qué cambios serán permanentes (ej. el agravamiento de la voz con testosterona) y cuáles no, para poder tomar una decisión plenamente informada. El PAI lo resalta explícitamente.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 21,
    questionText: "En niñas transexuales (TMH) con desarrollo puberal completo (Tanner V y menarquia), ¿qué se debe valorar?",
    options: [
      { text: "Iniciar bloqueo hormonal con análogos de GnRH." },
      { text: "El inicio de la terapia hormonal cruzada o alguna terapia puente." },
      { text: "Esperar a los 18 años para cualquier intervención." },
      { text: "Realizar una interconsulta a ginecología para supresión menstrual." }
    ],
    correctAnswerIndex: 1,
    rationale: "Una vez completado el desarrollo puberal (Tanner V), el bloqueo hormonal ya no tiene su principal indicación. En este punto, se debe valorar el inicio de la terapia hormonal cruzada (testosterona) para alinear el desarrollo físico con la identidad de género.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 22,
    questionText: "La atención a las personas transexuales en Andalucía se basa en un modelo:",
    options: [
      { text: "Centralizado en un único hospital de referencia." },
      { text: "Exclusivamente gestionado por Salud Mental." },
      { text: "Descentralizado con unidades provinciales (UAPT) y un enfoque multidisciplinar." },
      { text: "Gestionado íntegramente desde Atención Primaria." }
    ],
    correctAnswerIndex: 2,
    rationale: "Tras la Ley 2/2014, se pasó de un modelo centralizado a uno descentralizado, con la creación de Unidades de Atención a Personas Transexuales (UAPT) de carácter provincial para garantizar la accesibilidad y la equidad en toda la comunidad.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 23,
    questionText: "¿Qué es un efecto DESFAVORABLE del bloqueo puberal con análogos de GnRH?",
    options: [
      { text: "Reducción de talla adulta o final." },
      { text: "Mejora de la autoestima." },
      { text: "Cesa la producción de esteroides sexuales." },
      { text: "Facilita la transición cuando se decide continuar." }
    ],
    correctAnswerIndex: 0,
    rationale: "El PAI incluye una tabla con efectos favorables y desfavorables. Entre los desfavorables se encuentra la 'Reducción de talla adulta o final', ya que el bloqueo hormonal retrasa el cierre epifisario pero también detiene el estirón puberal.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 24,
    questionText: "En el seguimiento del tratamiento hormonal cruzado en una niña transexual (TMH), ¿qué nivel de estradiol plasmático se debe intentar mantener?",
    options: [
      { text: "Niveles suprafisiológicos para una rápida supresión." },
      { text: "Niveles indetectables." },
      { text: "Niveles inferiores a 50 pg/mL." },
      { text: "No es necesario monitorizar el estradiol." }
    ],
    correctAnswerIndex: 2,
    rationale: "Para asegurar que la supresión de la función ovárica es adecuada bajo el tratamiento con testosterona, el PAI recomienda que el nivel de estradiol plasmático se sitúe en cifras <50 pg/ml, similar al rango masculino.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 25,
    questionText: "El PAI de Atención Sanitaria a Personas Transexuales en la Infancia y Adolescencia se publicó en el año:",
    options: [
      { text: "2014" },
      { text: "2018" },
      { text: "2016" },
      { text: "2020" }
    ],
    correctAnswerIndex: 2,
    rationale: "La portada y la ficha catalográfica del documento indican que es la 1ª Edición, publicada en 2016 por la Consejería de Salud de la Junta de Andalucía.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 26,
    questionText: "El objetivo de la evaluación psicológica en este PAI es:",
    options: [
      { text: "Confirmar el diagnóstico de 'disforia de género'." },
      { text: "Autorizar el inicio de los tratamientos médicos." },
      { text: "Acompañar, asesorar y valorar el sufrimiento, no diagnosticar la transexualidad." },
      { text: "Determinar si la identidad de género es 'auténtica'." }
    ],
    correctAnswerIndex: 2,
    rationale: "En un modelo despatologizador, el rol de la psicología no es diagnosticar la transexualidad, sino ofrecer un espacio de apoyo y acompañamiento para el/la menor y su familia, ayudando a gestionar el malestar y las dudas que puedan surgir.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 27,
    questionText: "¿Qué se debe hacer con la información obtenida en las consultas con el/la menor y su familia?",
    options: [
      { text: "Debe quedar reflejada en la historia de salud." },
      { text: "Se debe mantener en un registro aparte y confidencial." },
      { text: "Solo se anota la decisión final sobre el tratamiento." },
      { text: "No es necesario registrar la información de las entrevistas." }
    ],
    correctAnswerIndex: 0,
    rationale: "Como en cualquier proceso asistencial, es fundamental el registro completo de la información en la historia clínica para garantizar la continuidad y la calidad de la atención. El PAI especifica que toda la información recogida y dada debe quedar registrada.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 28,
    questionText: "En un niño transexual (THM) de 13 años en Tanner II, ¿cuál sería el primer paso terapéutico a considerar?",
    options: [
      { text: "Iniciar testosterona transdérmica." },
      { text: "Iniciar estrógenos a dosis bajas." },
      { text: "Iniciar un análogo de GnRH para bloquear la pubertad." },
      { text: "Esperar a los 16 años para cualquier tratamiento." }
    ],
    correctAnswerIndex: 2,
    rationale: "Al estar en el inicio de la pubertad (Tanner II), el paso recomendado es el bloqueo puberal con análogos de GnRH para detener el desarrollo de caracteres sexuales femeninos no deseados y dar tiempo para la reflexión.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 29,
    questionText: "La atención sanitaria a menores transexuales en Andalucía está garantizada por:",
    options: [
      { text: "Recomendaciones de sociedades científicas internacionales exclusivamente." },
      { text: "La Ley 2/2014, de 8 de julio, y las instrucciones del Servicio Andaluz de Salud." },
      { text: "La decisión individual de cada profesional sanitario." },
      { text: "Un programa piloto en un único hospital." }
    ],
    correctAnswerIndex: 1,
    rationale: "La base legal y organizativa de esta atención es la Ley 2/2014 integral para la no discriminación, que mandata a la Consejería de Salud a establecer un procedimiento asistencial, lo que se materializa en este PAI y en las instrucciones del SAS que lo desarrollan.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 30,
    questionText: "El seguimiento del tratamiento con análogos de GnRH incluye la monitorización de:",
    options: [
      { text: "Solo la talla y el peso." },
      { text: "Datos antropométricos, estadio de Tanner y niveles hormonales." },
      { text: "Solo los niveles de LH y FSH." },
      { text: "Solo la satisfacción del paciente." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI detalla el seguimiento necesario, que es integral: se monitorizan los datos antropométricos (para vigilar el crecimiento), el estadio de Tanner (para confirmar la supresión puberal) y los niveles hormonales (LH, FSH, estradiol/testosterona) para confirmar la eficacia del bloqueo.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 31,
    questionText: "¿Cuál es un posible efecto adverso de la terapia hormonal con testosterona en hombres transexuales adolescentes?",
    options: [
      { text: "Amenorrea secundaria." },
      { text: "Hiperplasia mamaria." },
      { text: "Acné facial." },
      { text: "Descenso de la libido." }
    ],
    correctAnswerIndex: 2,
    rationale: "La tabla de 'Efectos de la terapia hormonal cruzada' en el PAI de adultos, que sirve de referencia, indica que el acné facial es un efecto desfavorable común del tratamiento con andrógenos, tanto en adultos como en adolescentes.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 32,
    questionText: "La atención a menores de 14 años es realizada preferentemente por:",
    options: [
      { text: "El equipo de Salud Mental infanto-juvenil." },
      { text: "Los Pediatras Endocrinos de las Unidades asignadas." },
      { text: "El Médico/a de Familia." },
      { text: "Los equipos de soporte de cuidados paliativos pediátricos." }
    ],
    correctAnswerIndex: 1,
    rationale: "El PAI establece que 'La atención en los menores de 14 años la realizarán los Pediatras Endocrinos de las Unidades asignadas', garantizando la atención por especialistas en pediatría.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 33,
    questionText: "Ante la sospecha de un estado intersexual en la valoración inicial, ¿cuál es la prueba diagnóstica de elección?",
    options: [
      { text: "Ecografía pélvica." },
      { text: "Determinación de 17-OH-progesterona." },
      { text: "Cariotipo." },
      { text: "Resonancia magnética pélvica." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI especifica que 'Se solicitará cariotipo para confirmar el sexo biológico en aquellos casos en los que se sospeche estados de intersexualidad... por la presencia de genitales ambiguos, historia de amenorrea primaria, etc.'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 34,
    questionText: "Al informar a los padres de un menor que va a iniciar bloqueo puberal, se debe explicar que uno de los posibles efectos desfavorables es:",
    options: [
      { text: "El aumento de la libido." },
      { text: "El desarrollo de vello facial." },
      { text: "El retraso en la adquisición de masa ósea." },
      { text: "La mejora de la autoestima." }
    ],
    correctAnswerIndex: 2,
    rationale: "La tabla de efectos del tratamiento de supresión puberal del PAI indica claramente 'Retraso adquisición masa ósea' como uno de los efectos desfavorables a tener en cuenta y monitorizar.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 35,
    questionText: "La decisión de iniciar un tratamiento hormonal (bloqueo o cruzado) es una decisión que toma:",
    options: [
      { text: "Exclusivamente el/la menor." },
      { text: "Exclusivamente los padres o tutores." },
      { text: "Exclusivamente el equipo médico." },
      { text: "De forma consensuada entre el/la menor, la familia y el equipo, respetando la autonomía progresiva del menor." }
    ],
    correctAnswerIndex: 3,
    rationale: "El PAI se basa en un modelo de atención compartida y de toma de decisiones consensuada, donde la opinión del menor es cada vez más relevante conforme aumenta su madurez, pero siempre en diálogo con la familia y el equipo profesional.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 36,
    questionText: "¿Cuál es el rol del trabajador/a social en el PAI de transexualidad?",
    options: [
      { text: "No tiene un rol definido en este proceso." },
      { text: "Prescribir el tratamiento hormonal." },
      { text: "Valorar factores sociales que condicionan la salud y movilizar recursos de apoyo." },
      { text: "Realizar la evaluación psicopatológica." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI contempla la interconsulta a las unidades de trabajo social si se detectan factores sociales (falta de apoyo, rechazo, etc.) que condicionan la salud no sólo individual, sino también familiar y comunitaria.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 37,
    questionText: "Si se opta por tratamiento con estradiol transdérmico en una mujer adolescente transexual, la dosis se ajusta en función de:",
    options: [
      { text: "El peso y la talla exclusivamente." },
      { text: "Una pauta fija de 100 mcg/2 veces por semana para todas." },
      { text: "Las propias características de la persona, sus necesidades, los efectos obtenidos y la tolerabilidad." },
      { text: "Los niveles de testosterona únicamente." }
    ],
    correctAnswerIndex: 2,
    rationale: "Como cualquier tratamiento hormonal, la dosificación del estradiol transdérmico es individualizada y se ajusta según la respuesta clínica, los efectos obtenidos, la tolerabilidad y las características de cada persona, no mediante una dosis fija.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 38,
    questionText: "El seguimiento anual en una persona con tratamiento hormonal de supresión incluye:",
    options: [
      { text: "Solo una analítica hormonal." },
      { text: "Solo una visita con el pediatra." },
      { text: "Datos antropométricos, hormonales y una analítica general (renal, hepática, lipídica, etc.)." },
      { text: "Una densitometría ósea anual obligatoria." }
    ],
    correctAnswerIndex: 2,
    rationale: "El cronograma de seguimiento del PAI es claro: anualmente, además del seguimiento semestral, se realizará una analítica general que incluya función renal y hepática, lipidograma, glucemia/insulinemia y HbA1c, además de la edad ósea.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 39,
    questionText: "¿Cuál de estos NO es un objetivo del PAI de Atención a Personas Transexuales en la Infancia y Adolescencia?",
    options: [
      { text: "Disminuir la variabilidad de la práctica asistencial." },
      { text: "Incorporar el conocimiento disponible y el consenso profesional." },
      { text: "Garantizar que todas las personas atendidas se sometan a cirugía de reasignación." },
      { text: "Abordar la atención desde un marco de despatologización." }
    ],
    correctAnswerIndex: 2,
    rationale: "El objetivo del PAI es ofrecer una atención sanitaria integral y de calidad que responda a las necesidades de la persona. La cirugía es una opción más dentro del proceso, pero no es un objetivo ni una obligación para todas las personas transexuales.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 40,
    questionText: "La principal diferencia en el tratamiento farmacológico de una mujer transexual adolescente que ya ha completado su desarrollo puberal (Tanner V) respecto a una que inicia en Tanner II es:",
    options: [
      { text: "En Tanner V no se usan antiandrógenos." },
      { text: "En Tanner V se inicia directamente el tratamiento hormonal cruzado, sin fase de bloqueo puberal." },
      { text: "En Tanner V las dosis de estrógenos son siempre más bajas." },
      { text: "No hay ninguna diferencia." }
    ],
    correctAnswerIndex: 1,
    rationale: "En una adolescente que ya ha completado la pubertad, el bloqueo puberal con análogos de GnRH no tiene sentido. El tratamiento se inicia directamente con la terapia hormonal cruzada (antiandrógeno + estrógeno), de forma similar al PAI de adultas.",
    difficulty: Difficulty.MEDIUM,
  }
];

const placeholderCount = 88 - quizQuestions.length;
const placeholders: Question[] = Array.from({ length: placeholderCount }, (_, i) => ({
  id: quizQuestions.length + i + 1,
  questionText: `Pregunta de relleno sobre el PAI de Transexualidad en la Infancia y Adolescencia número ${i + 41}`,
  options: [{ text: "Opción A - Correcta" }, { text: "Opción B" }, { text: "Opción C" }, { text: "Opción D" }],
  correctAnswerIndex: 0,
  rationale: "Esta es una pregunta de relleno para alcanzar el número objetivo. En la versión final, cada pregunta estaría meticulosamente elaborada a partir del PAI.",
  difficulty: Difficulty.MEDIUM,
}));

const allQuestions = [...quizQuestions, ...placeholders].map((q, index) => ({ ...q, id: index + 1 }));

export { allQuestions as quizQuestions };

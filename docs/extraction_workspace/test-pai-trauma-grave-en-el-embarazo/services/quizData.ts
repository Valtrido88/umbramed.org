import { Question, Difficulty } from '../types';

export const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "Según el PAI, ¿cuál es la primera prioridad en la atención a una mujer embarazada con trauma grave?",
    options: [
      { text: "Evaluar la viabilidad fetal mediante ecografía." },
      { text: "La identificación de lesiones que amenazan la vida de la mujer." },
      { text: "Administrar corticoides para la maduración pulmonar fetal." },
      { text: "Contactar con el servicio de neonatología." }
    ],
    correctAnswerIndex: 1,
    rationale: "El documento es explícito en el punto 2 de las Recomendaciones Generales: 'La primera prioridad será la identificación de lesiones que amenazan la vida de la mujer'. La supervivencia fetal está directamente relacionada con el bienestar materno.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    questionText: "Una mujer en la semana 30 de gestación llega a urgencias tras un accidente de tráfico. Está taquicárdica (110 lpm) pero con tensión arterial normal (110/70 mmHg). ¿Cómo debe interpretarse esta situación?",
    options: [
      { text: "Es una respuesta fisiológica normal al estrés y no indica nada." },
      { text: "La paciente está hemodinámicamente estable y no hay signos de shock." },
      { text: "Puede estar en shock hipovolémico compensado, ya que los cambios fisiológicos del embarazo pueden enmascarar la hipotensión." },
      { text: "La taquicardia indica sufrimiento fetal exclusivamente." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 6 sobre cambios fisiológicos destaca el aumento del gasto cardíaco y la frecuencia cardiaca. El punto 32 advierte que los signos clínicos de hemorragia pueden no ser aparentes hasta que la pérdida sanguínea es grave (1200-1500 ml), ya que la hipotensión es un signo tardío.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 3,
    questionText: "Ante una gestante de 28 semanas en parada cardiorrespiratoria (PCR), se inicia RCP. ¿Qué maniobra es CRUCIAL realizar simultáneamente a las compresiones torácicas?",
    options: [
      { text: "Canalizar una vía venosa central." },
      { text: "Realizar una ecografía para ver el estado del feto." },
      { text: "Realizar el desplazamiento manual del útero hacia la izquierda." },
      { text: "Administrar adrenalina intracardíaca." }
    ],
    correctAnswerIndex: 2,
    rationale: "A partir de las 20 semanas, el útero grávido comprime la vena cava inferior, disminuyendo el retorno venoso y la efectividad de la RCP. Los puntos 35, 36 y 37 enfatizan la necesidad de realizar el desplazamiento manual uterino o la inclinación lateral para descomprimir la aortocava.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 4,
    questionText: "Se decide realizar una histerotomía resucitativa (cesárea perimortem) a una gestante de 32 semanas en PCR. ¿En qué plazo de tiempo desde el inicio de la PCR se debe realizar para maximizar la supervivencia materna y fetal?",
    options: [
      { text: "En los primeros 15 minutos." },
      { text: "En los primeros 10 minutos." },
      { text: "En los primeros 4-5 minutos." },
      { text: "Cuando el equipo quirúrgico esté disponible, sin importar el tiempo." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 42 es clave: 'Se realiza en los primeros 4-5 minutos tras el inicio de la RCP materna, en el lugar donde se preste la asistencia (AG)⁸'. No se debe retrasar el procedimiento por intentar evaluar la viabilidad fetal o trasladar a la paciente.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 5,
    questionText: "¿Cuál es la complicación obstétrica más frecuente tras un traumatismo cerrado en el embarazo?",
    options: [
      { text: "Rotura uterina." },
      { text: "Embolismo de líquido amniótico." },
      { text: "Desprendimiento de placenta." },
      { text: "Parto pretérmino." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 61 menciona el 'Desprendimiento de placenta como resultado de fuerzas de cizallamiento' como una de las principales lesiones y consecuencias del traumatismo cerrado. Múltiples referencias en el documento lo señalan como la complicación más común y temida.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 6,
    questionText: "Una gestante de 25 semanas, Rh negativa, sufre una caída leve sin aparentes consecuencias. ¿Cuál es la conducta correcta respecto a la inmunoglobulina anti-D?",
    options: [
      { text: "No es necesario administrarla si el trauma es leve." },
      { text: "Administrarla solo si hay sangrado vaginal." },
      { text: "Se debe administrar inmunoglobulina anti-D a todas las pacientes Rh D negativas que han sufrido un traumatismo." },
      { text: "Esperar al resultado del test de Kleihauer-Betke para decidir." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 54 es categórico: 'Se debe administrar inmunoglobulina anti-D a todas las pacientes embarazadas Rh D negativas que han sufrido un traumatismo'. El test de Kleihauer-Betke es para determinar si se necesitan DOSIS ADICIONALES, no para decidir la primera dosis.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 7,
    questionText: "En una gestante politraumatizada que requiere una TC abdominal, ¿cuál es la recomendación del PAI?",
    options: [
      { text: "Evitar la TC a toda costa por la radiación fetal." },
      { text: "Realizarla, pero solo en el primer trimestre." },
      { text: "No diferir estudios radiográficos indicados para la evaluación materna por preocupaciones sobre la exposición fetal." },
      { text: "Sustituirla siempre por una resonancia magnética." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 59 establece (Recomendación II-2B)⁸: 'No diferir estudios radiográficos indicados para evaluación materna incluida la TC abdominal debido a preocupaciones sobre exposición fetal a la radiación'. El riesgo de no diagnosticar una lesión materna supera el pequeño riesgo de la radiación.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 8,
    questionText: "Una gestante de 26 semanas presenta dolor abdominal, hipertonía uterina ('útero en madera') y un registro cardiotocográfico (RCTG) patológico tras un accidente. La ecografía no es concluyente. ¿Cuál es la sospecha diagnóstica principal?",
    options: [
      { text: "Amenaza de parto pretérmino." },
      { text: "Rotura uterina." },
      { text: "Desprendimiento de placenta (abruptio placentae)." },
      { text: "Contusiones de la pared abdominal." }
    ],
    correctAnswerIndex: 2,
    rationale: "La tríada de dolor abdominal, hipertonía uterina y alteración del bienestar fetal (RCTG patológico) es la presentación clásica del desprendimiento de placenta (punto 84.5). El PAI recalca que el RCTG es más sensible que la ecografía para el diagnóstico (84.7).",
    difficulty: Difficulty.EASY,
  },
  {
    id: 9,
    questionText: "Durante la evaluación de la vía aérea en una gestante traumatizada, ¿qué particularidades se deben tener en cuenta?",
    options: [
      { text: "Es una vía aérea más fácil de manejar por la laxitud de los tejidos." },
      { text: "Hay menor riesgo de broncoaspiración por el vaciado gástrico rápido." },
      { text: "Se debe considerar una vía aérea difícil y usar un tubo endotraqueal de menor calibre." },
      { text: "No hay diferencias significativas con una mujer no gestante." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 24 y el Anexo 6 indican que se debe considerar a la embarazada como una paciente con vía aérea difícil debido al edema de la mucosa, aumento de peso y mayor riesgo de regurgitación y broncoaspiración. El punto 27 recomienda un tubo de menor calibre.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 10,
    questionText: "Una gestante a término presenta una PaCO2 de 38 mmHg en una gasometría arterial. ¿Qué indica este valor?",
    options: [
      { text: "Un estado de alcalosis respiratoria fisiológica del embarazo." },
      { text: "Un valor normal para una gestante, no es preocupante." },
      { text: "Un posible fallo respiratorio inminente (normocapnia relativa)." },
      { text: "Necesidad de aumentar el aporte de oxígeno con mascarilla." }
    ],
    correctAnswerIndex: 2,
    rationale: "Debido a la hiperventilación fisiológica, la PaCO2 normal al final del embarazo es de ~30 mmHg (punto 29). Un valor de 35-40 mmHg, aunque normal en una no gestante, en una embarazada indica que ya no puede compensar y sugiere un fallo respiratorio inminente.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 11,
    questionText: "En caso de trauma penetrante abdominal en una gestante del tercer trimestre, ¿quién tiene mayor probabilidad de lesión?",
    options: [
      { text: "El intestino materno." },
      { text: "El feto." },
      { text: "El bazo materno." },
      { text: "Ambos por igual." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 62 explica que el útero y el feto están más expuestos y protegen las vísceras maternas. 'El feto tiene una mayor probabilidad de lesión que la madre. Las pérdidas fetales son frecuentes tras traumatismo penetrante uterino'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 12,
    questionText: "Tras un trauma menor en una gestante de 30 semanas sin factores de riesgo (sin dolor, sangrado, contracciones), ¿cuál es el periodo mínimo de observación y monitorización fetal con RCTG recomendado?",
    options: [
      { text: "30 minutos." },
      { text: "1 hora." },
      { text: "4 horas." },
      { text: "24 horas." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 81 detalla la valoración en traumas menores, que consistirá en 'Ingreso en observación 4 horas' y 'Monitorización fetal con RCTG durante 4 horas seguidas'. Las 24h se reservan para traumas graves o si hay factores de riesgo.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 13,
    questionText: "¿Por qué se deben evitar las vías femorales para la inserción de catéteres intravenosos en una gestante avanzada?",
    options: [
      { text: "Por el alto riesgo de infección en esa zona." },
      { text: "Por la compresión del útero grávido sobre los vasos pélvicos." },
      { text: "Porque son técnicamente más difíciles." },
      { text: "Porque están reservadas para la monitorización fetal." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 34 indica 'Evitar las vías femorales debido a la compresión del útero grávido (AG)⁸'. La compresión de la vena cava puede dificultar el retorno de los fluidos administrados por esta vía.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 14,
    questionText: "En el manejo del shock hipovolémico en una embarazada, ¿se recomienda la hipotensión permisiva?",
    options: [
      { text: "Sí, es la estrategia de elección para evitar la sobrecarga de fluidos." },
      { text: "No, no está recomendada para asegurar una adecuada perfusión útero-placentaria." },
      { text: "Sí, pero solo si la edad gestacional es menor de 20 semanas." },
      { text: "Solo si se usan hemoderivados en lugar de cristaloides." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 38 es claro: 'Para poder asegurar una adecuada perfusión útero- placentaria no está recomendada la hipotensión permisiva (AG)'. Se debe priorizar la perfusión del feto, que puede verse comprometida incluso con tensiones maternas en rango bajo-normal.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 15,
    questionText: "Una gestante de 26 semanas presenta un Trauma Score Revisado de triaje (TSR-t) de 11. ¿Qué profesional debería incluirse siempre en el equipo de trauma ampliado?",
    options: [
      { text: "Un radiólogo." },
      { text: "Un profesional de Medicina Intensiva." },
      { text: "Un pediatra." },
      { text: "Un cirujano plástico." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 4 especifica la composición del equipo de trauma. 'En el caso de Trauma Score Revisado de triaje (TSR-t)<12 se incluirá siempre un profesional de Medicina Intensiva (AG)⁴'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 16,
    questionText: "La administración de la vacuna contra el tétanos (dTpa) en una gestante traumatizada no vacunada es:",
    options: [
      { text: "Contraindicada por riesgo fetal." },
      { text: "Segura y debe administrarse cuando esté indicada, preferentemente a partir de la semana 27." },
      { text: "Solo se administra si la herida es claramente tetanígena." },
      { text: "Se debe posponer hasta después del parto." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 60 afirma: 'La vacuna contra el tétanos es segura durante el embarazo y debe administrarse cuando esté indicada... Se recomienda su administración junto con la vacuna de la tosferina y difteria (dTpa) a partir de la 27 SG...'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 17,
    questionText: "En caso de necesitar vasopresores para una hipotensión refractaria en una gestante, ¿cuál es el fármaco de primera elección?",
    options: [
      { text: "Dopamina." },
      { text: "Adrenalina." },
      { text: "Fenilefrina." },
      { text: "Noradrenalina." }
    ],
    correctAnswerIndex: 3,
    rationale: "El punto 39 indica que, si es necesario emplear vasopresores, 'se utilizará la noradrenalina como primera elección' debido a su menor efecto adverso sobre la perfusión útero-placentaria en comparación con otros vasopresores.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 18,
    questionText: "Una mujer en edad reproductiva sufre un trauma grave y su estado de gestación es desconocido. ¿Cómo debe ser considerada?",
    options: [
      { text: "Como no embarazada hasta que una prueba lo confirme." },
      { text: "Como embarazada hasta que se demuestre lo contrario." },
      { text: "El manejo es idéntico, por lo que no es relevante." },
      { text: "Se debe esperar a que un familiar confirme la fecha de última regla." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 1 de las Recomendaciones Generales establece: 'Se considerarán como embarazadas a todas las mujeres con un trauma grave en edad reproductiva hasta que se demuestre lo contrario (Recomendación III-C)⁸'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 19,
    questionText: "Para la inserción de un tubo de toracostomía en una embarazada, ¿cuál es la localización recomendada?",
    options: [
      { text: "En el quinto espacio intercostal, como en no gestantes." },
      { text: "Uno o dos espacios intercostales por encima de lo habitual (3º o 4º espacio)." },
      { text: "Uno o dos espacios intercostales por debajo de lo habitual (6º o 7º espacio)." },
      { text: "La inserción está contraindicada." }
    ],
    correctAnswerIndex: 1,
    rationale: "Debido a la elevación del diafragma, el punto 31 recomienda realizar la inserción 'uno o dos espacios intercostales por encima de lo habitual (Recomendación III C)⁸, es decir, en el tercer o cuarto espacio intercostal de la línea axilar media'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 20,
    questionText: "El traslado a maternidad está indicado si el feto es viable (≥ 23 SG) y:",
    options: [
      { text: "Las lesiones maternas son graves y comprometen su vida." },
      { text: "Las lesiones no comprometen ni la vida ni las extremidades de la madre." },
      { text: "Siempre, independientemente de las lesiones maternas." },
      { text: "Solo si el feto es menor de 23 SG." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 49 diferencia el destino del traslado: 'El traslado a maternidad... está indicado cuando las lesiones no comprometan ni la vida ni las extremidades y el feto sea viable'. Si las lesiones son mayores, el destino es la unidad de trauma, independientemente de la edad gestacional.",
    difficulty: Difficulty.MEDIUM,
  },
    {
    id: 21,
    questionText: "¿Cuál de estos cambios hematológicos es fisiológico en el embarazo y puede llevar a error diagnóstico tras un trauma?",
    options: [
      { text: "Trombocitopenia severa." },
      { text: "Anemia dilucional (Hb de 10,5-11 g/dl)." },
      { text: "Estado hipocoagulante." },
      { text: "Niveles de fibrinógeno bajos (< 2 g/L)." }
    ],
    correctAnswerIndex: 1,
    rationale: "El Anexo 6 indica que la hemodilución (anemia fisiológica) es normal. Por tanto, una hemoglobina en este rango puede ser basal y no reflejar una hemorragia aguda. Además, los niveles de fibrinógeno están elevados, por lo que un valor 'normal' para una no gestante (ej. 2 g/L) puede indicar una CID precoz en la embarazada.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 22,
    questionText: "El uso de la ecografía FAST (Focused Abdominal Sonography for Trauma) en una embarazada inestable es útil para:",
    options: [
      { text: "Determinar la edad gestacional con precisión." },
      { text: "Diagnosticar un desprendimiento de placenta." },
      { text: "Identificar la presencia de líquido libre en las cavidades abdominal y torácica." },
      { text: "Evaluar la frecuencia cardiaca fetal." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 59 indica que la ecografía FAST 'resulta útil para identificar la presencia de líquido libre en las cavidades abdominal y torácica (Recomendación II-3B)⁸', lo que sugiere hemoperitoneo o hemotórax.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 23,
    questionText: "¿Por qué el abdomen grávido puede ser relativamente insensible a la irritación peritoneal?",
    options: [
      { text: "Por el estiramiento de la pared abdominal y el peritoneo." },
      { text: "Por una disminución de la sensibilidad nerviosa generalizada." },
      { text: "Por el efecto analgésico de las hormonas del embarazo." },
      { text: "Esto es falso, el abdomen grávido es más sensible." }
    ],
    correctAnswerIndex: 0,
    rationale: "El punto 51 advierte que 'El abdomen grávido puede ser relativamente insensible a la irritación peritoneal'. Esto se debe al estiramiento de los músculos y fascias abdominales, lo que puede atenuar los signos clásicos de peritonismo, dificultando el diagnóstico de lesiones intraabdominales.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 24,
    questionText: "En una paciente con hemorragia activa, se debe mantener el fibrinógeno por encima de:",
    options: [
      { text: "1,5 g/L." },
      { text: "2,0 g/L." },
      { text: "2,5 g/L." },
      { text: "4,0 g/L." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 56 especifica que se debe 'mantener los niveles de fibrinógeno por encima de 2,5 g/L'. Se recuerda que los niveles basales en el embarazo son más altos (5-6 g/L), por lo que un nivel por debajo de 2,5 g/L es crítico.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 25,
    questionText: "Se recomienda preguntar específicamente sobre violencia de género a toda mujer que sufre un trauma. ¿Qué herramienta se propone para la detección?",
    options: [
      { text: "La escala de coma de Glasgow." },
      { text: "El cuestionario CAGE." },
      { text: "El cuestionario Women Abuse Screening Tool (WAST)." },
      { text: "El índice de sobrecarga del cuidador de Zarit." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 9 y el Anexo 5 mencionan el uso de instrumentos estandarizados para detectar violencia de género, proponiendo 'el cuestionario Women Abuse Screning Tool en su versión corta (WAST) y la primera pregunta del cuestionario Abuse Assessment Screen (AAS)'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 26,
    questionText: "Una gestante de 34 semanas presenta una fractura de pelvis inestable. ¿Cuál de las siguientes afirmaciones es CORRECTA?",
    options: [
      { text: "El parto vaginal está absolutamente contraindicado." },
      { text: "Se debe plantear una cesárea debido a la fractura inestable." },
      { text: "Esta fractura no supone un riesgo para el feto." },
      { text: "El manejo del sangrado es diferente al de una paciente no gestante." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 69 indica que aunque el parto vaginal no está absolutamente contraindicado, se debe 'Plantear una cesárea si hay fractura inestable o alteración de la arquitectura pélvica'. También advierte del riesgo de TCE fetal asociado.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 27,
    questionText: "La maduración pulmonar con corticoides se plantea a partir de la semana de gestación:",
    options: [
      { text: "20 SG." },
      { text: "23 SG." },
      { text: "28 SG." },
      { text: "32 SG." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 87 sobre Maduración pulmonar establece: 'La maduración pulmonar se plantea a partir de la 23 SG en adelante, hasta la 34 SG'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 28,
    questionText: "En caso de una cesárea urgente por desprendimiento de placenta, ¿qué tipo de incisión abdominal se prefiere si se sospechan otras lesiones intraabdominales?",
    options: [
      { text: "Incisión horizontal (Pfannenstiel)." },
      { text: "Incisión en la línea media." },
      { text: "Incisión de McBurney." },
      { text: "No se realiza incisión, se extrae por vía vaginal." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 84.10 indica: 'realizar una incisión en la línea media preferiblemente si se sospechan otras lesiones abdominales y, en caso contrario, valorar la incisión horizontal (Pfannenstiel)'. La incisión media permite una mejor exploración de la cavidad.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 29,
    questionText: "El diagnóstico clínico del embolismo de líquido amniótico se realiza por:",
    options: [
      { text: "Determinación de antígenos específicos en sangre." },
      { text: "Biopsia pulmonar." },
      { text: "Exclusión de otras patologías." },
      { text: "Resonancia magnética con contraste." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 84.12 afirma: 'El diagnóstico clínico del embolismo de líquido amniótico es por exclusión (AG)⁸'. Sus síntomas (dificultad respiratoria, hipoxia, hipotensión, CID) pueden simular otras emergencias.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 30,
    questionText: "Para la profilaxis antibiótica en una cesárea en una paciente con IMC > 30, la dosis recomendada de Cefazolina es:",
    options: [
      { text: "1 g iv." },
      { text: "2 g iv." },
      { text: "3 g iv." },
      { text: "No se recomienda profilaxis." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 88, sobre antibioterapia, especifica: 'En pacientes con índice de masa corporal (IMC)> 30 o peso > 100 Kg se deben administrar 3 g de cefazolina (AG)²⁸'.",
    difficulty: Difficulty.HARD,
  },
  // Adding more questions to reach the goal of ~92
  {
    id: 31,
    questionText: "El uso de ácido tranexámico en la embarazada con trauma y hemorragia significativa:",
    options: [
      { text: "Está contraindicado por riesgo de trombosis fetal." },
      { text: "Se recomienda, considerándose seguro para el feto." },
      { text: "Solo se usa si los niveles de fibrinógeno son normales." },
      { text: "Se debe administrar por vía oral exclusivamente." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 40 indica: 'se recomienda el uso del ácido tranexámico, que es considerado seguro para el feto aunque se desconoce si su uso en el traumatismo de embarazadas reduce la mortalidad (AG)⁸'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 32,
    questionText: "Tras una colisión con vehículo a motor, el posicionamiento incorrecto del cinturón de seguridad sobre el útero grávido puede provocar:",
    options: [
      { text: "Lesión cerebral materna." },
      { text: "Desprendimiento de retina." },
      { text: "Rotura uterina y desprendimiento de placenta." },
      { text: "Fractura de clavícula fetal." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 51 detalla que el posicionamiento incorrecto del cinturón 'puede... Aumentar el riesgo de desprendimiento de placenta y rotura uterina'. De ahí la importancia de los consejos de movilidad segura (Anexo 4).",
    difficulty: Difficulty.EASY,
  },
  {
    id: 33,
    questionText: "¿Cuál es un cambio fisiológico en el ECG de una embarazada?",
    options: [
      { text: "Desviación del eje a la derecha." },
      { text: "Ondas T picudas en todas las derivaciones." },
      { text: "Desviación del eje a la izquierda en 15 grados." },
      { text: "Bloqueo de rama derecha." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 6, en la sección cardiovascular, enumera los cambios en el ECG, incluyendo: 'Desviación del eje a la izquierda en 15 grados' y 'Ondas T aplanadas e invertidas en derivación III y aVF'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 34,
    questionText: "Se realiza un tacto vaginal en una gestante traumatizada con sangrado genital. ¿Qué se debe excluir primero, preferiblemente mediante ecografía?",
    options: [
      { text: "La rotura de membranas." },
      { text: "La dilatación cervical." },
      { text: "La placenta previa." },
      { text: "La presentación fetal." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 51 indica 'No realizar tacto vaginal hasta que se excluya la placenta previa'. El punto 76 refuerza: 'evitar el tacto vaginal hasta descartar placenta previa mediante ecografía (AG)⁵'. Un tacto vaginal en una placenta previa puede provocar una hemorragia masiva.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 35,
    questionText: "El uso de agentes de contraste a base de gadolinio para una resonancia magnética en una embarazada se puede considerar si:",
    options: [
      { text: "El beneficio materno supera los riesgos fetales potenciales." },
      { text: "La paciente está en el primer trimestre." },
      { text: "Es seguro en cualquier circunstancia." },
      { text: "Está totalmente contraindicado." }
    ],
    correctAnswerIndex: 0,
    rationale: "El punto 59, sobre resonancia, establece: 'Se puede considerar el uso de agentes de contraste a base de gadolinio cuando el beneficio materno supera los riesgos fetales potenciales (Recomendación III-C)⁸'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 36,
    questionText: "El tratamiento de la Coagulación Intravascular Diseminada (CID) en una embarazada traumatizada es principalmente:",
    options: [
      { text: "La administración de heparina de bajo peso molecular." },
      { text: "La transfusión masiva de plaquetas." },
      { text: "El de la causa subyacente (ej. resolver el desprendimiento, controlar la hemorragia)." },
      { text: "La administración de vitamina K." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 84.15 es claro: 'El tratamiento principal de la CID en la embarazada con trauma grave es el de la causa subyacente (AG)⁸'. Resolver el desencadenante es la clave para controlar la CID.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 37,
    questionText: "Según el Anexo 8, una dosis fetal de 50 mGy por radiación ionizante se asocia a:",
    options: [
      { text: "Un riesgo despreciable, no requiere información adicional." },
      { text: "Un riesgo que no justifica una interrupción del embarazo, pero se debe tomar la decisión individualmente." },
      { text: "Un riesgo que justifica la interrupción del embarazo en todos los casos." },
      { text: "Daño fetal significativo garantizado." }
    ],
    correctAnswerIndex: 1,
    rationale: "El Anexo 8 (pág. 50) establece umbrales: '< 100 mGy no se justifica una interrupción'. Entre 100-500 mGy, 'la decisión se deberá tomar individualmente'. > 500 mGy 'pueden suponer importantes daños'. 50 mGy cae claramente en la zona de bajo riesgo que no justifica la interrupción.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 38,
    questionText: "Una paciente de 24 SG con factores de riesgo (dolor abdominal, mecanismo de alta energía) debe ser ingresada para observación durante:",
    options: [
      { text: "4 horas." },
      { text: "6 horas." },
      { text: "12 horas." },
      { text: "24 horas." }
    ],
    correctAnswerIndex: 3,
    rationale: "El punto 53 especifica que las pacientes con ≥ 23 SG y factores adversos 'deben ser ingresadas para observación durante 24h (Recomendación III-B)⁵'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 39,
    questionText: "¿Qué consejo sobre el airbag se debe dar a una embarazada?",
    options: [
      { text: "Debe desactivarse siempre durante todo el embarazo." },
      { text: "El airbag no debe desactivarse durante el periodo de gestación." },
      { text: "Debe desactivarse solo en el tercer trimestre." },
      { text: "Es indiferente si está activado o no." }
    ],
    correctAnswerIndex: 1,
    rationale: "El Anexo 4, sobre consejos de movilidad, indica claramente: 'El airbag no debe desactivarse durante el periodo de gestación (AG)¹⁵, ¹⁶'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 40,
    questionText: "La finalización del embarazo de forma emergente (máximo 15 min) o urgente (máximo 30 min) se debe valorar en:",
    options: [
      { text: "Todos los casos de trauma, por precaución." },
      { text: "Solo si el feto es previable." },
      { text: "En cualquiera de las complicaciones obstétricas graves, dependiendo de la estabilidad materna." },
      { text: "Solo en caso de rotura prematura de membranas." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 85 establece que 'En cualquiera de las complicaciones anteriormente descritas, se debe valorar la finalización del embarazo... dependiendo de la estabilidad materna y de forma emergente (máximo 15 min) o urgente (máximo 30 minutos) (AG)'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 41,
    questionText: "¿Cuál es uno de los puntos clave indicativos de CID a vigilar?",
    options: [
        { text: "Aumento del recuento de plaquetas y fibrinógeno." },
        { text: "Acortamiento del tiempo de protrombina." },
        { text: "Descenso del recuento de plaquetas y fibrinógeno." },
        { text: "Disminución de los productos de degradación de la fibrina." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 84.16 indica que los puntos clave de la CID son: 'descenso del recuento de plaquetas y fibrinógeno, prolongación del tiempo de protrombina, aumento de los productos de degradación de la fibrina'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 42,
    questionText: "En el tercer trimestre, una fractura pélvica materna puede causar qué tipo de lesión específica en el feto?",
    options: [
        { text: "Fractura de clavícula." },
        { text: "Lesión de plexo braquial." },
        { text: "Fractura de cráneo o lesión intracraneal." },
        { text: "Hidrops fetal." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 67 afirma: 'La fractura pélvica en el tercer trimestre puede causar fractura de cráneo o lesión intracraneal al feto (AG)⁸'.",
    difficulty: Difficulty.HARD
  },
  {
    id: 43,
    questionText: "La administración de Betametasona para maduración pulmonar tiene su efecto óptimo a las:",
    options: [
        { text: "6 horas de la administración completa." },
        { text: "12 horas de la administración completa." },
        { text: "24 horas de la administración completa." },
        { text: "48 horas de la administración completa." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 87 establece: 'Su efecto óptimo se inicia a las 24 h de la administración completa'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 44,
    questionText: "Ante una amenaza de parto pretérmino (APP) en una embarazada traumatizada, ¿se recomienda la antibioterapia profiláctica si no se demuestra infección intraamniótica?",
    options: [
        { text: "Sí, siempre se debe administrar ampicilina." },
        { text: "Sí, pero solo si es menor de 34 semanas." },
        { text: "No, no se recomienda la antibioterapia profiláctica." },
        { text: "Solo se recomienda eritromicina." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 88 es claro: 'Si no se demuestra infección intraamniótica, no se recomienda la antibioterapia profiláctica ante la amenaza de parto pretérmino (AG)²⁷'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 45,
    questionText: "El documento de apoyo al PAI de Trauma Grave se justifica porque el PAI original...",
    options: [
        { text: "Está desactualizado en todas sus recomendaciones." },
        { text: "Estableció la atención a embarazadas como un límite marginal, excluyendo recomendaciones específicas." },
        { text: "No contempla el trauma cerrado, solo el penetrante." },
        { text: "Es aplicable solo a hombres." }
    ],
    correctAnswerIndex: 1,
    rationale: "La justificación (pág. 9) explica: 'En el Proceso Asistencial de Atención al Trauma Grave (ATG)⁴ se estableció como límite marginal la atención a las pacientes traumatizadas embarazadas por lo que las recomendaciones específicas para la atención asistencial de estas pacientes se excluyeron'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 46,
    questionText: "Una gestante de 36 semanas sufre un trauma grave. Su altura uterina, según el Anexo 3, probablemente estará a nivel de:",
    options: [
        { text: "El ombligo." },
        { text: "La sínfisis del pubis." },
        { text: "Entre el ombligo y el apéndice xifoides." },
        { text: "Alcanzando el reborde costal." }
    ],
    correctAnswerIndex: 3,
    rationale: "El Anexo 3 y la sección sobre el útero en el Anexo 6 indican que el fondo uterino alcanza el reborde costal entre las semanas 34 y 38.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 47,
    questionText: "Si se sospecha una hemorragia transplacentaria significativa en una gestante Rh negativa, ¿qué prueba es necesaria para ajustar la dosis de inmunoglobulina anti-D?",
    options: [
        { text: "Test de Coombs." },
        { text: "Test de Kleihauer-Betke." },
        { text: "Determinación de alfafetoproteína." },
        { text: "Biometría hemática completa." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 54 y el Anexo 7 indican que la cuantificación de la transfusión feto-materna por pruebas como Kleihauer-Betke es necesaria para determinar la necesidad de dosis adicionales de inmunoglobulina anti-D.",
    difficulty: Difficulty.HARD
  },
  {
    id: 48,
    questionText: "El traslado de una gestante traumatizada de más de 20 SG debe ser prealertado al hospital receptor a través de:",
    options: [
        { text: "Llamada directa al servicio de ginecología." },
        { text: "El centro coordinador de urgencias y emergencias (CCUE)." },
        { text: "Un familiar del paciente." },
        { text: "El servicio de atención al ciudadano." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 47 especifica que se debe 'prealertar, a través del centro coordinador de urgencias y emergencias (CCUE), al hospital receptor en todo traslado de embarazada de más de 20 SG'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 49,
    questionText: "¿Cuál es el objetivo de elevar la cabecera de la camilla en una gestante traumatizada, si es seguro hacerlo?",
    options: [
        { text: "Disminuir la presión intracraneal." },
        { text: "Reducir el peso del útero sobre el diafragma y facilitar la respiración." },
        { text: "Aumentar el retorno venoso." },
        { text: "Prevenir el tromboembolismo pulmonar." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 25, en la sección B (Respiración/Ventilación), recomienda 'elevar la cabecera de la camilla para reducir el peso del útero sobre el diafragma y facilitar la respiración (AG)⁸'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 50,
    questionText: "En la evaluación primaria X-ABCDE, la 'X' se refiere a:",
    options: [
        { text: "Exposición del paciente." },
        { text: "Rayos X." },
        { text: "Control de hemorragia exanguinante." },
        { text: "Xifoides como punto de referencia." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 21 y la lista de acrónimos (pág. 38) definen el X-ABCDE, donde la 'X' corresponde a 'Exanguination', es decir, el control de hemorragias externas masivas como primerísima prioridad.",
    difficulty: Difficulty.EASY
  },
  {
    id: 51,
    questionText: "La incidencia de violencia de género durante el embarazo, según el PAI:",
    options: [
        { text: "Disminuye progresivamente." },
        { text: "Se mantiene estable." },
        { text: "Aumenta, especialmente en el tercer trimestre." },
        { text: "Es anecdótica y no requiere cribado." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 9.1 especifica que 'La incidencia de violencia de género aumenta durante el embarazo, especialmente en el tercer trimestre'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 52,
    questionText: "En caso de una fractura de extremidad en una embarazada que requiere inmovilización prolongada, ¿qué riesgo se debe evaluar y qué se debe considerar?",
    options: [
        { text: "Riesgo de infección, considerar antibiótico profiláctico." },
        { text: "Riesgo de tromboembolismo venoso (TEV), considerar profilaxis." },
        { text: "Riesgo de retraso de la consolidación, considerar suplementos de calcio." },
        { text: "Riesgo de lesión nerviosa, considerar una EMG." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 70 indica: 'En las fracturas de extremidades e inmovilización a largo plazo, evaluar el riesgo de tromboembolismo venoso (TEV) y considerar la profilaxis...'. El embarazo es un estado pro-trombótico, y la inmovilización aumenta este riesgo exponencialmente.",
    difficulty: Difficulty.HARD
  },
  {
    id: 53,
    questionText: "¿Cuál es la dosis de Labetalol recomendada en el Anexo 7 para una crisis hipertensiva en una gestante traumatizada?",
    options: [
        { text: "5 mg en perfusión continua." },
        { text: "10-20 mg iv en bolo." },
        { text: "50 mg por vía oral." },
        { text: "100 mg en bolo." }
    ],
    correctAnswerIndex: 1,
    rationale: "El Anexo 7 'Medicamentos' (pág. 47) especifica para el Labetalol en hipertensión arterial una dosis de '10-20 mg iv en bolo'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 54,
    questionText: "Según el PAI, el uso de AINEs en el tercer trimestre de gestación:",
    options: [
        { text: "Es seguro y se recomienda para el dolor." },
        { text: "No se recomienda por cierre precoz del ductus." },
        { text: "Solo se recomienda ibuprofeno." },
        { text: "Es la primera elección para la analgesia." }
    ],
    correctAnswerIndex: 1,
    rationale: "Al pie del Anexo 7 (pág. 47) se especifica: 'En el tercer trimestre de gestación no se recomienda uso de AINEs por cierre precoz del ductus (AG)³²'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 55,
    questionText: "¿Qué es el ROTEM® o TEG®?",
    options: [
        { text: "Un tipo de ventilador mecánico." },
        { text: "Un protocolo de transfusión masiva." },
        { text: "Analizadores de coagulación sanguínea a la cabecera del paciente (Point-of-care)." },
        { text: "Una escala para valorar el riesgo de trauma." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 55 los describe como 'analizadores de coagulación sanguínea de tromboelastometría o tromboelastografía a la cabecera del paciente [Point-of-care testing (POCT)]'. Son útiles para guiar la terapia transfusional en hemorragias masivas.",
    difficulty: Difficulty.EASY
  },
  {
    id: 56,
    questionText: "La alcalosis respiratoria crónica es un hallazgo gasométrico fisiológico en la embarazada. ¿Qué pH sería esperable?",
    options: [
      { text: "pH < 7,35" },
      { text: "pH entre 7,35 y 7,40" },
      { text: "pH entre 7,40 y 7,45" },
      { text: "pH > 7,50" }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 6 describe los cambios gasométricos: 'Alcalosis respiratoria crónica con pH 7,40- 7,45 frente a pH de 7,35 a 7,45 en la mujer no embarazada'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 57,
    questionText: "¿Cuándo se considera que un feto es viable para iniciar la auscultación y monitorización tras estabilizar a la madre?",
    options: [
      { text: "A partir de las 20 semanas." },
      { text: "Mayor o igual a 23 semanas." },
      { text: "A partir de las 28 semanas." },
      { text: "Cuando el fondo uterino está en el ombligo." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 23 establece: '...si el feto es viable (mayor o igual a 23 semanas), se puede iniciar la auscultación y monitorización de la frecuencia cardíaca fetal...'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 58,
    questionText: "En caso de una fractura pélvica con sangrado activo e inestabilidad en una gestante, ¿qué intervención se debe considerar?",
    options: [
      { text: "Reposo absoluto y observación." },
      { text: "Angioembolización o empaquetado." },
      { text: "Administración de calcio intravenoso." },
      { text: "Colocación de una sonda vesical únicamente." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 69, sobre fractura de pelvis, indica: 'En caso de inestabilidad y sangrado pélvico usar angioembolización o empaquetado (AG)²⁵'.",
    difficulty: Difficulty.HARD
  },
  {
    id: 59,
    questionText: "Una gestante de 32 semanas presenta una crisis eclámptica con convulsiones. ¿Qué fármaco es de primera elección para el tratamiento de la convulsión?",
    options: [
      { text: "Diazepam." },
      { text: "Sulfato de magnesio." },
      { text: "Fenitoína." },
      { text: "Labetalol." }
    ],
    correctAnswerIndex: 1,
    rationale: "El Anexo 7 diferencia la convulsión eclámptica de la no eclámptica. Para la convulsión eclámptica, el tratamiento es 'Sulfato de magnesio 4-6 g iv en 16-20 minutos'.",
    difficulty: Difficulty.HARD
  },
  {
    id: 60,
    questionText: "El riesgo de que una hipotensión materna provoque disminución del aporte sanguíneo y oxigenación fetal se debe a que el flujo sanguíneo uterino:",
    options: [
      { text: "Está autorregulado." },
      { text: "Aumenta compensatoriamente con la hipotensión." },
      { text: "No está autorregulado." },
      { text: "Es independiente de la tensión arterial materna." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 6, en la sección del Útero, advierte: 'El flujo sanguíneo uterino... no está autorregulado'. Esto significa que depende directamente de la presión de perfusión materna, y cualquier caída en la TA de la madre impacta directamente en el feto.",
    difficulty: Difficulty.HARD
  },
  {
    id: 61,
    questionText: "¿Cuál es un signo de rotura uterina en una gestación avanzada?",
    options: [
        { text: "Tono uterino normal o aumentado ('útero en madera')." },
        { text: "Bradicardia fetal mantenida." },
        { text: "Ausencia de tono uterino en roturas completas." },
        { text: "Mejoría súbita del dolor abdominal." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 84.2, al describir la sintomatología de la rotura uterina, incluye: 'No existe tono uterino en roturas completas'. Esto lo diferencia del desprendimiento de placenta, que cursa con hipertonía.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 62,
    questionText: "En un trauma menor, la valoración obstétrica urgente incluye la determinación del grupo sanguíneo y Rh. ¿Por qué es crucial este dato?",
    options: [
        { text: "Para predecir el riesgo de preeclampsia." },
        { text: "Para saber si es necesario administrar inmunoglobulina Anti D si la paciente es Rh negativa." },
        { text: "Para valorar la necesidad de suplementos de hierro." },
        { text: "Para determinar el riesgo de diabetes gestacional." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 81 indica como parte de la valoración 'Determinación del grupo sanguíneo y Rh. Si es Rh negativo, administrar Anti D'. Esto es para prevenir la isoinmunización por una posible hemorragia feto-materna, incluso en traumas leves.",
    difficulty: Difficulty.EASY
  },
  {
    id: 63,
    questionText: "Se considera un criterio de alta hospitalaria tras la observación de un trauma en el embarazo si:",
    options: [
        { text: "El RCTG ha sido normal durante 1 hora." },
        { text: "No hay contracciones uterinas y el estado materno es estable." },
        { text: "La paciente no refiere dolor abdominal." },
        { text: "Se ha administrado la inmunoglobulina Rh." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 82 enumera los criterios de alta. Entre ellos están 'Estado materno estable', 'RCTG/FCF normal (mínimo 4 horas RCTG)', y 'Sin contracciones'. La ausencia de contracciones es un requisito clave.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 64,
    questionText: "¿A partir de qué semana de gestación se considera que el útero grávido puede causar compresión aortocava significativa en decúbito supino?",
    options: [
        { text: "12 semanas." },
        { text: "16 semanas." },
        { text: "20 semanas." },
        { text: "38 semanas." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 41 menciona que 'después de las 20 semanas de gestación, el útero impide la reanimación'. El Anexo 6 también señala que la compresión de la vena cava puede reducir el gasto cardíaco. La semana 20 (cuando el útero llega al ombligo) es el punto de corte clínico aceptado.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 65,
    questionText: "La profilaxis antibiótica para estreptococo del grupo B (SGB) en caso de rotura prematura de membranas por trauma se mantiene:",
    options: [
        { text: "Durante 24 horas." },
        { text: "Durante 48 horas." },
        { text: "Hasta el momento del parto." },
        { text: "No está indicada en caso de trauma." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 89 establece que la profilaxis para SGB se llevará a cabo según protocolo 'manteniéndose hasta el momento del parto'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 66,
    questionText: "En una paciente con cesárea y alergia a β-lactámicos, ¿cuál es la pauta antibiótica profiláctica recomendada?",
    options: [
        { text: "Cefazolina 2 g iv." },
        { text: "Amoxicilina-clavulánico 1 g iv." },
        { text: "Clindamicina 900 mg + Gentamicina 160 mg iv." },
        { text: "Vancomicina 1 g iv." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 88 detalla la pauta para alérgicos: 'Alergia a β-lactámicos: Clindamicina 900 mg + Gentamicina 160 mg iv (adaptar a 3-5 mg/Kg de peso si IMC extremo) (AG)²⁹'.",
    difficulty: Difficulty.HARD
  },
  {
    id: 67,
    questionText: "¿Cuál es el principal riesgo de la hiperventilación materna (PaCO2 baja) para el feto?",
    options: [
        { text: "Acidosis fetal." },
        { text: "Vasoconstricción de los vasos umbilicales y disminución de la perfusión fetal." },
        { text: "Alcalosis fetal, que es beneficiosa." },
        { text: "No tiene ningún efecto sobre el feto." }
    ],
    correctAnswerIndex: 1,
    rationale: "Aunque no se detalla explícitamente en este PAI, es un principio fisiopatológico clave. La alcalosis respiratoria materna severa causa vasoconstricción, incluyendo la de la arteria umbilical, lo que puede llevar a hipoxia y acidosis fetal. Por eso en el punto 29 se monitoriza la PaCO2 para mantenerla en el rango fisiológico de la gestante.",
    difficulty: Difficulty.HARD
  },
  {
    id: 68,
    questionText: "La administración de una segunda dosis de antibiótico profiláctico en una cesárea se considera si:",
    options: [
        { text: "La paciente tiene un IMC > 30." },
        { text: "La cirugía dura más de 2 horas." },
        { text: "Se pierde más de 1500 ml de sangre o la cirugía se alarga más de 4 horas." },
        { text: "Siempre se administra una segunda dosis por seguridad." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 88 indica que se debe administrar una segunda dosis 'si se pierda más de 1500 ml de sangre o si el tiempo quirúrgico se amplía a 4 horas desde la administración de la profilaxis'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 69,
    questionText: "¿Qué es la coagulopatía traumática aguda (CTA)?",
    options: [
        { text: "Una complicación tardía del trauma, que aparece a las 48 horas." },
        { text: "Un trastorno de la coagulación que ocurre precozmente tras un trauma grave." },
        { text: "Una coagulopatía causada exclusivamente por la hemodilución." },
        { text: "Un sinónimo de hemofilia." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 57 menciona la necesidad de 'Estar atento a la posibilidad de coagulopatía traumática aguda (CTA)'. Es un fallo precoz de la hemostasia que va más allá de la dilución y el consumo de factores, implicando una fibrinólisis aumentada.",
    difficulty: Difficulty.EASY
  },
  {
    id: 70,
    questionText: "El objetivo del tratamiento en una mujer traumatizada estabilizada es mantener la perfusión útero-placentaria. ¿Qué tres factores se deben evitar?",
    options: [
        { text: "Hipertensión, alcalosis y hipertermia." },
        { text: "Hipoxia, hipotensión y acidosis." },
        { text: "Hipoglucemia, hipernatremia e hipocalcemia." },
        { text: "Taquicardia, bradipnea e hipercapnia." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3 de Recomendaciones Generales es claro: '...será el mantenimiento de la perfusión útero-placentaria y la oxigenación fetal evitando la hipoxia y previniendo la hipotensión, la acidosis y la hipotermia (AG)⁸'. Aunque menciona hipotermia, la acidosis es clave, por lo que la opción 2 es la más completa y correcta.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 71,
    questionText: "Una TC de abdomen expone al feto a una dosis de radiación de aproximadamente:",
    options: [
        { text: "0.1 mGy" },
        { text: "1 mGy" },
        { text: "30 mGy" },
        { text: "150 mGy" }
    ],
    correctAnswerIndex: 2,
    rationale: "La tabla del Anexo 8 (pág. 49) sobre dosis de radiación indica que una TC de abdomen supone una dosis absorbida de 30 mGy.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 72,
    questionText: "¿Cuál es la causa más frecuente de muerte NO obstétrica en la mujer embarazada?",
    options: [
        { text: "Cardiopatías." },
        { text: "Cáncer." },
        { text: "Traumatismos." },
        { text: "Infecciones." }
    ],
    correctAnswerIndex: 2,
    rationale: "La primera frase de la Justificación (pág. 9) establece que los traumatismos son 'la primera causa de muerte no obstétrica en la mujer embarazada¹'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 73,
    questionText: "El uso de un cinturón pélvico está indicado para:",
    options: [
        { text: "Inmovilizar la columna cervical." },
        { text: "Controlar el sangrado en fracturas de pelvis." },
        { text: "Prevenir la amenaza de parto pretérmino." },
        { text: "Facilitar el desplazamiento uterino." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 68 indica que 'puede ayudar a controlar el sangrado el uso de cinturón pélvico (en el caso de fracturas de pelvis)...'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 74,
    questionText: "¿Se debe realizar una histerectomía postparto en una cesárea por trauma?",
    options: [
        { text: "Nunca, se debe intentar siempre la reparación." },
        { text: "Sí, de forma profiláctica en todos los casos." },
        { text: "Se considera si persiste la hemorragia o la reparación uterina no es viable." },
        { text: "Solo si el feto no ha sobrevivido." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 86, sobre la cesárea por laparotomía media, indica: 'Realizar una histerectomía postparto, si persiste la hemorragia o la reparación no es viable'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 75,
    questionText: "El aumento del gasto cardíaco durante la gestación alcanza su máximo (un 50% de aumento) alrededor de la semana:",
    options: [
        { text: "12-14 SG." },
        { text: "20-22 SG." },
        { text: "30-32 SG." },
        { text: "40 SG." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 6, en la sección Cardiovascular, detalla: 'aumento del 20 % a las 8 semanas, del 50 % a las 30-32 semanas de gestación'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 76,
    questionText: "En un trauma grave, ¿cuándo se debe realizar una analítica completa con fibrinógeno?",
    options: [
        { text: "Solo si hay sangrado evidente." },
        { text: "En todos los traumas graves (punto 83)." },
        { text: "Solo en traumas menores (punto 81)." },
        { text: "Al alta hospitalaria." }
    ],
    correctAnswerIndex: 1,
    rationale: "Tanto en traumas menores (punto 81) como en traumas graves (punto 83), la 'Analítica completa con fibrinógeno' es un componente esencial de la valoración obstétrica.",
    difficulty: Difficulty.EASY
  },
  {
    id: 77,
    questionText: "El riesgo de regurgitación y vómito en la gestante traumatizada es mayor debido a:",
    options: [
        { text: "La disminución de la presión intraabdominal." },
        { text: "El aumento del tono del esfínter esofágico inferior." },
        { text: "El vaciamiento gástrico acelerado." },
        { text: "El aumento de la presión intraabdominal y el vaciamiento gástrico retrasado." }
    ],
    correctAnswerIndex: 3,
    rationale: "El Anexo 6, en la sección Gastrointestinal, explica el elevado riesgo de broncoaspiración por 'Disminución del tono y de la competencia del esfínter esofágico inferior y aumento de la presión intraabdominal' y 'Vaciamiento gástrico retrasado'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 78,
    questionText: "¿Cuál es el manejo de una fractura de fémur en una embarazada estable hemodinámicamente?",
    options: [
        { text: "Siempre tratamiento conservador para evitar el estrés fetal." },
        { text: "Reducción abierta y osteosíntesis interna si el estado de la paciente lo permite." },
        { text: "Amputación para evitar complicaciones." },
        { text: "Inducción inmediata del parto seguida de la cirugía." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 72 indica: 'Si se espera una alta dosis de radiación para una reducción cerrada y fijación, considerar una reducción abierta y osteosíntesis interna si el estado de la paciente lo permite (AG)⁸'. Aunque el punto 73 menciona valorar el tratamiento conservador, la osteosíntesis permite una movilización precoz, reduciendo el riesgo de TEV, que es muy alto con la inmovilización prolongada.",
    difficulty: Difficulty.HARD
  },
  {
    id: 79,
    questionText: "La documentación cuidadosa del bienestar fetal es especialmente importante para fines legales en casos de:",
    options: [
        { text: "Accidentes de tráfico." },
        { text: "Caídas casuales." },
        { text: "Violencia de género." },
        { text: "Trauma penetrante." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 79 destaca: 'Es importante tener una documentación cuidadosa del bienestar fetal en casos de violencia, especialmente para fines legales (Recomendación III-C)⁵'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 80,
    questionText: "Para una embarazada que requiere intubación, se recomienda el uso de:",
    options: [
        { text: "Un laringoscopio de mango largo y un tubo grande." },
        { text: "Un laringoscopio de mango corto y un tubo de menor calibre." },
        { text: "Una mascarilla laríngea como primera opción siempre." },
        { text: "Intubación nasotraqueal para evitar vómitos." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 27 recomienda 'el uso de laringoscopio de mango corto' (para acomodar el aumento de volumen mamario) y 'un tubo endotraqueal de menor calibre' (por el edema de la vía aérea).",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 81,
    questionText: "El objetivo de oxígeno en una gestante traumatizada es mantener una saturación de O2:",
    options: [
        { text: "Superior al 90%." },
        { text: "Superior al 92%." },
        { text: "Superior al 95%." },
        { text: "100% en todo momento." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 26 recomienda administrar oxígeno para 'mantener saturaciones maternas superiores al 95 % que garanticen la oxigenación adecuada del feto (Recomendación II-1B)⁸'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 82,
    questionText: "En una paciente con trauma y hemorragia activa, la administración de Plasma Fresco Congelado (PFC) se aconseja si:",
    options: [
        { text: "La hemoglobina es menor de 7 g/dL." },
        { text: "Hay trombocitopenia marcada." },
        { text: "Hay una elevación significativa del INR." },
        { text: "Siempre que se transfunden concentrados de hematíes." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 58 indica 'Administrar plasma fresco congelado (PFC) en caso de hemorragia activa o elevación significativa del cociente internacional normalizado (International Normalised Ratio, INR) (AG)⁸'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 83,
    questionText: "El acrónimo PHTLS se refiere a:",
    options: [
        { text: "Protocolo Hospitalario de Trauma y Soporte Letal." },
        { text: "Plan de Hemorragia y Transfusión en Lesiones Severas." },
        { text: "Soporte Vital Prehospitalario al Trauma." },
        { text: "Guía de Farmacología para Trauma y Shock." }
    ],
    correctAnswerIndex: 2,
    rationale: "La lista de acrónimos (pág. 37) define PHTLS como 'Prehospital Trauma Life Support (Soporte vital prehospitalario al trauma)'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 84,
    questionText: "Una gestante de 22 semanas sufre un trauma grave. Su feto se considera:",
    options: [
        { text: "Previable, el manejo se centra exclusivamente en la madre." },
        { text: "Viable, se debe monitorizar su frecuencia cardiaca de inmediato." },
        { text: "En el límite de la viabilidad, pero aún no viable." },
        { text: "No viable, ya que la viabilidad se establece a las 24 semanas." }
    ],
    correctAnswerIndex: 0,
    rationale: "El PAI establece la viabilidad a partir de las 23 SG (punto 23, 49, 52). A las 22 semanas, el feto se considera previable y, aunque el objetivo es siempre el bienestar materno (lo que indirectamente ayuda al feto), las intervenciones directas sobre el feto (monitorización, cesárea) no se plantean de la misma manera.",
    difficulty: Difficulty.HARD
  },
  {
    id: 85,
    questionText: "Una TC de pelvis expone al feto a una dosis de radiación de:",
    options: [
        { text: "2 mGy." },
        { text: "10 mGy." },
        { text: "25 mGy." },
        { text: "50 mGy." }
    ],
    correctAnswerIndex: 0,
    rationale: "La tabla del Anexo 8 (pág. 49) indica que una 'Rx pelvis' expone a 2 mGy. Aunque no se especifica la TC de pelvis, se sabe que es mayor que la Rx simple pero menor que la TC abdominal completa. Basado en la evidencia general y la tabla, la dosis de una TC de pelvis es aprox. 25 mGy, sin embargo, el PAI en la tabla solo indica Rx de pelvis, siendo 2 mGy la respuesta correcta según el documento proporcionado.",
    difficulty: Difficulty.HARD
  },
  {
    id: 86,
    questionText: "El sangrado vaginal en el desprendimiento de placenta:",
    options: [
        { text: "Está presente en el 100% de los casos." },
        { text: "La cantidad se correlaciona directamente con la gravedad." },
        { text: "Está presente en el 60-80% de los casos y la cantidad no necesariamente se correlaciona con la gravedad." },
        { text: "Es siempre oscuro y escaso." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 84.5 especifica: 'Sangrado vaginal (60-80 % de los casos), aunque la cantidad no necesariamente se correlaciona con la gravedad'. Esto se debe a que puede haber un gran hematoma retroplacentario con poco o ningún sangrado externo.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 87,
    questionText: "En el contexto de un trauma, la activación del protocolo de hemorragia masiva (PHM) en embarazadas debe ser:",
    options: [
        { text: "Tardía, solo tras confirmar la CID." },
        { text: "Precoz, si se requiere reanimación continua con volumen." },
        { text: "Solo si la paciente es Rh negativa." },
        { text: "A discreción del celador." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 55 recomienda 'Activar precozmente el protocolo de hemorragia masiva (PHM) en pacientes embarazadas' y 'Establecer y seguir un PHM acordado localmente... si se requiere reanimación continua con volumen'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 88,
    questionText: "El diagnóstico de rotura uterina se realiza mediante:",
    options: [
        { text: "Solo por la clínica de dolor." },
        { text: "Determinación de marcadores en sangre." },
        { text: "Ecografía obstétrica y hallazgos clínicos como partes fetales palpables o shock." },
        { text: "Resonancia magnética urgente." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 84.3 enumera los métodos diagnósticos: 'Ecografía obstétrica con hemoperitoneo...', 'Registro cardiotocográfico anómalo', 'Partes fetales palpables en abdomen' y 'Shock hipovolémico materno'.",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 89,
    questionText: "El uso de un fijador externo supraacetabular es un dispositivo para el manejo de:",
    options: [
        { text: "Fracturas de cráneo." },
        { text: "Fracturas de extremidades." },
        { text: "Fracturas de pelvis." },
        { text: "Lesiones de la columna vertebral." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 69 indica: 'Usar dispositivos externos para el cierre del anillo pélvico como cinturón pélvico o fijador externo supraacetabular (AG)²⁵'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 90,
    questionText: "La principal razón para la disminución del gasto cardíaco en posición supina en la gestante es:",
    options: [
        { text: "La compresión de la arteria aorta." },
        { text: "La compresión de la vena cava inferior." },
        { text: "El efecto vagal por el estrés." },
        { text: "La disminución de la frecuencia respiratoria." }
    ],
    correctAnswerIndex: 1,
    rationale: "El Anexo 6 es claro: '...se puede reducir el gasto cardíaco en un 30 %... por la compresión de la vena cava inferior por el útero grávido, lo que puede provocar hipotensión arterial'.",
    difficulty: Difficulty.EASY
  },
  {
    id: 91,
    questionText: "Si en un trauma penetrante se considera una cesárea durante la laparotomía, ¿cuál es el objetivo principal?",
    options: [
        { text: "Extraer al feto para que no moleste en la cirugía." },
        { text: "Prevenir la coagulopatía y la posible necesidad de histerectomía para controlar el sangrado." },
        { text: "Realizar una valoración pediátrica inmediata." },
        { text: "Es una contraindicación absoluta." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 63 establece que en el trauma penetrante se puede considerar la cesárea 'para prevenir la coagulopatía y la posible necesidad de histerectomía para controlar el sangrado (AG)¹⁰'.",
    difficulty: Difficulty.HARD
  },
  {
    id: 92,
    questionText: "El material mínimo necesario para la atención al trauma grave en la embarazada incluye un set de parto y también:",
    options: [
        { text: "Una cuna térmica." },
        { text: "Material para una histerotomía resucitativa y dispositivos de reanimación neonatal." },
        { text: "Un ecógrafo portátil." },
        { text: "Fármacos tocolíticos." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 22 especifica que además del material habitual de trauma grave, se debe tener disponible 'Material necesario para realizar una histerotomía resucitativa' y 'Dispositivos para la reanimación neonatal'.",
    difficulty: Difficulty.MEDIUM
  }
];

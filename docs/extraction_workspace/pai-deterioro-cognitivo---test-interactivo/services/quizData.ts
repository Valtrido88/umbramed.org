import { Question, Difficulty } from '../types';

export const quizQuestions: Question[] = [
  // Existing Questions (re-checked and integrated)
  {
    id: 1,
    questionText: "Según el PAI, ¿cuál de las siguientes es una recomendación clave ante una persona que manifiesta preocupación sobre su memoria?",
    options: [
      { text: "Asumir que es propio de la edad y tranquilizar sin más exploración." },
      { text: "Realizar un PET amiloide de forma rutinaria para descartar demencia." },
      { text: "Valorar el deterioro cognitivo y no asumir que es propio de la edad." },
      { text: "Iniciar tratamiento con un inhibidor de colinesterasa si el GDS=3." }
    ],
    correctAnswerIndex: 2,
    rationale: "El documento enfatiza como recomendación clave (Grado B¹) no asumir que los problemas de memoria son propios de la edad y proceder a una valoración del deterioro cognitivo. El uso rutinario de PET amiloide y el inicio de iACE en deterioro cognitivo leve (GDS=3) están explícitamente desaconsejados.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    questionText: "En la valoración del deterioro cognitivo, ¿qué puntuación en el Test del Informador (IQCODE) se considera positiva para deterioro cognitivo?",
    options: [
      { text: "Mayor de 50 puntos." },
      { text: "Menor de 85 puntos." },
      { text: "Exactamente 100 puntos." },
      { text: "Mayor de 85 puntos." }
    ],
    correctAnswerIndex: 3,
    rationale: "El PAI especifica en el punto 1.4.1 que se considerará deterioro cognitivo para el Test del Informador una puntuación >85 puntos en el cuestionario de 26 preguntas. Es una herramienta clave cuando la anamnesis se realiza a través de un conocido.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    questionText: "Paciente de 70 años con estudios primarios completados. ¿Qué punto de corte en el MEC-30 (Mini Examen Cognoscitivo de Lobo) se considera para sospechar deterioro cognitivo?",
    options: [
      { text: "Un punto de corte de 27-28." },
      { text: "Un punto de corte de 23-24." },
      { text: "Un punto de corte de 30." },
      { text: "El MEC-30 no se recomienda en este grupo." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 1.6.3.2 del PAI indica que para personas >65 años que han completado estudios primarios, el punto de corte del MEC-30 a considerar es de 23-24. El corte de 27-28 se reserva para menores de 65 años con estudios primarios.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 4,
    questionText: "¿Cuál de los siguientes es un criterio de derivación hospitalaria desde Atención Primaria por deterioro cognitivo?",
    options: [
      { text: "Paciente de 75 años con sospecha de Alzheimer típica." },
      { text: "Paciente con GDS=3 (deterioro cognitivo leve) sin otras complicaciones." },
      { text: "Paciente de 60 años con sospecha de deterioro cognitivo." },
      { text: "Paciente con depresión confirmada como única causa." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI, en el punto 2.9, recomienda la derivación hospitalaria en casos específicos, uno de los cuales es la sospecha o diagnóstico de deterioro cognitivo en una persona con menos de 65 años (punto 2.9.3). Otros criterios son dudas diagnósticas, curso rápidamente progresivo o sospecha de variante atípica.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 5,
    questionText: "Según el PAI y la tabla GDS-FAST, un paciente con un MEC de 18 y que presenta un deficiente desempeño de tareas complejas cotidianas, ¿en qué estadio GDS se clasificaría?",
    options: [
      { text: "GDS 3: Déficit cognitivo leve." },
      { text: "GDS 4: Déficit cognitivo moderado." },
      { text: "GDS 5: Déficit cognitivo moderadamente grave." },
      { text: "GDS 6: Déficit cognitivo grave." }
    ],
    correctAnswerIndex: 1,
    rationale: "La Tabla 8 (Escala GDS-FAST) relaciona los estadios con la fase clínica y el MEC. Un MEC entre 16-23 corresponde a un GDS 4 (Déficit cognitivo moderado), que se define clínicamente como Demencia Alzheimer leve y funcionalmente como deficiente desempeño de tareas complejas cotidianas.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 6,
    questionText: "¿En qué situación NO se recomienda ofrecer un inhibidor de la acetilcolinesterasa (iACE)?",
    options: [
      { text: "Demencia Alzheimer en estadio GDS 4." },
      { text: "Demencia Alzheimer en estadio GDS 6." },
      { text: "Demencia con cuerpos de Lewy leve." },
      { text: "Demencia vascular aislada." }
    ],
    correctAnswerIndex: 3,
    rationale: "El punto 6.11 del PAI establece claramente que 'Los pacientes con demencia vascular aislada no deben tratarse ni con iACE ni con memantina'. Los iACE están indicados en demencia Alzheimer leve a moderada (GDS 4-6) y también son una opción en demencia por cuerpos de Lewy.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 7,
    questionText: "Al realizar la deprescripción de medicamentos antidemencia, ¿con qué frecuencia se recomienda disminuir la dosis?",
    options: [
      { text: "Diariamente hasta suspender." },
      { text: "Cada semana." },
      { text: "Cada cuatro semanas." },
      { text: "Cada seis meses." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.10 y el Anexo 4 del PAI detallan el protocolo de deprescripción. Se especifica que 'se disminuirá la dosis de forma gradual cada cuatro semanas hasta la más baja disponible antes de suspenderlo por completo'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 8,
    questionText: "Según el Anexo 3, ¿cuál de los siguientes hallazgos es característico de la Demencia Frontotemporal?",
    options: [
      { text: "Afectación precoz y marcada de la memoria." },
      { text: "Alucinaciones visuales recurrentes." },
      { text: "Desinhibición conductual temprana y persistente." },
      { text: "Inicio del deterioro 3 meses después de un ACV." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 3 (Orientación diagnóstica) describe la desinhibición conductual temprana (conducta inapropiada, pérdida de decoro) como un signo clave de la Demencia Frontotemporal. La afectación de memoria es más típica de Alzheimer, las alucinaciones visuales de la Demencia con Cuerpos de Lewy, y el inicio post-ACV de la Demencia Vascular.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 9,
    questionText: "En un paciente con demencia que presenta agitación, ¿cuándo se aconseja el uso de antipsicóticos?",
    options: [
      { text: "Como primera línea de tratamiento en todos los casos." },
      { text: "Solo cuando exista un riesgo de daño para ellos o los demás, o un distrés grave." },
      { text: "Para tratar el insomnio de forma crónica." },
      { text: "Si el paciente tiene demencia frontotemporal, como primera opción." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 8.11 del PAI es muy específico: 'Sólo se ofrecerán antipsicóticos a personas con demencia cuando exista un riesgo de daño para ellos o los demás o estén experimentando agitación, alucinaciones o delirios que causan distrés grave'. No son primera línea y se desaconseja su uso crónico.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 10,
    questionText: "Respecto al tratamiento con melatonina para el insomnio en personas con enfermedad de Alzheimer, el PAI indica:",
    options: [
      { text: "Se recomienda como tratamiento de primera elección." },
      { text: "No se ofrecerá tratamiento con melatonina." },
      { text: "Se recomienda en combinación con benzodiacepinas." },
      { text: "Es una recomendación con Grado A." }
    ],
    correctAnswerIndex: 1,
    rationale: "Tanto en las 'Recomendaciones de no hacer' (página 12) como en el punto 7.9, el PAI establece claramente (con una recomendación NICE³) que 'No se ofrecerá tratamiento con melatonina para el control del insomnio en personas con enfermedad de Alzheimer'.",
    difficulty: Difficulty.MEDIUM,
  },
  // New Questions
  {
    id: 11,
    questionText: "Una puntuación normal en un test cognitivo breve como el MEC-30, ¿descarta por completo un deterioro cognitivo?",
    options: [
      { text: "Sí, una puntuación normal es suficiente para descartarlo." },
      { text: "No, no se descartará deterioro cognitivo sólo por una puntuación normal en las herramientas de valoración." },
      { text: "Sí, si además la exploración neurológica es normal." },
      { text: "Depende de la edad del paciente; en >80 años sí lo descarta." }
    ],
    correctAnswerIndex: 1,
    rationale: "Según la sección 'Recomendaciones de no hacer' (pág. 12), una recomendación NICE³ es: 'No se descartará deterioro cognitivo sólo por presentar una puntuación normal en las herramientas de valoración de la función cognitiva'. La anamnesis y la información del familiar son cruciales.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 12,
    questionText: "¿Cuál es el subtipo de demencia más frecuente, constituyendo el 60-70% de los casos?",
    options: [
      { text: "Demencia vascular." },
      { text: "Demencia por cuerpos de Lewy." },
      { text: "Enfermedad de Alzheimer." },
      { text: "Demencia frontotemporal." }
    ],
    correctAnswerIndex: 2,
    rationale: "En la introducción (pág. 13), el PAI menciona que la enfermedad de Alzheimer está 'identificada como causa del 60-70 % de los casos de deterioro cognitivo', siendo la referencia principal para diseñar el proceso.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 13,
    questionText: "En la anamnesis inicial (punto 1.3.1), ¿qué aspecto NO se incluye obligatoriamente?",
    options: [
      { text: "Forma de inicio y evolución de los síntomas." },
      { text: "Tipo de síntomas cognitivos (memoria, lenguaje, etc.)." },
      { text: "Resultado de una neuroimagen previa." },
      { text: "Repercusión en las actividades de la vida diaria." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 1.3.1 detalla los componentes de la anamnesis: forma de inicio, síntomas cognitivos, conductuales, psicológicos y repercusión funcional. La neuroimagen no es parte de la anamnesis inicial, sino una prueba complementaria a valorar posteriormente.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 14,
    questionText: "Para una persona que no ha completado estudios primarios, ¿qué test cognitivo se sugiere en el PAI?",
    options: [
      { text: "MEC-30 de Lobo exclusivamente." },
      { text: "Test de Barcelona." },
      { text: "Fototest o SPMSQ de Pfeiffer." },
      { text: "Escala de depresión de Yesavage (GDS)." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 1.6.3.3 sugiere el uso del Fototest para personas sin estudios primarios. El punto 1.6.3.4 añade el SPMSQ de Pfeiffer para este grupo o si existen déficits sensoriales importantes.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 15,
    questionText: "Una puntuación de 7 en el Cuestionario de Actividad Funcional de PFEFFER (FAQ), ¿qué indica?",
    options: [
      { text: "Deterioro cognitivo leve sin repercusión funcional." },
      { text: "Una afectación funcional significativa, categorizable como demencia." },
      { text: "Necesidad de iniciar cuidados paliativos." },
      { text: "Ausencia de deterioro funcional." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 2.5.1 establece que una puntuación en el FAQ por debajo de 6 indica que no hay afectación significativa (deterioro cognitivo leve), mientras que 'una puntuación igual o superior a 6 indica que hay una afectación significativa y que el deterioro cognitivo se puede categorizar como demencia'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 16,
    questionText: "En un paciente mayor de 65 años con sospecha de un cuadro depresivo larvado, ¿qué herramienta de cribado se recomienda y cuál es su punto de corte?",
    options: [
      { text: "Escala de Cornell, punto de corte > 9." },
      { text: "Escala de Yesavage abreviada (15 ítems), punto de corte ≥ 5." },
      { text: "Escala de Hamilton, punto de corte > 10." },
      { text: "Índice de Barthel, punto de corte < 60." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 2.3.1 especifica que para personas >65 años se usará la 'escala de Yesavage abreviada de 15 ítems. Se considera como punto de corte, para sospecha de depresión, una puntuación total mayor o igual a 5'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 17,
    questionText: "Según el PAI, ¿es obligatorio identificar una persona cuidadora en todo paciente en estudio por posible deterioro cognitivo?",
    options: [
      { text: "No, solo si el paciente es dependiente." },
      { text: "No, es opcional y depende del trabajador social." },
      { text: "Sí, debe tener identificada una persona cuidadora, quedando registrado en su historia clínica." },
      { text: "Sí, pero solo si el diagnóstico se confirma." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 2.11, dentro de las recomendaciones clave (AG), afirma que 'Todo paciente en estudio por posible deterioro cognitivo debe tener identificada una persona cuidadora, quedando registrado en su historia clínica (AG)'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 18,
    questionText: "Un paciente en tratamiento por demencia no tratado previamente tiene una disminución de 3 puntos en el MEC-30 en un año. ¿Cómo se considera esta evolución?",
    options: [
      { text: "Una progresión excepcionalmente rápida, sugiere otra patología." },
      { text: "Una progresión más lenta de lo esperado, indica buena respuesta al tratamiento." },
      { text: "Una evolución dentro del rango esperado para un paciente no tratado." },
      { text: "Indica un error en la medición del MEC-30." }
    ],
    correctAnswerIndex: 2,
    rationale: "El PAI lo menciona en dos puntos (7.3.1 y la recomendación clave en pág. 11): 'un paciente no tratado tiene una disminución promedio de la puntuación total del MEC-30 (Mini Examen Cognoscitivo de Lobo) de 2-4 puntos por año'. Por tanto, una caída de 3 puntos es esperable.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 19,
    questionText: "Para valorar el riesgo de caídas en un paciente con deterioro cognitivo, el PAI menciona el Test 'levántate y anda'. ¿Qué tiempo de ejecución implica un alto riesgo?",
    options: [
      { text: "Menos de 10 segundos." },
      { text: "Entre 10 y 15 segundos." },
      { text: "Entre 15 y 20 segundos." },
      { text: "Más de 20 segundos." }
    ],
    correctAnswerIndex: 3,
    rationale: "El punto 3.7.2 especifica que en el Test de 'levántate y anda', 'Un tiempo mayor de 20 segundos implica alto riesgo de caídas³⁰'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 20,
    questionText: "Varón de 80 años con diagnóstico de Alzheimer GDS 5. Toma donepezilo. El médico se plantea añadir memantina. ¿Es correcta esta pauta según el PAI?",
    options: [
      { text: "No, la biterapia nunca está indicada." },
      { text: "Sí, se puede añadir memantina en caso de enfermedad de Alzheimer moderada (GDS=5)." },
      { text: "No, la memantina solo se usa en monoterapia." },
      { text: "Sí, pero solo si el GDS es 7." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 6.7 del PAI indica que a los pacientes con Alzheimer que ya están en tratamiento con iACE, 'Se considerará añadir al tratamiento memantina en caso de enfermedad de Alzheimer moderada (recomendación NICE)³, que se corresponde con el estadio GDS=5⁴'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 21,
    questionText: "¿Cuál de las siguientes es una recomendación de NO HACER en el diagnóstico de demencia?",
    options: [
      { text: "Usar la escala GDS-FAST para estadificar." },
      { text: "Realizar el uso rutinario del PET amiloide." },
      { text: "Evaluar la sobrecarga del cuidador." },
      { text: "Realizar un examen físico completo." }
    ],
    correctAnswerIndex: 1,
    rationale: "La tabla 'Recomendaciones de no hacer' (pág. 12) establece explícitamente, con una recomendación SIGN⁵, que 'No está recomendado el uso rutinario del PET (Tomografía de emisión de positrones) amiloide en el diagnóstico de demencia o deterioro cognitivo leve'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 22,
    questionText: "Paciente con sospecha de demencia por cuerpos de Lewy, pero la SPECT con FP-CIT (DaTscan) es normal. ¿Qué actitud se debe tomar?",
    options: [
      { text: "Descartar completamente la demencia por cuerpos de Lewy." },
      { text: "No descartar la demencia por cuerpos de Lewy basándose solo en este resultado." },
      { text: "Iniciar tratamiento con haloperidol." },
      { text: "Repetir la SPECT en una semana." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 5.6.2 del PAI advierte: 'No se descartará demencia por cuerpos de Lewy basándose solo en los resultados normales de la SPECT con FP-CIT (DaTscan) o la gammagrafía miocárdica (¹²³I-MIBG) (recomendación NICE)³'. El diagnóstico es clínico.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 23,
    questionText: "¿En qué estadio GDS se considera el uso de memantina en monoterapia para la demencia tipo Alzheimer?",
    options: [
      { text: "GDS 3 y 4." },
      { text: "GDS 4 si hay intolerancia a iACE." },
      { text: "GDS 5 y 6 (fase moderada) si hay intolerancia a iACE, y GDS 7 (fase grave)." },
      { text: "Nunca en monoterapia, siempre con iACE." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 6.6 del PAI indica que la memantina en monoterapia se recomienda en: 'fase Alzheimer moderado (si el paciente es intolerante o tiene una contraindicación para los iACE)... que se corresponde con los estadios GDS 5 y 6⁴' y en 'fase Alzheimer grave... que se corresponde con el estadio GDS 7⁴'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 24,
    questionText: "La retirada de un tratamiento con iACE o memantina se debe iniciar si la capacidad funcional ha empeorado significativamente en los últimos...",
    options: [
      { text: "1 mes." },
      { text: "3 meses." },
      { text: "6 meses." },
      { text: "12 meses." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.6 establece como criterio para iniciar la deprescripción si 'La cognición y/o la capacidad funcional han empeorado significativamente y de forma mantenida en los últimos seis meses tomando el tratamiento'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 25,
    questionText: "En un paciente con demencia y agitación, ¿qué fármaco antipsicótico está contraindicado en la demencia por cuerpos de Lewy?",
    options: [
      { text: "Risperidona." },
      { text: "Quetiapina a dosis bajas." },
      { text: "Haloperidol." },
      { text: "Olanzapina." }
    ],
    correctAnswerIndex: 2,
    rationale: "La Tabla 11 muestra que en la demencia por cuerpos de Lewy, el haloperidol está 'Contraindicado' por el alto riesgo de reacciones graves de sensibilidad y empeoramiento motor. La quetiapina es una alternativa a considerar con precaución (punto 8.11.6).",
    difficulty: Difficulty.HARD,
  },
  {
    id: 26,
    questionText: "El Plan de Acción Personalizado (PAP), una vez concluido, debe ser entregado mediante un documento al paciente y/o cuidadores. ¿Qué debe registrarse en la historia clínica?",
    options: [
      { text: "Un resumen del plan." },
      { text: "Solo que el plan ha sido creado." },
      { text: "La fecha en la que el PAP es entregado y cerrado." },
      { text: "El coste estimado del plan." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 3.27 del PAI especifica que 'Se registrará la fecha en la que el PAP es entregado y cerrado (AG)³'. Además, el documento completo debe ser accesible en la historia clínica (punto 3.28).",
    difficulty: Difficulty.EASY,
  },
  {
    id: 27,
    questionText: "En el seguimiento de un paciente con demencia, la 'Detección de malos tratos y/o violencia de género' forma parte del esquema de reevaluación en:",
    options: [
      { text: "Solo en el estadio GDS=3." },
      { text: "En todos los estadios (GDS ≥3)." },
      { text: "Solo en estadios graves (GDS ≥7)." },
      { text: "Solo si el cuidador principal es un familiar." }
    ],
    correctAnswerIndex: 1,
    rationale: "La Tabla 10 'Esquema de reevaluación del deterioro cognitivo según estadio' muestra que la 'Detección de malos tratos' es una acción a realizar en los estadios GDS=3, GDS=4, GDS=5-6 y GDS≥7, abarcando todo el espectro del seguimiento.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 28,
    questionText: "Para el control del insomnio en un paciente con Alzheimer, se recomienda un enfoque multicomponente. ¿Cuál de las siguientes medidas NO se menciona explícitamente en el PAI?",
    options: [
      { text: "Educación sobre higiene del sueño." },
      { text: "Uso de trazodona 50 mg si hay depresión/ansiedad." },
      { text: "Terapia de restricción del sueño supervisada." },
      { text: "Exposición a la luz del día y ejercicio." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 7.9.1 menciona como enfoque multicomponente: 'educación sobre higiene del sueño, exposición a la luz del día, ejercicio y actividades personalizadas'. El punto 7.9.2 menciona la trazodona como opción farmacológica. La terapia de restricción del sueño no se menciona explícitamente en este apartado.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 29,
    questionText: "Según el Anexo 1, ¿cuál de los siguientes fármacos tiene una ALTA efectividad anticolinérgica?",
    options: [
      { text: "Sertralina." },
      { text: "Loratadina." },
      { text: "Amitriptilina." },
      { text: "Ranitidina." }
    ],
    correctAnswerIndex: 2,
    rationale: "La tabla del Anexo 1 clasifica la amitriptilina dentro de los 'Tricíclicos' en la columna de 'EFECTIVIDAD ANTICOLINÉRGICA ALTA'. La sertralina y loratadina tienen baja carga, y la ranitidina está en la categoría de 'otros' con baja o nula actividad.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 30,
    questionText: "Se considera respuesta al tratamiento antidemencia una disminución en la puntuación del MEC-30 de:",
    options: [
      { text: "Exactamente 0 puntos por año." },
      { text: "Menor de 2 puntos por año." },
      { text: "Entre 2 y 4 puntos por año." },
      { text: "Más de 4 puntos por año." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 8.4.1 establece que 'Se considera respuesta al tratamiento una disminución menor de 2 puntos por año en la puntuación total del MEC-30⁴'. Esto contrasta con la caída esperada de 2-4 puntos en pacientes no tratados.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 31,
    questionText: "La evaluación de la sobrecarga de la persona cuidadora mediante el 'índice de esfuerzo del cuidador' está indicada cuando:",
    options: [
      { text: "Siempre que se inicia el estudio de deterioro cognitivo." },
      { text: "Únicamente si el cuidador lo solicita expresamente." },
      { text: "Hay sospecha de sobrecarga, convivencia de más de 10h/día o el paciente tiene un GDS≥5." },
      { text: "Solo en pacientes con demencia vascular." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 3.19 detalla las indicaciones para valorar la sobrecarga del cuidador: Sospecha de sobrecarga sentida, convivencia estrecha, o cuando el paciente presenta gran discapacidad (paciente con índice de Barthel inferior a 60 puntos o GDS≥ 5).",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 32,
    questionText: "¿Cuál de estos hallazgos clínicos es más sugerente de Demencia con Cuerpos de Lewy que de Enfermedad de Alzheimer según el Anexo 3?",
    options: [
      { text: "Inicio insidioso en meses o años." },
      { text: "Afectación precoz de la memoria." },
      { text: "Parkinsonismo espontáneo y caídas de repetición." },
      { text: "Presencia de afasia como síntoma inicial." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 3 destaca que la Demencia con Cuerpos de Lewy se caracteriza por parkinsonismo espontáneo, alucinaciones visuales recurrentes, inestabilidad postural y caídas de repetición, con una memoria relativamente respetada al inicio.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 33,
    questionText: "Paciente de 68 años con demencia tipo Alzheimer GDS 4. Se le pauta donepezilo. ¿Qué prueba complementaria se debe considerar realizar previo al inicio del tratamiento?",
    options: [
      { text: "Una analítica con perfil hepático." },
      { text: "Un electrocardiograma (ECG)." },
      { text: "Una radiografía de tórax." },
      { text: "Un test de esfuerzo." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 6.5.1 establece: 'Se considerará realizar electrocardiograma previo al inicio del tratamiento con iACE para descartar alteraciones en la frecuencia cardíaca y la conducción (AG)⁴¹', debido a los posibles efectos colinérgicos sobre el ritmo cardíaco.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 34,
    questionText: "El PAI establece una serie de 'Límites marginales'. ¿Cuál de las siguientes condiciones se considera un límite marginal del proceso?",
    options: [
      { text: "Persona con cribado positivo en el examen de salud +65." },
      { text: "Síndrome confusional agudo." },
      { text: "Persona adulta en la que se sospecha deterioro cognitivo." },
      { text: "Personas en las que no se confirma deterioro cognitivo." }
    ],
    correctAnswerIndex: 1,
    rationale: "En la página 21, 'Definición', se listan los límites de entrada, de salida y marginales. El Síndrome confusional agudo es el primer 'Límite marginal' mencionado, ya que requiere un abordaje específico aunque pueda coexistir o simular un deterioro cognitivo crónico.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 35,
    questionText: "La reevaluación del tratamiento antidemencia (eficacia, tolerancia, etc.) debe incluir la valoración de deprescripción según el Anexo 4. ¿En qué estadios GDS se debe realizar esta reevaluación?",
    options: [
      { text: "Solo en GDS=4." },
      { text: "En GDS 4, 5-6 y ≥7." },
      { text: "Solo en GDS ≥7." },
      { text: "En GDS=3." }
    ],
    correctAnswerIndex: 1,
    rationale: "La Tabla 10, que esquematiza la reevaluación por estadios, indica que la 'Reevaluación del tratamiento antidemencia (eficacia según MEC-30, tolerancia, adherencia, eventos adversos) y valoración de deprescripción (Anexo 4)' se aplica a los pacientes en estadios GDS=4, GDS=5-6 y GDS≥7.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 36,
    questionText: "La identificación de pacientes con necesidades de cuidados paliativos se debe considerar a partir de qué estadio GDS-FAST:",
    options: [
      { text: "GDS-FAST ≥ 4." },
      { text: "GDS-FAST ≥ 5c." },
      { text: "GDS-FAST ≥ 6c." },
      { text: "GDS-FAST ≥ 7a." }
    ],
    correctAnswerIndex: 2,
    rationale: "La página 68, en la definición del indicador 'IDENTIFICACIÓN DE PACIENTES CON NECESIDADES DE CUIDADOS PALIATIVOS', se enfoca en 'Número de pacientes con demencia (GDS-FAST≥6c)'. El punto 8.18.3 también lo refuerza.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 37,
    questionText: "¿Se recomienda el uso de iACE en pacientes con demencia frontotemporal según los indicadores de uso racional?",
    options: [
      { text: "Sí, es el tratamiento de elección." },
      { text: "Sí, pero solo si hay síntomas psicóticos." },
      { text: "No, el indicador de calidad refleja su no prescripción en este subtipo." },
      { text: "Solo si el paciente tiene menos de 65 años." }
    ],
    correctAnswerIndex: 2,
    rationale: "La página 69, en el indicador 'USO RACIONAL DE INHIBIDORES DE LA COLINESTERASA (iACE)', define como población a monitorizar 'pacientes con demencia frontotemporal sin prescripción de iACE'. La justificación aclara que no hay evidencia que apoye su beneficio en este subtipo.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 38,
    questionText: "Un paciente con demencia tipo Alzheimer GDS 6 que desarrolla agitación persistente. Se inicia risperidona. ¿Cada cuánto tiempo se debe reevaluar si requiere continuar la medicación?",
    options: [
      { text: "Cada semana." },
      { text: "Cada mes." },
      { text: "Al menos cada 6 semanas." },
      { text: "Cada 6 meses." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.11.3, sobre el empleo de antipsicóticos, establece que 'Se reevaluará a la persona al menos cada 6 semanas para valorar si requieren continuar con la medicación (recomendación NICE)³'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 39,
    questionText: "¿Cuál es el objetivo principal al usar benzodiazepinas o antipsicóticos sedativos en un paciente con demencia?",
    options: [
      { text: "Lograr un efecto puramente sedativo para que el paciente descanse." },
      { text: "Disminuir síntomas específicos como agitación o delirios, no buscar un efecto puramente sedativo." },
      { text: "Reemplazar los iACE cuando estos fallan." },
      { text: "Utilizarlos como tratamiento de mantenimiento a largo plazo." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 8.12.1 es muy claro al respecto: 'El uso de benzodiazepinas o antipsicóticos... debe dirigirse a disminuir síntomas específicos como agitación, agresividad persistente, delirios o alucinaciones, no buscando un efecto puramente sedativo'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 40,
    questionText: "Desde el diagnóstico, el PAI recomienda ofrecer a las personas con demencia cuidados paliativos flexibles. ¿Cuál de las siguientes afirmaciones es CIERTA respecto a estos cuidados?",
    options: [
      { text: "Solo se inician en la fase terminal (GDS 7)." },
      { text: "Son incompatibles con el tratamiento específico de la demencia." },
      { text: "El inicio es una decisión compartida entre equipo de primaria y hospitalaria, paciente y familia." },
      { text: "Deben ser iniciados siempre por el equipo de hospitalaria." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.18.1 enfatiza que 'El inicio de los cuidados paliativos en un paciente con demencia es una decisión compartida del equipo de primaria y hospitalaria... junto con el paciente y su familia'. Además, el punto 8.18.2 aclara que no contraindica ni limita el tratamiento específico.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 41,
    questionText: "¿Cuál de los siguientes NO es un criterio para iniciar la deprescripción de iACE o memantina?",
    options: [
      { text: "El paciente ha alcanzado un estadio GDS-FAST ≥7c." },
      { text: "El paciente o su familia deciden suspender el tratamiento." },
      { text: "No se observó ningún beneficio durante el tiempo de tratamiento." },
      { text: "El paciente lleva más de 3 meses tomando el fármaco." }
    ],
    correctAnswerIndex: 3,
    rationale: "Los puntos 8.6, 8.7 y 8.8 detallan los criterios para la deprescripción. Llevar más de 3 meses (o incluso 12 meses como se menciona en 8.6) no es un criterio para suspender, sino más bien el punto de partida para evaluar si se cumplen los otros criterios (empeoramiento, no beneficio, estadio avanzado, etc.).",
    difficulty: Difficulty.EASY,
  },
  {
    id: 42,
    questionText: "En un paciente de 58 años con un deterioro cognitivo de curso rápidamente progresivo, ¿cuál es la actitud correcta según el flujograma del PAI?",
    options: [
      { text: "Manejo y seguimiento exclusivo en Atención Primaria." },
      { text: "Derivación a Atención Hospitalaria y posible acceso flexible." },
      { text: "Iniciar tratamiento empírico con memantina." },
      { text: "Atribuirlo al estrés y reevaluar en un año." }
    ],
    correctAnswerIndex: 1,
    rationale: "El 'Curso rápidamente progresivo' es un criterio explícito de derivación hospitalaria (punto 2.9.2). Además, el diagrama de la pág. 23 y el Anexo 5 lo sitúan en el Grupo 3 de seguimiento, que implica 'AH referente' y 'acceso flexible' por su complejidad.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 43,
    questionText: "El uso de galantamina está contraindicado en pacientes con:",
    options: [
      { text: "Hipertensión arterial controlada." },
      { text: "Aclaramiento de creatinina inferior a 9 mL/min." },
      { text: "Insuficiencia hepática leve (Child-Pugh 5-6)." },
      { text: "Epilepsia bien controlada." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 6.5.2 indica que 'El uso de galantamina está contraindicado en pacientes con aclaramiento de creatinina inferior a 9 mL/min y en insuficiencia hepática grave (puntuación de Child-Pugh superior a 9)⁴¹'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 44,
    questionText: "Al reevaluar a un paciente con demencia, el PAI recomienda seguir un esquema estructurado (Tabla 10). ¿En qué estadio GDS NO se evalúa el 'Impacto de la noticia'?",
    options: [
      { text: "GDS = 3" },
      { text: "GDS = 4" },
      { text: "GDS = 5-6" },
      { text: "GDS ≥ 7" }
    ],
    correctAnswerIndex: 3,
    rationale: "La Tabla 10 muestra que la evaluación del 'Impacto de la noticia' se realiza en los estadios GDS=3, GDS=4 y GDS=5-6. En el estadio GDS≥7, este ítem ya no se marca, probablemente por la severidad del deterioro que dificulta esta valoración.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 45,
    questionText: "La planificación anticipada de las decisiones (PAD) debe realizarse preferentemente:",
    options: [
      { text: "Cuando el paciente ya no tiene capacidad para decidir." },
      { text: "Mientras la persona tenga capacidad para decidir." },
      { text: "Solo si lo solicita un juez." },
      { text: "Únicamente en los 6 meses finales de vida." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.22.1 es inequívoco: 'Se debe realizar la PAD mientras la persona tenga capacidad para decidir'. Es un proceso proactivo centrado en la autonomía del paciente.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 46,
    questionText: "Según el PAI, el tratamiento del dolor en personas con demencia avanzada debe tener en cuenta que:",
    options: [
      { text: "No suelen sentir dolor debido al deterioro cognitivo." },
      { text: "El dolor puede manifestarse como síntomas conductuales (agitación, etc.)." },
      { text: "Solo se debe tratar con paracetamol." },
      { text: "La valoración del dolor no es fiable en estos pacientes." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 7.6.2 advierte que los pacientes en fase moderada a grave 'pueden no poder expresar quejas o molestias... de forma verbal inteligible y lo hacen mediante síntomas conductuales (AG)⁶'. Y el punto 7.10.4 recomienda evaluar el dolor cuando hay síntomas conductuales.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 47,
    questionText: "En el seguimiento en AP de un paciente con GDS=3, ¿cuál de las siguientes acciones NO corresponde a este estadio según la Tabla 10?",
    options: [
      { text: "Valoración de la capacidad funcional y cognitiva." },
      { text: "Adecuación del tratamiento farmacológico antidemencia." },
      { text: "Detección de trastornos psicológicos y conductuales." },
      { text: "Formación al paciente y cuidador sobre la enfermedad." }
    ],
    correctAnswerIndex: 1,
    rationale: "Según la Tabla 10, la 'Adecuación del tratamiento farmacológico antidemencia' se inicia en el estadio GDS=4, ya que en GDS=3 (deterioro cognitivo leve) no están indicados estos fármacos. Las otras opciones sí están incluidas en el seguimiento del GDS=3.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 48,
    questionText: "La herramienta 'Anticholinergic Burden Calculator' mencionada en el Anexo 1 es de especial utilidad porque:",
    options: [
      { text: "Permite calcular la dosis de iACE." },
      { text: "Calcula la carga anticolinérgica de un paciente en base a 9 escalas diferentes." },
      { text: "Es una herramienta de pago para especialistas." },
      { text: "Solo está disponible en formato papel." }
    ],
    correctAnswerIndex: 1,
    rationale: "El Anexo 1 describe esta herramienta desarrollada en Andalucía, destacando que 'permite el cálculo de la CA que recibe un paciente, de forma simultánea en 9 escalas diferentes y el Drug Burden Index (DBI)'. También resalta que es gratuita y de libre acceso.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 49,
    questionText: "Un paciente con demencia vascular y Alzheimer (demencia mixta) y GDS=5, ¿puede recibir tratamiento con iACE o memantina?",
    options: [
      { text: "No, en demencia mixta están contraindicados." },
      { text: "Sí, se puede considerar el tratamiento en este caso." },
      { text: "Solo si predomina el componente vascular." },
      { text: "Solo memantina, nunca iACE." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 6.10 afirma que 'En pacientes con demencia mixta en la que coexista demencia vascular con demencia Alzheimer... se puede considerar el tratamiento con iACE o memantina (recomendación NICE)³'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 50,
    questionText: "Al retirar un antipsicótico, si aparece agresión o agitación en menos de una semana, podría tratarse de un síndrome de retirada. ¿Cuál es la conducta recomendada?",
    options: [
      { text: "Doblar la dosis del iACE." },
      { text: "Iniciar un antipsicótico diferente inmediatamente." },
      { text: "Considerar el reinicio de la dosis anterior y reintentar la deprescripción más adelante." },
      { text: "Ignorar los síntomas, ya que son transitorios." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.10.1, al hablar del proceso de deprescripción de antidemencia, menciona la monitorización del síndrome de retirada, pudiendo ser necesario 'el reinicio de dosis anterior si aparecen síntomas como agresión, agitación... en menos de una semana'. El principio es similar para la retirada de antipsicóticos (8.16.1), donde se recomienda 'Restablecer antipsicótico a la menor dosis posible reintentando la deprescripción a los 3 meses'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 51,
    questionText: "¿Qué escala sociofamiliar se recomienda administrar habitualmente en Atención Primaria según el PAI?",
    options: [
      { text: "Escala de Zarit." },
      { text: "Escala Socio-Familiar de Gijón." },
      { text: "Escala de Lawton y Brody." },
      { text: "Índice de Katz." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.8 indica: 'Se realizará la valoración sociofamiliar habitual en Atención Primaria además de la administración de la Escala Socio-Familiar de Gijón (AG)³³'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 52,
    questionText: "Un paciente con demencia presenta una queja de memoria consistente, pero su MEC de Lobo es de 25. ¿Qué situación se debería sospechar y qué prueba consideraría?",
    options: [
      { text: "Probablemente no hay deterioro, tranquilizar y alta." },
      { text: "Posible enfermedad de Alzheimer incipiente; se podría considerar una valoración neuropsicológica." },
      { text: "Sospecha de simulación; confrontar al paciente." },
      { text: "Demencia frontotemporal; iniciar memantina." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 4.3.1.1 describe esta situación: una queja de memoria consistente con un test breve no concluyente (MEC de Lobo ≥24) haría 'sospechar posible enfermedad de Alzheimer' y justifica una valoración neuropsicológica más profunda.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 53,
    questionText: "¿Se recomienda biterapia (iACE + memantina) en la fase de demencia grave (GDS 7)?",
    options: [
      { text: "Sí, es la pauta de elección." },
      { text: "Solo si el paciente la toleró en fases previas." },
      { text: "No, no se recomienda biterapia en la fase de demencia grave." },
      { text: "Depende del subtipo de demencia." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 6.7.1 establece claramente que 'No se recomienda biterapia (uso de iACE + memantina) ni en la fase de demencia leve (GDS 4), ni en la fase demencia grave (GDS 7)⁴'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 54,
    questionText: "El uso de risperidona para la agresión persistente en Alzheimer está autorizado por la AEMPS para un plazo máximo de:",
    options: [
      { text: "2 semanas." },
      { text: "6 semanas." },
      { text: "3 meses." },
      { text: "Indefinido." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 8.11.6 especifica que la risperidona está autorizada 'para la agresión persistente y a corto plazo (hasta 6 semanas) en pacientes con enfermedad de Alzheimer de moderada a grave...'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 55,
    questionText: "¿En qué consiste el estadio GDS 2 (Déficit cognitivo muy leve)?",
    options: [
      { text: "Dificultad funcional objetiva que interfiere tareas sociales." },
      { text: "Quejas subjetivas de pérdida de memoria sin objetivarse deterioro en el examen clínico." },
      { text: "Desorientación temporal y espacial." },
      { text: "Incapacidad para realizar tareas complejas." }
    ],
    correctAnswerIndex: 1,
    rationale: "La Tabla 8 (pág. 43) define el GDS 2 como 'Quejas subjetivas de pérdida de memoria' y 'No se objetiva deterioro en examen clínico'. La fase clínica es 'Normal para su edad'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 56,
    questionText: "En el seguimiento flexible (Anexo 5), un paciente con Alzheimer típico (Grupo 1) que presenta de repente síntomas conductuales graves, ¿a qué grupo de seguimiento pasaría?",
    options: [
      { text: "Permanece en el Grupo 1." },
      { text: "Pasa al Grupo 2 (seguimiento programado en AH)." },
      { text: "Pasa al Grupo 3 (seguimiento intensivo en AH)." },
      { text: "Recibe el alta del proceso." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 5 'Seguimiento de acceso flexible' indica que un paciente del Grupo 1, ante la aparición de 'Síntomas conductuales graves' o 'Progresión rápida', activaría el 'ACCESO A GRUPO 3', que implica un seguimiento más intensivo y flexible por parte de Atención Hospitalaria.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 57,
    questionText: "¿Qué derecho del cuidador NO se menciona explícitamente en el punto 3.18 del PAI?",
    options: [
      { text: "Evaluación formal de sus necesidades físicas y mentales." },
      { text: "Evaluación de sus necesidades de descansos cortos y respiro." },
      { text: "Prestación económica directa por parte del SAS." },
      { text: "Información sobre sus derechos." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 3.18, sobre los derechos de los cuidadores, menciona la evaluación formal de necesidades y la evaluación de necesidades de respiro. No menciona una prestación económica directa a cargo del SAS, aunque el asesoramiento puede incluir información sobre recursos sociales y económicos de otras administraciones.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 58,
    questionText: "Un paciente con demencia por cuerpos de Lewy presenta agresividad. ¿Qué fármaco sería una alternativa más segura que el haloperidol, aunque deba usarse con precaución?",
    options: [
      { text: "Clozapina." },
      { text: "Levodopa." },
      { text: "Quetiapina." },
      { text: "Lorazepam a dosis altas." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.11.6 indica que la 'Quetiapina puede ser una alternativa en casos de demencia con cuerpos de Lewy, donde están contraindicados los antipsicóticos clásicos (haloperidol) y el resto de atípicos deben usarse con mucha precaución'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 59,
    questionText: "¿Cuál de las siguientes actividades se recomienda para promover el bienestar en personas con deterioro cognitivo?",
    options: [
      { text: "Evitar toda actividad física para prevenir caídas." },
      { text: "Fomentar el abandono del hábito tabáquico y del alcohol." },
      { text: "Limitar las interacciones sociales para evitar estrés." },
      { text: "Mantener una rutina rígida sin variaciones." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.10 recomienda 'realización de actividad física... así como recomendaciones sobre estilos de vida saludables como el abandono del hábito tabáquico y alcohol, alimentación equilibrada e higiene del sueño (AG)'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 60,
    questionText: "La realización del registro en la historia de salud de la 'PLANIFICACIÓN ANTICIPADA DE LAS DECISIONES' debe hacerse:",
    options: [
      { text: "Utilizando las siglas PAD." },
      { text: "Al completo y sin siglas." },
      { text: "Solo si el paciente está en GDS 7." },
      { text: "Es un registro opcional." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.22.3 es muy específico: 'Se realizará el registro en la historia de salud mediante la apertura de un episodio con el término PLANIFICACIÓN ANTICIPADA DE LAS DECISIONES, al completo y sin siglas'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 61,
    questionText: "Mujer de 82 años con Alzheimer GDS 6. Ha perdido la capacidad para bañarse sola. ¿En qué subestadio de la escala FAST se encuentra?",
    options: [
      { text: "FAST 6a." },
      { text: "FAST 6b." },
      { text: "FAST 6c." },
      { text: "FAST 6d." }
    ],
    correctAnswerIndex: 1,
    rationale: "La Tabla 9 'Escala FAST: Subestadiaje en deterioro cognitivo grave o muy grave' (pág. 44) indica que el subestadio 6a es 'Pérdida de la capacidad para vestirse solo' y el 6b es 'Pérdida de la capacidad para bañarse solo'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 62,
    questionText: "Ante la sospecha de una causa atípica de deterioro cognitivo, no Alzheimer, con parkinsonismo y trastorno de la marcha, ¿qué exploración es fundamental?",
    options: [
      { text: "Exploración abdominal." },
      { text: "Exploración neurológica orientada." },
      { text: "Fondo de ojo exclusivamente." },
      { text: "Auscultación pulmonar." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 4.2 indica que se realizará una 'exploración neurológica orientada hacia el subtipo diagnóstico'. El punto 4.2.2 especifica signos que alertan de causas atípicas, como signos focales, parkinsonismo, trastorno de la marcha, etc.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 63,
    questionText: "En un paciente con insuficiencia hepática moderada (Child-Pugh 7-9), ¿cuál es la dosis máxima diaria de galantamina recomendada?",
    options: [
      { text: "8 mg." },
      { text: "16 mg." },
      { text: "24 mg." },
      { text: "Está contraindicada." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 6.5.3 detalla la pauta para la insuficiencia hepática moderada: 'En estos pacientes, la dosis diaria no debe exceder los 16 mg⁴¹'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 64,
    questionText: "El uso de rivastigmina en pacientes con insuficiencia renal o hepática de leve a moderada debe ser:",
    options: [
      { text: "Contraindicado absolutamente." },
      { text: "A la misma dosis que en pacientes sin insuficiencia." },
      { text: "Controlado cuidadosamente para ajustarse a la tolerancia individual." },
      { text: "Limitado a un máximo de 3 meses." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 6.5.4 indica que el uso de rivastigmina en estos pacientes 'debe ser controlado cuidadosamente para ajustarse a la tolerancia individual, debido a que pueden experimentar más reacciones adversas dosis dependientes⁴¹'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 65,
    questionText: "Para la deprescripción de antipsicóticos (Tabla 11), si existe un síndrome de retirada, ¿cuándo se recomienda reintentar la deprescripción?",
    options: [
      { text: "A la semana siguiente." },
      { text: "Al mes siguiente." },
      { text: "A los 3 meses (se realizarán al menos 2 intentos)." },
      { text: "No se debe reintentar." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.16.1 sobre la deprescripción de antipsicóticos, ante una recaída, recomienda 'Restablecer antipsicótico... reintentando la deprescripción a los 3 meses (se realizarán al menos 2 intentos de retirada)'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 66,
    questionText: "El PAI recomienda que todos los profesionales de AP y AH tengan acceso a una herramienta para poder informar a pacientes y cuidadores. ¿Cuál es?",
    options: [
      { text: "Un listado de residencias de ancianos." },
      { text: "El mapa de activos en salud más cercano al entorno del paciente." },
      { text: "La última guía de práctica clínica sobre Alzheimer." },
      { text: "Un directorio de farmacias." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.11.1 aconseja 'que todos los profesionales de AP y AH tengan acceso al mapa de activos en salud más cercanos al entorno del paciente... para poder transmitir dicha información a los pacientes y sus familiares/cuidadores (AG)'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 67,
    questionText: "¿Cuál es el Límite de Entrada del Proceso Asistencial de Deterioro Cognitivo?",
    options: [
      { text: "Personas con demencia en situación terminal." },
      { text: "Personas con cribado positivo en el examen de salud +65 o adultos con sospecha." },
      { text: "Personas con síndrome confusional agudo." },
      { text: "Familiares preocupados sin que el paciente consulte." }
    ],
    correctAnswerIndex: 1,
    rationale: "La página 21 ('Definición') establece como 'Límite de entrada': 'Personas con cribado positivo en el examen de salud +65' y 'Persona adulta en la que se sospecha deterioro cognitivo'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 68,
    questionText: "Se debe cambiar a otro iACE si la disminución en la puntuación del MEC-30 es:",
    options: [
      { text: "Superior a 2 puntos después de 6 meses de tratamiento." },
      { text: "Superior a 2 puntos después de 1 año de tratamiento con la dosis máxima tolerada." },
      { text: "Inferior a 1 punto después de 1 año de tratamiento." },
      { text: "Cualquier disminución, independientemente de los puntos o el tiempo." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 8.4.2 especifica: 'Se considerará cambiar a otro iACE si la disminución en la puntuación del MEC-30 es superior a 2 puntos después de 1 año de tratamiento con la dosis máxima tolerada del tratamiento elegido⁴, ⁴⁶'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 69,
    questionText: "En el cribado de depresión para una persona de 55 años con deterioro cognitivo, ¿qué escala se recomienda?",
    options: [
      { text: "Escala de Yesavage abreviada (GDS-15)." },
      { text: "Escala de Cornell." },
      { text: "Escala de Hamilton para la depresión." },
      { text: "Inventario de Depresión de Beck." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 2.3.2 indica: 'Cuando la edad sea igual o inferior a 65 años, se recomienda valorar la presencia de depresión con la escala de Cornell (AG)'. La GDS-15 se reserva para mayores de 65 años.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 70,
    questionText: "Según el PAI, ¿el diagnóstico de Enfermedad de Alzheimer se puede descartar basándose únicamente en los resultados de un TAC o RMN de cráneo normales?",
    options: [
      { text: "Sí, una neuroimagen normal descarta Alzheimer." },
      { text: "No, no se descartará la enfermedad de Alzheimer basándose solo en los resultados del TAC o RMN de cráneo." },
      { text: "Sí, pero solo si el paciente es mayor de 80 años." },
      { text: "Depende de los hallazgos del LCR." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 4.6.2 es una recomendación explícita (NICE)³: 'No se descartará enfermedad de Alzheimer en base solo a los resultados del TAC o RMN de cráneo'. La neuroimagen estructural sirve principalmente para descartar otras causas reversibles.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 71,
    questionText: "¿Cuál de los siguientes fármacos para la incontinencia urinaria tiene ALTA carga anticolinérgica y debe evitarse si es posible en >65 años?",
    options: [
      { text: "Tamsulosina." },
      { text: "Finasterida." },
      { text: "Oxibutinina." },
      { text: "Mirabegrón." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 1, en la tabla de fármacos, clasifica la oxibutinina, junto con otros antiespasmódicos urinarios como fesoterodina o tolterodina, en la columna de 'EFECTIVIDAD ANTICOLINÉRGICA ALTA'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 72,
    questionText: "Paciente en estadio GDS 7 muy grave, con pérdida de la capacidad para hablar limitada a monosílabos o gruñidos. ¿Qué subestadio FAST le corresponde?",
    options: [
      { text: "FAST 7a." },
      { text: "FAST 7b." },
      { text: "FAST 7c." },
      { text: "FAST 7d." }
    ],
    correctAnswerIndex: 1,
    rationale: "La Tabla 9 (pág. 44) detalla los subestadios del GDS 7. El subestadio 7b corresponde a 'Pérdida de la capacidad para hablar limitada a monosílabos o gruñidos'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 73,
    questionText: "Para el diagnóstico de Demencia Vascular (Anexo 3), ¿cuál de los siguientes es un criterio clave?",
    options: [
      { text: "Afectación de tareas ejecutivas (restas seriadas, fluencia verbal)." },
      { text: "Alucinaciones visuales muy precoces." },
      { text: "Memoria relativamente respetada al inicio." },
      { text: "Apatía o pérdida de iniciativa." }
    ],
    correctAnswerIndex: 0,
    rationale: "El Anexo 3 enumera los criterios diagnósticos. Para la Demencia Vascular, destaca: 'Afectación de tareas ejecutivas (restas seriadas, fluencia verbal)', junto con la presencia de signos focales y la relación temporal con un ACV o patología cerebrovascular en neuroimagen.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 74,
    questionText: "¿Qué se recomienda si, a pesar de un test cognitivo breve negativo, la información de antecedentes y del familiar apoyan un posible diagnóstico de deterioro cognitivo?",
    options: [
      { text: "Dar el alta al paciente, ya que el test es soberano." },
      { text: "Repetir el test cada semana hasta que sea positivo." },
      { text: "Informar de la necesidad de una valoración complementaria antes de derivar." },
      { text: "Asumir que el familiar exagera y tranquilizar." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 1.10.2 aborda esta situación clínica frecuente. Indica que se debe 'informar a la persona con sospecha de deterioro cognitivo sobre la necesidad de realizar una valoración complementaria antes de derivar al especialista hospitalario'. La clínica y la anamnesis prevalecen sobre un único test negativo.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 75,
    questionText: "En un paciente con deterioro cognitivo y depresión o ansiedad leve-moderada, ¿cuál es el abordaje inicial recomendado?",
    options: [
      { text: "Iniciar antidepresivos o ansiolíticos de forma rutinaria." },
      { text: "Considerar un abordaje psicológico." },
      { text: "Pautar un antipsicótico a dosis bajas." },
      { text: "Derivar urgentemente a psiquiatría." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 7.8 indica que 'En caso de que las personas con deterioro cognitivo presenten depresión leve-moderada y/o ansiedad se considerará un abordaje psicológico'. El punto 7.8.2 desaconseja iniciar fármacos de forma rutinaria en estos casos a menos que haya un trastorno mental grave preexistente.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 76,
    questionText: "El diagnóstico social definido por el profesional del trabajo social debe constar en:",
    options: [
      { text: "Un informe aparte entregado al paciente." },
      { text: "La historia de salud (HS) del paciente." },
      { text: "El registro de la consulta de enfermería." },
      { text: "Solo se comunica verbalmente." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.8.3 es una afirmación directa: 'El diagnóstico social definido por el profesional del trabajo social deberá constar en la HS del paciente'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 77,
    questionText: "¿Cuándo se considera iniciar la retirada de memantina en un paciente con Alzheimer?",
    options: [
      { text: "Cuando llega al estadio GDS 6." },
      { text: "Cuando la familia lo solicita, sin más criterios." },
      { text: "En estadio muy avanzado (GDS-FAST >7c), con pérdida de capacidad para caminar solo." },
      { text: "Nunca debe retirarse una vez iniciada." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.7 especifica que 'Se valorará el inicio de retirada de memantina en estadio muy avanzado de demencia tipo Alzheimer (GDS-FAST >7c; pérdida de la capacidad para caminar sólo sin ayuda, Barthel igual a 0)⁴, ⁴²'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 78,
    questionText: "El uso crónico de antipsicóticos (más de 6 meses) en pacientes con deterioro cognitivo se desaconseja porque:",
    options: [
      { text: "Son muy caros." },
      { text: "Los beneficios son menores y se asocia a un aumento de efectos adversos y mortalidad." },
      { text: "Crean adicción en la mayoría de los casos." },
      { text: "Interfieren con la absorción de los iACE." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 8.11.5, una recomendación de 'no hacer', lo explica claramente: 'No se aconseja continuar el tratamiento con antipsicóticos de manera crónica, ya que los beneficios de los antipsicóticos son menores cuando la terapia supera los 6 meses y porque el uso continuado... se asocia a un aumento de efectos adversos y de mortalidad (AG)⁶'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 79,
    questionText: "El PAI recomienda proporcionar un único profesional de la salud o de atención social responsable de coordinar la atención. ¿Cuál de las siguientes NO es una de sus funciones?",
    options: [
      { text: "Gestionar una primera visita para valorar las necesidades." },
      { text: "Realizar todas las pruebas diagnósticas personalmente." },
      { text: "Involucrar a los familiares en la toma de decisiones." },
      { text: "Desarrollar y revisar un plan de cuidados y apoyo (PAP)." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.3.1 detalla las funciones del profesional responsable. Incluyen gestionar visitas, facilitar información, involucrar a la familia y desarrollar el PAP. No se espera que realice personalmente todas las pruebas diagnósticas, sino que coordine el proceso.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 80,
    questionText: "En el seguimiento de un paciente con deterioro cognitivo, ¿qué se debe hacer respecto a la conducción?",
    options: [
      { text: "Prohibir la conducción inmediatamente al diagnóstico." },
      { text: "Ignorar el tema para no causar conflictos." },
      { text: "Informar sobre cómo afecta el deterioro a la conducción y recomendar que informe a la DGT." },
      { text: "Permitir la conducción si el MEC-30 es superior a 20." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 3.2, sobre la información a ofrecer en el diagnóstico, incluye: 'Si procede, cómo afecta el deterioro cognitivo a la conducción, y se recomendará que informe de la situación a donde proceda'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 81,
    questionText: "La afasia y los cambios de conducta alimentaria (atracones, ingesta de objetos no comestibles) son síntomas característicos de:",
    options: [
      { text: "La fase inicial de la Enfermedad de Alzheimer." },
      { text: "La Demencia Vascular subcortical." },
      { text: "La Demencia Frontotemporal." },
      { text: "La Demencia por Cuerpos de Lewy." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 3 lista la 'Afasia' y los 'Cambios de conducta alimentaria' como características distintivas de la Demencia Frontotemporal, junto con la desinhibición y la apatía.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 82,
    questionText: "Una vez elaborado el PAP, ¿dónde debe quedar registrado y para quién debe ser accesible?",
    options: [
      { text: "En un archivo local del centro de salud, accesible solo para el médico." },
      { text: "Solo se entrega una copia en papel al paciente." },
      { text: "Registrado en la Historia clínica, accesible para profesionales y para el paciente a través de ClicSalud+." },
      { text: "En el portal de la Consejería de Salud, de forma anónima." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 3.28 especifica: 'El documento del PAP... quedará registrado en la Historia clínica, siendo accesible tanto para los profesionales de salud como para el paciente a través de la página de salud del paciente (ClicSalud+) (AG)'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 83,
    questionText: "Se realiza un test de memoria episódica verbal (como el FCSRT) para completar el diagnóstico precoz en caso de sospecha de:",
    options: [
      { text: "Demencia Frontotemporal." },
      { text: "Enfermedad de Alzheimer." },
      { text: "Demencia por Cuerpos de Lewy." },
      { text: "Hidrocefalia normotensiva." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 4.4 indica: 'En caso de sospecha de enfermedad de Alzheimer se recomienda la administración de un test de memoria episódica verbal... para completar el diagnóstico precoz'. La afectación de la memoria episódica es el rasgo central del Alzheimer.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 84,
    questionText: "¿Cuál de los siguientes es un efecto adverso a vigilar especialmente durante el seguimiento de personas en tratamiento con iACE?",
    options: [
      { text: "Hiperglucemia." },
      { text: "Aumento de peso." },
      { text: "Bradicardia e hipotensión." },
      { text: "Leucocitosis." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.5 enumera los tres tipos de eventos adversos a comprobar: 'síntomas gastrointestinales; anorexia y pérdida de peso y; bradicardia e hipotensión'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 85,
    questionText: "El uso de Olanzapina o Aripiprazol en demencia moderada a grave, fuera de indicación, deberá cumplir con los requisitos de:",
    options: [
      { text: "Autorización expresa del director del centro de salud." },
      { text: "Medicamentos en situaciones especiales (RD 1015/2009)." },
      { text: "Consentimiento informado por escrito y notariado." },
      { text: "Uso exclusivo en el ámbito hospitalario." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 8.11.7 afirma que el uso de estos fármacos 'deberá cumplir con los requisitos de medicamentos en situaciones especiales (fijados en el RD 1015/2009...)'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 86,
    questionText: "En un paciente con GDS=5 (demencia moderada), ¿está indicada la valoración del riesgo de malnutrición con la herramienta Mini-Nutritional-Assessment (MNA)?",
    options: [
      { text: "No, solo se hace en GDS≥7." },
      { text: "Sí, la Tabla 10 indica su reevaluación en los estadios GDS 5-6 y GDS ≥7." },
      { text: "No, el MNA no se menciona en el PAI." },
      { text: "Sí, pero solo si hay una pérdida de peso >10%." }
    ],
    correctAnswerIndex: 1,
    rationale: "La Tabla 10 (continuación, pág. 54) incluye como aspecto a reevaluar la 'Valoración del riesgo de malnutrición mediante la herramienta Mini-Nutritional-Assessment (MNA)' en los estadios GDS 5-6 y GDS ≥7.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 87,
    questionText: "¿Es correcto ofrecer entrenamiento cognitivo para tratar la demencia leve o moderada de la enfermedad de Alzheimer según el PAI?",
    options: [
      { text: "Sí, es una recomendación clave." },
      { text: "No, el PAI especifica que no se ofrecerá." },
      { text: "Sí, pero solo en el ámbito de Atención Primaria." },
      { text: "Solo si se combina con fármacos iACE." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.12 establece (con una recomendación NICE³): 'No se ofrecerá entrenamiento cognitivo para tratar la demencia leve o moderada de la enfermedad de Alzheimer'. Se diferencia de la estimulación cognitiva grupal o reminiscencia, que sí son opciones.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 88,
    questionText: "Un paciente con demencia se niega a tomar la medicación, con incapacidad para tomarla o con falta de adherencia. ¿Es esta una situación a considerar para la deprescripción?",
    options: [
      { text: "No, se debe forzar la toma de medicación." },
      { text: "Sí, es una de las situaciones en las que puede considerarse la deprescripción." },
      { text: "Solo si la familia está de acuerdo." },
      { text: "No, la falta de adherencia no es un criterio médico." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 8.8 lista 'Otras situaciones en las que puede considerarse la deprescripción', e incluye explícitamente: 'Persona con deterioro cognitivo que se niega a tomar la medicación, con incapacidad para tomarla o con falta de adherencia que no se puede resolver'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 89,
    questionText: "En el Anexo 2, sobre medicamentos y riesgo de caídas, se mencionan los diuréticos. ¿Qué tipo específico se destaca?",
    options: [
      { text: "Ahorradores de potasio." },
      { text: "Inhibidores de la anhidrasa carbónica." },
      { text: "Osmóticos." },
      { text: "Tiazídicos y del asa." }
    ],
    correctAnswerIndex: 3,
    rationale: "El Anexo 2 (pág. 74), en la tabla de 'Medicamentos relacionados con el riesgo de caídas', dentro de 'Diuréticos', especifica '-Tiazídicos' y '-Del asa'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 90,
    questionText: "La deprescripción de medicamentos antidemencia debe ser una decisión:",
    options: [
      { text: "Tomada unilateralmente por el médico." },
      { text: "Tomada exclusivamente por la familia." },
      { text: "Compartida con la persona con deterioro cognitivo y/o su familia." },
      { text: "Basada únicamente en el coste del tratamiento." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.9.1 es fundamental: 'Se recomienda que la deprescripción sea una decisión compartida con la persona con deterioro cognitivo y/o su familia, asegurando que estén informados de los posibles beneficios y daños...'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 91,
    questionText: "Ante un paciente con sospecha de deterioro cognitivo, la valoración inicial debe incluir síntomas cognitivos, conductuales y psicológicos, así como:",
    options: [
      { text: "El nivel de estudios del paciente." },
      { text: "El impacto de los síntomas en la vida diaria." },
      { text: "La profesión del paciente." },
      { text: "Las preferencias políticas del paciente." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 1.3 especifica que la valoración inicial incluirá 'anamnesis (incluyendo síntomas cognitivos, conductuales y psicológicos, así como el impacto de los síntomas en la vida diaria)'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 92,
    questionText: "¿Cuál es el principal objetivo de la fase de 'Valoración diagnóstica complementaria' (2ª fase del proceso) en Atención Primaria?",
    options: [
      { text: "Iniciar tratamiento farmacológico de inmediato." },
      { text: "Evaluar causas secundarias y/o reversibles de deterioro cognitivo." },
      { text: "Determinar el plan de cuidados paliativos." },
      { text: "Realizar una punción lumbar." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 2.2 de esta fase indica: 'Se valorarán los resultados del perfil analítico... evaluando causas secundarias y/o reversibles de deterioro cognitivo'. También se evalúa el área afectiva (2.3) y funcional (2.5) para descartar otras causas.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 93,
    questionText: "El uso de la Escala de Cornell está recomendado para valorar la depresión en:",
    options: [
      { text: "Todos los pacientes con deterioro cognitivo." },
      { text: "Pacientes con edad igual o inferior a 65 años." },
      { text: "Pacientes con edad superior a 65 años." },
      { text: "Únicamente en pacientes con demencia avanzada." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 2.3.2 del PAI especifica que la Escala de Cornell se recomienda 'Cuando la edad sea igual o inferior a 65 años' para valorar la presencia de depresión.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 94,
    questionText: "Según el PAI, la información sobre servicios de apoyo y terapia psicológica para cuidadores forma parte de:",
    options: [
      { text: "El informe de alta hospitalaria exclusivamente." },
      { text: "La formación y habilidades para la intervención que se ofrece a los cuidadores." },
      { text: "Un folleto que se entrega al inicio del proceso." },
      { text: "La valoración del riesgo de caídas." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.15, que detalla la formación a cuidadores, incluye un apartado específico: 'Información sobre servicios de apoyo y terapia psicológica para cuidadores que la puedan necesitar y cómo acceder a ellos'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 95,
    questionText: "Un paciente de 72 años con Alzheimer GDS 4 tiene programado un seguimiento en Atención Primaria. ¿Corresponde a la categoría correcta de seguimiento según el Anexo 5?",
    options: [
      { text: "No, debería estar en el Grupo 3 (seguimiento intensivo en AH)." },
      { text: "No, debería estar en el Grupo 2 (seguimiento programado en AH)." },
      { text: "Sí, la Enfermedad de Alzheimer típica (GDS 3-7) se clasifica en el Grupo 1 con seguimiento programado en AP." },
      { text: "No hay un grupo definido para esta patología." }
    ],
    correctAnswerIndex: 2,
    rationale: "El Anexo 5 clasifica a los pacientes con 'Enfermedad de Alzheimer típica (GDS 3-7)' en el GRUPO 1, cuyo modelo de seguimiento es 'programado en Atención Primaria (AP)'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 96,
    questionText: "El PAI recomienda el uso de la herramienta 'Instrumento de ayuda para la Evaluación de la Capacidad (Aid to Capacity Evaluation- ACE)'. ¿Para qué fin?",
    options: [
      { text: "Para valorar la sobrecarga del cuidador." },
      { text: "Para valorar la autonomía personal." },
      { text: "Para diagnosticar el subtipo de demencia." },
      { text: "Para medir el riesgo de caídas." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 2.6.1 establece: 'Se considerará el empleo de la herramienta Instrumento de ayuda para la Evaluación de la Capacidad (Aid to Capacity Evaluation- ACE) para valorar la autonomía personal (AG)'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 97,
    questionText: "En la fase de seguimiento (7ª fase), ¿cuál es la frecuencia mínima de reevaluación del PAP?",
    options: [
      { text: "Cada 3 meses." },
      { text: "Cada 6 meses." },
      { text: "Al menos una vez al año." },
      { text: "Solo cuando hay un cambio clínico significativo." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 7.3.1 indica: 'Se realizará una reevaluación del PAP en una visita de seguimiento al menos una vez al año (AG)...'.",
    difficulty: Difficulty.EASY,
  },
  {
    id: 98,
    questionText: "¿Qué se debe hacer si se detecta una causa reversible de deterioro cognitivo?",
    options: [
      { text: "Continuar con el proceso de deterioro cognitivo y tratar la causa reversible en paralelo." },
      { text: "Excluir a la persona afectada del proceso y tratarla según proceda." },
      { text: "Derivar inmediatamente a cuidados paliativos." },
      { text: "Iniciar un iACE para ver si hay mejoría adicional." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 2.7 es claro: 'En caso de detectar una causa reversible de deterioro cognitivo la persona afectada se excluirá del proceso y se tratará según proceda'.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 99,
    questionText: "El uso de Haloperidol, por su perfil de seguridad, solo debe emplearse en situaciones agudas (a corto plazo) y para:",
    options: [
      { text: "El tratamiento del insomnio." },
      { text: "La apatía y la desinhibición." },
      { text: "El tratamiento urgente de la agitación." },
      { text: "Mejorar la cognición en la demencia vascular." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 8.11.6 recomienda que 'Haloperidol... sólo debe emplearse en situaciones agudas (a corto plazo) y para el tratamiento urgente de la agitación'.",
    difficulty: Difficulty.HARD,
  },
  {
    id: 100,
    questionText: "La participación en Grupos de Afrontamiento de la Ansiedad en Atención Primaria (GRAFA) se fomenta para:",
    options: [
      { text: "Pacientes con demencia grave." },
      { text: "Cuidadores, para el manejo de la ansiedad mediante estrategias de baja intensidad." },
      { text: "Diagnosticar trastornos de ansiedad generalizada." },
      { text: "Entrenar en el uso de escalas de valoración." }
    ],
    correctAnswerIndex: 1,
    rationale: "El punto 3.15.5 indica: 'Se fomentará la participación en los Grupos de Afrontamiento de la Ansiedad en Atención Primaria (GRAFA) que ayudan mediante estrategias de baja intensidad al manejo de la ansiedad'. Esto se enmarca en las intervenciones para cuidadores.",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 101,
    questionText: "Al comunicar la noticia del diagnóstico, el PAI recomienda:",
    options: [
      { text: "Dar toda la información posible de una vez para ser eficientes." },
      { text: "Hacerlo por teléfono para mayor comodidad." },
      { text: "Disponer de un tiempo para que la persona reaccione y pueda expresar sus emociones." },
      { text: "Comunicarlo únicamente al familiar para no preocupar al paciente." }
    ],
    correctAnswerIndex: 2,
    rationale: "El punto 4.10.2 establece: 'Se recomienda que la persona con deterioro cognitivo o demencia disponga de un tiempo para reaccionar ante la noticia y pueda expresar sus emociones, evitando dar mucha información al inicio (AG)'.",
    difficulty: Difficulty.EASY,
  }
];

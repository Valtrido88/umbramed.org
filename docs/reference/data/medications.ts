import { Medication, Category } from '../types';

// Define the initial list of medications with the correct type.
// This provides TypeScript with the context it needs to correctly type `calculatorType`.
const initialMedications: Medication[] = [
  // --- Anticoagulantes ---
  {
    id: 'apixaban',
    name: 'Apixaban',
    category: Category.ANTICOAGULANTES,
    indication: 'Prevención de ictus y embolia sistémica en pacientes con fibrilación auricular no valvular.',
    fichaTecnica: {
      mecanismo: 'Inhibidor oral, potente, reversible, directo y altamente selectivo del factor Xa.',
      posologia: 'Dosis recomendada: 5 mg dos veces al día. Reducir a 2.5 mg dos veces al día si cumple ≥2 criterios (edad ≥80, peso ≤60kg, Cr ≥1.5mg/dL).',
      efectosAdversos: 'Sangrado (principalmente), anemia, náuseas.',
      contraindicaciones: 'Sangrado activo clínicamente significativo, hepatopatía asociada a coagulopatía.'
    },
    hasCalculator: true,
    calculatorType: 'APIXABAN'
  },
  {
    id: 'rivaroxaban',
    name: 'Rivaroxaban',
    category: Category.ANTICOAGULANTES,
    indication: 'Tratamiento de la trombosis venosa profunda (TVP) y de la embolia pulmonar (EP).',
    fichaTecnica: {
      mecanismo: 'Inhibidor oral, directo y altamente selectivo del factor Xa.',
      posologia: 'Varía según indicación. Para TVP/EP: 15 mg dos veces al día durante 3 semanas, luego 20 mg una vez al día. Ajuste en IR.',
      efectosAdversos: 'Hemorragias, mareo, cefalea, anemia.',
      contraindicaciones: 'Hemorragia activa, enfermedad hepática con coagulopatía.'
    },
    hasCalculator: false
  },
  {
    id: 'dabigatran',
    name: 'Dabigatrán',
    category: Category.ANTICOAGULANTES,
    indication: 'Prevención primaria de episodios tromboembólicos venosos en cirugía de reemplazo de cadera o rodilla.',
    fichaTecnica: {
      mecanismo: 'Inhibidor directo, competitivo y reversible de la trombina.',
      posologia: '150 mg dos veces al día o 110 mg dos veces al día en pacientes seleccionados. Requiere ajuste renal.',
      efectosAdversos: 'Sangrado, dispepsia, dolor abdominal.',
      contraindicaciones: 'Sangrado activo, insuficiencia renal grave (CrCl < 30 ml/min).'
    },
    hasCalculator: false
  },
  {
    id: 'edoxaban',
    name: 'Edoxaban',
    category: Category.ANTICOAGULANTES,
    indication: 'Prevención de ictus en fibrilación auricular no valvular (FANV) y tratamiento de TVP/EP.',
    fichaTecnica: {
      mecanismo: 'Inhibidor oral, directo y selectivo del factor Xa.',
      posologia: '60 mg una vez al día. Reducir a 30 mg si CrCl 15-50 ml/min, peso ≤60 kg o uso concomitante de ciertos inhibidores de P-gp.',
      efectosAdversos: 'Sangrado, anemia, erupción cutánea.',
      contraindicaciones: 'Sangrado activo, CrCl < 15 ml/min.'
    },
    hasCalculator: false
  },

  // --- Antidiabéticos ---
  {
    id: 'sitagliptina',
    name: 'Sitagliptina',
    category: Category.ANTIDIABETICOS,
    indication: 'Mejora del control glucémico en adultos con diabetes mellitus tipo 2.',
    fichaTecnica: {
      mecanismo: 'Inhibidor de la dipeptidil peptidasa 4 (DPP-4), que aumenta los niveles de incretinas.',
      posologia: '100 mg una vez al día. Requiere ajuste de dosis en insuficiencia renal.',
      efectosAdversos: 'Cefalea, hipoglucemia (con sulfonilureas/insulina), infección del tracto respiratorio superior.',
      contraindicaciones: 'Hipersensibilidad al principio activo.'
    },
    hasCalculator: true,
    calculatorType: 'SITAGLIPTIN'
  },
  {
    id: 'empagliflozina',
    name: 'Empagliflozina',
    category: Category.ANTIDIABETICOS,
    indication: 'Tratamiento de la diabetes mellitus tipo 2, insuficiencia cardíaca y enfermedad renal crónica.',
    fichaTecnica: {
      mecanismo: 'Inhibidor del cotransportador de sodio-glucosa tipo 2 (SGLT2).',
      posologia: '10 mg una vez al día, puede aumentarse a 25 mg una vez al día para DM2.',
      efectosAdversos: 'Infecciones del tracto genital, poliuria, cetoacidosis diabética (raro).',
      contraindicaciones: 'Hipersensibilidad.'
    },
    hasCalculator: false
  },
   {
    id: 'liraglutida',
    name: 'Liraglutida',
    category: Category.ANTIDIABETICOS,
    indication: 'Tratamiento de DM2 y obesidad. Reduce eventos cardiovasculares mayores.',
    fichaTecnica: {
      mecanismo: 'Análogo del péptido similar al glucagón tipo 1 (GLP-1).',
      posologia: 'Iniciar con 0.6 mg/día, titular hasta 1.2 mg o 1.8 mg/día.',
      efectosAdversos: 'Náuseas, vómitos, diarrea, riesgo de pancreatitis.',
      contraindicaciones: 'Antecedente personal o familiar de carcinoma medular de tiroides o síndrome de neoplasia endocrina múltiple tipo 2.'
    },
    hasCalculator: false
  },

  // --- Cardiología ---
  {
    id: 'sacubitril-valsartan',
    name: 'Sacubitrilo/Valsartán',
    category: Category.CARDIOLOGIA,
    indication: 'Tratamiento de la insuficiencia cardíaca crónica sintomática con fracción de eyección reducida.',
    fichaTecnica: {
      mecanismo: 'Combina un inhibidor de la neprilisina (sacubitrilo) y un antagonista del receptor de angiotensina II (valsartán).',
      posologia: 'Dosis inicial de 49/51 mg dos veces al día, titular hasta 97/103 mg dos veces al día.',
      efectosAdversos: 'Hipotensión, hiperpotasemia, insuficiencia renal, tos.',
      contraindicaciones: 'Hipersensibilidad, uso concomitante con IECA, angioedema hereditario.'
    },
    hasCalculator: false
  },
  {
    id: 'eplerenona',
    name: 'Eplerenona',
    category: Category.CARDIOLOGIA,
    indication: 'Reducción del riesgo de mortalidad cardiovascular en pacientes post-IM con disfunción ventricular e IC.',
    fichaTecnica: {
      mecanismo: 'Antagonista selectivo del receptor de mineralocorticoides (aldosterona).',
      posologia: 'Iniciar con 25 mg una vez al día y titular hasta 50 mg una vez al día. Vigilar potasio.',
      efectosAdversos: 'Hiperpotasemia, mareo, diarrea, ginecomastia.',
      contraindicaciones: 'Hiperpotasemia (>5.0 mmol/L), insuficiencia renal grave, uso con inhibidores potentes de CYP3A4.'
    },
    hasCalculator: false
  },
  {
    id: 'amiodarona',
    name: 'Amiodarona',
    category: Category.CARDIOLOGIA,
    indication: 'Tratamiento de arritmias ventriculares y supraventriculares graves.',
    fichaTecnica: {
      mecanismo: 'Antiarrítmico de clase III que prolonga la duración del potencial de acción y el período refractario.',
      posologia: 'Dosis de carga y mantenimiento complejas, varían según la vía (IV/oral) y la urgencia.',
      efectosAdversos: 'Toxicidad pulmonar, hepática y tiroidea; fotosensibilidad; microdepósitos corneales.',
      contraindicaciones: 'Bradicardia sinusal, bloqueo AV, enfermedad tiroidea.'
    },
    hasCalculator: true,
    calculatorType: 'AMIODARONE'
  },
  
  // --- Nefrología ---
  {
    id: 'tolvaptan',
    name: 'Tolvaptán',
    category: Category.NEFROLOGIA,
    indication: 'Tratamiento de hiponatremia (SIADH) y poliquistosis renal autosómica dominante (PQRAD).',
    fichaTecnica: {
      mecanismo: 'Antagonista selectivo del receptor V2 de la vasopresina, promueve la acuaresis.',
      posologia: 'SIADH: iniciar 15 mg/día. PQRAD: iniciar 60 mg/día divididos. Requiere monitorización estricta.',
      efectosAdversos: 'Sed, poliuria, nicturia, riesgo de daño hepático grave (monitorizar enzimas hepáticas).',
      contraindicaciones: 'Anuria, hipovolemia, hipernatremia, incapacidad del paciente para percibir la sed.'
    },
    hasCalculator: true,
    calculatorType: 'TOLVAPTAN'
  },
  {
    id: 'cinacalcet',
    name: 'Cinacalcet',
    category: Category.NEFROLOGIA,
    indication: 'Hiperparatiroidismo secundario en pacientes con enfermedad renal crónica en diálisis.',
    fichaTecnica: {
      mecanismo: 'Calcimimético que aumenta la sensibilidad del receptor sensor de calcio a los iones de calcio extracelulares.',
      posologia: 'Iniciar con 30 mg una vez al día. Titular cada 2-4 semanas según niveles de PTH y calcio.',
      efectosAdversos: 'Hipocalcemia, náuseas, vómitos.',
      contraindicaciones: 'Hipocalcemia.'
    },
    hasCalculator: true,
    calculatorType: 'CINACALCET'
  },
  {
    id: 'sevelamer',
    name: 'Sevelámero',
    category: Category.NEFROLOGIA,
    indication: 'Control de la hiperfosfatemia en pacientes adultos en hemodiálisis o diálisis peritoneal.',
    fichaTecnica: {
      mecanismo: 'Quelante de fosfato no absorbible, libre de calcio y metal.',
      posologia: '800-1600 mg tres veces al día con las comidas. Dosis ajustada según niveles de fósforo sérico.',
      efectosAdversos: 'Trastornos gastrointestinales (náuseas, vómitos, dispepsia, estreñimiento).',
      contraindicaciones: 'Hipofosfatemia, obstrucción intestinal.'
    },
    hasCalculator: false
  },

  // --- Neurología ---
  {
    id: 'fingolimod',
    name: 'Fingolimod',
    category: Category.NEUROLOGIA,
    indication: 'Tratamiento de la esclerosis múltiple remitente-recurrente muy activa.',
    fichaTecnica: {
      mecanismo: 'Modulador del receptor de esfingosina 1-fosfato, que retiene linfocitos en los ganglios linfáticos.',
      posologia: '0.5 mg una vez al día. Requiere monitorización de la primera dosis por bradicardia.',
      efectosAdversos: 'Bradicardia, bloqueo AV, edema macular, aumento de enzimas hepáticas, riesgo de infecciones.',
      contraindicaciones: 'Infarto de miocardio reciente, angina inestable, ictus, arritmias cardíacas significativas.'
    },
    hasCalculator: false
  },
  {
    id: 'natalizumab',
    name: 'Natalizumab',
    category: Category.NEUROLOGIA,
    indication: 'Monoterapia de la esclerosis múltiple remitente-recurrente muy activa.',
    fichaTecnica: {
      mecanismo: 'Anticuerpo monoclonal que se une a la integrina α4β1, limitando la migración de linfocitos al SNC.',
      posologia: '300 mg en perfusión intravenosa cada 4 semanas.',
      efectosAdversos: 'Riesgo de leucoencefalopatía multifocal progresiva (LMP), cefalea, fatiga, reacciones a la perfusión.',
      contraindicaciones: 'Pacientes con LMP, inmunocomprometidos, riesgo elevado de LMP.'
    },
    hasCalculator: false
  },
  {
    id: 'pregabalina',
    name: 'Pregabalina',
    category: Category.NEUROLOGIA,
    indication: 'Dolor neuropático, epilepsia, trastorno de ansiedad generalizada.',
    fichaTecnica: {
      mecanismo: 'Se une a la subunidad alfa-2-delta de los canales de calcio dependientes de voltaje en el SNC.',
      posologia: '150 a 600 mg/día divididos en dos o tres tomas. Requiere ajuste en insuficiencia renal.',
      efectosAdversos: 'Mareos, somnolencia, edema periférico, aumento de peso.',
      contraindicaciones: 'Hipersensibilidad.'
    },
    hasCalculator: false
  },

  // --- Psiquiatría ---
  {
    id: 'clozapina',
    name: 'Clozapina',
    category: Category.PSIQUIATRIA,
    indication: 'Esquizofrenia resistente al tratamiento y en pacientes con riesgo de suicidio.',
    fichaTecnica: {
      mecanismo: 'Antipsicótico atípico con afinidad por receptores de dopamina y serotonina.',
      posologia: 'Titulación estricta comenzando con 12.5 mg. Requiere control hematológico estricto.',
      efectosAdversos: 'Agranulocitosis (riesgo grave), miocarditis, sedación, sialorrea, aumento de peso, estreñimiento severo.',
      contraindicaciones: 'Antecedentes de agranulocitosis, enfermedad hepática activa, íleo paralítico.'
    },
    hasCalculator: true,
    calculatorType: 'CLOZAPINA'
  },
  {
    id: 'paliperidona-lai',
    name: 'Paliperidona LAI',
    category: Category.PSIQUIATRIA,
    indication: 'Tratamiento de mantenimiento de la esquizofrenia en pacientes estabilizados.',
    fichaTecnica: {
      mecanismo: 'Metabolito activo de la risperidona. Antagonista de los receptores D2 y 5-HT2A.',
      posologia: 'Inyección intramuscular mensual (Xeplion) o trimestral (Trevicta). Dosis según producto.',
      efectosAdversos: 'Reacciones en el sitio de inyección, aumento de peso, hiperprolactinemia, acatisia.',
      contraindicaciones: 'Hipersensibilidad a paliperidona o risperidona.'
    },
    hasCalculator: false
  },
  {
    id: 'litio',
    name: 'Litio',
    category: Category.PSIQUIATRIA,
    indication: 'Tratamiento del trastorno bipolar (episodios maníacos y de mantenimiento).',
    fichaTecnica: {
      mecanismo: 'Mecanismo de acción complejo, modula la neurotransmisión y las vías de señalización intracelular.',
      posologia: 'Dosis ajustada para alcanzar niveles séricos terapéuticos (litemia) de 0.6-1.2 mEq/L.',
      efectosAdversos: 'Temblor, poliuria/polidipsia, toxicidad renal y tiroidea a largo plazo. Estrecho margen terapéutico.',
      contraindicaciones: 'Enfermedad renal o cardiovascular grave, deshidratación, depleción de sodio.'
    },
    hasCalculator: false
  },

  // --- Dermatología ---
  {
    id: 'adalimumab',
    name: 'Adalimumab',
    category: Category.DERMATOLOGIA,
    indication: 'Psoriasis en placas moderada-grave, artritis psoriásica, hidradenitis supurativa.',
    fichaTecnica: {
      mecanismo: 'Anticuerpo monoclonal humano que se une al factor de necrosis tumoral alfa (TNF-α).',
      posologia: 'Varía por indicación. Psoriasis: Dosis inicial de 80 mg, seguida de 40 mg en semanas alternas.',
      efectosAdversos: 'Infecciones respiratorias, reacciones en el lugar de inyección, cefalea, riesgo de infecciones graves.',
      contraindicaciones: 'Tuberculosis activa, insuficiencia cardíaca moderada a grave.'
    },
    hasCalculator: false
  },
  {
    id: 'dupilumab',
    name: 'Dupilumab',
    category: Category.DERMATOLOGIA,
    indication: 'Dermatitis atópica moderada-grave, asma grave, rinosinusitis crónica con poliposis nasal.',
    fichaTecnica: {
      mecanismo: 'Anticuerpo monoclonal que inhibe la señalización de la interleucina-4 y la interleucina-13.',
      posologia: 'Dermatitis atópica: Dosis inicial de 600 mg, seguida de 300 mg cada dos semanas.',
      efectosAdversos: 'Reacciones en el lugar de inyección, conjuntivitis, herpes oral.',
      contraindicaciones: 'Hipersensibilidad al principio activo.'
    },
    hasCalculator: false
  },
  {
    id: 'guselkumab',
    name: 'Guselkumab',
    category: Category.DERMATOLOGIA,
    indication: 'Psoriasis en placas de moderada a grave.',
    fichaTecnica: {
      mecanismo: 'Anticuerpo monoclonal humano que se une selectivamente a la subunidad p19 de la interleucina-23 (IL-23).',
      posologia: '100 mg por inyección subcutánea en las semanas 0 y 4, y posteriormente cada 8 semanas.',
      efectosAdversos: 'Infecciones de las vías respiratorias superiores, cefalea, artralgia.',
      contraindicaciones: 'Infecciones activas clínicamente importantes (p. ej., tuberculosis activa).'
    },
    hasCalculator: false
  },

  // --- Oncología / Hematología ---
  {
    id: 'palbociclib',
    name: 'Palbociclib',
    category: Category.ONCOLOGIA,
    indication: 'Cáncer de mama localmente avanzado o metastásico HR+/HER2-.',
    fichaTecnica: {
      mecanismo: 'Inhibidor selectivo de las quinasas dependientes de ciclinas (CDK) 4 y 6.',
      posologia: '125 mg una vez al día durante 21 días, seguido de 7 días de descanso, en combinación con terapia hormonal.',
      efectosAdversos: 'Neutropenia, leucopenia, fatiga, náuseas, estomatitis.',
      contraindicaciones: 'Hipersensibilidad. Uso con hierba de San Juan.'
    },
    hasCalculator: false
  },
  {
    id: 'osimertinib',
    name: 'Osimertinib',
    category: Category.ONCOLOGIA,
    indication: 'Cáncer de pulmón no microcítico con mutación del EGFR (incluida T790M).',
    fichaTecnica: {
      mecanismo: 'Inhibidor de la tirosina quinasa (TKI) del EGFR de tercera generación, irreversible.',
      posologia: '80 mg una vez al día.',
      efectosAdversos: 'Diarrea, erupción cutánea, sequedad de piel, paroniquia, neumonitis, prolongación del QTc.',
      contraindicaciones: 'Hipersensibilidad.'
    },
    hasCalculator: false
  },
  {
    id: 'epoetina-alfa',
    name: 'Epoetina Alfa',
    category: Category.HEMATOLOGIA,
    indication: 'Anemia sintomática asociada a insuficiencia renal crónica (IRC) o quimioterapia.',
    fichaTecnica: {
      mecanismo: 'Glicoproteína que estimula la eritropoyesis (producción de glóbulos rojos).',
      posologia: 'Dosis inicial de 50 UI/kg 3 veces por semana (IRC), ajustada según respuesta de hemoglobina.',
      efectosAdversos: 'Hipertensión, trombosis, cefalea, síntomas gripales.',
      contraindicaciones: 'Hipertensión no controlada, aplasia pura de células rojas.'
    },
    hasCalculator: true,
    calculatorType: 'EPOETIN'
  },
  {
    id: 'ibrutinib',
    name: 'Ibrutinib',
    category: Category.HEMATOLOGIA,
    indication: 'Leucemia linfocítica crónica (LLC) y linfoma de células del manto (LCM).',
    fichaTecnica: {
      mecanismo: 'Inhibidor de la tirosina quinasa de Bruton (BTK), clave en la supervivencia de células B.',
      posologia: '420 mg (LLC) o 560 mg (LCM) una vez al día.',
      efectosAdversos: 'Diarrea, sangrado, fatiga, fibrilación auricular, infecciones.',
      contraindicaciones: 'Hipersensibilidad.'
    },
    hasCalculator: false
  },
  
  // --- Reumatología ---
  {
    id: 'tofacitinib',
    name: 'Tofacitinib',
    category: Category.REUMATOLOGIA,
    indication: 'Artritis reumatoide, artritis psoriásica, colitis ulcerosa.',
    fichaTecnica: {
      mecanismo: 'Inhibidor de las Janus quinasas (JAK), modulando la señalización de citoquinas inflamatorias.',
      posologia: '5 mg dos veces al día. Dosis puede variar según formulación e indicación.',
      efectosAdversos: 'Infecciones, aumento de lípidos, aumento de enzimas hepáticas, riesgo aumentado de trombosis y eventos cardiovasculares.',
      contraindicaciones: 'Infecciones graves activas, insuficiencia hepática grave, recuentos celulares bajos.'
    },
    hasCalculator: false
  },
   {
    id: 'infliximab',
    name: 'Infliximab',
    category: Category.REUMATOLOGIA,
    indication: 'Artritis reumatoide, enfermedad de Crohn, colitis ulcerosa, espondilitis anquilosante.',
    fichaTecnica: {
      mecanismo: 'Anticuerpo monoclonal quimérico que se une al factor de necrosis tumoral alfa (TNF-α).',
      posologia: '3-5 mg/kg por perfusión IV en semanas 0, 2, 6 y luego cada 8 semanas.',
      efectosAdversos: 'Reacciones a la perfusión, infecciones, cefalea.',
      contraindicaciones: 'Tuberculosis activa, insuficiencia cardíaca moderada-grave.'
    },
    hasCalculator: false
  },
  
  // --- Respiratorio ---
  {
    id: 'nintedanib',
    name: 'Nintedanib',
    category: Category.RESPIRATORIO,
    indication: 'Fibrosis pulmonar idiopática (FPI) y otras enfermedades pulmonares intersticiales fibrosantes crónicas.',
    fichaTecnica: {
      mecanismo: 'Inhibidor de la tirosina quinasa (TKI) que actúa sobre receptores de factores de crecimiento.',
      posologia: '150 mg dos veces al día.',
      efectosAdversos: 'Diarrea (muy frecuente), náuseas, dolor abdominal, aumento de enzimas hepáticas.',
      contraindicaciones: 'Hipersensibilidad, embarazo.'
    },
    hasCalculator: false
  },
  {
    id: 'omalizumab',
    name: 'Omalizumab',
    category: Category.RESPIRATORIO,
    indication: 'Asma alérgica grave persistente y urticaria crónica espontánea.',
    fichaTecnica: {
      mecanismo: 'Anticuerpo monoclonal que se une a la inmunoglobulina E (IgE) libre, impidiendo su acción.',
      posologia: 'Dosis y frecuencia basadas en el peso corporal y los niveles de IgE sérica.',
      efectosAdversos: 'Reacciones en el sitio de inyección, cefalea, riesgo de anafilaxia (raro).',
      contraindicaciones: 'Hipersensibilidad.'
    },
    hasCalculator: false,
  },
  
  // --- Digestivo ---
  {
    id: 'linaclotida',
    name: 'Linaclotida',
    category: Category.DIGESTIVO,
    indication: 'Síndrome del intestino irritable con estreñimiento (SII-E) moderado a grave.',
    fichaTecnica: {
      mecanismo: 'Agonista del receptor de la guanilato ciclasa-C (GC-C) en el epitelio intestinal.',
      posologia: '290 µg una vez al día, preferiblemente en ayunas.',
      efectosAdversos: 'Diarrea (muy frecuente), dolor abdominal, flatulencia.',
      contraindicaciones: 'Hipersensibilidad, obstrucción gastrointestinal mecánica conocida o sospechada.'
    },
    hasCalculator: false
  },
  {
    id: 'vedolizumab',
    name: 'Vedolizumab',
    category: Category.DIGESTIVO,
    indication: 'Colitis ulcerosa y enfermedad de Crohn de moderada a grave con respuesta inadecuada.',
    fichaTecnica: {
      mecanismo: 'Anticuerpo monoclonal humanizado que se une selectivamente a la integrina α4β7 intestinal.',
      posologia: '300 mg por perfusión intravenosa en semanas 0, 2 y 6, y después cada 8 semanas.',
      efectosAdversos: 'Nasofaringitis, cefalea, artralgia. Bajo riesgo de infecciones sistémicas.',
      contraindicaciones: 'Hipersensibilidad, infecciones graves activas como tuberculosis.'
    },
    hasCalculator: false
  },
  
  // --- Otras categorías ---
  {
    id: 'denosumab',
    name: 'Denosumab',
    category: Category.ENDOCRINOLOGIA,
    indication: 'Osteoporosis en mujeres posmenopáusicas y hombres con riesgo elevado de fracturas.',
    fichaTecnica: {
      mecanismo: 'Anticuerpo monoclonal que se une a RANKL, inhibiendo la formación y función de los osteoclastos.',
      posologia: '60 mg en inyección subcutánea una vez cada 6 meses.',
      efectosAdversos: 'Dolor de espalda y extremidades, hipocalcemia, osteonecrosis mandibular (raro).',
      contraindicaciones: 'Hipocalcemia no corregida.'
    },
    hasCalculator: false
  },
  {
    id: 'teriparatida',
    name: 'Teriparatida',
    category: Category.ENDOCRINOLOGIA,
    indication: 'Tratamiento de la osteoporosis grave en pacientes con alto riesgo de fractura.',
    fichaTecnica: {
      mecanismo: 'Fragmento recombinante de la hormona paratiroidea humana (PTH), agente osteoformador.',
      posologia: '20 µg por inyección subcutánea una vez al día. Duración máxima del tratamiento: 24 meses.',
      efectosAdversos: 'Mareos, náuseas, calambres en las piernas, hipercalcemia.',
      contraindicaciones: 'Hipercalcemia preexistente, enfermedad de Paget, radioterapia esquelética previa.'
    },
    hasCalculator: false
  },
  {
    id: 'ulipristal',
    name: 'Acetato de Ulipristal',
    category: Category.GINECOLOGIA,
    indication: 'Tratamiento intermitente de los miomas uterinos sintomáticos.',
    fichaTecnica: {
      mecanismo: 'Modulador selectivo de los receptores de progesterona.',
      posologia: '5 mg una vez al día. Se administra en ciclos de tratamiento.',
      efectosAdversos: 'Amenorrea, engrosamiento endometrial, sofocos. Riesgo de daño hepático.',
      contraindicaciones: 'Sangrado genital de etiología desconocida, cáncer de útero, cérvix, ovario o mama.'
    },
    hasCalculator: false
  },
  {
    id: 'ranibizumab',
    name: 'Ranibizumab',
    category: Category.OFTALMOLOGIA,
    indication: 'Degeneración macular asociada a la edad (DMAE) neovascular, edema macular diabético.',
    fichaTecnica: {
      mecanismo: 'Fragmento de anticuerpo monoclonal recombinante humanizado que se une al factor de crecimiento endotelial vascular A (VEGF-A).',
      posologia: 'Inyección intravítrea. La dosis y frecuencia varían según la indicación (ej. 0.5 mg mensual).',
      efectosAdversos: 'Dolor ocular, hemorragia conjuntival, aumento de la presión intraocular, endoftalmitis (raro).',
      contraindicaciones: 'Infección ocular o periocular activa o sospechada.'
    },
    hasCalculator: false
  },
  {
    id: 'sofosbuvir-velpatasvir',
    name: 'Sofosbuvir/Velpatasvir',
    category: Category.INFECTOLOGIA,
    indication: 'Tratamiento de la infección crónica por el virus de la hepatitis C (VHC) en adultos.',
    fichaTecnica: {
      mecanismo: 'Combinación de un inhibidor de la polimerasa NS5B (sofosbuvir) y un inhibidor del complejo de replicación NS5A (velpatasvir).',
      posologia: 'Un comprimido (400 mg/100 mg) una vez al día durante 12 semanas.',
      efectosAdversos: 'Cefalea, fatiga, náuseas. Generalmente muy bien tolerado.',
      contraindicaciones: 'Uso concomitante con inductores potentes de P-gp (rifampicina, hierba de San Juan).'
    },
    hasCalculator: false
  },
  {
    id: 'tamsulosina',
    name: 'Tamsulosina',
    category: Category.UROLOGIA,
    indication: 'Síntomas del tracto urinario inferior (STUI) asociados a la hiperplasia benigna de próstata (HBP).',
    fichaTecnica: {
      mecanismo: 'Antagonista selectivo de los receptores adrenérgicos alfa-1A/1D.',
      posologia: '0.4 mg una vez al día.',
      efectosAdversos: 'Mareo, hipotensión postural, eyaculación anormal (incluida eyaculación retrógrada).',
      contraindicaciones: 'Hipersensibilidad, antecedentes de hipotensión ortostática.'
    },
    hasCalculator: false
  }
];

// Process the initial list to create the final, expanded list.
export const allMedications: Medication[] = initialMedications
  .map(med => ({ ...med, id: med.id + '-' + Math.random().toString(36).substr(2, 9) })); // Add unique IDs

// Duplicate and slightly alter to reach ~200 entries for a realistic feel
const baseMedsCount = allMedications.length;
for (let i = 0; i < 170; i++) {
  const originalMed = allMedications[i % baseMedsCount];
  const newMed = JSON.parse(JSON.stringify(originalMed)); // Deep copy
  newMed.id = `${newMed.id}-clone-${i}`;
  newMed.name = `${newMed.name} ${i % 2 === 0 ? 'Genérico' : 'Plus'}`;
  // Avoid duplicating calculators on clones to keep the count meaningful
  newMed.hasCalculator = false;
  delete newMed.calculatorType;
  allMedications.push(newMed);
}

// Shuffle the array to make it look more organic
allMedications.sort(() => Math.random() - 0.5);

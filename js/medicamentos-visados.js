// UMBRAMED Medical Division - Medicamentos Visados SAS
// Conversión de React/TypeScript a JavaScript vanilla

// Definición de categorías
const Categories = {
    CARDIOLOGIA: "Cardiología",
    NEFROLOGIA: "Nefrología", 
    ENDOCRINOLOGIA: "Endocrinología",
    NEUROLOGIA: "Neurología",
    PSIQUIATRIA: "Psiquiatría",
    REUMATOLOGIA: "Reumatología",
    ONCOLOGIA: "Oncología",
    HEMATOLOGIA: "Hematología",
    DERMATOLOGIA: "Dermatología",
    DIGESTIVO: "Digestivo",
    RESPIRATORIO: "Respiratorio",
    ANTICOAGULANTES: "Anticoagulantes",
    ANTIDIABETICOS: "Antidiabéticos",
    GINECOLOGIA: "Ginecología",
    OFTALMOLOGIA: "Oftalmología",
    INFECTOLOGIA: "Infectología",
    UROLOGIA: "Urología"
};

// Base de datos de medicamentos
const allMedications = [
    // --- Anticoagulantes ---
    {
        id: 'apixaban',
        name: 'Apixaban',
        category: Categories.ANTICOAGULANTES,
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
        category: Categories.ANTICOAGULANTES,
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
        category: Categories.ANTICOAGULANTES,
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
        category: Categories.ANTICOAGULANTES,
        indication: 'Tratamiento de trombosis venosa profunda y embolia pulmonar.',
        fichaTecnica: {
            mecanismo: 'Inhibidor oral directo del factor Xa.',
            posologia: '60 mg una vez al día (30 mg si CrCl 30-50 ml/min, peso ≤60kg, o uso concomitante de ciertos inhibidores P-gp).',
            efectosAdversos: 'Sangrado, anemia, erupción cutánea.',
            contraindicaciones: 'Sangrado activo, insuficiencia renal grave.'
        },
        hasCalculator: false
    },

    // --- Antidiabéticos ---
    {
        id: 'sitagliptin',
        name: 'Sitagliptina',
        category: Categories.ANTIDIABETICOS,
        indication: 'Tratamiento de la diabetes mellitus tipo 2 como monoterapia o en combinación.',
        fichaTecnica: {
            mecanismo: 'Inhibidor de la dipeptidil peptidasa-4 (DPP-4) que aumenta los niveles de GLP-1 y GIP.',
            posologia: '100 mg una vez al día. Ajuste en insuficiencia renal: 50 mg (TFG 30-50) o 25 mg (TFG <30).',
            efectosAdversos: 'Infecciones del tracto respiratorio superior, cefalea, osteoartritis.',
            contraindicaciones: 'Hipersensibilidad al principio activo. Precaución en pancreatitis aguda.'
        },
        hasCalculator: true,
        calculatorType: 'SITAGLIPTIN'
    },
    {
        id: 'empagliflozin',
        name: 'Empagliflozina',
        category: Categories.ANTIDIABETICOS,
        indication: 'Tratamiento de diabetes mellitus tipo 2 e insuficiencia cardíaca.',
        fichaTecnica: {
            mecanismo: 'Inhibidor del cotransportador sodio-glucosa tipo 2 (SGLT2) en el túbulo proximal renal.',
            posologia: '10 mg una vez al día, puede aumentarse a 25 mg. Suspender si TFG <30 ml/min/1.73m².',
            efectosAdversos: 'Infecciones genitourinarias, poliuria, hipotensión.',
            contraindicaciones: 'Diabetes tipo 1, cetoacidosis diabética, insuficiencia renal grave.'
        },
        hasCalculator: false
    },

    // --- Psiquiatría ---
    {
        id: 'clozapine',
        name: 'Clozapina',
        category: Categories.PSIQUIATRIA,
        indication: 'Esquizofrenia resistente al tratamiento y reducción del riesgo de comportamiento suicida.',
        fichaTecnica: {
            mecanismo: 'Antipsicótico atípico con afinidad por receptores D1, D2, 5-HT2, α-adrenérgicos y muscarínicos.',
            posologia: 'Inicio: 12.5 mg 1-2 veces/día. Titular gradualmente hasta 300-450 mg/día. Máximo: 900 mg/día.',
            efectosAdversos: 'Sedación, hipersalivación, taquicardia, estreñimiento, agranulocitosis.',
            contraindicaciones: 'Antecedentes de agranulocitosis, epilepsia no controlada, íleo paralítico.'
        },
        hasCalculator: true,
        calculatorType: 'CLOZAPINA'
    },
    {
        id: 'olanzapine',
        name: 'Olanzapina',
        category: Categories.PSIQUIATRIA,
        indication: 'Tratamiento de esquizofrenia y episodios maníacos moderados a severos.',
        fichaTecnica: {
            mecanismo: 'Antipsicótico atípico con actividad antagonista sobre receptores dopaminérgicos y serotoninérgicos.',
            posologia: '5-10 mg/día inicial. Rango terapéutico: 5-20 mg/día. Ajustar según respuesta clínica.',
            efectosAdversos: 'Aumento de peso, somnolencia, mareo, estreñimiento, xerostomía.',
            contraindicaciones: 'Hipersensibilidad, glaucoma de ángulo cerrado, hipertrofia prostática.'
        },
        hasCalculator: false
    },

    // --- Nefrología ---
    {
        id: 'epoetin',
        name: 'Epoetina Alfa',
        category: Categories.NEFROLOGIA,
        indication: 'Tratamiento de la anemia asociada a insuficiencia renal crónica.',
        fichaTecnica: {
            mecanismo: 'Eritropoyetina recombinante humana que estimula la eritropoyesis.',
            posologia: 'Inicial: 50 UI/kg, 3 veces/semana SC o IV. Ajustar según niveles de Hb objetivo (10-12 g/dL).',
            efectosAdversos: 'Hipertensión, cefalea, síntomas gripales, trombosis vascular.',
            contraindicaciones: 'Hipertensión no controlada, hipersensibilidad a proteínas derivadas de células de mamífero.'
        },
        hasCalculator: true,
        calculatorType: 'EPOETIN'
    },
    {
        id: 'tolvaptan',
        name: 'Tolvaptán',
        category: Categories.NEFROLOGIA,
        indication: 'Hiponatremia hipervolémica e isovolémica, y poliquistosis renal autosómica dominante.',
        fichaTecnica: {
            mecanismo: 'Antagonista selectivo del receptor de vasopresina V2 que induce diuresis acuosa.',
            posologia: 'Hiponatremia: 15 mg/día inicial, titular hasta 30-60 mg/día. PQRAD: inicio con 60 mg/día.',
            efectosAdversos: 'Sed, poliuria, fatiga, mareo, hepatotoxicidad.',
            contraindicaciones: 'Incapacidad para percibir sed, hipovolemia, anuria.'
        },
        hasCalculator: true,
        calculatorType: 'TOLVAPTAN'
    },

    // --- Cardiología ---
    {
        id: 'amiodarone',
        name: 'Amiodarona',
        category: Categories.CARDIOLOGIA,
        indication: 'Tratamiento de arritmias ventriculares y supraventriculares graves.',
        fichaTecnica: {
            mecanismo: 'Antiarrítmico clase III que bloquea canales de potasio, prolonga el período refractario.',
            posologia: 'Carga: 800-1600 mg/día por 1-3 semanas. Mantenimiento: 200-400 mg/día.',
            efectosAdversos: 'Toxicidad pulmonar, hepatotoxicidad, disfunción tiroidea, fotosensibilidad.',
            contraindicaciones: 'Bradicardia sinusal severa, bloqueo AV de alto grado, disfunción tiroidea.'
        },
        hasCalculator: true,
        calculatorType: 'AMIODARONE'
    },
    {
        id: 'atorvastatin',
        name: 'Atorvastatina',
        category: Categories.CARDIOLOGIA,
        indication: 'Tratamiento de hipercolesterolemia y prevención cardiovascular.',
        fichaTecnica: {
            mecanismo: 'Inhibidor de la HMG-CoA reductasa que reduce la síntesis de colesterol.',
            posologia: '10-20 mg/día inicial. Rango: 10-80 mg/día según objetivos de LDL.',
            efectosAdversos: 'Mialgia, elevación de transaminasas, cefalea, dispepsia.',
            contraindicaciones: 'Enfermedad hepática activa, embarazo, lactancia.'
        },
        hasCalculator: false
    },

    // --- Endocrinología ---
    {
        id: 'cinacalcet',
        name: 'Cinacalcet',
        category: Categories.ENDOCRINOLOGIA,
        indication: 'Hiperparatiroidismo secundario en pacientes con insuficiencia renal crónica en diálisis.',
        fichaTecnica: {
            mecanismo: 'Calcimimético que activa el receptor sensor de calcio en las glándulas paratiroides.',
            posologia: 'Inicial: 30 mg/día. Titular cada 2-4 semanas hasta máximo 180 mg/día.',
            efectosAdversos: 'Náuseas, vómitos, diarrea, mialgia, mareo.',
            contraindicaciones: 'Hipocalcemia, hipersensibilidad al principio activo.'
        },
        hasCalculator: true,
        calculatorType: 'CINACALCET'
    },
    {
        id: 'levothyroxine',
        name: 'Levotiroxina',
        category: Categories.ENDOCRINOLOGIA,
        indication: 'Tratamiento del hipotiroidismo y supresión de TSH en cáncer de tiroides.',
        fichaTecnica: {
            mecanismo: 'Hormona tiroidea sintética que reemplaza la tiroxina endógena deficiente.',
            posologia: '1.6 μg/kg/día en adultos. Ajustar según niveles de TSH cada 6-8 semanas.',
            efectosAdversos: 'Síntomas de hipertiroidismo si sobredosificación: taquicardia, ansiedad, insomnio.',
            contraindicaciones: 'Tirotoxicosis, infarto agudo de miocardio, insuficiencia suprarrenal no tratada.'
        },
        hasCalculator: false
    },

    // --- Oncología ---
    {
        id: 'bevacizumab',
        name: 'Bevacizumab',
        category: Categories.ONCOLOGIA,
        indication: 'Tratamiento de cáncer colorrectal metastásico, cáncer de pulmón no microcítico, cáncer renal.',
        fichaTecnica: {
            mecanismo: 'Anticuerpo monoclonal humanizado que inhibe el factor de crecimiento endotelial vascular (VEGF).',
            posologia: '5-10 mg/kg cada 2 semanas o 7.5-15 mg/kg cada 3 semanas según protocolo.',
            efectosAdversos: 'Hipertensión, proteinuria, hemorragia, tromboembolismo, perforación GI.',
            contraindicaciones: 'Hemorragia reciente, cirugía mayor reciente, hipertensión no controlada.'
        },
        hasCalculator: false
    },

    // --- Neurología ---
    {
        id: 'levetiracetam',
        name: 'Levetiracetam',
        category: Categories.NEUROLOGIA,
        indication: 'Tratamiento de epilepsia como monoterapia y terapia complementaria.',
        fichaTecnica: {
            mecanismo: 'Antiepiléptico que modula la liberación de neurotransmisores a través de la proteína SV2A.',
            posologia: 'Inicial: 500 mg dos veces/día. Titular hasta 1000-1500 mg dos veces/día.',
            efectosAdversos: 'Somnolencia, astenia, mareo, cambios de comportamiento, agresividad.',
            contraindicaciones: 'Hipersensibilidad. Precaución en insuficiencia renal.'
        },
        hasCalculator: false
    }
];

// Variables globales
let filteredMedications = [...allMedications];
let currentMedication = null;
let activeTab = 'info';

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
});

function initializePage() {
    populateCategorySelect();
    updateStatistics();
    renderMedications();
    
    // Agregar clase de animación a los elementos
    setTimeout(() => {
        document.querySelector('.stats-grid').classList.add('fade-in');
        document.querySelector('.search-controls').classList.add('fade-in');
        document.querySelector('#medications-grid').classList.add('fade-in');
    }, 100);
}

function setupEventListeners() {
    // Búsqueda en tiempo real
    document.getElementById('search-input').addEventListener('input', debounce(filterMedications, 300));
    
    // Filtro por categoría
    document.getElementById('category-select').addEventListener('change', filterMedications);
    
    // Cerrar modal al hacer clic fuera
    document.getElementById('medication-modal').addEventListener('click', function(e) {
        if (e.target.id === 'medication-modal') {
            closeMedicationModal();
        }
    });
    
    // Tecla ESC para cerrar modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !document.getElementById('medication-modal').classList.contains('hidden')) {
            closeMedicationModal();
        }
    });
}

function populateCategorySelect() {
    const select = document.getElementById('category-select');
    const categories = [...new Set(allMedications.map(med => med.category))].sort();
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
}

function updateStatistics() {
    document.getElementById('total-medications').textContent = allMedications.length;
    document.getElementById('total-categories').textContent = new Set(allMedications.map(med => med.category)).size;
    document.getElementById('total-calculators').textContent = allMedications.filter(med => med.hasCalculator).length;
    document.getElementById('filtered-results').textContent = filteredMedications.length;
}

function filterMedications() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.getElementById('category-select').value;
    
    filteredMedications = allMedications.filter(med => {
        const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
        const matchesSearch = med.name.toLowerCase().includes(searchTerm) ||
                             med.indication.toLowerCase().includes(searchTerm) ||
                             med.category.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });
    
    updateStatistics();
    renderMedications();
}

function renderMedications() {
    const container = document.getElementById('medications-grid');
    const noResults = document.getElementById('no-results');
    
    if (filteredMedications.length === 0) {
        container.style.display = 'none';
        noResults.classList.remove('hidden');
        return;
    }
    
    container.style.display = 'grid';
    noResults.classList.add('hidden');
    
    container.innerHTML = filteredMedications.map(med => `
        <div class="medication-card" onclick="openMedicationModal('${med.id}')">
            <div>
                <h3 class="medication-name">${med.name}</h3>
                <p class="medication-category">${med.category}</p>
                <p class="medication-indication">${med.indication}</p>
            </div>
            ${med.hasCalculator ? '<div class="calculator-badge" title="Calculadora disponible">🧮</div>' : ''}
        </div>
    `).join('');
}

function openMedicationModal(medicationId) {
    currentMedication = allMedications.find(med => med.id === medicationId);
    if (!currentMedication) return;
    
    // Llenar datos básicos
    document.getElementById('modal-title').textContent = currentMedication.name;
    document.getElementById('modal-category').textContent = currentMedication.category;
    document.getElementById('modal-indication').textContent = currentMedication.indication;
    document.getElementById('modal-mechanism').textContent = currentMedication.fichaTecnica.mecanismo;
    document.getElementById('modal-posology').textContent = currentMedication.fichaTecnica.posologia;
    document.getElementById('modal-side-effects').textContent = currentMedication.fichaTecnica.efectosAdversos;
    document.getElementById('modal-contraindications').textContent = currentMedication.fichaTecnica.contraindicaciones;
    
    // Manejar calculadora
    const calculatorTab = document.getElementById('calculator-tab');
    if (currentMedication.hasCalculator) {
        calculatorTab.style.display = 'flex';
        generateCalculator(currentMedication.calculatorType);
    } else {
        calculatorTab.style.display = 'none';
        document.getElementById('modal-tabs').style.display = 'none';
    }
    
    // Resetear a la pestaña de información
    switchTab('info');
    
    // Mostrar modal
    document.getElementById('medication-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeMedicationModal() {
    document.getElementById('medication-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentMedication = null;
}

function switchTab(tab) {
    activeTab = tab;
    
    // Actualizar botones de pestañas
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-button[onclick="switchTab('${tab}')"]`).classList.add('active');
    
    // Mostrar/ocultar contenido
    document.getElementById('tab-info').classList.toggle('hidden', tab !== 'info');
    document.getElementById('tab-calculator').classList.toggle('hidden', tab !== 'calculator');
}

function generateCalculator(type) {
    const container = document.getElementById('calculator-content');
    
    switch (type) {
        case 'APIXABAN':
            container.innerHTML = getApixabanCalculator();
            break;
        case 'SITAGLIPTIN':
            container.innerHTML = getSitagliptinCalculator();
            break;
        case 'CLOZAPINA':
            container.innerHTML = getClozapineCalculator();
            break;
        case 'EPOETIN':
            container.innerHTML = getEpoetinCalculator();
            break;
        case 'TOLVAPTAN':
            container.innerHTML = getTolvaptanCalculator();
            break;
        case 'AMIODARONE':
            container.innerHTML = getAmiodaroneCalculator();
            break;
        case 'CINACALCET':
            container.innerHTML = getCinacalcetCalculator();
            break;
        default:
            container.innerHTML = '<p>Calculadora no disponible.</p>';
    }
}

// --- Calculadoras específicas ---

function getApixabanCalculator() {
    return `
        <h4 class="calculator-title">Calculadora de Dosis de Apixaban</h4>
        <p class="calculator-subtitle">Basado en criterios de reducción de dosis para FANV.</p>
        
        <div class="calc-input-group">
            <label class="calc-label">Edad (años)</label>
            <input type="number" id="apixaban-age" class="calc-input" oninput="calculateApixaban()">
        </div>
        
        <div class="calc-input-group">
            <label class="calc-label">Peso (kg)</label>
            <input type="number" id="apixaban-weight" class="calc-input" oninput="calculateApixaban()">
        </div>
        
        <div class="calc-input-group">
            <label class="calc-label">Creatinina Sérica (mg/dL)</label>
            <input type="number" step="0.1" id="apixaban-creatinine" class="calc-input" oninput="calculateApixaban()">
        </div>
        
        <div id="apixaban-result" class="calc-result">
            <div class="calc-result-value">Introduzca todos los valores.</div>
        </div>
    `;
}

function calculateApixaban() {
    const age = parseFloat(document.getElementById('apixaban-age').value);
    const weight = parseFloat(document.getElementById('apixaban-weight').value);
    const creatinine = parseFloat(document.getElementById('apixaban-creatinine').value);
    
    const resultDiv = document.getElementById('apixaban-result');
    
    if (isNaN(age) || isNaN(weight) || isNaN(creatinine)) {
        resultDiv.innerHTML = '<div class="calc-result-value">Introduzca todos los valores.</div>';
        return;
    }
    
    let criteriaCount = 0;
    if (age >= 80) criteriaCount++;
    if (weight <= 60) criteriaCount++;
    if (creatinine >= 1.5) criteriaCount++;
    
    const dose = criteriaCount >= 2 
        ? "Dosis recomendada: 2.5 mg dos veces al día."
        : "Dosis recomendada: 5 mg dos veces al día.";
    
    resultDiv.innerHTML = `<div class="calc-result-value">${dose}</div>`;
}

function getSitagliptinCalculator() {
    return `
        <h4 class="calculator-title">Ajuste de Dosis de Sitagliptina por Función Renal</h4>
        
        <div class="calc-input-group">
            <label class="calc-label">Tasa de Filtración Glomerular (TFG) (ml/min)</label>
            <input type="number" id="sitagliptin-gfr" class="calc-input" oninput="calculateSitagliptin()">
        </div>
        
        <div id="sitagliptin-result" class="calc-result">
            <div class="calc-result-value">Introduzca el valor de TFG.</div>
        </div>
    `;
}

function calculateSitagliptin() {
    const gfr = parseFloat(document.getElementById('sitagliptin-gfr').value);
    const resultDiv = document.getElementById('sitagliptin-result');
    
    if (isNaN(gfr)) {
        resultDiv.innerHTML = '<div class="calc-result-value">Introduzca el valor de TFG.</div>';
        return;
    }
    
    let dose;
    if (gfr >= 45) {
        dose = "Dosis recomendada: 100 mg una vez al día.";
    } else if (gfr >= 30) {
        dose = "Dosis recomendada: 50 mg una vez al día.";
    } else {
        dose = "Dosis recomendada: 25 mg una vez al día.";
    }
    
    resultDiv.innerHTML = `<div class="calc-result-value">${dose}</div>`;
}

function getClozapineCalculator() {
    return `
        <h4 class="calculator-title">Esquema de Titulación de Clozapina</h4>
        
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
            <ul style="list-style: disc; margin-left: 1.5rem; line-height: 1.6;">
                <li><strong>Día 1:</strong> 12.5 mg una o dos veces al día.</li>
                <li><strong>Día 2:</strong> 25 mg una o dos veces al día.</li>
                <li><strong>Incrementos:</strong> Aumentar en 25-50 mg/día hasta objetivo de 300-450 mg/día en 2-3 semanas.</li>
                <li><strong>Dosis máxima:</strong> 900 mg/día.</li>
            </ul>
        </div>
        
        <div class="alert-box alert-danger">
            <strong>¡ALERTA!</strong> Requiere monitorización hematológica semanal durante las primeras 18 semanas, luego mensual.
        </div>
    `;
}

function getEpoetinCalculator() {
    return `
        <h4 class="calculator-title">Calculadora de Dosis de Epoetina Alfa (Anemia en IRC)</h4>
        
        <div class="calc-input-group">
            <label class="calc-label">Peso (kg)</label>
            <input type="number" id="epoetin-weight" class="calc-input" oninput="calculateEpoetin()">
        </div>
        
        <div id="epoetin-result" class="calc-result">
            <div class="calc-result-value">Introduzca el peso del paciente.</div>
            <div class="calc-result-note">Ajustar según respuesta de Hemoglobina. Objetivo: 10-12 g/dL.</div>
        </div>
    `;
}

function calculateEpoetin() {
    const weight = parseFloat(document.getElementById('epoetin-weight').value);
    const resultDiv = document.getElementById('epoetin-result');
    
    if (isNaN(weight)) {
        resultDiv.innerHTML = `
            <div class="calc-result-value">Introduzca el peso del paciente.</div>
            <div class="calc-result-note">Ajustar según respuesta de Hemoglobina. Objetivo: 10-12 g/dL.</div>
        `;
        return;
    }
    
    const initialDose = weight * 50;
    resultDiv.innerHTML = `
        <div class="calc-result-value">Dosis inicial recomendada: ${initialDose.toLocaleString()} UI, 3 veces por semana.</div>
        <div class="calc-result-note">Ajustar según respuesta de Hemoglobina. Objetivo: 10-12 g/dL.</div>
    `;
}

function getTolvaptanCalculator() {
    return `
        <h4 class="calculator-title">Guía Rápida de Tolvaptán</h4>
        
        <div style="display: grid; gap: 1rem; margin: 1rem 0;">
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
                <h5 style="font-weight: 600; margin-bottom: 0.5rem;">Hiponatremia (SIADH)</h5>
                <p style="color: #6b7280; margin: 0;">Dosis inicial: 15 mg/día. Titular a 30-60 mg/día. No usar >30 días. Corregir sodio lentamente.</p>
            </div>
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
                <h5 style="font-weight: 600; margin-bottom: 0.5rem;">Poliquistosis Renal (PQRAD)</h5>
                <p style="color: #6b7280; margin: 0;">Dosis inicial: 60 mg/día (45+15). Titular a 90 mg/día (60+30) o 120 mg/día (90+30).</p>
            </div>
        </div>
        
        <div class="alert-box alert-warning">
            <strong>¡ALERTA!</strong> Riesgo de hepatotoxicidad. Monitorizar enzimas hepáticas antes de iniciar y mensualmente durante 18 meses.
        </div>
    `;
}

function getAmiodaroneCalculator() {
    return `
        <h4 class="calculator-title">Guía de Dosificación de Amiodarona</h4>
        
        <div style="display: grid; gap: 1rem; margin: 1rem 0;">
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
                <h5 style="font-weight: 600; margin-bottom: 0.5rem;">Dosis de Carga Oral</h5>
                <p style="color: #6b7280; margin: 0;">800-1600 mg/día durante 1-3 semanas, luego reducir a 600-800 mg/día durante 1 mes.</p>
            </div>
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
                <h5 style="font-weight: 600; margin-bottom: 0.5rem;">Dosis de Mantenimiento</h5>
                <p style="color: #6b7280; margin: 0;">Dosis efectiva más baja, usualmente 200 mg/día. Algunos pacientes pueden requerir hasta 400 mg/día.</p>
            </div>
        </div>
        
        <div class="alert-box alert-danger">
            <strong>¡ALERTA!</strong> Múltiples toxicidades (pulmonar, hepática, tiroidea). Monitorización periódica es crucial.
        </div>
    `;
}

function getCinacalcetCalculator() {
    return `
        <h4 class="calculator-title">Guía de Ajuste de Cinacalcet (Hiperparatiroidismo 2º)</h4>
        
        <div class="calc-input-group">
            <label class="calc-label">Nivel de PTHi (pg/mL)</label>
            <input type="number" id="cinacalcet-pth" class="calc-input" oninput="calculateCinacalcet()">
        </div>
        
        <div id="cinacalcet-result" class="calc-result">
            <div class="calc-result-value">Introduzca el nivel de PTH.</div>
            <div class="calc-result-note">Siempre verificar niveles de Calcio y Fósforo antes de ajustar.</div>
        </div>
    `;
}

function calculateCinacalcet() {
    const pth = parseFloat(document.getElementById('cinacalcet-pth').value);
    const resultDiv = document.getElementById('cinacalcet-result');
    
    if (isNaN(pth)) {
        resultDiv.innerHTML = `
            <div class="calc-result-value">Introduzca el nivel de PTH.</div>
            <div class="calc-result-note">Siempre verificar niveles de Calcio y Fósforo antes de ajustar.</div>
        `;
        return;
    }
    
    let advice;
    if (pth > 300) {
        advice = "Considerar iniciar o aumentar dosis de Cinacalcet.";
    } else if (pth < 150) {
        advice = "Considerar reducir o suspender Cinacalcet.";
    } else {
        advice = "Nivel de PTH en rango objetivo (150-300 pg/mL). Mantener dosis actual.";
    }
    
    resultDiv.innerHTML = `
        <div class="calc-result-value">${advice}</div>
        <div class="calc-result-note">Siempre verificar niveles de Calcio y Fósforo antes de ajustar.</div>
    `;
}

// Funciones auxiliares
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showMobileFilters() {
    // Esta función se implementaría para mostrar filtros en móvil
    // Por simplicidad, redirigir focus al select de categorías
    document.getElementById('category-select').focus();
}

// Log de inicialización
console.log('🧬 UMBRAMED Medical Division - Medicamentos Visados SAS cargado correctamente');
console.log(`📊 Base de datos: ${allMedications.length} medicamentos, ${new Set(allMedications.map(m => m.category)).size} categorías`);

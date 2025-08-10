// Ejemplo de cómo expandir la base de datos de medicamentos
// Copie este código en js/cuidados-paliativos.js para agregar más medicamentos

// MEDICAMENTOS ADICIONALES SUGERIDOS PARA CUIDADOS PALIATIVOS
const ADDITIONAL_DRUGS = [
    // Analgésicos adicionales
    { id: 11, name: 'Tramadol' },
    { id: 12, name: 'Buprenorfina' },
    { id: 13, name: 'Metadona' },
    
    // Sedantes y ansiolíticos
    { id: 14, name: 'Lorazepam' },
    { id: 15, name: 'Clonazepam' },
    
    // Antieméticos adicionales
    { id: 16, name: 'Dexametasona' }, // También antiemético
    { id: 17, name: 'Alizaprida' },
    { id: 18, name: 'Domperidona' },
    
    // Anticolinérgicos
    { id: 19, name: 'Glicopirronio' },
    { id: 20, name: 'Atropina' },
    
    // Diuréticos
    { id: 21, name: 'Furosemida' },
    
    // Broncodilatadores
    { id: 22, name: 'Salbutamol' },
    { id: 23, name: 'Ipratropio' },
    
    // Otros
    { id: 24, name: 'Octreótido' },
    { id: 25, name: 'Fenobarbital' }
];

// INTERACCIONES ADICIONALES A CONSIDERAR
const ADDITIONAL_INTERACTIONS = {
    // Tramadol tiene interacciones con serotoninérgicos
    'Tramadol': ['Metoclopramida'], // Riesgo serotoninérgico
    
    // Metadona tiene múltiples interacciones
    'Metadona': ['Midazolam', 'Haloperidol'], // Prolonga QT
    
    // Furosemida puede ser incompatible con algunos
    'Furosemida': ['Midazolam'], // pH incompatible
    
    // Octreótido
    'Octreótido': ['Dexametasona'], // Posible precipitación
    
    // Fenobarbital
    'Fenobarbital': ['Midazolam', 'Dexametasona'] // Precipitación alcalina
};

// CATEGORÍAS EXPANDIDAS
const EXPANDED_CATEGORIES = {
    analgesicos_opioides: ['Morfina', 'Fentanilo', 'Tramadol', 'Buprenorfina', 'Metadona'],
    analgesicos_no_opioides: ['Ketamina'],
    sedantes_hipnoticos: ['Midazolam', 'Lorazepam', 'Clonazepam', 'Fenobarbital'],
    antiemeticos: ['Metoclopramida', 'Ondansetrón', 'Alizaprida', 'Domperidona'],
    antipsicoticos: ['Haloperidol', 'Levomepromazina'],
    antiespasmodicos: ['Butilescopolamina', 'Glicopirronio', 'Atropina'],
    corticoides: ['Dexametasona'],
    diureticos: ['Furosemida'],
    broncodilatadores: ['Salbutamol', 'Ipratropio'],
    otros: ['Octreótido']
};

// INFORMACIÓN ADICIONAL DE DOSIFICACIÓN (ejemplo)
const DRUG_INFO = {
    'Morfina': {
        dosis_habitual: '2.5-10 mg/24h SC',
        concentracion: '1-2 mg/ml',
        observaciones: 'Titular según dolor, ajustar por función renal'
    },
    'Midazolam': {
        dosis_habitual: '2.5-20 mg/24h SC',
        concentracion: '0.5-1 mg/ml',
        observaciones: 'Ajustar según sedación deseada'
    },
    'Haloperidol': {
        dosis_habitual: '0.5-5 mg/24h SC',
        concentracion: '0.1-0.2 mg/ml',
        observaciones: 'Vigilar síntomas extrapiramidales'
    }
    // ... agregar más según necesidad
};

// INSTRUCCIONES PARA INTEGRAR:
// 1. Copiar ADDITIONAL_DRUGS al array ALL_DRUGS en el archivo principal
// 2. Agregar ADDITIONAL_INTERACTIONS al objeto PRECIPITATE_INTERACTIONS
// 3. Usar DRUG_INFO para mostrar información adicional en la interfaz
// 4. Implementar filtros por categoría usando EXPANDED_CATEGORIES

// EJEMPLO DE USO EN LA INTERFAZ:
// function showDrugInfo(drugName) {
//     const info = DRUG_INFO[drugName];
//     if (info) {
//         return `
//             <div class="drug-info">
//                 <strong>Dosis habitual:</strong> ${info.dosis_habitual}<br>
//                 <strong>Concentración:</strong> ${info.concentracion}<br>
//                 <strong>Observaciones:</strong> ${info.observaciones}
//             </div>
//         `;
//     }
//     return '';
// }

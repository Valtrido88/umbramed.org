// Test de validación para el Interpretador Serológico VHB
// Este archivo puede ser ejecutado en la consola del navegador para validar la funcionalidad

console.log('🧪 Iniciando pruebas de validación del Interpretador VHB...');

// Test 1: Verificar que las funciones principales estén definidas
const functionsToTest = [
    'initializeHepatitisInterpreter',
    'setupEventListeners',
    'handleFileSelect',
    'processFile',
    'analyzeReport',
    'performAIAnalysis', // nuevo motor unificado
    'displayReport',
    'showLoading',
    'showError',
    'hideError'
];

let allFunctionsExist = true;
functionsToTest.forEach(funcName => {
    if (typeof window[funcName] !== 'function') {
        console.error(`❌ Función ${funcName} no encontrada`);
        allFunctionsExist = false;
    } else {
        console.log(`✅ Función ${funcName} disponible`);
    }
});

if (allFunctionsExist) {
    console.log('✅ Todas las funciones principales están disponibles');
} else {
    console.error('❌ Algunas funciones no están disponibles');
}

// Test 2: Verificar elementos DOM
const elementsToTest = [
    'drop-zone',
    'file-input',
    'file-preview',
    'upload-prompt',
    'lab-report-text',
    'analyze-button',
    'loading-spinner',
    'error-display',
    'report-display'
];

let allElementsExist = true;
elementsToTest.forEach(elementId => {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`❌ Elemento ${elementId} no encontrado`);
        allElementsExist = false;
    } else {
        console.log(`✅ Elemento ${elementId} encontrado`);
    }
});

if (allElementsExist) {
    console.log('✅ Todos los elementos DOM están disponibles');
} else {
    console.error('❌ Algunos elementos DOM no están disponibles');
}

// Test 3: Verificar configuración de endpoint IA genérico o fallback local
if (typeof window.UMBRA_AI_ENDPOINT === 'string' && window.UMBRA_AI_ENDPOINT.length > 0) {
    console.log('✅ Endpoint IA configurado:', window.UMBRA_AI_ENDPOINT);
} else {
    console.warn('⚠️ Endpoint IA no configurado: se usará fallback local basado en reglas');
}

// Test 4: Verificar que no hay errores en la consola
const originalError = console.error;
let errorCount = 0;
console.error = function(...args) {
    errorCount++;
    originalError.apply(console, args);
};

setTimeout(() => {
    console.error = originalError;
    if (errorCount === 0) {
        console.log('✅ No hay errores en la consola');
    } else {
        console.warn(`⚠️ Se encontraron ${errorCount} errores en la consola`);
    }
    
    console.log('🧪 Pruebas de validación completadas');
}, 1000);

// Test 5: Función de prueba simulada (opcional)
window.testAIEndpoint = async function() {
    if(!window.UMBRA_AI_ENDPOINT){
        console.warn('⚠️ No hay endpoint configurado. Nada que probar.');
        return false;
    }
    console.log('🔗 Probando conexión con endpoint IA...');
    try {
        const response = await fetch(window.UMBRA_AI_ENDPOINT, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({prompt:'Ping diagnóstico serología VHB', purpose:'diagnostic'})
        });
        if(response.ok){
            console.log('✅ Endpoint IA responde HTTP 200');
            return true;
        } else {
            console.error('❌ Endpoint IA respondió código', response.status);
            return false;
        }
    } catch(err){
        console.error('❌ Error conectando con endpoint IA:', err.message);
        return false;
    }
};

console.log('💡 Para probar la conexión con el endpoint IA ejecuta: testAIEndpoint()');

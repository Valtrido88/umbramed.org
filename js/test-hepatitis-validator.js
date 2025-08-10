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
    'performGeminiAnalysis',
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

// Test 3: Verificar configuración de API
if (typeof GEMINI_API_KEY !== 'undefined' && GEMINI_API_KEY.length > 0) {
    console.log('✅ API Key de Gemini configurada');
} else {
    console.error('❌ API Key de Gemini no configurada');
}

if (typeof GEMINI_API_URL !== 'undefined' && GEMINI_API_URL.includes('generativelanguage.googleapis.com')) {
    console.log('✅ URL de API Gemini configurada correctamente');
} else {
    console.error('❌ URL de API Gemini no configurada correctamente');
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
window.testGeminiConnection = async function() {
    console.log('🔗 Probando conexión con Gemini API...');
    try {
        const testPrompt = "Test de conexión";
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: testPrompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.1,
                    maxOutputTokens: 100,
                }
            })
        });
        
        if (response.ok) {
            console.log('✅ Conexión con Gemini API exitosa');
            return true;
        } else {
            console.error('❌ Error en la conexión con Gemini API:', response.status);
            return false;
        }
    } catch (error) {
        console.error('❌ Error al conectar con Gemini API:', error);
        return false;
    }
};

console.log('💡 Para probar la conexión con Gemini API, ejecuta: testGeminiConnection()');

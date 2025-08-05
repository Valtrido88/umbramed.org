// UMBRAMED Medical Division - Interpretador Serológico de Hepatitis B
// Sistema de interpretación serológica con IA integrada

// Configuración de la API de Gemini (hardcoded)
const GEMINI_API_KEY = 'AIzaSyBf9oXtIOBRxkIzMRxaQ9Q_FzD3ZbXv-bA';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// Variables globales
let selectedFile = null;
let isAnalyzing = false;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeHepatitisInterpreter();
    setupEventListeners();
});

function initializeHepatitisInterpreter() {
    console.log('🦠 UMBRAMED - Interpretador Serológico VHB inicializado');
    setupDropZone();
}

function setupEventListeners() {
    // Configurar zona de drop
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const uploadLink = document.getElementById('upload-link');
    const analyzeButton = document.getElementById('analyze-button');
    const removeFileButton = document.getElementById('remove-file');

    // Click en la zona de subida
    uploadLink.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('click', (e) => {
        if (e.target.id !== 'remove-file') {
            fileInput.click();
        }
    });

    // Eventos de archivo
    fileInput.addEventListener('change', handleFileSelect);
    removeFileButton.addEventListener('click', removeFile);

    // Eventos de drag & drop
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('drop', handleDrop);

    // Botón de análisis
    analyzeButton.addEventListener('click', analyzeReport);
}

function setupDropZone() {
    const dropZone = document.getElementById('drop-zone');
    dropZone.classList.add('border-gray-300');
}

// Manejo de archivos
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        processFile(file);
    }
}

function handleDragOver(event) {
    event.preventDefault();
    const dropZone = document.getElementById('drop-zone');
    dropZone.classList.remove('border-gray-300');
    dropZone.classList.add('border-blue-500', 'bg-blue-50');
}

function handleDragLeave(event) {
    event.preventDefault();
    const dropZone = document.getElementById('drop-zone');
    dropZone.classList.remove('border-blue-500', 'bg-blue-50');
    dropZone.classList.add('border-gray-300');
}

function handleDrop(event) {
    event.preventDefault();
    const dropZone = document.getElementById('drop-zone');
    dropZone.classList.remove('border-blue-500', 'bg-blue-50');
    dropZone.classList.add('border-gray-300');

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        processFile(files[0]);
    }
}

function processFile(file) {
    // Validar tipo de archivo
    const validTypes = ['image/png', 'image/jpeg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
        showError('Tipo de archivo no soportado. Solo se permiten imágenes PNG, JPG o WEBP.');
        return;
    }

    // Validar tamaño (máximo 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        showError('El archivo es demasiado grande. Máximo permitido: 10MB.');
        return;
    }

    selectedFile = file;
    showFilePreview(file);
}

function showFilePreview(file) {
    const filePreview = document.getElementById('file-preview');
    const uploadPrompt = document.getElementById('upload-prompt');
    const previewImg = document.getElementById('preview-img');
    const fileName = document.getElementById('file-name');
    const fileSize = document.getElementById('file-size');

    // Crear URL del archivo
    const fileUrl = URL.createObjectURL(file);
    previewImg.src = fileUrl;
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);

    // Mostrar preview y ocultar prompt
    uploadPrompt.classList.add('hidden');
    filePreview.classList.remove('hidden');
    filePreview.classList.add('flex');
}

function removeFile() {
    selectedFile = null;
    const filePreview = document.getElementById('file-preview');
    const uploadPrompt = document.getElementById('upload-prompt');
    const previewImg = document.getElementById('preview-img');
    const fileInput = document.getElementById('file-input');

    // Limpiar preview
    URL.revokeObjectURL(previewImg.src);
    previewImg.src = '';
    fileInput.value = '';

    // Mostrar prompt y ocultar preview
    filePreview.classList.add('hidden');
    filePreview.classList.remove('flex');
    uploadPrompt.classList.remove('hidden');
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Análisis del informe
async function analyzeReport() {
    if (isAnalyzing) return;

    const additionalText = document.getElementById('lab-report-text').value.trim();
    
    if (!selectedFile && !additionalText) {
        showError('Por favor, seleccione un archivo o ingrese texto del informe.');
        return;
    }

    isAnalyzing = true;
    showLoading(true);
    hideError();

    try {
        let imageData = null;
        
        if (selectedFile) {
            imageData = await fileToBase64(selectedFile);
        }

        const analysis = await performGeminiAnalysis(imageData, additionalText, selectedFile?.type);
        displayReport(analysis);
        
    } catch (error) {
        console.error('Error en el análisis:', error);
        showError('Error al analizar el informe. Por favor, intente nuevamente.');
    } finally {
        isAnalyzing = false;
        showLoading(false);
    }
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function performGeminiAnalysis(imageData, additionalText, mimeType) {
    const prompt = `
Como experto en medicina y serología, analiza este informe de Hepatitis B y proporciona una interpretación completa en formato JSON con la siguiente estructura:

{
  "estadoSerologico": "Estado serológico principal",
  "interpretacion": "Interpretación detallada del estado serológico",
  "marcadoresDetectados": [
    {
      "marcador": "Nombre del marcador",
      "resultado": "Positivo/Negativo/Valor",
      "significado": "Significado clínico"
    }
  ],
  "recomendaciones": [
    "Lista de recomendaciones clínicas"
  ],
  "seguimiento": "Recomendaciones de seguimiento",
  "nivelRiesgo": "Bajo/Moderado/Alto",
  "alertas": [
    "Alertas importantes si las hay"
  ]
}

IMPORTANTE: 
- Analiza SOLO marcadores serológicos de Hepatitis B (HBsAg, HBsAb, HBcAb IgM, HBcAb IgG, HBeAg, HBeAb, DNA VHB)
- Proporciona interpretación médica precisa basada en guías clínicas actuales
- Incluye recomendaciones de seguimiento apropiadas
- Identifica el estado de infección: aguda, crónica, resuelta, vacunado, etc.
- Si no hay datos suficientes, indica la limitación

Texto del informe: ${additionalText || 'Analizar imagen únicamente'}
`;

    const requestBody = {
        contents: [{
            parts: []
        }]
    };

    // Agregar texto del prompt
    requestBody.contents[0].parts.push({
        text: prompt
    });

    // Agregar imagen si existe
    if (imageData && mimeType) {
        requestBody.contents[0].parts.push({
            inline_data: {
                mime_type: mimeType,
                data: imageData
            }
        });
    }

    // Configuración de generación
    requestBody.generationConfig = {
        temperature: 0.1,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    requestBody.safetySettings = [
        {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
    ];

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Error de API: ${response.status} - ${errorData.error?.message || 'Error desconocido'}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Respuesta inválida de la API');
    }

    const responseText = data.candidates[0].content.parts[0].text;
    
    try {
        // Extraer JSON de la respuesta
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('No se encontró JSON válido en la respuesta');
        }
        
        return JSON.parse(jsonMatch[0]);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        throw new Error('Error al procesar la respuesta de la IA');
    }
}

function displayReport(analysis) {
    const reportDisplay = document.getElementById('report-display');
    
    const reportHTML = `
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <!-- Header del Informe -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold mb-2">Informe Serológico VHB</h2>
                        <p class="text-blue-100">UMBRAMED Medical Division</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-blue-100">Fecha:</p>
                        <p class="font-semibold">${new Date().toLocaleDateString('es-ES')}</p>
                    </div>
                </div>
            </div>

            <!-- Estado Serológico Principal -->
            <div class="p-6 border-b border-gray-200">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Estado Serológico</h3>
                    <span class="px-4 py-2 rounded-full text-sm font-semibold ${getRiskBadgeClass(analysis.nivelRiesgo)}">
                        ${analysis.nivelRiesgo ? `Riesgo ${analysis.nivelRiesgo}` : 'Evaluación'}
                    </span>
                </div>
                <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <p class="text-lg font-semibold text-blue-800 mb-2">${analysis.estadoSerologico}</p>
                    <p class="text-gray-700">${analysis.interpretacion}</p>
                </div>
            </div>

            <!-- Marcadores Serológicos -->
            <div class="p-6 border-b border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">Marcadores Serológicos</h3>
                <div class="grid gap-3">
                    ${analysis.marcadoresDetectados?.map(marcador => `
                        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                            <div class="flex-1">
                                <p class="font-semibold text-gray-800">${marcador.marcador}</p>
                                <p class="text-sm text-gray-600">${marcador.significado}</p>
                            </div>
                            <div class="ml-4">
                                <span class="px-3 py-1 rounded-full text-sm font-medium ${getMarkerBadgeClass(marcador.resultado)}">
                                    ${marcador.resultado}
                                </span>
                            </div>
                        </div>
                    `).join('') || '<p class="text-gray-500 italic">No se detectaron marcadores específicos en el análisis.</p>'}
                </div>
            </div>

            <!-- Recomendaciones -->
            <div class="p-6 border-b border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">Recomendaciones Clínicas</h3>
                <div class="space-y-2">
                    ${analysis.recomendaciones?.map(rec => `
                        <div class="flex items-start">
                            <svg class="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <p class="text-gray-700">${rec}</p>
                        </div>
                    `).join('') || '<p class="text-gray-500 italic">No hay recomendaciones específicas disponibles.</p>'}
                </div>
            </div>

            <!-- Seguimiento -->
            ${analysis.seguimiento ? `
                <div class="p-6 border-b border-gray-200">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Seguimiento</h3>
                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                        <p class="text-gray-700">${analysis.seguimiento}</p>
                    </div>
                </div>
            ` : ''}

            <!-- Alertas -->
            ${analysis.alertas?.length ? `
                <div class="p-6 border-b border-gray-200">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Alertas Importantes</h3>
                    <div class="space-y-2">
                        ${analysis.alertas.map(alerta => `
                            <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                                <div class="flex items-start">
                                    <svg class="w-5 h-5 text-red-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                                    </svg>
                                    <p class="text-red-700 font-medium">${alerta}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Footer del Informe -->
            <div class="p-6 bg-gray-50">
                <div class="text-center text-sm text-gray-600">
                    <p class="mb-2">⚠️ <strong>AVISO MÉDICO IMPORTANTE:</strong></p>
                    <p class="mb-1">Este informe es generado por IA y debe ser validado por un profesional médico.</p>
                    <p class="mb-1">No sustituye el criterio clínico ni la evaluación médica profesional.</p>
                    <p class="text-xs text-gray-500 mt-4">
                        Generado por UMBRAMED Medical Division - Sistema de Interpretación Serológica VHB
                    </p>
                </div>
            </div>
        </div>

        <!-- Botones de Acción -->
        <div class="mt-6 flex flex-wrap gap-3 justify-center">
            <button onclick="printReport()" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                </svg>
                Imprimir Informe
            </button>
            <button onclick="newAnalysis()" class="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                Nuevo Análisis
            </button>
        </div>
    `;

    reportDisplay.innerHTML = reportHTML;
    reportDisplay.classList.remove('hidden');
    
    // Scroll suave al informe
    reportDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getRiskBadgeClass(riesgo) {
    switch(riesgo?.toLowerCase()) {
        case 'bajo':
            return 'bg-green-100 text-green-800';
        case 'moderado':
            return 'bg-yellow-100 text-yellow-800';
        case 'alto':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

function getMarkerBadgeClass(resultado) {
    const resultLower = resultado?.toLowerCase();
    if (resultLower?.includes('positivo') || resultLower?.includes('+')) {
        return 'bg-red-100 text-red-800';
    } else if (resultLower?.includes('negativo') || resultLower?.includes('-')) {
        return 'bg-green-100 text-green-800';
    } else {
        return 'bg-blue-100 text-blue-800';
    }
}

// Funciones de utilidad
function showLoading(show) {
    const loadingSpinner = document.getElementById('loading-spinner');
    const analyzeButton = document.getElementById('analyze-button');
    
    if (show) {
        loadingSpinner.classList.remove('hidden');
        analyzeButton.disabled = true;
        analyzeButton.innerHTML = `
            <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Analizando...
        `;
    } else {
        loadingSpinner.classList.add('hidden');
        analyzeButton.disabled = false;
        analyzeButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Analizar Informe
        `;
    }
}

function showError(message) {
    const errorDisplay = document.getElementById('error-display');
    const errorMessage = document.getElementById('error-message');
    
    errorMessage.textContent = message;
    errorDisplay.classList.remove('hidden');
    
    // Auto-hide después de 10 segundos
    setTimeout(() => {
        hideError();
    }, 10000);
}

function hideError() {
    const errorDisplay = document.getElementById('error-display');
    errorDisplay.classList.add('hidden');
}

// Funciones de acción del informe
function printReport() {
    window.print();
}

function newAnalysis() {
    // Limpiar archivo seleccionado
    if (selectedFile) {
        removeFile();
    }
    
    // Limpiar texto adicional
    document.getElementById('lab-report-text').value = '';
    
    // Ocultar informe
    const reportDisplay = document.getElementById('report-display');
    reportDisplay.classList.add('hidden');
    reportDisplay.innerHTML = '';
    
    // Scroll al inicio
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
}

// Log de inicialización
console.log('🦠 UMBRAMED - Interpretador Serológico VHB cargado correctamente');
console.log('🔑 API Gemini configurada y lista para uso');

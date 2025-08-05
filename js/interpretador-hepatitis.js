document.addEventListener('DOMContentLoaded', () => {
    const apiKeySection = document.getElementById('api-key-section');
    const mainContent = document.getElementById('main-content');
    const apiKeyInput = document.getElementById('api-key-input');
    const saveApiKeyButton = document.getElementById('save-api-key');

    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const uploadLink = document.getElementById('upload-link');
    const filePreview = document.getElementById('file-preview');
    const previewImg = document.getElementById('preview-img');
    const fileName = document.getElementById('file-name');
    const fileSize = document.getElementById('file-size');
    const removeFileButton = document.getElementById('remove-file');
    const uploadPrompt = document.getElementById('upload-prompt');

    const labReportText = document.getElementById('lab-report-text');
    const analyzeButton = document.getElementById('analyze-button');
    const loadingSpinner = document.getElementById('loading-spinner');
    const errorDisplay = document.getElementById('error-display');
    const errorMessage = document.getElementById('error-message');
    const reportDisplay = document.getElementById('report-display');

    let selectedFile = null;
    let apiKey = localStorage.getItem('gemini-api-key');

    const checkApiKey = () => {
        if (apiKey) {
            apiKeySection.classList.add('hidden');
            mainContent.classList.remove('hidden');
        } else {
            apiKeySection.classList.remove('hidden');
            mainContent.classList.add('hidden');
        }
    };

    saveApiKeyButton.addEventListener('click', () => {
        const key = apiKeyInput.value.trim();
        if (key) {
            localStorage.setItem('gemini-api-key', key);
            apiKey = key;
            checkApiKey();
        } else {
            showError('Por favor, introduce una clave API válida.');
        }
    });

    const showError = (message) => {
        errorMessage.textContent = message;
        errorDisplay.classList.remove('hidden');
    };

    const hideError = () => {
        errorDisplay.classList.add('hidden');
    };

    const updateButtonState = () => {
        analyzeButton.disabled = !selectedFile && labReportText.value.trim() === '';
    };

    const handleFileSelect = (file) => {
        if (!file) return;
        selectedFile = file;
        
        previewImg.src = URL.createObjectURL(file);
        fileName.textContent = file.name;
        fileSize.textContent = `${(file.size / 1024).toFixed(2)} KB`;
        
        uploadPrompt.classList.add('hidden');
        filePreview.classList.remove('hidden');
        filePreview.classList.add('flex');

        hideError();
        updateButtonState();
    };

    uploadLink.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => handleFileSelect(e.target.files[0]));

    removeFileButton.addEventListener('click', () => {
        selectedFile = null;
        fileInput.value = ''; // Reset file input
        
        uploadPrompt.classList.remove('hidden');
        filePreview.classList.add('hidden');
        filePreview.classList.remove('flex');
        
        updateButtonState();
    });

    // Drag and drop
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('border-blue-500', 'bg-blue-50');
    });
    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-blue-500', 'bg-blue-50');
    });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-blue-500', 'bg-blue-50');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    });

    labReportText.addEventListener('input', updateButtonState);

    analyzeButton.addEventListener('click', async () => {
        if (!apiKey) {
            showError('La clave API de Google AI no está configurada.');
            checkApiKey();
            return;
        }

        hideError();
        reportDisplay.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');
        analyzeButton.disabled = true;
        analyzeButton.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Analizando...`;

        try {
            const result = await analyzeLabReport(labReportText.value, selectedFile);
            displayReport(result);
        } catch (err) {
            console.error(err);
            showError(`Hubo un error al analizar el informe: ${err.message}. Asegúrate de que la clave de API sea correcta y tenga acceso a la API de Gemini.`);
        } finally {
            loadingSpinner.classList.add('hidden');
            analyzeButton.disabled = false;
            analyzeButton.innerHTML = 'Analizar Informe';
            updateButtonState();
        }
    });

    const fileToGenerativePart = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Data = reader.result.split(',')[1];
                resolve({
                    inlineData: {
                        data: base64Data,
                        mimeType: file.type,
                    },
                });
            };
            reader.onerror = (err) => reject(err);
            reader.readAsDataURL(file);
        });
    };

    const analyzeLabReport = async (text, file) => {
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        const systemInstruction = {
            parts: [{
                text: `Eres un asistente de hepatología experto en la interpretación de la serología de la Hepatitis B. Tu tarea es analizar un informe de laboratorio médico, que puede ser texto, una imagen o ambos. Debes realizar OCR si es una imagen. Identifica los marcadores de Hepatitis B y genera un informe estructurado y conciso para un profesional médico. Tu análisis debe basarse en las guías de práctica clínica internacionales más actuales (como las de la EASL y AASLD). La salida debe ser exclusivamente un objeto JSON que se adhiera al esquema proporcionado. No incluyas explicaciones adicionales fuera del formato JSON. Identifica los siguientes marcadores si están presentes: HBsAg, anti-HBs (o HBsAb), anti-HBc total (o HBcAb), anti-HBc IgM, HBeAg, anti-HBe (o HBeAb), y Carga Viral VHB (o ADN VHB). Proporciona una interpretación clara y recomendaciones prácticas.`
            }]
        };

        const contents = [{
            role: 'user',
            parts: []
        }];

        let userPrompt = "Por favor, analiza el siguiente informe de laboratorio y genera el informe de interpretación serológica de Hepatitis B en el formato JSON especificado.";
        if (file) {
            userPrompt += " El informe principal se encuentra en la imagen adjunta.";
        }
        if (text.trim()) {
            userPrompt += `\n\nTambién se ha proporcionado el siguiente texto:\n---\n${text.trim()}\n---`;
        }
        contents[0].parts.push({ text: userPrompt });

        if (file) {
            const imagePart = await fileToGenerativePart(file);
            contents[0].parts.push(imagePart);
        }
        
        const generationConfig = {
            response_mime_type: "application/json",
            temperature: 0.2,
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ contents, systemInstruction, generationConfig }),
        });

        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(errorBody.error.message || 'Error en la solicitud a la API');
        }

        const responseData = await response.json();
        const jsonText = responseData.candidates[0].content.parts[0].text;
        return JSON.parse(jsonText);
    };

    const displayReport = (report) => {
        const DISCLAIMER_TEXT = "Esta herramienta es un asistente basado en IA y no reemplaza el juicio clínico profesional. La interpretación y las recomendaciones generadas deben ser verificadas por un médico cualificado. El profesional sanitario es el único responsable de todas las decisiones clínicas.";

        const markersTable = report.detectedMarkers.map(m => `
            <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${m.marker}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${m.value}</td>
                <td class="px-6 py-4 text-sm text-gray-500">${m.interpretation}</td>
            </tr>
        `).join('');

        const recommendationsList = report.recommendations.map(r => `<li>${r}</li>`).join('');

        reportDisplay.innerHTML = `
            <div class="mb-6 flex justify-end items-center gap-x-3">
                <button id="copy-report" class="flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    Copiar Informe
                </button>
                <button id="print-report" class="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    Imprimir
                </button>
            </div>
            <div id="report-content">
                <h2 class="text-2xl font-extrabold text-gray-900 mb-2 text-center">Informe de Análisis Serológico</h2>
                <p class="text-center text-gray-600 mb-6">Generado por IA con base en guías clínicas actuales.</p>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div class="flex items-center mb-4"><h3 class="text-xl font-bold text-gray-800">Estado Serológico</h3></div>
                    <p class="text-2xl font-bold text-blue-700">${report.serologicalStatus}</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div class="flex items-center mb-4"><h3 class="text-xl font-bold text-gray-800">Resumen Clínico</h3></div>
                    <p>${report.summary}</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div class="flex items-center mb-4"><h3 class="text-xl font-bold text-gray-800">Marcadores Detectados</h3></div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marcador</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resultado</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interpretación</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">${markersTable}</tbody>
                        </table>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div class="flex items-center mb-4"><h3 class="text-xl font-bold text-gray-800">Interpretación Detallada</h3></div>
                    <p>${report.interpretation}</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div class="flex items-center mb-4"><h3 class="text-xl font-bold text-gray-800">Recomendaciones</h3></div>
                    <ul class="list-disc pl-5 space-y-2">${recommendationsList}</ul>
                </div>

                <div class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                    <p class="text-sm text-yellow-800">${DISCLAIMER_TEXT}</p>
                </div>
            </div>
        `;
        reportDisplay.classList.remove('hidden');

        document.getElementById('print-report').addEventListener('click', () => window.print());
        document.getElementById('copy-report').addEventListener('click', (e) => {
            const button = e.currentTarget;
            const markersText = report.detectedMarkers.map(m => `- ${m.marker}: ${m.value} (${m.interpretation})`).join('\n');
            const textToCopy = `
INFORME DE ANÁLISIS SEROLÓGICO DE HEPATITIS B
-------------------------------------------------
ESTADO SEROLÓGICO: ${report.serologicalStatus}
RESUMEN CLÍNICO: ${report.summary}
INTERPRETACIÓN DETALLADA: ${report.interpretation}
RECOMENDACIONES:\n- ${report.recommendations.join('\n- ')}
MARCADORES DETECTADOS:\n${markersText}
-------------------------------------------------
${DISCLAIMER_TEXT}
            `.trim();

            navigator.clipboard.writeText(textToCopy).then(() => {
                button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ¡Copiado!`;
                setTimeout(() => {
                    button.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    Copiar Informe`;
                }, 2500);
            });
        });
    };

    // Initial check
    checkApiKey();
    updateButtonState();
});

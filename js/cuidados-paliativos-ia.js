document.addEventListener('DOMContentLoaded', () => {
    // State
    let selectedDrugs = [];
    let view = 'home'; // 'home', 'physician', 'family'

    // Drug Data
    const ALL_DRUGS = [
        { id: 1, name: 'Morfina' },
        { id: 2, name: 'Midazolam' },
        { id: 3, name: 'Haloperidol' },
        { id: 4, name: 'Levomepromazina' },
        { id: 5, name: 'Butilescopolamina' },
        { id: 6, name: 'Metoclopramida' },
        { id: 7, name: 'Dexametasona' },
        { id: 8, name: 'Fentanilo' },
        { id: 9, name: 'Ketamina' },
        { id: 10, name: 'Ondansetrón' }
    ];

    // DOM Elements
    const homeView = document.getElementById('home-view');
    const physicianView = document.getElementById('physician-view');
    const familyView = document.getElementById('family-view');
    const physicianRoleCard = document.getElementById('physician-role-card');
    const familyRoleCard = document.getElementById('family-role-card');
    const backButtons = document.querySelectorAll('.back-button');
    
    // Physician View Elements
    const drugSelect = document.getElementById('drug-select');
    const addDrugBtn = document.getElementById('add-drug-btn');
    const selectedDrugsList = document.getElementById('selected-drugs-list');
    const noDrugsMessage = document.getElementById('no-drugs-message');
    const interactionWarning = document.getElementById('interaction-warning');
    const interactionWarningText = document.getElementById('interaction-warning-text');
    const generateProtocolBtn = document.getElementById('generate-protocol-btn');
    const protocolErrorMessage = document.getElementById('protocol-error-message');
    const protocolSpinner = document.getElementById('protocol-spinner');
    const protocolOutput = document.getElementById('protocol-output');
    const protocolContent = document.getElementById('protocol-content');

    // Family View Elements
    const generateLetterBtn = document.getElementById('generate-letter-btn');
        // ================= Configuración IA =================
        const AI_ENDPOINT = window.UMBRA_AI_ENDPOINT || document.querySelector('meta[name="ai-endpoint"]')?.content || null;
        const AI_TIMEOUT_MS = 45000;

        // Sanitización básica (permitidos: p, h1-h4, ul, ol, li, em, strong, br)
        const sanitizeHTML = (raw) => {
            if (!raw) return '';
            // eliminar scripts/iframes/style/event handlers
            let cleaned = raw
                .replace(/<\s*script[^>]*>.*?<\s*\/script>/gis, '')
                .replace(/<\s*style[^>]*>.*?<\s*\/style>/gis, '')
                .replace(/<\s*iframe[^>]*>.*?<\s*\/iframe>/gis, '')
                .replace(/on[a-zA-Z]+\s*=\s*"[^"]*"/g, '')
                .replace(/on[a-zA-Z]+\s*=\s*'[^']*'/g, '')
                .replace(/javascript:/gi, '');
            // eliminar tags no permitidos conservando texto
            cleaned = cleaned.replace(/<(?!\/?(?:p|h1|h2|h3|h4|ul|ol|li|em|strong|br)\b)[^>]*>/gi, '');
            return cleaned;
        };

        const callAI = async ({ prompt, purpose }) => {
            if (!AI_ENDPOINT) {
                throw new Error('NO_ENDPOINT_CONFIGURED');
            }
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);
            try {
                const res = await fetch(AI_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt, purpose }),
                    signal: controller.signal
                });
                if (!res.ok) {
                    throw new Error(`AI_HTTP_${res.status}`);
                }
                const data = await res.json();
                if (!data || typeof data.content !== 'string') {
                    throw new Error('AI_INVALID_RESPONSE');
                }
                return sanitizeHTML(data.content);
            } finally {
                clearTimeout(timeout);
            }
        };

        const buildProtocolPrompt = (drugNames) => `Genera una GUÍA CLÍNICA estructurada en HTML SIMPLE para la PREPARACIÓN y DOSIFICACIÓN de una perfusión subcutánea continua que incluye exactamente estos fármacos: ${drugNames.join(', ')}. Incluir secciones claras con encabezados h3: 1) Preparación (diluyente, volumen estándar, orden de carga si relevante) 2) Compatibilidad general 3) Dosis orientativas iniciales (expresar rangos razonables por 24h; si un fármaco requiere titulación individual indícalo) 4) Recomendaciones de titulación y monitorización 5) Estabilidad y consideraciones de mezcla 6) Advertencias y necesidad de individualización. Responder solo con HTML permitido (p, h3, ul, li, strong, em, br). Español.`;

        const buildFamilyLetterPrompt = () => `Redacta una CARTA DE APOYO (tono empático y profesional) para familiares y cuidadores de un paciente en fase terminal. Estructura en HTML simple con h2/h3 y listas. Secciones: Comprender síntomas frecuentes (apetito, sueño, respiración, confusión), Apoyo emocional y comunicación, Manejo práctico básico, Autocuidado del cuidador, Cuándo contactar con el equipo sanitario (signos de alarma), Mensaje final de agradecimiento y dignidad. No incluir recomendaciones médicas invasivas ni promesas irreales. Solo HTML permitido (p, h2, h3, ul, li, strong, em, br). Español.`;

        const generateDosingProtocol = async (drugNames) => {
            const prompt = buildProtocolPrompt(drugNames);
            return await callAI({ prompt, purpose: 'protocol' });
        };

        const generateFamilyAdvice = async () => {
            const prompt = buildFamilyLetterPrompt();
            return await callAI({ prompt, purpose: 'family_letter' });
        };
    const generateLetterContainer = document.getElementById('generate-letter-container');
    const letterSpinner = document.getElementById('letter-spinner');
    const letterOutput = document.getElementById('letter-output');
    const letterContent = document.getElementById('letter-content');
    const printLetterBtn = document.getElementById('print-letter-btn');

    // Functions
    const updateView = () => {
        homeView.classList.add('hidden');
        physicianView.classList.add('hidden');
        familyView.classList.add('hidden');

        if (view === 'home') homeView.classList.remove('hidden');
        if (view === 'physician') physicianView.classList.remove('hidden');
        if (view === 'family') familyView.classList.remove('hidden');
    };

    const populateDrugSelect = () => {
        const availableDrugs = ALL_DRUGS.filter(d => !selectedDrugs.some(sd => sd.id === d.id));
        drugSelect.innerHTML = '<option value="">Seleccione un fármaco...</option>';
        availableDrugs.forEach(drug => {
            const option = document.createElement('option');
            option.value = drug.id;
            option.textContent = drug.name;
            drugSelect.appendChild(option);
        });
    };

    const renderSelectedDrugs = () => {
        selectedDrugsList.innerHTML = '';
        if (selectedDrugs.length > 0) {
            noDrugsMessage.classList.add('hidden');
            selectedDrugs.forEach(drug => {
                const li = document.createElement('li');
                li.className = 'selected-drug-item';
                li.innerHTML = `
                    <span>${drug.name}</span>
                    <button data-id="${drug.id}" class="remove-drug-btn"><i class="fas fa-trash"></i></button>
                `;
                selectedDrugsList.appendChild(li);
            });
        } else {
            noDrugsMessage.classList.remove('hidden');
        }
    };

    const checkForInteraction = () => {
        let warning = '';
        for (let i = 0; i < selectedDrugs.length; i++) {
            for (let j = i + 1; j < selectedDrugs.length; j++) {
                const drugA = selectedDrugs[i].name;
                const drugB = selectedDrugs[j].name;

                if (PRECIPITATE_INTERACTIONS[drugA]?.includes(drugB) || PRECIPITATE_INTERACTIONS[drugB]?.includes(drugA)) {
                    warning = `¡Atención! Se ha detectado una interacción con riesgo de precipitación entre ${drugA} y ${drugB}.`;
                    break;
                }
            }
            if (warning) break;
        }

        if (warning) {
            interactionWarningText.textContent = warning;
            interactionWarning.classList.remove('hidden');
            generateProtocolBtn.disabled = true;
            protocolErrorMessage.classList.remove('hidden');
        } else {
            interactionWarning.classList.add('hidden');
            generateProtocolBtn.disabled = selectedDrugs.length === 0;
            protocolErrorMessage.classList.add('hidden');
        }
    };

    const handleAddDrug = () => {
        const drugId = parseInt(drugSelect.value);
        if (!drugId) return;

        const drugToAdd = ALL_DRUGS.find(d => d.id === drugId);
        if (drugToAdd) {
            selectedDrugs.push(drugToAdd);
            populateDrugSelect();
            renderSelectedDrugs();
            checkForInteraction();
            drugSelect.value = '';
        }
    };

    const handleRemoveDrug = (drugId) => {
        selectedDrugs = selectedDrugs.filter(d => d.id !== drugId);
        populateDrugSelect();
        renderSelectedDrugs();
        checkForInteraction();
    };

    const handleGenerateProtocol = async () => {
        if (selectedDrugs.length === 0) return;
        protocolSpinner.classList.remove('hidden');
        protocolOutput.classList.add('hidden');
        protocolContent.innerHTML = '';
        generateProtocolBtn.disabled = true;
        generateProtocolBtn.textContent = 'Generando…';
        const drugNames = selectedDrugs.map(d => d.name);
        try {
            const protocol = await generateDosingProtocol(drugNames);
            protocolContent.innerHTML = protocol;
            protocolOutput.classList.remove('hidden');
        } catch (err) {
            let msg;
            if (err.message === 'NO_ENDPOINT_CONFIGURED') {
                msg = '<p><strong>Configuración requerida:</strong> No se ha definido un endpoint de IA. Defina window.UMBRA_AI_ENDPOINT o meta name="ai-endpoint".</p>';
            } else if (err.name === 'AbortError') {
                msg = '<p><strong>Tiempo excedido:</strong> El servicio de IA no respondió a tiempo. Intente de nuevo.</p>';
            } else {
                msg = '<p><strong>Error:</strong> No se pudo generar la guía. Reintente más tarde.</p>';
            }
            protocolContent.innerHTML = msg;
            protocolOutput.classList.remove('hidden');
        } finally {
            protocolSpinner.classList.add('hidden');
            generateProtocolBtn.disabled = false;
            generateProtocolBtn.textContent = 'Generar Guía de Preparación y Dosificación';
        }
    };

    const handleGenerateLetter = async () => {
        generateLetterContainer.classList.add('hidden');
        letterSpinner.classList.remove('hidden');
        letterOutput.classList.add('hidden');
        letterContent.innerHTML = '';
        try {
            const advice = await generateFamilyAdvice();
            letterContent.innerHTML = advice;
        } catch (err) {
            let msg;
            if (err.message === 'NO_ENDPOINT_CONFIGURED') {
                msg = '<p><strong>Configuración requerida:</strong> Falta endpoint IA. Añada window.UMBRA_AI_ENDPOINT o meta name="ai-endpoint".</p>';
            } else if (err.name === 'AbortError') {
                msg = '<p><strong>Tiempo excedido:</strong> El servicio tardó demasiado.</p>';
            } else {
                msg = '<p><strong>Error:</strong> No se pudo generar la carta. Intente más tarde.</p>';
            }
            letterContent.innerHTML = msg;
        } finally {
            letterSpinner.classList.add('hidden');
            letterOutput.classList.remove('hidden');
        }
    };

    const handlePrintLetter = () => {
        const contentToPrint = letterContent.innerHTML;
        const printWindow = window.open('', '', 'height=800,width=800');
        if (!printWindow) {
            alert("El bloqueo de ventanas emergentes puede estar impidiendo la impresión. Por favor, permítalas para este sitio.");
            return;
        }
        printWindow.document.write('<html><head><title>Carta para Familiares y Cuidadores</title>');
        printWindow.document.write('<style>body { font-family: sans-serif; padding: 2rem; } h1 { font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; } ul { padding-left: 20px; } </style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(contentToPrint);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        setTimeout(() => {
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }, 750);
    };

    // Event Listeners
    physicianRoleCard.addEventListener('click', () => {
        view = 'physician';
        updateView();
    });

    familyRoleCard.addEventListener('click', () => {
        view = 'family';
        updateView();
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            view = 'home';
            updateView();
        });
    });

    addDrugBtn.addEventListener('click', handleAddDrug);

    selectedDrugsList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-drug-btn');
        if (removeBtn) {
            const drugId = parseInt(removeBtn.dataset.id);
            handleRemoveDrug(drugId);
        }
    });

    generateProtocolBtn.addEventListener('click', handleGenerateProtocol);
    generateLetterBtn.addEventListener('click', handleGenerateLetter);
    printLetterBtn.addEventListener('click', handlePrintLetter);

    // Initial Setup
    populateDrugSelect();
    updateView();
});

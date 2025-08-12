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

    const PRECIPITATE_INTERACTIONS = {
        'Dexametasona': ['Midazolam', 'Haloperidol', 'Levomepromazina', 'Ondansetrón'],
        'Midazolam': ['Dexametasona'],
        'Haloperidol': ['Dexametasona'],
        'Levomepromazina': ['Dexametasona'],
        'Ondansetrón': ['Dexametasona'],
        'Metoclopramida': ['Fentanilo'],
        'Fentanilo': ['Metoclopramida'],
    };

    // Mock Services
    const generateDosingProtocol = (drugNames) => {
        return new Promise(resolve => {
            setTimeout(() => {
                const protocol = `
                    <h3>Protocolo de Dosificación para: ${drugNames.join(', ')}</h3>
                    <p><strong>1. Preparación de la perfusión:</strong></p>
                    <ul>
                        <li>Utilizar suero salino fisiológico (SSF) como diluyente principal.</li>
                        <li>Cargar los fármacos en la misma jeringa, comprobando la compatibilidad.</li>
                        <li>Aforar hasta un volumen final de 20 ml con SSF.</li>
                    </ul>
                    <p><strong>2. Pauta de administración:</strong></p>
                    <ul>
                        <li>Administrar por vía subcutánea (SC) continua mediante infusor elastomérico.</li>
                        <li>Velocidad de infusión: 0.8 ml/hora para una duración de 24 horas.</li>
                    </ul>
                    <p><strong>3. Dosis sugeridas (ajustar según respuesta clínica):</strong></p>
                    <ul>
                        ${drugNames.map(name => `<li><strong>${name}:</strong> Iniciar con 10-20 mg/24h.</li>`).join('')}
                    </ul>
                    <p><em><strong>Nota:</strong> Esta es una guía general. Las dosis y pautas deben ser individualizadas por el médico prescriptor según la situación clínica del paciente.</em></p>
                `;
                resolve(protocol);
            }, 1500);
        });
    };

    const generateFamilyAdvice = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                const advice = `
                    <h1>Carta de Apoyo para la Familia y Cuidadores</h1>
                    <p>Querida familia, querido cuidador,</p>
                    <p>Sabemos que este es un momento increíblemente difícil. Acompañar a un ser querido en el final de su vida es un acto de profundo amor y generosidad. Esta guía busca ofrecerle un poco de luz y apoyo práctico en este camino.</p>
                    
                    <h2>Comprender los Síntomas Comunes</h2>
                    <ul>
                        <li><strong>Disminución del apetito:</strong> Es normal. No fuerce la comida. Ofrezca pequeños sorbos de líquido o trocitos de hielo para mantener la boca húmeda.</li>
                        <li><strong>Somnolencia y confusión:</strong> Su ser querido puede dormir más o parecer desorientado. Hable con calma y claridad, recuérdele quién es usted y dónde está.</li>
                        <li><strong>Cambios en la respiración:</strong> Puede haber pausas o ruidos. Elevar la cabecera de la cama puede ayudar.</li>
                    </ul>

                    <h2>El Cuidado Emocional y Espiritual</h2>
                    <ul>
                        <li><strong>Su presencia es el mejor regalo:</strong> Simplemente estar ahí, en silencio, sosteniendo una mano, tiene un valor inmenso.</li>
                        <li><strong>Hable desde el corazón:</strong> Comparta recuerdos, dé las gracias, pida perdón, diga "te quiero". Nunca es tarde para estas palabras.</li>
                        <li><strong>Música y ambiente:</strong> Una música suave o el sonido de la naturaleza pueden crear un entorno tranquilo.</li>
                    </ul>

                    <h2>Cuídese Usted También</h2>
                    <p>No puede cuidar si no se cuida. Permítase descansar, pida ayuda a otros familiares o amigos, y no dude en hablar de sus sentimientos con el equipo de paliativos. Su bienestar es fundamental.</p>
                    <p>Con nuestro más profundo respeto y apoyo,<br>El equipo de umbramed.org</p>
                `;
                resolve(advice);
            }, 1500);
        });
    };

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
        generateProtocolBtn.disabled = true;

        const drugNames = selectedDrugs.map(d => d.name);
        const protocol = await generateDosingProtocol(drugNames);
        
        protocolContent.innerHTML = protocol;
        protocolSpinner.classList.add('hidden');
        protocolOutput.classList.remove('hidden');
        generateProtocolBtn.disabled = false;
    };

    const handleGenerateLetter = async () => {
        generateLetterContainer.classList.add('hidden');
        letterSpinner.classList.remove('hidden');
        letterOutput.classList.add('hidden');

        const advice = await generateFamilyAdvice();

        letterContent.innerHTML = advice;
        letterSpinner.classList.add('hidden');
        letterOutput.classList.remove('hidden');
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

// Guía de Cuidados Paliativos - JavaScript Principal

class CuidadosPaliativos {
    constructor() {
        this.currentView = 'home';
        this.selectedDrugs = [];
        this.interactionWarning = '';
        this.isLoadingProtocol = false;
        this.isLoadingLetter = false;
        this.protocol = '';
        this.letterContent = '';
        this.apiKey = null;
        
        // Base de datos simplificada de medicamentos de cuidados paliativos
        this.ALL_DRUGS = [
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
        
        // Matriz de interacciones simplificada
        this.PRECIPITATE_INTERACTIONS = {
            'Dexametasona': ['Midazolam', 'Haloperidol', 'Levomepromazina', 'Ondansetrón'],
            'Midazolam': ['Dexametasona'],
            'Haloperidol': ['Dexametasona'],
            'Levomepromazina': ['Dexametasona'],
            'Ondansetrón': ['Dexametasona'],
            'Metoclopramida': ['Fentanilo'],
            'Fentanilo': ['Metoclopramida']
        };
    }
    
    static init() {
        const instance = new CuidadosPaliativos();
        instance.render();
        window.cuidadosPaliativos = instance;
    }
    
    render() {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = `
            <div class="palliative-container">
                ${this.renderCurrentView()}
            </div>
        `;
    }
    
    renderCurrentView() {
        switch (this.currentView) {
            case 'physician':
                return this.renderPhysicianView();
            case 'family':
                return this.renderFamilyView();
            default:
                return this.renderHomeView();
        }
    }
    
    renderHomeView() {
        return `
            <div class="text-center">
                <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
                    Guía de Cuidados Paliativos
                </h1>
                <p style="color: var(--text-light); font-size: 1.1rem; margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                    Herramienta de apoyo para médicos y familiares de pacientes en cuidados paliativos. 
                    Seleccione su rol para acceder a las herramientas y recursos personalizados.
                </p>
                <div class="role-cards-grid" style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                    ${this.renderRoleCard(
                        '🩺',
                        'Soy Médico',
                        'Acceda al verificador de interacciones en perfusiones y a guías de dosificación.',
                        'physician'
                    )}
                    ${this.renderRoleCard(
                        '👥',
                        'Soy Familiar o Cuidador',
                        'Encuentre consejos prácticos y apoyo emocional para acompañar a su ser querido.',
                        'family'
                    )}
                </div>
            </div>
        `;
    }
    
    renderRoleCard(icon, title, description, viewType) {
        return `
            <div class="role-card" onclick="cuidadosPaliativos.setView('${viewType}')" style="max-width: 300px;">
                <div class="icon">${icon}</div>
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        `;
    }
    
    renderPhysicianView() {
        return `
            <div style="max-width: 800px; margin: 0 auto;">
                <button class="back-button" onclick="cuidadosPaliativos.setView('home')">
                    ← Volver a la selección de rol
                </button>
                <div class="view-container">
                    <h2 style="color: var(--accent-black); font-size: 1.75rem; font-weight: 700; margin-bottom: 0.5rem;">
                        Herramientas para Médicos
                    </h2>
                    <p style="color: var(--text-light); margin-bottom: 2rem;">
                        Utilice el verificador de compatibilidad para perfusiones subcutáneas y genere guías de preparación.
                    </p>
                    ${this.renderDrugInteractionChecker()}
                </div>
            </div>
        `;
    }
    
    renderFamilyView() {
        return `
            <div style="max-width: 800px; margin: 0 auto;">
                <button class="back-button" onclick="cuidadosPaliativos.setView('home')">
                    ← Volver a la selección de rol
                </button>
                <div class="view-container">
                    <div style="display: flex; align-items: flex-start; margin-bottom: 1.5rem;">
                        <div style="font-size: 2rem; margin-right: 1rem; color: var(--primary-red);">📖</div>
                        <div>
                            <h2 style="color: var(--accent-black); font-size: 1.75rem; font-weight: 700; margin-bottom: 0.5rem;">
                                Carta de Apoyo para la Familia
                            </h2>
                            <p style="color: var(--text-light);">
                                Una guía unificada con consejos para comprender y acompañar en el proceso final de la vida.
                            </p>
                        </div>
                    </div>
                    ${this.renderFamilyContent()}
                </div>
            </div>
        `;
    }
    
    renderDrugInteractionChecker() {
        const availableDrugs = this.ALL_DRUGS.filter(drug => 
            !this.selectedDrugs.some(selected => selected.id === drug.id)
        );
        
        return `
            <div style="margin-bottom: 2rem;">
                <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                    Añadir Fármaco a la Perfusión
                </label>
                <div class="add-drug-container">
                    <select id="drugSelect" class="form-select">
                        <option value="">Seleccione un fármaco...</option>
                        ${availableDrugs.map(drug => 
                            `<option value="${drug.id}">${drug.name}</option>`
                        ).join('')}
                    </select>
                    <button class="icon-button" onclick="cuidadosPaliativos.addDrug()" ${availableDrugs.length === 0 ? 'disabled' : ''}>
                        ➕
                    </button>
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="font-weight: 600; color: var(--text-dark); margin-bottom: 1rem;">
                    Fármacos en la Perfusión:
                </h4>
                ${this.selectedDrugs.length > 0 ? 
                    this.selectedDrugs.map(drug => `
                        <div class="drug-list-item">
                            <span style="color: var(--text-dark);">${drug.name}</span>
                            <button class="remove-drug" onclick="cuidadosPaliativos.removeDrug(${drug.id})" title="Eliminar">
                                🗑️
                            </button>
                        </div>
                    `).join('') :
                    '<p style="color: var(--text-light); font-style: italic;">Añada fármacos para comenzar.</p>'
                }
            </div>
            
            ${this.interactionWarning ? `
                <div class="warning-alert">
                    <div style="display: flex; align-items: flex-start;">
                        <div style="font-size: 1.25rem; margin-right: 0.75rem;">⚠️</div>
                        <div>
                            <div class="warning-title">Alerta de Interacción</div>
                            <div class="warning-text">${this.interactionWarning}</div>
                        </div>
                    </div>
                </div>
            ` : ''}
            
            <div style="margin-bottom: 2rem;">
                <button class="primary-button" 
                        onclick="cuidadosPaliativos.generateProtocol()"
                        style="width: 100%; padding: 1rem;"
                        ${this.selectedDrugs.length === 0 || this.isLoadingProtocol || this.interactionWarning ? 'disabled' : ''}>
                    ${this.isLoadingProtocol ? 
                        '<div class="loading-spinner small" style="margin: 0 auto;"></div>' :
                        'Generar Guía de Preparación y Dosificación'
                    }
                </button>
                ${this.interactionWarning ? 
                    '<p style="text-align: center; color: var(--warning-red); font-size: 0.875rem; margin-top: 0.5rem;">Corrija las interacciones antes de generar la guía.</p>' :
                    ''
                }
            </div>
            
            ${this.protocol ? `
                <div class="protocol-output">
                    <h3>Guía de Preparación Sugerida</h3>
                    <div class="letter-content" style="white-space: pre-line;">${this.protocol}</div>
                </div>
            ` : ''}
        `;
    }
    
    renderFamilyContent() {
        if (!this.letterContent && !this.isLoadingLetter) {
            return `
                <div style="text-align: center; padding: 2rem 0;">
                    <p style="margin-bottom: 2rem; color: var(--text-dark);">
                        Haga clic en el botón para generar una carta con información y apoyo práctico.
                    </p>
                    <button class="primary-button" onclick="cuidadosPaliativos.generateLetter()">
                        Generar Carta
                    </button>
                </div>
            `;
        }
        
        if (this.isLoadingLetter) {
            return `
                <div style="text-align: center; padding: 3rem 0;">
                    <div class="loading-spinner"></div>
                    <p style="margin-top: 1rem; color: var(--text-light);">Generando carta personalizada...</p>
                </div>
            `;
        }
        
        return `
            <div id="letterContent" class="letter-content" style="margin-bottom: 2rem;">
                ${this.letterContent}
            </div>
            <div style="text-align: right;">
                <button class="secondary-button" onclick="cuidadosPaliativos.printLetter()">
                    🖨️ Imprimir Carta
                </button>
            </div>
        `;
    }
    
    setView(viewName) {
        this.currentView = viewName;
        this.render();
    }
    
    addDrug() {
        const selectElement = document.getElementById('drugSelect');
        const drugId = parseInt(selectElement.value);
        
        if (!drugId) return;
        
        // Validar número máximo de medicamentos
        const config = window.CuidadosConfig || {};
        const maxDrugs = config.validation?.maxDrugs || 6;
        
        if (this.selectedDrugs.length >= maxDrugs) {
            alert(`No se pueden añadir más de ${maxDrugs} medicamentos en una perfusión.`);
            return;
        }
        
        const drugToAdd = this.ALL_DRUGS.find(drug => drug.id === drugId);
        if (drugToAdd && !this.selectedDrugs.some(drug => drug.id === drugToAdd.id)) {
            this.selectedDrugs.push(drugToAdd);
            this.checkForInteraction();
            this.protocol = ''; // Reset protocol when drugs change
            this.render();
        }
    }
    
    removeDrug(drugId) {
        this.selectedDrugs = this.selectedDrugs.filter(drug => drug.id !== drugId);
        this.checkForInteraction();
        this.protocol = ''; // Reset protocol when drugs change
        this.render();
    }
    
    checkForInteraction() {
        this.interactionWarning = '';
        
        for (let i = 0; i < this.selectedDrugs.length; i++) {
            for (let j = i + 1; j < this.selectedDrugs.length; j++) {
                const drugA = this.selectedDrugs[i].name;
                const drugB = this.selectedDrugs[j].name;
                
                if (this.PRECIPITATE_INTERACTIONS[drugA]?.includes(drugB) || 
                    this.PRECIPITATE_INTERACTIONS[drugB]?.includes(drugA)) {
                    this.interactionWarning = `¡Atención! Se ha detectado una interacción con riesgo de precipitación entre ${drugA} y ${drugB}.`;
                    return;
                }
            }
        }
    }
    
    async generateProtocol() {
        if (this.selectedDrugs.length === 0) return;
        
        this.isLoadingProtocol = true;
        this.protocol = '';
        this.render();
        
        const drugNames = this.selectedDrugs.map(drug => drug.name);
        
        try {
            const result = await this.callGeminiAPI('protocol', drugNames);
            this.protocol = result;
        } catch (error) {
            console.error('Error generating protocol:', error);
            this.protocol = 'Hubo un error al generar el protocolo. Por favor, inténtelo de nuevo.';
        } finally {
            this.isLoadingProtocol = false;
            this.render();
        }
    }
    
    async generateLetter() {
        this.isLoadingLetter = true;
        this.letterContent = '';
        this.render();
        
        try {
            const result = await this.callGeminiAPI('letter');
            this.letterContent = result;
        } catch (error) {
            console.error('Error generating letter:', error);
            this.letterContent = 'Hubo un error al generar la carta. Por favor, inténtelo de nuevo.';
        } finally {
            this.isLoadingLetter = false;
            this.render();
        }
    }
    
    async callGeminiAPI(type, drugs = null) {
        // Esta función simula la llamada a la API de Gemini
        // En un entorno real, necesitarías configurar la API key y hacer la llamada real
        
        const apiKey = await this.getApiKey();
        if (!apiKey) {
            throw new Error('API Key no configurada');
        }
        
        let prompt = '';
        
        if (type === 'protocol') {
            const drugList = drugs.join(', ');
            prompt = `
            Actúa como un farmacólogo experto en cuidados paliativos. Un médico está preparando una perfusión subcutánea continua para un paciente terminal para manejar los síntomas al final de la vida. La perfusión contiene los siguientes fármacos: ${drugList}.

            Proporciona una guía detallada y paso a paso para preparar esta perfusión. La guía debe ser práctica y segura. Incluye:
            1.  Diluyente recomendado (ej. suero salino fisiológico).
            2.  Cálculos de concentración para un período de 24 horas en un infusor de 20-30ml.
            3.  Orden de mezcla recomendado para minimizar interacciones.
            4.  Consideraciones especiales para la mezcla de estos fármacos específicos.
            5.  Signos a vigilar en el paciente tras iniciar la perfusión.

            El objetivo principal es asegurar que el paciente permanezca confortable, sin dolor ni angustia. El tono debe ser profesional, claro y de apoyo para el médico.
            `;
        } else if (type === 'letter') {
            prompt = `
            Escribe una carta unificada dirigida a los familiares y cuidadores de un ser querido que se encuentra en la etapa final de su vida. El propósito de esta carta es brindar consuelo, información y guía práctica en un solo documento, fácil de leer y entender.

            La carta debe comenzar con el título: "Consejos para familiares y cuidadores"

            A continuación, desarrolla los siguientes temas de forma integrada y fluida, como si fuera una conversación cálida:
            1.  **Comprensión del Proceso:** Explica de manera general y empática que muchos de los cambios que observan (como dormir más, comer menos o cambios en la respiración) son parte del proceso natural del cuerpo al prepararse para descansar.
            2.  **Pérdida de Apetito y Sed:** Aconseja no forzar la comida ni la bebida. Sugiere alternativas para mostrar cuidado, como humedecer los labios, ofrecer pequeños sorbos de agua si la persona lo desea, y explica que la compañía es más importante que la comida en estos momentos.
            3.  **Aumento del Sueño y Cambios en la Conciencia:** Explica que es normal que duerman más o que parezcan confusos. Anima a la familia a hablarle con suavidad, a poner música tranquila y a simplemente estar presentes.
            4.  **Cuidados Prácticos y Confort:** Ofrece consejos concretos que les permitan sentirse útiles y brindar alivio, como:
                *   **Cuidado de la boca:** Cómo mantenerla limpia y húmeda para mayor comodidad.
                *   **Cuidado de la piel:** Sugerencias sencillas para prevenir escaras, como cambiar de postura suavemente.
                *   **Entorno:** La importancia de un ambiente tranquilo, con luz suave y sin ruidos fuertes.
            5.  **Comunicación y Apoyo Emocional:** Recuérdales que su presencia es el regalo más valioso. Anímales a compartir recuerdos, a tomarse de la mano, y a permitirse sentir y expresar sus emociones.
            6.  **Cambios en la Respiración:** Describe los posibles cambios en el patrón respiratorio de forma tranquilizadora, explicando que usualmente no causan angustia al paciente, para que la familia no se alarme.

            Usa un tono cercano y de apoyo, evitando la jerga médica. Estructura la carta para que sea fácil de seguir.

            Cierra la carta con la frase de apoyo "Con afecto y apoyo". No añadas ninguna firma como "Tu nombre" o "El equipo de cuidados" después.
            `;
        }
        
        try {
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' + apiKey, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });
            
            if (!response.ok) {
                if (response.status === 400) {
                    throw new Error('API Key inválida o solicitud malformada');
                } else if (response.status === 403) {
                    throw new Error('API Key sin permisos o cuota excedida');
                } else if (response.status === 429) {
                    throw new Error('Demasiadas solicitudes. Intente nuevamente en unos minutos');
                } else {
                    throw new Error(`Error del servidor: ${response.status}`);
                }
            }
            
            const data = await response.json();
            
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Respuesta inválida de la API');
            }
            
            return data.candidates[0].content.parts[0].text;
            
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            
            // Proporcionar mensajes de error más específicos
            const config = window.CuidadosConfig || {};
            if (error.message.includes('API Key')) {
                this.apiKey = null; // Reset API key para que se solicite nuevamente
                throw new Error(config.messages?.apiKeyInvalid || 'Error con la API Key. Será solicitada nuevamente.');
            } else if (error.message.includes('fetch')) {
                throw new Error(config.messages?.networkError || 'Error de conexión. Verifique su internet.');
            } else {
                throw new Error(error.message || config.messages?.genericError || 'Error inesperado');
            }
        }
    }
    
    async getApiKey() {
        if (this.apiKey) {
            return this.apiKey;
        }
        
        // Solicitar la API key al usuario si no está configurada
        const config = window.CuidadosConfig || {};
        const promptMessage = config.messages?.apiKeyPrompt || 'Para usar las funciones de IA, ingrese su API Key de Google Gemini:';
        
        const apiKey = prompt(promptMessage);
        if (apiKey && apiKey.length >= (config.validation?.minApiKeyLength || 20)) {
            this.apiKey = apiKey;
            return apiKey;
        }
        
        if (apiKey && apiKey.length < (config.validation?.minApiKeyLength || 20)) {
            alert(config.messages?.apiKeyInvalid || 'La API Key proporcionada parece inválida.');
        }
        
        return null;
    }
    
    printLetter() {
        const contentToPrint = document.getElementById('letterContent');
        if (!contentToPrint) return;
        
        const config = window.CuidadosConfig || {};
        const printWindow = window.open('', '', 'height=800,width=800');
        if (!printWindow) {
            alert(config.messages?.printBlocked || "El bloqueo de ventanas emergentes puede estar impidiendo la impresión.");
            return;
        }
        
        printWindow.document.write(`
            <html>
                <head>
                    <title>Carta para Familiares y Cuidadores - UmbraMed</title>
                    <style>
                        body { 
                            font-family: 'Arial', sans-serif; 
                            padding: 2rem; 
                            line-height: 1.6;
                            color: #333;
                            max-width: 800px;
                            margin: 0 auto;
                        }
                        .header {
                            text-align: center;
                            margin-bottom: 2rem;
                            border-bottom: 2px solid #C41E3A;
                            padding-bottom: 1rem;
                        }
                        .header h1 {
                            color: #C41E3A;
                            font-size: 1.5rem;
                            margin-bottom: 0.5rem;
                        }
                        .header p {
                            color: #666;
                            font-size: 0.9rem;
                        }
                        h1 { 
                            font-size: 1.5rem; 
                            font-weight: bold; 
                            margin-bottom: 1rem; 
                            color: #C41E3A;
                        }
                        h2 {
                            color: #C41E3A;
                            font-size: 1.25rem;
                            margin: 1.5rem 0 0.75rem 0;
                        }
                        p { margin-bottom: 1rem; }
                        ul { margin: 1rem 0; padding-left: 1.5rem; }
                        li { margin-bottom: 0.5rem; }
                        .footer {
                            margin-top: 3rem;
                            padding-top: 1rem;
                            border-top: 1px solid #ccc;
                            text-align: center;
                            font-size: 0.8rem;
                            color: #666;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>UmbraMed - Guía de Cuidados Paliativos</h1>
                        <p>Carta para Familiares y Cuidadores</p>
                    </div>
                    <div>${contentToPrint.innerHTML}</div>
                    <div class="footer">
                        <p>Generado por UmbraMed Medical Division</p>
                        <p>Fecha: ${new Date().toLocaleDateString('es-ES')}</p>
                    </div>
                </body>
            </html>
        `);
        printWindow.document.close();
        
        setTimeout(() => {
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }, 750);
    }
}

// Inicializar cuando se cargue el DOM
if (typeof window !== 'undefined') {
    window.CuidadosPaliativos = CuidadosPaliativos;
}

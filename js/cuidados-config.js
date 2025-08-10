// Configuración para el módulo de Cuidados Paliativos
const CuidadosConfig = {
    // Configuración de la API
    api: {
        gemini: {
            baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
            model: 'gemini-1.5-flash-latest'
        }
    },
    
    // Configuración de la interfaz
    ui: {
        loadingDelay: 500, // ms antes de mostrar spinner
        animationDuration: 300 // ms para transiciones
    },
    
    // Mensajes del sistema
    messages: {
        apiKeyPrompt: 'Para usar las funciones de IA, ingrese su API Key de Google Gemini:\n\nPuede obtener una clave gratuita en: https://aistudio.google.com/',
        apiKeyInvalid: 'La API Key proporcionada no es válida. Por favor, verifique e intente nuevamente.',
        networkError: 'Error de conexión. Verifique su conexión a internet e intente nuevamente.',
        genericError: 'Hubo un error inesperado. Por favor, inténtelo de nuevo en unos momentos.',
        noSelection: 'Por favor, seleccione al menos un medicamento para continuar.',
        interactionWarning: 'Se detectaron interacciones. Resuelva los conflictos antes de continuar.',
        printBlocked: 'El bloqueo de ventanas emergentes puede estar impidiendo la impresión. Por favor, permítalas para este sitio.'
    },
    
    // Configuración de medicamentos
    drugs: {
        // Se puede expandir para incluir más información como dosis, vías, etc.
        categories: {
            analgesicos: ['Morfina', 'Fentanilo', 'Ketamina'],
            sedantes: ['Midazolam'],
            antiemeticos: ['Metoclopramida', 'Ondansetrón'],
            antipsicoticos: ['Haloperidol', 'Levomepromazina'],
            antiespasmodicos: ['Butilescopolamina'],
            corticoides: ['Dexametasona']
        }
    },
    
    // Validación
    validation: {
        maxDrugs: 6, // Máximo número de medicamentos en una perfusión
        minApiKeyLength: 20 // Longitud mínima de API key
    }
};

// Hacer disponible globalmente
if (typeof window !== 'undefined') {
    window.CuidadosConfig = CuidadosConfig;
}

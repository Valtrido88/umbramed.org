// UMBRAMED Medical Division - Sistema de Autenticación Unificado
// Versión simplificada para todas las páginas

// Sistema de autenticación básico
function showLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Credenciales de acceso (en producción esto debe estar en el servidor)
    if (username === 'valerio' && password === 'umbramed2025') {
        alert('✅ Acceso autorizado - Bienvenido Dr. Valerio');
        closeLogin();
        // Limpiar campos
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('❌ Credenciales incorrectas');
    }
}

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLogin();
    }
});

// Funciones de navegación mejoradas
function goToPage(url) {
    window.location.href = url;
}

// Efectos de entrada suaves para las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.tool-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Función para mostrar alertas con estilo
function showAlert(message, type = 'info') {
    const alertTypes = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    const icon = alertTypes[type] || '📝';
    alert(`${icon} ${message}`);
}

// Prevenir envío de formularios sin manejar
document.addEventListener('submit', function(e) {
    if (!e.target.getAttribute('onsubmit')) {
        e.preventDefault();
        console.log('Formulario interceptado:', e.target);
    }
});

console.log('🧬 UMBRAMED Medical Division - Sistema cargado correctamente');

// Componentes comunes de UMBRAMED
class UmbramedComponents {
    
    // Genera el header de navegación
    static generateHeader(activePage = '') {
        return `
        <header class="header">
            <div class="nav-container">
                <div class="logo-container">
                    <a href="index.html">
                        <div class="logo-dna">
                            <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                                <!-- Doble hélice del ADN -->
                                <path d="M20 10 Q30 20 20 30 Q10 40 20 50 Q30 60 20 70 Q10 80 20 90 Q30 100 20 110" 
                                      stroke="currentColor" stroke-width="4" fill="none"/>
                                <path d="M80 10 Q70 20 80 30 Q90 40 80 50 Q70 60 80 70 Q90 80 80 90 Q70 100 80 110" 
                                      stroke="currentColor" stroke-width="4" fill="none"/>
                                <line x1="20" y1="15" x2="80" y2="15" stroke="currentColor" stroke-width="2"/>
                                <line x1="22" y1="25" x2="78" y2="25" stroke="currentColor" stroke-width="2"/>
                                <line x1="20" y1="35" x2="80" y2="35" stroke="currentColor" stroke-width="2"/>
                                <line x1="18" y1="45" x2="82" y2="45" stroke="currentColor" stroke-width="2"/>
                                <line x1="20" y1="55" x2="80" y2="55" stroke="currentColor" stroke-width="2"/>
                                <line x1="22" y1="65" x2="78" y2="65" stroke="currentColor" stroke-width="2"/>
                                <line x1="20" y1="75" x2="80" y2="75" stroke="currentColor" stroke-width="2"/>
                                <line x1="18" y1="85" x2="82" y2="85" stroke="currentColor" stroke-width="2"/>
                                <line x1="20" y1="95" x2="80" y2="95" stroke="currentColor" stroke-width="2"/>
                                <line x1="22" y1="105" x2="78" y2="105" stroke="currentColor" stroke-width="2"/>
                                <circle cx="20" cy="10" r="3" fill="currentColor"/>
                                <circle cx="80" cy="10" r="3" fill="currentColor"/>
                                <circle cx="20" cy="30" r="3" fill="currentColor"/>
                                <circle cx="80" cy="30" r="3" fill="currentColor"/>
                                <circle cx="20" cy="50" r="3" fill="currentColor"/>
                                <circle cx="80" cy="50" r="3" fill="currentColor"/>
                                <circle cx="20" cy="70" r="3" fill="currentColor"/>
                                <circle cx="80" cy="70" r="3" fill="currentColor"/>
                                <circle cx="20" cy="90" r="3" fill="currentColor"/>
                                <circle cx="80" cy="90" r="3" fill="currentColor"/>
                                <circle cx="20" cy="110" r="3" fill="currentColor"/>
                                <circle cx="80" cy="110" r="3" fill="currentColor"/>
                            </svg>
                        </div>
                        <div>
                            <div class="brand-text">UMBRAMED</div>
                            <div class="subtitle">MEDICAL DIVISION</div>
                        </div>
                    </a>
                </div>
                <nav>
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="herramientas.html" ${activePage === 'herramientas' ? 'class="active"' : ''}>Herramientas</a>
                        </li>
                        <li class="nav-item">
                            <a href="academia.html" ${activePage === 'academia' ? 'class="active"' : ''} style="color: #667eea; font-weight: 600;">🎓 ACADEMIA</a>
                        </li>
                        <li class="nav-item">
                            <a href="medicamentos_sin_lactosa.html" style="color: #C41E3A;" ${activePage === 'medicamentos' ? 'class="active"' : ''}>💊 Sin Lactosa</a>
                        </li>
                        <li class="nav-item admin-only" style="display: none;">
                            <a href="index.html#admin">Admin</a>
                        </li>
                        <li class="nav-item">
                            <div id="loginArea">
                                <button class="login-btn" onclick="showLogin()">LOGIN</button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        `;
    }
    
    // Genera el footer
    static generateFooter() {
        return `
        <footer class="footer">
            <div class="footer-content">
                <p>&copy; 2025 UMBRAMED Medical Division. Todos los derechos reservados.</p>
                <p>Desarrollado para profesionales sanitarios de Andalucía.</p>
            </div>
        </footer>
        `;
    }
    
    // Inicializa los componentes
    static init(activePage = '') {
        // Inyectar header si no existe
        if (!document.querySelector('.header')) {
            document.body.insertAdjacentHTML('afterbegin', this.generateHeader(activePage));
        }
        
        // Inyectar footer si no existe
        if (!document.querySelector('.footer')) {
            document.body.insertAdjacentHTML('beforeend', this.generateFooter());
        }
        
        // Cargar scripts de autenticación
        if (!window.showLogin) {
            const authScript = document.createElement('script');
            authScript.src = 'js/auth.js';
            document.head.appendChild(authScript);
        }
    }
}

// Auto-inicializar en páginas que usen este script
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.includes('medicamentos_sin_lactosa') ? 'medicamentos' :
                       window.location.pathname.includes('herramientas') ? 'herramientas' :
                       window.location.pathname.includes('academia') ? 'academia' :
                       window.location.pathname.includes('calculadora') ? 'herramientas' : '';
    
    // Solo auto-inicializar si no está ya presente
    if (!document.querySelector('.header')) {
        UmbramedComponents.init(currentPage);
    }
});

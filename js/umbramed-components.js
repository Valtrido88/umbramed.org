// UMBRAMED Medical Division - Componente Header Reutilizable

function createUmbramedHeader(currentPage = '') {
    return `
    <header class="header">
        <div class="nav-container">
            <div class="logo-container">
                <a href="index.html">
                    <div class="logo-dna">
                        <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" style="width: 50px; height: 70px;">
                            <!-- Doble hélice del ADN -->
                            <path d="M20 10 Q30 20 20 30 Q10 40 20 50 Q30 60 20 70 Q10 80 20 90 Q30 100 20 110" 
                                  stroke="#C41E3A" stroke-width="4" fill="none"/>
                            <path d="M80 10 Q70 20 80 30 Q90 40 80 50 Q70 60 80 70 Q90 80 80 90 Q70 100 80 110" 
                                  stroke="#C41E3A" stroke-width="4" fill="none"/>
                            <line x1="20" y1="15" x2="80" y2="15" stroke="#C41E3A" stroke-width="2"/>
                            <line x1="20" y1="35" x2="80" y2="35" stroke="#C41E3A" stroke-width="2"/>
                            <line x1="20" y1="55" x2="80" y2="55" stroke="#C41E3A" stroke-width="2"/>
                            <line x1="20" y1="75" x2="80" y2="75" stroke="#C41E3A" stroke-width="2"/>
                            <line x1="20" y1="95" x2="80" y2="95" stroke="#C41E3A" stroke-width="2"/>
                            <circle cx="20" cy="10" r="3" fill="#C41E3A"/>
                            <circle cx="80" cy="10" r="3" fill="#C41E3A"/>
                            <circle cx="20" cy="30" r="3" fill="#C41E3A"/>
                            <circle cx="80" cy="30" r="3" fill="#C41E3A"/>
                            <circle cx="20" cy="50" r="3" fill="#C41E3A"/>
                            <circle cx="80" cy="50" r="3" fill="#C41E3A"/>
                            <circle cx="20" cy="70" r="3" fill="#C41E3A"/>
                            <circle cx="80" cy="70" r="3" fill="#C41E3A"/>
                            <circle cx="20" cy="90" r="3" fill="#C41E3A"/>
                            <circle cx="80" cy="90" r="3" fill="#C41E3A"/>
                            <circle cx="20" cy="110" r="3" fill="#C41E3A"/>
                            <circle cx="80" cy="110" r="3" fill="#C41E3A"/>
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
                    <li class="nav-item"><a href="index.html" ${currentPage === 'inicio' ? 'class="active"' : ''}>INICIO</a></li>
                    <li class="nav-item"><a href="herramientas.html" ${currentPage === 'herramientas' ? 'class="active"' : ''}>HERRAMIENTAS</a></li>
                    <li class="nav-item"><a href="medicamentos_sin_lactosa.html" ${currentPage === 'medicamentos' ? 'class="active"' : ''} style="color: #C41E3A;">💊 SIN LACTOSA</a></li>
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

function createUmbramedFooter() {
    return `
    <footer class="footer">
        <div class="footer-content">
            <p class="footer-text">
                UMBRAMED Medical Division - Portal de Recursos Médicos Profesionales
            </p>
            <p class="footer-warning">
                ⚠️ ACCESO RESTRINGIDO - SOLO PERSONAL MÉDICO AUTORIZADO ⚠️
            </p>
        </div>
    </footer>
    `;
}

function createLoginModal() {
    return `
    <div id="loginModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000; justify-content: center; align-items: center;">
        <div style="background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); max-width: 400px; width: 90%;">
            <button onclick="closeLogin()" style="float: right; background: none; border: none; font-size: 1.5rem; cursor: pointer;">×</button>
            <h2 style="color: #C41E3A; text-align: center; margin-bottom: 1.5rem;">ACCESO AUTORIZADO</h2>
            <form onsubmit="handleLogin(event)">
                <input type="text" id="username" placeholder="Usuario" required style="width: 100%; padding: 0.8rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px;">
                <input type="password" id="password" placeholder="Contraseña" required style="width: 100%; padding: 0.8rem; margin-bottom: 1.5rem; border: 1px solid #ddd; border-radius: 5px;">
                <button type="submit" style="width: 100%; padding: 0.8rem; background: linear-gradient(45deg, #C41E3A, #8B0000); color: white; border: none; border-radius: 5px; font-weight: 600; cursor: pointer;">ACCEDER</button>
            </form>
        </div>
    </div>
    `;
}

// Auto-inyectar componentes si están marcados
document.addEventListener('DOMContentLoaded', function() {
    // Inyectar header si existe el elemento marcador
    const headerContainer = document.querySelector('[data-umbramed-header]');
    if (headerContainer) {
        const currentPage = headerContainer.getAttribute('data-current-page') || '';
        headerContainer.innerHTML = createUmbramedHeader(currentPage);
    }

    // Inyectar footer si existe el elemento marcador
    const footerContainer = document.querySelector('[data-umbramed-footer]');
    if (footerContainer) {
        footerContainer.innerHTML = createUmbramedFooter();
    }

    // Inyectar modal de login si existe el elemento marcador
    const modalContainer = document.querySelector('[data-umbramed-modal]');
    if (modalContainer) {
        modalContainer.innerHTML = createLoginModal();
    }
});

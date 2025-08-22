// Componentes comunes de UMBRAMED
class UmbramedComponents {
    
    // Genera el header de navegación
    static generateHeader(activePage = '') {
        return `
        <header class="header">
            <div class="nav-container">
                <div class="logo-container">
                    <a href="index.html">
                        <div class="logo-dna">...SVG...</div>
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
                            <a href="docs/unzipped_dietas_ia/dist/index.html" ${activePage === 'dietas' ? 'class="active"' : ''}>🥗 Dietas IA</a>
                        </li>
                        <li class="nav-item">
                            <a href="diabetes_tipo_2.html" ${activePage === 'diabetes' ? 'class="active"' : ''}>🩸 Diabetes</a>
                        </li>
                        <li class="nav-item">
                            <a href="herramientas/calculadora_pediatrica.html" ${activePage === 'calculadora' ? 'class="active"' : ''}>👶 Calculadora Pediátrica</a>
                        </li>
                        <li class="nav-item">
                            <a href="academia.html" ${activePage === 'academia' ? 'class="active"' : ''} style="color: #667eea; font-weight: 600;">🎓 ACADEMIA</a>
                        </li>
                        <li class="nav-item">
                            <a href="medicamentos_visados.html" ${activePage === 'visados' ? 'class="active"' : ''} style="color:#C41E3A;">🔴 Visados SAS</a>
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
        
        // Cargar scripts de autenticación (con stub de carga diferida)
        if (!window.UmbraAuthCore) {
            const authScript = document.createElement('script');
            authScript.src = 'js/auth.js';
            document.head.appendChild(authScript);
        }
        // Si aún no existe showLogin, crear un stub que carga auth.js y reintenta
        if (!window.showLogin) {
            window.showLogin = function(){
                if (window.UmbraAuthCore && typeof window.showLogin === 'function') {
                    return window.showLogin();
                }
                const s=document.querySelector('script[src="js/auth.js"]')||document.createElement('script');
                if (!s.src) { s.src='js/auth.js'; document.head.appendChild(s); }
                s.onload = ()=> window.showLogin && window.showLogin();
            };
        }

        // Adaptar área de login si hay sesión
        setTimeout(()=>{
            try {
                const loginArea = document.getElementById('loginArea');
                if (!loginArea) return;
                const session = window.UmbraAuthCore?.getSession?.();
                if (session && session.email) {
                    loginArea.innerHTML = `<div style="display:flex;align-items:center;gap:.5rem;">
                        <span style=\"font-size:.7rem;font-weight:600;color:#6C757D;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\" title=\"${session.email}\">👤 ${session.email}</span>
                        <button style=\"background:#C41E3A;color:#fff;border:none;padding:.35rem .6rem;border-radius:6px;font-size:.6rem;font-weight:600;cursor:pointer;\" onclick=\"(window.logoutUmbra ? logoutUmbra() : (window.UmbraAuthCore?.clearSession?.(), window.UmbraAuthCore?.updateLoginUI?.(), window.dispatchEvent(new Event('umbramed:logout'))))\">Salir</button>
                    </div>`;
                }
                window.addEventListener('umbramed:login',()=>setTimeout(()=>UmbramedComponents.init(activePage),10));
            } catch {}
        },150);
    }
}

// Auto-inicializar en páginas que usen este script
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.includes('medicamentos_sin_lactosa') ? 'medicamentos' :
                       window.location.pathname.includes('herramientas') ? 'herramientas' :
                       window.location.pathname.includes('academia') ? 'academia' :
                       window.location.pathname.includes('medicamentos_visados') ? 'visados' :
                       window.location.pathname.includes('dietas') || window.location.pathname.includes('asistente_dietas') ? 'dietas' :
                       window.location.pathname.includes('diabetes') ? 'diabetes' :
                       window.location.pathname.includes('calculadora') ? 'herramientas' : '';
    
    // Solo auto-inicializar si no está ya presente
    if (!document.querySelector('.header')) {
        UmbramedComponents.init(currentPage);
    }
});

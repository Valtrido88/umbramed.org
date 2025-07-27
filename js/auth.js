// Autenticación
let isLoggedIn = false;
let currentUser = null;

// Credenciales (en producción, esto debería estar en el servidor)
const adminCredentials = {
    username: 'valerio',
    password: 'umbramed2025'
};

function showLogin() {
    // Crear modal dinámicamente si no existe
    let modal = document.getElementById('loginModal');
    if (!modal) {
        modal = createLoginModal();
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
}

function createLoginModal() {
    const modal = document.createElement('div');
    modal.id = 'loginModal';
    modal.className = 'login-modal';
    modal.innerHTML = `
        <div class="login-box">
            <button class="close-modal" onclick="closeLogin()">×</button>
            <h2 class="login-title">ACCESO AUTORIZADO</h2>
            <form class="login-form" onsubmit="handleLogin(event)">
                <input type="text" id="username" class="login-input" placeholder="Usuario" required>
                <input type="password" id="password" class="login-input" placeholder="Contraseña" required>
                <button type="submit" class="login-submit">ACCEDER</button>
            </form>
        </div>
    `;
    return modal;
}

function closeLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
        isLoggedIn = true;
        currentUser = username;
        updateUIForAdmin();
        closeLogin();
        alert('✅ Acceso autorizado - Bienvenido Dr. Valerio');
    } else {
        alert('❌ Credenciales incorrectas');
    }
}

function logout() {
    isLoggedIn = false;
    currentUser = null;
    updateUIForVisitor();
    alert('🔒 Sesión cerrada');
}

function updateUIForAdmin() {
    // Actualizar área de login
    const loginArea = document.getElementById('loginArea');
    if (loginArea) {
        loginArea.innerHTML = `
            <div class="user-info">
                <span>👨‍⚕️ Dr. ${currentUser}</span>
                <button class="logout-btn" onclick="logout()">LOGOUT</button>
            </div>
        `;
    }
}

function updateUIForVisitor() {
    // Restaurar área de login
    const loginArea = document.getElementById('loginArea');
    if (loginArea) {
        loginArea.innerHTML = `
            <button class="login-btn" onclick="showLogin()">LOGIN</button>
        `;
    }
}

// Event Listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLogin();
    }
});

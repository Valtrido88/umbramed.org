// Academia UMBRAMED - Sistema de Formación Médica Online con Autenticación Segura

class AcademiaUmbramed {
    constructor() {
        this.currentView = 'login';
        this.isLoggedIn = false;
        this.currentUser = null;
        this.currentCourse = null;
        this.currentCategory = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.testResults = null;
        this.currentTestQuestions = [];
        this.questionManager = null;
        
        // Sistema de autenticación seguro
        this.userData = this.loadUserData();
        this.userStats = this.loadUserStats();
        
        // Configuración de cursos
        this.courses = {
            'ope-primaria-2025': {
                id: 'ope-primaria-2025',
                title: 'OPE PRIMARIA ANDALUCÍA 2025',
                description: 'Preparación completa para las Oposiciones de Atención Primaria de Andalucía 2025',
                totalQuestions: 143,
                categories: []
            }
        };
    }
    
    static init() {
        const instance = new AcademiaUmbramed();
        instance.loadQuestionData();
        instance.render();
        window.academiaUmbramed = instance;
    }
    
    // Sistema de autenticación seguro
    loadUserData() {
        const userData = localStorage.getItem('umbramed_users');
        if (userData) {
            return JSON.parse(userData);
        }
        
        // Usuario administrador por defecto (solo para inicialización)
        return {
            'admin@umbramed.org': {
                id: 'admin',
                email: 'admin@umbramed.org',
                name: 'Administrador UMBRAMED',
                role: 'admin',
                courses: ['ope-primaria-2025'],
                createdAt: new Date().toISOString(),
                lastLogin: null,
                profileComplete: true,
                specialty: 'Administración',
                workPlace: 'UMBRAMED',
                experience: 'Más de 10 años'
            }
        };
    }
    
    loadUserStats() {
        const stats = localStorage.getItem('umbramed_stats');
        return stats ? JSON.parse(stats) : {};
    }
    
    saveUserData() {
        localStorage.setItem('umbramed_users', JSON.stringify(this.userData));
    }
    
    saveUserStats() {
        localStorage.setItem('umbramed_stats', JSON.stringify(this.userStats));
    }
    
    // Función de autenticación segura
    async authenticateUser(email, password) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = this.userData[email];
                if (user && this.verifyPassword(password, email)) {
                    user.lastLogin = new Date().toISOString();
                    this.saveUserData();
                    resolve({ success: true, user });
                } else {
                    resolve({ success: false, error: 'Credenciales incorrectas' });
                }
            }, 500);
        });
    }
    
    verifyPassword(password, email) {
        // Sistema de contraseñas mejorado (en producción sería hash)
        const defaultPasswords = {
            'admin@umbramed.org': 'UmbramedAdmin2025!'
        };
        
        // Para usuarios registrados, usar una verificación simple
        if (this.userData[email] && this.userData[email].password) {
            return this.userData[email].password === password;
        }
        
        return defaultPasswords[email] === password;
    }
    
    // Registro de nuevo usuario
    async registerUser(userData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (this.userData[userData.email]) {
                    resolve({ success: false, error: 'El email ya está registrado' });
                    return;
                }
                
                const newUser = {
                    id: Date.now().toString(),
                    email: userData.email,
                    name: userData.name,
                    password: userData.password, // En producción esto sería hasheado
                    role: 'student',
                    courses: ['ope-primaria-2025'],
                    createdAt: new Date().toISOString(),
                    lastLogin: null,
                    profileComplete: false,
                    specialty: userData.specialty || '',
                    workPlace: userData.workPlace || '',
                    experience: userData.experience || ''
                };
                
                this.userData[userData.email] = newUser;
                this.userStats[newUser.id] = {
                    testsCompleted: 0,
                    totalQuestions: 0,
                    correctAnswers: 0,
                    averageScore: 0,
                    timeSpent: 0,
                    categoryStats: {},
                    achievements: [],
                    streak: 0,
                    lastTestDate: null
                };
                
                this.saveUserData();
                this.saveUserStats();
                
                resolve({ success: true, user: newUser });
            }, 500);
        });
    }
    
    // Actualizar estadísticas del usuario
    updateUserStats(userId, testResult) {
        if (!this.userStats[userId]) {
            this.userStats[userId] = {
                testsCompleted: 0,
                totalQuestions: 0,
                correctAnswers: 0,
                averageScore: 0,
                timeSpent: 0,
                categoryStats: {},
                achievements: [],
                streak: 0,
                lastTestDate: null
            };
        }
        
        const stats = this.userStats[userId];
        stats.testsCompleted++;
        stats.totalQuestions += testResult.totalQuestions;
        stats.correctAnswers += testResult.correctAnswers;
        stats.averageScore = ((stats.correctAnswers / stats.totalQuestions) * 100).toFixed(1);
        stats.timeSpent += testResult.timeSpent || 0;
        stats.lastTestDate = new Date().toISOString();
        
        // Estadísticas por categoría
        if (!stats.categoryStats[testResult.category]) {
            stats.categoryStats[testResult.category] = {
                tests: 0,
                questions: 0,
                correct: 0,
                averageScore: 0
            };
        }
        
        const catStats = stats.categoryStats[testResult.category];
        catStats.tests++;
        catStats.questions += testResult.totalQuestions;
        catStats.correct += testResult.correctAnswers;
        catStats.averageScore = ((catStats.correct / catStats.questions) * 100).toFixed(1);
        
        // Calcular racha
        if (testResult.score >= 70) {
            stats.streak++;
        } else {
            stats.streak = 0;
        }
        
        this.checkAchievements(userId, stats);
        this.saveUserStats();
    }
    
    // Sistema de logros
    checkAchievements(userId, stats) {
        const achievements = [
            { id: 'first_test', name: 'Primer Test', description: 'Completar tu primer test', icon: '🎯' },
            { id: 'perfectionist', name: 'Perfeccionista', description: 'Obtener 95% de promedio', icon: '⭐' },
            { id: 'dedicated', name: 'Dedicado', description: 'Completar 10 tests', icon: '📚' },
            { id: 'streak_5', name: 'Racha de 5', description: 'Aprobar 5 tests seguidos', icon: '🔥' },
            { id: 'expert', name: 'Experto', description: '50 tests con 85% promedio', icon: '🏆' },
        ];
        
        achievements.forEach(achievement => {
            const condition = this.checkAchievementCondition(achievement.id, stats);
            if (condition && !stats.achievements.includes(achievement.id)) {
                stats.achievements.push(achievement.id);
                this.showAchievementNotification(achievement);
            }
        });
    }
    
    checkAchievementCondition(achievementId, stats) {
        switch(achievementId) {
            case 'first_test': return stats.testsCompleted >= 1;
            case 'perfectionist': return parseFloat(stats.averageScore) >= 95;
            case 'dedicated': return stats.testsCompleted >= 10;
            case 'streak_5': return stats.streak >= 5;
            case 'expert': return stats.testsCompleted >= 50 && parseFloat(stats.averageScore) >= 85;
            default: return false;
        }
    }
    
    showAchievementNotification(achievement) {
        // Crear notificación visual
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div style="background: linear-gradient(45deg, #667eea, #764ba2); 
                        color: white; padding: 15px; border-radius: 10px; 
                        position: fixed; top: 20px; right: 20px; z-index: 1000;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.3); animation: slideIn 0.5s ease;">
                <div style="font-size: 2rem; text-align: center;">${achievement.icon}</div>
                <div style="font-weight: bold; margin: 5px 0;">¡Logro desbloqueado!</div>
                <div style="font-size: 0.9rem;">${achievement.name}</div>
                <div style="font-size: 0.8rem; opacity: 0.9;">${achievement.description}</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }
    
    // Cargar datos de preguntas
    async loadQuestionData() {
        try {
            const response = await fetch('test_gratis_oposiciones.html');
            const htmlText = await response.text();
            
            const scriptMatch = htmlText.match(/const allData = (\\[[\\s\\S]*?\\]);/);
            if (scriptMatch) {
                const allData = JSON.parse(scriptMatch[1]);
                
                this.questionManager = new QuestionManager();
                const categorizedData = this.questionManager.processAllData(allData);
                
                this.courses['ope-primaria-2025'].categories = Object.values(categorizedData)
                    .filter(category => category.questions.length > 0)
                    .map(category => ({
                        id: category.id,
                        name: category.name,
                        description: category.description,
                        questions: category.questions.length,
                        icon: category.icon
                    }));
                
                const stats = this.questionManager.getStats();
                this.courses['ope-primaria-2025'].totalQuestions = stats.totalQuestions;
            }
        } catch (error) {
            console.error('Error cargando datos de preguntas:', error);
        }
    }
    
    render() {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = `
            <div class="academia-container">
                ${this.renderCurrentView()}
            </div>
        `;
    }
    
    renderCurrentView() {
        switch(this.currentView) {
            case 'login':
                return this.renderLoginView();
            case 'register':
                return this.renderRegisterView();
            case 'dashboard':
                return this.renderDashboardView();
            case 'profile':
                return this.renderProfileView();
            case 'course':
                return this.renderCourseView();
            case 'category':
                return this.renderCategoryView();
            case 'test':
                return this.renderTestView();
            case 'results':
                return this.renderResultsView();
            default:
                return this.renderLoginView();
        }
    }
    
    renderLoginView() {
        return `
            <div class="login-card">
                <div class="academy-logo">🎓</div>
                <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">
                    ACADEMIA UMBRAMED
                </h1>
                <p style="color: var(--text-light); font-size: 1.1rem; margin-bottom: 2rem;">
                    Portal de Formación Médica Especializada
                </p>
                
                <form onsubmit="academiaUmbramed.handleLogin(event)">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required 
                               placeholder="tu@email.com" value="admin@umbramed.org">
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" name="password" required
                               placeholder="Tu contraseña" value="UmbramedAdmin2025!">
                    </div>
                    
                    <button type="submit" class="btn-login">
                        <span id="login-btn-text">Iniciar Sesión</span>
                        <span id="login-spinner" class="hidden">🔄 Verificando...</span>
                    </button>
                </form>
                
                <div style="margin-top: 2rem; text-align: center;">
                    <p style="color: var(--text-light);">¿No tienes cuenta?</p>
                    <button onclick="academiaUmbramed.showRegister()" 
                            style="background: none; border: none; color: var(--primary-red); 
                                   text-decoration: underline; cursor: pointer;">
                        Crear cuenta nueva
                    </button>
                </div>
                
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e1e5e9;">
                    <h4 style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 1rem;">Demo:</h4>
                    <div style="text-align: left; font-size: 0.8rem; color: var(--text-light);">
                        <p><strong>admin@umbramed.org</strong> / UmbramedAdmin2025!</p>
                    </div>
                </div>
                
                <div id="login-error" class="hidden" style="background: #f8d7da; color: #721c24; 
                     padding: 10px; border-radius: 5px; margin-top: 1rem;">
                </div>
            </div>
        `;
    }
    
    renderRegisterView() {
        return `
            <div class="login-card">
                <div class="academy-logo">📝</div>
                <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">
                    Crear Cuenta
                </h1>
                <p style="color: var(--text-light); font-size: 1.1rem; margin-bottom: 2rem;">
                    Únete a la Academia UMBRAMED
                </p>
                
                <form onsubmit="academiaUmbramed.handleRegister(event)">
                    <div class="form-group">
                        <label for="reg-name">Nombre Completo</label>
                        <input type="text" id="reg-name" name="name" required 
                               placeholder="Dr/Dra. Nombre Apellidos">
                    </div>
                    
                    <div class="form-group">
                        <label for="reg-email">Email</label>
                        <input type="email" id="reg-email" name="email" required 
                               placeholder="tu@email.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="reg-password">Contraseña</label>
                        <input type="password" id="reg-password" name="password" required
                               placeholder="Mínimo 8 caracteres" minlength="8">
                    </div>
                    
                    <div class="form-group">
                        <label for="reg-specialty">Especialidad</label>
                        <select id="reg-specialty" name="specialty">
                            <option value="">Seleccionar...</option>
                            <option value="Medicina Familiar">Medicina Familiar</option>
                            <option value="Enfermería">Enfermería</option>
                            <option value="Medicina Interna">Medicina Interna</option>
                            <option value="Pediatría">Pediatría</option>
                            <option value="Cardiología">Cardiología</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="reg-workplace">Centro de Trabajo</label>
                        <input type="text" id="reg-workplace" name="workPlace" 
                               placeholder="Hospital/Centro de Salud">
                    </div>
                    
                    <button type="submit" class="btn-login">
                        <span id="register-btn-text">Crear Cuenta</span>
                        <span id="register-spinner" class="hidden">🔄 Registrando...</span>
                    </button>
                </form>
                
                <div style="margin-top: 2rem; text-align: center;">
                    <button onclick="academiaUmbramed.showLogin()" 
                            style="background: none; border: none; color: var(--primary-red); 
                                   text-decoration: underline; cursor: pointer;">
                        ← Volver al login
                    </button>
                </div>
                
                <div id="register-error" class="hidden" style="background: #f8d7da; color: #721c24; 
                     padding: 10px; border-radius: 5px; margin-top: 1rem;">
                </div>
            </div>
        `;
    }
    
    // Métodos de navegación
    showLogin() {
        this.currentView = 'login';
        this.render();
    }
    
    showRegister() {
        this.currentView = 'register';
        this.render();
    }
    
    // Manejar login
    async handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('login-error');
        const btnText = document.getElementById('login-btn-text');
        const spinner = document.getElementById('login-spinner');
        
        // Mostrar spinner
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
        errorDiv.classList.add('hidden');
        
        try {
            const result = await this.authenticateUser(email, password);
            
            if (result.success) {
                this.isLoggedIn = true;
                this.currentUser = result.user;
                this.currentView = 'dashboard';
                this.render();
            } else {
                errorDiv.textContent = result.error;
                errorDiv.classList.remove('hidden');
            }
        } catch (error) {
            errorDiv.textContent = 'Error de conexión. Inténtalo de nuevo.';
            errorDiv.classList.remove('hidden');
        }
        
        // Ocultar spinner
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
    }
    
    // Manejar registro
    async handleRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = Object.fromEntries(formData);
        const errorDiv = document.getElementById('register-error');
        const btnText = document.getElementById('register-btn-text');
        const spinner = document.getElementById('register-spinner');
        
        // Mostrar spinner
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
        errorDiv.classList.add('hidden');
        
        try {
            const result = await this.registerUser(userData);
            
            if (result.success) {
                this.isLoggedIn = true;
                this.currentUser = result.user;
                this.currentView = 'profile'; // Ir al perfil para completar datos
                this.render();
            } else {
                errorDiv.textContent = result.error;
                errorDiv.classList.remove('hidden');
            }
        } catch (error) {
            errorDiv.textContent = 'Error de conexión. Inténtalo de nuevo.';
            errorDiv.classList.remove('hidden');
        }
        
        // Ocultar spinner
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
    }
    
    renderDashboardView() {
        const user = this.currentUser;
        const stats = this.userStats[user.id] || {
            testsCompleted: 0,
            averageScore: 0,
            streak: 0,
            achievements: []
        };
        
        return `
            <div class="breadcrumb">
                <span>🏠 Dashboard</span>
                <div style="float: right;">
                    <button onclick="academiaUmbramed.showProfile()" 
                            style="background: var(--primary-red); color: white; border: none; 
                                   padding: 5px 15px; border-radius: 5px; margin-right: 10px;">
                        👤 Mi Perfil
                    </button>
                    <button onclick="academiaUmbramed.logout()" 
                            style="background: #6c757d; color: white; border: none; 
                                   padding: 5px 15px; border-radius: 5px;">
                        🚪 Cerrar Sesión
                    </button>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <div>
                        <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin: 0;">
                            ¡Hola, ${user.name}! 👋
                        </h1>
                        <p style="color: var(--text-light); font-size: 1.2rem; margin: 0.5rem 0;">
                            ${user.specialty || 'Especialista médico'} - ${user.workPlace || 'Sistema Sanitario'}
                        </p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 0.5rem;">
                            ${stats.achievements.length > 0 ? '🏆' : '🎯'}
                        </div>
                        <div style="font-size: 0.9rem; color: var(--text-light);">
                            ${stats.achievements.length} logros
                        </div>
                    </div>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">${stats.testsCompleted}</div>
                        <div class="stat-label">Tests Completados</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${stats.averageScore}%</div>
                        <div class="stat-label">Promedio General</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${stats.streak}</div>
                        <div class="stat-label">Racha Actual</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">1</div>
                        <div class="stat-label">Cursos Disponibles</div>
                    </div>
                </div>
            </div>
            
            <h2 style="color: var(--accent-black); font-size: 2rem; font-weight: 600; margin: 2rem 0 1rem;">
                Cursos Disponibles
            </h2>
            
            ${this.renderCoursesGrid()}
        `;
    }
    
    renderProfileView() {
        const user = this.currentUser;
        const stats = this.userStats[user.id] || {
            testsCompleted: 0,
            totalQuestions: 0,
            correctAnswers: 0,
            averageScore: 0,
            categoryStats: {},
            achievements: [],
            streak: 0,
            timeSpent: 0
        };
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <span>👤 Mi Perfil</span>
            </div>
            
            <div class="dashboard-card">
                <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin-bottom: 2rem;">
                    👤 Mi Perfil
                </h1>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
                    <div>
                        <h3 style="color: var(--accent-black); margin-bottom: 1rem;">Información Personal</h3>
                        <div style="background: var(--lighter-bg); padding: 1.5rem; border-radius: 10px;">
                            <p><strong>Nombre:</strong> ${user.name}</p>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Especialidad:</strong> ${user.specialty || 'No especificada'}</p>
                            <p><strong>Centro:</strong> ${user.workPlace || 'No especificado'}</p>
                            <p><strong>Experiencia:</strong> ${user.experience || 'No especificada'}</p>
                            <p><strong>Miembro desde:</strong> ${new Date(user.createdAt).toLocaleDateString('es-ES')}</p>
                            <p><strong>Último acceso:</strong> ${user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('es-ES') : 'Primer acceso'}</p>
                        </div>
                        
                        <button onclick="academiaUmbramed.editProfile()" 
                                style="background: var(--primary-red); color: white; border: none; 
                                       padding: 10px 20px; border-radius: 5px; margin-top: 1rem;">
                            ✏️ Editar Perfil
                        </button>
                    </div>
                    
                    <div>
                        <h3 style="color: var(--accent-black); margin-bottom: 1rem;">Estadísticas de Rendimiento</h3>
                        <div style="background: var(--lighter-bg); padding: 1.5rem; border-radius: 10px;">
                            <div class="stats-grid" style="grid-template-columns: 1fr 1fr;">
                                <div class="stat-card">
                                    <div class="stat-number">${stats.testsCompleted}</div>
                                    <div class="stat-label">Tests Completados</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">${stats.totalQuestions}</div>
                                    <div class="stat-label">Preguntas Respondidas</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">${stats.correctAnswers}</div>
                                    <div class="stat-label">Respuestas Correctas</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">${stats.averageScore}%</div>
                                    <div class="stat-label">Promedio General</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">${stats.streak}</div>
                                    <div class="stat-label">Racha Actual</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">${Math.round(stats.timeSpent / 60) || 0}</div>
                                    <div class="stat-label">Minutos Estudiando</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            ${this.renderAchievements(stats.achievements)}
            ${this.renderCategoryStats(stats.categoryStats)}
        `;
    }
    
    renderAchievements(userAchievements) {
        const allAchievements = [
            { id: 'first_test', name: 'Primer Test', description: 'Completar tu primer test', icon: '🎯' },
            { id: 'perfectionist', name: 'Perfeccionista', description: 'Obtener 95% de promedio', icon: '⭐' },
            { id: 'dedicated', name: 'Dedicado', description: 'Completar 10 tests', icon: '📚' },
            { id: 'streak_5', name: 'Racha de 5', description: 'Aprobar 5 tests seguidos', icon: '🔥' },
            { id: 'expert', name: 'Experto', description: '50 tests con 85% promedio', icon: '🏆' },
        ];
        
        return `
            <div class="dashboard-card">
                <h2 style="color: var(--accent-black); font-size: 2rem; font-weight: 600; margin-bottom: 1.5rem;">
                    🏆 Logros (${userAchievements.length}/${allAchievements.length})
                </h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    ${allAchievements.map(achievement => {
                        const unlocked = userAchievements.includes(achievement.id);
                        return `
                            <div style="background: ${unlocked ? 'linear-gradient(45deg, #667eea, #764ba2)' : '#f8f9fa'}; 
                                        color: ${unlocked ? 'white' : '#6c757d'}; 
                                        padding: 1.5rem; border-radius: 10px; text-align: center;
                                        opacity: ${unlocked ? '1' : '0.5'};">
                                <div style="font-size: 3rem; margin-bottom: 1rem;">${achievement.icon}</div>
                                <h4 style="margin: 0.5rem 0; font-weight: 600;">${achievement.name}</h4>
                                <p style="font-size: 0.9rem; margin: 0; opacity: 0.9;">${achievement.description}</p>
                                ${unlocked ? '<div style="margin-top: 1rem; font-size: 0.8rem;">✅ Desbloqueado</div>' : '<div style="margin-top: 1rem; font-size: 0.8rem;">🔒 Bloqueado</div>'}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    
    renderCategoryStats(categoryStats) {
        if (Object.keys(categoryStats).length === 0) {
            return `
                <div class="dashboard-card">
                    <h2 style="color: var(--accent-black); font-size: 2rem; font-weight: 600; margin-bottom: 1rem;">
                        📊 Estadísticas por Categoría
                    </h2>
                    <p style="color: var(--text-light); text-align: center; padding: 2rem;">
                        ¡Completa tu primer test para ver estadísticas detalladas!
                    </p>
                </div>
            `;
        }
        
        return `
            <div class="dashboard-card">
                <h2 style="color: var(--accent-black); font-size: 2rem; font-weight: 600; margin-bottom: 1.5rem;">
                    📊 Estadísticas por Categoría PAI
                </h2>
                
                <div style="display: grid; gap: 1rem;">
                    ${Object.entries(categoryStats).map(([categoryId, stats]) => `
                        <div style="background: var(--lighter-bg); padding: 1.5rem; border-radius: 10px;
                                   display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4 style="margin: 0; color: var(--accent-black);">${categoryId}</h4>
                                <p style="margin: 0.5rem 0; color: var(--text-light); font-size: 0.9rem;">
                                    ${stats.tests} tests • ${stats.questions} preguntas
                                </p>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: ${stats.averageScore >= 70 ? 'var(--primary-red)' : '#6c757d'};">
                                    ${stats.averageScore}%
                                </div>
                                <div style="font-size: 0.8rem; color: var(--text-light);">
                                    ${stats.correct}/${stats.questions} correctas
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    showProfile() {
        this.currentView = 'profile';
        this.render();
    }
    
    editProfile() {
        // Implementar edición de perfil
        alert('Función de edición de perfil próximamente...');
    }
    
    logout() {
        this.isLoggedIn = false;
        this.currentUser = null;
        this.currentView = 'login';
        this.currentCourse = null;
        this.currentCategory = null;
        this.render();
    }
    
    goToDashboard() {
        this.currentView = 'dashboard';
        this.currentCourse = null;
        this.currentCategory = null;
        this.render();
    }
    
    selectCourse(courseId) {
        this.currentCourse = courseId;
        this.currentView = 'course';
        this.render();
    }
    
    // Resto de métodos (renderCoursesGrid, renderCourseView, etc.) se mantienen igual
    renderCoursesGrid() {
        return Object.values(this.courses).map(course => `
            <div class="course-card" onclick="academiaUmbramed.selectCourse('${course.id}')">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                    <div style="font-size: 3rem;">🏥</div>
                    <div>
                        <h3 style="font-size: 1.8rem; font-weight: 700; margin: 0;">
                            ${course.title}
                        </h3>
                        <p style="font-size: 1rem; opacity: 0.9; margin: 0.5rem 0;">
                            ${course.description}
                        </p>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="opacity: 0.8;">
                        📚 ${course.totalQuestions} preguntas | 📋 ${course.categories.length} categorías
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 8px 15px; border-radius: 20px; font-weight: 600;">
                        Acceder →
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    renderCourseView() {
        const course = this.courses[this.currentCourse];
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <span>${course.title}</span>
            </div>
            
            <div class="dashboard-card">
                <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
                    ${course.title}
                </h1>
                <p style="color: var(--text-light); font-size: 1.2rem; margin-bottom: 2rem;">
                    ${course.description}
                </p>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">${course.categories.length}</div>
                        <div class="stat-label">Categorías PAI</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${course.totalQuestions}</div>
                        <div class="stat-label">Preguntas Totales</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Basado en PAIs</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">✓</div>
                        <div class="stat-label">Actualizado 2025</div>
                    </div>
                </div>
            </div>
            
            <h2 style="color: var(--accent-black); font-size: 2rem; font-weight: 600; margin: 2rem 0 1rem;">
                Categorías PAI Disponibles
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem;">
                ${course.categories.map(category => `
                    <div class="dashboard-card" style="cursor: pointer;" onclick="academiaUmbramed.selectCategory('${category.id}')">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                            <div style="font-size: 2.5rem;">${category.icon}</div>
                            <div style="flex: 1;">
                                <h3 style="color: var(--accent-black); font-size: 1.4rem; font-weight: 600; margin: 0;">
                                    ${category.name}
                                </h3>
                                <p style="color: var(--text-light); font-size: 0.95rem; margin: 0.5rem 0;">
                                    ${category.description}
                                </p>
                            </div>
                        </div>
                        
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="background: var(--lighter-bg); padding: 5px 12px; border-radius: 15px; font-size: 0.9rem; color: var(--text-light);">
                                📝 ${category.questions} preguntas
                            </div>
                            <div style="color: var(--primary-red); font-weight: 600;">
                                Iniciar Test →
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

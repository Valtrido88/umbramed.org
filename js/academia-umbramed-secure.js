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
        
        // Campus Virtual con Especialidades Médicas
        this.specialties = {
            'microbiologia': {
                id: 'microbiologia',
                name: 'Microbiología Clínica',
                description: 'Bacteriología, Virología, Micología y Parasitología',
                icon: '🦠',
                color: '#e74c3c',
                building: '🏥',
                head: 'Dr. María González',
                students: 0,
                courses: ['microbiologia-basica', 'microbiologia-avanzada', 'resistencias-antibioticas'],
                requiresAccess: true
            },
            'cirugia-cardiovascular': {
                id: 'cirugia-cardiovascular', 
                name: 'Cirugía Cardiovascular',
                description: 'Cirugía Cardiaca y Vascular',
                icon: '❤️',
                color: '#3498db',
                building: '🏛️',
                head: 'Dr. Carlos Rodríguez',
                students: 0,
                courses: ['cirugia-cardiaca', 'cirugia-vascular', 'trasplante-cardiaco'],
                requiresAccess: true
            },
            'anatomia-patologica': {
                id: 'anatomia-patologica',
                name: 'Anatomía Patológica',
                description: 'Histopatología y Citología Diagnóstica',
                icon: '🔬',
                color: '#9b59b6',
                building: '🏢',
                head: 'Dra. Ana Martínez',
                students: 0,
                courses: ['histopatologia', 'citologia', 'inmunohistoquimica'],
                requiresAccess: true
            },
            'medicina-general': {
                id: 'medicina-general',
                name: 'Medicina General',
                description: 'Atención Primaria y PAIs Andalucía',
                icon: '🩺',
                color: '#27ae60',
                building: '🏠',
                head: 'Dr. Luis Fernández',
                students: 0,
                courses: ['ope-primaria-basic'],
                requiresAccess: false // Acceso libre
            },
            'ope-primaria-2025': {
                id: 'ope-primaria-2025',
                name: 'OPE Primaria Andalucía 2025',
                description: 'Tu campus personalizado para la preparación de oposiciones. Sistema avanzado de gestión de preguntas con 3 bloques especializados.',
                icon: '🎯',
                color: '#ff6b35',
                building: '🏆',
                head: 'Campus Personal',
                students: 1,
                courses: ['pai-questions', 'historical-exams', 'simulacros'],
                requiresAccess: false,
                isPersonal: true,
                questionBanks: {
                    'pai-questions': {
                        id: 'pai-questions',
                        name: 'Preguntas PAI por IA',
                        description: 'Banco de preguntas generadas por IA basadas en los Procesos Asistenciales Integrados de Andalucía',
                        icon: '🤖',
                        color: '#28a745',
                        questions: [
                            {
                                id: 'pai_001',
                                question: 'Según el PAI de Diabetes Mellitus tipo 2, ¿cuál es el objetivo de HbA1c recomendado para la mayoría de adultos con diabetes?',
                                options: [
                                    'Menor del 6%',
                                    'Menor del 7%',
                                    'Menor del 8%',
                                    'Menor del 9%'
                                ],
                                correct: 1,
                                explanation: 'El objetivo de HbA1c para la mayoría de adultos con diabetes tipo 2 es <7%, según las guías clínicas actuales y el PAI de Diabetes.',
                                category: 'Diabetes Mellitus',
                                difficulty: 'Intermedio',
                                tags: ['diabetes', 'hemoglobina-glicosilada', 'objetivos-terapeuticos'],
                                createdAt: '2025-08-11T10:00:00Z',
                                bankId: 'pai-questions'
                            },
                            {
                                id: 'pai_002',
                                question: 'En el PAI de EPOC, ¿cuál es el broncodilatador de primera línea en el tratamiento de mantenimiento?',
                                options: [
                                    'Beta-2 agonistas de acción corta (SABA)',
                                    'Beta-2 agonistas de acción larga (LABA)',
                                    'Anticolinérgicos de acción larga (LAMA)',
                                    'Corticoides inhalados'
                                ],
                                correct: 2,
                                explanation: 'Los anticolinérgicos de acción larga (LAMA) como el tiotropio son considerados de primera línea en el tratamiento de mantenimiento de EPOC moderada-severa.',
                                category: 'EPOC',
                                difficulty: 'Intermedio',
                                tags: ['epoc', 'broncodilatadores', 'tratamiento-mantenimiento'],
                                createdAt: '2025-08-11T10:05:00Z',
                                bankId: 'pai-questions'
                            },
                            {
                                id: 'pai_003',
                                question: 'Según el PAI de Hipertensión Arterial, ¿cuál es la cifra objetivo de presión arterial para un paciente menor de 65 años sin comorbilidades?',
                                options: [
                                    '<140/90 mmHg',
                                    '<130/80 mmHg',
                                    '<120/80 mmHg',
                                    '<110/70 mmHg'
                                ],
                                correct: 1,
                                explanation: 'Para pacientes menores de 65 años sin comorbilidades, el objetivo es <130/80 mmHg según las guías actuales de hipertensión.',
                                category: 'Hipertensión Arterial',
                                difficulty: 'Básico',
                                tags: ['hipertension', 'objetivos-tension', 'adultos-jovenes'],
                                createdAt: '2025-08-11T10:10:00Z',
                                bankId: 'pai-questions'
                            }
                        ],
                        categories: ['Diabetes Mellitus', 'EPOC', 'Hipertensión Arterial', 'Cuidados Paliativos', 'Tabaquismo', 'Deterioro Cognitivo', 'Pluripatológicos', 'Riesgo Vascular'],
                        totalQuestions: 3,
                        difficulty: ['Básico', 'Intermedio', 'Avanzado'],
                        tags: ['diabetes', 'hemoglobina-glicosilada', 'objetivos-terapeuticos', 'epoc', 'broncodilatadores', 'tratamiento-mantenimiento', 'hipertension', 'objetivos-tension', 'adultos-jovenes']
                    },
                    'historical-exams': {
                        id: 'historical-exams',
                        name: 'Exámenes de Otros Años',
                        description: 'Recopilación de preguntas de convocatorias anteriores organizadas por año y tema',
                        icon: '📚',
                        color: '#6f42c1',
                        questions: [
                            {
                                id: 'hist_001',
                                question: 'OPE 2023: ¿Cuál es la dosis inicial recomendada de metformina en el tratamiento de la diabetes tipo 2?',
                                options: [
                                    '500 mg una vez al día',
                                    '850 mg dos veces al día',
                                    '500 mg dos veces al día',
                                    '1000 mg una vez al día'
                                ],
                                correct: 0,
                                explanation: 'La dosis inicial recomendada es 500 mg una vez al día con la comida principal, aumentando gradualmente según tolerancia.',
                                category: 'OPE 2023',
                                difficulty: 'Real',
                                tags: ['ope-2023', 'metformina', 'diabetes', 'dosificacion'],
                                createdAt: '2025-08-11T11:00:00Z',
                                bankId: 'historical-exams'
                            },
                            {
                                id: 'hist_002',
                                question: 'OPE 2022: En atención primaria, ¿cuál es el tiempo máximo recomendado entre la solicitud de cita y la consulta médica ordinaria?',
                                options: [
                                    '48 horas',
                                    '72 horas',
                                    '7 días',
                                    '15 días'
                                ],
                                correct: 2,
                                explanation: 'Según los estándares de calidad en atención primaria, el tiempo máximo para cita ordinaria debe ser de 7 días.',
                                category: 'OPE 2022',
                                difficulty: 'Real',
                                tags: ['ope-2022', 'atencion-primaria', 'gestion-citas', 'calidad-asistencial'],
                                createdAt: '2025-08-11T11:05:00Z',
                                bankId: 'historical-exams'
                            }
                        ],
                        categories: ['OPE 2023', 'OPE 2022', 'OPE 2021', 'OPE 2020', 'Convocatorias Anteriores'],
                        totalQuestions: 2,
                        difficulty: ['Real', 'Oficial'],
                        tags: ['ope-2023', 'metformina', 'diabetes', 'dosificacion', 'ope-2022', 'atencion-primaria', 'gestion-citas', 'calidad-asistencial']
                    },
                    'simulacros': {
                        id: 'simulacros',
                        name: 'Simulacros de Examen',
                        description: 'Tests completos que simulan las condiciones reales del examen oficial con tiempo limitado',
                        icon: '⏱️',
                        color: '#dc3545',
                        questions: [
                            {
                                id: 'sim_001',
                                question: 'SIMULACRO 1: Un paciente de 55 años consulta por disnea de esfuerzo de 3 meses de evolución. Fumador de 30 paquetes/año. Espirometría: FEV1 65%, FEV1/FVC 0.65. ¿Cuál es el diagnóstico más probable?',
                                options: [
                                    'EPOC leve',
                                    'EPOC moderado',
                                    'Asma bronquial',
                                    'Restricción pulmonar'
                                ],
                                correct: 1,
                                explanation: 'Con FEV1 entre 50-80% del predicho y relación FEV1/FVC <0.7 en un fumador, corresponde a EPOC moderado (estadio II).',
                                category: 'Simulacro Completo 1',
                                difficulty: 'Simulación Real',
                                tags: ['simulacro', 'epoc', 'espirometria', 'diagnostico', 'neumologia'],
                                createdAt: '2025-08-11T12:00:00Z',
                                bankId: 'simulacros'
                            }
                        ],
                        categories: ['Simulacro Completo 1', 'Simulacro Completo 2', 'Simulacro por Bloques', 'Simulacro Cronometrado'],
                        totalQuestions: 1,
                        difficulty: ['Simulación Real', 'Práctica'],
                        tags: ['simulacro', 'epoc', 'espirometria', 'diagnostico', 'neumologia']
                    }
                }
            }
        };
        
        this.currentSpecialty = null;
        
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
        
        // Usuario exclusivo para acceso personal
        return {
            'valerio.trigos88@gmail.com': {
                id: 'valerio',
                email: 'valerio.trigos88@gmail.com',
                name: 'Valerio Trigos',
                password: 'valerioM16AK47',
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
        // Solo permitir acceso al usuario exclusivo
        if (email === 'valerio.trigos88@gmail.com' && password === 'valerioM16AK47') {
            return true;
        }
        return false;
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
            const scriptMatch = htmlText.match(/const allData = (\[[\s\S]*?\]);/);
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
            // Mostrar mensaje de error en el campus
            window.umbramedConnectionError = true;
            setTimeout(() => {
                const appContainer = document.getElementById('app');
                if (appContainer) {
                    const errorDiv = document.createElement('div');
                    errorDiv.style.background = '#ffe5e5';
                    errorDiv.style.color = '#c30';
                    errorDiv.style.padding = '1.5em';
                    errorDiv.style.borderRadius = '10px';
                    errorDiv.style.margin = '2em auto';
                    errorDiv.style.textAlign = 'center';
                    errorDiv.style.fontWeight = 'bold';
                    errorDiv.innerHTML = '⚠️ Error de conexión: No se pudieron cargar los tests. Puedes navegar por el campus y especialidades, pero no se mostrarán preguntas. Si el problema persiste, revisa la ruta o permisos.';
                    appContainer.prepend(errorDiv);
                }
            }, 1000);
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
            case 'campus':
                return this.renderCampusView();
            case 'specialty':
                return this.renderSpecialtyView();
            case 'specialty-login':
                return this.renderSpecialtyLoginView();
            case 'question-bank':
                return this.renderQuestionBankView();
            case 'manage-bank':
                return this.renderManageBankView();
            case 'add-question':
                return this.renderAddQuestionView();
            case 'import-dialog':
                return this.renderImportDialogView();
            case 'question-analytics':
                return this.renderQuestionAnalyticsView();
            case 'test':
                return this.renderTestView();
            case 'test-results':
                return this.renderTestResultsView();
            case 'detailed-results':
                return this.renderDetailedResultsView();
            case 'profile':
                return this.renderProfileView();
            case 'course':
                return this.renderCourseView();
            case 'category':
                return this.renderCategoryView();
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
                               placeholder="valerio.trigos88@gmail.com" value="valerio.trigos88@gmail.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" name="password" required
                               placeholder="Tu contraseña" value="valerioM16AK47">
                    </div>
                    
                    <button type="submit" class="btn-login">
                        <span id="login-btn-text">Iniciar Sesión</span>
                        <span id="login-spinner" class="hidden">🔄 Verificando...</span>
                    </button>
                </form>
                
                <div style="margin-top: 2rem; text-align: center;">
                    <p style="color: var(--text-light);">Acceso exclusivo para Valerio Trigos.</p>
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
                this.currentView = 'campus'; // Forzar acceso directo al campus virtual
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
                <span>🏠 Dashboard Principal</span>
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
                            ¡Bienvenido al Campus UMBRAMED! 🎓
                        </h1>
                        <p style="color: var(--text-light); font-size: 1.2rem; margin: 0.5rem 0;">
                            Hola ${user.name}, selecciona tu especialidad para continuar
                        </p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 4rem; margin-bottom: 0.5rem;">�</div>
                        <div style="font-size: 0.9rem; color: var(--text-light);">Campus Virtual</div>
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
                        <div class="stat-number">${Object.keys(this.specialties).length}</div>
                        <div class="stat-label">Especialidades</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${stats.achievements.length}</div>
                        <div class="stat-label">Logros</div>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin: 2rem 0;">
                <button onclick="academiaUmbramed.showCampus()" 
                        style="background: linear-gradient(45deg, #667eea, #764ba2); 
                               color: white; border: none; padding: 20px 50px; 
                               border-radius: 15px; font-size: 1.5rem; font-weight: 600;
                               cursor: pointer; box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
                               transition: all 0.3s ease;">
                    🏫 Entrar al Campus Virtual
                </button>
            </div>
            
            <div class="dashboard-card">
                <h3 style="color: var(--accent-black); margin-bottom: 1.5rem;">📊 Resumen de Especialidades</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    ${Object.values(this.specialties).map(specialty => `
                        <div style="background: ${specialty.color}; color: white; padding: 1.5rem; 
                                   border-radius: 10px; text-align: center;">
                            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${specialty.icon}</div>
                            <h4 style="margin: 0.5rem 0; font-size: 1rem;">${specialty.name}</h4>
                            <div style="font-size: 0.8rem; opacity: 0.9;">${specialty.courses.length} cursos</div>
                        </div>
                    `).join('')}
                </div>
            </div>
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
    
    selectCategory(categoryId) {
        this.currentCategory = categoryId;
        this.currentView = 'category';
        this.render();
    }
    
    renderCategoryView() {
        const course = this.courses[this.currentCourse];
        const category = course.categories.find(c => c.id === this.currentCategory);
        
        if (!category) {
            return `<div class="dashboard-card">
                <h2>❌ Categoría no encontrada</h2>
                <button onclick="academiaUmbramed.selectCourse('${this.currentCourse}')">← Volver al curso</button>
            </div>`;
        }
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.selectCourse('${this.currentCourse}')">${course.title}</a> >
                <span>${category.name}</span>
            </div>
            
            <div class="dashboard-card">
                <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
                    <div style="font-size: 4rem;">${category.icon}</div>
                    <div>
                        <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin: 0;">
                            ${category.name}
                        </h1>
                        <p style="color: var(--text-light); font-size: 1.2rem; margin: 0.5rem 0;">
                            ${category.description}
                        </p>
                        <div style="color: var(--primary-red); font-weight: 600; margin-top: 1rem;">
                            📝 ${category.questions} preguntas disponibles
                        </div>
                    </div>
                </div>
                
                <div style="background: var(--lighter-bg); padding: 2rem; border-radius: 10px; margin-bottom: 2rem;">
                    <h3 style="color: var(--accent-black); margin-bottom: 1rem;">Instrucciones del Test</h3>
                    <ul style="color: var(--text-light); line-height: 1.6;">
                        <li>Este test contiene ${category.questions} preguntas tipo test</li>
                        <li>Cada pregunta tiene 4 opciones de respuesta (A, B, C, D)</li>
                        <li>Solo una respuesta es correcta</li>
                        <li>Al finalizar verás los resultados y explicaciones detalladas</li>
                        <li>Puedes repetir el test las veces que necesites</li>
                    </ul>
                </div>
                
                <div style="text-align: center;">
                    <button class="btn-login" onclick="academiaUmbramed.startTest()" style="width: auto; padding: 15px 40px;">
                        🚀 Iniciar Test
                    </button>
                </div>
            </div>
        `;
    }
    
    startTest() {
        if (!this.currentCategory || !this.questionManager) {
            alert('❌ Error: No se pueden cargar las preguntas. Intenta recargar la página.');
            return;
        }
        
        try {
            // Obtener preguntas de la categoría actual
            const questions = this.questionManager.getQuestionsByCategory(this.currentCategory);
            
            if (!questions || questions.length === 0) {
                alert('❌ No se encontraron preguntas para esta categoría.');
                return;
            }
            
            // Mezclar y seleccionar hasta 20 preguntas
            const shuffledQuestions = this.shuffleArray([...questions]);
            this.currentTestQuestions = shuffledQuestions.slice(0, Math.min(20, shuffledQuestions.length));
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            this.testStartTime = Date.now();
            
            this.currentView = 'test';
            this.render();
        } catch (error) {
            console.error('Error iniciando test:', error);
            alert('❌ Error iniciando el test. Verifica que los datos estén cargados correctamente.');
        }
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    renderTestView() {
        if (!this.currentTestQuestions || this.currentTestQuestions.length === 0) {
            return `
                <div class="dashboard-card">
                    <h2>❌ Error en el test</h2>
                    <p>No se pudieron cargar las preguntas.</p>
                    <button onclick="academiaUmbramed.selectCategory('${this.currentCategory}')">← Volver</button>
                </div>
            `;
        }
        
        const currentQuestion = this.currentTestQuestions[this.currentQuestionIndex];
        const progress = ((this.currentQuestionIndex + 1) / this.currentTestQuestions.length) * 100;
        
        return `
            <div class="breadcrumb">
                <span>📝 Test en progreso</span>
                <div style="float: right;">
                    <span style="background: var(--primary-red); color: white; padding: 5px 15px; border-radius: 15px;">
                        ${this.currentQuestionIndex + 1} / ${this.currentTestQuestions.length}
                    </span>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div style="background: var(--lighter-bg); padding: 10px; border-radius: 10px; margin-bottom: 2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <span style="font-weight: 600;">Progreso del Test</span>
                        <span style="font-weight: 600;">${Math.round(progress)}%</span>
                    </div>
                    <div style="background: #e9ecef; height: 10px; border-radius: 5px; overflow: hidden;">
                        <div style="background: var(--primary-red); height: 100%; width: ${progress}%; transition: width 0.3s ease;"></div>
                    </div>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <h2 style="color: var(--accent-black); font-size: 1.5rem; margin-bottom: 1rem;">
                        Pregunta ${this.currentQuestionIndex + 1}
                    </h2>
                    <div style="background: white; padding: 2rem; border-radius: 10px; border-left: 5px solid var(--primary-red);">
                        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem;">
                            ${currentQuestion.question}
                        </p>
                        
                        <div style="display: grid; gap: 15px;">
                            ${['A', 'B', 'C', 'D'].map(option => `
                                <button onclick="academiaUmbramed.selectAnswer('${option}')" 
                                        class="answer-option" id="option-${option}"
                                        style="background: #f8f9fa; border: 2px solid #e9ecef; 
                                               padding: 15px; border-radius: 10px; text-align: left;
                                               cursor: pointer; transition: all 0.3s ease; font-size: 1rem;">
                                    <strong>${option})</strong> ${currentQuestion.options[option] || 'Opción no disponible'}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <button onclick="academiaUmbramed.previousQuestion()" 
                            ${this.currentQuestionIndex === 0 ? 'disabled' : ''}
                            style="background: #6c757d; color: white; border: none; 
                                   padding: 12px 25px; border-radius: 8px; cursor: pointer;">
                        ← Anterior
                    </button>
                    
                    <div style="text-align: center;">
                        <p style="margin: 0; color: var(--text-light);">
                            Selecciona una respuesta para continuar
                        </p>
                    </div>
                    
                    <button onclick="academiaUmbramed.nextQuestion()" id="next-btn"
                            disabled
                            style="background: #6c757d; color: white; border: none; 
                                   padding: 12px 25px; border-radius: 8px; cursor: not-allowed;">
                        ${this.currentQuestionIndex === this.currentTestQuestions.length - 1 ? 'Finalizar' : 'Siguiente →'}
                    </button>
                </div>
            </div>
        `;
    }
    
    selectAnswer(option) {
        // Marcar la respuesta seleccionada
        document.querySelectorAll('.answer-option').forEach(btn => {
            btn.style.background = '#f8f9fa';
            btn.style.borderColor = '#e9ecef';
        });
        
        const selectedBtn = document.getElementById(`option-${option}`);
        selectedBtn.style.background = 'var(--primary-red)';
        selectedBtn.style.borderColor = 'var(--primary-red)';
        selectedBtn.style.color = 'white';
        
        // Guardar respuesta
        this.userAnswers[this.currentQuestionIndex] = option;
        
        // Habilitar botón siguiente
        const nextBtn = document.getElementById('next-btn');
        nextBtn.disabled = false;
        nextBtn.style.background = 'var(--primary-red)';
        nextBtn.style.cursor = 'pointer';
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.render();
        }
    }
    
    nextQuestion() {
        if (this.userAnswers[this.currentQuestionIndex]) {
            if (this.currentQuestionIndex < this.currentTestQuestions.length - 1) {
                this.currentQuestionIndex++;
                this.render();
            } else {
                this.finishTest();
            }
        }
    }
    
    finishTest() {
        const testEndTime = Date.now();
        const timeSpent = Math.round((testEndTime - this.testStartTime) / 1000);
        
        // Calcular resultados
        let correctAnswers = 0;
        this.currentTestQuestions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correct) {
                correctAnswers++;
            }
        });
        
        const score = Math.round((correctAnswers / this.currentTestQuestions.length) * 100);
        
        this.testResults = {
            totalQuestions: this.currentTestQuestions.length,
            correctAnswers,
            score,
            timeSpent,
            category: this.currentCategory,
            questions: this.currentTestQuestions,
            userAnswers: this.userAnswers,
            date: new Date().toISOString()
        };
        
        // Actualizar estadísticas del usuario
        this.updateUserStats(this.currentUser.id, this.testResults);
        
        this.currentView = 'results';
        this.render();
    }
    
    renderResultsView() {
        const results = this.testResults;
        const passed = results.score >= 70;
        
        return `
            <div class="breadcrumb">
                <span>📊 Resultados del Test</span>
            </div>
            
            <div class="dashboard-card">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 5rem; margin-bottom: 1rem;">
                        ${passed ? '🎉' : '📚'}
                    </div>
                    <h1 style="color: ${passed ? 'var(--primary-red)' : '#6c757d'}; font-size: 3rem; margin: 0;">
                        ${results.score}%
                    </h1>
                    <h2 style="color: var(--accent-black); margin: 0.5rem 0;">
                        ${passed ? '¡Felicidades!' : '¡Sigue practicando!'}
                    </h2>
                    <p style="color: var(--text-light); font-size: 1.2rem;">
                        ${results.correctAnswers} de ${results.totalQuestions} respuestas correctas
                    </p>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">${results.score}%</div>
                        <div class="stat-label">Puntuación</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${results.correctAnswers}/${results.totalQuestions}</div>
                        <div class="stat-label">Correctas</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${Math.round(results.timeSpent / 60)}'</div>
                        <div class="stat-label">Tiempo</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${passed ? '✅' : '❌'}</div>
                        <div class="stat-label">${passed ? 'Aprobado' : 'No Aprobado'}</div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <h3 style="color: var(--accent-black); margin-bottom: 1.5rem;">📝 Revisión Detallada</h3>
                ${results.questions.map((question, index) => {
                    const userAnswer = results.userAnswers[index];
                    const correct = userAnswer === question.correct;
                    
                    return `
                        <div style="background: white; padding: 1.5rem; border-radius: 10px; 
                                   margin-bottom: 1rem; border-left: 5px solid ${correct ? '#28a745' : '#dc3545'};">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <strong>Pregunta ${index + 1}</strong>
                                <span style="background: ${correct ? '#28a745' : '#dc3545'}; 
                                           color: white; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem;">
                                    ${correct ? '✅ Correcta' : '❌ Incorrecta'}
                                </span>
                            </div>
                            
                            <p style="margin-bottom: 1rem; line-height: 1.5;">${question.question}</p>
                            
                            <div style="display: grid; gap: 10px; margin-bottom: 1rem;">
                                ${['A', 'B', 'C', 'D'].map(option => {
                                    let style = 'background: #f8f9fa; border: 1px solid #e9ecef;';
                                    let icon = '';
                                    
                                    if (option === question.correct) {
                                        style = 'background: #d4edda; border: 1px solid #28a745; color: #155724;';
                                        icon = '✅ ';
                                    } else if (option === userAnswer && !correct) {
                                        style = 'background: #f8d7da; border: 1px solid #dc3545; color: #721c24;';
                                        icon = '❌ ';
                                    }
                                    
                                    return `
                                        <div style="${style} padding: 10px; border-radius: 5px;">
                                            ${icon}<strong>${option})</strong> ${question.options[option] || 'N/A'}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                            
                            ${question.explanation ? `
                                <div style="background: #d1ecf1; padding: 15px; border-radius: 8px; border-left: 4px solid #17a2b8;">
                                    <strong style="color: #0c5460;">💡 Explicación:</strong>
                                    <p style="margin: 5px 0 0 0; color: #0c5460;">${question.explanation}</p>
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div style="text-align: center; margin: 2rem 0;">
                <button onclick="academiaUmbramed.retakeTest()" 
                        style="background: var(--primary-red); color: white; border: none; 
                               padding: 15px 30px; border-radius: 10px; margin: 0 10px; font-size: 1.1rem;">
                    🔄 Repetir Test
                </button>
                <button onclick="academiaUmbramed.selectCategory('${this.currentCategory}')" 
                        style="background: #6c757d; color: white; border: none; 
                               padding: 15px 30px; border-radius: 10px; margin: 0 10px; font-size: 1.1rem;">
                    📚 Volver a Categoría
                </button>
                <button onclick="academiaUmbramed.goToDashboard()" 
                        style="background: #28a745; color: white; border: none; 
                               padding: 15px 30px; border-radius: 10px; margin: 0 10px; font-size: 1.1rem;">
                    🏠 Ir al Dashboard
                </button>
            </div>
        `;
    }
    
    retakeTest() {
        this.startTest();
    }
}

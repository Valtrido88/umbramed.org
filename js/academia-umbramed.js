// Academia UMBRAMED - Sistema de Formación Médica Online

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
        
        // Datos de usuario (en producción esto vendría de una base de datos)
        this.users = {
            'admin': {
                password: 'umbramed2025',
                name: 'Administrador',
                role: 'admin',
                courses: ['ope-primaria-2025']
            },
            'medico': {
                password: 'medico123',
                name: 'Dr. Médico',
                role: 'student',
                courses: ['ope-primaria-2025']
            },
            'demo': {
                password: 'demo',
                name: 'Usuario Demo',
                role: 'student',
                courses: ['ope-primaria-2025']
            }
        };
        
        // Configuración de cursos
        this.courses = {
            'ope-primaria-2025': {
                id: 'ope-primaria-2025',
                title: 'OPE PRIMARIA ANDALUCÍA 2025',
                description: 'Preparación completa para las Oposiciones de Atención Primaria de Andalucía 2025',
                totalQuestions: 143,
                categories: [] // Se llenará dinámicamente
            }
        };
    }
    
    static init() {
        const instance = new AcademiaUmbramed();
        instance.loadQuestionData();
        instance.render();
        window.academiaUmbramed = instance;
    }
    
    // Cargar datos de preguntas del archivo original
    async loadQuestionData() {
        try {
            // Cargar los datos desde el test original
            const response = await fetch('test_gratis_oposiciones.html');
            const htmlText = await response.text();
            
            // Extraer el JSON de allData del HTML
            const scriptMatch = htmlText.match(/const allData = (\[[\s\S]*?\]);/);
            if (scriptMatch) {
                const allData = JSON.parse(scriptMatch[1]);
                
                // Inicializar el gestor de preguntas
                this.questionManager = new QuestionManager();
                const categorizedData = this.questionManager.processAllData(allData);
                
                // Actualizar las categorías del curso con datos reales
                this.courses['ope-primaria-2025'].categories = Object.values(categorizedData)
                    .filter(category => category.questions.length > 0)
                    .map(category => ({
                        id: category.id,
                        name: category.name,
                        description: category.description,
                        questions: category.questions.length,
                        icon: category.icon
                    }));
                
                // Actualizar el total de preguntas
                const stats = this.questionManager.getStats();
                this.courses['ope-primaria-2025'].totalQuestions = stats.totalQuestions;
                
                console.log('Datos de preguntas cargados:', stats);
            }
        } catch (error) {
            console.error('Error cargando datos de preguntas:', error);
            // Usar datos por defecto si falla la carga
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
        switch (this.currentView) {
            case 'login':
                return this.renderLoginView();
            case 'dashboard':
                return this.renderDashboardView();
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
                
                <form onsubmit="academiaUmbramed.login(event)">
                    <div class="form-group">
                        <label for="username">Usuario</label>
                        <input type="text" id="username" name="username" required 
                               placeholder="Ingrese su usuario">
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" name="password" required
                               placeholder="Ingrese su contraseña">
                    </div>
                    
                    <button type="submit" class="btn-login">
                        Iniciar Sesión
                    </button>
                </form>
                
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e1e5e9;">
                    <h3 style="color: var(--text-light); font-size: 1rem; margin-bottom: 1rem;">Usuarios de Prueba:</h3>
                    <div style="text-align: left; font-size: 0.9rem; color: var(--text-light);">
                        <p><strong>admin</strong> / umbramed2025 (Administrador)</p>
                        <p><strong>medico</strong> / medico123 (Médico)</p>
                        <p><strong>demo</strong> / demo (Usuario Demo)</p>
                    </div>
                </div>
                
                <div id="login-error" class="hidden" style="background: #f8d7da; color: #721c24; padding: 10px; border-radius: 5px; margin-top: 1rem;">
                </div>
            </div>
        `;
    }
    
    renderDashboardView() {
        const user = this.currentUser;
        return `
            <div class="breadcrumb">
                <span>🏠 Dashboard</span>
            </div>
            
            <div class="dashboard-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <div>
                        <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin: 0;">
                            Bienvenido, ${user.name}
                        </h1>
                        <p style="color: var(--text-light); font-size: 1.1rem; margin: 0.5rem 0;">
                            Academia UMBRAMED - Portal de Formación Médica
                        </p>
                    </div>
                    <button class="btn-secondary" onclick="academiaUmbramed.logout()">
                        Cerrar Sesión
                    </button>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">143</div>
                        <div class="stat-label">Preguntas Totales</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">12</div>
                        <div class="stat-label">Categorías PAI</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">1</div>
                        <div class="stat-label">Cursos Disponibles</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">2025</div>
                        <div class="stat-label">Convocatoria</div>
                    </div>
                </div>
            </div>
            
            <h2 style="color: var(--accent-black); font-size: 2rem; font-weight: 600; margin: 2rem 0 1rem;">
                Cursos Disponibles
            </h2>
            
            ${this.renderCoursesGrid()}
        `;
    }
    
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
    
    login(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('login-error');
        
        if (this.users[username] && this.users[username].password === password) {
            this.isLoggedIn = true;
            this.currentUser = this.users[username];
            this.currentView = 'dashboard';
            this.render();
        } else {
            errorDiv.textContent = 'Usuario o contraseña incorrectos';
            errorDiv.classList.remove('hidden');
        }
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
    
    selectCategory(categoryId) {
        this.currentCategory = categoryId;
        this.currentView = 'category';
        this.render();
    }
    
    renderCategoryView() {
        const course = this.courses[this.currentCourse];
        const category = course.categories.find(c => c.id === this.currentCategory);
        
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
        if (!this.questionManager) {
            alert('Error: Sistema de preguntas no cargado correctamente');
            return;
        }
        
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.testResults = null;
        
        // Obtener preguntas de la categoría seleccionada
        this.currentTestQuestions = this.questionManager.shuffleQuestions(this.currentCategory);
        
        if (this.currentTestQuestions.length === 0) {
            alert('No hay preguntas disponibles para esta categoría');
            return;
        }
        
        this.currentView = 'test';
        this.render();
    }
    
    renderTestView() {
        if (!this.currentTestQuestions || this.currentTestQuestions.length === 0) {
            return this.renderNoQuestionsView();
        }
        
        const course = this.courses[this.currentCourse];
        const category = course.categories.find(c => c.id === this.currentCategory);
        const currentQuestion = this.currentTestQuestions[this.currentQuestionIndex];
        const progress = ((this.currentQuestionIndex + 1) / this.currentTestQuestions.length) * 100;
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.selectCourse('${this.currentCourse}')">${course.title}</a> >
                <a href="#" onclick="academiaUmbramed.selectCategory('${this.currentCategory}')">${category.name}</a> >
                <span>Test - Pregunta ${this.currentQuestionIndex + 1}/${this.currentTestQuestions.length}</span>
            </div>
            
            <div class="dashboard-card">
                <!-- Barra de progreso -->
                <div style="background: #e9ecef; border-radius: 10px; height: 10px; margin-bottom: 2rem; overflow: hidden;">
                    <div style="background: linear-gradient(45deg, var(--primary-red), #667eea); height: 100%; width: ${progress}%; transition: width 0.3s ease;"></div>
                </div>
                
                <!-- Información de la pregunta -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="font-size: 2rem;">${category.icon}</div>
                        <div>
                            <h2 style="color: var(--accent-black); margin: 0; font-size: 1.5rem;">
                                Pregunta ${this.currentQuestionIndex + 1} de ${this.currentTestQuestions.length}
                            </h2>
                            <div style="color: var(--text-light); font-size: 0.9rem;">
                                Dificultad: <span style="color: var(--primary-red); font-weight: 600;">${currentQuestion.difficulty}</span>
                            </div>
                        </div>
                    </div>
                    <div style="background: var(--lighter-bg); padding: 8px 15px; border-radius: 15px; font-size: 0.9rem;">
                        ${Math.round(progress)}% completado
                    </div>
                </div>
                
                <!-- Pregunta -->
                <div style="background: var(--lighter-bg); padding: 2rem; border-radius: 15px; margin-bottom: 2rem;">
                    <h3 style="color: var(--accent-black); font-size: 1.3rem; line-height: 1.6; margin: 0;">
                        ${currentQuestion.questionText}
                    </h3>
                </div>
                
                <!-- Opciones -->
                <div style="margin-bottom: 2rem;">
                    ${currentQuestion.options.map((option, index) => `
                        <div class="option-card" data-index="${index}" onclick="academiaUmbramed.selectAnswer(${index})" 
                             style="background: white; border: 2px solid #e1e5e9; border-radius: 10px; padding: 1.5rem; margin-bottom: 1rem; cursor: pointer; transition: all 0.3s ease;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--lighter-bg); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--accent-black);">
                                    ${String.fromCharCode(65 + index)}
                                </div>
                                <div style="flex: 1; font-size: 1.1rem; color: var(--accent-black);">
                                    ${option.text}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Botones de navegación -->
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        ${this.currentQuestionIndex > 0 ? `
                            <button class="btn-secondary" onclick="academiaUmbramed.previousQuestion()">
                                ← Anterior
                            </button>
                        ` : ''}
                    </div>
                    
                    <div id="selected-answer" style="color: var(--text-light); font-style: italic;">
                        Selecciona una respuesta para continuar
                    </div>
                    
                    <div>
                        <button id="next-btn" class="btn-login" onclick="academiaUmbramed.nextQuestion()" 
                                style="width: auto; padding: 12px 25px; background: #6c757d;" disabled>
                            ${this.currentQuestionIndex === this.currentTestQuestions.length - 1 ? 'Finalizar Test' : 'Siguiente →'}
                        </button>
                    </div>
                </div>
            </div>
            
            <style>
                .option-card:hover {
                    border-color: var(--primary-red) !important;
                    background: var(--lighter-bg) !important;
                }
                .option-card.selected {
                    border-color: var(--primary-red) !important;
                    background: linear-gradient(135deg, rgba(196, 30, 58, 0.1), rgba(102, 126, 234, 0.1)) !important;
                }
            </style>
        `;
    }
    
    renderNoQuestionsView() {
        const course = this.courses[this.currentCourse];
        const category = course.categories.find(c => c.id === this.currentCategory);
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.selectCourse('${this.currentCourse}')">${course.title}</a> >
                <a href="#" onclick="academiaUmbramed.selectCategory('${this.currentCategory}')">${category.name}</a> >
                <span>Sin preguntas</span>
            </div>
            
            <div class="dashboard-card">
                <div style="text-align: center; padding: 3rem;">
                    <div style="font-size: 4rem; margin-bottom: 2rem;">⚠️</div>
                    <h2 style="color: var(--accent-black); margin-bottom: 1rem;">
                        No hay preguntas disponibles
                    </h2>
                    <p style="color: var(--text-light); margin-bottom: 2rem;">
                        No se encontraron preguntas para la categoría <strong>${category.name}</strong>.<br>
                        Es posible que aún no se hayan cargado o categorizado correctamente.
                    </p>
                    
                    <button class="btn-secondary" onclick="academiaUmbramed.selectCategory('${this.currentCategory}')">
                        ← Volver a la Categoría
                    </button>
                </div>
            </div>
        `;
    }
    
    selectAnswer(answerIndex) {
        // Actualizar la respuesta del usuario
        this.userAnswers[this.currentQuestionIndex] = answerIndex;
        
        // Actualizar interfaz
        document.querySelectorAll('.option-card').forEach((card, index) => {
            card.classList.remove('selected');
            if (index === answerIndex) {
                card.classList.add('selected');
            }
        });
        
        // Habilitar botón siguiente y actualizar mensaje
        const nextBtn = document.getElementById('next-btn');
        const selectedAnswerDiv = document.getElementById('selected-answer');
        
        nextBtn.disabled = false;
        nextBtn.style.background = 'linear-gradient(45deg, var(--primary-red), var(--dark-red))';
        
        selectedAnswerDiv.innerHTML = `Respuesta seleccionada: <strong>${String.fromCharCode(65 + answerIndex)}</strong>`;
        selectedAnswerDiv.style.color = 'var(--primary-red)';
    }
    
    nextQuestion() {
        if (this.userAnswers[this.currentQuestionIndex] === undefined) {
            alert('Por favor selecciona una respuesta antes de continuar');
            return;
        }
        
        if (this.currentQuestionIndex === this.currentTestQuestions.length - 1) {
            // Finalizar test
            this.finishTest();
        } else {
            // Ir a siguiente pregunta
            this.currentQuestionIndex++;
            this.render();
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.render();
        }
    }
    
    finishTest() {
        // Calcular resultados
        let correctAnswers = 0;
        const results = [];
        
        this.currentTestQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswerIndex;
            
            if (isCorrect) correctAnswers++;
            
            results.push({
                question: question,
                userAnswer: userAnswer,
                correctAnswer: question.correctAnswerIndex,
                isCorrect: isCorrect
            });
        });
        
        this.testResults = {
            totalQuestions: this.currentTestQuestions.length,
            correctAnswers: correctAnswers,
            score: Math.round((correctAnswers / this.currentTestQuestions.length) * 100),
            results: results,
            completedAt: new Date()
        };
        
        this.currentView = 'results';
        this.render();
    }
    
    renderResultsView() {
        const course = this.courses[this.currentCourse];
        const category = course.categories.find(c => c.id === this.currentCategory);
        const results = this.testResults;
        
        const getScoreColor = (score) => {
            if (score >= 80) return '#28a745';
            if (score >= 60) return '#ffc107';
            return '#dc3545';
        };
        
        const getScoreMessage = (score) => {
            if (score >= 90) return '¡Excelente! Dominas muy bien este tema.';
            if (score >= 80) return '¡Muy bien! Tienes un buen conocimiento.';
            if (score >= 70) return 'Bien. Puedes mejorar con más práctica.';
            if (score >= 60) return 'Aceptable. Te recomendamos repasar.';
            return 'Necesitas estudiar más este tema.';
        };
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.selectCourse('${this.currentCourse}')">${course.title}</a> >
                <a href="#" onclick="academiaUmbramed.selectCategory('${this.currentCategory}')">${category.name}</a> >
                <span>Resultados</span>
            </div>
            
            <!-- Resumen de resultados -->
            <div class="dashboard-card" style="text-align: center; margin-bottom: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">${category.icon}</div>
                <h1 style="color: var(--accent-black); margin-bottom: 0.5rem;">Test Completado</h1>
                <h2 style="color: var(--text-light); font-weight: 400; margin-bottom: 2rem;">${category.name}</h2>
                
                <div style="display: flex; justify-content: center; gap: 3rem; margin-bottom: 2rem;">
                    <div>
                        <div style="font-size: 3rem; font-weight: 700; color: ${getScoreColor(results.score)};">
                            ${results.score}%
                        </div>
                        <div style="color: var(--text-light); font-size: 0.9rem;">Puntuación</div>
                    </div>
                    <div>
                        <div style="font-size: 3rem; font-weight: 700; color: var(--primary-red);">
                            ${results.correctAnswers}/${results.totalQuestions}
                        </div>
                        <div style="color: var(--text-light); font-size: 0.9rem;">Correctas</div>
                    </div>
                </div>
                
                <div style="background: var(--lighter-bg); padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem;">
                    <p style="color: ${getScoreColor(results.score)}; font-weight: 600; font-size: 1.1rem; margin: 0;">
                        ${getScoreMessage(results.score)}
                    </p>
                </div>
                
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button class="btn-login" onclick="academiaUmbramed.startTest()" 
                            style="width: auto; padding: 12px 25px;">
                        🔄 Repetir Test
                    </button>
                    <button class="btn-secondary" onclick="academiaUmbramed.selectCategory('${this.currentCategory}')">
                        ← Volver a Categoría
                    </button>
                    <button class="btn-secondary" onclick="academiaUmbramed.showDetailedResults()">
                        📊 Ver Detalles
                    </button>
                </div>
            </div>
            
            <!-- Resultados detallados (inicialmente ocultos) -->
            <div id="detailed-results" style="display: none;">
                ${results.results.map((result, index) => `
                    <div class="dashboard-card" style="margin-bottom: 1.5rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: white; background: ${result.isCorrect ? '#28a745' : '#dc3545'};">
                                ${result.isCorrect ? '✓' : '✗'}
                            </div>
                            <div>
                                <h3 style="margin: 0; color: var(--accent-black); font-size: 1.2rem;">
                                    Pregunta ${index + 1}
                                </h3>
                                <div style="color: var(--text-light); font-size: 0.9rem;">
                                    ${result.isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta'}
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: var(--lighter-bg); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
                            <p style="color: var(--accent-black); font-weight: 500; margin: 0;">
                                ${result.question.questionText}
                            </p>
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            ${result.question.options.map((option, optionIndex) => `
                                <div style="background: ${
                                    optionIndex === result.correctAnswer ? '#d4edda' : 
                                    optionIndex === result.userAnswer && !result.isCorrect ? '#f8d7da' : 
                                    'white'
                                }; border: 2px solid ${
                                    optionIndex === result.correctAnswer ? '#28a745' : 
                                    optionIndex === result.userAnswer && !result.isCorrect ? '#dc3545' : 
                                    '#e1e5e9'
                                }; border-radius: 8px; padding: 1rem; margin-bottom: 0.5rem;">
                                    <div style="display: flex; align-items: center; gap: 1rem;">
                                        <div style="background: ${
                                            optionIndex === result.correctAnswer ? '#28a745' : 
                                            optionIndex === result.userAnswer && !result.isCorrect ? '#dc3545' : 
                                            'var(--lighter-bg)'
                                        }; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; color: ${
                                            optionIndex === result.correctAnswer || (optionIndex === result.userAnswer && !result.isCorrect) ? 'white' : 'var(--accent-black)'
                                        };">
                                            ${String.fromCharCode(65 + optionIndex)}
                                        </div>
                                        <div style="flex: 1;">
                                            ${option.text}
                                            ${optionIndex === result.correctAnswer ? ' ✓' : ''}
                                            ${optionIndex === result.userAnswer && !result.isCorrect ? ' (Tu respuesta)' : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div style="background: #e7f3ff; border-left: 4px solid #007bff; padding: 1.5rem; border-radius: 5px;">
                            <h4 style="color: #0056b3; margin: 0 0 0.5rem 0; font-size: 1rem;">💡 Explicación:</h4>
                            <p style="color: #0056b3; margin: 0; line-height: 1.6;">
                                ${result.question.rationale}
                            </p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    showDetailedResults() {
        const detailedResults = document.getElementById('detailed-results');
        if (detailedResults.style.display === 'none') {
            detailedResults.style.display = 'block';
            window.scrollTo({ top: detailedResults.offsetTop - 100, behavior: 'smooth' });
        } else {
            detailedResults.style.display = 'none';
        }
    }
}

// Exportar para uso global
window.AcademiaUmbramed = AcademiaUmbramed;

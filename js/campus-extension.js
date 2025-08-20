// Automatización directa de importación de preguntas de microbiología
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/data/examen_microbiologia_importable.json');
        if (response.ok) {
            const questionsBanks = await response.json();
            // Para cada banco, importar automáticamente
            if (Array.isArray(questionsBanks)) {
                questionsBanks.forEach(bank => {
                    // Asume que existe una función global para añadir bancos y preguntas
                    if (window.academiaUmbramed && typeof window.academiaUmbramed.importQuestions === 'function') {
                        window.academiaUmbramed.importQuestions(bank.questions, bank.name);
                    }
                });
                console.log('Importación automática de microbiología completada.');
            }
        }
    } catch (e) {
        console.error('Error en la importación automática de microbiología:', e);
    }
});
// Extensión del sistema Academia UMBRAMED - Campus Virtual de Especialidades

// Limpieza post‑modularización: este archivo conserva solo lógica de gestión y deja las vistas/tests/resultados
// a los módulos en /js/campus/*.js. Se añaden comprobaciones de integridad para detectar módulos ausentes.
Object.assign(AcademiaUmbramed.prototype, {
    showCampus() {
        this.currentView = 'campus';
        // Fallback si el módulo de render no cargó
        if (typeof this.renderCampusView !== 'function') {
            const app = document.getElementById('app');
            if (app) {
                app.innerHTML = '<div class="dashboard-card"><h2>⚠️ Error de carga de módulos</h2><p>No se encontró renderCampusView(). Verifica que js/campus/render.js está incluido antes de campus-extension.js.</p></div>';
            }
            return;
        }
        this.render();
    },
    selectSpecialty(specialtyId) {
        const specialty = this.specialties[specialtyId];
        if (!specialty) return;
        this.currentSpecialty = specialtyId;
        this.currentView = specialty.requiresAccess ? 'specialty-login' : 'specialty';
        this.render();
    },
    async processSpecialtyAccess() {
        const code = document.getElementById('specialty-code').value.trim();
        const justification = document.getElementById('specialty-justification').value.trim();
        const errorDiv = document.getElementById('specialty-error');
        const validCodes = {
            'microbiologia': 'MICRO2025',
            'cirugia-cardiovascular': 'CARDIO2025',
            'anatomia-patologica': 'ANAPAT2025'
        };
        if (validCodes[this.currentSpecialty] === code) {
            await new Promise(r => setTimeout(r, 600));
            if (!this.currentUser.specialtyAccess) this.currentUser.specialtyAccess = [];
            if (!this.currentUser.specialtyAccess.includes(this.currentSpecialty)) {
                this.currentUser.specialtyAccess.push(this.currentSpecialty);
                this.saveUserData();
            }
            this.currentView = 'specialty';
            this.render();
        } else {
            errorDiv.textContent = 'Código de acceso incorrecto.';
            errorDiv.classList.remove('hidden');
        }
    },
    getSpecialtyCourseInfo(courseId, specialty) {
        const courseDatabase = {
            'microbiologia-basica': {
                title: 'Microbiología Básica',
                description: 'Fundamentos de bacteriología y virología',
                icon: '🦠',
                questions: 50,
                duration: '2h'
            },
            'microbiologia-avanzada': {
                title: 'Microbiología Avanzada', 
                description: 'Diagnóstico molecular y resistencias',
                icon: '🧬',
                questions: 75,
                duration: '3h'
            },
            'resistencias-antibioticas': {
                title: 'Resistencias Antibióticas',
                description: 'Mecanismos y estrategias terapéuticas',
                icon: '💊',
                questions: 40,
                duration: '1.5h'
            },
            'cirugia-cardiaca': {
                title: 'Cirugía Cardíaca',
                description: 'Técnicas quirúrgicas cardiovasculares',
                icon: '❤️',
                questions: 60,
                duration: '2.5h'
            },
            'cirugia-vascular': {
                title: 'Cirugía Vascular',
                description: 'Procedimientos vasculares periféricos',
                icon: '🫀',
                questions: 55,
                duration: '2h'
            },
            'trasplante-cardiaco': {
                title: 'Trasplante Cardíaco',
                description: 'Proceso completo de trasplante',
                icon: '🫀',
                questions: 45,
                duration: '2h'
            },
            'histopatologia': {
                title: 'Histopatología',
                description: 'Diagnóstico histológico especializado',
                icon: '🔬',
                questions: 70,
                duration: '3h'
            },
            'citologia': {
                title: 'Citología Diagnóstica',
                description: 'Citología ginecológica y no ginecológica',
                icon: '🧫',
                questions: 50,
                duration: '2h'
            },
            'inmunohistoquimica': {
                title: 'Inmunohistoquímica',
                description: 'Técnicas y aplicaciones diagnósticas',
                icon: '⚗️',
                questions: 45,
                duration: '1.5h'
            },
            'ope-primaria-2025': {
                title: 'OPE Primaria Andalucía 2025',
                description: 'Preparación completa para oposiciones',
                icon: '🏥',
                questions: 143,
                duration: '4h'
            }
        };
        
        return courseDatabase[courseId] || {
            title: courseId,
            description: 'Curso especializado',
            icon: specialty.icon,
            questions: 30,
            duration: '1h'
        };
    },
    
    selectSpecialtyCourse(courseId) {
        // Por ahora, redirigir al curso general
        // En el futuro se puede implementar contenido específico por especialidad
        if (courseId === 'ope-primaria-2025') {
            this.currentCourse = courseId;
            this.currentView = 'course';
        } else {
            alert(`🚧 Curso "${courseId}" en desarrollo.\n\nEste curso especializado estará disponible próximamente con contenido específico de ${this.specialties[this.currentSpecialty].name}.`);
        }
        this.render();
    },
    
    // === FUNCIONES PARA GESTIÓN DE BANCOS DE PREGUNTAS ===
    
    openQuestionBank(bankId) {
        this.currentQuestionBank = bankId;
        const specialty = this.specialties[this.currentSpecialty];
        if(!specialty || !specialty.questionBanks) return;
        const bank = specialty.questionBanks[bankId];
        if(!bank) return;
        // Si hay sourceUrl y aún no se han cargado preguntas, hacer carga perezosa
        if (bank.sourceUrl && (!Array.isArray(bank.questions) || bank.questions.length === 0) && !bank._loading && !bank._loaded){
            bank._loading = true;
            this.currentView = 'question-bank';
            this.render(); // muestra estado de carga
            fetch(bank.sourceUrl)
                .then(r=> r.ok ? r.json(): Promise.reject('HTTP '+r.status))
                .then(data => {
                    // data puede ser array o objeto {questions:[]}
                    const questions = Array.isArray(data) ? data : (data.questions || []);
                    bank.questions = questions;
                    bank._loaded = true;
                    bank._loading = false;
                    // Normalizar si la utilidad existe
                    if(typeof this.normalizeAllQuestionData === 'function') {
                        this.normalizeAllQuestionData();
                    } else {
                        bank.totalQuestions = bank.questions.length;
                    }
                    this.currentView = 'question-bank';
                    this.render();
                })
                .catch(err => {
                    console.error('[UMBRAMED] Error cargando banco perezoso', err);
                    bank._loading = false;
                    bank._loadError = true;
                    this.currentView = 'question-bank';
                    this.render();
                });
        } else {
            this.currentView = 'question-bank';
            this.render();
        }
    },
    
    manageQuestionBank(bankId) {
        this.currentQuestionBank = bankId;
        this.currentView = 'manage-bank';
        this.render();
    },
    
    addNewQuestion() {
        this.currentView = 'add-question';
        this.render();
    },
    
    importQuestions() {
        // Crear input file dinámicamente
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json,.txt,.csv';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                this.processImportedFile(file);
            }
        };
        input.click();
    },
    
    async processImportedFile(file) {
        try {
            const text = await file.text();
            let questions = [];
            
            if (file.name.endsWith('.json')) {
                questions = JSON.parse(text);
            } else if (file.name.endsWith('.csv')) {
                questions = this.parseCSVQuestions(text);
            } else {
                questions = this.parseTextQuestions(text);
            }
            
            this.showImportDialog(questions);
        } catch (error) {
            alert('Error al procesar el archivo: ' + error.message);
        }
    },
    
    parseTextQuestions(text) {
        // Parser simple para texto con formato específico
        const questions = [];
        const blocks = text.split('\n\n');
        blocks.forEach(block => {
            const lines = block.trim().split('\n');
            if (lines.length >= 6) {
                const question = lines[0];
                const options = lines.slice(1, 5);
                const correctMatch = lines[5].match(/(\d+)/);
                const correct = correctMatch ? parseInt(correctMatch[1]) - 1 : 0;
                questions.push({
                    question,
                    options,
                    correct,
                    explanation: lines[6] || '',
                    category: 'Importada',
                    difficulty: 'Intermedio',
                    tags: ['importada']
                });
            }
        });
        return questions;
    },
    showImportDialog(questions) {
        // Mostrar dialog de confirmación de importación
        this.importedQuestions = questions;
        this.currentView = 'import-dialog';
        this.render();
    },
    exportQuestions() {
        const specialty = this.specialties[this.currentSpecialty];
        if (!specialty || !specialty.questionBanks) return;
        
        const allQuestions = {};
        Object.keys(specialty.questionBanks).forEach(bankId => {
            allQuestions[bankId] = specialty.questionBanks[bankId].questions;
        });
        
        const dataStr = JSON.stringify(allQuestions, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `ope-primaria-2025-preguntas-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    },
    analyzeQuestions() {
        this.currentView = 'question-analytics';
        this.render();
    },
    analyzeQuestions() {
        this.currentView = 'question-analytics';
        this.render();
    }
});

// Comprobación de integridad de módulos (render/tests/resultados)
setTimeout(() => {
    if (!AcademiaUmbramed.prototype._renderHelpersVersion) {
        console.warn('[UMBRAMED] Módulo render.js no cargado antes de campus-extension.js');
        AcademiaUmbramed.prototype.renderCampusView = function(){
            return '<div class="dashboard-card"><h2>⚠️ Falta módulo render</h2><p>Incluye js/campus/render.js antes de campus-extension.js.</p></div>';
        };
    }
    if (typeof AcademiaUmbramed.prototype.startRandomTest !== 'function') {
        console.warn('[UMBRAMED] Módulo tests.js no cargado. Se crea placeholder.');
        AcademiaUmbramed.prototype.startRandomTest = function(){ alert('⚠️ tests.js no cargado: no se pueden iniciar tests.'); };
    }
    if (typeof AcademiaUmbramed.prototype.renderTestResultsView !== 'function') {
        console.warn('[UMBRAMED] Módulo results.js no cargado.');
        AcademiaUmbramed.prototype.renderTestResultsView = function(){ return '<div class="dashboard-card"><h2>⚠️ Falta módulo resultados</h2></div>'; };
    }
},0);

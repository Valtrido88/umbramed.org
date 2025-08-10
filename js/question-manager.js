// Extractor y Organizador de Preguntas PAI para Academia UMBRAMED

class QuestionManager {
    constructor() {
        this.categories = {
            'diabetes': {
                id: 'diabetes',
                name: 'Diabetes Mellitus',
                description: 'PAI Diabetes Mellitus - Atención integral',
                icon: '🍯',
                questions: []
            },
            'tabaquismo': {
                id: 'tabaquismo', 
                name: 'Tabaquismo',
                description: 'PAI Tabaquismo - Deshabituación tabáquica',
                icon: '🚭',
                questions: []
            },
            'pluripatologicos': {
                id: 'pluripatologicos',
                name: 'Pacientes Pluripatológicos', 
                description: 'PAI Atención a Pacientes Pluripatológicos',
                icon: '👥',
                questions: []
            },
            'deterioro-cognitivo': {
                id: 'deterioro-cognitivo',
                name: 'Deterioro Cognitivo',
                description: 'PAI Deterioro Cognitivo - Demencias', 
                icon: '🧠',
                questions: []
            },
            'trauma-grave': {
                id: 'trauma-grave',
                name: 'Trauma Grave',
                description: 'PAI Atención al Trauma Grave',
                icon: '🚑', 
                questions: []
            },
            'cancer-colorrectal': {
                id: 'cancer-colorrectal',
                name: 'Cáncer Colorrectal',
                description: 'PAI Cáncer Colorrectal - Cribado y seguimiento',
                icon: '🎗️',
                questions: []
            },
            'parkinson': {
                id: 'parkinson',
                name: 'Enfermedad de Parkinson',
                description: 'PAI Enfermedad de Parkinson',
                icon: '🤝',
                questions: []
            },
            'epoc': {
                id: 'epoc',
                name: 'EPOC',
                description: 'PAI EPOC - Enfermedad Pulmonar Obstructiva Crónica',
                icon: '🫁',
                questions: []
            },
            'transexuales': {
                id: 'transexuales',
                name: 'Atención a Personas Transexuales',
                description: 'PAI Atención a Personas Transexuales',
                icon: '🏳️‍⚧️',
                questions: []
            },
            // 'cuidados-paliativos': {
            //     id: 'cuidados-paliativos',
            //     name: 'Cuidados Paliativos',
            //     description: 'PAI Cuidados Paliativos',
            //     icon: '🕊️',
            //     questions: []
            // },
            'riesgo-vascular': {
                id: 'riesgo-vascular',
                name: 'Riesgo Vascular',
                description: 'PAI Riesgo Vascular',
                icon: '❤️',
                questions: []
            },
            'trastorno-mental': {
                id: 'trastorno-mental',
                name: 'Trastorno Mental Grave',
                description: 'PAI Trastorno Mental Grave',
                icon: '🧘',
                questions: []
            }
        };
    }
    
    // Categorizar preguntas basándose en el nombre del test y contenido
    categorizeQuestion(testName, question) {
        const name = testName.toLowerCase();
        
        if (name.includes('diabetes')) {
            return 'diabetes';
        } else if (name.includes('tabaquismo')) {
            return 'tabaquismo';
        } else if (name.includes('pluripatológicos') || name.includes('pluripatologicos')) {
            return 'pluripatologicos';
        } else if (name.includes('deterioro') && name.includes('cognitivo')) {
            return 'deterioro-cognitivo';
        } else if (name.includes('trauma')) {
            return 'trauma-grave';
        } else if (name.includes('cáncer') || name.includes('cancer') || name.includes('colorrectal')) {
            return 'cancer-colorrectal';
        } else if (name.includes('parkinson')) {
            return 'parkinson';
        } else if (name.includes('epoc')) {
            return 'epoc';
        } else if (name.includes('transexual')) {
            return 'transexuales';
        // } else if (name.includes('cuidados') && name.includes('paliativos')) {
        //     return 'cuidados-paliativos';
        } else if (name.includes('riesgo') && name.includes('vascular')) {
            return 'riesgo-vascular';
        } else if (name.includes('trastorno') && name.includes('mental')) {
            return 'trastorno-mental';
        }
        
        // Si no se puede categorizar automáticamente, intentar por contenido
        const questionText = question.questionText.toLowerCase();
        if (questionText.includes('diabetes') || questionText.includes('glucemia') || questionText.includes('hba1c')) {
            return 'diabetes';
        } else if (questionText.includes('tabaco') || questionText.includes('nicotina') || questionText.includes('dejar de fumar')) {
            return 'tabaquismo';
        } else if (questionText.includes('demencia') || questionText.includes('alzheimer') || questionText.includes('cognitivo')) {
            return 'deterioro-cognitivo';
        }
        
        // Por defecto, categorizar como trauma grave si no se puede determinar
        return 'trauma-grave';
    }
    
    // Procesar todos los datos del test original
    processAllData(allData) {
        allData.forEach(testGroup => {
            const testName = testGroup.name;
            
            testGroup.questions.forEach(question => {
                const category = this.categorizeQuestion(testName, question);
                
                // Formatear la pregunta para la Academia
                const formattedQuestion = {
                    id: question.id,
                    questionText: question.questionText,
                    options: question.options,
                    correctAnswerIndex: question.correctAnswerIndex,
                    rationale: question.rationale,
                    difficulty: question.difficulty || 'Intermedia',
                    sourceTest: testName,
                    category: category
                };
                
                if (this.categories[category]) {
                    this.categories[category].questions.push(formattedQuestion);
                }
            });
        });
        
        // Actualizar contadores
        Object.keys(this.categories).forEach(categoryId => {
            const category = this.categories[categoryId];
            category.questionCount = category.questions.length;
        });
        
        return this.categories;
    }
    
    // Obtener preguntas de una categoría específica
    getQuestionsByCategory(categoryId) {
        return this.categories[categoryId]?.questions || [];
    }
    
    // Obtener todas las categorías con contadores actualizados
    getAllCategories() {
        return this.categories;
    }
    
    // Obtener estadísticas
    getStats() {
        const stats = {
            totalQuestions: 0,
            totalCategories: Object.keys(this.categories).length,
            categoriesWithQuestions: 0,
            categoriesBreakdown: {}
        };
        
        Object.keys(this.categories).forEach(categoryId => {
            const category = this.categories[categoryId];
            const questionCount = category.questions.length;
            
            stats.totalQuestions += questionCount;
            stats.categoriesBreakdown[categoryId] = {
                name: category.name,
                count: questionCount
            };
            
            if (questionCount > 0) {
                stats.categoriesWithQuestions++;
            }
        });
        
        return stats;
    }
    
    // Mezclar preguntas de una categoría
    shuffleQuestions(categoryId) {
        const questions = this.categories[categoryId]?.questions;
        if (!questions) return [];
        
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    // Obtener un test aleatorio de una categoría con N preguntas
    getRandomTest(categoryId, questionCount = 10) {
        const shuffled = this.shuffleQuestions(categoryId);
        return shuffled.slice(0, Math.min(questionCount, shuffled.length));
    }
}

// Exportar para uso global
window.QuestionManager = QuestionManager;

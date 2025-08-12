// Extensión del sistema Academia UMBRAMED - Campus Virtual de Especialidades

// Agregar métodos al prototipo de AcademiaUmbramed
Object.assign(AcademiaUmbramed.prototype, {
    
    showCampus() {
        this.currentView = 'campus';
        this.render();
    },
    
    renderCampusView() {
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <span>🏫 Campus Virtual</span>
            </div>
            
            <div class="dashboard-card">
                <div style="text-align: center; margin-bottom: 3rem;">
                    <h1 style="color: var(--accent-black); font-size: 3rem; font-weight: 700; margin-bottom: 1rem;">
                        🏫 Campus Virtual UMBRAMED
                    </h1>
                    <p style="color: var(--text-light); font-size: 1.3rem; max-width: 600px; margin: 0 auto;">
                        Bienvenido al campus virtual de especialidades médicas. Cada edificio representa una especialidad 
                        con contenido específico, tests especializados y recursos exclusivos.
                    </p>
                </div>
                
                <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); 
                           padding: 3rem; border-radius: 20px; margin-bottom: 2rem;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                               gap: 2rem; max-width: 1000px; margin: 0 auto;">
                        ${Object.values(this.specialties).map(specialty => `
                            <div onclick="academiaUmbramed.selectSpecialty('${specialty.id}')" 
                                 style="background: white; border-radius: 15px; padding: 2rem; 
                                        cursor: pointer; transition: all 0.3s ease; 
                                        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                                        border: 3px solid transparent; position: relative; overflow: hidden;"
                                 onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 20px 40px rgba(0,0,0,0.2)'; this.style.borderColor='${specialty.color}';"
                                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.1)'; this.style.borderColor='transparent';">
                                
                                <div style="background: linear-gradient(45deg, ${specialty.color}, ${specialty.color}90); 
                                           position: absolute; top: 0; right: 0; width: 100px; height: 100px; 
                                           border-radius: 0 15px 0 100px; opacity: 0.1;"></div>
                                
                                <div style="text-align: center; margin-bottom: 1.5rem; position: relative; z-index: 2;">
                                    <div style="font-size: 4rem; margin-bottom: 1rem;">${specialty.building}</div>
                                    <div style="background: ${specialty.color}; color: white; 
                                               border-radius: 50%; width: 60px; height: 60px; 
                                               display: flex; align-items: center; justify-content: center; 
                                               font-size: 2rem; margin: 0 auto; position: absolute; 
                                               top: 20px; right: 20px; box-shadow: 0 5px 15px ${specialty.color}50;">
                                        ${specialty.icon}
                                    </div>
                                </div>
                                
                                <div style="position: relative; z-index: 2;">
                                    <h3 style="color: var(--accent-black); font-size: 1.5rem; 
                                              font-weight: 600; margin-bottom: 0.5rem; text-align: center;">
                                        ${specialty.name}
                                    </h3>
                                    <p style="color: var(--text-light); font-size: 1rem; 
                                             text-align: center; margin-bottom: 1.5rem; line-height: 1.4;">
                                        ${specialty.description}
                                    </p>
                                    
                                    <div style="background: ${specialty.color}15; padding: 1rem; 
                                               border-radius: 10px; border-left: 4px solid ${specialty.color};">
                                        <div style="display: flex; justify-content: space-between; 
                                                   align-items: center; margin-bottom: 0.5rem;">
                                            <span style="font-weight: 600; color: ${specialty.color};">
                                                👨‍⚕️ Jefe de Servicio
                                            </span>
                                            <span style="font-size: 0.9rem; color: var(--text-light);">
                                                ${specialty.head}
                                            </span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; 
                                                   align-items: center; margin-bottom: 0.5rem;">
                                            <span style="font-weight: 600; color: ${specialty.color};">
                                                📚 Cursos Disponibles
                                            </span>
                                            <span style="background: ${specialty.color}; color: white; 
                                                         padding: 3px 10px; border-radius: 15px; font-size: 0.8rem;">
                                                ${specialty.courses.length}
                                            </span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; 
                                                   align-items: center;">
                                            <span style="font-weight: 600; color: ${specialty.color};">
                                                🔐 Acceso Requerido
                                            </span>
                                            <span style="font-size: 0.9rem;">
                                                ${specialty.requiresAccess ? '🔒 Restringido' : '🔓 Libre'}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div style="text-align: center; margin-top: 1.5rem;">
                                        <div style="background: ${specialty.color}; color: white; 
                                                   padding: 12px 25px; border-radius: 25px; 
                                                   font-weight: 600; display: inline-block;">
                                            ${specialty.requiresAccess ? '🔑 Solicitar Acceso' : '🚀 Entrar Ahora'} →
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="dashboard-card">
                    <h3 style="color: var(--accent-black); margin-bottom: 1.5rem; text-align: center;">
                        ℹ️ Información del Campus
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                        <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 10px; 
                                   border-left: 5px solid #28a745;">
                            <h4 style="color: #155724; margin-bottom: 0.5rem;">🔓 Acceso Libre</h4>
                            <p style="color: #155724; margin: 0; font-size: 0.95rem;">
                                Algunas especialidades tienen acceso libre para todos los usuarios registrados.
                            </p>
                        </div>
                        <div style="background: #fff3cd; padding: 1.5rem; border-radius: 10px; 
                                   border-left: 5px solid #ffc107;">
                            <h4 style="color: #856404; margin-bottom: 0.5rem;">🔒 Acceso Restringido</h4>
                            <p style="color: #856404; margin: 0; font-size: 0.95rem;">
                                Especialidades avanzadas requieren solicitar acceso específico.
                            </p>
                        </div>
                        <div style="background: #d1ecf1; padding: 1.5rem; border-radius: 10px; 
                                   border-left: 5px solid #17a2b8;">
                            <h4 style="color: #0c5460; margin-bottom: 0.5rem;">🎓 Contenido Especializado</h4>
                            <p style="color: #0c5460; margin: 0; font-size: 0.95rem;">
                                Cada especialidad tiene tests, casos clínicos y recursos únicos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    selectSpecialty(specialtyId) {
        const specialty = this.specialties[specialtyId];
        if (!specialty) return;
        
        this.currentSpecialty = specialtyId;
        
        if (specialty.requiresAccess) {
            this.currentView = 'specialty-login';
        } else {
            this.currentView = 'specialty';
        }
        this.render();
    },
    
    renderSpecialtyLoginView() {
        const specialty = this.specialties[this.currentSpecialty];
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <span>${specialty.name}</span>
            </div>
            
            <div class="login-card" style="max-width: 600px;">
                <div style="background: ${specialty.color}; color: white; 
                           border-radius: 50%; width: 100px; height: 100px; 
                           display: flex; align-items: center; justify-content: center; 
                           font-size: 3rem; margin: 0 auto 2rem;">
                    ${specialty.icon}
                </div>
                
                <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">
                    ${specialty.name}
                </h1>
                <p style="color: var(--text-light); font-size: 1.2rem; margin-bottom: 2rem;">
                    Acceso Especializado Requerido
                </p>
                
                <div style="background: ${specialty.color}15; padding: 2rem; border-radius: 15px; 
                           border-left: 5px solid ${specialty.color}; margin-bottom: 2rem;">
                    <h3 style="color: ${specialty.color}; margin-bottom: 1rem;">📋 Información de la Especialidad</h3>
                    <p style="margin-bottom: 1rem; line-height: 1.6;">${specialty.description}</p>
                    <div style="display: grid; gap: 10px;">
                        <div><strong>👨‍⚕️ Jefe de Servicio:</strong> ${specialty.head}</div>
                        <div><strong>📚 Cursos Disponibles:</strong> ${specialty.courses.length}</div>
                        <div><strong>🏢 Ubicación:</strong> ${specialty.building} Edificio ${specialty.name}</div>
                    </div>
                </div>
                
                <form onsubmit="academiaUmbramed.handleSpecialtyAccess(event)">
                    <div class="form-group">
                        <label for="specialty-code">Código de Acceso de la Especialidad</label>
                        <input type="password" id="specialty-code" name="code" required 
                               placeholder="Código proporcionado por el jefe de servicio">
                    </div>
                    
                    <div class="form-group">
                        <label for="specialty-justification">Justificación de Acceso</label>
                        <textarea id="specialty-justification" name="justification" 
                                 placeholder="Explica por qué necesitas acceso a esta especialidad..." 
                                 rows="3" style="width: 100%; padding: 12px; border: 2px solid #e1e5e9; 
                                               border-radius: 8px; font-size: 1rem; resize: vertical;"></textarea>
                    </div>
                    
                    <button type="submit" class="btn-login" style="background: ${specialty.color};">
                        🔑 Solicitar Acceso
                    </button>
                </form>
                
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e1e5e9;">
                    <h4 style="color: var(--text-light); font-size: 1rem; margin-bottom: 1rem;">
                        💡 Códigos de Demostración:
                    </h4>
                    <div style="text-align: left; font-size: 0.9rem; color: var(--text-light);">
                        <p><strong>Microbiología:</strong> MICRO2025</p>
                        <p><strong>Cirugía Cardiovascular:</strong> CARDIO2025</p>
                        <p><strong>Anatomía Patológica:</strong> ANAPAT2025</p>
                    </div>
                </div>
                
                <div style="margin-top: 1rem; text-align: center;">
                    <button onclick="academiaUmbramed.showCampus()" 
                            style="background: none; border: none; color: var(--primary-red); 
                                   text-decoration: underline; cursor: pointer;">
                        ← Volver al Campus
                    </button>
                </div>
                
                <div id="specialty-error" class="hidden" style="background: #f8d7da; color: #721c24; 
                     padding: 10px; border-radius: 5px; margin-top: 1rem;">
                </div>
            </div>
        `;
    },
    
    async handleSpecialtyAccess(event) {
        event.preventDefault();
        const code = document.getElementById('specialty-code').value;
        const justification = document.getElementById('specialty-justification').value;
        const errorDiv = document.getElementById('specialty-error');
        
        const specialty = this.specialties[this.currentSpecialty];
        const validCodes = {
            'microbiologia': 'MICRO2025',
            'cirugia-cardiovascular': 'CARDIO2025',
            'anatomia-patologica': 'ANAPAT2025'
        };
        
        if (validCodes[this.currentSpecialty] === code) {
            // Simular proceso de verificación
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Otorgar acceso
            if (!this.currentUser.specialtyAccess) {
                this.currentUser.specialtyAccess = [];
            }
            
            if (!this.currentUser.specialtyAccess.includes(this.currentSpecialty)) {
                this.currentUser.specialtyAccess.push(this.currentSpecialty);
                this.saveUserData();
            }
            
            this.currentView = 'specialty';
            this.render();
        } else {
            errorDiv.textContent = 'Código de acceso incorrecto. Contacta con el jefe de servicio.';
            errorDiv.classList.remove('hidden');
        }
    },
    
    renderSpecialtyView() {
        const specialty = this.specialties[this.currentSpecialty];
        
        // Si es tu campus personal de OPE, mostrar interfaz especial
        if (specialty.isPersonal && this.currentSpecialty === 'ope-primaria-2025') {
            return this.renderPersonalOPECampus(specialty);
        }
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <span>${specialty.name}</span>
            </div>
            
            <div class="dashboard-card">
                <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
                    <div style="background: ${specialty.color}; color: white; 
                               border-radius: 15px; padding: 2rem; text-align: center;">
                        <div style="font-size: 4rem; margin-bottom: 0.5rem;">${specialty.building}</div>
                        <div style="font-size: 2rem;">${specialty.icon}</div>
                    </div>
                    <div style="flex: 1;">
                        <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin: 0;">
                            ${specialty.name}
                        </h1>
                        <p style="color: var(--text-light); font-size: 1.2rem; margin: 0.5rem 0 1rem;">
                            ${specialty.description}
                        </p>
                        <div style="display: flex; gap: 2rem;">
                            <div style="color: ${specialty.color}; font-weight: 600;">
                                👨‍⚕️ ${specialty.head}
                            </div>
                            <div style="color: ${specialty.color}; font-weight: 600;">
                                📚 ${specialty.courses.length} cursos
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: ${specialty.color}15; padding: 2rem; border-radius: 15px; 
                           border-left: 5px solid ${specialty.color}; margin-bottom: 2rem;">
                    <h3 style="color: ${specialty.color}; margin-bottom: 1rem;">
                        🎯 Bienvenido a ${specialty.name}
                    </h3>
                    <p style="line-height: 1.6; margin-bottom: 1rem;">
                        Has accedido exitosamente a la especialidad de ${specialty.name}. 
                        Aquí encontrarás contenido específico, casos clínicos especializados 
                        y tests adaptados a esta área médica.
                    </p>
                    <div style="background: white; padding: 1.5rem; border-radius: 10px;">
                        <h4 style="margin-bottom: 1rem; color: ${specialty.color};">📋 Contenido Disponible:</h4>
                        <ul style="line-height: 1.8; margin: 0; padding-left: 20px;">
                            <li>Tests especializados de ${specialty.name}</li>
                            <li>Casos clínicos reales del servicio</li>
                            <li>Protocolos y guías específicas</li>
                            <li>Material multimedia actualizado</li>
                            <li>Recursos bibliográficos especializados</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <h2 style="color: var(--accent-black); font-size: 2rem; font-weight: 600; margin: 2rem 0 1rem;">
                📚 Cursos de ${specialty.name}
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem;">
                ${specialty.courses.map(courseId => {
                    const courseInfo = this.getSpecialtyCourseInfo(courseId, specialty);
                    return `
                        <div class="course-card" onclick="academiaUmbramed.selectSpecialtyCourse('${courseId}')"
                             style="background: linear-gradient(135deg, ${specialty.color} 0%, ${specialty.color}DD 100%);">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                <div style="font-size: 3rem;">${courseInfo.icon}</div>
                                <div>
                                    <h3 style="font-size: 1.8rem; font-weight: 700; margin: 0;">
                                        ${courseInfo.title}
                                    </h3>
                                    <p style="font-size: 1rem; opacity: 0.9; margin: 0.5rem 0;">
                                        ${courseInfo.description}
                                    </p>
                                </div>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div style="opacity: 0.8;">
                                    📝 ${courseInfo.questions} preguntas | ⏱️ ${courseInfo.duration}
                                </div>
                                <div style="background: rgba(255,255,255,0.2); padding: 8px 15px; border-radius: 20px; font-weight: 600;">
                                    Acceder →
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    },
    
    renderPersonalOPECampus(specialty) {
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <span>${specialty.name}</span>
            </div>
            
            <div class="dashboard-card" style="background: linear-gradient(135deg, ${specialty.color}15 0%, ${specialty.color}05 100%);">
                <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
                    <div style="background: ${specialty.color}; color: white; 
                               border-radius: 20px; padding: 2rem; text-align: center; position: relative; overflow: hidden;">
                        <div style="position: absolute; top: -20px; right: -20px; width: 80px; height: 80px; 
                                   background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
                        <div style="font-size: 4rem; margin-bottom: 0.5rem; position: relative; z-index: 2;">${specialty.building}</div>
                        <div style="font-size: 2rem; position: relative; z-index: 2;">${specialty.icon}</div>
                        <div style="position: absolute; bottom: 5px; right: 10px; font-size: 0.8rem; 
                                   background: rgba(255,255,255,0.2); padding: 3px 8px; border-radius: 10px;">
                            PRIVADO
                        </div>
                    </div>
                    <div style="flex: 1;">
                        <h1 style="color: var(--accent-black); font-size: 2.8rem; font-weight: 700; margin: 0;">
                            🎯 ${specialty.name}
                        </h1>
                        <h2 style="color: ${specialty.color}; font-size: 1.5rem; font-weight: 600; margin: 0.5rem 0;">
                            Campus Virtual Privado
                        </h2>
                        <p style="color: var(--text-light); font-size: 1.2rem; margin: 0.5rem 0 1rem;">
                            ${specialty.description}
                        </p>
                        <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                            <div style="color: ${specialty.color}; font-weight: 600;">
                                🏛️ 3 Grandes Depósitos
                            </div>
                            <div style="color: ${specialty.color}; font-weight: 600;">
                                🔒 Acceso Exclusivo
                            </div>
                            <div style="color: ${specialty.color}; font-weight: 600;">
                                📊 Sistema IA Integrado
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: white; padding: 2rem; border-radius: 15px; margin-bottom: 2rem; 
                           box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    <h3 style="color: ${specialty.color}; margin-bottom: 1rem; text-align: center; font-size: 1.8rem;">
                        🏛️ LOS 3 GRANDES DEPÓSITOS DE EXÁMENES
                    </h3>
                    <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem; font-size: 1.1rem;">
                        Tu campus privado cuenta con tres depósitos especializados que cubren toda la preparación para la OPE 2025
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                        <div style="text-align: center; padding: 1.5rem; background: ${specialty.questionBanks['historical-exams'].color}15; border-radius: 15px; border: 2px solid ${specialty.questionBanks['historical-exams'].color};">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">${specialty.questionBanks['historical-exams'].icon}</div>
                            <div style="font-weight: 700; color: ${specialty.questionBanks['historical-exams'].color}; font-size: 1.3rem; margin-bottom: 0.5rem;">
                                DEPÓSITO 1
                            </div>
                            <div style="font-weight: 600; color: var(--accent-black); margin-bottom: 0.5rem;">
                                Exámenes de Otros Años
                            </div>
                            <div style="font-size: 0.9rem; color: var(--text-light);">
                                Preguntas reales de convocatorias anteriores
                            </div>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: ${specialty.questionBanks['pai-questions'].color}15; border-radius: 15px; border: 2px solid ${specialty.questionBanks['pai-questions'].color};">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">${specialty.questionBanks['pai-questions'].icon}</div>
                            <div style="font-weight: 700; color: ${specialty.questionBanks['pai-questions'].color}; font-size: 1.3rem; margin-bottom: 0.5rem;">
                                DEPÓSITO 2
                            </div>
                            <div style="font-weight: 600; color: var(--accent-black); margin-bottom: 0.5rem;">
                                Preguntas PAI con IA
                            </div>
                            <div style="font-size: 0.9rem; color: var(--text-light);">
                                Generadas por IA basadas en PAIs
                            </div>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: ${specialty.questionBanks['simulacros'].color}15; border-radius: 15px; border: 2px solid ${specialty.questionBanks['simulacros'].color};">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">${specialty.questionBanks['simulacros'].icon}</div>
                            <div style="font-weight: 700; color: ${specialty.questionBanks['simulacros'].color}; font-size: 1.3rem; margin-bottom: 0.5rem;">
                                DEPÓSITO 3
                            </div>
                            <div style="font-weight: 600; color: var(--accent-black); margin-bottom: 0.5rem;">
                                Simulacros Completos
                            </div>
                            <div style="font-size: 0.9rem; color: var(--text-light);">
                                Tests bajo condiciones reales
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h2 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin: 3rem 0 2rem; text-align: center;">
                🏛️ ACCESO A LOS DEPÓSITOS DE EXÁMENES
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                ${Object.values(specialty.questionBanks).map((bank, index) => `
                    <div onclick="academiaUmbramed.openQuestionBank('${bank.id}')" 
                         style="background: white; border-radius: 25px; padding: 2.5rem; cursor: pointer; 
                               transition: all 0.4s ease; box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                               border: 4px solid ${bank.color}; position: relative; overflow: hidden;"
                         onmouseover="this.style.transform='translateY(-15px) scale(1.02)'; this.style.boxShadow='0 25px 50px rgba(0,0,0,0.2)';"
                         onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 15px 40px rgba(0,0,0,0.1)';">
                        
                        <div style="background: linear-gradient(135deg, ${bank.color}, ${bank.color}90); 
                                   position: absolute; top: 0; right: 0; width: 120px; height: 120px; 
                                   border-radius: 0 25px 0 100px; opacity: 0.1;"></div>
                        
                        <div style="position: absolute; top: 15px; left: 20px; background: ${bank.color}; 
                                   color: white; padding: 8px 15px; border-radius: 20px; font-weight: 700; font-size: 0.9rem;">
                            DEPÓSITO ${index + 1}
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 2rem; margin: 2rem 0 2rem; position: relative; z-index: 2;">
                            <div style="background: linear-gradient(135deg, ${bank.color}, ${bank.color}DD); color: white; border-radius: 20px; 
                                       width: 100px; height: 100px; display: flex; align-items: center; 
                                       justify-content: center; font-size: 3rem; box-shadow: 0 10px 25px ${bank.color}40;">
                                ${bank.icon}
                            </div>
                            <div style="flex: 1;">
                                <h3 style="color: var(--accent-black); font-size: 1.8rem; font-weight: 700; margin: 0 0 0.5rem;">
                                    ${bank.name}
                                </h3>
                                <p style="color: var(--text-light); font-size: 1rem; margin: 0; line-height: 1.5;">
                                    ${bank.description}
                                </p>
                            </div>
                        </div>
                        
                        <div style="position: relative; z-index: 2;">
                            <div style="background: ${bank.color}15; padding: 2rem; border-radius: 20px; 
                                       border-left: 6px solid ${bank.color}; margin-bottom: 2rem;">
                                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                                    <div style="text-align: center;">
                                        <div style="font-size: 2.2rem; font-weight: 700; color: ${bank.color};">
                                            ${bank.totalQuestions}
                                        </div>
                                        <div style="font-size: 0.9rem; color: var(--text-light); font-weight: 600;">Preguntas</div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="font-size: 2.2rem; font-weight: 700; color: ${bank.color};">
                                            ${bank.categories.length}
                                        </div>
                                        <div style="font-size: 0.9rem; color: var(--text-light); font-weight: 600;">Categorías</div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="font-size: 2.2rem; font-weight: 700; color: ${bank.color};">
                                            ${bank.tags.length}
                                        </div>
                                        <div style="font-size: 0.9rem; color: var(--text-light); font-weight: 600;">Etiquetas</div>
                                    </div>
                                </div>
                                
                                <div style="margin-bottom: 1.5rem;">
                                    <div style="font-weight: 700; color: ${bank.color}; margin-bottom: 1rem; font-size: 1.1rem;">
                                        📂 Áreas de Contenido:
                                    </div>
                                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                        ${bank.categories.slice(0, 4).map(cat => `
                                            <span style="background: ${bank.color}; color: white; padding: 6px 12px; 
                                                        border-radius: 15px; font-size: 0.8rem; font-weight: 600;">${cat}</span>
                                        `).join('')}
                                        ${bank.categories.length > 4 ? `
                                            <span style="background: ${bank.color}30; color: ${bank.color}; padding: 6px 12px; 
                                                        border-radius: 15px; font-size: 0.8rem; font-weight: 600;">
                                                +${bank.categories.length - 4} más
                                            </span>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                            
                            <div style="display: flex; gap: 1rem;">
                                <div style="background: linear-gradient(135deg, ${bank.color}, ${bank.color}DD); color: white; 
                                           padding: 15px 25px; border-radius: 25px; font-weight: 700; flex: 1; text-align: center;
                                           box-shadow: 0 8px 20px ${bank.color}40; font-size: 1.1rem;">
                                    🚀 ACCEDER AL DEPÓSITO
                                </div>
                                <div onclick="event.stopPropagation(); academiaUmbramed.manageQuestionBank('${bank.id}')"
                                     style="background: white; border: 3px solid ${bank.color}; color: ${bank.color}; 
                                           padding: 15px 20px; border-radius: 25px; font-weight: 700; font-size: 1.1rem;">
                                    ⚙️ GESTIONAR
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); 
                       padding: 3rem; border-radius: 25px; margin-bottom: 2rem;">
                <h3 style="color: var(--accent-black); text-align: center; margin-bottom: 2rem; font-size: 2rem; font-weight: 700;">
                    🔧 HERRAMIENTAS DE GESTIÓN DEL CAMPUS
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <button onclick="academiaUmbramed.addNewQuestion()" 
                            style="background: linear-gradient(135deg, #28a745, #20c997); color: white; border: none; 
                                   padding: 2rem; border-radius: 20px; cursor: pointer; font-weight: 700; font-size: 1.1rem;
                                   transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(40,167,69,0.3);"
                            onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 15px 35px rgba(40,167,69,0.4)';"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 25px rgba(40,167,69,0.3)';">
                        ➕ AGREGAR NUEVA PREGUNTA
                        <div style="font-size: 0.9rem; opacity: 0.9; margin-top: 0.5rem;">
                            Crear preguntas personalizadas
                        </div>
                    </button>
                    <button onclick="academiaUmbramed.importQuestions()" 
                            style="background: linear-gradient(135deg, #17a2b8, #6f42c1); color: white; border: none; 
                                   padding: 2rem; border-radius: 20px; cursor: pointer; font-weight: 700; font-size: 1.1rem;
                                   transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(23,162,184,0.3);"
                            onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 15px 35px rgba(23,162,184,0.4)';"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 25px rgba(23,162,184,0.3)';">
                        📥 IMPORTAR PREGUNTAS MASIVO
                        <div style="font-size: 0.9rem; opacity: 0.9; margin-top: 0.5rem;">
                            JSON, CSV, TXT soportados
                        </div>
                    </button>
                    <button onclick="academiaUmbramed.exportQuestions()" 
                            style="background: linear-gradient(135deg, #6f42c1, #e83e8c); color: white; border: none; 
                                   padding: 2rem; border-radius: 20px; cursor: pointer; font-weight: 700; font-size: 1.1rem;
                                   transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(111,66,193,0.3);"
                            onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 15px 35px rgba(111,66,193,0.4)';"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 25px rgba(111,66,193,0.3)';">
                        📤 EXPORTAR TODO EL CAMPUS
                        <div style="font-size: 0.9rem; opacity: 0.9; margin-top: 0.5rem;">
                            Backup completo en JSON
                        </div>
                    </button>
                    <button onclick="academiaUmbramed.analyzeQuestions()" 
                            style="background: linear-gradient(135deg, #dc3545, #fd7e14); color: white; border: none; 
                                   padding: 2rem; border-radius: 20px; cursor: pointer; font-weight: 700; font-size: 1.1rem;
                                   transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(220,53,69,0.3);"
                            onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 15px 35px rgba(220,53,69,0.4)';"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 25px rgba(220,53,69,0.3)';">
                        📊 ANÁLISIS COMPLETO
                        <div style="font-size: 0.9rem; opacity: 0.9; margin-top: 0.5rem;">
                            Estadísticas avanzadas
                        </div>
                    </button>
                </div>
            </div>
        `;
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
        this.currentView = 'question-bank';
        this.render();
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
    
    parseCSVQuestions(csvText) {
        const lines = csvText.split('\n');
        const questions = [];
        
        for (let i = 1; i < lines.length; i++) { // Saltar header
            const parts = lines[i].split(',');
            if (parts.length >= 6) {
                questions.push({
                    question: parts[0],
                    options: [parts[1], parts[2], parts[3], parts[4]],
                    correct: parseInt(parts[5]) || 0,
                    explanation: parts[6] || '',
                    category: parts[7] || 'Sin categoría',
                    difficulty: parts[8] || 'Intermedio',
                    tags: parts[9] ? parts[9].split(';') : []
                });
            }
        }
        
        return questions;
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
    
    renderQuestionBankView() {
        const specialty = this.specialties[this.currentSpecialty];
        const bank = specialty.questionBanks[this.currentQuestionBank];
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <a href="#" onclick="academiaUmbramed.selectSpecialty('${this.currentSpecialty}')">${specialty.name}</a> >
                <span>${bank.name}</span>
            </div>
            
            <div class="dashboard-card">
                <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
                    <div style="background: ${bank.color}; color: white; border-radius: 15px; 
                               padding: 2rem; text-align: center; position: relative;">
                        <div style="font-size: 4rem; margin-bottom: 0.5rem;">${bank.icon}</div>
                        <div style="position: absolute; top: 5px; right: 5px; background: rgba(255,255,255,0.2); 
                                   padding: 3px 8px; border-radius: 10px; font-size: 0.7rem;">
                            ${bank.totalQuestions} preguntas
                        </div>
                    </div>
                    <div style="flex: 1;">
                        <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin: 0;">
                            ${bank.name}
                        </h1>
                        <p style="color: var(--text-light); font-size: 1.2rem; margin: 0.5rem 0 1rem;">
                            ${bank.description}
                        </p>
                        <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                            <div style="color: ${bank.color}; font-weight: 600;">
                                📊 ${bank.totalQuestions} preguntas totales
                            </div>
                            <div style="color: ${bank.color}; font-weight: 600;">
                                📂 ${bank.categories.length} categorías
                            </div>
                            <div style="color: ${bank.color}; font-weight: 600;">
                                🏷️ ${bank.tags.length} etiquetas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                ${bank.categories.map(category => `
                    <div onclick="academiaUmbramed.filterByCategory('${category}')"
                         style="background: white; border-radius: 15px; padding: 1.5rem; cursor: pointer;
                               border-left: 5px solid ${bank.color}; transition: all 0.3s ease;
                               box-shadow: 0 5px 15px rgba(0,0,0,0.1);"
                         onmouseover="this.style.transform='translateY(-5px)'"
                         onmouseout="this.style.transform='translateY(0)'">
                        <h3 style="color: ${bank.color}; margin: 0 0 0.5rem; font-size: 1.3rem;">
                            📁 ${category}
                        </h3>
                        <p style="color: var(--text-light); margin: 0; font-size: 0.9rem;">
                            ${Math.floor(Math.random() * 50) + 10} preguntas disponibles
                        </p>
                        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <div style="background: ${bank.color}; color: white; padding: 8px 15px; 
                                       border-radius: 20px; text-align: center; font-weight: 600; font-size: 0.9rem;">
                                Practicar →
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="text-align: center; margin: 2rem 0;">
                <button onclick="academiaUmbramed.startRandomTest('${bank.id}')"
                        style="background: ${bank.color}; color: white; border: none; 
                               padding: 1rem 2rem; border-radius: 25px; font-size: 1.2rem; 
                               font-weight: 600; cursor: pointer; margin-right: 1rem;
                               box-shadow: 0 10px 25px ${bank.color}50;">
                    🚀 Test Aleatorio
                </button>
                <button onclick="academiaUmbramed.manageQuestionBank('${bank.id}')"
                        style="background: white; color: ${bank.color}; border: 2px solid ${bank.color}; 
                               padding: 1rem 2rem; border-radius: 25px; font-size: 1.2rem; 
                               font-weight: 600; cursor: pointer;">
                    ⚙️ Gestionar Banco
                </button>
            </div>
        `;
    },
    
    // === FUNCIONES PARA TESTS Y SIMULACROS ===
    
    filterByCategory(category) {
        // Filtrar preguntas por categoría específica
        this.currentCategory = category;
        this.startCategoryTest(category, this.currentQuestionBank);
    },
    
    startRandomTest(bankId) {
        const specialty = this.specialties[this.currentSpecialty];
        const bank = specialty.questionBanks[bankId];
        
        if (!bank.questions || bank.questions.length === 0) {
            alert('⚠️ Este banco no tiene preguntas disponibles.\n\nAgrega preguntas primero para poder realizar el test.');
            return;
        }
        
        // Configurar test aleatorio
        this.currentTest = {
            bankId: bankId,
            bankName: bank.name,
            questions: this.shuffleArray([...bank.questions]),
            currentQuestionIndex: 0,
            answers: [],
            startTime: new Date(),
            isRandom: true
        };
        
        this.currentView = 'test';
        this.render();
    },
    
    startCategoryTest(category, bankId) {
        const specialty = this.specialties[this.currentSpecialty];
        const bank = specialty.questionBanks[bankId];
        
        const categoryQuestions = bank.questions.filter(q => q.category === category);
        
        if (categoryQuestions.length === 0) {
            alert(`⚠️ No hay preguntas disponibles en la categoría "${category}".\n\nAgrega preguntas a esta categoría primero.`);
            return;
        }
        
        // Configurar test por categoría
        this.currentTest = {
            bankId: bankId,
            bankName: bank.name,
            category: category,
            questions: this.shuffleArray([...categoryQuestions]),
            currentQuestionIndex: 0,
            answers: [],
            startTime: new Date(),
            isCategory: true
        };
        
        this.currentView = 'test';
        this.render();
    },
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },
    
    selectTestAnswer(answerIndex, element) {
        // Guardar la respuesta seleccionada
        if (!this.currentTest.answers) {
            this.currentTest.answers = [];
        }
        
        this.currentTest.answers[this.currentTest.currentQuestionIndex] = answerIndex;
        
        // Actualizar visualmente la selección
        const allLabels = element.parentNode.querySelectorAll('label');
        allLabels.forEach(label => {
            label.style.borderColor = '#e9ecef';
            label.style.background = 'white';
        });
        
        const bank = this.specialties[this.currentSpecialty].questionBanks[this.currentTest.bankId];
        element.style.borderColor = bank.color;
        element.style.background = bank.color + '20';
    },
    
    previousQuestion() {
        if (this.currentTest.currentQuestionIndex > 0) {
            this.currentTest.currentQuestionIndex--;
            this.render();
        }
    },
    
    nextQuestion() {
        if (this.currentTest.currentQuestionIndex < this.currentTest.questions.length - 1) {
            this.currentTest.currentQuestionIndex++;
            this.render();
        }
    },
    
    exitTest() {
        if (confirm('¿Estás seguro de que quieres salir del test?\n\nSe perderá todo el progreso actual.')) {
            this.currentTest = null;
            this.openQuestionBank(this.currentQuestionBank);
        }
    },
    
    finishTest() {
        const unanswered = this.currentTest.questions.length - this.currentTest.answers.filter(a => a !== undefined).length;
        
        if (unanswered > 0) {
            if (!confirm(`Tienes ${unanswered} pregunta(s) sin responder.\n\n¿Quieres finalizar el test de todas formas?`)) {
                return;
            }
        }
        
        // Calcular resultados
        this.calculateTestResults();
        this.currentView = 'test-results';
        this.render();
    },
    
    calculateTestResults() {
        const test = this.currentTest;
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;
        
        const results = test.questions.map((question, index) => {
            const userAnswer = test.answers[index];
            const isCorrect = userAnswer === question.correct;
            
            if (userAnswer === undefined) {
                unanswered++;
                return { ...question, userAnswer: null, isCorrect: false, status: 'unanswered' };
            } else if (isCorrect) {
                correct++;
                return { ...question, userAnswer, isCorrect: true, status: 'correct' };
            } else {
                incorrect++;
                return { ...question, userAnswer, isCorrect: false, status: 'incorrect' };
            }
        });
        
        const endTime = new Date();
        const totalTime = Math.floor((endTime - test.startTime) / 1000);
        const percentage = ((correct / test.questions.length) * 100).toFixed(1);
        
        this.testResults = {
            ...test,
            endTime,
            totalTime,
            correct,
            incorrect,
            unanswered,
            percentage,
            results,
            passed: percentage >= 70 // Criterio de aprobado
    },
    
    },
    
    renderTestView() {
        if (!this.currentTest || !this.currentTest.questions) {
            return '<div>Error: No hay test configurado</div>';
        }
        
        const test = this.currentTest;
        const currentQuestion = test.questions[test.currentQuestionIndex];
        const progress = ((test.currentQuestionIndex + 1) / test.questions.length) * 100;
        const timeElapsed = Math.floor((new Date() - test.startTime) / 1000);
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        
        const specialty = this.specialties[this.currentSpecialty];
        const bank = specialty.questionBanks[test.bankId];
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <a href="#" onclick="academiaUmbramed.selectSpecialty('${this.currentSpecialty}')">${specialty.name}</a> >
                <a href="#" onclick="academiaUmbramed.openQuestionBank('${test.bankId}')">${test.bankName}</a> >
                <span>Test en Curso</span>
            </div>
            
            <div class="dashboard-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; 
                           padding: 1.5rem; background: ${bank.color}15; border-radius: 15px; border-left: 5px solid ${bank.color};">
                    <div>
                        <h1 style="color: var(--accent-black); font-size: 1.8rem; font-weight: 700; margin: 0;">
                            ${bank.icon} ${test.bankName}
                        </h1>
                        <p style="color: var(--text-light); margin: 0.5rem 0 0;">
                            ${test.isCategory ? `Categoría: ${test.category}` : 'Test Aleatorio'} | 
                            Pregunta ${test.currentQuestionIndex + 1} de ${test.questions.length}
                        </p>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 1.5rem; font-weight: 700; color: ${bank.color};">
                            ⏱️ ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}
                        </div>
                        <div style="color: var(--text-light); font-size: 0.9rem;">Tiempo transcurrido</div>
                    </div>
                </div>
                
                <!-- Barra de progreso -->
                <div style="background: #e9ecef; border-radius: 10px; height: 8px; margin-bottom: 2rem; overflow: hidden;">
                    <div style="background: ${bank.color}; height: 100%; width: ${progress}%; transition: width 0.3s ease;"></div>
                </div>
                
                <!-- Pregunta actual -->
                <div style="background: white; border-radius: 15px; padding: 2rem; margin-bottom: 2rem; 
                           box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="background: ${bank.color}; color: white; border-radius: 10px; 
                                   padding: 0.5rem 1rem; font-weight: 700; font-size: 0.9rem;">
                            ${currentQuestion.category}
                        </div>
                        <div style="background: ${bank.color}30; color: ${bank.color}; border-radius: 10px; 
                                   padding: 0.5rem 1rem; font-weight: 600; font-size: 0.9rem;">
                            ${currentQuestion.difficulty}
                        </div>
                    </div>
                    
                    <h2 style="color: var(--accent-black); font-size: 1.4rem; font-weight: 600; 
                              line-height: 1.6; margin-bottom: 2rem;">
                        ${test.currentQuestionIndex + 1}. ${currentQuestion.question}
                    </h2>
                    
                    <div style="display: grid; gap: 1rem;">
                        ${currentQuestion.options.map((option, index) => `
                            <label style="display: flex; align-items: center; gap: 1rem; padding: 1rem; 
                                          border: 2px solid #e9ecef; border-radius: 10px; cursor: pointer; 
                                          transition: all 0.3s ease; background: white;
                                          ${test.answers && test.answers[test.currentQuestionIndex] === index ? 
                                            `border-color: ${bank.color}; background: ${bank.color}20;` : ''}"
                                   onmouseover="this.style.borderColor='${bank.color}'; this.style.background='${bank.color}10';"
                                   onmouseout="if(!this.querySelector('input').checked) { this.style.borderColor='#e9ecef'; this.style.background='white'; }"
                                   onclick="academiaUmbramed.selectTestAnswer(${index}, this)">
                                <input type="radio" name="test-answer" value="${index}" 
                                       ${test.answers && test.answers[test.currentQuestionIndex] === index ? 'checked' : ''}
                                       style="width: 20px; height: 20px; accent-color: ${bank.color};">
                                <div style="flex: 1;">
                                    <span style="font-weight: 600; color: ${bank.color}; margin-right: 0.5rem;">
                                        ${String.fromCharCode(65 + index)})
                                    </span>
                                    ${option}
                                </div>
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Botones de navegación -->
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <button onclick="academiaUmbramed.previousQuestion()" 
                            ${test.currentQuestionIndex === 0 ? 'disabled' : ''}
                            style="background: #6c757d; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer; 
                                   ${test.currentQuestionIndex === 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                        ← Anterior
                    </button>
                    
                    <div style="display: flex; gap: 1rem;">
                        <button onclick="academiaUmbramed.exitTest()" 
                                style="background: #dc3545; color: white; border: none; padding: 1rem 2rem; 
                                       border-radius: 25px; font-weight: 600; cursor: pointer;">
                            ❌ Salir del Test
                        </button>
                        
                        ${test.currentQuestionIndex === test.questions.length - 1 ? `
                            <button onclick="academiaUmbramed.finishTest()" 
                                    style="background: ${bank.color}; color: white; border: none; padding: 1rem 2rem; 
                                           border-radius: 25px; font-weight: 600; cursor: pointer;">
                                ✅ Finalizar Test
                            </button>
                        ` : `
                            <button onclick="academiaUmbramed.nextQuestion()" 
                                    style="background: ${bank.color}; color: white; border: none; padding: 1rem 2rem; 
                                           border-radius: 25px; font-weight: 600; cursor: pointer;">
                                Siguiente →
                            </button>
                        `}
                    </div>
                </div>
                
                <!-- Información adicional -->
                <div style="margin-top: 2rem; padding: 1rem; background: #f8f9fa; border-radius: 10px; text-align: center;">
                    <div style="color: var(--text-light); font-size: 0.9rem;">
                        💡 Puedes cambiar tu respuesta en cualquier momento antes de pasar a la siguiente pregunta
                    </div>
                </div>
            </div>
        `;
    },
    
    renderTestResultsView() {
        const results = this.testResults;
        const bank = this.specialties[this.currentSpecialty].questionBanks[results.bankId];
        const minutes = Math.floor(results.totalTime / 60);
        const seconds = results.totalTime % 60;
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <a href="#" onclick="academiaUmbramed.selectSpecialty('${this.currentSpecialty}')">${this.specialties[this.currentSpecialty].name}</a> >
                <a href="#" onclick="academiaUmbramed.openQuestionBank('${results.bankId}')">${results.bankName}</a> >
                <span>Resultados</span>
            </div>
            
            <div class="dashboard-card">
                <div style="text-align: center; margin-bottom: 3rem;">
                    <div style="font-size: 5rem; margin-bottom: 1rem;">
                        ${results.passed ? '🎉' : '📚'}
                    </div>
                    <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">
                        ${results.passed ? '¡Felicitaciones!' : '¡Sigue Practicando!'}
                    </h1>
                    <p style="color: var(--text-light); font-size: 1.2rem;">
                        ${results.isCategory ? `Test de ${results.category}` : 'Test Aleatorio'} completado
                    </p>
                </div>
                
                <!-- Resultados principales -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                    <div style="background: ${results.passed ? '#28a745' : '#dc3545'}; color: white; 
                               padding: 2rem; border-radius: 20px; text-align: center;">
                        <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">
                            ${results.percentage}%
                        </div>
                        <div style="font-size: 1.1rem; opacity: 0.9;">Puntuación Final</div>
                    </div>
                    <div style="background: #28a745; color: white; padding: 2rem; border-radius: 20px; text-align: center;">
                        <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">
                            ${results.correct}
                        </div>
                        <div style="font-size: 1.1rem; opacity: 0.9;">Correctas</div>
                    </div>
                    <div style="background: #dc3545; color: white; padding: 2rem; border-radius: 20px; text-align: center;">
                        <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">
                            ${results.incorrect}
                        </div>
                        <div style="font-size: 1.1rem; opacity: 0.9;">Incorrectas</div>
                    </div>
                    <div style="background: #6c757d; color: white; padding: 2rem; border-radius: 20px; text-align: center;">
                        <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">
                            ${minutes}:${seconds.toString().padStart(2, '0')}
                        </div>
                        <div style="font-size: 1.1rem; opacity: 0.9;">Tiempo Total</div>
                    </div>
                </div>
                
                <!-- Acciones -->
                <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-bottom: 3rem;">
                    <button onclick="academiaUmbramed.showDetailedResults()" 
                            style="background: ${bank.color}; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer;">
                        📋 Ver Respuestas Detalladas
                    </button>
                    <button onclick="academiaUmbramed.startRandomTest('${results.bankId}')" 
                            style="background: #17a2b8; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer;">
                        🔄 Repetir Test
                    </button>
                    <button onclick="academiaUmbramed.openQuestionBank('${results.bankId}')" 
                            style="background: #6c757d; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer;">
                        ← Volver al Banco
                    </button>
                </div>
                
                <!-- Estadísticas por categoría -->
                <div style="background: white; border-radius: 15px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    <h3 style="color: var(--accent-black); margin-bottom: 2rem; text-align: center;">
                        📊 Análisis por Categorías
                    </h3>
                    ${this.generateCategoryAnalysis(results)}
                </div>
            </div>
        `;
    },
    
    generateCategoryAnalysis(results) {
        const categories = {};
        
        results.results.forEach(result => {
            if (!categories[result.category]) {
                categories[result.category] = { total: 0, correct: 0 };
            }
            categories[result.category].total++;
            if (result.isCorrect) {
                categories[result.category].correct++;
            }
        });
        
        return Object.entries(categories).map(([category, stats]) => {
            const percentage = ((stats.correct / stats.total) * 100).toFixed(1);
            const color = percentage >= 70 ? '#28a745' : percentage >= 50 ? '#ffc107' : '#dc3545';
            
            return `
                <div style="display: flex; justify-content: space-between; align-items: center; 
                           padding: 1rem; margin-bottom: 1rem; border-radius: 10px; background: #f8f9fa;">
                    <div style="flex: 1;">
                        <div style="font-weight: 600; color: var(--accent-black);">${category}</div>
                        <div style="color: var(--text-light); font-size: 0.9rem;">
                            ${stats.correct} de ${stats.total} correctas
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 1.5rem; font-weight: 700; color: ${color};">
                            ${percentage}%
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },
    
    renderDetailedResultsView() {
        const results = this.testResults;
        const bank = this.specialties[this.currentSpecialty].questionBanks[results.bankId];
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <a href="#" onclick="academiaUmbramed.selectSpecialty('${this.currentSpecialty}')">${this.specialties[this.currentSpecialty].name}</a> >
                <a href="#" onclick="academiaUmbramed.openQuestionBank('${results.bankId}')">${results.bankName}</a> >
                <span>Respuestas Detalladas</span>
            </div>
            
            <div class="dashboard-card">
                <h1 style="color: var(--accent-black); font-size: 2rem; font-weight: 700; margin-bottom: 2rem; text-align: center;">
                    📋 Respuestas Detalladas
                </h1>
                
                <div style="margin-bottom: 2rem; text-align: center;">
                    <button onclick="academiaUmbramed.currentView='test-results'; academiaUmbramed.render();" 
                            style="background: ${bank.color}; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer;">
                        ← Volver a Resultados
                    </button>
                </div>
                
                <div style="display: grid; gap: 2rem;">
                    ${results.results.map((result, index) => {
                        const statusColor = result.status === 'correct' ? '#28a745' : 
                                          result.status === 'incorrect' ? '#dc3545' : '#6c757d';
                        const statusIcon = result.status === 'correct' ? '✅' : 
                                         result.status === 'incorrect' ? '❌' : '⚪';
                        
                        return `
                            <div style="background: white; border-radius: 15px; padding: 2rem; 
                                       box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-left: 5px solid ${statusColor};">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 1rem;">
                                        <div style="font-size: 1.5rem;">${statusIcon}</div>
                                        <div>
                                            <div style="font-weight: 700; color: var(--accent-black); font-size: 1.1rem;">
                                                Pregunta ${index + 1}
                                            </div>
                                            <div style="color: var(--text-light); font-size: 0.9rem;">
                                                ${result.category} | ${result.difficulty}
                                            </div>
                                        </div>
                                    </div>
                                    <div style="background: ${statusColor}; color: white; padding: 0.5rem 1rem; 
                                               border-radius: 20px; font-weight: 600; font-size: 0.9rem;">
                                        ${result.status === 'correct' ? 'CORRECTA' : 
                                          result.status === 'incorrect' ? 'INCORRECTA' : 'SIN RESPONDER'}
                                    </div>
                                </div>
                                
                                <h3 style="color: var(--accent-black); font-size: 1.2rem; font-weight: 600; 
                                          line-height: 1.6; margin-bottom: 1.5rem;">
                                    ${result.question}
                                </h3>
                                
                                <div style="display: grid; gap: 0.8rem; margin-bottom: 1.5rem;">
                                    ${result.options.map((option, optIndex) => {
                                        const isCorrect = optIndex === result.correct;
                                        const isUserAnswer = optIndex === result.userAnswer;
                                        
                                        let optionStyle = 'background: #f8f9fa; border: 2px solid #e9ecef;';
                                        if (isCorrect) {
                                            optionStyle = 'background: #d4edda; border: 2px solid #28a745;';
                                        } else if (isUserAnswer && !isCorrect) {
                                            optionStyle = 'background: #f8d7da; border: 2px solid #dc3545;';
                                        }
                                        
                                        return `
                                            <div style="${optionStyle} padding: 1rem; border-radius: 10px;">
                                                <span style="font-weight: 600; margin-right: 0.5rem;">
                                                    ${String.fromCharCode(65 + optIndex)})
                                                </span>
                                                ${option}
                                                ${isCorrect ? ' ✅' : ''}
                                                ${isUserAnswer && !isCorrect ? ' ❌ Tu respuesta' : ''}
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                                
                                ${result.explanation ? `
                                    <div style="background: #e8f4f8; padding: 1.5rem; border-radius: 10px; 
                                               border-left: 4px solid #17a2b8;">
                                        <div style="font-weight: 600; color: #0c5460; margin-bottom: 0.5rem;">
                                            💡 Explicación:
                                        </div>
                                        <div style="color: #0c5460; line-height: 1.6;">
                                            ${result.explanation}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },
    
    renderTestView() {
        if (!this.currentTest || !this.currentTest.questions) {
            return '<div>Error: No hay test configurado</div>';
        }
        
        const test = this.currentTest;
        const currentQuestion = test.questions[test.currentQuestionIndex];
        const progress = ((test.currentQuestionIndex + 1) / test.questions.length) * 100;
        const timeElapsed = Math.floor((new Date() - test.startTime) / 1000);
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        
        const specialty = this.specialties[this.currentSpecialty];
        const bank = specialty.questionBanks[test.bankId];
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <a href="#" onclick="academiaUmbramed.selectSpecialty('${this.currentSpecialty}')">${specialty.name}</a> >
                <a href="#" onclick="academiaUmbramed.openQuestionBank('${test.bankId}')">${test.bankName}</a> >
                <span>Test en Curso</span>
            </div>
            
            <div class="dashboard-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; 
                           padding: 1.5rem; background: ${bank.color}15; border-radius: 15px; border-left: 5px solid ${bank.color};">
                    <div>
                        <h1 style="color: var(--accent-black); font-size: 1.8rem; font-weight: 700; margin: 0;">
                            ${bank.icon} ${test.bankName}
                        </h1>
                        <p style="color: var(--text-light); margin: 0.5rem 0 0;">
                            ${test.isCategory ? `Categoría: ${test.category}` : 'Test Aleatorio'} | 
                            Pregunta ${test.currentQuestionIndex + 1} de ${test.questions.length}
                        </p>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 1.5rem; font-weight: 700; color: ${bank.color};">
                            ⏱️ ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}
                        </div>
                        <div style="color: var(--text-light); font-size: 0.9rem;">Tiempo transcurrido</div>
                    </div>
                </div>
                
                <!-- Barra de progreso -->
                <div style="background: #e9ecef; border-radius: 10px; height: 8px; margin-bottom: 2rem; overflow: hidden;">
                    <div style="background: ${bank.color}; height: 100%; width: ${progress}%; transition: width 0.3s ease;"></div>
                </div>
                
                <!-- Pregunta actual -->
                <div style="background: white; border-radius: 15px; padding: 2rem; margin-bottom: 2rem; 
                           box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="background: ${bank.color}; color: white; border-radius: 10px; 
                                   padding: 0.5rem 1rem; font-weight: 700; font-size: 0.9rem;">
                            ${currentQuestion.category}
                        </div>
                        <div style="background: ${bank.color}30; color: ${bank.color}; border-radius: 10px; 
                                   padding: 0.5rem 1rem; font-weight: 600; font-size: 0.9rem;">
                            ${currentQuestion.difficulty}
                        </div>
                    </div>
                    
                    <h2 style="color: var(--accent-black); font-size: 1.4rem; font-weight: 600; 
                              line-height: 1.6; margin-bottom: 2rem;">
                        ${test.currentQuestionIndex + 1}. ${currentQuestion.question}
                    </h2>
                    
                    <div style="display: grid; gap: 1rem;">
                        ${currentQuestion.options.map((option, index) => `
                            <label style="display: flex; align-items: center; gap: 1rem; padding: 1rem; 
                                          border: 2px solid #e9ecef; border-radius: 10px; cursor: pointer; 
                                          transition: all 0.3s ease; background: white;
                                          ${test.answers && test.answers[test.currentQuestionIndex] === index ? 
                                            `border-color: ${bank.color}; background: ${bank.color}20;` : ''}"
                                   onmouseover="this.style.borderColor='${bank.color}'; this.style.background='${bank.color}10';"
                                   onmouseout="if(!this.querySelector('input').checked) { this.style.borderColor='#e9ecef'; this.style.background='white'; }"
                                   onclick="academiaUmbramed.selectTestAnswer(${index}, this)">
                                <input type="radio" name="test-answer" value="${index}" 
                                       ${test.answers && test.answers[test.currentQuestionIndex] === index ? 'checked' : ''}
                                       style="width: 20px; height: 20px; accent-color: ${bank.color};">
                                <div style="flex: 1;">
                                    <span style="font-weight: 600; color: ${bank.color}; margin-right: 0.5rem;">
                                        ${String.fromCharCode(65 + index)})
                                    </span>
                                    ${option}
                                </div>
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Botones de navegación -->
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <button onclick="academiaUmbramed.previousQuestion()" 
                            ${test.currentQuestionIndex === 0 ? 'disabled' : ''}
                            style="background: #6c757d; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer; 
                                   ${test.currentQuestionIndex === 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                        ← Anterior
                    </button>
                    
                    <div style="display: flex; gap: 1rem;">
                        <button onclick="academiaUmbramed.exitTest()" 
                                style="background: #dc3545; color: white; border: none; padding: 1rem 2rem; 
                                       border-radius: 25px; font-weight: 600; cursor: pointer;">
                            ❌ Salir del Test
                        </button>
                        
                        ${test.currentQuestionIndex === test.questions.length - 1 ? `
                            <button onclick="academiaUmbramed.finishTest()" 
                                    style="background: ${bank.color}; color: white; border: none; padding: 1rem 2rem; 
                                           border-radius: 25px; font-weight: 600; cursor: pointer;">
                                ✅ Finalizar Test
                            </button>
                        ` : `
                            <button onclick="academiaUmbramed.nextQuestion()" 
                                    style="background: ${bank.color}; color: white; border: none; padding: 1rem 2rem; 
                                           border-radius: 25px; font-weight: 600; cursor: pointer;">
                                Siguiente →
                            </button>
                        `}
                    </div>
                </div>
                
                <!-- Información adicional -->
                <div style="margin-top: 2rem; padding: 1rem; background: #f8f9fa; border-radius: 10px; text-align: center;">
                    <div style="color: var(--text-light); font-size: 0.9rem;">
                        💡 Puedes cambiar tu respuesta en cualquier momento antes de pasar a la siguiente pregunta
                    </div>
                </div>
            </div>
        `;
    },
    
    renderTestResultsView() {
        const results = this.testResults;
        const bank = this.specialties[this.currentSpecialty].questionBanks[results.bankId];
        const minutes = Math.floor(results.totalTime / 60);
        const seconds = results.totalTime % 60;
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <a href="#" onclick="academiaUmbramed.selectSpecialty('${this.currentSpecialty}')">${this.specialties[this.currentSpecialty].name}</a> >
                <a href="#" onclick="academiaUmbramed.openQuestionBank('${results.bankId}')">${results.bankName}</a> >
                <span>Resultados</span>
            </div>
            
            <div class="dashboard-card">
                <div style="text-align: center; margin-bottom: 3rem;">
                    <div style="font-size: 5rem; margin-bottom: 1rem;">
                        ${results.passed ? '🎉' : '📚'}
                    </div>
                    <h1 style="color: var(--accent-black); font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">
                        ${results.passed ? '¡Felicitaciones!' : '¡Sigue Practicando!'}
                    </h1>
                    <p style="color: var(--text-light); font-size: 1.2rem;">
                        ${results.isCategory ? `Test de ${results.category}` : 'Test Aleatorio'} completado
                    </p>
                </div>
                
                <!-- Resultados principales -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                    <div style="background: ${results.passed ? '#28a745' : '#dc3545'}; color: white; 
                               padding: 2rem; border-radius: 20px; text-align: center;">
                        <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">
                            ${results.percentage}%
                        </div>
                        <div style="font-size: 1.1rem; opacity: 0.9;">Puntuación Final</div>
                    </div>
                    <div style="background: #28a745; color: white; padding: 2rem; border-radius: 20px; text-align: center;">
                        <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">
                            ${results.correct}
                        </div>
                        <div style="font-size: 1.1rem; opacity: 0.9;">Correctas</div>
                    </div>
                    <div style="background: #dc3545; color: white; padding: 2rem; border-radius: 20px; text-align: center;">
                        <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">
                            ${results.incorrect}
                        </div>
                        <div style="font-size: 1.1rem; opacity: 0.9;">Incorrectas</div>
                    </div>
                    <div style="background: #6c757d; color: white; padding: 2rem; border-radius: 20px; text-align: center;">
                        <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">
                            ${minutes}:${seconds.toString().padStart(2, '0')}
                        </div>
                        <div style="font-size: 1.1rem; opacity: 0.9;">Tiempo Total</div>
                    </div>
                </div>
                
                <!-- Acciones -->
                <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-bottom: 3rem;">
                    <button onclick="academiaUmbramed.showDetailedResults()" 
                            style="background: ${bank.color}; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer;">
                        📋 Ver Respuestas Detalladas
                    </button>
                    <button onclick="academiaUmbramed.startRandomTest('${results.bankId}')" 
                            style="background: #17a2b8; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer;">
                        🔄 Repetir Test
                    </button>
                    <button onclick="academiaUmbramed.openQuestionBank('${results.bankId}')" 
                            style="background: #6c757d; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer;">
                        ← Volver al Banco
                    </button>
                </div>
                
                <!-- Estadísticas por categoría -->
                <div style="background: white; border-radius: 15px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    <h3 style="color: var(--accent-black); margin-bottom: 2rem; text-align: center;">
                        📊 Análisis por Categorías
                    </h3>
                    ${this.generateCategoryAnalysis(results)}
                </div>
            </div>
        `;
    },
    
    generateCategoryAnalysis(results) {
        const categories = {};
        
        results.results.forEach(result => {
            if (!categories[result.category]) {
                categories[result.category] = { total: 0, correct: 0 };
            }
            categories[result.category].total++;
            if (result.isCorrect) {
                categories[result.category].correct++;
            }
        });
        
        return Object.entries(categories).map(([category, stats]) => {
            const percentage = ((stats.correct / stats.total) * 100).toFixed(1);
            const color = percentage >= 70 ? '#28a745' : percentage >= 50 ? '#ffc107' : '#dc3545';
            
            return `
                <div style="display: flex; justify-content: space-between; align-items: center; 
                           padding: 1rem; margin-bottom: 1rem; border-radius: 10px; background: #f8f9fa;">
                    <div style="flex: 1;">
                        <div style="font-weight: 600; color: var(--accent-black);">${category}</div>
                        <div style="color: var(--text-light); font-size: 0.9rem;">
                            ${stats.correct} de ${stats.total} correctas
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 1.5rem; font-weight: 700; color: ${color};">
                            ${percentage}%
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },
    
    renderDetailedResultsView() {
        const results = this.testResults;
        const bank = this.specialties[this.currentSpecialty].questionBanks[results.bankId];
        
        return `
            <div class="breadcrumb">
                <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > 
                <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
                <a href="#" onclick="academiaUmbramed.selectSpecialty('${this.currentSpecialty}')">${this.specialties[this.currentSpecialty].name}</a> >
                <a href="#" onclick="academiaUmbramed.openQuestionBank('${results.bankId}')">${results.bankName}</a> >
                <span>Respuestas Detalladas</span>
            </div>
            
            <div class="dashboard-card">
                <h1 style="color: var(--accent-black); font-size: 2rem; font-weight: 700; margin-bottom: 2rem; text-align: center;">
                    📋 Respuestas Detalladas
                </h1>
                
                <div style="margin-bottom: 2rem; text-align: center;">
                    <button onclick="academiaUmbramed.currentView='test-results'; academiaUmbramed.render();" 
                            style="background: ${bank.color}; color: white; border: none; padding: 1rem 2rem; 
                                   border-radius: 25px; font-weight: 600; cursor: pointer;">
                        ← Volver a Resultados
                    </button>
                </div>
                
                <div style="display: grid; gap: 2rem;">
                    ${results.results.map((result, index) => {
                        const statusColor = result.status === 'correct' ? '#28a745' : 
                                          result.status === 'incorrect' ? '#dc3545' : '#6c757d';
                        const statusIcon = result.status === 'correct' ? '✅' : 
                                         result.status === 'incorrect' ? '❌' : '⚪';
                        
                        return `
                            <div style="background: white; border-radius: 15px; padding: 2rem; 
                                       box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-left: 5px solid ${statusColor};">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 1rem;">
                                        <div style="font-size: 1.5rem;">${statusIcon}</div>
                                        <div>
                                            <div style="font-weight: 700; color: var(--accent-black); font-size: 1.1rem;">
                                                Pregunta ${index + 1}
                                            </div>
                                            <div style="color: var(--text-light); font-size: 0.9rem;">
                                                ${result.category} | ${result.difficulty}
                                            </div>
                                        </div>
                                    </div>
                                    <div style="background: ${statusColor}; color: white; padding: 0.5rem 1rem; 
                                               border-radius: 20px; font-weight: 600; font-size: 0.9rem;">
                                        ${result.status === 'correct' ? 'CORRECTA' : 
                                          result.status === 'incorrect' ? 'INCORRECTA' : 'SIN RESPONDER'}
                                    </div>
                                </div>
                                
                                <h3 style="color: var(--accent-black); font-size: 1.2rem; font-weight: 600; 
                                          line-height: 1.6; margin-bottom: 1.5rem;">
                                    ${result.question}
                                </h3>
                                
                                <div style="display: grid; gap: 0.8rem; margin-bottom: 1.5rem;">
                                    ${result.options.map((option, optIndex) => {
                                        const isCorrect = optIndex === result.correct;
                                        const isUserAnswer = optIndex === result.userAnswer;
                                        
                                        let optionStyle = 'background: #f8f9fa; border: 2px solid #e9ecef;';
                                        if (isCorrect) {
                                            optionStyle = 'background: #d4edda; border: 2px solid #28a745;';
                                        } else if (isUserAnswer && !isCorrect) {
                                            optionStyle = 'background: #f8d7da; border: 2px solid #dc3545;';
                                        }
                                        
                                        return `
                                            <div style="${optionStyle} padding: 1rem; border-radius: 10px;">
                                                <span style="font-weight: 600; margin-right: 0.5rem;">
                                                    ${String.fromCharCode(65 + optIndex)})
                                                </span>
                                                ${option}
                                                ${isCorrect ? ' ✅' : ''}
                                                ${isUserAnswer && !isCorrect ? ' ❌ Tu respuesta' : ''}
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                                
                                ${result.explanation ? `
                                    <div style="background: #e8f4f8; padding: 1.5rem; border-radius: 10px; 
                                               border-left: 4px solid #17a2b8;">
                                        <div style="font-weight: 600; color: #0c5460; margin-bottom: 0.5rem;">
                                            💡 Explicación:
                                        </div>
                                        <div style="color: #0c5460; line-height: 1.6;">
                                            ${result.explanation}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    
});

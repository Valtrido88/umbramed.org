// Render functions extracted from campus-extension.js
(function(){
  if(!window.AcademiaUmbramed) return;
  Object.assign(AcademiaUmbramed.prototype, {
  _renderHelpersVersion: '1.1.0',
  // === Render: Campus Principal ===
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
            ${Object.values(this.specialties)
              .filter(s => !(s.isPersonal && (this.currentUser?.email !== 'kike@umbramed.org')))
              .map(specialty => `
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
  renderSpecialtyLoginView() {
    const specialty = this.specialties[this.currentSpecialty];
    return `
      <div class="breadcrumb">
        <a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> >
        <a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >
        <span>Acceso a ${specialty.name}</span>
      </div>
      <div class="dashboard-card">
        <h1 style="text-align:center; color: var(--accent-black);">🔐 Acceso Restringido</h1>
        <p style="text-align:center; color: var(--text-light); max-width:600px; margin:0 auto 2rem;">Esta especialidad requiere un código de acceso. Introduce el código proporcionado por el jefe de servicio y una breve justificación si aplica.</p>
        <div style="max-width:500px; margin:0 auto; display:flex; flex-direction:column; gap:1rem;">
          <input id="specialty-code" placeholder="Código de acceso" style="padding:0.8rem 1rem; border:1px solid #ccc; border-radius:8px;" />
          <textarea id="specialty-justification" placeholder="Justificación (opcional)" style="padding:0.8rem 1rem; border:1px solid #ccc; border-radius:8px; min-height:120px;"></textarea>
          <div id="specialty-error" class="hidden" style="color:#dc3545; font-weight:600;"></div>
          <button onclick="academiaUmbramed.processSpecialtyAccess()" style="background:${specialty.color}; color:white; border:none; padding:1rem 1.5rem; border-radius:25px; font-weight:600; cursor:pointer;">✅ Verificar y Entrar</button>
          <button onclick="academiaUmbramed.showCampus()" style="background:#6c757d; color:white; border:none; padding:0.8rem 1.2rem; border-radius:20px; font-weight:600; cursor:pointer;">← Volver</button>
        </div>
      </div>`;
  },
  renderSpecialtyView() {
    const specialty = this.specialties[this.currentSpecialty];
    if (specialty.isPersonal && this.currentSpecialty === 'ope-primaria-2025') return this.renderPersonalOPECampus(specialty);
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
  // Para mantener la modularización progresiva, dejamos el contenido completo del campus personal en el archivo original
  renderPersonalOPECampus(specialty){
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
            ${Object.entries(specialty.questionBanks).map(([id,bank])=>`
            <div style="text-align: center; padding: 1.5rem; background: ${bank.color}15; border-radius: 15px; border: 2px solid ${bank.color};">
              <div style="font-size: 3rem; margin-bottom: 1rem;">${bank.icon}</div>
              <div style="font-weight: 700; color: ${bank.color}; font-size: 1.3rem; margin-bottom: 0.5rem;">
                ${bank.name}
              </div>
              <div style="font-weight: 600; color: var(--accent-black); margin-bottom: 0.5rem;">
                ${bank.description.split('.')[0]}
              </div>
              <div style="font-size: 0.9rem; color: var(--text-light);">
                ${bank.totalQuestions} preguntas
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    `;
  },
  renderQuestionBankView(){
    const specialty = this.specialties[this.currentSpecialty];
    const bank = specialty.questionBanks[this.currentQuestionBank];
    if(bank._loading){
      return `<div class="dashboard-card" style="text-align:center;padding:3rem;">
        <h2 style="color:var(--accent-black);">Cargando banco...</h2>
        <p style="color:var(--text-light);">Descargando preguntas desde origen remoto.</p>
      </div>`;
    }
    if(bank._loadError){
      return `<div class="dashboard-card" style="text-align:center;padding:3rem;">
        <h2 style="color:#dc3545;">Error al cargar</h2>
        <p style="color:var(--text-light);">No se pudieron obtener las preguntas. <button onclick="academiaUmbramed.openQuestionBank('${bank.id}')" style="background:${bank.color};color:#fff;border:none;padding:.5rem 1rem;border-radius:8px;cursor:pointer;">Reintentar</button></p>
      </div>`;
    }
    const editing = this.editorBankEditing === bank.id;
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
          <div onclick=\"academiaUmbramed.filterByCategory('${category}')\"
             style=\"background: white; border-radius: 15px; padding: 1.5rem; cursor: pointer;
                 border-left: 5px solid ${bank.color}; transition: all 0.3s ease;
                 box-shadow: 0 5px 15px rgba(0,0,0,0.1);\"
             onmouseover=\"this.style.transform='translateY(-5px)'\"
             onmouseout=\"this.style.transform='translateY(0)'\">
            <h3 style=\"color: ${bank.color}; margin: 0 0 0.5rem; font-size: 1.3rem;\">
              📁 ${category}
            </h3>
            <p style=\"color: var(--text-light); margin: 0; font-size: 0.9rem;\">
              ${Math.floor(Math.random() * 50) + 10} preguntas disponibles
            </p>
            <div style=\"margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;\">
              <div style=\"background: ${bank.color}; color: white; padding: 8px 15px; 
                     border-radius: 20px; text-align: center; font-weight: 600; font-size: 0.9rem;\">
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
          <button onclick="academiaUmbramed.showNormalizationReport()"
              style="background: #343a40; color: #fff; border: none; 
                   padding: 1rem 2rem; border-radius: 25px; font-size: 1.1rem; 
                   font-weight: 600; cursor: pointer;">
            🧪 Normalización
          </button>
            ${this.isEditor ? `<button onclick=\"academiaUmbramed.toggleQuestionEditor('${bank.id}')\" style=\"background:#17a2b8;color:#fff;border:none;padding:1rem 2rem;border-radius:25px;font-size:1.1rem;font-weight:600;cursor:pointer;margin-left:1rem;\">${editing?'Cerrar Edición':'✏️ Editar Preguntas'}</button>`:''}
      </div>
          ${editing ? this.renderQuestionEditor(bank): ''}
    `;
  }
  });
})();

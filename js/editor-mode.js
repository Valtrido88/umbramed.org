// Editor mode utilities: enable admin to disable modules and view status
(function(){
  function log(){ console.info('[UMBRAMED][EDITOR]', ...arguments); }
  if(!window.AcademiaUmbramed){ return; }
  const LS_KEY = 'umbramed_disabled_modules';
  const LS_PURGE_KEY = 'umbramed_purged_modules';
  const MODULE_MAP = {
    render: {
      test: ()=> typeof AcademiaUmbramed.prototype._renderHelpersVersion !== 'undefined',
      disable: ()=>{ /* núcleo render no se desactiva totalmente */ },
      purge: ()=>{
        ['renderCampusView','renderSpecialtyView','renderQuestionBankView','renderTestView'].forEach(fn=>{
          AcademiaUmbramed.prototype[fn] = function(){ return '<div class="dashboard-card"><h2>Render eliminado</h2><p>Módulo purgado.</p></div>'; };
        });
      },
      label: 'Render (vistas campus)'
    },
    tests: {
      test: ()=> typeof AcademiaUmbramed.prototype.startRandomTest === 'function',
      disable: ()=>{
        ['startRandomTest','startCategoryTest','filterByCategory','selectTestAnswer','previousQuestion','nextQuestion','exitTest','finishTest','calculateTestResults','renderTestView'].forEach(fn=>{
          AcademiaUmbramed.prototype[fn] = function(){ alert('Módulo Tests desactivado.'); };
        });
      },
      purge: ()=>{
        ['startRandomTest','startCategoryTest','filterByCategory','selectTestAnswer','previousQuestion','nextQuestion','exitTest','finishTest','calculateTestResults','renderTestView'].forEach(fn=>{ delete AcademiaUmbramed.prototype[fn]; });
      },
      label: 'Engine de Tests'
    },
    results: {
      test: ()=> typeof AcademiaUmbramed.prototype.renderTestResultsView === 'function',
      disable: ()=>{
        ['renderTestResultsView','renderDetailedResultsView','generateCategoryAnalysis'].forEach(fn=>{
          AcademiaUmbramed.prototype[fn] = function(){ return '<div class="dashboard-card"><h2>Resultados desactivados</h2></div>'; };
        });
      },
      purge: ()=>{
        ['renderTestResultsView','renderDetailedResultsView','generateCategoryAnalysis'].forEach(fn=>{ delete AcademiaUmbramed.prototype[fn]; });
      },
      label: 'Resultados / Análisis'
    },
    normalize: {
      test: ()=> typeof AcademiaUmbramed.prototype.normalizeAllQuestionData === 'function',
      disable: ()=>{ AcademiaUmbramed.prototype.normalizeAllQuestionData = function(){ alert('Normalización desactivada.'); }; },
      purge: ()=>{ delete AcademiaUmbramed.prototype.normalizeAllQuestionData; },
      label: 'Normalización Preguntas'
    }
  };

  // Patch init to set editor flag if admin email
  const originalInit = AcademiaUmbramed.init;
  AcademiaUmbramed.init = function(){
    originalInit.call(this);
    // Mark instance reference again (original sets window.academiaUmbramed)
    const inst = window.academiaUmbramed;
    inst._applyDisabledModules();
  };

  Object.assign(AcademiaUmbramed.prototype, {
    isEditor: false,
    _editorPanelVisible: false,
    _getDisabledModules(){
      try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch(e){ return []; }
    },
    _setDisabledModules(arr){ localStorage.setItem(LS_KEY, JSON.stringify(arr)); },
    _getPurgedModules(){
      try { return JSON.parse(localStorage.getItem(LS_PURGE_KEY) || '[]'); } catch(e){ return []; }
    },
    _setPurgedModules(arr){ localStorage.setItem(LS_PURGE_KEY, JSON.stringify(arr)); },
    _applyDisabledModules(){
      const disabled = this._getDisabledModules();
      const purged = this._getPurgedModules();
      disabled.forEach(key=>{ if(MODULE_MAP[key]) MODULE_MAP[key].disable(); });
      purged.forEach(key=>{ if(MODULE_MAP[key]) MODULE_MAP[key].purge(); });
    },
    enableEditorMode(){ this.isEditor = true; this.render(); },
    toggleEditorPanel(){
      this._editorPanelVisible = !this._editorPanelVisible; 
      const panel = document.getElementById('umbramed-editor-panel');
      if(panel) panel.style.display = this._editorPanelVisible ? 'block':'none';
      else if(this._editorPanelVisible) this._injectEditorPanel();
    },
    toggleModule(key){
      const disabled = this._getDisabledModules();
      const idx = disabled.indexOf(key);
      if(idx === -1){ disabled.push(key); } else { disabled.splice(idx,1); }
      this._setDisabledModules(disabled);
      // Reload page to re-evaluate modules cleanly
      location.reload();
    },
    purgeModule(key){
      if(!MODULE_MAP[key]) return;
      if(!confirm('Esto purgará el módulo "' + MODULE_MAP[key].label + '" (elimina sus funciones en esta sesión).\n\n¿Continuar?')) return;
      const purged = this._getPurgedModules();
      if(!purged.includes(key)) purged.push(key);
      this._setPurgedModules(purged);
      // Asegurar que no quede marcado como solo desactivado
      this._setDisabledModules(this._getDisabledModules().filter(k=>k!==key));
      location.reload();
    },
    restoreModule(key){
      const purged = this._getPurgedModules().filter(k=>k!==key);
      this._setPurgedModules(purged);
      location.reload();
    },
    _injectEditorToolbar(){
      if(document.getElementById('umbramed-editor-toolbar')) return;
      const div = document.createElement('div');
      div.id = 'umbramed-editor-toolbar';
      div.style.cssText = 'position:fixed;top:10px;left:10px;z-index:2000;background:#1a1a1a;color:#fff;padding:6px 12px;border-radius:8px;font-size:12px;font-family:system-ui;display:flex;gap:8px;align-items:center;box-shadow:0 4px 14px rgba(0,0,0,.3);';
      div.innerHTML = '<strong style="letter-spacing:.5px;">EDITOR</strong><button id="btn-open-editor-panel" style="background:#C41E3A;color:#fff;border:none;padding:4px 10px;border-radius:6px;cursor:pointer;font-weight:600;">Panel</button>';
      document.body.appendChild(div);
      div.querySelector('#btn-open-editor-panel').onclick = ()=> this.toggleEditorPanel();
    },
    _injectEditorPanel(){
      const existing = document.getElementById('umbramed-editor-panel');
      if(existing) existing.remove();
      const disabled = this._getDisabledModules();
      const purged = this._getPurgedModules();
      const panel = document.createElement('div');
      panel.id='umbramed-editor-panel';
      panel.style.cssText='position:fixed;top:60px;left:10px;width:340px;max-height:80vh;overflow:auto;background:#ffffff;border:2px solid #C41E3A;border-radius:12px;z-index:2001;box-shadow:0 10px 25px rgba(0,0,0,.25);font-family:system-ui;padding:1rem;';
      const rows = Object.entries(MODULE_MAP).map(([k,info])=>{
        const isPurged = purged.includes(k);
        const active = !disabled.includes(k) && info.test() && !isPurged;
        const statusColor = isPurged ? '#6c757d' : (active ? '#28a745':'#dc3545');
        const statusText = isPurged ? 'PURGADO' : (active ? 'ACTIVO':'DESACTIVADO');
        const toggleLabel = active ? 'Desactivar':'Activar';
        const purgeBtn = isPurged ? `<button data-restore="${k}" style="background:#17a2b8;color:#fff;border:none;padding:.35rem .6rem;border-radius:6px;font-size:.65rem;cursor:pointer;margin-left:4px;">Restaurar</button>` : `<button data-purge="${k}" style="background:#6c757d;color:#fff;border:none;padding:.35rem .6rem;border-radius:6px;font-size:.65rem;cursor:pointer;margin-left:4px;">Purgar</button>`;
        return `<div class="editor-module-row" draggable="true" data-key="${k}" style="padding:.55rem .25rem;border-bottom:1px solid #eee;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:.5rem;">
            <div style="flex:1;">
              <div style="font-weight:600;color:#1a1a1a;font-size:.85rem;line-height:1.2;">${info.label}</div>
              <div style="font-size:.65rem;color:${statusColor};font-weight:600;">${statusText}</div>
            </div>
            <div style="display:flex;gap:4px;">
              <button data-mod="${k}" style="background:${active?'#dc3545':'#28a745'};color:#fff;border:none;padding:.35rem .6rem;border-radius:6px;font-size:.65rem;cursor:pointer;">${toggleLabel}</button>
              ${purgeBtn}
            </div>
          </div>
        </div>`;
      }).join('');
      panel.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;">
        <h3 style="margin:0;font-size:1rem;color:#C41E3A;">Panel de Módulos</h3>
        <button style="background:#1a1a1a;color:#fff;border:none;padding:.3rem .6rem;border-radius:6px;cursor:pointer;font-size:.7rem;" id="close-editor-panel">✕</button>
      </div>
      <div style="font-size:.7rem;color:#555;margin-bottom:.75rem;line-height:1.2;">Activa, desactiva o purga módulos. Purgar elimina funciones durante la sesión (sin borrar archivos). Usa Restaurar para recuperarlos.</div>
      ${rows}
      <div style="margin-top:.75rem;">
        <button id="btn-reset-modules" style="background:#ffc107;color:#1a1a1a;border:none;padding:.5rem .8rem;border-radius:6px;font-size:.75rem;font-weight:600;cursor:pointer;">Restaurar Todo</button>
        <button id="btn-minimal-mode" style="background:#6c757d;color:#fff;border:none;padding:.5rem .8rem;border-radius:6px;font-size:.75rem;font-weight:600;cursor:pointer;margin-left:.5rem;">Modo Mínimo</button>
      </div>`;
      document.body.appendChild(panel);
      panel.querySelector('#close-editor-panel').onclick = ()=> this.toggleEditorPanel();
      panel.querySelectorAll('button[data-mod]').forEach(btn=>{ btn.onclick = ()=> this.toggleModule(btn.getAttribute('data-mod')); });
      panel.querySelectorAll('button[data-purge]').forEach(btn=>{ btn.onclick = ()=> this.purgeModule(btn.getAttribute('data-purge')); });
      panel.querySelectorAll('button[data-restore]').forEach(btn=>{ btn.onclick = ()=> this.restoreModule(btn.getAttribute('data-restore')); });
      panel.querySelector('#btn-reset-modules').onclick = ()=> { this._setDisabledModules([]); this._setPurgedModules([]); location.reload(); };
      // Drag outside to purge
      let draggingKey=null; let outside=false;
      panel.querySelectorAll('.editor-module-row').forEach(row=>{
        row.addEventListener('dragstart', e=>{ draggingKey=row.getAttribute('data-key'); outside=false; e.dataTransfer.effectAllowed='move'; });
        row.addEventListener('dragend', ()=>{ if(draggingKey && outside){ this.purgeModule(draggingKey); } draggingKey=null; outside=false; });
      });
      window.addEventListener('dragover', e=>{ if(draggingKey){ if(!panel.contains(e.target)) outside=true; }});
      window.addEventListener('drop', e=>{ if(draggingKey){ if(!panel.contains(e.target)) outside=true; }});
      panel.querySelector('#btn-minimal-mode').onclick = ()=> {
        // Desactivar todo excepto render básico
        this._setDisabledModules(['tests','results','normalize']);
        this._setPurgedModules([]);
        location.reload();
      };
    }
  });

  // Patch global render to inject toolbar when user is admin
  const originalRender = AcademiaUmbramed.prototype.render;
  AcademiaUmbramed.prototype.render = function(){
    originalRender.call(this);
    // Determine if current user is admin
    const adminEmails = ['valerio.trigos88@gmail.com','admin@umbramed.org'];
    if(this.currentUser && adminEmails.includes(this.currentUser.email)){
      if(!this.isEditor) this.isEditor = true;
      this._injectEditorToolbar();
      if(this._editorPanelVisible) this._injectEditorPanel();
    }
  };

  log('Editor mode inicializado');
})();

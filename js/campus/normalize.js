// Question data normalization utilities
(function(){
  if(!window.AcademiaUmbramed) return;
  Object.assign(AcademiaUmbramed.prototype, {
    _questionSchemaVersion: '1.0.0',
    normalizeAllQuestionData(){
      if(!this.specialties) return;
      let totalFixed=0, totalQuestions=0, convertedOptionMaps=0, convertedLetterKeys=0, addedIds=0;
      const letterToIndex = {A:0,B:1,C:2,D:3};
      Object.values(this.specialties).forEach(spec => {
        if(!spec.questionBanks) return;
        Object.values(spec.questionBanks).forEach(bank => {
          if(!Array.isArray(bank.questions)) return;
          bank.questions = bank.questions.map((q, idx) => {
            totalQuestions++;
            const original = q;
            const nq = {...q};
            // Ensure options as array length 4
            if(nq.options && !Array.isArray(nq.options)) {
              // Could be object with A,B,C,D
              const keys = Object.keys(nq.options);
              if(['A','B','C','D'].every(k=>keys.includes(k))) {
                nq.options = ['A','B','C','D'].map(k=> nq.options[k]);
                convertedOptionMaps++;
              } else {
                // Fallback: collect values
                nq.options = Object.values(nq.options).slice(0,4);
              }
            }
            if(!Array.isArray(nq.options)) nq.options = ['Opción A','Opción B','Opción C','Opción D'];
            if(nq.options.length < 4) {
              while(nq.options.length < 4) nq.options.push('');
            } else if(nq.options.length > 4) {
              nq.options = nq.options.slice(0,4);
            }
            // Normalize correct answer
            if(typeof nq.correct === 'string') {
              const upper = nq.correct.trim().toUpperCase();
              if(letterToIndex.hasOwnProperty(upper)) { nq.correct = letterToIndex[upper]; convertedLetterKeys++; }
              else if(!isNaN(parseInt(upper))) { nq.correct = Math.max(0, Math.min(3, parseInt(upper))); }
              else { nq.correct = 0; }
            }
            if(typeof nq.correct !== 'number' || nq.correct <0 || nq.correct>3) nq.correct = 0;
            // Defaults
            if(!nq.difficulty) nq.difficulty = 'Intermedio';
            if(!nq.category) nq.category = 'General';
            if(!nq.explanation) nq.explanation = '';
            if(!Array.isArray(nq.tags)) nq.tags = [];
            // Id generation
            if(!nq.id) { nq.id = (bank.id || 'bank') + '_' + (idx+1) + '_' + Date.now().toString(36); addedIds++; }
            // bankId
            if(!nq.bankId) nq.bankId = bank.id;
            // Mark normalized
            nq._normalized = true;
            nq._schemaVersion = this._questionSchemaVersion;
            if(JSON.stringify(original) !== JSON.stringify(nq)) totalFixed++;
            return nq;
          });
          // Recompute aggregates
          bank.totalQuestions = bank.questions.length;
          // Deduplicate categories / tags
          if(!Array.isArray(bank.categories)) bank.categories = [];
          bank.categories = Array.from(new Set([...bank.categories, ...bank.questions.map(q=>q.category).filter(Boolean)]));
          bank.tags = Array.from(new Set([...(bank.tags||[]), ...bank.questions.flatMap(q=> q.tags||[])]));
        });
      });
      this._normalizationReport = { totalQuestions, totalFixed, convertedOptionMaps, convertedLetterKeys, addedIds, timestamp: new Date().toISOString() };
      if(!this._silentNormalization){
        console.info('[UMBRAMED] Normalización completada', this._normalizationReport);
      }
    },
    getNormalizationReport(){
      return this._normalizationReport || null;
    },
    showNormalizationReport(){
      const rep = this.getNormalizationReport();
      if(!rep){ alert('No hay reporte de normalización todavía.'); return; }
      const details = `Preguntas: ${rep.totalQuestions}\nAjustadas: ${rep.totalFixed}\nOption maps→array: ${rep.convertedOptionMaps}\nLetras convertidas: ${rep.convertedLetterKeys}\nIDs añadidos: ${rep.addedIds}\nTimestamp: ${rep.timestamp}`;
      alert('🧪 Reporte de Normalización\n\n' + details);
    },
    toggleQuestionEditor(bankId){
      this.editorBankEditing = (this.editorBankEditing === bankId ? null : bankId);
      this.render();
    },
    renderQuestionEditor(bank){
      const rows = (bank.questions||[]).map((q,i)=>{
        return `<tr data-index="${i}">
          <td style="padding:.5rem;font-size:.75rem;opacity:.7;">${i+1}</td>
          <td><textarea data-field="question" style="width:100%;min-width:260px;min-height:60px;resize:vertical;">${q.question||''}</textarea></td>
          <td>${q.options.map((opt,oi)=>`<input data-field="opt${oi}" value="${opt}" style="width:100%;margin-bottom:4px;"/>`).join('')}</td>
          <td><input data-field="correct" type="number" min="0" max="3" value="${q.correct||0}" style="width:55px;"></td>
          <td><input data-field="category" value="${q.category||''}" style="width:120px;"></td>
          <td><input data-field="difficulty" value="${q.difficulty||''}" style="width:110px;"></td>
          <td><button data-action="del" style="background:#dc3545;color:#fff;border:none;padding:.35rem .6rem;border-radius:6px;cursor:pointer;">✕</button></td>
        </tr>`;
      }).join('');
      return `<div class="dashboard-card" style="margin-top:1rem;">
        <h3 style="margin-top:0;display:flex;justify-content:space-between;align-items:center;">Edición de Preguntas <button onclick="academiaUmbramed.saveQuestionEdits('${bank.id}')" style="background:#28a745;color:#fff;border:none;padding:.5rem 1rem;border-radius:8px;cursor:pointer;">💾 Guardar</button></h3>
        <div style="overflow:auto;max-height:60vh;border:1px solid #eee;">
          <table style="width:100%;border-collapse:collapse;font-size:.8rem;">
            <thead style="background:#f8f9fa;position:sticky;top:0;">
              <tr><th>#</th><th>Pregunta</th><th>Opciones</th><th>✔</th><th>Categoría</th><th>Dificultad</th><th></th></tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div style="margin-top:.75rem;display:flex;gap:.5rem;flex-wrap:wrap;">
          <button onclick="academiaUmbramed.addTempQuestion('${bank.id}')" style="background:#007bff;color:#fff;border:none;padding:.5rem 1rem;border-radius:8px;cursor:pointer;">➕ Añadir</button>
          <button onclick="academiaUmbramed.bulkNormalize('${bank.id}')" style="background:#6f42c1;color:#fff;border:none;padding:.5rem 1rem;border-radius:8px;cursor:pointer;">🧪 Re-normalizar</button>
          <button onclick="academiaUmbramed.exportBank('${bank.id}')" style="background:#343a40;color:#fff;border:none;padding:.5rem 1rem;border-radius:8px;cursor:pointer;">⬇️ Exportar Banco</button>
        </div>
      </div>`;
    },
    addTempQuestion(bankId){
      const bank = this.specialties[this.currentSpecialty].questionBanks[bankId];
      bank.questions.push({question:'Nueva pregunta', options:['A','B','C','D'], correct:0, category:'General', difficulty:'Intermedio', tags:[], explanation:''});
      this.render();
    },
    saveQuestionEdits(bankId){
      const bank = this.specialties[this.currentSpecialty].questionBanks[bankId];
      const editorCard = document.querySelector('.dashboard-card table tbody');
      if(!editorCard) return;
      const rows = editorCard.querySelectorAll('tr');
      const updated=[];
      rows.forEach(tr=>{
        const idx = parseInt(tr.getAttribute('data-index'));
        const base = bank.questions[idx] || {};
        const q = {...base};
        q.question = tr.querySelector('[data-field="question"]').value.trim();
        q.options = [0,1,2,3].map(i=> tr.querySelector('[data-field="opt'+i+'"]').value.trim());
        q.correct = Math.max(0, Math.min(3, parseInt(tr.querySelector('[data-field="correct"]').value)||0));
        q.category = tr.querySelector('[data-field="category"]').value.trim()||'General';
        q.difficulty = tr.querySelector('[data-field="difficulty"]').value.trim()||'Intermedio';
        updated.push(q);
      });
      bank.questions = updated;
  // Persistimos en localStorage para no perder cambios en recarga
  try{ localStorage.setItem('bank-edits-'+bank.id, JSON.stringify(bank.questions)); }catch(e){}
      if(typeof this.normalizeAllQuestionData==='function') this.normalizeAllQuestionData();
      alert('✔ Guardado y normalizado ('+updated.length+' preguntas).');
      this.render();
    },
    bulkNormalize(bankId){
      if(typeof this.normalizeAllQuestionData==='function'){ this.normalizeAllQuestionData(); alert('Re-normalización completa.'); }
    },
    exportBank(bankId){
      const bank = this.specialties[this.currentSpecialty].questionBanks[bankId];
      const dataStr = JSON.stringify(bank.questions,null,2);
      const blob = new Blob([dataStr], {type:'application/json'});
      const a=document.createElement('a');
      a.href=URL.createObjectURL(blob);
      a.download= bank.id + '-questions.json';
      a.click();
    },
  });
  // Delegación para eliminar filas dentro del editor (document-level para simplicidad)
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-action="del"]');
    if(!btn) return;
    const tr = btn.closest('tr');
    if(!tr) return;
    if(!confirm('¿Eliminar esta pregunta?')) return;
    tr.remove();
  });
  // Al cargar, intentar restaurar ediciones previas guardadas
  document.addEventListener('DOMContentLoaded', ()=>{
    if(!window.academiaUmbramed) return;
    const inst = window.academiaUmbramed;
    if(!inst.specialties) return;
    try{
      Object.values(inst.specialties).forEach(spec=>{
        Object.values(spec.questionBanks).forEach(bank=>{
          const saved = localStorage.getItem('bank-edits-'+bank.id);
            if(saved){
              try { const parsed = JSON.parse(saved); if(Array.isArray(parsed) && parsed.length) bank.questions = parsed; } catch(_){ }
            }
        });
      });
    }catch(err){}
  });
})();

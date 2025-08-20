// Results rendering & analysis module
(function(){
  if(!window.AcademiaUmbramed) return;
  Object.assign(AcademiaUmbramed.prototype, {
    generateCategoryAnalysis(results){
      const categories = {};
      results.results.forEach(r=>{ if(!categories[r.category]) categories[r.category]={total:0,correct:0}; categories[r.category].total++; if(r.isCorrect) categories[r.category].correct++; });
      const html=[];
      Object.keys(categories).forEach(cat=>{
        const stats=categories[cat];
        const percentage=((stats.correct / stats.total)*100).toFixed(1);
        const color= percentage>=70?'#28a745': percentage>=50?'#ffc107':'#dc3545';
        html.push('<div style="display:flex;justify-content:space-between;align-items:center;padding:1rem;margin-bottom:1rem;border-radius:10px;background:#f8f9fa;">');
        html.push('<div style="flex:1;"><div style="font-weight:600;color:var(--accent-black);">'+cat+'</div><div style="color:var(--text-light);font-size:.9rem;">'+stats.correct+' de '+stats.total+' correctas</div></div>');
        html.push('<div style="text-align:right;"><div style="font-size:1.5rem;font-weight:700;color:'+color+';">'+percentage+'%</div></div></div>');
      });
      return html.join('');
    },
    renderTestResultsView(){
      const results = this.testResults;
      const bank = this.specialties[this.currentSpecialty].questionBanks[results.bankId];
      const minutes = Math.floor(results.totalTime / 60);
      const seconds = results.totalTime % 60;
      const html=[];
      html.push('<div class="breadcrumb">');
      html.push('<a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > ');
      html.push('<a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >');
      html.push('<a href="#" onclick="academiaUmbramed.selectSpecialty(\'' + this.currentSpecialty + '\')">' + this.specialties[this.currentSpecialty].name + '</a> >');
      html.push('<a href="#" onclick="academiaUmbramed.openQuestionBank(\'' + results.bankId + '\')">' + results.bankName + '</a> >');
      html.push('<span>Resultados</span></div>');
      html.push('<div class="dashboard-card">');
      html.push('<div style="text-align:center;margin-bottom:3rem;">');
      html.push('<div style="font-size:5rem;margin-bottom:1rem;">' + (results.passed ? '🎉':'📚') + '</div>');
      html.push('<h1 style="color:var(--accent-black);font-size:2.5rem;font-weight:700;margin-bottom:.5rem;">' + (results.passed ? '¡Felicitaciones!':'¡Sigue Practicando!') + '</h1>');
      html.push('<p style="color:var(--text-light);font-size:1.2rem;">' + (results.isCategory ? 'Test de ' + results.category : 'Test Aleatorio') + ' completado</p></div>');
      html.push('<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin-bottom:3rem;">');
      html.push('<div style="background:' + (results.passed ? '#28a745':'#dc3545') + ';color:white;padding:2rem;border-radius:20px;text-align:center;"><div style="font-size:3rem;font-weight:700;margin-bottom:.5rem;">' + results.percentage + '%</div><div style="font-size:1.1rem;opacity:.9;">Puntuación Final</div></div>');
      html.push('<div style="background:#28a745;color:white;padding:2rem;border-radius:20px;text-align:center;"><div style="font-size:3rem;font-weight:700;margin-bottom:.5rem;">' + results.correct + '</div><div style="font-size:1.1rem;opacity:.9;">Correctas</div></div>');
      html.push('<div style="background:#dc3545;color:white;padding:2rem;border-radius:20px;text-align:center;"><div style="font-size:3rem;font-weight:700;margin-bottom:.5rem;">' + results.incorrect + '</div><div style="font-size:1.1rem;opacity:.9;">Incorrectas</div></div>');
      html.push('<div style="background:#6c757d;color:white;padding:2rem;border-radius:20px;text-align:center;"><div style="font-size:3rem;font-weight:700;margin-bottom:.5rem;">' + minutes + ':' + seconds.toString().padStart(2,'0') + '</div><div style="font-size:1.1rem;opacity:.9;">Tiempo Total</div></div></div>');
      html.push('<div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin-bottom:3rem;">');
      html.push('<button onclick="academiaUmbramed.showDetailedResults()" style="background:' + bank.color + ';color:white;border:none;padding:1rem 2rem;border-radius:25px;font-weight:600;cursor:pointer;">📋 Ver Respuestas Detalladas</button>');
      html.push('<button onclick="academiaUmbramed.startRandomTest(\'' + results.bankId + '\')" style="background:#17a2b8;color:white;border:none;padding:1rem 2rem;border-radius:25px;font-weight:600;cursor:pointer;">🔄 Repetir Test</button>');
      html.push('<button onclick="academiaUmbramed.openQuestionBank(\'' + results.bankId + '\')" style="background:#6c757d;color:white;border:none;padding:1rem 2rem;border-radius:25px;font-weight:600;cursor:pointer;">← Volver al Banco</button></div>');
      html.push('<div style="background:white;border-radius:15px;padding:2rem;box-shadow:0 10px 30px rgba(0,0,0,0.1);">');
      html.push('<h3 style="color:var(--accent-black);margin-bottom:2rem;text-align:center;">📊 Análisis por Categorías</h3>');
      html.push(this.generateCategoryAnalysis(results));
      html.push('</div></div>');
      return html.join('');
    },
    renderDetailedResultsView(){
      const results = this.testResults;
      const bank = this.specialties[this.currentSpecialty].questionBanks[results.bankId];
      const html=[];
      html.push('<div class="breadcrumb">');
      html.push('<a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > ');
      html.push('<a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >');
      html.push('<a href="#" onclick="academiaUmbramed.selectSpecialty(\'' + this.currentSpecialty + '\')">' + this.specialties[this.currentSpecialty].name + '</a> >');
      html.push('<a href="#" onclick="academiaUmbramed.openQuestionBank(\'' + results.bankId + '\')">' + results.bankName + '</a> >');
      html.push('<span>Respuestas Detalladas</span></div>');
      html.push('<div class="dashboard-card">');
      html.push('<h1 style="color:var(--accent-black);font-size:2rem;font-weight:700;margin-bottom:2rem;text-align:center;">📋 Respuestas Detalladas</h1>');
      html.push('<div style="margin-bottom:2rem;text-align:center;"><button onclick="academiaUmbramed.currentView=\'test-results\'; academiaUmbramed.render();" style="background:' + bank.color + ';color:white;border:none;padding:1rem 2rem;border-radius:25px;font-weight:600;cursor:pointer;">← Volver a Resultados</button></div>');
      html.push('<div style="display:grid;gap:2rem;">');
      results.results.forEach((result, index)=>{
        const statusColor = result.status === 'correct' ? '#28a745' : result.status === 'incorrect' ? '#dc3545' : '#6c757d';
        const statusIcon = result.status === 'correct' ? '✅' : result.status === 'incorrect' ? '❌' : '⚪';
        html.push('<div style="background:white;border-radius:15px;padding:2rem;box-shadow:0 10px 30px rgba(0,0,0,0.1);border-left:5px solid ' + statusColor + ';">');
        html.push('<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">');
        html.push('<div style="display:flex;align-items:center;gap:1rem;">');
        html.push('<div style="font-size:1.5rem;">' + statusIcon + '</div>');
        html.push('<div><div style="font-weight:700;color:var(--accent-black);font-size:1.1rem;">Pregunta ' + (index + 1) + '</div><div style="color:var(--text-light);font-size:.9rem;">' + result.category + ' | ' + result.difficulty + '</div></div></div>');
        html.push('<div style="background:' + statusColor + ';color:white;padding:.5rem 1rem;border-radius:20px;font-weight:600;font-size:.9rem;">' + (result.status === 'correct' ? 'CORRECTA' : result.status === 'incorrect' ? 'INCORRECTA' : 'SIN RESPONDER') + '</div></div>');
        html.push('<h3 style="color:var(--accent-black);font-size:1.2rem;font-weight:600;line-height:1.6;margin-bottom:1.5rem;">' + result.question + '</h3>');
        html.push('<div style="display:grid;gap:.8rem;margin-bottom:1.5rem;">');
        result.options.forEach((option,optIndex)=>{
          const isCorrect = optIndex === result.correct;
          const isUserAnswer = optIndex === result.userAnswer;
          let optionStyle = 'background:#f8f9fa;border:2px solid #e9ecef;';
          if (isCorrect) optionStyle = 'background:#d4edda;border:2px solid #28a745;';
          else if (isUserAnswer && !isCorrect) optionStyle = 'background:#f8d7da;border:2px solid #dc3545;';
          html.push('<div style="' + optionStyle + 'padding:1rem;border-radius:10px;">' + '<span style="font-weight:600;margin-right:.5rem;">' + String.fromCharCode(65 + optIndex) + ') </span>' + option + (isCorrect ? ' ✅' : '') + (isUserAnswer && !isCorrect ? ' ❌ Tu respuesta' : '') + '</div>');
        });
        html.push('</div>');
        if (result.explanation) html.push('<div style="background:#f1f3f5;padding:1rem;border-radius:10px;font-size:.9rem;line-height:1.4;">💡 ' + result.explanation + '</div>');
        html.push('</div>');
      });
      html.push('</div><div style="text-align:center;margin-top:2rem;"><button onclick="academiaUmbramed.currentView=\'test-results\'; academiaUmbramed.render();" style="background:' + bank.color + ';color:white;border:none;padding:1rem 2rem;border-radius:25px;font-weight:600;cursor:pointer;">← Volver a Resultados</button></div></div>');
      return html.join('');
    }
  });
})();

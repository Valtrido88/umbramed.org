// Tests & quiz core logic extracted from legacy campus-extension.js
(function(){
  if(!window.AcademiaUmbramed) return;
  Object.assign(AcademiaUmbramed.prototype, {
    // --- Test helpers ---
    shuffleArray(array){
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    startRandomTest(bankId){
      const specialty = this.specialties[this.currentSpecialty];
      const bank = specialty.questionBanks[bankId];
      if (!bank.questions || bank.questions.length === 0) {
        alert('⚠️ Este banco no tiene preguntas disponibles.\n\nAgrega preguntas primero para poder realizar el test.');
        return;
      }
      this.currentTest = {
        bankId,
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
    startCategoryTest(category, bankId){
      const specialty = this.specialties[this.currentSpecialty];
      const bank = specialty.questionBanks[bankId];
      const categoryQuestions = bank.questions.filter(q => q.category === category);
      if (categoryQuestions.length === 0) {
        alert(`⚠️ No hay preguntas disponibles en la categoría "${category}".\n\nAgrega preguntas a esta categoría primero.`);
        return;
      }
      this.currentTest = {
        bankId,
        bankName: bank.name,
        category,
        questions: this.shuffleArray([...categoryQuestions]),
        currentQuestionIndex: 0,
        answers: [],
        startTime: new Date(),
        isCategory: true
      };
      this.currentView = 'test';
      this.render();
    },
    filterByCategory(category){
      this.currentCategory = category;
      this.startCategoryTest(category, this.currentQuestionBank);
    },
    selectTestAnswer(answerIndex, element){
      if (!this.currentTest.answers) this.currentTest.answers = [];
      this.currentTest.answers[this.currentTest.currentQuestionIndex] = answerIndex;
      const allLabels = element.parentNode.querySelectorAll('label');
      allLabels.forEach(label => { label.style.borderColor = '#e9ecef'; label.style.background = 'white'; });
      const bank = this.specialties[this.currentSpecialty].questionBanks[this.currentTest.bankId];
      element.style.borderColor = bank.color;
      element.style.background = bank.color + '20';
    },
    previousQuestion(){
      if (this.currentTest.currentQuestionIndex > 0) { this.currentTest.currentQuestionIndex--; this.render(); }
    },
    nextQuestion(){
      if (this.currentTest.currentQuestionIndex < this.currentTest.questions.length - 1) { this.currentTest.currentQuestionIndex++; this.render(); }
    },
    exitTest(){
      if (confirm('¿Estás seguro de que quieres salir del test?\n\nSe perderá todo el progreso actual.')) {
        this.currentTest = null;
        this.openQuestionBank(this.currentQuestionBank);
      }
    },
    finishTest(){
      const unanswered = this.currentTest.questions.length - this.currentTest.answers.filter(a => a !== undefined).length;
      if (unanswered > 0) {
        if (!confirm(`Tienes ${unanswered} pregunta(s) sin responder.\n\n¿Quieres finalizar el test de todas formas?`)) return;
      }
      this.calculateTestResults();
      this.currentView = 'test-results';
      this.render();
    },
    calculateTestResults(){
      const test = this.currentTest;
      let correct = 0, incorrect = 0, unanswered = 0;
      const resultsArr = test.questions.map((question, index) => {
        const userAnswer = test.answers[index];
        const isCorrect = userAnswer === question.correct;
        if (userAnswer === undefined){
          unanswered++; return {...question, userAnswer: null, isCorrect: false, status: 'unanswered'};
        } else if (isCorrect){
          correct++; return {...question, userAnswer, isCorrect: true, status: 'correct'};
        } else {
          incorrect++; return {...question, userAnswer, isCorrect: false, status: 'incorrect'};
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
        results: resultsArr,
        passed: percentage >= 70
      };
    },
    renderTestView(){
      if (!this.currentTest || !this.currentTest.questions) return '<div>Error: No hay test configurado</div>';
      const test = this.currentTest;
      const currentQuestion = test.questions[test.currentQuestionIndex];
      const progress = ((test.currentQuestionIndex + 1) / test.questions.length) * 100;
      const timeElapsed = Math.floor((new Date() - test.startTime) / 1000);
      const minutes = Math.floor(timeElapsed / 60);
      const seconds = timeElapsed % 60;
      const specialty = this.specialties[this.currentSpecialty];
      const bank = specialty.questionBanks[test.bankId];
      const html = [];
      html.push('<div class="breadcrumb">');
      html.push('<a href="#" onclick="academiaUmbramed.goToDashboard()">🏠 Dashboard</a> > ');
      html.push('<a href="#" onclick="academiaUmbramed.showCampus()">🏫 Campus</a> >');
      html.push('<a href="#" onclick="academiaUmbramed.selectSpecialty(\'' + this.currentSpecialty + '\')">' + specialty.name + '</a> >');
      html.push('<a href="#" onclick="academiaUmbramed.openQuestionBank(\'' + test.bankId + '\')">' + test.bankName + '</a> >');
      html.push('<span>Test en Curso</span>');
      html.push('</div>');
      html.push('<div class="dashboard-card">');
      html.push('<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;padding:1.5rem;background:' + bank.color + '15;border-radius:15px;border-left:5px solid ' + bank.color + ';">');
      html.push('<div>');
      html.push('<h1 style="color:var(--accent-black);font-size:1.8rem;font-weight:700;margin:0;">' + bank.icon + ' ' + test.bankName + '</h1>');
      html.push('<p style="color:var(--text-light);margin:.5rem 0 0;">' + (test.isCategory ? 'Categoría: ' + test.category : 'Test Aleatorio') + ' | Pregunta ' + (test.currentQuestionIndex + 1) + ' de ' + test.questions.length + '</p>');
      html.push('</div>');
      html.push('<div style="text-align:right;">');
      html.push('<div style="font-size:1.5rem;font-weight:700;color:' + bank.color + ';">⏱️ ' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + '</div>');
      html.push('<div style="color:var(--text-light);font-size:.9rem;">Tiempo transcurrido</div>');
      html.push('</div></div>');
      html.push('<div style="background:#e9ecef;border-radius:10px;height:8px;margin-bottom:2rem;overflow:hidden;">');
      html.push('<div style="background:' + bank.color + ';height:100%;width:' + progress + '%;transition:width .3s ease;"></div></div>');
      html.push('<div style="background:white;border-radius:15px;padding:2rem;margin-bottom:2rem;box-shadow:0 10px 30px rgba(0,0,0,0.1);">');
      html.push('<div style="display:flex;gap:1rem;margin-bottom:1.5rem;">');
      html.push('<div style="background:' + bank.color + ';color:white;border-radius:10px;padding:.5rem 1rem;font-weight:700;font-size:.9rem;">' + currentQuestion.category + '</div>');
      html.push('<div style="background:' + bank.color + '30;color:' + bank.color + ';border-radius:10px;padding:.5rem 1rem;font-weight:600;font-size:.9rem;">' + currentQuestion.difficulty + '</div>');
      html.push('</div>');
      html.push('<h2 style="color:var(--accent-black);font-size:1.4rem;font-weight:600;line-height:1.6;margin-bottom:2rem;">' + (test.currentQuestionIndex + 1) + '. ' + currentQuestion.question + '</h2>');
      html.push('<div style="display:grid;gap:1rem;">');
      currentQuestion.options.forEach((option, index) => {
        html.push('<label style="display:flex;align-items:center;gap:1rem;padding:1rem;border:2px solid #e9ecef;border-radius:10px;cursor:pointer;transition:all .3s ease;background:white;' + (test.answers && test.answers[test.currentQuestionIndex] === index ? 'border-color:' + bank.color + ';background:' + bank.color + '20;' : '') + '" onclick="academiaUmbramed.selectTestAnswer(' + index + ', this)">\n<input type="radio" name="test-answer" value="' + index + '" ' + (test.answers && test.answers[test.currentQuestionIndex] === index ? 'checked' : '') + ' style="width:20px;height:20px;accent-color:' + bank.color + ';">\n<div style="flex:1;"><span style="font-weight:600;color:' + bank.color + ';margin-right:.5rem;">' + String.fromCharCode(65 + index) + ') </span>' + option + '</div></label>');
      });
      html.push('</div></div>');
      html.push('<div style="display:flex;justify-content:space-between;align-items:center;">');
      html.push('<button onclick="academiaUmbramed.previousQuestion()" ' + (test.currentQuestionIndex === 0 ? 'disabled' : '') + ' style="background:#6c757d;color:white;border:none;padding:1rem 2rem;border-radius:25px;font-weight:600;cursor:pointer;' + (test.currentQuestionIndex === 0 ? 'opacity:.5;cursor:not-allowed;' : '') + '">← Anterior</button>');
      html.push('<button onclick="academiaUmbramed.exitTest()" style="background:#ffdddd;color:#d9534f;border:none;padding:1rem 2rem;border-radius:25px;font-weight:600;cursor:pointer;">❌ Salir del Test</button>');
      if (test.currentQuestionIndex === test.questions.length - 1) {
        html.push('<button onclick="academiaUmbramed.finishTest()" style="background:' + bank.color + ';color:white;border:none;padding:1rem 2rem;border-radius:25px;font-weight:600;cursor:pointer;">✅ Finalizar Test</button>');
      } else {
        html.push('<button onclick="academiaUmbramed.nextQuestion()" style="background:' + bank.color + ';color:white;border:none;padding:1rem 2rem;border-radius:25px;font-weight:600;cursor:pointer;">Siguiente →</button>');
      }
      html.push('</div>');
      html.push('<div style="margin-top:2rem;padding:1rem;background:#f8f9fa;border-radius:10px;text-align:center;">');
      html.push('<div style="color:var(--text-light);font-size:.9rem;">💡 Puedes cambiar tu respuesta antes de pasar a la siguiente pregunta</div>');
      html.push('</div></div>');
      return html.join('');
    }
  });
})();

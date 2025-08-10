import React, { useState, useCallback } from 'react';
import { quizQuestions } from './services/quizData';
import { QuizMode } from './types';
import ModeSelector from './components/ModeSelector';
import QuizView from './components/QuizView';

const App: React.FC = () => {
  const [quizMode, setQuizMode] = useState<QuizMode | null>(null);
  const [quizState, setQuizState] = useState<'not_started' | 'in_progress' | 'finished'>('not_started');

  const handleStartQuiz = (mode: QuizMode) => {
    setQuizMode(mode);
    setQuizState('in_progress');
  };

  const handleFinishQuiz = () => {
    setQuizState('finished');
  };
  
  const handleRestart = () => {
    setQuizMode(null);
    setQuizState('not_started');
  };
  
  const Header = () => (
    <header className="bg-white shadow-md p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <div className="bg-slate-500 p-2 rounded-md">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3.75a2.25 2.25 0 014.5 0v3.75a2.25 2.25 0 01-4.5 0V3.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 7.5h.01M15.5 7.5h.01M4.5 10.5v5.25A2.25 2.25 0 006.75 18h10.5a2.25 2.25 0 002.25-2.25V10.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25h6" />
                </svg>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Test PAI: Enfermedad de Parkinson</h1>
        </div>
         {quizState !== 'not_started' && (
           <button onClick={handleRestart} className="text-sm font-semibold text-slate-700 hover:text-slate-800 transition-colors">Reiniciar</button>
        )}
      </div>
    </header>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        {quizState === 'not_started' ? (
          <ModeSelector onStart={handleStartQuiz} />
        ) : (
          <QuizView
            mode={quizMode!}
            questions={quizQuestions}
            quizState={quizState}
            onFinish={handleFinishQuiz}
            onRestart={handleRestart}
          />
        )}
      </main>
      <footer className="text-center p-4 text-gray-500 text-xs">
          Creado para la preparación de la oposición de Atención Primaria del SAS (2024).
      </footer>
    </div>
  );
};

export default App;
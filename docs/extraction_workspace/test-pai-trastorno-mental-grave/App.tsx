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
            <div className="bg-purple-600 p-2 rounded-md">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.871 4.016c.33.09 1.439.43 1.954 1.222.515.792.93 2.028.93 3.313 0 1.285-.415 2.521-.93 3.313-.515.792-1.624 1.132-1.954 1.222M19.129 4.016c-.33.09-1.439.43-1.954 1.222-.515.792-.93 2.028-.93 3.313 0 1.285.415 2.521.93 3.313.515.792 1.624 1.132 1.954 1.222M9.25 4.752a11.955 11.955 0 014.5 0M9.25 18.248a11.955 11.955 0 004.5 0M12 21.75c-4.142 0-7.5-3.478-7.5-7.75S7.858 6.25 12 6.25s7.5 3.478 7.5 7.75-3.358 7.75-7.5 7.75z" />
                </svg>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Test PAI: Trastorno Mental Grave</h1>
        </div>
         {quizState !== 'not_started' && (
           <button onClick={handleRestart} className="text-sm font-semibold text-purple-700 hover:text-purple-800 transition-colors">Reiniciar</button>
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
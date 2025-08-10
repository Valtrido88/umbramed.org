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
            <div className="bg-pink-400 p-2 rounded-md">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.08-1.28-.23-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.08-1.28.23-1.857m10.314-5.408a2.032 2.032 0 01-2.287.033L12 11.05l-4.106 2.228a2.032 2.032 0 01-2.287-.033L3.106 7.69a2.032 2.032 0 01-.033-2.287l2.228-4.106a2.032 2.032 0 012.287-.033L12 3.95l4.106-2.228a2.032 2.032 0 012.287.033l2.228 4.106a2.032 2.032 0 01.033 2.287l-2.228 4.106z" />
                </svg>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Test PAI: Transexualidad (Infancia y Adolescencia)</h1>
        </div>
         {quizState !== 'not_started' && (
           <button onClick={handleRestart} className="text-sm font-semibold text-pink-700 hover:text-pink-800 transition-colors">Reiniciar</button>
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

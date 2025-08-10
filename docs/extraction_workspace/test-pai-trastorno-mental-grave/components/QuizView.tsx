
import React, { useState, useMemo, useRef } from 'react';
import { Question, QuizMode, UserAnswer } from '../types';
import QuestionCard from './QuestionCard';

interface QuizViewProps {
  mode: QuizMode;
  questions: Question[];
  quizState: 'in_progress' | 'finished';
  onFinish: () => void;
  onRestart: () => void;
}

const ResultsHeader: React.FC<{ score: number; total: number; onRestart: () => void }> = ({ score, total, onRestart }) => {
    const percentage = Math.round((score / total) * 100);
    const getResultFeedback = () => {
        if (percentage >= 85) return { text: "¡Excelente! Un resultado sobresaliente.", color: "text-green-600", bgColor: "bg-green-50" };
        if (percentage >= 70) return { text: "¡Muy bien! Estás en el camino correcto.", color: "text-blue-600", bgColor: "bg-blue-50" };
        if (percentage >= 50) return { text: "¡Buen trabajo! Sigue repasando para afianzar conceptos.", color: "text-yellow-600", bgColor: "bg-yellow-50" };
        return { text: "Sigue estudiando. La práctica hace al maestro.", color: "text-red-600", bgColor: "bg-red-50" };
    };
    const feedback = getResultFeedback();

    return (
        <div className={`p-6 rounded-lg shadow-lg text-center mb-8 animate__animated animate__fadeInDown ${feedback.bgColor}`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Resultados del Examen</h2>
            <div className="text-5xl font-bold text-cyan-500 my-2">{percentage}%</div>
            <p className="text-lg font-semibold text-gray-700">
                ({score} de {total} respuestas correctas)
            </p>
            <p className={`text-md font-semibold mt-2 ${feedback.color}`}>{feedback.text}</p>
        </div>
    );
};


const QuizView: React.FC<QuizViewProps> = ({ mode, questions, quizState, onFinish, onRestart }) => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const topRef = useRef<HTMLDivElement>(null);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };
  
  const userAnswers: UserAnswer[] = useMemo(() => {
    return questions.map(q => {
        const answerIndex = answers[q.id];
        const isCorrect = answerIndex === q.correctAnswerIndex;
        return { questionId: q.id, answerIndex, isCorrect };
    });
  }, [answers, questions]);

  const score = useMemo(() => {
    return userAnswers.filter(a => a.isCorrect).length;
  }, [userAnswers]);

  const handleSubmit = () => {
    onFinish();
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const isGraded = quizState === 'finished';

  return (
    <div ref={topRef}>
      {isGraded && <ResultsHeader score={score} total={questions.length} onRestart={onRestart} />}
      
      <div className="space-y-6">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            questionNumber={index + 1}
            mode={mode}
            isGraded={isGraded}
            selectedAnswer={answers[question.id]}
            correctAnswerIndex={question.correctAnswerIndex}
            onAnswerSelect={handleAnswerSelect}
          />
        ))}
      </div>
      
      {!isGraded && (
        <div className="mt-10 text-center">
            <button 
                onClick={handleSubmit}
                className="bg-teal-500 text-white font-bold py-4 px-10 rounded-lg hover:bg-teal-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 shadow-lg text-xl"
            >
                Corregir Examen
            </button>
        </div>
      )}
    </div>
  );
};

export default QuizView;

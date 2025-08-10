
import React from 'react';
import { Question, QuizMode, Difficulty } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  mode: QuizMode;
  isGraded: boolean;
  selectedAnswer?: number;
  correctAnswerIndex: number;
  onAnswerSelect: (questionId: number, answerIndex: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  mode,
  isGraded,
  selectedAnswer,
  correctAnswerIndex,
  onAnswerSelect,
}) => {
  const isAnswered = selectedAnswer !== undefined;

  const handleSelect = (index: number) => {
    if (isGraded) return;
    onAnswerSelect(question.id, index);
  };

  const getButtonClass = (index: number) => {
    // Not graded yet
    if (!isGraded) {
      if (index === selectedAnswer) {
        return 'bg-cyan-100 border-cyan-500 ring-2 ring-cyan-300';
      }
      return 'bg-white hover:bg-cyan-50 border-gray-300';
    }

    // Graded state
    const isCorrect = index === correctAnswerIndex;
    if (isCorrect) {
      return 'bg-green-100 border-green-500 text-green-800 font-semibold';
    }
    if (index === selectedAnswer && !isCorrect) {
      return 'bg-red-100 border-red-500 text-red-800 font-semibold';
    }
    return 'bg-white border-gray-300 opacity-60';
  };

  const showRationale = (mode === QuizMode.STUDY && isAnswered) || isGraded;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp" id={`q-${question.id}`}>
      <p className="font-bold text-lg text-gray-800 mb-4">
        <span className="text-cyan-600">{questionNumber}.</span> {question.questionText}
      </p>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={isGraded}
            className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 flex items-center space-x-4 ${getButtonClass(index)}`}
          >
            <span className="flex-shrink-0 font-bold text-gray-700">{String.fromCharCode(65 + index)}.</span>
            <span className="flex-grow">{option.text}</span>
          </button>
        ))}
      </div>

      {showRationale && (
        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-yellow-800">Respuesta Razonada</p>
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                question.difficulty === Difficulty.EASY ? 'bg-green-200 text-green-800' :
                question.difficulty === Difficulty.MEDIUM ? 'bg-yellow-200 text-yellow-800' :
                'bg-red-200 text-red-800'
              }`}
            >
              Dificultad: {question.difficulty}
            </span>
          </div>
          <p className="text-gray-700">{question.rationale}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

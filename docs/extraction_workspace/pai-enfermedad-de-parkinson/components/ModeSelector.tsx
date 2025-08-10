import React from 'react';
import { QuizMode } from '../types';

interface ModeSelectorProps {
  onStart: (mode: QuizMode) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ onStart }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto animate__animated animate__fadeIn">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Bienvenido al Test Interactivo</h2>
      <p className="text-center text-gray-600 mb-8">
        Este test está basado en el Proceso Asistencial Integrado de Enfermedad de Parkinson del SAS (1ª Ed. 2015). Las respuestas han sido verificadas. ¡Mucha suerte!
      </p>
      <div className="text-center text-gray-600 mb-8">
        <p className="font-semibold">Selecciona un modo para comenzar:</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="flex-1 text-center p-6 border-2 border-transparent hover:border-sky-500 hover:shadow-lg rounded-lg transition-all duration-300 bg-gray-50">
          <h3 className="text-xl font-semibold text-sky-600 mb-3">Modo Estudio</h3>
          <p className="text-gray-600 mb-6">Recibe la respuesta razonada y la dificultad de cada pregunta inmediatamente después de contestar. Ideal para aprender y repasar.</p>
          <button
            onClick={() => onStart(QuizMode.STUDY)}
            className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
          >
            Iniciar Modo Estudio
          </button>
        </div>
        <div className="flex-1 text-center p-6 border-2 border-transparent hover:border-pink-500 hover:shadow-lg rounded-lg transition-all duration-300 bg-gray-50">
          <h3 className="text-xl font-semibold text-pink-600 mb-3">Modo Examen</h3>
          <p className="text-gray-600 mb-6">Responde a todas las preguntas primero y revisa tus resultados y las explicaciones al final. Simula una prueba real.</p>
          <button
            onClick={() => onStart(QuizMode.EXAM)}
            className="w-full bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
          >
            Iniciar Modo Examen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModeSelector;
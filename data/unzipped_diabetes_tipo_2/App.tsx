import React, { useState } from 'react';
import ClinicalMode from './components/ClinicalMode';
import ResearchMode from './components/ResearchMode';

type AppMode = 'clinical' | 'research';

const ModeSwitcher: React.FC<{ mode: AppMode; setMode: (mode: AppMode) => void }> = ({ mode, setMode }) => {
  return (
    <div className="flex justify-center p-4 bg-gray-200">
      <div className="flex items-center space-x-2 bg-white p-1 rounded-full shadow-md">
        <button
          onClick={() => setMode('clinical')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
            mode === 'clinical' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-blue-100'
          }`}
        >
          <i className="fas fa-bolt mr-2"></i>Clínico Rápido
        </button>
        <button
          onClick={() => setMode('research')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
            mode === 'research' ? 'bg-indigo-600 text-white shadow' : 'text-gray-600 hover:bg-indigo-100'
          }`}
        >
          <i className="fas fa-database mr-2"></i>Investigación
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
    const [mode, setMode] = useState<AppMode>('clinical');

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            <header className="bg-white shadow-md sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-3xl font-bold text-center text-blue-600">
                        <i className="fas fa-stethoscope mr-3"></i>Asistente de Diabetes Tipo 2
                    </h1>
                </div>
                <ModeSwitcher mode={mode} setMode={setMode} />
            </header>

            <main className="container mx-auto p-4 md:p-6">
                {mode === 'clinical' ? <ClinicalMode /> : <ResearchMode />}
            </main>
             <footer className="text-center py-4 text-gray-500 text-xs">
                <p>Herramienta de IA con fines educativos. Siempre consulte a un profesional médico.</p>
            </footer>
        </div>
    );
};

export default App;

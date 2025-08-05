import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { InputArea } from './components/InputArea';
import { ReportDisplay } from './components/ReportDisplay';
import { CameraModal } from './components/CameraModal';
import { analyzeLabReport } from './services/geminiService';
import { type ReportData } from './types';
import { DISCLAIMER_TEXT } from './constants';

const App: React.FC = () => {
  const [labReportText, setLabReportText] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<ReportData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);

  const handleAnalyze = useCallback(async () => {
    if (!labReportText.trim() && !selectedFile) {
      setError('Por favor, suba un archivo o pegue el informe del laboratorio antes de analizar.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeLabReport(labReportText, selectedFile);
      setAnalysisResult(result);
    } catch (err) {
      console.error(err);
      setError('Hubo un error al analizar el informe. Por favor, inténtelo de nuevo. Asegúrese de que la clave de API esté configurada.');
    } finally {
      setIsLoading(false);
    }
  }, [labReportText, selectedFile]);
  
  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
    if(file) {
      setError(null);
    }
  };

  const handleCapture = (file: File) => {
    setSelectedFile(file);
    setIsCameraOpen(false);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="print:hidden">
            <p className="text-center text-gray-600 mb-8">
              Suba, arrastre un archivo o use la cámara para capturar el informe del laboratorio. También puede pegar texto. La IA lo analizará para proporcionar una interpretación serológica y recomendaciones.
            </p>
            
            <InputArea
              textValue={labReportText}
              onTextChange={(e) => setLabReportText(e.target.value)}
              onAnalyze={handleAnalyze}
              isLoading={isLoading}
              disabled={isLoading}
              selectedFile={selectedFile}
              onFileChange={handleFileChange}
              onOpenCamera={() => setIsCameraOpen(true)}
            />

            {error && (
              <div className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            )}
          </div>

          <ReportDisplay
            report={analysisResult}
            isLoading={isLoading}
            disclaimer={DISCLAIMER_TEXT}
          />
        </div>
      </main>

      <CameraModal 
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handleCapture}
      />

      <footer className="text-center p-4 text-gray-500 text-sm print:hidden">
        <p>&copy; {new Date().getFullYear()} Interpretador Serológico VHB. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
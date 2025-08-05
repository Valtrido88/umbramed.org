import React, { useState, useRef } from 'react';
import { type ReportData, type DetectedMarker } from '../types';
import { Spinner } from './Spinner';
import { IconCheckCircle, IconClipboardList, IconExclamation, IconLightBulb, IconSparkles, IconCopy, IconPrinter } from './Icon';

interface ReportDisplayProps {
  report: ReportData | null;
  isLoading: boolean;
  disclaimer: string;
}

const ReportSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; }> = ({ title, icon, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6 print:shadow-none print:border-b">
    <div className="flex items-center mb-4">
      <div className="text-blue-600 mr-3">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="prose prose-blue max-w-none text-gray-600">
      {children}
    </div>
  </div>
);

const MarkerTable: React.FC<{ markers: DetectedMarker[] }> = ({ markers }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marcador</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resultado</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interpretación</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {markers.map((m, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{m.marker}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{m.value}</td>
            <td className="px-6 py-4 text-sm text-gray-500">{m.interpretation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ReportDisplay: React.FC<ReportDisplayProps> = ({ report, isLoading, disclaimer }) => {
  const [isCopied, setIsCopied] = useState(false);
  const reportContentRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (!report || !reportContentRef.current) return;

    const markersText = report.detectedMarkers.map(m => `- ${m.marker}: ${m.value} (${m.interpretation})`).join('\n');

    const textToCopy = `
INFORME DE ANÁLISIS SEROLÓGICO DE HEPATITIS B
Generado por UMBRAMED
-------------------------------------------------

ESTADO SEROLÓGICO:
${report.serologicalStatus}

RESUMEN CLÍNICO:
${report.summary}

INTERPRETACIÓN DETALLADA:
${report.interpretation}

RECOMENDACIONES:
- ${report.recommendations.join('\n- ')}

MARCADORES DETECTADOS:
${markersText}

-------------------------------------------------
${disclaimer}
    `.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
    }).catch(err => {
        console.error('Error al copiar el informe:', err);
        alert('No se pudo copiar el informe. Por favor, inténtelo manualmente.');
    });
  };

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    return <Spinner message="Generando informe... por favor espere." />;
  }

  if (!report) {
    return null;
  }

  return (
    <div className="mt-8 animate-fade-in">
        <div className="mb-6 flex justify-end items-center gap-x-3 print:hidden">
            <button
                onClick={handleCopy}
                className="flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-all duration-200"
            >
                <IconCopy className={`w-5 h-5 mr-2 transition-colors ${isCopied ? 'text-green-500' : ''}`} />
                {isCopied ? '¡Copiado!' : 'Copiar Informe'}
            </button>
            <button
                onClick={handlePrint}
                className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                <IconPrinter className="w-5 h-5 mr-2" />
                Imprimir
            </button>
        </div>
      
        <div ref={reportContentRef} className="print:shadow-none print:border-none">
            <div className="hidden print:block mb-8">
                <div className="flex justify-between items-center border-b pb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Informe Serológico VHB</h1>
                    <div className="text-lg font-bold text-gray-600 tracking-wider">
                        UMBRA<span className="text-blue-600">MED</span>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center print:text-left">Informe de Análisis Serológico</h2>
            <p className="text-center text-gray-600 mb-6 print:text-left">Generado por IA con base en guías clínicas actuales.</p>
            
            <ReportSection title="Estado Serológico" icon={<IconSparkles className="w-6 h-6" />}>
              <p className="text-2xl font-bold text-blue-700">{report.serologicalStatus}</p>
            </ReportSection>

            <ReportSection title="Resumen Clínico" icon={<IconClipboardList className="w-6 h-6" />}>
               <p>{report.summary}</p>
            </ReportSection>

            <ReportSection title="Marcadores Detectados" icon={<IconCheckCircle className="w-6 h-6" />}>
               <MarkerTable markers={report.detectedMarkers} />
            </ReportSection>

            <ReportSection title="Interpretación Detallada" icon={<IconLightBulb className="w-6 h-6" />}>
               <p>{report.interpretation}</p>
            </ReportSection>

            <ReportSection title="Recomendaciones" icon={<IconClipboardList className="w-6 h-6" />}>
               <ul className="list-disc pl-5 space-y-2">
                {report.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </ReportSection>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md print:border-none print:bg-gray-100 print:mt-12">
                <div className="flex">
                    <div className="flex-shrink-0">
                       <IconExclamation className="h-5 w-5 text-yellow-400 print:hidden" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700 print:text-gray-600 print:font-semibold">Aviso:</p>
                        <p className="text-sm text-yellow-700 print:text-gray-600">{disclaimer}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
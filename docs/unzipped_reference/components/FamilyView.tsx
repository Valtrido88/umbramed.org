import React, { useState } from 'react';
import { generateFamilyAdvice } from '../services/geminiService';
import Spinner from './Spinner';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { PrinterIcon } from './icons/PrinterIcon';

interface FamilyViewProps {
    onBack: () => void;
}

const FamilyView: React.FC<FamilyViewProps> = ({ onBack }) => {
    const [letterContent, setLetterContent] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleGenerateLetter = async () => {
        setIsLoading(true);
        setLetterContent('');
        try {
            const advice = await generateFamilyAdvice();
            setLetterContent(advice);
        } catch (error) {
            console.error(error);
            setLetterContent('No se pudo cargar el contenido. Inténtelo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    const handlePrint = () => {
        const contentToPrint = document.getElementById('letter-content');
        if (!contentToPrint) return;

        const printWindow = window.open('', '', 'height=800,width=800');
        if (!printWindow) {
            alert("El bloqueo de ventanas emergentes puede estar impidiendo la impresión. Por favor, permítalas para este sitio.");
            return;
        }

        printWindow.document.write('<html><head><title>Carta para Familiares y Cuidadores</title>');
        printWindow.document.write('<link rel="stylesheet" href="https://rsms.me/inter/inter.css">');
        printWindow.document.write('<script src="https://cdn.tailwindcss.com"></script>');
        printWindow.document.write(`
            <style>
                body { font-family: 'Inter', sans-serif; padding: 2rem; }
                h1 { font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; }
            </style>
        `);
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div class="prose prose-sm max-w-none prose-slate">');
        printWindow.document.write(contentToPrint.innerHTML);
        printWindow.document.write('</div>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        
        setTimeout(() => {
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }, 750);
    };
    
    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={onBack}
                className="mb-6 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors"
            >
                &larr; Volver a la selección de rol
            </button>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200/80">
                 <div className="flex items-start mb-4">
                    <div className="text-sky-500 mr-4 mt-1 flex-shrink-0">
                        <BookOpenIcon />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Carta de Apoyo para la Familia</h2>
                        <p className="text-slate-500 mt-1">Una guía unificada con consejos para comprender y acompañar en el proceso final de la vida.</p>
                    </div>
                </div>

                <div className="mt-6">
                    {!letterContent && !isLoading && (
                        <div className="text-center">
                            <p className="mb-4 text-slate-600">Haga clic en el botón para generar una carta con información y apoyo práctico.</p>
                             <button
                                onClick={handleGenerateLetter}
                                className="w-full max-w-xs mx-auto flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                            >
                                Generar Carta
                            </button>
                        </div>
                    )}

                    {isLoading && <div className="py-8"><Spinner /></div>}

                    {letterContent && (
                        <div>
                            <div
                                id="letter-content"
                                className="prose prose-sm max-w-none prose-slate"
                                dangerouslySetInnerHTML={{ __html: letterContent.replace(/\n/g, '<br />') }}
                            ></div>
                            <div className="mt-8 text-right">
                                <button
                                    onClick={handlePrint}
                                    className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                >
                                    <PrinterIcon />
                                    <span className="ml-2">Imprimir Carta</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FamilyView;


import React, { useState, useRef, useCallback, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import { UmbramedLogo, DnaChain } from './constants';
import { generateObesityPlan, generateNutrientRichDiet, generateFoodInteractionInfo, generateHighMetaboliteFoods, generateConditionDiet } from './services/geminiService';
import type { AppSection, ObesityPlan, NutrientRichDiet, FoodInteractionInfo, HighMetaboliteFoods, ConditionDiet } from './types';
import Spinner from './components/Spinner';
import { PrintableContent } from './components/PrintableContent';

const NavButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}> = ({ label, isActive, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive ? 'bg-red-600 text-white shadow-lg' : 'hover:bg-red-100 hover:text-red-700 text-gray-600'
    }`}
  >
    <span className="mr-3">{icon}</span>
    <span className="font-medium">{label}</span>
  </button>
);

const Section: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <DnaChain className="w-24 h-4 mb-6" />
        {children}
    </div>
);

const ActionButton: React.FC<{
  onClick: () => void;
  label: string;
  isLoading: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode
}> = ({ onClick, label, isLoading, disabled, className, icon }) => (
    <button
        onClick={onClick}
        disabled={isLoading || disabled}
        className={`flex justify-center items-center px-6 py-3 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none ${className}`}
    >
        {isLoading ? <Spinner /> : (
            <>
                {icon && <span className="mr-2">{icon}</span>}
                {label}
            </>
        )}
    </button>
);

const ObesityTool: React.FC<{ setPrintableData: (data: any, title: string) => void }> = ({ setPrintableData }) => {

    const [formData, setFormData] = useState({ age: 45, weight: 90, height: 175, gender: 'masculino' as 'masculino'|'femenino', activity: 'sedentario', preferences: 'Ninguna' });
    const [plan, setPlan] = useState<ObesityPlan | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [csvData, setCsvData] = useState<string>('');

    // Fallback localStorage
    const safeLocalStorage = {
        getItem: (key: string) => {
            try { return localStorage.getItem(key); } catch { return null; }
        },
        setItem: (key: string, value: string) => {
            try { localStorage.setItem(key, value); } catch { }
        },
        removeItem: (key: string) => {
            try { localStorage.removeItem(key); } catch { }
        }
    };

    useEffect(() => {
        const savedData = safeLocalStorage.getItem('umbramed_patient_data');
        if (savedData) {
            try { setFormData(JSON.parse(savedData)); } catch { safeLocalStorage.removeItem('umbramed_patient_data'); }
        }
    }, []);

    useEffect(() => {
        safeLocalStorage.setItem('umbramed_patient_data', JSON.stringify(formData));
    }, [formData]);

    // Validación avanzada
    const validateForm = () => {
        if (formData.age < 1 || formData.age > 120) return 'Edad fuera de rango (1-120 años).';
        if (formData.weight < 20 || formData.weight > 300) return 'Peso fuera de rango (20-300 kg).';
        if (formData.height < 80 || formData.height > 250) return 'Altura fuera de rango (80-250 cm).';
        if (formData.preferences.length > 200) return 'Preferencias demasiado largas.';
        return '';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClearForm = () => {
        const clearedForm = { age: 0, weight: 0, height: 0, gender: 'masculino' as 'masculino'|'femenino', activity: 'sedentario', preferences: '' };
        setFormData(clearedForm);
        setPlan(null);
        setError('');
    }

    const handleSubmit = async () => {
        setError('');
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
        setIsLoading(true);
        setPlan(null);
        try {
            const result = await generateObesityPlan(formData);
            setPlan(result);
            setPrintableData(result, "Plan de Control de Peso");
            // Exportación CSV
            let csv = 'Día,Comida,Platos\n';
            result.planDieta.forEach(d => {
                d.comidas.forEach(c => {
                    csv += `${d.dia},${c.nombre},${c.platos.join(' | ')}\n`;
                });
            });
            setCsvData(csv);
        } catch (err: any) {
            if (err.message.includes('network')) {
                setError('Error de red. Verifica tu conexión.');
            } else if (err.message.includes('IA')) {
                setError('Error en el motor de IA. Intenta de nuevo más tarde.');
            } else {
                setError(`Error inesperado: ${err.message}`);
            }
            console.error(err);
        }
        setIsLoading(false);
    };

    const handleExportCSV = () => {
        if (!csvData) return;
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Plan_Umbramed_Dieta.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <Section title="Herramienta de Control de Obesidad">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div><label className="block text-sm font-medium text-gray-700">Edad</label><input type="number" name="age" value={formData.age} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-700">Peso (kg)</label><input type="number" name="weight" value={formData.weight} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-700">Altura (cm)</label><input type="number" name="height" value={formData.height} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-700">Sexo</label><select name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"><option value="masculino">Masculino</option><option value="femenino">Femenino</option></select></div>
                <div><label className="block text-sm font-medium text-gray-700">Actividad Física</label><select name="activity" value={formData.activity} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"><option value="sedentario">Sedentario</option><option value="ligera">Ligera</option><option value="moderada">Moderada</option><option value="intensa">Intensa</option></select></div>
                <div className="md:col-span-3"><label className="block text-sm font-medium text-gray-700">Preferencias/Alergias</label><textarea name="preferences" value={formData.preferences} onChange={handleChange} rows={2} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></textarea></div>
            </div>
            <div className="flex items-center gap-4">
              <ActionButton onClick={handleSubmit} label="Generar Plan Personalizado" isLoading={isLoading} aria-label="Generar plan personalizado" />
              <button onClick={handleClearForm} className="font-semibold text-gray-600 hover:text-red-600 transition" aria-label="Limpiar formulario">Limpiar Formulario</button>
              <button onClick={handleExportCSV} className="font-semibold text-green-600 hover:text-green-800 transition" aria-label="Exportar CSV" disabled={!csvData}>Exportar CSV</button>
            </div>
            {error && <p className="text-red-500 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg" role="alert">{error}</p>}
            {plan && (
                <div className="mt-8 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Plan de Dieta Sugerido</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2">
                            {plan.planDieta.map(d => <div key={d.dia} className="bg-gray-50 p-4 rounded-lg border">
                                <h4 className="font-bold text-red-700">{d.dia}</h4>
                                {d.comidas.map(c => <div key={c.nombre} className="mt-2"><p className="font-semibold">{c.nombre}</p><p className="text-sm text-gray-600">{c.platos.join(', ')}</p></div>)}
                            </div>)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Ejercicios Recomendados</h3>
                         <div className="space-y-3">
                            {plan.planEjercicios.map(e => <div key={e.nombre} className="bg-gray-50 p-3 rounded-lg border">
                                <h4 className="font-semibold text-red-700">{e.nombre} ({e.series_repeticiones})</h4>
                                <p className="text-sm text-gray-600">{e.descripcion}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
};

const GenericGeneratorTool: React.FC<{
    title: string;
    buttons: { label: string; value: string; }[];
    generatorFn: (value: string) => Promise<any>;
    ResultDisplayComponent: React.FC<{ data: any }>;
    setPrintableData: (data: any, title: string) => void;
}> = ({ title, buttons, generatorFn, ResultDisplayComponent, setPrintableData }) => {
    const [data, setData] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState<string | null>(null);
    const [error, setError] = useState('');

    const handleGenerate = async (value: string, label: string) => {
        setIsLoading(value);
        setError('');
        setData(null);
        try {
            const result = await generatorFn(value);
            setData(result);
            setPrintableData(result, label);
        } catch (err) {
            setError(`Error al generar la información sobre ${label}: ${(err as Error).message}`);
            console.error(err);
        }
        setIsLoading(null);
    };

    return (
        <Section title={title}>
            <div className="flex flex-wrap gap-3 mb-6">
                {buttons.map(btn => (
                    <ActionButton 
                      key={btn.value}
                      onClick={() => handleGenerate(btn.value, btn.label)}
                      label={btn.label}
                      isLoading={isLoading === btn.value}
                      className="bg-slate-600 hover:bg-slate-700"
                    />
                ))}
            </div>
            {error && <p className="text-red-500 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">{error}</p>}
            {data && <ResultDisplayComponent data={data} />}
        </Section>
    );
};

const NutrientResultDisplay: React.FC<{ data: NutrientRichDiet }> = ({ data }) => (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
        <h3 className="text-xl font-bold text-red-700 mb-2">{data.nombreDieta}</h3>
        <p className="mb-4 text-gray-700">{data.descripcion}</p>
        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h4 className="font-semibold text-lg mb-2">Alimentos Recomendados</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {data.alimentosRecomendados.map(food => <li key={food}>{food}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-lg mb-2">Ejemplo de Menú Diario</h4>
                <div className="bg-white p-3 rounded">
                    {data.planComidasEjemplo.comidas.map(meal => (
                        <div key={meal.nombre} className="mb-2">
                            <p className="font-bold">{meal.nombre}:</p>
                            <p className="text-sm text-gray-600">{meal.platos.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const FoodInfoResultDisplay: React.FC<{ data: FoodInteractionInfo | HighMetaboliteFoods }> = ({ data }) => {
    if('alimentosQueAumentanEfecto' in data) { // Sintrom
         return (
             <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="text-lg font-bold text-green-800 mb-2">AUMENTAN efecto Sintrom</h3>
                    {data.alimentosQueAumentanEfecto.map(item => <div key={item.nombre} className="mb-2"><p className="font-semibold">{item.nombre}</p><p className="text-sm">{item.explicacion}</p></div>)}
                </div>
                 <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-bold text-yellow-800 mb-2">DISMINUYEN efecto Sintrom</h3>
                    {data.alimentosQueDisminuyenEfecto.map(item => <div key={item.nombre} className="mb-2"><p className="font-semibold">{item.nombre}</p><p className="text-sm">{item.explicacion}</p></div>)}
                </div>
            </div>
         );
    }
    if('alimentosAltosEnTrigliceridos' in data) { // Metabolites
         return (
             <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h3 className="text-lg font-bold text-red-800 mb-2">Alimentos Altos en Triglicéridos</h3>
                    {data.alimentosAltosEnTrigliceridos.map(item => <div key={item.alimento} className="mb-2"><p className="font-semibold">{item.alimento}</p><p className="text-sm">{item.motivo}</p></div>)}
                </div>
                 <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Alimentos Altos en Ácido Úrico</h3>
                    {data.alimentosAltosEnAcidoUrico.map(item => <div key={item.alimento} className="mb-2"><p className="font-semibold">{item.alimento}</p><p className="text-sm">{item.motivo}</p></div>)}
                </div>
            </div>
         );
    }
    return null;
};

const ConditionResultDisplay: React.FC<{ data: ConditionDiet }> = ({ data }) => (
     <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
        <h3 className="text-xl font-bold text-red-700 mb-2">{data.nombre}</h3>
        <p className="mb-4 text-gray-700">{data.descripcion}</p>
        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h4 className="font-semibold text-lg mb-2">Consejos Clave</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {data.consejos.map(tip => <li key={tip}>{tip}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-lg mb-2">Ejemplo de Menú Diario</h4>
                <div className="bg-white p-3 rounded">
                    {data.planComidas.comidas.map(meal => (
                        <div key={meal.nombre} className="mb-2">
                            <p className="font-bold">{meal.nombre}:</p>
                            <p className="text-sm text-gray-600">{meal.platos.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);


const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<AppSection>('obesity');
    const [printableData, setPrintableData] = useState<any>(null);
    const [printableTitle, setPrintableTitle] = useState<string>('');
    const [isPrinting, setIsPrinting] = useState(false);
    const printableRef = useRef<HTMLDivElement>(null);

    const handleSetPrintableData = useCallback((data: any, title: string) => {
        setPrintableData(data);
        setPrintableTitle(title);
    }, []);
    
    const handlePrint = async () => {
        if (!printableRef.current || !printableData) {
            alert("No hay contenido para imprimir. Por favor, genere un plan primero.");
            return;
        }
        setIsPrinting(true);
        try {
            const canvas = await html2canvas(printableRef.current, {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                logging: false,
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
            });
            
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgProps = pdf.getImageProperties(imgData);
            const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pdfHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pdfHeight;
            }

            pdf.save(`Plan_Umbramed_${printableTitle.replace(/\s+/g, '_')}.pdf`);
        } catch(e) {
            console.error("Error al imprimir:", e);
            alert("Hubo un error al generar el PDF.");
        }
        setIsPrinting(false);
    };

    const nutrientButtons = [
        { label: "Dieta Rica en Hierro", value: "Hierro" },
        { label: "Dieta Rica en Yodo", value: "Yodo" },
        { label: "Dieta Rica en Calcio", value: "Calcio" },
        { label: "Dieta Rica en Vitamina B12", value: "Vitamina B12" },
        { label: "Dieta Rica en Ácido Fólico", value: "Ácido Fólico" },
        { label: "Dieta Rica en Vitamina D", value: "Vitamina D" },
    ];

     const foodInfoButtons = [
        { label: "Interacción con Sintrom", value: "sintrom" },
        { label: "Alimentos a Evitar (Triglicéridos/Ácido Úrico)", value: "metabolites" },
    ];

    const conditionButtons = [
        { label: "Dieta para Gastroenteritis", value: "gastroenteritis" },
        { label: "Dieta para Estreñimiento", value: "estreñimiento" },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'obesity':
                return <ObesityTool setPrintableData={handleSetPrintableData} />;
            case 'nutrients':
                return <GenericGeneratorTool 
                          title="Dietas Específicas por Nutrientes"
                          buttons={nutrientButtons}
                          generatorFn={(nutrient) => generateNutrientRichDiet(nutrient)}
                          ResultDisplayComponent={NutrientResultDisplay}
                          setPrintableData={handleSetPrintableData}
                        />;
            case 'foodInfo':
                return <GenericGeneratorTool 
                          title="Información sobre Alimentos"
                          buttons={foodInfoButtons}
                          generatorFn={(topic) => topic === 'sintrom' ? generateFoodInteractionInfo() : generateHighMetaboliteFoods()}
                          ResultDisplayComponent={FoodInfoResultDisplay}
                          setPrintableData={(data, title) => handleSetPrintableData(data, title === "Interacción con Sintrom" ? "Sintrom" : "Alimentos a Evitar")}
                        />;
            case 'conditions':
                 return <GenericGeneratorTool 
                          title="Dietas para Afecciones Comunes"
                          buttons={conditionButtons}
                          generatorFn={(condition) => generateConditionDiet(condition as 'gastroenteritis' | 'estreñimiento')}
                          ResultDisplayComponent={ConditionResultDisplay}
                          setPrintableData={handleSetPrintableData}
                        />;
            default:
                return null;
        }
    };
    
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
                <UmbramedLogo />
                <ActionButton onClick={handlePrint} label="Imprimir Plan Actual" isLoading={isPrinting} disabled={!printableData} icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7V9h6v3z" clipRule="evenodd" /></svg>
                } />
            </header>
            <div className="flex flex-col md:flex-row">
                <nav className="w-full md:w-64 bg-white md:min-h-screen p-4 space-y-2 border-r border-gray-200">
                    <NavButton label="Control de Obesidad" isActive={activeSection === 'obesity'} onClick={() => setActiveSection('obesity')} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 20l4-4"></path><path d="M19.5 12.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M15 22h4"></path><path d="M4 14h10"></path><path d="M4 18h1"></path><path d="M12 18h1"></path>
                        </svg>
                    } />
                    <NavButton label="Dietas por Nutrientes" isActive={activeSection === 'nutrients'} onClick={() => setActiveSection('nutrients')} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m5 0l-3-3m-2 16l3-3m-5 0l3 3M12 2v2m-2 16v2m-5-10H3m18 0h-2M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>} />
                    <NavButton label="Listas de Alimentos" isActive={activeSection === 'foodInfo'} onClick={() => setActiveSection('foodInfo')} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>} />
                    <NavButton label="Dietas Específicas" isActive={activeSection === 'conditions'} onClick={() => setActiveSection('conditions')} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>} />
                </nav>
                <main className="flex-1 p-4 md:p-8">
                    {renderSection()}
                </main>
            </div>
            <div className="absolute -left-[9999px] -top-[9999px]">
                <PrintableContent ref={printableRef} data={printableData} title={printableTitle} />
            </div>
        </div>
    );
};

export default App;

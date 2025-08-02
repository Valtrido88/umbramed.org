import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medication, CalculatorType } from '../types';
import { XMarkIcon, BookOpenIcon, CalculatorIcon } from './Icons';

// --- Calculators ---

const ApixabanCalculator: React.FC = () => {
    const [age, setAge] = useState<number | ''>('');
    const [weight, setWeight] = useState<number | ''>('');
    const [creatinine, setCreatinine] = useState<number | ''>('');

    const dose = useMemo(() => {
        if (age === '' || weight === '' || creatinine === '') return "Introduzca todos los valores.";
        let criteriaCount = 0;
        if (age >= 80) criteriaCount++;
        if (weight <= 60) criteriaCount++;
        if (creatinine >= 1.5) criteriaCount++;
        return criteriaCount >= 2 
            ? "Dosis recomendada: 2.5 mg dos veces al día." 
            : "Dosis recomendada: 5 mg dos veces al día.";
    }, [age, weight, creatinine]);

    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Calculadora de Dosis de Apixaban</h4>
            <p className="text-sm text-gray-600 -mt-2">Basado en criterios de reducción de dosis para FANV.</p>
            <div>
                <label className="block text-sm font-medium text-gray-700">Edad (años)</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Creatinina Sérica (mg/dL)</label>
                <input type="number" step="0.1" value={creatinine} onChange={(e) => setCreatinine(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div className="pt-2 text-center bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-bold text-blue-600">{dose}</p>
            </div>
        </div>
    );
};

const SitagliptinCalculator: React.FC = () => {
    const [gfr, setGfr] = useState<number | ''>('');
    const dose = useMemo(() => {
        if (gfr === '') return "Introduzca el valor de TFG.";
        if (gfr >= 45) return "Dosis recomendada: 100 mg una vez al día.";
        if (gfr >= 30) return "Dosis recomendada: 50 mg una vez al día.";
        if (gfr < 30) return "Dosis recomendada: 25 mg una vez al día.";
        return "";
    }, [gfr]);

    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Ajuste de Dosis de Sitagliptina por Función Renal</h4>
             <div>
                <label className="block text-sm font-medium text-gray-700">Tasa de Filtración Glomerular (TFG) (ml/min)</label>
                <input type="number" value={gfr} onChange={(e) => setGfr(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div className="pt-2 text-center bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-bold text-blue-600">{dose}</p>
            </div>
        </div>
    );
};

const ClozapineCalculator: React.FC = () => (
    <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">Esquema de Titulación de Clozapina</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-2 bg-gray-50 p-4 rounded-md border">
            <li><span className="font-semibold text-gray-800">Día 1:</span> 12.5 mg una o dos veces al día.</li>
            <li><span className="font-semibold text-gray-800">Día 2:</span> 25 mg una o dos veces al día.</li>
            <li><span className="font-semibold text-gray-800">Incrementos:</span> Aumentar en 25-50 mg/día hasta objetivo de 300-450 mg/día en 2-3 semanas.</li>
            <li><span className="font-semibold text-gray-800">Dosis máxima:</span> 900 mg/día.</li>
        </ul>
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="font-bold text-red-700">¡ALERTA! Requiere monitorización hematológica semanal durante las primeras 18 semanas, luego mensual.</p>
        </div>
    </div>
);

const EpoetinCalculator: React.FC = () => {
    const [weight, setWeight] = useState<number | ''>('');
    const dose = useMemo(() => {
        if (weight === '') return "Introduzca el peso del paciente.";
        const initialDose = weight * 50;
        return `Dosis inicial recomendada: ${initialDose.toLocaleString()} UI, 3 veces por semana.`;
    }, [weight]);

    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Calculadora de Dosis de Epoetina Alfa (Anemia en IRC)</h4>
            <div>
                <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div className="pt-2 text-center bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-bold text-blue-600">{dose}</p>
                 <p className="text-sm text-gray-600 mt-1">Ajustar según respuesta de Hemoglobina. Objetivo: 10-12 g/dL.</p>
            </div>
        </div>
    );
};

const TolvaptanCalculator: React.FC = () => (
    <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">Guía Rápida de Tolvaptán</h4>
        <div className="space-y-3">
             <div className="bg-gray-50 p-4 rounded-md border">
                <h5 className="font-semibold text-gray-800">Hiponatremia (SIADH)</h5>
                <p className="text-gray-600">Dosis inicial: 15 mg/día. Titular a 30-60 mg/día. No usar >30 días. Corregir sodio lentamente.</p>
             </div>
             <div className="bg-gray-50 p-4 rounded-md border">
                <h5 className="font-semibold text-gray-800">Poliquistosis Renal (PQRAD)</h5>
                <p className="text-gray-600">Dosis inicial: 60 mg/día (45+15). Titular a 90 mg/día (60+30) o 120 mg/día (90+30).</p>
             </div>
        </div>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="font-bold text-yellow-800">¡ALERTA! Riesgo de hepatotoxicidad. Monitorizar enzimas hepáticas antes de iniciar y mensualmente durante 18 meses.</p>
        </div>
    </div>
);

const AmiodaroneCalculator: React.FC = () => (
     <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">Guía de Dosificación de Amiodarona</h4>
        <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-md border">
                <h5 className="font-semibold text-gray-800">Dosis de Carga Oral</h5>
                <p className="text-gray-600">800-1600 mg/día durante 1-3 semanas, luego reducir a 600-800 mg/día durante 1 mes.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md border">
                <h5 className="font-semibold text-gray-800">Dosis de Mantenimiento</h5>
                <p className="text-gray-600">Dosis efectiva más baja, usualmente 200 mg/día. Algunos pacientes pueden requerir hasta 400 mg/día.</p>
            </div>
        </div>
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="font-bold text-red-700">¡ALERTA! Múltiples toxicidades (pulmonar, hepática, tiroidea). Monitorización periódica es crucial.</p>
        </div>
    </div>
);

const CinacalcetCalculator: React.FC = () => {
    const [pth, setPth] = useState<number | ''>('');
    const advice = useMemo(() => {
        if (pth === '') return "Introduzca el nivel de PTH.";
        if (pth > 300) return "Considerar iniciar o aumentar dosis de Cinacalcet.";
        if (pth < 150) return "Considerar reducir o suspender Cinacalcet.";
        return "Nivel de PTH en rango objetivo (150-300 pg/mL). Mantener dosis actual.";
    }, [pth]);

    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Guía de Ajuste de Cinacalcet (Hiperparatiroidismo 2º)</h4>
            <div>
                <label className="block text-sm font-medium text-gray-700">Nivel de PTHi (pg/mL)</label>
                <input type="number" value={pth} onChange={(e) => setPth(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div className="pt-2 text-center bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-bold text-blue-600">{advice}</p>
                 <p className="text-sm text-gray-600 mt-1">Siempre verificar niveles de Calcio y Fósforo antes de ajustar.</p>
            </div>
        </div>
    );
};

// --- Main Components ---

const Calculator: React.FC<{ type: CalculatorType }> = ({ type }) => {
    switch (type) {
        case 'APIXABAN': return <ApixabanCalculator />;
        case 'SITAGLIPTIN': return <SitagliptinCalculator />;
        case 'CLOZAPINA': return <ClozapineCalculator />;
        case 'EPOETIN': return <EpoetinCalculator />;
        case 'TOLVAPTAN': return <TolvaptanCalculator />;
        case 'AMIODARONE': return <AmiodaroneCalculator />;
        case 'CINACALCET': return <CinacalcetCalculator />;
        default: return <p>Calculadora no disponible.</p>;
    }
};

const TabButton: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
    <button onClick={onClick} className="relative flex-1 px-3 py-2.5 text-sm font-medium text-center transition rounded-md">
        {isActive && (
            <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-gray-200 rounded-md"
                style={{ originY: "0px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
        )}
        <span className={`relative z-10 flex items-center justify-center gap-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
            {icon} {label}
        </span>
    </button>
);


interface MedicationModalProps {
    medication: Medication | null;
    onClose: () => void;
}

const MedicationModal: React.FC<MedicationModalProps> = ({ medication, onClose }) => {
    const [activeTab, setActiveTab] = useState<'info' | 'calculator'>('info');

    if (!medication) return null;

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 300 } },
        exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col border border-gray-200"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-start p-5 border-b border-gray-200">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{medication.name}</h2>
                      <p className="text-sm text-gray-500 mt-1 uppercase font-medium tracking-wider">{medication.category}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-800 transition-colors">
                        <XMarkIcon className="w-7 h-7" />
                    </button>
                </div>

                {medication.hasCalculator && (
                     <div className="p-2 bg-gray-100 border-b border-gray-200">
                        <div className="flex bg-gray-100 rounded-lg p-1">
                            <TabButton label="Ficha Técnica" icon={<BookOpenIcon className="w-5 h-5"/>} isActive={activeTab === 'info'} onClick={() => setActiveTab('info')} />
                            <TabButton label="Calculadora" icon={<CalculatorIcon className="w-5 h-5"/>} isActive={activeTab === 'calculator'} onClick={() => setActiveTab('calculator')} />
                        </div>
                    </div>
                )}
                
                <div className="p-6 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeTab === 'info' && (
                                <div className="space-y-5 text-gray-700">
                                    <div className="prose prose-sm max-w-none">
                                        <p><strong>Indicación:</strong> {medication.indication}</p>
                                        <p><strong>Mecanismo de acción:</strong> {medication.fichaTecnica.mecanismo}</p>
                                        <p><strong>Posología:</strong> {medication.fichaTecnica.posologia}</p>
                                        <p><strong>Efectos Adversos Comunes:</strong> {medication.fichaTecnica.efectosAdversos}</p>
                                        <p><strong>Contraindicaciones:</strong> {medication.fichaTecnica.contraindicaciones}</p>
                                    </div>
                                </div>
                            )}
                            
                            {activeTab === 'calculator' && medication.hasCalculator && medication.calculatorType && (
                                <Calculator type={medication.calculatorType} />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default MedicationModal;
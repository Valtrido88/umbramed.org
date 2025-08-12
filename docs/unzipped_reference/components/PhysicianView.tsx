
import React from 'react';
import DrugInteractionChecker from './DrugInteractionChecker';

interface PhysicianViewProps {
    onBack: () => void;
}

const PhysicianView: React.FC<PhysicianViewProps> = ({ onBack }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={onBack}
                className="mb-6 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors"
            >
                &larr; Volver a la selección de rol
            </button>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200/80">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Herramientas para Médicos</h2>
                <p className="text-slate-500 mb-6">Utilice el verificador de compatibilidad para perfusiones subcutáneas y genere guías de preparación.</p>
                <DrugInteractionChecker />
            </div>
        </div>
    );
};

export default PhysicianView;

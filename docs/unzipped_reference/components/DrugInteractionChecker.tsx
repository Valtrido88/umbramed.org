
import React, { useState, useCallback } from 'react';
import type { Drug, InteractionMatrix } from '../types';
import { generateDosingProtocol } from '../services/geminiService';
import Spinner from './Spinner';
import { PlusIcon } from './icons/PlusIcon';
import { TrashIcon } from './icons/TrashIcon';
import { ExclamationTriangleIcon } from './icons/ExclamationTriangleIcon';

// Simplified database of common palliative care drugs
const ALL_DRUGS: Drug[] = [
    { id: 1, name: 'Morfina' },
    { id: 2, name: 'Midazolam' },
    { id: 3, name: 'Haloperidol' },
    { id: 4, name: 'Levomepromazina' },
    { id: 5, name: 'Butilescopolamina' },
    { id: 6, name: 'Metoclopramida' },
    { id: 7, name: 'Dexametasona' },
    { id: 8, name: 'Fentanilo' },
    { id: 9, name: 'Ketamina' },
    { id: 10, name: 'Ondansetrón' }
];

// Simplified interaction matrix. Key drug precipitates with drugs in the value array.
const PRECIPITATE_INTERACTIONS: InteractionMatrix = {
    'Dexametasona': ['Midazolam', 'Haloperidol', 'Levomepromazina', 'Ondansetrón'],
    'Midazolam': ['Dexametasona'],
    'Haloperidol': ['Dexametasona'],
    'Levomepromazina': ['Dexametasona'],
    'Ondansetrón': ['Dexametasona'],
    'Metoclopramida': ['Fentanilo'],
    'Fentanilo': ['Metoclopramida'],
};


const DrugInteractionChecker: React.FC = () => {
    const [selectedDrugs, setSelectedDrugs] = useState<Drug[]>([]);
    const [interactionWarning, setInteractionWarning] = useState<string>('');
    const [protocol, setProtocol] = useState<string>('');
    const [isLoadingProtocol, setIsLoadingProtocol] = useState<boolean>(false);
    const [selectedDrugId, setSelectedDrugId] = useState<string>('');

    const checkForInteraction = useCallback((drugs: Drug[]) => {
        for (let i = 0; i < drugs.length; i++) {
            for (let j = i + 1; j < drugs.length; j++) {
                const drugA = drugs[i].name;
                const drugB = drugs[j].name;

                if (PRECIPITATE_INTERACTIONS[drugA]?.includes(drugB) || PRECIPITATE_INTERACTIONS[drugB]?.includes(drugA)) {
                    setInteractionWarning(`¡Atención! Se ha detectado una interacción con riesgo de precipitación entre ${drugA} y ${drugB}.`);
                    return;
                }
            }
        }
        setInteractionWarning('');
    }, []);

    const handleAddDrug = () => {
        if (!selectedDrugId) return;

        const drugToAdd = ALL_DRUGS.find(d => d.id === parseInt(selectedDrugId));
        if (drugToAdd && !selectedDrugs.some(d => d.id === drugToAdd.id)) {
            const newDrugList = [...selectedDrugs, drugToAdd];
            setSelectedDrugs(newDrugList);
            checkForInteraction(newDrugList);
        }
        setSelectedDrugId('');
    };

    const handleRemoveDrug = (drugId: number) => {
        const newDrugList = selectedDrugs.filter(d => d.id !== drugId);
        setSelectedDrugs(newDrugList);
        checkForInteraction(newDrugList);
    };

    const handleGenerateProtocol = async () => {
        if (selectedDrugs.length === 0) return;
        setIsLoadingProtocol(true);
        setProtocol('');
        const drugNames = selectedDrugs.map(d => d.name);
        const result = await generateDosingProtocol(drugNames);
        setProtocol(result);
        setIsLoadingProtocol(false);
    };

    const availableDrugs = ALL_DRUGS.filter(d => !selectedDrugs.some(sd => sd.id === d.id));

    return (
        <div className="space-y-6">
            <div>
                <label htmlFor="drug-select" className="block text-sm font-medium text-slate-700 mb-1">Añadir Fármaco a la Perfusión</label>
                <div className="flex gap-2">
                    <select
                        id="drug-select"
                        value={selectedDrugId}
                        onChange={(e) => setSelectedDrugId(e.target.value)}
                        className="block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    >
                        <option value="">Seleccione un fármaco...</option>
                        {availableDrugs.map(drug => (
                            <option key={drug.id} value={drug.id}>{drug.name}</option>
                        ))}
                    </select>
                    <button
                        onClick={handleAddDrug}
                        disabled={!selectedDrugId}
                        className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-slate-300"
                    >
                       <PlusIcon />
                    </button>
                </div>
            </div>

            <div>
                <h4 className="font-semibold text-slate-800">Fármacos en la Perfusión:</h4>
                {selectedDrugs.length > 0 ? (
                    <ul className="mt-2 space-y-2">
                        {selectedDrugs.map(drug => (
                            <li key={drug.id} className="flex items-center justify-between bg-slate-100 p-2 rounded-md">
                                <span className="text-slate-700">{drug.name}</span>
                                <button onClick={() => handleRemoveDrug(drug.id)} className="text-slate-400 hover:text-red-500">
                                    <TrashIcon />
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-slate-500 mt-2 text-sm">Añada fármacos para comenzar.</p>
                )}
            </div>

            {interactionWarning && (
                <div className="p-4 rounded-md bg-yellow-50 border border-yellow-300">
                    <div className="flex">
                        <div className="flex-shrink-0">
                           <ExclamationTriangleIcon />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">Alerta de Interacción</h3>
                            <div className="mt-2 text-sm text-yellow-700">
                                <p>{interactionWarning}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            <div>
                <button
                    onClick={handleGenerateProtocol}
                    disabled={selectedDrugs.length === 0 || isLoadingProtocol || !!interactionWarning}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                    {isLoadingProtocol ? <Spinner size="sm" /> : 'Generar Guía de Preparación y Dosificación'}
                </button>
                {!!interactionWarning && (
                    <p className="text-xs text-center text-red-600 mt-2">Corrija las interacciones antes de generar la guía.</p>
                )}
            </div>

            {protocol && (
                 <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Guía de Preparación Sugerida</h3>
                    <div className="prose prose-sm max-w-none prose-slate" dangerouslySetInnerHTML={{ __html: protocol.replace(/\n/g, '<br />') }}></div>
                </div>
            )}
        </div>
    );
};

export default DrugInteractionChecker;

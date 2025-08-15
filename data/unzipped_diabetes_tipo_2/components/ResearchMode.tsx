import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import type { Patient } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getTreatmentAnalysis, getFundusAnalysis, getPersonalizedGoals } from '../services/geminiService';
import { 
    glucoseContextOptions,
    hypoglycemiaRiskOptions,
    lifeExpectancyOptions
} from '../types';
import type { 
    GlucoseReading, 
    GlucoseContext,
    HypoglycemiaRisk,
    LifeExpectancy
} from '../types';
import { PillIcon } from './icons/PillIcon';
import { SyringeIcon } from './icons/SyringeIcon';
import Spinner from './Spinner';
import Disclaimer from './Disclaimer';


const formatDateForInput = (date: Date) => {
    const pad = (num: number) => num.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const createNewPatient = (name: string): Patient => ({
    id: crypto.randomUUID(),
    name,
    profile: { age: '', comorbidities: '', hypoglycemiaRisk: 'bajo', lifeExpectancy: 'larga' },
    pathologies: '',
    otherMedications: '',
    treatment: { oralMeds: [], longActingInsulin: { dose: 0 }, rapidActingInsulin: { dose: 0 } },
    glucoseReadings: [],
    fundusReport: '',
    analysisResults: {}
});

const PatientDashboard: React.FC<{ patient: Patient; onUpdate: (updatedPatient: Patient) => void; onDelete: (patientId: string) => void; }> = ({ patient, onUpdate, onDelete }) => {
    const [localPatient, setLocalPatient] = useState<Patient>(patient);
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [newOralMed, setNewOralMed] = useState({ name: '', dose: '' });
    const [newGlucoseReading, setNewGlucoseReading] = useState({ value: '', context: 'ayunas' as GlucoseContext, timestamp: formatDateForInput(new Date()) });
    const [isFundusLoading, setIsFundusLoading] = useState<boolean>(false);
    const [fundusError, setFundusError] = useState<string | null>(null);
    const [isGoalsLoading, setIsGoalsLoading] = useState<boolean>(false);
    const [goalsError, setGoalsError] = useState<string | null>(null);
    
    const debounceTimeout = useRef<number | null>(null);

    // Sync local state when the patient prop changes from parent
    useEffect(() => {
        setLocalPatient(patient);
    }, [patient]);
    
    // Debounced update to parent
    const debouncedUpdate = useCallback((updatedPatient: Patient) => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = window.setTimeout(() => {
            onUpdate(updatedPatient);
        }, 500);
    }, [onUpdate]);

    const updatePatientState = (newPatientData: Partial<Patient>) => {
        const updatedPatient = { ...localPatient, ...newPatientData };
        setLocalPatient(updatedPatient);
        debouncedUpdate(updatedPatient);
    };

    const updateField = <K extends keyof Patient>(field: K, value: Patient[K]) => {
        updatePatientState({ [field]: value });
    };

    const updateProfileField = (field: keyof Patient['profile'], value: any) => {
        updatePatientState({ profile: { ...localPatient.profile, [field]: value } });
    };
    
    const updateTreatmentField = (field: keyof Patient['treatment'], value: any) => {
        updatePatientState({ treatment: { ...localPatient.treatment, [field]: value } });
    };
    
    const updateAnalysisResults = (results: Partial<Patient['analysisResults']>) => {
        const updatedPatient = { ...localPatient, analysisResults: { ...localPatient.analysisResults, ...results } };
        setLocalPatient(updatedPatient);
        // Immediate update for analysis results, no debounce needed here
        onUpdate(updatedPatient);
    }

    const handleAddOralMed = () => {
        if (newOralMed.name && newOralMed.dose) {
            const updatedMeds = [...localPatient.treatment.oralMeds, { ...newOralMed, id: crypto.randomUUID() }];
            updateTreatmentField('oralMeds', updatedMeds);
            setNewOralMed({ name: '', dose: '' });
        }
    };

    const handleRemoveOralMed = (id: string) => {
        const updatedMeds = localPatient.treatment.oralMeds.filter(med => med.id !== id);
        updateTreatmentField('oralMeds', updatedMeds);
    };

    const handleAddGlucoseReading = () => {
        const value = parseInt(newGlucoseReading.value, 10);
        if (!isNaN(value) && value > 0) {
            const newReading: GlucoseReading = {
                id: crypto.randomUUID(),
                value,
                context: newGlucoseReading.context,
                timestamp: new Date(newGlucoseReading.timestamp).toISOString(),
            };
            const updatedReadings = [...localPatient.glucoseReadings, newReading].sort((a,b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
            updateField('glucoseReadings', updatedReadings);
            setNewGlucoseReading({ value: '', context: 'ayunas', timestamp: formatDateForInput(new Date()) });
        }
    };
    
    const handleRemoveGlucoseReading = (id: string) => {
        const updatedReadings = localPatient.glucoseReadings.filter(r => r.id !== id);
        updateField('glucoseReadings', updatedReadings);
    };

    const handleAnalyze = useCallback(async () => {
        if (localPatient.glucoseReadings.length < 3) {
            setError("Se necesitan al menos 3 registros de glucosa.");
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const result = await getTreatmentAnalysis(localPatient.treatment, localPatient.glucoseReadings);
            updateAnalysisResults({ main: result });
        } catch (e: any) {
            setError(e.message || "Error inesperado.");
        } finally {
            setIsLoading(false);
        }
    }, [localPatient]);

    const handleAnalyzeFundus = useCallback(async () => {
        if (!localPatient.fundusReport.trim()) {
            setFundusError("El informe de fondo de ojo está vacío.");
            return;
        }
        setIsFundusLoading(true);
        setFundusError(null);
        try {
            const result = await getFundusAnalysis(localPatient.fundusReport);
            updateAnalysisResults({ fundus: result });
        } catch (e: any) {
            setFundusError(e.message || "Error inesperado.");
        } finally {
            setIsFundusLoading(false);
        }
    }, [localPatient]);

    const handleCalculateGoals = useCallback(async () => {
        const ageNum = parseInt(localPatient.profile.age, 10);
        if (isNaN(ageNum) || ageNum <= 0) {
            setGoalsError("Edad inválida.");
            return;
        }
        setIsGoalsLoading(true);
        setGoalsError(null);
        try {
            const result = await getPersonalizedGoals({
                ...localPatient.profile,
                age: ageNum
            });
            updateAnalysisResults({ goals: result });
        } catch (e: any) {
            setGoalsError(e.message || "Error inesperado.");
        } finally {
            setIsGoalsLoading(false);
        }
    }, [localPatient]);


    const chartData = useMemo(() => {
        return localPatient.glucoseReadings.map(r => ({
            name: new Date(r.timestamp).toLocaleTimeString('es-ES', { day: '2-digit', hour: '2-digit', minute: '2-digit' }),
            glucosa: r.value,
        }));
    }, [localPatient.glucoseReadings]);
    
    return (
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-2xl font-semibold text-gray-700">
                <i className="fas fa-user-edit mr-2 text-indigo-500"></i>Perfil del Paciente
              </h2>
               <button onClick={() => { if(window.confirm(`¿Seguro que quieres eliminar a ${localPatient.name}? Esta acción es irreversible.`)) onDelete(localPatient.id) }} className="text-red-500 hover:text-red-700 text-sm">
                    <i className="fas fa-trash-alt mr-1"></i>Eliminar Paciente
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Nombre</label>
                    <input type="text" value={localPatient.name} onChange={e => updateField('name', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Edad</label>
                    <input type="number" placeholder="Años" value={localPatient.profile.age} onChange={e => updateProfileField('age', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Patologías Relevantes</label>
                    <textarea placeholder="EPOC, Cardiopatía Isquémica..." value={localPatient.pathologies} onChange={e => updateField('pathologies', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" rows={2}></textarea>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Otras Medicaciones</label>
                    <textarea placeholder="AAS, Atorvastatina, Enalapril..." value={localPatient.otherMedications} onChange={e => updateField('otherMedications', e.target.value)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" rows={2}></textarea>
                </div>
            </div>
        </div>

        {/* Repurposed components from ClinicalMode, adapted for patient prop */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">
                <i className="fas fa-pills mr-2 text-teal-500"></i>Tratamiento Actual
            </h2>
             <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1 flex items-center"><SyringeIcon className="mr-2 text-blue-500"/>Insulina Lenta (Basal)</label>
                        <div className="relative">
                            <input type="number" value={localPatient.treatment.longActingInsulin.dose} onChange={e => updateTreatmentField('longActingInsulin', { dose: parseInt(e.target.value) || 0 })} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                            <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">unidades</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1 flex items-center"><SyringeIcon className="mr-2 text-orange-500"/>Insulina Rápida (Prandial)</label>
                        <div className="relative">
                        <input type="number" value={localPatient.treatment.rapidActingInsulin.dose} onChange={e => updateTreatmentField('rapidActingInsulin', { dose: parseInt(e.target.value) || 0 })} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">unidades</span>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center"><PillIcon className="mr-2 text-green-500"/>Antidiabéticos Orales</label>
                    <div className="space-y-2">
                        {localPatient.treatment.oralMeds.map(med => (
                            <div key={med.id} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                                <span>{med.name} - {med.dose}</span>
                                <button onClick={() => handleRemoveOralMed(med.id)} className="text-red-500 hover:text-red-700"><i className="fas fa-trash-alt"></i></button>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                        <input type="text" placeholder="Nombre" value={newOralMed.name} onChange={e => setNewOralMed(m => ({...m, name: e.target.value}))} className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm"/>
                        <input type="text" placeholder="Dosis" value={newOralMed.dose} onChange={e => setNewOralMed(m => ({...m, dose: e.target.value}))} className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm"/>
                        <button onClick={handleAddOralMed} className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600"><i className="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700"><i className="fas fa-chart-line mr-2 text-purple-500"></i>Registros de Glucosa</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                    <div className="relative flex-grow">
                        <input type="number" placeholder="mg/dL" value={newGlucoseReading.value} onChange={e => setNewGlucoseReading(r => ({...r, value: e.target.value}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">mg/dL</span>
                    </div>
                    <select value={newGlucoseReading.context} onChange={e => setNewGlucoseReading(r => ({...r, context: e.target.value as GlucoseContext}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm">
                        {glucoseContextOptions.map(opt => <option key={opt} value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>)}
                    </select>
                </div>
                 <div className="flex flex-col gap-2">
                    <input type="datetime-local" value={newGlucoseReading.timestamp} onChange={e => setNewGlucoseReading(r => ({...r, timestamp: e.target.value}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
                    <button onClick={handleAddGlucoseReading} className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 whitespace-nowrap"><i className="fas fa-plus mr-1"></i> Añadir Registro</button>
                </div>
            </div>
            <div className="h-64 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-15} textAnchor="end" height={50} />
                        <YAxis domain={[40, 400]}/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="glucosa" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 max-h-48 overflow-y-auto space-y-2">
                {localPatient.glucoseReadings.slice().reverse().map(r => (
                    <div key={r.id} className="flex items-center justify-between bg-gray-50 p-2 rounded-md text-sm">
                        <span>{new Date(r.timestamp).toLocaleString('es-ES', {dateStyle: 'short', timeStyle: 'short'})} - <strong>{r.value} mg/dL</strong> ({r.context})</span>
                        <button onClick={() => handleRemoveGlucoseReading(r.id)} className="text-red-500 hover:text-red-700"><i className="fas fa-times"></i></button>
                    </div>
                ))}
            </div>
        </div>

        {/* Analysis section */}
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700"><i className="fas fa-lightbulb mr-2 text-yellow-500"></i>Análisis y Recomendaciones</h2>
                <button onClick={handleAnalyze} disabled={isLoading || localPatient.glucoseReadings.length === 0} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors flex items-center justify-center text-lg">
                    {isLoading ? <Spinner/> : <><i className="fas fa-cogs mr-2"></i>Analizar Tratamiento</>}
                </button>
                <Disclaimer />
                {error && <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
                {localPatient.analysisResults.main && !isLoading && (
                    <div className="mt-6 space-y-6">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h3 className="font-bold text-lg text-blue-800">Análisis General</h3>
                            <p className="mt-1 text-gray-700">{localPatient.analysisResults.main.analisisGeneral}</p>
                        </div>
                        {localPatient.analysisResults.main.fenomenoDetectado.nombre !== 'Ninguno' && (
                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <h3 className="font-bold text-lg text-orange-800"><i className="fas fa-exclamation-triangle mr-2"></i>{localPatient.analysisResults.main.fenomenoDetectado.nombre} Detectado</h3>
                                <p className="mt-1 text-gray-700"><strong>Explicación:</strong> {localPatient.analysisResults.main.fenomenoDetectado.explicacion}</p>
                                <p className="mt-2 text-gray-700"><strong>Sugerencia de Corrección:</strong> {localPatient.analysisResults.main.fenomenoDetectado.consejoCorreccion}</p>
                            </div>
                        )}
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <h3 className="font-bold text-lg text-green-800">Sugerencias de Ajuste</h3>
                            <ul className="mt-2 space-y-3 list-disc list-inside">
                                {localPatient.analysisResults.main.sugerencias.map((sug, index) => (
                                    <li key={index}>
                                        <strong className="text-gray-900">{sug.area}:</strong> {sug.ajuste}
                                        <p className="text-sm text-gray-600 pl-4 italic">"{sug.justificacion}"</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
             <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700"><i className="fas fa-bullseye mr-2 text-red-500"></i>Objetivos Personalizados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Riesgo Hipoglucemia</label>
                        <select value={localPatient.profile.hypoglycemiaRisk} onChange={e => updateProfileField('hypoglycemiaRisk', e.target.value as HypoglycemiaRisk)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm">
                            {hypoglycemiaRiskOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Esperanza de Vida</label>
                        <select value={localPatient.profile.lifeExpectancy} onChange={e => updateProfileField('lifeExpectancy', e.target.value as LifeExpectancy)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm">
                            {lifeExpectancyOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                    </div>
                </div>
                <button onClick={handleCalculateGoals} disabled={isGoalsLoading} className="mt-4 w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 disabled:bg-red-300 flex items-center justify-center text-lg">
                     {isGoalsLoading ? <Spinner/> : <><i className="fas fa-calculator mr-2"></i>Calcular Objetivos</>}
                </button>
                {goalsError && <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{goalsError}</div>}
                {localPatient.analysisResults.goals && !isGoalsLoading && (
                    <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200 space-y-3">
                        <h3 className="font-bold text-lg text-red-800">Metas Recomendadas</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                            <div className="p-3 bg-white rounded-md shadow-sm">
                                <div className="text-sm text-gray-500">HbA1c</div>
                                <div className="text-xl font-bold text-red-700">{localPatient.analysisResults.goals.hba1c}</div>
                            </div>
                            <div className="p-3 bg-white rounded-md shadow-sm">
                                <div className="text-sm text-gray-500">Glucosa en Ayunas</div>
                                <div className="text-xl font-bold text-red-700">{localPatient.analysisResults.goals.ayunas}</div>
                            </div>
                            <div className="p-3 bg-white rounded-md shadow-sm">
                                <div className="text-sm text-gray-500">Glucosa Post-Comida</div>
                                <div className="text-xl font-bold text-red-700">{localPatient.analysisResults.goals.postprandial}</div>
                            </div>
                        </div>
                        <div className="pt-3 border-t">
                            <p className="text-sm text-gray-600 italic"><strong>Justificación:</strong> {localPatient.analysisResults.goals.justificacion}</p>
                        </div>
                    </div>
                )}
             </div>

             <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700"><i className="fas fa-eye mr-2 text-indigo-500"></i>Interpretador de Fondo de Ojo</h2>
                <textarea 
                    value={localPatient.fundusReport}
                    onChange={(e) => updateField('fundusReport', e.target.value)}
                    placeholder="Pega aquí el informe del examen de fondo de ojo..."
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    rows={5}
                ></textarea>
                 <button onClick={handleAnalyzeFundus} disabled={isFundusLoading} className="mt-4 w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 flex items-center justify-center text-lg">
                     {isFundusLoading ? <Spinner/> : <><i className="fas fa-search-plus mr-2"></i>Interpretar Informe</>}
                </button>
                {fundusError && <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{fundusError}</div>}
                {localPatient.analysisResults.fundus && !isFundusLoading && (
                    <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200 space-y-4">
                        <div>
                            <h4 className="font-bold text-lg text-indigo-800">Interpretación</h4>
                            <p className="mt-1 text-gray-700">{localPatient.analysisResults.fundus.interpretacion}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-indigo-800">Severidad Estimada</h4>
                            <p className="mt-1 text-gray-700 font-semibold">{localPatient.analysisResults.fundus.severidad}</p>
                        </div>
                        <div className="p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-r-md">
                            <h4 className="font-bold">Recomendaciones</h4>
                            <p className="mt-1 text-sm">{localPatient.analysisResults.fundus.recomendaciones}</p>
                        </div>
                    </div>
                )}
             </div>
        </div>
      </div>
    );
};


const ResearchMode: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
    const [newPatientName, setNewPatientName] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        try {
            const savedPatients = localStorage.getItem('diabetes-research-patients');
            if (savedPatients) {
                setPatients(JSON.parse(savedPatients));
            }
        } catch (error) {
            console.error("Error al cargar pacientes de localStorage:", error);
            setPatients([]);
        }
    }, []);

    const handleUpdatePatient = useCallback((updatedPatient: Patient) => {
        setPatients(prev => {
            const newPatients = prev.map(p => p.id === updatedPatient.id ? updatedPatient : p);
            try {
                localStorage.setItem('diabetes-research-patients', JSON.stringify(newPatients));
            } catch (error) {
                console.error("Error al guardar pacientes en localStorage:", error);
            }
            return newPatients;
        });
    }, []);

    const handleCreatePatient = () => {
        if (newPatientName.trim()) {
            const newPatient = createNewPatient(newPatientName);
            const updatedPatients = [...patients, newPatient];
            setPatients(updatedPatients);
            localStorage.setItem('diabetes-research-patients', JSON.stringify(updatedPatients));
            setSelectedPatientId(newPatient.id);
            setNewPatientName('');
        }
    };
    
    const handleDeletePatient = (patientId: string) => {
        const updatedPatients = patients.filter(p => p.id !== patientId);
        setPatients(updatedPatients);
        localStorage.setItem('diabetes-research-patients', JSON.stringify(updatedPatients));
        if(selectedPatientId === patientId) {
            setSelectedPatientId(null);
        }
    };
    
    const handleExport = () => {
        if(patients.length === 0) {
            alert("No hay pacientes para exportar.");
            return;
        }
        const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(patients, null, 2)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `diabetes_research_data_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleImportFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result;
                if (typeof text !== 'string') throw new Error("File is not readable");
                const importedPatients = JSON.parse(text);
                if (Array.isArray(importedPatients)) { // Basic validation
                    if (window.confirm(`Esto reemplazará los ${patients.length} pacientes actuales con ${importedPatients.length} de la importación. ¿Continuar?`)) {
                        setPatients(importedPatients);
                        localStorage.setItem('diabetes-research-patients', JSON.stringify(importedPatients));
                        setSelectedPatientId(null);
                        alert(`Se importaron ${importedPatients.length} pacientes con éxito.`);
                    }
                } else {
                    throw new Error("El archivo JSON no tiene el formato de array esperado.");
                }
            } catch (error) {
                console.error("Error al importar el archivo:", error);
                alert("Error: El archivo no es un JSON válido o tiene un formato incorrecto.");
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset file input
    };

    const filteredPatients = useMemo(() => {
        return patients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [patients, searchTerm]);

    const selectedPatient = useMemo(() => {
        return patients.find(p => p.id === selectedPatientId) || null;
    }, [patients, selectedPatientId]);

    return (
        <div className="grid grid-cols-12 gap-6">
            <aside className="col-span-12 lg:col-span-3">
                <div className="bg-white p-4 rounded-lg shadow-lg sticky top-24">
                    <h2 className="text-xl font-semibold mb-3 text-gray-700"><i className="fas fa-users mr-2"></i>Banco de Pacientes</h2>
                    
                     <div className="space-y-3 mb-3">
                        <div className="flex gap-2">
                            <input 
                                type="text"
                                value={newPatientName}
                                onChange={e => setNewPatientName(e.target.value)}
                                placeholder="Nombre del nuevo paciente"
                                className="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                            />
                             <button onClick={handleCreatePatient} className="bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 text-sm flex-shrink-0"><i className="fas fa-plus"></i></button>
                        </div>
                         <div className="relative">
                            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input 
                                type="text"
                                placeholder="Buscar paciente..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full p-2 pl-9 border border-gray-300 rounded-md shadow-sm text-sm"
                            />
                        </div>
                    </div>

                    <ul className="space-y-2 max-h-[50vh] overflow-y-auto border-t pt-2">
                        {filteredPatients.map(p => (
                            <li key={p.id}>
                                <button onClick={() => setSelectedPatientId(p.id)} className={`w-full text-left p-3 rounded-md transition-colors ${selectedPatientId === p.id ? 'bg-indigo-600 text-white font-bold shadow-md' : 'bg-gray-100 hover:bg-indigo-100'}`}>
                                    {p.name}
                                </button>
                            </li>
                        ))}
                         {patients.length > 0 && filteredPatients.length === 0 && (
                            <p className="text-center text-sm text-gray-500 py-4">No se encontraron pacientes.</p>
                        )}
                         {patients.length === 0 && (
                            <p className="text-center text-sm text-gray-500 py-4">No hay pacientes. Crea uno para empezar.</p>
                        )}
                    </ul>
                    <div className="border-t mt-3 pt-3 flex gap-2">
                        <button onClick={handleImportClick} className="w-full text-sm bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                            <i className="fas fa-upload"></i> Importar
                        </button>
                        <button onClick={handleExport} className="w-full text-sm bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                           <i className="fas fa-download"></i> Exportar
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImportFile}
                            accept=".json"
                            className="hidden"
                        />
                    </div>
                </div>
            </aside>
            <section className="col-span-12 lg:col-span-9">
                {selectedPatient ? (
                    <PatientDashboard patient={selectedPatient} onUpdate={handleUpdatePatient} onDelete={handleDeletePatient} />
                ) : (
                    <div className="flex flex-col items-center justify-center h-[70vh] bg-white rounded-lg shadow-lg text-center p-4">
                        <i className="fas fa-folder-open text-6xl text-gray-300 mb-4"></i>
                        <h2 className="text-2xl font-semibold text-gray-700">Selecciona o crea un paciente</h2>
                        <p className="text-gray-500 max-w-md mx-auto">Utiliza el panel de la izquierda para buscar un paciente existente o crear uno nuevo. Toda la información se guardará localmente en tu navegador.</p>
                        <p className="text-xs text-gray-400 mt-6 max-w-md mx-auto">Recuerda usar las opciones de <strong>Importar/Exportar</strong> para realizar copias de seguridad de tus datos y poder moverlos entre diferentes equipos.</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default ResearchMode;
import React, { useState, useCallback, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getTreatmentAnalysis, getFundusAnalysis, getPersonalizedGoals } from '../services/geminiService';
import type { 
    OralMedication, 
    Treatment, 
    GlucoseReading, 
    AnalysisResponse, 
    GlucoseContext,
    FundusAnalysisResponse,
    PersonalizedGoalsResponse,
    UserProfile,
    HypoglycemiaRisk,
    LifeExpectancy
} from '../types';
import { 
    glucoseContextOptions,
    hypoglycemiaRiskOptions,
    lifeExpectancyOptions
} from '../types';
import { PillIcon } from './icons/PillIcon';
import { SyringeIcon } from './icons/SyringeIcon';
import Spinner from './Spinner';
import Disclaimer from './Disclaimer';

// Helper to format date for datetime-local input
const formatDateForInput = (date: Date) => {
    const pad = (num: number) => num.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
};


const ClinicalMode: React.FC = () => {
    const [treatment, setTreatment] = useState<Treatment>({
        oralMeds: [],
        longActingInsulin: { dose: 10 },
        rapidActingInsulin: { dose: 5 },
    });
    const [glucoseReadings, setGlucoseReadings] = useState<GlucoseReading[]>([]);
    const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // --- State for new inputs ---
    const [newOralMed, setNewOralMed] = useState({ name: '', dose: '' });
    const [newGlucoseReading, setNewGlucoseReading] = useState<{ value: string; context: GlucoseContext, timestamp: string }>({
        value: '',
        context: 'ayunas',
        timestamp: formatDateForInput(new Date()),
    });
    
    // --- State for Fundus Interpreter ---
    const [fundusReport, setFundusReport] = useState<string>('');
    const [fundusAnalysis, setFundusAnalysis] = useState<FundusAnalysisResponse | null>(null);
    const [isFundusLoading, setIsFundusLoading] = useState<boolean>(false);
    const [fundusError, setFundusError] = useState<string | null>(null);

    // --- State for Personalized Goals ---
    const [userProfile, setUserProfile] = useState<UserProfile>({
        age: '',
        comorbidities: '',
        hypoglycemiaRisk: 'bajo',
        lifeExpectancy: 'larga',
    });
    const [personalizedGoals, setPersonalizedGoals] = useState<PersonalizedGoalsResponse | null>(null);
    const [isGoalsLoading, setIsGoalsLoading] = useState<boolean>(false);
    const [goalsError, setGoalsError] = useState<string | null>(null);

    const handleAddOralMed = () => {
        if (newOralMed.name && newOralMed.dose) {
            setTreatment(prev => ({
                ...prev,
                oralMeds: [...prev.oralMeds, { ...newOralMed, id: crypto.randomUUID() }],
            }));
            setNewOralMed({ name: '', dose: '' });
        }
    };
    
    const handleRemoveOralMed = (id: string) => {
        setTreatment(prev => ({
            ...prev,
            oralMeds: prev.oralMeds.filter(med => med.id !== id),
        }));
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
            setGlucoseReadings(prev => [...prev, newReading].sort((a,b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()));
            setNewGlucoseReading({ value: '', context: 'ayunas', timestamp: formatDateForInput(new Date()) });
        }
    };

    const handleRemoveGlucoseReading = (id: string) => {
        setGlucoseReadings(prev => prev.filter(r => r.id !== id));
    };

    const handleAnalyze = useCallback(async () => {
        if (glucoseReadings.length < 3) {
            setError("Por favor, introduce al menos 3 registros de glucosa para un análisis significativo.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setAnalysis(null);
        try {
            const result = await getTreatmentAnalysis(treatment, glucoseReadings);
            setAnalysis(result);
        } catch (e: any) {
            setError(e.message || "Ha ocurrido un error inesperado.");
        } finally {
            setIsLoading(false);
        }
    }, [treatment, glucoseReadings]);

    const handleAnalyzeFundus = useCallback(async () => {
        if (!fundusReport.trim()) {
            setFundusError("Por favor, introduce el texto del informe de fondo de ojo.");
            return;
        }
        setIsFundusLoading(true);
        setFundusError(null);
        setFundusAnalysis(null);
        try {
            const result = await getFundusAnalysis(fundusReport);
            setFundusAnalysis(result);
        } catch (e: any) {
            setFundusError(e.message || "Ha ocurrido un error inesperado.");
        } finally {
            setIsFundusLoading(false);
        }
    }, [fundusReport]);

    const handleCalculateGoals = useCallback(async () => {
        const ageNum = parseInt(userProfile.age, 10);
        if (isNaN(ageNum) || ageNum <= 0) {
            setGoalsError("Por favor, introduce una edad válida.");
            return;
        }
        setIsGoalsLoading(true);
        setGoalsError(null);
        setPersonalizedGoals(null);
        try {
            const result = await getPersonalizedGoals({
                ...userProfile,
                age: ageNum
            });
            setPersonalizedGoals(result);
        } catch (e: any) {
            setGoalsError(e.message || "Ha ocurrido un error inesperado.");
        } finally {
            setIsGoalsLoading(false);
        }
    }, [userProfile]);
    
    const chartData = useMemo(() => {
        return glucoseReadings.map(r => ({
            ...r,
            name: new Date(r.timestamp).toLocaleTimeString('es-ES', { day: '2-digit', hour: '2-digit', minute: '2-digit' }),
            glucosa: r.value,
        }));
    }, [glucoseReadings]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Columna de Entrada de Datos */}
            <div className="space-y-8">
                {/* Sección de Tratamiento */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">
                        <i className="fas fa-pills mr-2 text-teal-500"></i>Mi Tratamiento Actual
                    </h2>
                    
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1 flex items-center"><SyringeIcon className="mr-2 text-blue-500"/>Insulina Lenta (Basal)</label>
                                <div className="relative">
                                    <input type="number" value={treatment.longActingInsulin.dose} onChange={e => setTreatment(t => ({...t, longActingInsulin: { dose: parseInt(e.target.value) || 0 }}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">unidades</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1 flex items-center"><SyringeIcon className="mr-2 text-orange-500"/>Insulina Rápida (Prandial)</label>
                                <div className="relative">
                                <input type="number" value={treatment.rapidActingInsulin.dose} onChange={e => setTreatment(t => ({...t, rapidActingInsulin: { dose: parseInt(e.target.value) || 0 }}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">unidades</span>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center"><PillIcon className="mr-2 text-green-500"/>Antidiabéticos Orales</label>
                            <div className="space-y-2">
                                {treatment.oralMeds.map(med => (
                                    <div key={med.id} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                                        <span>{med.name} - {med.dose}</span>
                                        <button onClick={() => handleRemoveOralMed(med.id)} className="text-red-500 hover:text-red-700">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-2">
                                <input type="text" placeholder="Nombre (e.g., Metformina)" value={newOralMed.name} onChange={e => setNewOralMed(m => ({...m, name: e.target.value}))} className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm"/>
                                <input type="text" placeholder="Dosis (e.g., 850mg)" value={newOralMed.dose} onChange={e => setNewOralMed(m => ({...m, dose: e.target.value}))} className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm"/>
                                <button onClick={handleAddOralMed} className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600"><i className="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de Glucemias */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">
                        <i className="fas fa-chart-line mr-2 text-purple-500"></i>Mis Registros de Glucosa
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-2">
                            <div className="relative flex-grow">
                                <input type="number" placeholder="Valor en mg/dL" value={newGlucoseReading.value} onChange={e => setNewGlucoseReading(r => ({...r, value: e.target.value}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">mg/dL</span>
                            </div>
                            <select value={newGlucoseReading.context} onChange={e => setNewGlucoseReading(r => ({...r, context: e.target.value as GlucoseContext}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                {glucoseContextOptions.map(opt => <option key={opt} value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>)}
                            </select>
                        </div>
                         <div className="flex flex-col gap-2">
                            <input 
                                type="datetime-local"
                                value={newGlucoseReading.timestamp}
                                onChange={e => setNewGlucoseReading(r => ({...r, timestamp: e.target.value}))}
                                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
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
                        {glucoseReadings.slice().reverse().map(r => (
                            <div key={r.id} className="flex items-center justify-between bg-gray-50 p-2 rounded-md text-sm">
                                <span>{new Date(r.timestamp).toLocaleString('es-ES', {dateStyle: 'short', timeStyle: 'short'})} - <strong>{r.value} mg/dL</strong> ({r.context})</span>
                                <button onClick={() => handleRemoveGlucoseReading(r.id)} className="text-red-500 hover:text-red-700">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Columna de Análisis y Herramientas Adicionales */}
            <div className="space-y-8">
                 <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">
                        <i className="fas fa-lightbulb mr-2 text-yellow-500"></i>Análisis y Recomendaciones
                    </h2>
                    <button onClick={handleAnalyze} disabled={isLoading || glucoseReadings.length === 0} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors flex items-center justify-center text-lg">
                        {isLoading ? <Spinner/> : <><i className="fas fa-cogs mr-2"></i>Analizar Mis Datos</>}
                    </button>
                    <Disclaimer />
                    
                    {error && <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}

                    {analysis && !isLoading && (
                        <div className="mt-6 space-y-6">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h3 className="font-bold text-lg text-blue-800">Análisis General</h3>
                                <p className="mt-1 text-gray-700">{analysis.analisisGeneral}</p>
                            </div>
                            
                            {analysis.fenomenoDetectado.nombre !== 'Ninguno' && (
                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <h3 className="font-bold text-lg text-orange-800"><i className="fas fa-exclamation-triangle mr-2"></i>{analysis.fenomenoDetectado.nombre} Detectado</h3>
                                    <p className="mt-1 text-gray-700"><strong>Explicación:</strong> {analysis.fenomenoDetectado.explicacion}</p>
                                    <p className="mt-2 text-gray-700"><strong>Sugerencia de Corrección:</strong> {analysis.fenomenoDetectado.consejoCorreccion}</p>
                                </div>
                            )}
                            
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h3 className="font-bold text-lg text-green-800">Sugerencias de Ajuste</h3>
                                <ul className="mt-2 space-y-3 list-disc list-inside">
                                    {analysis.sugerencias.map((sug, index) => (
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

                {/* Herramienta: Objetivos Personalizados */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">
                        <i className="fas fa-bullseye mr-2 text-red-500"></i>Mis Objetivos Personalizados
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Edad</label>
                            <input type="number" placeholder="Años" value={userProfile.age} onChange={e => setUserProfile(p => ({...p, age: e.target.value}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Comorbilidades (e.g., hipertensión, cardiopatía)</label>
                            <textarea placeholder="Describe tus otras condiciones de salud..." value={userProfile.comorbidities} onChange={e => setUserProfile(p => ({...p, comorbidities: e.target.value}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm" rows={2}></textarea>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Riesgo de Hipoglucemia</label>
                                <select value={userProfile.hypoglycemiaRisk} onChange={e => setUserProfile(p => ({...p, hypoglycemiaRisk: e.target.value as HypoglycemiaRisk}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm">
                                    {hypoglycemiaRiskOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Esperanza de Vida Estimada</label>
                                <select value={userProfile.lifeExpectancy} onChange={e => setUserProfile(p => ({...p, lifeExpectancy: e.target.value as LifeExpectancy}))} className="w-full p-2 border border-gray-300 rounded-md shadow-sm">
                                    {lifeExpectancyOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleCalculateGoals} disabled={isGoalsLoading} className="mt-4 w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 disabled:bg-red-300 transition-colors flex items-center justify-center text-lg">
                         {isGoalsLoading ? <Spinner/> : <><i className="fas fa-calculator mr-2"></i>Calcular Objetivos</>}
                    </button>
                    {goalsError && <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{goalsError}</div>}
                    {personalizedGoals && !isGoalsLoading && (
                        <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200 space-y-3">
                            <h3 className="font-bold text-lg text-red-800">Tus Metas Recomendadas</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                                <div className="p-3 bg-white rounded-md shadow-sm">
                                    <div className="text-sm text-gray-500">HbA1c</div>
                                    <div className="text-xl font-bold text-red-700">{personalizedGoals.hba1c}</div>
                                </div>
                                <div className="p-3 bg-white rounded-md shadow-sm">
                                    <div className="text-sm text-gray-500">Glucosa en Ayunas</div>
                                    <div className="text-xl font-bold text-red-700">{personalizedGoals.ayunas}</div>
                                </div>
                                <div className="p-3 bg-white rounded-md shadow-sm">
                                    <div className="text-sm text-gray-500">Glucosa Post-Comida</div>
                                    <div className="text-xl font-bold text-red-700">{personalizedGoals.postprandial}</div>
                                </div>
                            </div>
                            <div className="pt-3 border-t">
                                <p className="text-sm text-gray-600 italic"><strong>Justificación:</strong> {personalizedGoals.justificacion}</p>
                            </div>
                        </div>
                    )}
                 </div>

                {/* Herramienta: Interpretador de Fondo de Ojo */}
                 <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">
                        <i className="fas fa-eye mr-2 text-indigo-500"></i>Interpretador de Fondo de Ojo
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      Pega aquí el informe de tu último examen de fondo de ojo para obtener una explicación en términos sencillos.
                    </p>
                    <textarea 
                        value={fundusReport}
                        onChange={(e) => setFundusReport(e.target.value)}
                        placeholder="Ej: 'Polo posterior: sin alteraciones. Retina aplicada. Mácula con reflejo foveal conservado...'"
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        rows={5}
                    ></textarea>
                     <button onClick={handleAnalyzeFundus} disabled={isFundusLoading} className="mt-4 w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors flex items-center justify-center text-lg">
                         {isFundusLoading ? <Spinner/> : <><i className="fas fa-search-plus mr-2"></i>Interpretar Informe</>}
                    </button>
                    {fundusError && <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{fundusError}</div>}
                    {fundusAnalysis && !isFundusLoading && (
                        <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200 space-y-4">
                            <div>
                                <h4 className="font-bold text-lg text-indigo-800">Interpretación de Hallazgos</h4>
                                <p className="mt-1 text-gray-700">{fundusAnalysis.interpretacion}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-indigo-800">Nivel de Severidad Estimado</h4>
                                <p className="mt-1 text-gray-700 font-semibold">{fundusAnalysis.severidad}</p>
                            </div>
                            <div className="p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-r-md">
                                <h4 className="font-bold">Recomendaciones</h4>
                                <p className="mt-1 text-sm">{fundusAnalysis.recomendaciones}</p>
                            </div>
                        </div>
                    )}
                 </div>
            </div>
        </div>
    );
};

export default ClinicalMode;

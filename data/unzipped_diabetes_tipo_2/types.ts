export interface OralMedication {
  id: string;
  name: string;
  dose: string;
}

export interface Insulin {
  dose: number;
}

export interface Treatment {
  oralMeds: OralMedication[];
  longActingInsulin: Insulin;
  rapidActingInsulin: Insulin;
}

export type GlucoseContext = 'ayunas' | 'antes de comer' | '2h post-comida' | 'acostar' | 'madrugada (3am)' | 'otro';

export interface GlucoseReading {
  id: string;
  value: number;
  timestamp: string; // ISO string for easier serialization
  context: GlucoseContext;
}

export interface AnalysisSuggestion {
  area: 'Insulina Lenta' | 'Insulina Rápida' | 'Antidiabéticos Orales' | 'Estilo de Vida' | 'Monitorización';
  ajuste: string;
  justificacion: string;
}

export interface AnalysisResponse {
  analisisGeneral: string;
  fenomenoDetectado: {
    nombre: 'Ninguno' | 'Fenómeno del Alba' | 'Efecto Somogyi';
    explicacion: string;
    consejoCorreccion: string;
  };
  sugerencias: AnalysisSuggestion[];
}

export const glucoseContextOptions: GlucoseContext[] = ['ayunas', 'antes de comer', '2h post-comida', 'acostar', 'madrugada (3am)', 'otro'];

export interface FundusAnalysisResponse {
  interpretacion: string;
  severidad: 'Normal' | 'Retinopatía Diabética No Proliferativa Leve' | 'Retinopatía Diabética No Proliferativa Moderada' | 'Retinopatía Diabética No Proliferativa Severa' | 'Retinopatía Diabética Proliferativa' | 'No concluyente';
  recomendaciones: string;
}

export type HypoglycemiaRisk = 'bajo' | 'alto';
export type LifeExpectancy = 'larga' | 'limitada';

export interface UserProfile {
  age: string;
  comorbidities: string;
  hypoglycemiaRisk: HypoglycemiaRisk;
  lifeExpectancy: LifeExpectancy;
}

export interface PersonalizedGoalsResponse {
  hba1c: string; 
  ayunas: string;
  postprandial: string;
  justificacion: string;
}

export const hypoglycemiaRiskOptions: { value: HypoglycemiaRisk, label: string }[] = [
    { value: 'bajo', label: 'Bajo' },
    { value: 'alto', label: 'Alto' },
];

export const lifeExpectancyOptions: { value: LifeExpectancy, label: string }[] = [
    { value: 'larga', label: 'Larga (>10 años)' },
    { value: 'limitada', label: 'Limitada (<10 años)' },
];

// --- Tipos para el Modo Investigación ---

export interface AnalysisResults {
    main?: AnalysisResponse;
    fundus?: FundusAnalysisResponse;
    goals?: PersonalizedGoalsResponse;
}

export interface Patient {
    id: string;
    name: string;
    profile: UserProfile;
    otherMedications: string; // Usamos un string para simplicidad, puede ser un array si se prefiere
    pathologies: string; // Usamos un string para simplicidad
    treatment: Treatment;
    glucoseReadings: GlucoseReading[];
    fundusReport: string;
    analysisResults: AnalysisResults;
}

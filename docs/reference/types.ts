export enum Category {
    CARDIOLOGIA = "Cardiología",
    NEFROLOGIA = "Nefrología",
    ENDOCRINOLOGIA = "Endocrinología",
    NEUROLOGIA = "Neurología",
    PSIQUIATRIA = "Psiquiatría",
    REUMATOLOGIA = "Reumatología",
    ONCOLOGIA = "Oncología",
    HEMATOLOGIA = "Hematología",
    DERMATOLOGIA = "Dermatología",
    DIGESTIVO = "Digestivo",
    RESPIRATORIO = "Respiratorio",
    ANTICOAGULANTES = "Anticoagulantes",
    ANTIDIABETICOS = "Antidiabéticos",
    GINECOLOGIA = "Ginecología",
    OFTALMOLOGIA = "Oftalmología",
    INFECTOLOGIA = "Infectología",
    UROLOGIA = "Urología",
}

export type CalculatorType = 'APIXABAN' | 'SITAGLIPTIN' | 'CLOZAPINA' | 'EPOETIN' | 'TOLVAPTAN' | 'AMIODARONE' | 'CINACALCET';

export interface Medication {
    id: string;
    name: string;
    category: Category;
    indication: string;
    fichaTecnica: {
        mecanismo: string;
        posologia:string;
        efectosAdversos: string;
        contraindicaciones: string;
    };
    hasCalculator: boolean;
    calculatorType?: CalculatorType;
}
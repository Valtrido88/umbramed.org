
export interface Meal {
  nombre: string;
  platos: string[];
}

export interface DayPlan {
  dia: string;
  comidas: Meal[];
}

export interface Exercise {
  nombre: string;
  descripcion: string;
  series_repeticiones: string;
}

export interface ObesityPlan {
  planDieta: DayPlan[];
  planEjercicios: Exercise[];
  consejosGenerales: string[];
}

export interface NutrientRichDiet {
    nombreDieta: string;
    descripcion: string;
    alimentosRecomendados: string[];
    planComidasEjemplo: DayPlan;
}

export interface FoodInteractionInfo {
    alimentosQueAumentanEfecto: { nombre: string; explicacion: string }[];
    alimentosQueDisminuyenEfecto: { nombre: string; explicacion: string }[];
}

export interface HighMetaboliteFoods {
    alimentosAltosEnTrigliceridos: { alimento: string; motivo: string }[];
    alimentosAltosEnAcidoUrico: { alimento: string; motivo: string }[];
}

export interface ConditionDiet {
    nombre: string;
    descripcion: string;
    consejos: string[];
    planComidas: DayPlan;
}

export type AppSection = 'obesity' | 'nutrients' | 'foodInfo' | 'conditions';

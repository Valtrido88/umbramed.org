
import React from 'react';
import { UmbramedLogo, DnaChain, UMBRAMED_INFO } from '../constants';
import type { ObesityPlan, NutrientRichDiet, FoodInteractionInfo, HighMetaboliteFoods, ConditionDiet, DayPlan, Meal } from '../types';

interface PrintableContentProps {
    data: ObesityPlan | NutrientRichDiet | FoodInteractionInfo | HighMetaboliteFoods | ConditionDiet | null;
    title: string;
}

const MealComponent: React.FC<{ meal: Meal }> = ({ meal }) => (
    <div className="mt-2">
        <h4 className="font-semibold text-gray-700">{meal.nombre}</h4>
        <ul className="list-disc list-inside text-gray-600">
            {meal.platos.map((plato, i) => <li key={i}>{plato}</li>)}
        </ul>
    </div>
);

const DayPlanComponent: React.FC<{ dayPlan: DayPlan }> = ({ dayPlan }) => (
    <div className="p-3 border border-gray-200 rounded-lg bg-white">
        <h3 className="font-bold text-lg text-red-700">{dayPlan.dia}</h3>
        {dayPlan.comidas.map((meal, i) => <MealComponent key={i} meal={meal} />)}
    </div>
);

export const PrintableContent = React.forwardRef<HTMLDivElement, PrintableContentProps>(({ data, title }, ref) => {
    if (!data) return null;
    
    const renderContent = () => {
        if ('planDieta' in data) { // ObesityPlan
            return (
                <>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Plan de Dieta Semanal</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.planDieta.map((day, i) => <DayPlanComponent key={i} dayPlan={day} />)}
                        </div>
                    </div>
                    <div className="mb-6 page-break-before">
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Plan de Ejercicios</h2>
                        {data.planEjercicios.map((ex, i) => (
                            <div key={i} className="mb-3">
                                <h3 className="font-semibold text-red-700">{ex.nombre}</h3>
                                <p className="text-gray-600">{ex.descripcion}</p>
                                <p className="text-gray-500 text-sm"><strong>Sugerencia:</strong> {ex.series_repeticiones}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Consejos Generales</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {data.consejosGenerales.map((tip, i) => <li key={i}>{tip}</li>)}
                        </ul>
                    </div>
                </>
            );
        }
        if ('nombreDieta' in data) { // NutrientRichDiet
            return (
                <>
                    <p className="mb-4 text-gray-600">{data.descripcion}</p>
                     <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Alimentos Recomendados</h2>
                        <ul className="list-disc list-inside text-gray-600 grid grid-cols-2 gap-x-4">
                            {data.alimentosRecomendados.map((food, i) => <li key={i}>{food}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Ejemplo de Menú (1 Día)</h2>
                        <DayPlanComponent dayPlan={data.planComidasEjemplo} />
                    </div>
                </>
            );
        }
        if ('alimentosQueAumentanEfecto' in data) { // FoodInteractionInfo
             return (
                <>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-500 pb-2 mb-3">Alimentos que AUMENTAN el efecto de Sintrom (licúan más la sangre)</h2>
                         {data.alimentosQueAumentanEfecto.map((item, i) => (
                            <div key={i} className="mb-2">
                                <h3 className="font-semibold text-gray-800">{item.nombre}</h3>
                                <p className="text-gray-600">{item.explicacion}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-yellow-700 border-b-2 border-yellow-500 pb-2 mb-3">Alimentos que DISMINUYEN el efecto de Sintrom (requieren ajustar dosis)</h2>
                        <p className="text-sm text-gray-600 mb-2">Estos alimentos son ricos en Vitamina K. No se trata de eliminarlos, sino de mantener un consumo estable para que su médico pueda ajustar la dosis de Sintrom adecuadamente.</p>
                         {data.alimentosQueDisminuyenEfecto.map((item, i) => (
                            <div key={i} className="mb-2">
                                <h3 className="font-semibold text-gray-800">{item.nombre}</h3>
                                <p className="text-gray-600">{item.explicacion}</p>
                            </div>
                        ))}
                    </div>
                </>
            )
        }
        if ('alimentosAltosEnTrigliceridos' in data) { // HighMetaboliteFoods
            return (
                <>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Alimentos a Evitar o Limitar por Triglicéridos Altos</h2>
                         {data.alimentosAltosEnTrigliceridos.map((item, i) => (
                            <div key={i} className="mb-2 p-2 bg-gray-50 rounded">
                                <h3 className="font-semibold text-red-700">{item.alimento}</h3>
                                <p className="text-gray-600 text-sm">{item.motivo}</p>
                            </div>
                        ))}
                    </div>
                    <div className="page-break-before">
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Alimentos a Evitar o Limitar por Ácido Úrico Alto (Gota)</h2>
                         {data.alimentosAltosEnAcidoUrico.map((item, i) => (
                            <div key={i} className="mb-2 p-2 bg-gray-50 rounded">
                                <h3 className="font-semibold text-red-700">{item.alimento}</h3>
                                <p className="text-gray-600 text-sm">{item.motivo}</p>
                            </div>
                        ))}
                    </div>
                </>
            );
        }
        if('planComidas' in data) { // ConditionDiet
             return (
                <>
                    <p className="mb-4 text-gray-600">{data.descripcion}</p>
                     <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Consejos Clave</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {data.consejos.map((tip, i) => <li key={i}>{tip}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Ejemplo de Menú</h2>
                        <DayPlanComponent dayPlan={data.planComidas} />
                    </div>
                </>
            );
        }
        return null;
    }
    
    return (
        <div ref={ref} className="p-8 bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif', width: '210mm', minHeight: '297mm' }}>
            <header className="flex justify-between items-start pb-4 border-b-2 border-gray-200">
                <UmbramedLogo />
                <div className="text-right">
                    <h1 className="text-2xl font-bold text-red-600">{title}</h1>
                    <p className="text-gray-500">Plan Personalizado para el Paciente</p>
                </div>
            </header>
            
            <main className="mt-8">
                {renderContent()}
            </main>

            <footer className="mt-12 pt-4 text-center border-t border-gray-200">
                <DnaChain className="w-1/3 mx-auto h-8 text-red-500" />
                <p className="text-sm text-gray-600 mt-2">Este plan es una guía. Consulte a su médico ante cualquier duda.</p>
                <p className="text-xs text-gray-400 font-semibold">{UMBRAMED_INFO.name} - {UMBRAMED_INFO.website}</p>
            </footer>
        </div>
    );
});


import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PhysicianView from './components/PhysicianView';
import FamilyView from './components/FamilyView';
import { StethoscopeIcon } from './components/icons/StethoscopeIcon';
import { UsersIcon } from './components/icons/UsersIcon';

type View = 'home' | 'physician' | 'family';

const App: React.FC = () => {
    const [view, setView] = useState<View>('home');

    const renderView = () => {
        switch (view) {
            case 'physician':
                return <PhysicianView onBack={() => setView('home')} />;
            case 'family':
                return <FamilyView onBack={() => setView('home')} />;
            case 'home':
            default:
                return (
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-2">Bienvenido a la Guía de Apoyo</h2>
                        <p className="text-slate-500 mb-12 max-w-2xl mx-auto">Seleccione su rol para acceder a las herramientas y recursos personalizados.</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <RoleCard
                                icon={<StethoscopeIcon />}
                                title="Soy Médico"
                                description="Acceda al verificador de interacciones en perfusiones y a guías de dosificación."
                                onClick={() => setView('physician')}
                            />
                            <RoleCard
                                icon={<UsersIcon />}
                                title="Soy Familiar o Cuidador"
                                description="Encuentre consejos prácticos y apoyo emocional para acompañar a su ser querido."
                                onClick={() => setView('family')}
                            />
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
                {renderView()}
            </main>
            <Footer />
        </div>
    );
};

interface RoleCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ icon, title, description, onClick }) => (
    <button
        onClick={onClick}
        className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl border border-slate-200/80 hover:border-sky-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 w-full max-w-sm"
    >
        <div className="text-sky-500 mb-4 group-hover:text-sky-600 transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-500">{description}</p>
    </button>
);

export default App;


import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="container mx-auto px-4 py-6 text-center">
                <p className="text-sm text-slate-400">
                    Esta herramienta es un soporte informativo y no reemplaza el juicio clínico profesional.
                </p>
                <p className="text-sm text-slate-300 mt-1">
                    Creado para ayudar a pacientes y familias en momentos difíciles.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

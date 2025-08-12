
import React from 'react';
import { BeakerIcon } from './icons/BeakerIcon';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm border-b border-slate-200">
            <div className="container mx-auto px-4 py-4 flex items-center">
                 <div className="text-sky-500 mr-3">
                    <BeakerIcon />
                </div>
                <h1 className="text-xl font-bold text-slate-800">
                    Guía de Cuidado Paliativo
                </h1>
            </div>
        </header>
    );
};

export default Header;

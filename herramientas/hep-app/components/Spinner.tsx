
import React from 'react';
import { IconBrainCircuit } from './Icon';

interface SpinnerProps {
  message?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ message = "Cargando..." }) => {
  return (
    <div className="text-center p-8 my-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-center items-center mb-4">
            <IconBrainCircuit className="w-12 h-12 text-blue-500 animate-pulse" />
        </div>
        <p className="text-lg font-semibold text-gray-700">{message}</p>
        <p className="text-sm text-gray-500 mt-1">El análisis puede tardar unos segundos.</p>
    </div>
  );
};

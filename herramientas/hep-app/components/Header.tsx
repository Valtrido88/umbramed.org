import React from 'react';
import { IconHepatitisVirus } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md print:hidden">
      <div className="container mx-auto px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
               <div className="bg-blue-600 p-2 rounded-lg">
                  <IconHepatitisVirus className="w-6 h-6 text-white" />
               </div>
               <h1 className="text-2xl font-bold text-gray-800">
                Interpretador Serológico VHB
              </h1>
            </div>
            <div className="text-lg font-bold text-gray-600 tracking-wider">
                UMBRA<span className="text-blue-600">MED</span>
            </div>
        </div>
      </div>
    </header>
  );
};
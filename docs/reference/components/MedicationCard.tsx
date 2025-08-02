import React from 'react';
import { motion } from 'framer-motion';
import { Medication } from '../types';
import { CalculatorIcon } from './Icons';

interface MedicationCardProps {
    medication: Medication;
    onSelect: (medication: Medication) => void;
}

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const MedicationCard: React.FC<MedicationCardProps> = ({ medication, onSelect }) => {
    return (
        <motion.div
            variants={cardVariants}
            onClick={() => onSelect(medication)}
            className="relative bg-white rounded-xl shadow-sm p-5 flex flex-col justify-between h-48 cursor-pointer transition-shadow,border-color duration-300 hover:shadow-lg border border-gray-200 hover:border-blue-500 group"
        >
            <div className="flex-grow">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{medication.name}</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase font-medium tracking-wider">{medication.category}</p>
                <p className="text-sm text-gray-600 mt-3 leading-snug">{medication.indication}</p>
            </div>
            {medication.hasCalculator && (
                <div className="absolute top-4 right-4 text-amber-400 group-hover:text-amber-500 transition-colors duration-300" title="Calculadora disponible">
                    <CalculatorIcon className="w-6 h-6" />
                </div>
            )}
        </motion.div>
    );
};

export default MedicationCard;
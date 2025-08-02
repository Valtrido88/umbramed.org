import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allMedications } from './data/medications';
import { Medication, Category } from './types';
import MedicationCard from './components/MedicationCard';
import MedicationModal from './components/MedicationModal';
import { MagnifyingGlassIcon, PillIcon, TagIcon, CalculatorIcon, AdjustmentsHorizontalIcon, XMarkIcon } from './components/Icons';

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
    const [selectedMed, setSelectedMed] = useState<Medication | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
    // Reset active tab in modal when a new med is selected
    useEffect(() => {
      if (selectedMed) {
        // This is a placeholder for a more direct state reset if needed
      }
    }, [selectedMed]);

    const filteredMedications = useMemo(() => {
        return allMedications.filter(med => {
            const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
            const searchTermLower = searchTerm.toLowerCase();
            const matchesSearch = med.name.toLowerCase().includes(searchTermLower) ||
                                  med.indication.toLowerCase().includes(searchTermLower) ||
                                  med.category.toLowerCase().includes(searchTermLower);
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, selectedCategory]);

    const categories = Object.values(Category).sort((a,b) => a.localeCompare(b));
    const totalMedsWithCalculator = useMemo(() => allMedications.filter(m => m.hasCalculator).length, []);

    const handleSelectMed = (medication: Medication) => {
        setSelectedMed(medication);
    };

    const handleCloseModal = () => {
        setSelectedMed(null);
    };
    
    const gridVariants = {
        visible: {
            transition: {
                staggerChildren: 0.03
            }
        },
        hidden: {}
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Base de Datos de Medicamentos Visados
                    </h1>
                    <p className="text-gray-500 mt-2 text-lg">SAS - Andalucía</p>
                </header>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center">
                    <StatCard icon={<PillIcon className="w-7 h-7 text-blue-500"/>} value={allMedications.length} label="Medicamentos"/>
                    <StatCard icon={<TagIcon className="w-7 h-7 text-green-500"/>} value={categories.length} label="Categorías"/>
                    <StatCard icon={<CalculatorIcon className="w-7 h-7 text-amber-500"/>} value={totalMedsWithCalculator} label="Calculadoras"/>
                    <StatCard icon={<MagnifyingGlassIcon className="w-7 h-7 text-purple-500"/>} value={filteredMedications.length} label="Resultados"/>
                </div>

                {/* Filter Controls */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 sticky top-4 z-40">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-grow">
                            <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar medicamento, indicación o categoría..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-2.5 bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="hidden md:block relative">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value as Category | 'all')}
                                className="w-full md:w-56 appearance-none pl-4 pr-10 py-2.5 bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="all">Todas las categorías</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <button onClick={() => setIsFilterOpen(true)} className="md:hidden flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                            <AdjustmentsHorizontalIcon className="w-5 h-5" />
                            Filtros
                        </button>
                    </div>
                </div>

                {/* Medication Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={gridVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredMedications.map(med => (
                        <MedicationCard key={med.id} medication={med} onSelect={handleSelectMed} />
                    ))}
                </motion.div>

                {filteredMedications.length === 0 && (
                     <div className="text-center py-24">
                        <MagnifyingGlassIcon className="mx-auto h-16 w-16 text-gray-300"/>
                        <p className="mt-4 text-xl font-semibold text-gray-800">No se encontraron medicamentos</p>
                        <p className="mt-2 text-gray-500">Intente cambiar los filtros o el término de búsqueda.</p>
                    </div>
                )}
            </div>
            
            <AnimatePresence>
                {selectedMed && <MedicationModal medication={selectedMed} onClose={handleCloseModal} />}
            </AnimatePresence>
            
            <AnimatePresence>
              {isFilterOpen && (
                <FilterSheet 
                  onClose={() => setIsFilterOpen(false)} 
                  categories={categories}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
            </AnimatePresence>
        </div>
    );
};

const StatCard: React.FC<{icon: React.ReactNode, value: string | number, label: string}> = ({icon, value, label}) => (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
        <div className="bg-gray-100 p-3 rounded-lg">{icon}</div>
        <div>
            <p className="text-2xl font-bold text-gray-900 text-left">{value}</p>
            <p className="text-sm text-gray-500 text-left">{label}</p>
        </div>
    </div>
);

const FilterSheet: React.FC<{
    onClose: () => void,
    categories: Category[],
    selectedCategory: Category | 'all',
    setSelectedCategory: (cat: Category | 'all') => void
}> = ({onClose, categories, selectedCategory, setSelectedCategory}) => {
    return (
        <motion.div 
            className="fixed inset-0 bg-black/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-5 shadow-2xl"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">Filtros</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-800"><XMarkIcon className="w-6 h-6"/></button>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value as Category | 'all')}
                        className="w-full appearance-none pl-4 pr-10 py-3 bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="all">Todas las categorías</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                 <button onClick={onClose} className="mt-6 w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                    Ver Resultados
                </button>
            </motion.div>
        </motion.div>
    );
};

export default App;
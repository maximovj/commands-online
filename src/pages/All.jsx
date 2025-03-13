import React, { useEffect, useState } from 'react';
import ToolBar from "../components/ToolBar";
import Card from '../components/Card';
import { commands } from '../data/commands';

function All() {
    const [list, setList] = useState([]);  // Lista de elementos a mostrar

    const [filter, setFilter] = useState([]); // Tags disponibles
    const [selectedFilter, setSelectedFilter] = useState("null"); // Filtro por tag

    const [category, setCategory] = useState([]); // Categorías disponibles
    const [selectedCategory, setSelectedCategory] = useState("null"); // Filtro por categoría

    const [alias, setAlias] = useState([]); // alias disponibles
    const [selectedAlias, setSelectedAlias] = useState("null"); // Filtro por alias

    useEffect(() => {
        setList(commands);
        setFilter([...new Set(commands.map(el => el.tags || []).flat())]);
        setCategory([...new Set(commands.map(el => el.category || []).flat())]);
        setAlias([...new Set(commands.map(el => el.alias || []).flat())]);
    }, []);

    // Filtrar en base a tag y categoría seleccionados
    const filteredList = list.filter(el => {
        const matchesTag = selectedFilter === "null" || el.tags?.includes(selectedFilter);
        const matchesCategory = selectedCategory === "null" || el.category?.includes(selectedCategory);
        const matchesAlias = selectedAlias === "null" || el.alias?.includes(selectedAlias);
        return matchesTag && matchesCategory && matchesAlias;
    });

    const handleReset = () => {
        setSelectedFilter("null");
        setSelectedCategory("null");
        setSelectedAlias("null");
    }

    return (
        <>
            <ToolBar success={true} />
            <div className="flex-grow w-full h-full p-4 lg:px-23">
                <div className="flex flex-col md:flex-row gap-4 py-4">
                    {/* Filtro de Tags */}
                    <select
                        title="Language"
                        className="px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                        <option value="null" className="text-gray-500">Lenguaje</option>
                        {filter.map((el, index) => (
                            <option key={index} value={el} className="text-gray-900 dark:text-gray-100">
                                {el}
                            </option>
                        ))}
                    </select>

                    {/* Filtro de Categoría */}
                    <select
                        title="Category"
                        className="px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="null" className="text-gray-500">Categoría</option>
                        {category.map((el, index) => (
                            <option key={index} value={el} className="text-gray-900 dark:text-gray-100">
                                {el}
                            </option>
                        ))}
                    </select>

                    {/* Filtro de Alias */}
                    <select
                        title="Alias"
                        className="px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
                        value={selectedAlias}
                        onChange={(e) => setSelectedAlias(e.target.value)}
                    >
                        <option value="null" className="text-gray-500">Alias</option>
                        {alias.map((el, index) => (
                            <option key={index} value={el} className="text-gray-900 dark:text-gray-100">
                                {el}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={handleReset}
                        className="text-red-600 rounded-4xl"
                    >
                        Limpiar
                    </button>
                </div>

                <div className="w-full mx-auto h-0.5 border-0 bg-gray-800 dark:bg-gray-200 rounded-lg mb-4"></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {filteredList.map(el => (<Card key={el.id} el={el} />))}
                </div>
            </div>
        </>
    );
}

export default All;

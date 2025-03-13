import React, { useEffect, useState } from 'react';
import ToolBar from "../components/ToolBar";
import Card from '../components/Card';
import { commands_tools } from '../data/commands';

function Tools() {
    const [list, setList] = useState([]);  // Lista de elementos a mostrar
    const [alias, setAlias] = useState([]); // alias disponibles
    const [selectedAlias, setSelectedAlias] = useState("null"); // Filtro por alias

    useEffect(() => {
        setList(commands_tools);
        setAlias([...new Set(commands_tools.map(el => el.alias || []).flat())]);
    }, []);

    // Filtrar en base a tag y categoría seleccionados
    const filteredList = list.filter(el => {
        const matchesAlias = selectedAlias === "null" || el.alias?.includes(selectedAlias);
        return matchesAlias;
    });

    const handleReset = () => {
        setSelectedAlias("null");
    }

    return (
        <>
            <ToolBar success={true} />
            <div className="flex-grow w-full h-full p-4 lg:px-23">
                <div className="flex flex-col md:flex-row gap-4 py-4">
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
                        Reset
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

export default Tools;

import React, { useEffect, useState } from 'react';
import ToolBar from "../components/ToolBar";
import Card from '../components/Card';
import { commands } from '../data/commands';
import { useParams } from 'react-router-dom';

function Commands() {
    const { alias } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(commands);
    }, []);

    // Filtrar la lista con el alias proporcionado en la URL
    const filteredList = list.filter(el => {
        let tags = Array.isArray(el.tags) ? el?.tags.map(str => str.toLowerCase()) : [];
        return el.alias.toLowerCase() === alias ||
            el.category.toLowerCase() === alias ||
            tags.includes(alias)
    });

    return (
        <>
            <ToolBar success={true} />
            <div className="flex-grow w-full h-full p-4 lg:px-23">
                <div className="w-full mx-auto h-0.5 border-0 bg-gray-800 dark:bg-gray-200 rounded-lg mb-4"></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {filteredList.map(el => (<Card
                        key={el.id}
                        route={`/commands/${el.alias.toLowerCase()}`}
                        alias={el.alias}
                        commands={el.commands}
                    />))}
                </div>
            </div>
        </>
    );
}

export default Commands;

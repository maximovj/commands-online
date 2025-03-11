import React from 'react';
import ToolBar from "../components/ToolBar";
import Card from '../components/Card';
import { commands_devops } from '../data/commands';
import { useEffect } from 'react';
import { useState } from 'react';

function DevOps() {
    const [list, setList] = useState([]);

    useEffect(() => {
        //console.log(commands_devops);
        setList(commands_devops);
    }, []);

    return (
        <>
            <ToolBar success={true}></ToolBar>
            <div className="flex-grow w-full h-full p-4 lg:px-23">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {list.map(el => (<Card key={el} el={el} />))}
                </div>
            </div>
        </>
    )
}

export default DevOps
import React from 'react';
import ToolBar from "../components/ToolBar";


function All() {
    return (
        <>
            <ToolBar success={true}></ToolBar>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <div className="flex-grow w-full h-full m-4">
                    <h1>Página: All</h1>
                </div>
            </div>
        </>
    )
}

export default All
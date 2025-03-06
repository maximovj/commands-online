function ToolBar({ showCards, success }) {

    const tools = ['React', 'Vue', 'Laravel', 'Spring Boot', 'VSCode', 'Vim', 'etc'];

    return (
        <>
            <div className="flex flex-col justify-center align-middle items-center w-3/6">
                {
                    !success ? (<>
                        <p className="w-full mb-4 text-2xl dark:text-gray-50">
                            <span className="text-5xl font-bold">C</span>onsulte comandos de distintos herramientas y frameworks para desarrollo web, así como :&nbsp;
                            {tools.map(el => (<span className="text-purple-700">{el}, </span>))}
                        </p>
                    </>) : null
                }
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-gray-200 border-0 rounded-2xl w-full shadow-gray-800 py-4 px-8 shadow-sm m-4"
                />
                <div className="flex gap-4">
                    <button
                        onClick={() => showCards()}
                        className="bg-gray-200 border-0 rounded-2xl py-2 px-4 mt-4 animate-bounce hover:shadow-lg hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >Todos</button>
                    <button
                        className="bg-gray-200 border-0 rounded-2xl py-2 px-4 mt-4 animate-bounce hover:shadow-lg hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >BackEnd</button>
                    <button
                        className="bg-gray-200 border-0 rounded-2xl py-2 px-4 mt-4 animate-bounce hover:shadow-lg hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >FrontEnd</button>
                    <button
                        className="bg-gray-200 border-0 rounded-2xl py-2 px-4 mt-4 animate-bounce hover:shadow-lg hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >DevOps</button>
                    <button
                        className="bg-gray-200 border-0 rounded-2xl py-2 px-4 mt-4 animate-bounce hover:shadow-lg hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >Tools</button>
                </div>
            </div>
        </>
    )
}

export default ToolBar
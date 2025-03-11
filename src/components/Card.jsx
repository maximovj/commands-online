function Card({ el }) {
    return (
        <>
            {/* Card */}
            <div className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-400 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold">{el.framework}</h3>
                <p className="mt-2">{el.description}</p>

                <div class="mt-3">
                    <button class="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-400 px-2 py-1 rounded-md">
                        Copiar comando principal
                    </button>
                </div>

                <div className="flex flex-col">

                    {/* Lista dentro de la tarjeta */}
                    <ul className="mt-4 space-y-2 ">
                        <li className="flex items-center ">
                            <span className="bg-red-500 rounded-full w-4 h-4 mr-2"></span>
                            Elemento 1
                        </li>
                        <li className="flex items-center ">
                            <span className="bg-fuchsia-500 rounded-full w-4 h-4 mr-2"></span>
                            Elemento 2
                        </li>
                        <li className="flex items-center">
                            <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
                            Elemento 3
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Card
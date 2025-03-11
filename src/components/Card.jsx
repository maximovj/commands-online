import { toast } from 'react-toastify';

function Card({ el }) {

    const handleBtnCopy = (el) => {
        navigator.clipboard.writeText(el.command)
            .then(() => {
                toast.success('Comando copiado al portapapeles', { position: "bottom-right", theme: "light", });
            })
            .catch(err => console.error("Error al copiar:", err));
    }

    return (
        <>
            {/* Card */}
            <div className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-400 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-extralight">{el.alias}</h3>
                <p className="mt-2 text-sm">{el.description}</p>
                <p className="mt-2 font-bold text-sm">{el.command}</p>

                <div class="mt-3">
                    <button onClick={() => handleBtnCopy(el)} class="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-400 px-2 py-1 rounded-md">
                        Copiar comando principal
                    </button>
                </div>

                <div className="flex flex-col">

                    {/* Lista dentro de la tarjeta */}
                    <ul className="mt-4 space-y-2 ">
                        {el.commands.map(commando => (
                            <>
                                <li key={commando.command}>
                                    <div className="flex justify-between items-center align-middle border-t border-b p-2">
                                        <span class="material-icons size-5 text-yellow-400 rounded-full w-6 h-6 mr-2">
                                            grade
                                        </span>
                                        <div className='flex flex-col justify-between items-center align-middle'>
                                            <span className="mr-4 font-normal">{commando.description}</span>
                                            <span className="mr-4 font-bold text-sm">{commando.command}</span>
                                        </div>
                                        <button onClick={() => handleBtnCopy(el)} class="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-400 px-2 py-1 rounded-md">
                                            Copiar
                                        </button>
                                    </div>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card
function Card({ el }) {
    return (
        <>
            {/* Card */}
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <img src="https://placehold.co/150" alt="Imagen de la tarjeta" className="w-32 h-32 object-cover rounded-md mb-4 " />
                <h3 className="text-xl font-semibold">Título de la tarjeta #{el + 1}</h3>
                <p className="text-gray-500">Subtítulo de la tarjeta #{el + 1}</p>
                <div className="flex flex-col">
                    <p className="text-gray-700 mt-2">Descripción de la tarjeta. Aquí puedes poner información adicional sobre el contenido de la tarjeta.</p>

                    {/* Lista dentro de la tarjeta */}
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                            <span className="bg-blue-500 text-white rounded-full w-4 h-4 mr-2"></span>
                            Elemento 1
                        </li>
                        <li className="flex items-center">
                            <span className="bg-blue-500 text-white rounded-full w-4 h-4 mr-2"></span>
                            Elemento 2
                        </li>
                        <li className="flex items-center">
                            <span className="bg-blue-500 text-white rounded-full w-4 h-4 mr-2"></span>
                            Elemento 3
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card
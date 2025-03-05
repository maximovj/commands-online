const Footer = () => {
    return (
        <nav className="bg-gray-800 p-10">
            <div className="flex flex-row items-center justify-end">
                <p className="flex flex-row gap-2 items-center">
                    <span className="text-gray-400 text-base">Creado por:</span>
                    <span className="text-cyan-600 text-1xl">
                        <a href="https://github.com/maximovj">Víctor J.</a>
                    </span>
                </p>
            </div>
        </nav>
    )
}

export default Footer
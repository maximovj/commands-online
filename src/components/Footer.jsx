const Footer = () => {
    return (
        <nav className="bg-gray-800 py-10 px-10 md:px-30 mt-auto">
            <div className="flex flex-row items-center md:justify-end">
                <p className="flex flex-row gap-2 items-center">
                    <span className="text-gray-400 text-base">Creado por:</span>
                    <span className="text-cyan-600 text-1xl">
                        <a
                            href="https://github.com/maximovj"
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer">Víctor J.</a>
                    </span>
                </p>
            </div>
        </nav>
    )
}

export default Footer
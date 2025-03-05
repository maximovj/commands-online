const Header = () => {
    return (
        <nav className="bg-gray-800 p-10">
            <div className="flex flex-row items-center justify-start">
                <a href="/">
                    <p className="flex flex-row gap-2 items-end">
                        <span className="text-cyan-600 text-2xl">
                            Commands Online
                        </span>
                        <span className="text-gray-400 text-base">v1.0.0</span>
                    </p>
                </a>
            </div>
        </nav>
    )
}

export default Header
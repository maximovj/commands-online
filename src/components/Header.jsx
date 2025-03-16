import ThemeSwitcher from "./ThemeSwitcher";
import routes from '../routes.js';
import { Link } from "react-router-dom";  // Importa Link

const Header = () => {
    return (
        <nav className="bg-gray-800 p-10">
            <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:px-12 md:gap-0">
                <Link to={routes.Root}>  {/* Usamos Link en lugar de <a> */}
                    <p className="flex flex-row gap-2 items-end">
                        <span className="text-cyan-600 text-2xl">
                            Commands Online
                        </span>
                        <span className="text-gray-400 text-base">v1.0.0</span>
                    </p>
                </Link>
                <ThemeSwitcher />
            </div>
        </nav>
    )
}

export default Header;

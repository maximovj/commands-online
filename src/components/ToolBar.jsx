import { useNavigate, useLocation } from "react-router-dom";
import SearchQuick from "./SearchQuick";

function ToolBar({ success }) {
    const tools = ['React', 'Vue', 'Laravel', 'Spring Boot', 'VSCode', 'Vim', 'etc'];
    const navigate = useNavigate();
    const location = useLocation(); // Obtiene la ruta actual

    const buttons = [
        { path: "/all", label: "Todos" },
        { path: "/backend", label: "BackEnd" },
        { path: "/frontend", label: "FrontEnd" },
        { path: "/devops", label: "DevOps" },
        { path: "/tools", label: "Tools" },
    ];

    return (
        <div className="flex flex-col justify-center items-center w-full px-4">
            {!success && (
                <p className="w-1/2 mb-4 text-2xl dark:text-gray-50">
                    <span className="text-5xl font-bold">C</span>onsulte comandos de distintas herramientas y frameworks para desarrollo web, así como:&nbsp;
                    {tools.map(el => (
                        <span className="text-cyan-600" key={el}>{el}, </span>
                    ))}
                </p>
            )}

            <SearchQuick />

            <div className="hidden sm:flex gap-4">
                {buttons.map(({ path, label }) => (
                    <button
                        key={path}
                        onClick={() => navigate(path)}
                        className={`border-0 rounded-2xl py-2 px-4 mt-4 hover:shadow-lg 
                        ${location.pathname === path ? "bg-cyan-600 text-white" : "bg-gray-200"}
                        animate-bounce hover:animate-[wiggle_1s_ease-in-out_infinite]`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ToolBar;

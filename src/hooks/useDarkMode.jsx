import { useEffect, useState } from "react";

export function useDarkMode() {
    // Obtener el tema inicial desde localStorage o preferencia del sistema
    const getInitialTheme = () => {
        if (localStorage.getItem("theme")) {
            return localStorage.getItem("theme") === "dark";
        }
        // Si no hay configuración en localStorage, devolver la preferencia del sistema
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

    // Asegurarse de que la clase 'dark' se agregue correctamente
    useEffect(() => {
        // Primero aplicar el tema en el documento
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]); // Se ejecuta cada vez que cambia isDarkMode

    // Función para alternar el modo oscuro
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    return { isDarkMode, toggleDarkMode };
}

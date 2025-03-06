import { useDarkMode } from "../hooks/useDarkMode";

export default function ThemeSwitcher() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className="flex items-center gap-2">
            <label
                htmlFor="theme-switch"
                className="relative inline-flex items-center cursor-pointer"
            >
                <input
                    type="checkbox"
                    id="theme-switch"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    className="sr-only"
                />
                <div className="w-12 h-6 bg-gray-200 dark:bg-gray-200 rounded-full flex items-center justify-between px-1 transition-colors">
                    <span
                        className={`absolute w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform ${isDarkMode ? 'translate-x-6' : ''
                            }`}
                    >
                        {isDarkMode ? "🌙" : "☀"}
                    </span>
                </div>
            </label>
        </div>
    );
}

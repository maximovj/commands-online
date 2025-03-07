import { useRef, useEffect } from "react";
import "ninja-keys"; // Asegúrate de importar ninja-keys
import platform from "platform";
import { useNavigate } from "react-router-dom";

function SearchQuick() {
    const ninjaKeysRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const isMac = platform.os.family.includes('Mac') ? 'cmd' : 'ctrl';

        if (ninjaKeysRef.current) {
            ninjaKeysRef.current.data = [{
                id: "Home",
                title: "Open Home",
                hotkey: `${isMac}+h`,
                mdIcon: "home",
                handler: () => {
                    navigate('/');
                }
            },
            {
                id: "All",
                title: "Open All",
                hotkey: `${isMac}+a`,
                mdIcon: "apps",
                handler: () => {
                    navigate('/all');
                }
            },
            {
                id: "BackEnd",
                title: "Open BackEnd",
                hotkey: `${isMac}+b`,
                mdIcon: "apps",
                handler: () => {
                    navigate('/backend');
                }
            },
            {
                id: "FrontEnd",
                title: "Open FrontEnd",
                hotkey: `${isMac}+f`,
                mdIcon: "apps",
                handler: () => {
                    navigate('/frontend');
                }
            },
            {
                id: "DevOps",
                title: "Open DevOps",
                hotkey: `${isMac}+d`,
                mdIcon: "apps",
                handler: () => {
                    navigate('/devops');
                }
            },
            {
                id: "Tools",
                title: "Open Tools",
                hotkey: `${isMac}+t`,
                mdIcon: "apps",
                handler: () => {
                    navigate('/tools');
                }
            },
            {
                id: "Theme",
                title: "Change theme...",
                mdIcon: "desktop_windows",
                children: [
                    {
                        id: "Light Theme",
                        title: "Change theme to Light",
                        mdIcon: "light_mode",
                        handler: () => {
                            console.log("theme light");
                        }
                    },
                    {
                        id: "Dark Theme",
                        title: "Change theme to Dark",
                        mdIcon: "dark_mode",
                        handler: () => {
                            console.log("theme dark");
                        }
                    }
                ]
            }];
        }
    }, []);

    const handleOpenNinjaKeys = () => {
        if (ninjaKeysRef.current) {
            ninjaKeysRef.current.open(); // Abre NinjaKeys
        }
    };

    return (
        <>
            <button
                type="button"
                onClick={handleOpenNinjaKeys}
                className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full px-5 py-3 text-left text-base text-gray-950/50 inset-ring inset-ring-gray-950/8 sm:w-[34rem] dark:bg-white/5 dark:text-white/50 dark:inset-ring-white/15 m-4"
            >
                <span className="material-icons -ml-0.5 size-5 fill-gray-600 dark:fill-gray-500">search</span>
                Búsqueda rápida
                <kbd className="hidden font-sans text-sm text-gray-500 dark:text-gray-400 [.os-macos_&]:block">
                    <span className="opacity-60">⌘</span>K
                </kbd>
                <kbd className="hidden font-sans text-sm text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">
                    <span className="opacity-60">Ctrl</span>&nbsp;K
                </kbd>
            </button>

            {/* Usa la referencia de ninja-keys y pasa los hotkeys */}
            <ninja-keys ref={ninjaKeysRef}>
                <div slot="footer"></div>
            </ninja-keys>
        </>
    );
}

export default SearchQuick;

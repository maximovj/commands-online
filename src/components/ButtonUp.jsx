import React, { useState, useEffect } from "react";

function ButtonUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                } bg-fuchsia-900 hover:bg-fuchsia-800 cursor-pointer text-gray-50 rounded-full h-14 w-14 fixed bottom-4 right-4 animate-border-pulse`}
            onClick={scrollToTop}
        >
            Subir
        </button>
    );
}

export default ButtonUp;

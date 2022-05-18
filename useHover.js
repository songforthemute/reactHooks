import React, { useRef, useEffect } from "react";

export const useHover = (onHover) => {
    if (typeof onHover !== "function") return;

    const element = useRef();

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onClick);
        }

        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onClick);
            }
        };
    }, []);

    return element;
};

const App = () => {
    const element = useRef();

    return (
        <div>
            <h2 ref={element}>HelloWorld</h2>
        </div>
    );
};

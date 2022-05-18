import React, { useRef, useEffect } from "react";

export const useClick = (onClick) => {
    const element = useRef();

    useEffect(() => {
        if (typeof onClick !== "function") return;

        if (element.current) {
            element.current.addEventListener("click", onClick);
        }

        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);

    return typeof onClick !== "function" ? element : undefined;
};

const App = () => {
    const helloWorld = () => console.log("Hello World");
    const title = useClick(helloWorld);

    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    );
};

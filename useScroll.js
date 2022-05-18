import React, { useEffect, useState } from "react";

export const useScroll = () => {
    const [state, setState] = useState({ x: 0, y: 0 });
    const onScroll = () => {
        setState({ x: window.scrollX, y: window.scrollY });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return state;
};

const App = () => {
    const { y } = useScroll();

    return (
        <div style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
                Hello World!
            </h1>
        </div>
    );
};

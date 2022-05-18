import React, { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") return;

    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) onBefore();
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

const App = () => {
    const begForLife = () => console.log("Plz doot leave!");
    useBeforeLeave(begForLife);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

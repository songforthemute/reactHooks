import React, { useRef } from "react";

export const useFullScreen = (callback) => {
    const element = useRef();
    const runCallback = (isFull) => {
        if (typeof callback === "function") callback(isFull);
    };
    const triggerFull = () => {
        if (element.current) element.current.requestFullscreen();
        runCallback(true);
    };
    const exitFull = () => {
        if (document.fullscreenElement) document.exitFullscreen();
        runCallback(false);
    };

    return { element, triggerFull, exitFull };
};

const App = () => {
    const onFullscreen = (isFull) => {
        console.log(isFull ? "Fullscreen now." : "Not fullscreen.");
    };
    const { element, triggerFull, exitFull } = useFullScreen(onFullscreen);

    return (
        <div>
            <div ref={element}>
                <img src="#" alt="#"></img>
                <button onClick={triggerFull}>Make Fullscreen</button>
            </div>
            <button onClick={exitFull}>Make Fullscreen</button>
        </div>
    );
};

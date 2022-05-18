import React, { useRef, useEffect } from "react";

export const useNotification = (title, options) => {
    if (!("Notification" in window)) return;

    const notice = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") new Notification(title, options);
                else return;
            });
        } else {
            new Notification(title, options);
        }
    };

    return notice;
};

const App = () => {
    const triggerNotice = useNotification("Hello World!", { body: "Goodbye!" });

    return (
        <div>
            <button onClick={triggerNotice}>Notice</button>
        </div>
    );
};

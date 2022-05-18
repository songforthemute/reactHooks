import React from "react";

export const useConfirm = (message = "", onConfirm, onCancel) => {
    if (typeof onConfirm !== "function") return; // !onConfirm은 typeof에서 undefined로 필터링.
    // if (typeof onCancel !== "function") return; // 에외처리

    const confirmation = () => {
        if (confirm(message)) onConfirm();
        else
            try {
                onCancel();
            } catch (error) {
                // 예외처리
                return;
            }
    };

    return confirmation;
};

const App = () => {
    const deleteWorld = () => console.log("Deleting the world!");
    const abort = () => console.log("Aborted!");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

    return (
        <div>
            <button onClick={confirmDelete}>Hello World</button>
        </div>
    );
};

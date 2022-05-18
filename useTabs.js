import React, { useState } from "react";

const content = [
    { tab: "chapter 1", content: "I'm the content of the Chapter 1" },
    { tab: "chapter 2", content: "I'm the content of the Chapter 2" },
    { tab: "chapter 3", content: "I'm the content of the Chapter 3" },
];

export const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) return;

    const [currentIndex, setCurrentIndex] = useState(initialTab);

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
    };
};

// example
const App = () => {
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <div>
            {content.map((chapter, index) => (
                <button onClick={() => changeItem(index)}>{chapter.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
};

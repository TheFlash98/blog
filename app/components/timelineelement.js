import React from "react";

function TimelineElement({ heading, subheading, desc }) {
    return (
        <div className="font-sans mb-4">
            <h2 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl leading-5 tracking-tight">
                {heading}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2 font-medium">
                {subheading}
            </p>
            <div className="text-neutral-800 dark:text-neutral-200">{desc}</div>
        </div>
    );
}

export default TimelineElement;

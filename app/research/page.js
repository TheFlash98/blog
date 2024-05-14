import React from "react";
import ResearchItem from "./components/researchitem";

function Research() {
    return (
        <section className="min-h-[65vh]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">
                Research
            </h1>
            <p className="mb-4">
                I was involved in a few research projects either through
                coursework or independent research endeavors during my stay at
                IIT Bombay.
            </p>
            <ResearchItem />
        </section>
    );
}

export default Research;

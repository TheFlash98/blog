"use client";
import React from "react";

function PaperTags(props) {
    const [showAbstract, setShowAbstract] = React.useState(false);
    return (
        <div>
            <div className="flex gap-2">
                <div className="px-2 py-1 rounded-full border border-black dark:border-white">
                    <p
                        className="text-sm"
                        onClick={() =>
                            setShowAbstract((prevState) => !prevState)
                        }
                    >
                        abstract
                    </p>
                </div>
                <div className="px-2 py-1 rounded-full border border-black dark:border-white">
                    <p className="text-sm">
                        <a href={props.code} target="_blank">
                            code
                        </a>
                    </p>
                </div>
                <div className="px-2 py-1 rounded-full border border-black dark:border-white">
                    <p className="text-sm">
                        <a href={props.link} target="_blank">
                            link
                        </a>
                    </p>
                </div>
                <div className="px-2 py-1 rounded-full border border-black dark:border-white">
                    <p className="text-sm">
                        <a href={props.pdf} target="_blank">
                            pdf
                        </a>
                    </p>
                </div>

                {/* <div>Abstract</div>
    <div>Abstract</div>
    <div>Abstract</div>
    <div>Abstract</div>
    <div>Abstract</div> */}
            </div>
            {showAbstract && (
                <p className="border mt-2 rounded-sm p-1">{props.abstract}</p>
            )}
        </div>
    );
}

export default PaperTags;

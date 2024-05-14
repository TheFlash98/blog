import React from "react";

function TeachingItem(props) {
    return (
        <div className="mb-2">
            <h1 className="text-2xl font-semibold tracking-tighter">
                {props.heading}
            </h1>
            <h2 className="font-medium">{props.subHeading}</h2>
            <ul className="mt-2 ml-5 list-disc">
                {props.description.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
        </div>
    );
}

export default TeachingItem;

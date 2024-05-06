import React from "react";
import "./youtube.css";

function Youtube(props) {
    return (
        <div class="videowrapper">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.id}`}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default Youtube;

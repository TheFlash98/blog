import React from "react";
import { Timeline } from "antd";
import TimelineElement from "./timelineelement";

const myTimelineEvents = [
    {
        heading: "Masters in Computer Science",
        subheading: "NYU Courant, August '24",
        desc: "Incoming master's students for the Fall '24 batch of NYU Courant's Masters in Computer Science. \
        Actively seeking internship positions in software development roles.",
    },
    {
        heading: "Full Stack Developer",
        subheading: "Playmo, October '23",
        desc: "Implemented the companies primary offering, building the entire tech stack from inception. \
        Collaborated cross-functionally with design and product teams in a fast paced environment.",
    },
    {
        heading: "Backend Developer",
        subheading: "Augnito, September '21",
        desc: "Part of a 3 member backend team responsible for the entire cloud and backend stack of the company.",
    },
    {
        heading: "Graduation",
        subheading: "IIT Bombay, August '21",
        desc: "Graduated from IIT Bombay with a BTech + MTech in Metallurgical Engineering and Materials Science and a\
        minor in Computer Science and Engineering.",
    },
    {
        heading: "Masters Thesis",
        subheading: "Prof. Anirban Patra, August '20",
        desc: (
            <p>
                Worked on predicting the mechanical deformation of dual phase
                microstructures using different deep learning techniques. Find
                complete analysis and results in the{" "}
                <a
                    href="https://doi.org/10.1016/j.mtcomm.2021.102914"
                    target="_blank"
                >
                    paper
                </a>
                .
            </p>
        ),
    },
    {
        heading: "Data Analyst Intern",
        subheading: "Yahoo! Japan, May '19",
        desc: (
            <p>
                Went to Tokyo for 3 months as an intern in the Media Data User
                Analytics Team (MeDUsA) at{" "}
                <a href="https://www.yahoo.co.jp/" target="_blank">
                    Yahoo! Japan
                </a>
                .
            </p>
        ),
    },
    {
        heading: "Google Summer of Code",
        subheading: "Terasology, May '18",
        desc: (
            <p>
                Selected as one of the{" "}
                <a href="https://summerofcode.withgoogle.com/" target="_blank">
                    GSoC
                </a>{" "}
                students for{" "}
                <a href="https://terasology.org/" target="_blank">
                    Terasology
                </a>
            </p>
        ),
    },
    {
        heading: "Started Undergrad",
        subheading: "IIT Bombay, July '16",
        desc: "",
    },
];

function MyTimeline() {
    return (
        <Timeline
            items={myTimelineEvents.map((timelineEvent) => {
                return {
                    children: (
                        <TimelineElement
                            heading={timelineEvent.heading}
                            subheading={timelineEvent.subheading}
                            desc={timelineEvent.desc}
                        />
                    ),
                };
            })}
        />
    );
}

export default MyTimeline;

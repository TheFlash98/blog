import React from "react";
import { Timeline } from "antd";
import TimelineElement from "./timelineelement";

const myTimelineEvents = [
    {
        heading: "Master's in Computer Science",
        subheading: "NYU Courant, August '24",
        desc: "Incoming master's students for the Fall '24 batch of NYU Courant Master's in Computer Science. \
        Actively seeking internship positions in software development roles.",
    },
    {
        heading: "Full Stack Developer",
        subheading: "Playmo, October '23",
        desc: "Implemented the companies primary offering, building the entire tech stack from inception. Developed a responsive PWA \
            using React (NextJS) and Python (Django) with PostgreSQL database. Collaborated cross-functionally with design \
            and product teams to ensure seamless app development",
    },
    {
        heading: "Backend Developer",
        subheading: "Augnito, September '21",
        desc: "Part of a 3 member backend team responsible for the entire cloud and backend stack of the company.",
    },
    {
        heading: "Graduation from IIT Bombay",
        subheading: "August '21",
        desc: "Graduated from IIT Bombay!",
    },
    {
        heading: "Master's Thesis",
        subheading: "Prof. Anirban Patra, August '20",
        desc: "Did some cool research",
    },
    {
        heading: "Data Analyst Intern @ Yahoo! Japan",
        subheading: "Tokyo, May '19",
        desc: "Went to tokyo for 3 months!",
    },
    {
        heading: "GSoC Intern @ Terasology",
        subheading: "Remote, May '18",
        desc: "GSoC student for 10 weeks!",
    },
    {
        heading: "Started Undergrad @ IIT Bombay",
        subheading: "July '16",
        desc: "Dream come true!",
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

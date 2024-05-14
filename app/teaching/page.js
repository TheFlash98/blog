import React from "react";
import TeachingItem from "./components/teachinitem";

export const metadata = {
    title: "Teaching",
    description: "My experince in teaching in various capacities",
};

const teachingItems = [
    {
        heading: "MM220: Computational Lab",
        subHeading: "Teaching Assistant, IIT Bombay",
        description: [
            <span>
                Assisted{" "}
                <a
                    className="underline"
                    href="https://www.iitb.ac.in/mems/en/prof-anirban-patra"
                    target="_blank"
                >
                    Prof. Anirban Patra
                </a>{" "}
                in conducting the undergraduate course MM220 for two semesters,
                Fall 2020 and Spring 2021.
            </span>,
            <span>
                Graded examinations, conducted tutorials, and assisted with live
                lectures for the course.
            </span>,
        ],
    },
    {
        heading: "Community Teaching",
        subHeading: "Volunteer",
        description: [
            <span>
                Taught high school mathematics and physics to underpriviliedged
                kids for the Community Teaching NGO. Reading more about it{" "}
                <a
                    href="/blog/community-teaching-initiative"
                    target="_blank"
                    className="underline"
                >
                    here
                </a>
                .
            </span>,
        ],
    },
];

function Teaching() {
    return (
        <section className="min-h-[65vh]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">
                Teaching
            </h1>
            <p className="mb-4">
                My experince in teaching in various capacities.
            </p>
            {teachingItems.map((value, index) => {
                return (
                    <TeachingItem
                        heading={value.heading}
                        subHeading={value.subHeading}
                        description={value.description}
                        key={index}
                    />
                );
            })}
        </section>
    );
}

export default Teaching;

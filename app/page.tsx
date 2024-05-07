import Image from "next/image";
import MyTimeline from "app/components/mytimeline";

export default function Page() {
    return (
        <section className="flex flex-col gap-4">
            <div className="flex">
                <h1 className="text-2xl font-semibold tracking-tighter">
                    Hi, I'm Sarthak!
                </h1>
                {/* <Image className='rounded-full ml-auto' src={meImage} alt='me in ladakh' height={50} width={50}/>  */}
            </div>
            <Image
                className="rounded-full mx-auto p-1 border border-gray-400 dark:border-gray-400"
                src="/me.png"
                alt="me in ladakh"
                height={200}
                width={200}
            />
            <p>
                I'm your friendly neighbourhood backend developer who has
                recently experimented with frontend frameworks and created this
                personal homepage. I am an incoming Masters in Computer Science
                student at{" "}
                <a
                    href="https://gsas.nyu.edu/"
                    target="_blank"
                    className="underline"
                >
                    New York University
                </a>{" "}
                for Fall '24.
            </p>
            <p>
                I completed my undergraduation from{" "}
                <a
                    href="https://www.iitb.ac.in/"
                    target="_blank"
                    className="underline"
                >
                    IIT Bombay
                </a>{" "}
                in 2021. My undergraduate thesis was focused on using Deep
                Learning to predict mechanical deformation, I was part of{" "}
                <a
                    href="https://homepages.iitb.ac.in/~anirbanpatra/"
                    target="_blank"
                    className="underline"
                >
                    Computational Mechanics and Materials Research Group
                </a>{" "}
                guided by{" "}
                <a
                    href="https://www.iitb.ac.in/mems/en/prof-anirban-patra"
                    target="_blank"
                    className="underline"
                >
                    Prof. Anirban Patra
                </a>
                {"."}
            </p>
            <p>
                I've been a programmer for almost 8 years now and have been
                doing it professionally for 3 years for startups. I enjoy
                working on different technologies and writing software! I worked
                at{" "}
                <a
                    href="https://augnito.ai/"
                    target="_blank"
                    className="underline"
                >
                    Augnito
                </a>{" "}
                as a backend developer for two years after which I worked for{" "}
                <a
                    href="https://www.withplaymo.co/"
                    target="_blank"
                    className="underline"
                >
                    Playmo
                </a>{" "}
                as full stack developer.
            </p>
            <p>
                In my free time I enjoy teaching, reading (mostly non-fiction),
                watching anime and playing badminton. During lockdown, I also
                played video games - mostly FPS like COD and CS.
            </p>
            <p className="font-semibold">
                Here's a brief look at my journey so far
            </p>
            <div className="my-4">
                <MyTimeline />
            </div>
        </section>
    );
}

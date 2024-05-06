import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import meImage from "../pubilc/me.png";

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
                className="rounded-full mx-auto p-1 border border-gray-400"
                src={meImage}
                alt="me in ladakh"
                height={200}
                width={200}
            />
            <p>
                I'm your friendly neighbourhood backend developer who has
                recently experimented with frontend frameworks and created this
                personal homepage. I am an incoming Master's in Computer Science
                student at{" "}
                <a
                    href="https://gsas.nyu.edu/"
                    target="_blank"
                    className="underline"
                >
                    New York University
                </a>{" "}
                for Fall '24. I completed my undergraduation from{" "}
                <a
                    href="https://www.iitb.ac.in/"
                    target="_blank"
                    className="underline"
                ></a>
                IIT Bombay in 2021.
            </p>
            <p>
                I've been a programmer for almost 8 years now and have been
                doing it professionally for 3 years for startups and small size
                companies. I enjoy working
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    );
}

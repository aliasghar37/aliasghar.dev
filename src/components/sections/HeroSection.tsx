"use client";
import React from "react";
import Image from "next/image";
import Socials from "../Socials";

const getResumeUrl = async () => {
    const publicUrl = `${process.env.NEXT_PUBLIC_RESUME}`;
    return publicUrl;
};

const HeroSection: React.FC = () => {
    const handleResumeDownload = async () => {
        try {
            const url = await getResumeUrl();
            window.open(url, "_blank");
        } catch (error) {
            console.error("Could not download resume`", error);
        }
    };

    return (
        <section
            aria-labelledby="hero-title"
            className="border-b dark:bg-gray-950"
        >
            <div className="container">
                <div className="lg:border-x pt-44">
                    <div className="lg:max-w-screen-lg lg:mx-auto dotted-side-borders pb-20">
                        <div className="lg:max-w-screen-md lg:mx-auto grid text-center gap-10 isolate">
                            <div className="grid">
                                <span className="animated-border">
                                    Available for work 🎉
                                </span>
                                <figure className="relative w-32 h-32 mx-auto grid !mb-0 animate animate-out-up">
                                    <Image
                                        src="/images/avatar.png"
                                        alt="Ali's profile"
                                        width={128}
                                        height={128}
                                        className="rounded-full"
                                        priority
                                    />
                                    <span className="rounded-full block w-5 h-5 bg-emerald-400 absolute bottom-2 right-2 border-2 border-white dark:border-gray-950"></span>
                                </figure>
                            </div>
                            <div className="grid gap-7 animate animate-out-up">
                                <p className="!my-0 text-xl">
                                    Hi, I&apos;m Ali Asghar 👋
                                </p>
                                <h1
                                    id="hero-title"
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black !m-0"
                                >
                                    Clean, thoughtful, user-focused web
                                    development
                                </h1>
                                <p className="!mb-0 !mt-0 max-w-lg mx-auto text-xl font-medium">
                                    Based in Pakistan, I am a{" "}
                                    <b>Full-Stack Software Engineer</b>{" "}
                                    passionate about creating dynamic,
                                    intuitive, user-centeric and AI-powered web
                                    applications.
                                </p>
                                <div className="flex flex-col sm:flex-row mx-auto gap-4">
                                    {/* <a
                                        href=""
                                        className="btn  w-56"
                                        role="button"
                                    >
                                        Chat with My AI
                                    </a> */}
                                    <a
                                        className="btn  w-52  "
                                        role="button"
                                        onClick={handleResumeDownload}
                                        rel="noopener noreferrer"
                                    >
                                        Download Resume
                                    </a>
                                </div>

                                <Socials center={true} />
                                {/* <div className="mt-0"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

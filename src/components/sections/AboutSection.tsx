import React from "react";
import SectionTitle from "../SectionTitle";

const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="scroll-mt-20 border-b dark:bg-gray-950 dark:text-gray-300"
        >
            <div className="container">
                <div className="lg:border-x">
                    <SectionTitle id="about-title" title="About Me" />
                    <div className="lg:max-w-screen-md lg:mx-auto py-14 lg:py-20">
                        <p className="!m-0 text-3xl lg:text-4xl text-gray-950 dark:text-gray-200 text-center ">
                            Specialized in the MERN Stack and Next.js
                            <span className="animate animate-opacity text-gray-600 dark:text-gray-400">
                                <br />
                                with a growing specialization in AI-powered
                                applications using LangChain, LangGraph and RAG.{" "}
                                Passionate about bridging the gap between
                                backend architecture and intuitive user
                                experiences.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

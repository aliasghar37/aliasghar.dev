import { FC } from "react";
import SectionTitle from "../SectionTitle";
import skillsData from "@/data/skills.json";
import Image from "next/image";

const SkillsSection: FC = () => {
    return (
        <section
            id="skills"
            aria-labelledby="skills-title"
            className="scroll-mt-20 border-b dark:bg-gray-950 dark:text-gray-300"
        >
            <div className="container">
                <div className="lg:border-x">
                    <SectionTitle id="skills-title" title="Skills & Tools" />
                    <div className="lg:max-w-3xl lg:mx-auto py-14 lg:py-20">
                        <ul className="flex flex-row flex-wrap justify-center  ">
                            {skillsData.map((skill, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="flex self-center items-center justify-center text-lg my-4 mr-6 w-fit px-4! gap-2 opacity-90 border-2 shadow-lg shadow-white/5 rounded-4xl h-12  dark:text-gray-200 overflow-hidden animate animate-in-and-out "
                                    >
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={20}
                                            height={20}
                                        />
                                        <div>{skill.name}</div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

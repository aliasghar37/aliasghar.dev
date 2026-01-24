import React from "react";
import SectionTitle from "../SectionTitle";
import educationData from "../../data/education.json";

interface Education {
    year: string;
    name: string;
    institute: string;
}

const EducationSection: React.FC = () => {
    const education: Education[] = educationData;

    return (
        <section
            id="education"
            aria-labelledby="education-title"
            className="scroll-mt-20 border-b dark:bg-gray-950 dark:text-gray-300"
        >
            <div className="container">
                <div className="lg:border-x">
                    <SectionTitle id="education-title" title="Education" />
                    <div className="not-prose flex justify-start lg:ml-32 md:ml-20 py-20 ">
                        {education.map((ed, index) => {
                            return (
                                <dl
                                    key={index}
                                    className="border-l pl-8 sm:pl-16 md:pl-24 pb-16 last:pb-0 relative"
                                >
                                    <span className="bg-gray-200 dark:bg-gray-400 w-[7px] h-[7px] rounded-full block absolute left-0 top-0 -ml-1"></span>
                                    <span className="uppercase text-gray-600 dark:text-gray-500 font-medium tracking-wide mb-4 block leading-[1]">
                                        {ed.year}
                                    </span>
                                    <dt className="text-2xl md:text-3xl text-gray-950 dark:text-gray-200 font-medium">
                                        {ed.name}
                                    </dt>
                                    <dd className="text-gray-600 dark:text-gray-500 font-medium">
                                        {ed.institute}
                                    </dd>
                                </dl>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;

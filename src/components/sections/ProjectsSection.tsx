"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import projectsData from "@/data/projects.json";

interface ProjectData {
    name: string;
    value: string;
}

interface ProjectItem {
    title: string;
    description: string;
    image: string;
    website?: string;
    github?: string;
    meta: ProjectData[];
}

const ProjectsSection: React.FC = () => {
    const projects: ProjectItem[] = projectsData;
    const [visibleCount, setVisibleCount] = useState(3);

    const visibleProjects = projects.slice(0, visibleCount);
    const hasMoreProjects = visibleCount < projects.length;

    const handleLoadMore = () => {
        setVisibleCount(() => projects.length);
    };

    return (
        <section
            id="projects"
            className="scroll-mt-20 border-b dark:bg-gray-950"
        >
            <div className="container">
                <div className="lg:border-x">
                    <SectionTitle id="projects-title" title="Projects" />
                    <div className="grid gap-20 max-md:gap-0 lg:mx-auto lg:max-w-screen-lg py-14 lg:py-20">
                        {visibleProjects.map((item, index) => (
                            <article key={index}>
                                <Image
                                    className="animate-reveal w-full rounded-lg"
                                    src={item.image}
                                    alt={item.title}
                                    width={1200}
                                    height={675}
                                    quality={95}
                                    priority={index === 0}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                                />
                                <div className="grid md:grid-cols-2 gap-20 mt-11">
                                    <div>
                                        <h3 className="mt-0 text-3xl font-medium">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-md:-mt-16 not-prose items-start">
                                            {item.meta.map(
                                                (meta, metaIndex) => (
                                                    <dl
                                                        key={metaIndex}
                                                        className="grid gap-2  "
                                                    >
                                                        <dt className="text-base font-medium text-gray-600 dark:text-gray-500 capitalize">
                                                            {meta.name}
                                                        </dt>
                                                        <dd className="text-xl font-medium text-gray-950 dark:text-gray-200 align-top ">
                                                            {meta.value}
                                                        </dd>
                                                    </dl>
                                                ),
                                            )}
                                            <div className="grid gap-2 ">
                                                {item.website || item.github ? (
                                                    <h3 className="text-base font-medium text-gray-600 dark:text-gray-500 capitalize  ">
                                                        Links
                                                    </h3>
                                                ) : (
                                                    ""
                                                )}

                                                <div className="flex flex-row gap-4 align-top ">
                                                    {item.website ? (
                                                        <a
                                                            href={item.website}
                                                            aria-placeholder="Live Demo"
                                                            className="btn mb-10 flex items-center gap-2 justify-self-start justify-center sm:w-auto "
                                                            role="button"
                                                            title="Live Demo"
                                                            target="_blank"
                                                        >
                                                            <span className="w-5">
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    fill="currentColor"
                                                                    className="w-full h-full"
                                                                >
                                                                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                                                                </svg>
                                                            </span>
                                                        </a>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {item.github ? (
                                                        <a
                                                            href={item.github}
                                                            className="btn mb-10 flex items-center gap-2 justify-self-start  justify-center sm:w-auto"
                                                            role="button"
                                                            title="GitHub Repo"
                                                            target="_blank"
                                                        >
                                                            <span className="w-5">
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    fill="currentColor"
                                                                    className="w-full h-full"
                                                                >
                                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                                </svg>
                                                            </span>
                                                        </a>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    {hasMoreProjects ? (
                        <div className="flex justify-center pb-12 lg:pb-20 ">
                            <button
                                className="border-2 border-gray-950 text-gray-950 rounded-full py-4 px-8 hover:bg-gray-950 hover:text-white transition-colors duration-300 font-bold cursor-pointer dark:border-gray-200 dark:hover:bg-gray-200 dark:hover:text-black dark:text-gray-200  "
                                onClick={() => handleLoadMore()}
                            >
                                Load More Projects
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

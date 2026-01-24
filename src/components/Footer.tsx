"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";
import menuData from "@/data/menu.json";
import ContactForm from "./ContactForm";

interface NavItem {
    url: string;
    label: string;
}

const getResumeUrl = async () => {
    const publicUrl = `${process.env.NEXT_PUBLIC_RESUME}`;
    return publicUrl;
};

const Footer: React.FC = () => {
    const menuItems: NavItem[] = menuData;

    const handleResumeDownload = async () => {
        try {
            const url = await getResumeUrl();
            window.open(url, "_blank");
        } catch (error) {
            console.error("Could not download resume`", error);
        }
    };

    return (
        <footer className="dark:bg-gray-950" id="contact">
            <div className="container">
                <div className="lg:border-x py-32">
                    <div className="lg:max-w-screen-lg lg:mx-auto dotted-side-borders">
                        <div className="grid lg:grid-cols-2 px-2 gap-12 ">
                            {/* Get in touch */}
                            <div className="lg:max-w-screen-md lg:mx-auto grid gap-8 max-lg:-mt-20 ">
                                <div className="grid gap-10 text-center animate animate-out-up">
                                    <h2 className="!mb-0">Get In Touch</h2>
                                    <p className="-mb-10 max-w-lg mx-auto px-4 ">
                                        Ready to bring your project to life?
                                        Let&apos;s discuss how we can work
                                        together to create something amazing.
                                    </p>
                                    <p className="!mb-0 max-w-lg mx-auto">
                                        Email: iamaliasghar37@gmail.com
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        {/* <a
                                            href="mailto:iamaliasghar37@gmail.com"
                                            className="btn h-fit "
                                        >
                                            Get In Touch
                                        </a> */}
                                        <a
                                            href="/cv.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline h-fit"
                                            onClick={handleResumeDownload}
                                        >
                                            Download Resume
                                        </a>
                                    </div>
                                    <div className="flex flex-row justify-center">
                                        <Socials />
                                    </div>
                                </div>
                            </div>
                            {/* Contact form */}
                            <ContactForm />
                        </div>
                        <div className="grid gap-10  animate animate-out-up pt-6">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
                                <Link
                                    href="/"
                                    className="w-12 grid transition-opacity hover:opacity-75 duration-300 text-gray-950 dark:text-gray-100"
                                >
                                    <Logo />
                                </Link>
                                <nav aria-label="Footer navigation">
                                    <ul className="flex flex-wrap justify-center gap-4 list-none m-0 py-0">
                                        {menuItems.map((item) => (
                                            <li key={item.url}>
                                                <a
                                                    href={item.url}
                                                    className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-950 dark:hover:text-gray-100 no-underline"
                                                >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="border-t pt-0">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                <p className="text-gray-600 dark:text-gray-400 -mb-24 text-center ">
                                    &copy; 2026 All rights reserved | Made with
                                    ❤️ by <b>Ali Asghar</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

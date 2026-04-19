"use client";

import { useState, FC } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import menuData from "@/data/menu.json";
import ThemeToggle from "./ToggleTheme";

interface NavItem {
    url: string;
    label: string;
}

const Header: FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuItems: NavItem[] = menuData;

    return (
        <>
            <div className="fixed top-0 left-0 z-40 shadow bg-gray-950 dark:bg-gray-200 h-1 w-full animate-scroll-progress"></div>
            <header className="border-b py-4 not-prose fixed inset-x-0 bg-white dark:bg-gray-950 z-30">
                <div className="container flex justify-between items-center gap-20">
                    <div className="flex items-center gap-32 grow">
                        <Link
                            href="/"
                            className="w-10 grid transition-opacity hover:opacity-75 duration-300 text-gray-950 dark:text-gray-100"
                            aria-label="Home"
                        >
                            <Logo />
                        </Link>
                        <nav
                            aria-label="Main navigation"
                            className="hidden lg:flex"
                        >
                            <ul className="flex gap-12 items-center list-none m-0 py-0">
                                {menuItems.map((item) => (
                                    <li key={item.url}>
                                        <a href={item.url} className="navlink">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-row gap-4  ">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="btn btn-sm min-w-fit hidden lg:flex"
                            role="button"
                        >
                            {/* Let&apos;s Talk */}
                            Get In Touch
                        </a>
                        <button
                            className="cursor-pointer rounded-full bg-gray-100 dark:bg-gray-200 text-gray-950 p-4 flex transition-colors duration-300 hover:bg-gray-200 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-controls="modal"
                            aria-haspopup="dialog"
                        >
                            <span className="sr-only">
                                Open Mobile Navigation
                            </span>
                            <span className="w-6">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                menuItems={menuItems}
            />
        </>
    );
};

export default Header;

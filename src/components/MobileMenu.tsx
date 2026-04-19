"use client";

import { FC } from "react";
import Link from "next/link";
import Logo from "./Logo";

interface NavItem {
    url: string;
    label: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: NavItem[];
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose, menuItems }) => {
    if (!isOpen) return null;

    return (
        <dialog
            id="modal"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            data-modal
            className={`fixed z-999 ${isOpen ? "open" : ""}`}
            open={isOpen}
        >
            <div className="modal-content bg-white dark:bg-gray-950 justify-between gap-20 p-12 sm:p-20 flex flex-col h-full overflow-y-auto">
                <div className="flex items-center justify-between gap-4 ">
                    <Link
                        href="/"
                        className="w-14 sm:w-20 flex shrink-0 transition-opacity hover:opacity-75 duration-300 text-white dark:text-gray-100"
                        aria-label="Home"
                    >
                        <Logo />
                    </Link>
                    <button
                        onClick={onClose}
                        className="text-black hover:text-black/75  dark:hover:text-white/75 dark:text-gray-100 transition-colors duration-300 cursor-pointer z-10 flex modal-close"
                    >
                        <span className="sr-only">Close modal</span>
                        <span className="w-12">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-full h-full"
                            >
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                        </span>
                    </button>
                </div>
                <nav
                    className=" bg-white text-black dark:bg-gray-950 dark:text-white"
                    data-modal-menu
                >
                    <ul className="not-prose grid gap-10">
                        {menuItems.map((item) => (
                            <li key={item.url}>
                                <a
                                    href={item.url}
                                    onClick={onClose}
                                    className="text-4xl font-bold transition-colors duration-300 text-black hover:text-black/75 dark:hover:text-white/75 dark:text-white no-underline"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className=" text-black/70 dark:text-white/50 mobile-copyright">
                    <p className="m-0!">
                        &copy; 2026 All rights reserved | Made with ❤️ by Ali
                        Asghar
                    </p>
                </div>
            </div>
        </dialog>
    );
};

export default MobileMenu;

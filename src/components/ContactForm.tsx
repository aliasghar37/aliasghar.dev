"use client";

import { useState } from "react";
import { useAlert } from "./AlertContext";

const sanitizeInput = (input: string): string => {
    return input
        .replace(/[<>]/g, "")
        .replace(/javascript:/gi, "")
        .replace(/on\w+=/gi, "")
        .replace(/data:/gi, "")
        .trim();
};

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { showAlert } = useAlert();

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const sanitizedName = sanitizeInput(name);
            const sanitizedEmail = sanitizeInput(email);
            const sanitizedSubject = sanitizeInput(subject);
            const sanitizedComment = sanitizeInput(comment);

            if (
                !sanitizedName ||
                !sanitizedEmail ||
                !sanitizedSubject ||
                !sanitizedComment
            ) {
                showAlert("All fields are required!", "error");
                return;
            }

            if (!isValidEmail(sanitizedEmail)) {
                showAlert("Please enter a valid email address!", "error");
                return;
            }

            if (sanitizedName.length > 100) {
                showAlert("Name is too long (Max: 100 characters)", "error");
                return;
            }

            if (sanitizedSubject.length > 150) {
                showAlert("Subject is too long (Max: 150 characters)", "error");
                return;
            }

            if (sanitizedComment.length > 1500) {
                showAlert(
                    "Message is too long (Max: 1500 characters)",
                    "error",
                );
                return;
            }

            const reqBody = JSON.stringify({
                name,
                email,
                subject,
                comment,
            });

            const response = await fetch(`/api/send-email`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: reqBody,
            });
            if (response.ok) {
                setName("");
                setEmail("");
                setSubject("");
                setComment("");
                showAlert("Message has been sent", "success");
            } else {
                showAlert("Failed to send the message", "error");
            }
        } catch (error) {
            console.error("Failed to send the message", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-8 max-lg:mt-8 max-lg:mb-0 animate animate-out-up ">
            <form action="#" className="space-y-6">
                <div>
                    <div className="grid md:grid-cols-2 gap-2 max-md:gap-6  ">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-950 dark:text-gray-300"
                            >
                                Your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="shadow-lg shadow-black/10  dark:shadow-black/20  bg-gray-50 border border-black/20text-gray-950 text-sm rounded-full block w-full p-2.5 dark:bg-gray-950 dark:border-gray-900 dark:placeholder-gray-400 dark:text-white outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-700 "
                                placeholder="Enter your name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2  text-sm font-medium text-gray-950 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-lg shadow-black/10  dark:shadow-black/20  bg-gray-50 border border-black/20text-gray-950 text-sm rounded-full block w-full p-2.5 dark:bg-gray-950 dark:border-gray-900 dark:placeholder-gray-400 dark:text-white outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-700 "
                                placeholder="name@email.com"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-gray-950 dark:text-gray-300"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="shadow-lg shadow-black/10  dark:shadow-black/20  bg-gray-50 border border-black/20text-gray-950 text-sm rounded-full block w-full p-2.5 dark:bg-gray-950 dark:border-gray-900 dark:placeholder-gray-400 dark:text-white outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-700 "
                        placeholder="Let us know how we can help you"
                        value={subject}
                        required
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows={3}
                        className="shadow-lg shadow-black/10 dark:shadow-black/20  bg-gray-50 border border-black/20text-gray-950 text-sm rounded-xl block w-full p-2.5 dark:bg-gray-950 dark:border-gray-900 dark:placeholder-gray-400 dark:text-white outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-700 resize-none "
                        value={comment}
                        placeholder="Leave a comment..."
                        required
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-sm border-2 rounded-full text-gren-500  min-w-fit place-content-center lg:flex "
                    onClick={handleSubmitForm}
                >
                    {isSubmitting ? "Sending..." : "Send message"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

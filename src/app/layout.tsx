import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import { Providers } from "./providers";
import { AlertProvider } from "@/components/AlertContext";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
    title: "Ali Asghar | Software & AI Engineer",
    description:
        "Ali Asghar is a software & AI engineer specialized in MERN Stack, Next.js, LangChain, LangGraph & RAG. Building clean, user-focused, dynamic and AI-powered web applications.",
    alternates: { canonical: "https://www.aliasghar.dev" },
    icons: {
        icon: "/images/favicon.png",
    },
    keywords: [
        "Ali Asghar",
        "Software Engineer",
        "AI Engineer",
        "MERN Stack Developer",
        "Next.js Developer",
        "LangChain",
        "LangGraph",
        "Portfolio",
        "Freelance",
        "Pakistan",
    ],
    openGraph: {
        title: "Ali Asghar | Software & AI Engineer",
        description:
            "Building clean, user-focused, and AI-powered web applications.",
        url: "https://www.aliasghar.dev",
        siteName: "Ali Asghar Portfolio",
        type: "website",
    },
};

const themeScript = `
(function() {
    try {
        var theme = localStorage.getItem('theme') || 'dark';
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        document.documentElement.style.colorScheme = theme;
    } catch (e) {}
})();
`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="scroll-smooth"
            suppressHydrationWarning
            style={{ colorScheme: "dark light" }}
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{ __html: themeScript }}
                ></script>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="prose prose-gray max-w-none">
                <Providers>
                    <AlertProvider>
                        <CustomCursor />
                        {children}
                    </AlertProvider>
                </Providers>
            </body>
        </html>
    );
}

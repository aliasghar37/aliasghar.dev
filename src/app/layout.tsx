import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { AlertProvider } from "@/components/AlertContext";

export const metadata: Metadata = {
    title: "Ali Asghar | Full-Stack Software Developer Portfolio",
    description:
        "Professional portfolio of Ali Asghar, a Full-Stack Software Developer specializing in MERN Stack and Next.js. Building clean, user-focused, and dynamic web applications.",
    icons: {    
        icon: "/images/favicon.png",
    },
    keywords: ["Ali Asghar", "MERN Stack Developer", "Software Engineer", "Web Developer", "Portfolio", "Freelance", "Pakistan" ],
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
                    <AlertProvider>{children}</AlertProvider>
                </Providers>
            </body>
        </html>
    );
}

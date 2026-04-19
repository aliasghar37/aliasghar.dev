import { FC } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import certificatesData from "../../data/certificates.json";

interface Certificate {
    title: string;
    institute: string;
    image: string;
    link: string;
}

const CertificatesSection: FC = () => {
    const certificates: Certificate[] = certificatesData;

    return (
        <section
            id="certificates"
            aria-labelledby="certificates-title"
            className="scroll-mt-20 border-b dark:bg-gray-950 dark:text-gray-300"
        >
            <div className="container">
                <div className="lg:border-x">
                    <SectionTitle
                        id="certificates-title"
                        title="Certificates"
                    />
                    <div className="lg:max-w-5xl lg:mx-auto py-14 lg:py-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {certificates.map((cert, index) => (
                                <a
                                    key={index}
                                    href={cert.link}
                                    target="_blank"
                                    className="group block rounded-lg border-2 border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-2xl no-underline "
                                >
                                    <div className="overflow-hidden -my-8 ">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            width={800}
                                            height={600}
                                            className="w-full group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="px-5">
                                        <h3 className="text-lg font-medium text-gray-950 dark:text-gray-200 mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-500 font-medium">
                                            {cert.institute}
                                        </p>
                                        <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-gray-600 dark:text-gray-500 group-hover:text-gray-950 dark:group-hover:text-gray-300 transition-colors">
                                            Verify Credential
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;

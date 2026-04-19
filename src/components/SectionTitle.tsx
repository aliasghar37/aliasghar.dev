import { FC } from "react";

interface SectionTitleProps {
    id: string;
    title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ id, title }) => {
    return (
        <h2
            id={id}
            className="uppercase text-sm text-gray-600 dark:text-gray-300 font-medium tracking-wide border-b border-dashed lg:px-6 pt-9 pb-4 m-0!"
        >
            {title}
        </h2>
    );
};

export default SectionTitle;

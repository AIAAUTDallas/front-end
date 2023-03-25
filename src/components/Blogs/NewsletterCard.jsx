import React from "react";
import { useRouter } from "next/router";

const NewsletterCard = ({id, title, subtitle}) => {
    const router = useRouter();

    // news letter card
    return (
        <div className="bg-gray-800 p-24 hover:cursor-pointer hover:scale-110" onClick={() => {router.push(`/newsletter/${id}`)}}>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl text-white font-bold text-center">
                        {title}
                    </h1>
                    <h2 className="text-2xl text-white font-bold text-center">
                        {subtitle}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default NewsletterCard;

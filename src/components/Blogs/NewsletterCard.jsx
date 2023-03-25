import React from "react";
import { useRouter } from "next/router";

const NewsletterCard = ({id, title, subtitle, date, backgroundImage}) => {
    const router = useRouter();

    // news letter card
    return (
        <div 
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "darken",
        }} 
        className="bg-gray-800 bg-opacity-50 p-24 hover:cursor-pointer hover:scale-110" onClick={() => {router.push(`/newsletter/${id}`)}}>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl text-white font-bold text-center">
                        {title}
                    </h1>
                    <h2 className="text-lg text-white font-bold text-center">
                        {subtitle}
                    </h2>
                    <h4 className="text-lg text-white font-bold text-center">
                        {date}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default NewsletterCard;

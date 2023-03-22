import React from "react";

const BlogCard = ({ link, name, title, img, date, description }) => {
    return (
        <div>
            <img src={img} width="50%" />
            <span style={{ padding: "50px", display: "inline-table" }}>
                <h1>{name}</h1>
                <h2>{description}</h2>
            </span>
        </div>
    );
};

export default BlogCard;

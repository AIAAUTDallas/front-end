import React, { useState } from 'react'
import BlogCard from "./BlogCard.js";
// import { aiaa_org } from "../Organizations/OrgData";
import Link from 'next/link';

const Blog = () => {
    // const [list, setList] = useState(aiaa_org);
    return (
        <div>
            <h1>Blogs</h1>
            <div style={{ display: "flex" }}>
                {/* {list.map((member, index) => (
                    <Link key={member.name + index} href='/Organization/{member.name}'>
                    <BlogCard
                        style={{ display: "flex" }}
                        name={member.name}
                        description={member.description}
                        img={member.img}
                    />
                    </Link>
                ))} */}
            </div>
        </div>
    )
}

export default Blog
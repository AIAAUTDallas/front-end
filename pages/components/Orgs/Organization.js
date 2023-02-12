import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import OrgCard from "./OrgCard.js";
// import { aiaa_org } from "./OrgData.js";

const Organization = () => {
    // const [list, setList] = useState(aiaa_org);
    return (
        <div>
            <h1>Organization</h1>
            <div style={{ display: "flex" }}>
                {/* {list.map((member, index) => (
                    <Nav.Link key={member.name + index} href={`Organization/${member.link} `} >
                        <OrgCard
                            style={{ display: "flex" }}
                            name={member.name}
                            description={member.description}
                            img={member.img}
                        />
                    </Nav.Link>
                ))} */}
            </div>
        </div >
    )
}

export default Organization
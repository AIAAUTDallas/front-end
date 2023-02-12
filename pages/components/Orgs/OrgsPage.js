import React, { useState } from 'react';
import AIAA from './AIAA.js';
import EEIE from './EEIE.js';
import OrgCard from "./OrgCard.js";
import aiaa_org from "./OrgData.js";


const OrgPage = () => {
    const [list, setList] = useState(aiaa_org);
    return (
        <div>
            <h1>Organization</h1>
            {/* {list.map((member, index) => (
                if ({member.link} === "AIAA") {
                <AIAA />
            } else {
                window.location.reload();
            }))} */}
        </div>
    )
}
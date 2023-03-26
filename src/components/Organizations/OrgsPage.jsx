import React, { useState } from 'react';
import AIAA from './AIAA.jsx';
import EEIE from './EEIE.jsx';
import OrgCard from "./OrgCard.js";
// import { aiaa_org } from "./OrgData.js";


export default function OrgPage() {
    // const [list, setList] = useState(aiaa_org);
    return (
        <div>
            <h1>Organization</h1>
            <div style={{display: 'flex', paddingTop: '2rem', justifyContent: 'space-around'}}>
                    <div>
                        <img src="/Orgs/AIAA.png"></img>
                        <h1 className="text-center">American Institute of Aeronautics & Astronautics (AIAA)</h1>
                    </div>
                    <div>
                        <img src="/Orgs/DBF.png"></img>
                        <h1>Design Build Fly (DBF)</h1>
                    </div>
                </div>
        </div>
    );
}
import React from 'react'

const Introduction = () => {
    return (
        <div style={{ padding: "20px" }}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'chivo', 'sans-serif'"}}>
                <h1>Who We Are</h1>
                <p style={{width: "80%", fontSize: "1.25rem"}}>American Institute of Aeronautics and Astronautics (AIAA) is the principal society of aerospace engineers and scientists. At the University of Texas at Dallas (UTD), we are a project-based student organization hosting technical and professional activities to prepare students for a career in the aerospace industry. From aircraft and drones to rockets and wind turbines, AIAA UTD provides aspiring aerospace engineers the opportunity to build engineering experience even on a campus without an aerospace major. We also offer student mentorships, guest lectures, company tours, and networking events. Students of all majors and years are welcome to join!</p>
            </div>
        </div>
    )
}

export default Introduction
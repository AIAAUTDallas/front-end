import React, { useState } from "react";
import MemberCard from "../Members/MemberCard";
import team_member from "../Members/TeamData";


function Team() {
    const [list, setList] = useState(team_member);
    return (
        <div style={{ background: "BLUE" }}>
            <button
                style={{
                    fontSize: "20px",
                    background: "none",
                    color: "#706666",
                    fontWeight: "bold",
                    border: "1px solid #e2e2e2 ",
                    width: "130px",

                }}

            >
                All
            </button>

            <button
                style={{
                    fontSize: "20px",
                    background: "none",
                    color: "#706666",
                    fontWeight: "bold",
                    border: "1px solid #e2e2e2 ",
                    width: "130px",

                }}

            >
                Officer
            </button>

            <button
                style={{
                    fontSize: "20px",
                    background: "none",
                    color: "#706666",
                    fontWeight: "bold",
                    border: "1px solid #e2e2e2 ",
                    width: "130px",

                }}

            >
                Operation
            </button>

            <button
                style={{
                    fontSize: "20px",
                    background: "none",
                    color: "#706666",
                    fontWeight: "bold",
                    border: "1px solid #e2e2e2 ",
                    width: "130px",

                }}

            >
                Marketing
            </button>

            <button
                style={{
                    fontSize: "20px",
                    background: "none",
                    color: "#706666",
                    fontWeight: "bold",
                    border: "1px solid #e2e2e2 ",
                    width: "130px",

                }}
            >
                Research
            </button>

            <button
                style={{
                    fontSize: "20px",
                    background: "none",
                    color: "#706666",
                    fontWeight: "bold",
                    border: "1px solid #e2e2e2 ",
                    width: "130px",

                }}

            >
                Technology
            </button>

            <button
                style={{
                    fontSize: "20px",
                    background: "none",
                    color: "#706666",
                    fontWeight: "bold",
                    border: "1px solid #e2e2e2 ",
                    width: "130px",

                }}

            >
                Business
            </button>

            <button
                style={{
                    fontSize: "20px",
                    background: "none",
                    color: "#706666",
                    fontWeight: "bold",
                    border: "1px solid #e2e2e2 ",
                    width: "130px",

                }}

            >
                Legal
            </button>
            <h1>Team Member</h1>
            <div>
                {list.map((member, index) => (
                    <>
                        <MemberCard
                            name={member.name}
                            location={member.location}
                            department={member.department}
                        />
                    </>
                ))}

            </div>
        </div>
    )
}

export default Team;

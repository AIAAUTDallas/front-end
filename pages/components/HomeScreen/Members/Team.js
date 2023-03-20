import React, { useState } from "react";
import MemberCard from "../Members/MemberCard";
import team_member from "../TeamData";
import style from "../../styles/Member.module.css";

function Team() {
  const [list, setList] = useState(team_member);

  return (
    <div className={style.team}>
      <div className={style.cards}>
        {list.map((member, index) => (
          <div key={index} style={{ display: "flex" }}>
            <MemberCard
              img={member.img}
              name={member.name}
              title={member.title}
              description={member.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

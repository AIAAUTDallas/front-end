import React, { useState } from "react";
// import MemberCard from "./MemberCard";
import dynamic from "next/dynamic";
import style from "../../styles/Member.module.css";
import officers from "../../data/OfficerData";

const MemberCard = dynamic(() => import("./MemberCard"), {
  ssr: false,
});
function Team() {
  const [officerList, setOfficerList] = useState(officers);

  return (
    <div className={style.team}>
      <h1 className="pt-4">Administrative</h1>
      <div className={style.cards}>
          <div className="flex flex-wrap content-center justify-center">

            {officerList.Administrative.data.map((member, index) => (
              <div key={index} style={{ display: "flex" }}>
                <MemberCard
                  img={member.img ? member.img : null}
                  name={member.name}
                  title={member.title}
                  // description={member.description}
                  />
              </div>
            ))}
          </div>
      </div>
    <h1>DARRT</h1>
      <div className={style.cards}>
          <div className="flex flex-wrap content-center justify-center">
              {officerList.DARRT.data.map((member, index) => (
                <div key={index} style={{ display: "flex" }}>
                  <MemberCard
                    img={member.img ? member.img : null}
                    name={member.name}
                    title={member.title}
                    // description={member.description}
                    />
                </div>
              ))}
          </div>
      /</div>
      <h1>Rocketry</h1>
      <div className={style.cards}>
          <div className="flex flex-wrap content-center justify-center">
              {officerList.Rocketry.data.map((member, index) => (
                <div key={index} style={{ display: "flex" }}>
                  <MemberCard
                    img={member.img ? member.img : null}
                    name={member.name}
                    title={member.title}
                    // description={member.description}
                    />
                </div>
              ))}
            </div>
          </div>
      <h1>RAD</h1>
      <div className={style.cards}>
          <div className="flex flex-wrap content-center justify-center">
              {officerList.RAD.data.map((member, index) => (
                <div key={index} style={{ display: "flex" }}>
                  <MemberCard
                    img={member.img ? member.img : null}
                    name={member.name}
                    title={member.title}
                    // description={member.description}
                    />
                  </div>
              ))}
            </div>
          </div>
        <h1>Media & Marketing</h1>
        <div className={style.cards}>
            <div className="flex flex-wrap content-center justify-center">
                {officerList["Media & Marketing"].data.map((member, index) => (
                  <div key={index} style={{ display: "flex"}}>
                    <MemberCard
                      img={member.img ? member.img : null}
                      name={member.name}
                      title={member.title}
                      // description={member.description}
                      />
                    </div>
                ))}
              </div>
            </div>
        <h1>Business</h1>
        <div className={style.cards}>
            <div className="flex flex-wrap content-center justify-center">
                {officerList["Business"].data.map((member, index) => (
                  <div key={index} style={{ display: "flex"}}>
                    <MemberCard
                      img={member.img ? member.img : null}
                      name={member.name}
                      title={member.title}
                      // description={member.description}
                      />
                    </div>
                ))}
              </div>
            </div>
    </div>
  );
}

export default Team;

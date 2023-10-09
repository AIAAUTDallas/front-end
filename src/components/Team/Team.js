import React, {useState} from 'react';
// import MemberCard from "./MemberCard";
import dynamic from 'next/dynamic';
import style from '../../styles/Member.module.css';
import officers from '../../data/OfficerData';

const MemberCard = dynamic(() => import('./MemberCard'), {
  ssr: false,
});
function Team() {
  const [officerList, setOfficerList] = useState(officers);

  return (
    <div className={style.team}>
      <h1 className="pt-4">Executive</h1>
      <div className={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-x-2 md:gap-x-8 w-full">
          {officerList.Executive.data.map((member, index) => (
            <div key={index} className="flex min-h-[16vw] md:min-h-[24vw]">
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
      <h1 className="p-4">DBF (Design Build Fly)</h1>
      <div className-={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList.DBF.data.map((member, index) => (
            <div key={index} className="flex min-h-[16vw] md:min-h-[24vw]">
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
      <h1 className="p-4">DEC (Drone Engineering Core)</h1>
      <div className={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList.DEC.data.map((member, index) => (
            <div key={index} className="flex min-h-[16vw] md:min-h-[24vw]">
              <MemberCard
                img={member.img ? member.img : null}
                name={member.name}
                title={member.title}
                // description={member.description}
              />
            </div>
          ))}
        </div>
        /
      </div>
      <h1 className="p-4">CR (Comet Rocketry)</h1>
      <div className={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList.Rocketry.data.map((member, index) => (
            <div key={index} className="flex min-h-[16vw] md:min-h-[24vw]">
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
      <h1 className="p-4">ARC (Aerospace Research Corps)</h1>
      <div className={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList.ARC.data.map((member, index) => (
            <div key={index} className="flex min-h-[16vw] md:min-h-[24vw]">
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
      <h1 className="p-4">Media & Marketing</h1>
      <div className={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList['Media & Marketing'].data.map((member, index) => (
            <div key={index} className="flex min-h-[16vw] md:min-h-[24vw]">
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
      <h1 className="p-4">Business</h1>
      <div className={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList['Business'].data.map((member, index) => (
            <div key={index} className="flex min-h-[16vw] md:min-h-[24vw]">
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
      <h1 className="p-4">Web</h1>
      <div className={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList['Web'].data.map((member, index) => (
            <div key={index} className="flex min-h-[16vw] md:min-h-[24vw]">
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

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
      <h1 className="pt-4 text-3xl md:text-5xl">Executive</h1>
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
      <h1 className="p-4 text-3xl md:text-5xl">DBF (Design Build Fly)</h1>
      <div className={style.cards}>
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
      <h1 className="p-4 text-3xl md:text-5xl">DEC (Drone Engineering Core)</h1>
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
      <h1 className="p-4 text-3xl md:text-5xl">CR (Comet Rocketry)</h1>
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
      <h1 className="p-4 text-3xl md:text-5xl">
        ARC (Aerospace Research Corps)
      </h1>
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
      <h1 className="p-4 text-3xl md:text-5xl">Media & Marketing</h1>
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
      <h1 className="p-4 text-3xl md:text-5xl">Business</h1>
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
      <h1 className="p-4 text-3xl md:text-5xl">Web</h1>
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

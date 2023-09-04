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
      <h1 className="pt-4">Administrative</h1>
      <div className={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-8 gap-x-8">
          {officerList.Administrative.data.map((member, index) => (
            <div key={index} className='flex min-h-[24rem]'>
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
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList.DARRT.data.map((member, index) => (
            <div key={index} className='flex min-h-[24rem]'>
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
      <h1>Rocketry</h1>
      <div className={style.cards}>
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList.Rocketry.data.map((member, index) => (
            <div key={index} className='flex min-h-[24rem]'>
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
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList.RAD.data.map((member, index) => (
            <div key={index} className='flex min-h-[24rem]'>
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
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList['Media & Marketing'].data.map((member, index) => (
            <div key={index} className='flex min-h-[24rem]'>
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
        <div className="flex flex-wrap content-center justify-center gap-8">
          {officerList['Business'].data.map((member, index) => (
            <div key={index} className='flex min-h-[24rem]'>
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

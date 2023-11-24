'use client';

import React from 'react';
import {branches} from '@/data/branches';
import {useRouter} from 'next/navigation';
import officers from '@/data/OfficerData';
import MemberCard from '@/components/Team/MemberCard';

export default function Branch({params}) {
  const brancheNames = Object.keys(branches);
  const router = useRouter();

  if (!brancheNames.includes(params.branch)) router.push('/');

  const officerData = params.branch == 'Marketing' ? officers['Media & Marketing'] : officers[params.branch]

  return (
    <div className="w-full">
      <div
        style={{backgroundImage: `url(/branchPics/${params.branch}/Cover.jpg)`}}
        className={`bg-cover bg-center bg-no-repeat h-96 w-auto flex text-center items-center`}
      >
        <div className="w-full">
          <h1>{params.branch}</h1>
        </div>
      </div>
      <div className="flex flex-col items-center text-center w-full gap-y-5 bg-[#0a2647] py-8">
        <h2 className="text-white">About</h2>
        <p className="m-0 max-w-3xl">{branches[params.branch].about}</p>

        <h2 className="text-white">Officers</h2>
        <div className="grid grid-cols-2 gap-x-8">
          {officerData.data.map((officer, idx) => {
            return (
              <MemberCard
                img={officer.img ? officer.img : null}
                name={officer.name}
                position={officer.title}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import aiaa from '../../../public/Partner/aiaa.png';
import makerspace from '../../../public/Partner/makerspace.png';
import mathworks from '../../../public/Partner/mathworks.png';
import onpoynt from '../../../public/Partner/onpoynt.png';
import utd from '../../../public/Partner/utd.png';
import vectornav from '../../../public/Partner/vectornav.png';
const Sponsor = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        justifyContent: 'space-around',
      }}
    >
      <h1>Sponsors</h1>
      <div className="flex flex-auto flex-row flex-wrap justify-center w-100">
        <Image
          className="box-content m-[50px] object-contain h-auto w-auto max-w-[15%] cursor-pointer"
          onClick={() => window.open('https://www.utdallas.edu', '_blank')}
          src={utd}
          alt="utd"
        />
        <Image
          className="box-content m-[50px] object-contain h-auto w-auto max-w-[40%] cursor-pointer"
          onClick={() => window.open('https://utdmaker.space/', '_blank')}
          src={makerspace}
          alt="makerspace"
        />
        <Image
          className="box-content m-[50px] object-contain h-auto w-auto max-w-[25%] cursor-pointer"
          onClick={() => window.open('https://onpoynt.com', '_blank')}
          src={onpoynt}
          alt="onpoynt"
        />
        <Image
          className="box-content m-[50px] object-contain h-auto w-auto max-w-[50%] cursor-pointer"
          onClick={() => window.open('https://www.vectornav.com', '_blank')}
          src={vectornav}
          alt="vectornav"
        />
      </div>
    </div>
  );
};

export default Sponsor;

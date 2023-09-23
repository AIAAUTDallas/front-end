import React from 'react';
import Image from 'next/image';
import aiaa from '../../../public/Partner/aiaa.png';
import makerspace from '../../../public/Partner/makerspace.png';
import mathworks from '../../../public/Partner/mathworks.png';
import onpoynt from '../../../public/Partner/onpoynt.png';
import utd from '../../../public/Partner/utd.png';
import vectornav from '../../../public/Partner/vectornav.png';
import L3Harris from '../../../public/Partner/L3Harris.png';
import dwconsulting from '../../../public/Partner/dwconsulting.png';
import conlab from '../../../public/Partner/conlab.png';
import spirit from '../../../public/Partner/spirit.png';
import mouser from '../../../public/Partner/mouser.png';
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
      <h1 className="text-[2vw] mt-[10px]">Sponsors</h1>
      {/* <div className="flex flex-auto flex-row flex-wrap justify-center w-100">
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
      </div> */}
        <div className="flex flex-auto flex-row flex-wrap justify-center w-100 ">
          <h3 className="text-white text-center flex flex-auto flex-row flex-wrap justify-center w-100">Platinum Sponsor</h3>
          <Image
            className="box-content m-[25px] object-contain h-auto w-auto  cursor-pointer"
            onClick={() => window.open('https://www.vectornav.com/', '_blank')}
            src={vectornav}
            alt="vectornav"
          />
          <Image
            className="box-content m-[25px] object-contain h-auto w-auto  cursor-pointer"
            onClick={() => window.open('https://onpoynt.com/', '_blank')}
            src={onpoynt}
            alt="onpoynt"
          />
        </div>

        <div className="flex flex-auto flex-row flex-wrap justify-center w-100 ">
          <h3 className="text-white text-center flex flex-auto flex-row flex-wrap justify-center w-100">Gold Sponsor</h3>
          <Image
            className="box-content m-[25px] object-contain h-auto w-auto cursor-pointer"
            onClick={() => window.open('https://www.l3harris.com/', '_blank')}
            src={L3Harris}
            alt="L3Harris"
          />
            <Image
            className="box-content m-[25px] object-contain h-auto w-auto cursor-pointer"
            onClick={() => window.open('https://www.mouser.com/', '_blank')}
            src={mouser}
            alt="mouser"
          />
            <Image
            className="box-content m-[25px] object-contain h-auto w-auto cursor-pointer"
            onClick={() => window.open('https://www.spiritaero.com/', '_blank')}
            src={spirit}
            alt="spirit"
          />
        </div>

        <div className="flex flex-auto flex-row flex-wrap justify-center w-100 ">
          <h3 className="text-white text-center flex flex-auto flex-row flex-wrap justify-center w-100">Contributer</h3>
          <Image
            className="box-content m-[25px] object-contain h-auto w-auto  cursor-pointer"
            onClick={() => window.open('https://www.dwconsultingllc.com/', '_blank')}
            src={dwconsulting}
            alt="dwconsulting"
          />
          <Image
            className="box-content m-[25px] object-contain h-auto w-auto  cursor-pointer"
            onClick={() => window.open('https://labs.utdallas.edu/conlab/', '_blank')}
            src={conlab}
            alt="conlab"
          />
           <Image
            className="box-content m-[25px] object-contain h-auto w-auto  cursor-pointer"
            onClick={() => window.open('https://www.mathworks.com', '_blank')}
            src={onpoynt}
            alt="onpoynt"
          />
        </div>
    </div>
  );
};

export default Sponsor;

import React from 'react';
import Image from 'next/image';
import aiaa from '../../../public/Partner/aiaa.png';
import makerspace from '../../../public/Partner/makerspace.png';
import mathworks from '../../../public/Partner/mathworks.png';
import onpoynt from '../../../public/Partner/onpoynt.png';
import utd from '../../../public/Partner/utd.png';
import vectornav from '../../../public/Partner/vectornav.png';
import L3Harris from '../../../public/Partner/L3Harris.png';
import dwconsulting from '../../../public/Partner/dwcs.png';
import conlab from '../../../public/Partner/conlab.png';
import spirit from '../../../public/Partner/spirit.png';
import mouser from '../../../public/Partner/mouser.png';
import iBioRFCASL from '../../../public/Partner/iBioRFCASL.png';
import NTBAA from '../../../public/Partner/NTBAA.png';
const Sponsor = () => {
  return (
    <div className="flex flex-col py-8 justify-around items-center">
      <h1 className="text-lg md:text-[3vw] mb-0 mt-[1vh] md:mt-8">Sponsors</h1>

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
      <h2 className="text-white text-sm md:text-[2vw] text-center md:pt-16 underline">
        Platnium Sponsor
      </h2>
      <div className="flex flex-auto flex-row flex-wrap justify-center items-center py-4 w-100 md:pt-8">
        {/* <h3 className="text-white text-center flex flex-auto flex-row flex-wrap justify-center w-100">Platinum Sponsor</h3> */}
        <Image
          className="box-content px-8 object-contain cursor-pointer max-w-[30vw]"
          onClick={() => window.open('https://www.vectornav.com/', '_blank')}
          src={vectornav}
          alt="vectornav"
        />
        <Image
          className="box-content px-8 object-contain cursor-pointer max-w-[30vw] sm:max-w-[20vw]"
          onClick={() => window.open('https://onpoynt.com/', '_blank')}
          src={onpoynt}
          alt="onpoynt"
        />
      </div>
      <h2 className="text-white text-sm md:text-[2vw] text-center md:pt-16 underline">
        Gold Sponsor
      </h2>

      <div className="flex flex-auto flex-row flex-wrap justify-center items-center w-100 ">
        <Image
          className="box-content md:m-[25px] object-contain h-auto w-auto cursor-pointer py-4 max-w-[30vw] sm:max-w-[15vw]"
          onClick={() => window.open('https://www.l3harris.com/', '_blank')}
          src={L3Harris}
          alt="L3Harris"
        />
        <Image
          className="box-content mx-4 md:m-[25px] object-contain h-auto w-auto cursor-pointer max-w-[30vw]"
          onClick={() => window.open('https://www.mouser.com/', '_blank')}
          src={mouser}
          alt="mouser"
        />
        <Image
          className="box-content md:m-[25px] object-contain h-auto w-auto cursor-pointer py-2 max-w-[30vw]"
          onClick={() => window.open('https://www.spiritaero.com/', '_blank')}
          src={spirit}
          alt="spirit"
        />
      </div>
      <h2 className="text-white text-sm md:text-[2vw] text-center py-2 md:pt-16 underline">
        Contributer
      </h2>
      <div className="flex flex-auto flex-row flex-wrap justify-center w-100">
        <Image
          className="box-content mt-3 object-contain cursor-pointer w-xl max-h-[10vh] w-auto px-8 max-w-[30vw]"
          onClick={() => window.open('https://www.thedwcs.com/', '_blank')}
          src={dwconsulting}
          alt="dwconsulting"
        />
        <Image
          className="box-content m-3 md:m-[25px] object-contain cursor-pointer max-h-[10vh] w-auto max-w-[30vw]"
          onClick={() =>
            window.open('https://labs.utdallas.edu/conlab/', '_blank')
          }
          src={conlab}
          alt="conlab"
        />
        <Image
          className="box-content m-3 md:m-[25px] object-contain cursor-pointer max-h-[10vh] w-auto max-w-[30vw]"
          onClick={() =>
            window.open('https://labs.utdallas.edu/ibiorfcasl/', '_blank')
          }
          src={iBioRFCASL}
          alt="iBioRFCASL"
        />
        <Image
          className="box-content m-3 md:m-[25px] object-contain cursor-pointer max-h-[10vh] w-auto max-w-[30vw]"
          onClick={() => window.open('https://ntbaaonline.com/', '_blank')}
          src={NTBAA}
          alt="NTBAA"
        />
      </div>
    </div>
  );
};

export default Sponsor;

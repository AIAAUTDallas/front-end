import Branch from './Branch';
import Image from 'next/image';
import astronautPic from 'public/astronaut.png';
import dec from 'public/branchLogos/dec.png';
import cr from 'public/branchLogos/cr.png';
import dbf from 'public/branchLogos/dbf.png';
import arc from 'public/branchLogos/arc.png';
import business from 'public/branchLogos/business.png';
import aiaa from 'public/branchLogos/aiaa.png';

const routes = [
  {
    name: 'Drone Engineering Corps',
    path: '',
  },
  {
    name: 'Comet Rocketry',
    path: '',
  },
  {
    name: 'Design Build Fly',
    path: '',
  },
  {
    name: 'Aerospace Research Corps',
    path: '',
  },
  {
    name: 'Business',
    path: '',
  },
  {
    name: 'Marketing',
    path: '',
  },
  {
    name: 'Web',
    path: '',
  },
];
export default function Branches() {
  return (
    <>
      {/* <h3 className="text-lg text-white font-bold no-underline mb-0">
        <select>
        {routes.map((route) => (
          
          <option value={route.path}>
          <a href={route.path}> {route.name}</a>
          </option>
          
          ))}
          </select>
        </h3> */}
      <div className="relative flex items-center justify-center">
        <Image
          src={astronautPic}
          className="object-scale-down w-[100vw] "
          alt="Picture of astronaut in space"
        />
        <div className="flex flex-col justify-center items-center absolute">
        <h1 className='text-lg md:text-[3vw] pt-2 mb-0'>Branches</h1>
          <div className="grid grid-cols-3 justify-center items-center mx-[10%] w-full gap-[1vw]">
            <Branch
              branchName={'Drone Engineering Corps (DEC)'}
              branchLogo="dec"
              src={dec}
            />
            <Branch
              branchName={'Comet Rocketry (CR)'}
              branchLogo="cr"
              src={cr}
            />
            <Branch
              branchName={'Design Build Fly (DBF)'}
              branchLogo="dbf"
              src={dbf}
            />
            <Branch
              branchName={'Aerospace Research Corps (ARC)'}
              branchLogo="arc"
              src={arc}
            />
            <Branch
              branchName={'Business'}
              branchLogo="business"
              src={business}
            />
            <Branch branchName={'Marketing'} branchLogo="aiaa" src={aiaa} />
            <div />
            <Branch branchName={'Web Dev'} branchLogo="aiaa" src={aiaa} />
          </div>
        </div>
      </div>
    </>
  );
}

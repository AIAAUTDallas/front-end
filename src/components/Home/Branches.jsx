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
    <div className="min-h-full py-16 px-8" style={{
      backgroundImage: `url(${astronautPic.src})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 className="text-5xl">Branches</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:gap-4 w-full content-center md:grid-cols-2 lg:grid-cols-3">
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
          <div className='hidden md:block' />
          <Branch branchName={'Web Dev'} branchLogo="aiaa" src={aiaa} />
        </div>
      </div>
    </div>
  );
}

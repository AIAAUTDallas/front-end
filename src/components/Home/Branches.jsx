import styles from '../../styles/Branch.module.css';
import Branch from './Branch';
import Image from 'next/image'
import astronautPic from 'public/astronaut.png'
import dec from 'public/branchLogos/dec.png'
import cr from 'public/branchLogos/cr.png'
import dbf from 'public/branchLogos/dbf.png'
import arc from 'public/branchLogos/arc.png'
import business from 'public/branchLogos/business.png'
import aiaa from 'public/branchLogos/aiaa.png'
export default function Branches() {
  return (
  <>
    <h1 className='my-4 text-[2vw]'>Branches</h1>
    <div className='relative w-full h-full flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center absolute'>
          <div className='grid grid-cols-3 justify-center items-center mx-[10%] w-fill'>
            <Branch branchName={"Drone Engineering Corps (DEC)"} branchLogo="dec" src={dec}/>
            <Branch branchName={"Comet Rocketry (CR)"} branchLogo="cr" src={cr}/>
            <Branch branchName={"Design Build Fly (DBF)"} branchLogo="dbf" src={dbf}/>
            <Branch branchName={"Aerospace Research Corps (ARC)"} branchLogo="arc" src={arc}/>
            <Branch branchName={"Business"} branchLogo="business" src={business}/>
            <Branch branchName={"Marketing"} branchLogo="aiaa" src={aiaa}/>
            <div/>
            <Branch branchName={"Web Dev"} branchLogo="aiaa" src={aiaa}/>
          </div>
        </div>
        <Image src={astronautPic} className='object-fill h-full' alt='Picture of astronaut in space'/>
      </div>
  
  
  </>
      
  );
}

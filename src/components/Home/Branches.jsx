import styles from '../../styles/Branch.module.css';
import Branch from './Branch';
import Image from 'next/image'

export default function Branches() {
  return (
      <div className='relative w-full h-full'>
        <Image src="/astronaut.png" width={200} height={200} className='m-2'/>
        <div className='grid grid-cols-3 gap-4 justify-center items-center mx-32'>
          <Branch branchName={"Drone Engineering Corps (DEC)"} branchLogo="dec"/>
          <Branch branchName={"Comet Rocketry (CR)"} branchLogo="cr"/>
          <Branch branchName={"Design Build Fly (DBF)"} branchLogo="dbf"/>
          <Branch branchName={"Aerospace Research Corps (ARC)"} branchLogo="arc"/>
          <Branch branchName={"Business"} branchLogo="business"/>
          <Branch branchName={"Marketing"} branchLogo="aiaa"/>
          <div className='col-span-3 flex justify-center'> {/* center last row */}
            <Branch branchName={"Web Dev"} branchLogo="aiaa"/>
          </div>
        </div>

      </div>
      
  );
}

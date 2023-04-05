import React from 'react'
import Image from 'next/image'
import aiaa from '../../../public/projects/aiaa.png'
import makerspace from '../../../public/projects/makerspace.png'
import mathworks from '../../../public/projects/mathworks.png'
import onpoynt from '../../../public/projects/onpoynt.png'
import utd from '../../../public/projects/utd.png'
import vectornav from '../../../public/projects/vectornav.png'
const Sponsor = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', paddingTop: '2rem',paddingBottom: '2rem', justifyContent: 'space-around'}}> 
            <h1>Sponsors</h1>
            <div className='flex flex-row flex-wrap justify-center'>
                <Image className='p-7 object-contain w-auto max-w-xs'src={utd} alt="utd" />
                <Image className='p-7 object-contain w-auto' src={makerspace} alt="makerspace" />
                <Image className='p-7 object-contain w-auto max-w-xl'src={mathworks} alt="mathworks" />
                <Image className='p-7 object-contain w-auto max-w-sm' src={onpoynt} alt="onpoynt"/>
                <Image className='p-7 object-contain w-auto max-w-2xl' src={vectornav} alt="vectornav"/>
                <Image className='p-7 object-contain w-auto max-w-sm' src={aiaa} alt="aiaa" />
            </div>
        </div>
    )
}

export default Sponsor
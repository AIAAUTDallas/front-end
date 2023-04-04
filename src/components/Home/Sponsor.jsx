import React from 'react'
import Image from 'next/image'
import aiaa from 'public/partner/aiaa.png'
import makerspace from 'public/partner/makerspace.png'
import mathworks from 'public/partner/mathworks.png'
import onpoynt from 'public/partner/onpoynt.png'
import utd from 'public/partner/utd.png'
import vectornav from 'public/partner/vectornav.png'
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
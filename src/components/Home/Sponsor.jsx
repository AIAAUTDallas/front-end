import React from 'react'
import Image from 'next/image'
import aiaa from '../../../public/Partner/aiaa.png'
import makerspace from '../../../public/Partner/makerspace.png'
import mathworks from '../../../public/Partner/mathworks.png'
import onpoynt from '../../../public/Partner/onpoynt.png'
import utd from '../../../public/Partner/utd.png'
import vectornav from '../../../public/Partner/vectornav.png'
const Sponsor = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', paddingTop: '2rem',paddingBottom: '2rem', justifyContent: 'space-around'}}> 
            <h1>Sponsors</h1>
            <div className='flex flex-auto flex-row flex-wrap justify-center w-100'>
                <Image className='box-content p-7 object-contain h-auto w-auto max-w-[20%]'src={utd} alt="utd" />
                <Image className='box-content p-7 object-contain h-auto w-auto max-w-[30%]' src={makerspace} alt="makerspace" />
                <Image className='box-content p-7 object-contain h-auto w-auto max-w-[30%]'src={mathworks} alt="mathworks" />
                <Image className='box-content p-7 object-contain h-auto w-auto max-w-[30%]' src={onpoynt} alt="onpoynt"/>
                <Image className='box-content p-7 object-contain h-auto w-auto max-w-[30%]' src={vectornav} alt="vectornav"/>
                <Image className='box-content p-7 object-contain h-auto w-auto max-w-[30%]' src={aiaa} alt="aiaa" />
            </div>
        </div>
    )
}

export default Sponsor
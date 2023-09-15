import Image from 'next/image'

export default function Branch(props) {

    return (
        <>
            <div className="flex justify-center flex-col items-center">
                <Image src={`/branchLogos/${props.branchLogo}.png`} width={200} height={200} className='m-2'/>
                <h1 className='text-[1.75vw]'>{props.branchName}</h1>
            </div>
        
        </>
    )

}
import Image from 'next/image'

export default function Branch(props) {
    return (
        <>
            <div className="flex justify-center flex-col items-center mx-[4vw] py-2">
                <Image src={props.src} className=''/>
                <h1 className='text-[1.75vw]'>{props.branchName}</h1>
            </div>
        
        </>
    )

}
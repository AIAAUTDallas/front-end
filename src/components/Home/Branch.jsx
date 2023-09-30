import Image from 'next/image';

export default function Branch(props) {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <Image src={props.src} className="max-w-[20vw]" />
        <h1 className="text-[1.75vw]">{props.branchName}</h1>
      </div>
    </>
  );
}

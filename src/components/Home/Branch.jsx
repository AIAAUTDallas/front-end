import Image from 'next/image';

export default function Branch(props) {
  return (
    <>
      <div className="flex justify-center flex-col items-center py-2">
        <Image src={props.src} className="w-96 scale-75 md:scale-100" alt='' />
        <h1 className="text-lg">{props.branchName}</h1>
      </div>
    </>
  );
}

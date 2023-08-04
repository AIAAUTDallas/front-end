import Paragraph from './Paragraph';
export default function TwoColumn({left, right}) {
  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap w-full h-full text-white sm:pl-12 sm:pr-12">
      <div className="flex flex-col w-full p-2 lg:w-1/2">{left}</div>
      <div className="flex flex-col w-full p-2 lg:w-1/2">{right}</div>
    </div>
  );
}

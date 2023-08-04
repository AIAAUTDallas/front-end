export default function TwoRow({top, bottom}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full sm:pl-12 sm:pr-12">
      <div className="flex flex-col items-center p-2 justify-center w-full h-full">
        {top}
      </div>
      <div className="flex flex-col p-2 items-center justify-center w-full h-full">
        {bottom}
      </div>
    </div>
  );
}

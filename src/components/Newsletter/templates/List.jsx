export default function List({list, format}) {
  if (format == 'ul') {
    return (
      <div className="p-6 sm:pl-12 sm:pr-12 w-full flex justify-center leading-loose">
        <ul className="list-disc list-inside flex flex-col gap-3">
          {list.map((item, index) => {
            return (
              <li className="text-white text-lg font-bold" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="p-6 sm:pl-12 sm:pr-12 w-full flex justify-center">
        <ol className="list-outside list-decimal flex flex-col gap-3">
          {list.map((item, index) => {
            return (
              <li className="text-white text-lg" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

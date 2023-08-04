export default function ParagraphOnly({text}) {
  return (
    <p className="text-lg break-words leading-loose pl-2 pr-2 sm:pl-14 sm:pr-14">
      {text}
    </p>
  );
}

export default function Image({ src, alt }) {
    return (
        <img src={src} alt={alt} className="h-full sm:max-h-[350px] self-center object-cover mb-[1rem]" />
    )
}
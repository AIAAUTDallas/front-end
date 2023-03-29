export default function Title({ title, subtitle, children }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full mb-12">
            <div className="self-start lg:pl-12 lg:pr-12">
                <h1 className="text-4xl font-bold text-left">{title}</h1>
                <p className="text-left text-xl">{subtitle}</p>
            </div>
            <div className="flex flex-col w-full h-full">
                {children}
            </div>
        </div>
    )
}
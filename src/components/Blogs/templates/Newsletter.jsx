export default function Newsletter({ title, subtitle, backgroundImage, children }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900">
            <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "darken",
            }}  
            className="p-12 w-full bg-gray-800 bg-opacity-50">
                <h1 className="text-3xl font-bold text-center">{title}</h1>
                <p className="text-center">{subtitle}</p>
            </div>
            <div className="min-h-screen w-full p-12 text-center">
                {children}
            </div>
        </div>
    )
}
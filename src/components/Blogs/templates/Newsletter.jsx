export default function Newsletter({ title, description, children }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900">
            <div className="p-8">
                <h1 className="text-3xl font-bold text-center">{title}</h1>
                <p className="text-center">{description}</p>
            </div>
            <div className="min-h-screen w-full p-12 text-center">
                {children}
            </div>
        </div>
    )
}
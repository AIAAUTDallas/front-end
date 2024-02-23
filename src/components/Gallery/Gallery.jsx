import Image from 'next/image'

const imageCollection = require.context('../../../public/gallery', false);
const images = {
    data: imageCollection.keys().map(imageCollection)
}

export default function Gallery() {
    console.log(imageCollection.keys() + "imageCollection")
    console.log(images.data)
    return (
        <>
            <section class="bg-slate-900 dark:bg-gray-900">
                <div class="px-5 py-12 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {images.data.map((image, index) => (
                            <div class="lg:w-1/3 sm:w-1/2 p-4 w-full" key={index}>
                                <a class="block relative h-72 rounded overflow-hidden">
                                    <Image
                                        alt="gallery photo"
                                        class="object-cover object-center w-full h-full block"
                                        src={image.default.src}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        
        </>
    )
}
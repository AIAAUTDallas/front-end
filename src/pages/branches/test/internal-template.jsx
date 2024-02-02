import Image from 'next/image';
import Section from '../../../components/Branches/Section';

export default function Test() {
  return (
    <div className="min-h-[95svh] bg-[#0f172a]">
      {/* banner */}
      <div className="h-[90svh] bg-[url(https://images4.alphacoders.com/820/820238.jpg)] bg-no-repeat bg-cover">
        {/* title */}
        <div className="flex flex-col justify-center items-center h-[90vh]">
          <h1 className="text-4xl md:text-6xl text-white font-bold uppercase">
            Test
          </h1>
          <p className="text-lg md:text-2xl text-white font-semibold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, enim!
          </p>
        </div>
      </div>

      {/* overview */}
      <Section className="flex flex-col justify-center items-center">
        <div className="md:w-1/2 text-center">
          <h1 className="uppercase text-3xl md:text-4xl">Overview</h1>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Beatae, exercitationem. Ducimus iure repellat harum
            repellendus veritatis ratione. Ullam, tempore iste!
          </p>
        </div>
      </Section>

      {/* projects */}
      <Section className="flex flex-col">
        <h1 className="uppercase text-3xl md:text-4xl"> Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-4 flex-grow items-center mt-4">
          <div className="bg-[#0f172a] md:p-4">
            <h1 className="text-2xl font-semibold">Project 1</h1>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Beatae, exercitationem. Ducimus iure repellat harum
              repellendus veritatis ratione. Ullam, tempore iste!
            </p>
          </div>
          <div className="bg-[#0f172a] md:p-4">
            <h1 className="text-2xl font-semibold">Project 2</h1>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Beatae, exercitationem. Ducimus iure repellat harum
              repellendus veritatis ratione. Ullam, tempore iste!
            </p>
          </div>
          <div className="bg-[#0f172a] md:p-4">
            <h1 className="text-2xl font-semibold">Project 3</h1>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Beatae, exercitationem. Ducimus iure repellat harum
              repellendus veritatis ratione. Ullam, tempore iste!
            </p>
          </div>
        </div>
      </Section>

      {/* gallery */}
      <Section>
        <h1 className="uppercase text-center text-3xl md:text-4xl">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-4 flex-grow items-center mt-4">
          <div className="h-[250px] md:h-[300px] relative overflow-hidden">
            <Image
              src="https://images4.alphacoders.com/820/820238.jpg"
              alt="test"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="h-[250px] md:h-[300px] relative overflow-hidden">
            <Image
              src="https://images4.alphacoders.com/820/820238.jpg"
              alt="test"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="h-[250px] md:h-[300px] relative overflow-hidden">
            <Image
              src="https://images4.alphacoders.com/820/820238.jpg"
              alt="test"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="h-[250px] md:h-[300px] relative overflow-hidden">
            <Image
              src="https://images4.alphacoders.com/820/820238.jpg"
              alt="test"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* announcements */}
      <Section className="flex flex-col">
        <h1 className="uppercase text-3xl md:text-4xl">Announcements</h1>

        {/* main content for announcements */}
        <div className="mt-4">
          <div className="bg-[#0f172a] md:p-4">
            <h1 className="text-2xl font-semibold">Announcement 1</h1>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Beatae, exercitationem. Ducimus iure repellat harum
              repellendus veritatis ratione. Ullam, tempore iste!
            </p>
          </div>
          <div className="bg-[#0f172a] md:p-4">
            <h1 className="text-2xl font-semibold">Announcement 2</h1>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Beatae, exercitationem. Ducimus iure repellat harum
              repellendus veritatis ratione. Ullam, tempore iste!
            </p>
          </div>
          <div className="bg-[#0f172a] md:p-4">
            <h1 className="text-2xl font-semibold">Announcement 3</h1>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Beatae, exercitationem. Ducimus iure repellat harum
              repellendus veritatis ratione. Ullam, tempore iste!
            </p>
          </div>
        </div>
      </Section>

      {/* special section */}
      <Section
        className="flex flex-col"
        style={{
          backgroundImage: 'url(/officers/kevin.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="uppercase text-center text-3xl md:text-4xl">
          Special Section (whatever you all want here maybe)
        </h1>
      </Section>
    </div>
  );
}

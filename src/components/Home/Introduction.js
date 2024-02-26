const Introduction = () => {
  return (
    <div className="py-20 px-8 md:px-20">
      {/* introduction and video */}
      <div className="grid grid-cols-1 gap-16 min-h-[100svh] content-center lg:grid-cols-2">
        {/* introduction */}
        <div className="flex flex-col justify-center items-center">
          {' '}
          {/* title */}
          <h1 className="text-5xl my-4">Who we are</h1>
          <p className="leading-relaxed text-lg mb-4">
            American Institute of Aeronautics and Astronautics (AIAA) is the
            principal society of aerospace engineers and scientists. At the
            University of Texas at Dallas (UTD), we are a project-based student
            organization hosting technical and professional activities to
            prepare students for a career in the aerospace industry.
          </p>
          <p className="leading-relaxed text-lg">
            From aircraft and drones to rockets and wind turbines, AIAA UTD
            provides aspiring aerospace engineers the opportunity to build
            engineering experience even on a campus without an aerospace major.
            We also offer student mentorships, guest lectures, company tours,
            and networking events. Students of all majors and years are welcome
            to join!
          </p>
        </div>

        {/* video */}
        <div className="h-[300px] md:h-[500px]">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/xeU48eGGcwc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

export default function HeaderVideo() {
  return (
    <div className="relative">
      <video
        className="w-full object-cover h-[93svh] brightness-75"
        autoPlay
        loop
        muted
      >
        <source src="https://video.wixstatic.com/video/739af6_641eedb066364292a337a9347977c5a3/1080p/mp4/file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
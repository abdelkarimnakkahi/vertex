import video from "../assets/vr.mp4";
function HeroSection() {
  return (
    <div className=" flex flex-col items-center mt-6 lg:mt-20 max-w-3xl mx-auto pt-20 px-6">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual build tools
        <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {""} for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into imersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="mt-10">
        <video autoPlay loop muted className="rounded-lg w-full mx-2 my-4">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HeroSection;

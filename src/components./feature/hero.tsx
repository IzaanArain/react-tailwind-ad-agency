import profileImg1 from "../../assets/profile1.webp";
import profileImg2 from "../../assets/profile2.webp";
import profileImg3 from "../../assets/profile3.webp";
import heroImg from "../../assets/hero-image_1.webp";

import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  const profileImages = [profileImg1, profileImg2, profileImg3];
  return (
    <>
      {/* min-h-screen */}
      <section className="min-h-[calc(100vh-64px)] mt-[64px] flex flex-wrap items-center bg-emerald-950 text-orange-50">
        <div className="w-full p-8 md:w-1/2">
          <div className="mb-4 flex space-x-2">
            {profileImages.map((item) => (
              <img
                key={item}
                src={item}
                alt="Team member 1"
                className="size-12 rounded-full border-2 border-orange-50 "
              />
            ))}
          </div>
          <h1 className="text-4xl tracking-tighter md:text-5xl lg:text-7xl">
            We create impactful ads that
            <span className="text-orange-500"> elevate</span> your brand.
          </h1>
          <button
            className="mt-8 flex items-center gap-2 rounded-full
        bg-emerald-900 px-4 py-3 hover:bg-emerald-800"
          >
            <span>Know more</span>
            <IoMdArrowForward />
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:p-8">
          <img src={heroImg} alt="ad Agency" className="h-auto w-full" />
        </div>
      </section>
    </>
  );
};

export default Hero;

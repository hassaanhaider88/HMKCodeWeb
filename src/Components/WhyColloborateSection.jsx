import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";

const WhyColloborateSection = () => {
  return (
    <div className="w-full relative min-h-screen px-10 md:px-20 py-10">
      <div className="OurColloborativeClipPath py-10 rounded-4xl bg-linear-to-r from-[#1DDFEC] to-[#DFDCD7] relative z-10">
        <div className="w-full px-12 py-10 md:w-1/2 flex flex-col justify-start items-center">
          <h1 className="text-5xl font-semibold">
            Why Collaborate with HMK CodeWeb?
          </h1>
          <p className="text-md font-semibold mt-5">
            Collaborating with HMK CodeWeb guarantees a transformative
            experience for your business. Our team of seasoned experts brings a
            wealth of experience to the table. With a proven track record of
            delivering cutting-edge software solutions and a commitment to
            excellence.{" "}
          </p>
          <div className="box bg-white text-black mt-10 px-4 rounded-4xl py-8 flex justify-center items-center flex-col">
            <div className="flex gap-5 justify-center mt-5 items-center">
              <AiFillCheckCircle size={40} />
              <div>
                <h1 className="text-lg font-bold">Innovation Solutions</h1>
                <p className="text-[12px]">
                  We leverage the latest technologies and industry best
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-center mt-5 items-center">
              <AiFillCheckCircle size={40} />
              <div>
                <h1 className="text-lg font-bold">Expertise & Experience</h1>
                <p className="text-[12px]">
                With  Deep industry knowledge and years of
                  experience.
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-center mt-5 items-center">
              <AiFillCheckCircle size={40} />
              <div>
                <h1 className="text-lg font-bold">Tailored Solutions</h1>
                <p className="text-[12px]">
                  Customize  approach to meet your specific business
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE OUTSIDE CLIPPED LAYER */}
      <div className="absolute sm:flex bottom-10 right-0 md:w-1/2 z-20 hidden justify-center">
        <img
          className="object-contain w-[95%] max-h-240"
          src="./HassaanWithLaptop.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default WhyColloborateSection;

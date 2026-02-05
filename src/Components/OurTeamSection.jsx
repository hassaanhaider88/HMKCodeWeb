import { MdOutlineGroups } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { VscGitMerge } from "react-icons/vsc";

const OurTeamSection = () => {
  const OurTeamData = [
    {
      hoverName: "Hassaan Haider",
      ImageUrl: "",
    },
    {
      hoverName: "Hassaan Haider",
      ImageUrl: "",
    },
    {
      hoverName: "Hassaan Haider",
      ImageUrl: "",
    },
    {
      hoverName: "Hassaan Haider",
      ImageUrl: "",
    },
    {
      hoverName: "Hassaan Haider",
      ImageUrl: "",
    },
    {
      hoverName: "Hassaan Haider",
      ImageUrl: "",
    },
  ];
  return (
    <div className="min-h-screen px-16 py-6 md:px-5 md:py-10 w-full rounded-3xl">
      <div className="OurTaemCard  relative w-full bg-red-50 h-full ">
        <div
          style={{ borderRadius: "0px 0px 0px 100px" }}
          className="OutTeamTagOnRightTop right-0 pr-5 flex justify-end items-center w-full md:w-[75%] pt-2 pb-4 bg-[#0B0B0B]  absolute"
        >
          <p className="text-2xl sm:translate-x-0 translate-x-10 font-semibold">Our Team</p>
          <div className="flex gap-3 translate-x-30 sm:translate-x-6 items-center justify-center">
            <div className="h-16 w-16 bg-red-500 rounded-full"></div>
            <div className="h-16 w-16 -translate-x-8 bg-red-600 rounded-full"></div>
            <div className="h-16 w-16 -translate-x-16 bg-red-700 rounded-full"></div>
            <div className="h-16 w-16 -translate-x-24 bg-red-800 rounded-full"></div>
            <div className="h-16 w-16 -translate-x-32 bg-red-800 rounded-full"></div>
          </div>
          <div className="h-16 sm:flex hidden w-16 -translate-x-8  -rotate-40 border border-white rounded-full bg-black text-white  justify-center items-center">
            <BsArrowDown size={24} />
          </div>
        </div>
        <img
          src="./HMKCodeWebLogo.png"
          className="bg-cover bg-fixed w-full h-[65vh]"
          alt=""
        />
        <div className="BottomSidedThreeCards w-full pb-6 flex flex-wrap gap-4 justify-evenly items-center">
          <div className="ButtonAndHeadingCard flex flex-col gap-10 ">
            <button className="py-3 w-fit px-10 bg-[#04E1EC] rounded-4xl ">
              Why Choose Us
            </button>
            <div className="py-4 bg-[#191919] rounded-4xl px-10 text-3xl font-semibold">
              OUR <br /> ADVANTAGES
            </div>
          </div>
          <div className="CenterCard flex gap-3 bg-white text-black py-3 px-5 rounded-3xl">
            <MdOutlineGroups size={40} />
            <div>
              <h1 className="text-2xl font-semibold">Team Of Experts</h1>
              <p className="text-md text-gray-500 font-semibold">
                Our Expert Team of Tech <br /> enthusis and industry veterns,{" "}
                <br />
                dedicated to shaping cutting-edge <br /> solution for your
                success.
              </p>
            </div>
          </div>
          <div className="LastCard flex gap-3 bg-white text-black py-3 px-5 rounded-3xl">
            <VscGitMerge size={40} />
            <div>
              <h1 className="text-2xl font-semibold">Personalization</h1>
              <p className="text-md text-gray-500 font-semibold">
                We excil in tailoring solutions to your <br /> uniuqe needs,
                ensuring a personalized <br /> experince that align perfect with
                <br /> your requirments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;

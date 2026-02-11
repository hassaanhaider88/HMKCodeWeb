import { BiArrowBack } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import ProjectData from "../Data/ProjectsData";
import { useState } from "react";

export default function WorkSection() {
  const [NextProjectIndex, setNextProjectIndex] = useState(0);
  let CurretProjectToShow = ProjectData[NextProjectIndex];
  const [CurrentShowImageIndex, setCurrentShowImageIndex] = useState(0);
  let CurrentShowImgeindex =
    CurretProjectToShow.projectImage[CurrentShowImageIndex];

  const handleClickFarWard = () => {
    if (NextProjectIndex == ProjectData.length - 1) {
      setNextProjectIndex(0);
    } else {
      setNextProjectIndex((pre) => pre + 1);
    }
    setCurrentShowImageIndex(0);
  };
  const handleClickBackWard = () => {
    if (NextProjectIndex == 0) {
      setNextProjectIndex(ProjectData.length - 1);
    } else {
      setNextProjectIndex((pre) => pre - 1);
    }
    setCurrentShowImageIndex(0);
  };

  const handleImageNavigatorCick = (indx) => {
    setCurrentShowImageIndex(indx);
  };

  return (
    <div id="Services" className="w-full py-50 px-10 mt-20 bg-[#0B0B0B]">
      <div className="w-full   rounded-4xl px-10 relative min-h-[250vh] bg-[#F0F0F0]">
        <div className=" py-20 absolute w-fit  -top-60 px-4 flex justify-center">
          <div className="work-wrapper  w-full  p-10 md:p-14 relative">
            <div className="grid mt-10 md:grid-cols-2 gap-10 items-start">
              {/* LEFT SIDE */}
              <div>
                <span className="bg-[#F2DFC8] text-black px-5 py-2 rounded-full text-sm font-medium inline-block mb-6">
                  Our Work
                </span>

                <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
                  EXPLORE OUR WORK
                  <br />
                  THAT WE’RE PROUDLY
                  <br />
                  PRESENTING TO YOU.
                </h2>
              </div>

              {/* RIGHT SIDE TEXT */}
              <p className="text-white/80 text-sm md:text-base leading-relaxed mt-2">
                Dive into our portfolio, a carefully curated collection of
                projects that demonstrates our prowess in crafting tailored
                solutions for diverse industries. Each showcase is a testament
                to our relentless pursuit of excellence, where innovation meets
                practicality in every design and implementation. Explore the
                depth of our work, and witness how we’ve consistently propelled
                big-named brands to new heights through strategic and
                cutting-edge solutions.
              </p>
            </div>

            {/* IMAGE GRID */}
            <div className="flex md:flex-row flex-col w-full gap-5 mb-5 py-10 md:h-96 h-full justify-between">
              <div className="LeftImages w-full md:w-1/2 flex h-full  gap-4">
                <div className="firtImgeSinlge w-full md:w-1/2 h-full ImgOne">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src="https://i.pinimg.com/originals/9e/4b/9b/9e4b9b040ad791fc615a903b5cff703c.jpg"
                    alt=""
                  />
                </div>
                <div className="secondImageDouble fullw-full md:w-1/2 flex flex-col gap-4">
                  <img
                    className="w-full h-[75%] object-cover rounded-2xl"
                    src="https://i.pinimg.com/originals/e7/48/fa/e748fa20e132f88533fa7d422835e8b2.jpg"
                    alt=""
                  />
                  <img
                    className="w-full h-[25%] object-cover rounded-2xl"
                    src="https://i.pinimg.com/originals/be/51/b5/be51b5d5d14d8f51d2a14f7d4be5ce62.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="RightImages   h-full ImgFour w-full md:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src="https://i.pinimg.com/originals/ca/fa/f7/cafaf7ea57a4f85cfc4abdcf22abef35.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* all Projects slider shwo here  */}
        <div
          id="Projects"
          className="AllProjects absolute bottom-5 pt-5 left-1/2 -translate-x-1/2 w-full min-h-screen bg-[#F0F0F0]"
        >
          {/* here will all  projects will shown  */}
          <div className="w-full flex mt-10 px-10 gap-5 justify-start items-center flex-col">
            {/* top button jsut for style  */}
            <div className="w-full flex justify-start items-center">
              <button className="active:scale-105 left-10    duration-200 transition-all cursor-pointer w-fit bg-[#f3e3d3] text-black px-5 py-1 rounded-full group flex items-center gap-2 font-bold hover:bg-white">
                Lastest Work
                <span className="rounded-full  group-hover:rotate-180 group-hover:translate-x-2 group-hover:scale-105 duration-300 transition-all p-3 text-white bg-black">
                  <BsArrowUpRight size={20} />
                </span>
              </button>
            </div>
            {/* project heading and navigation buttons */}
            <div className="flex md:flex-row flex-col w-full justify-center gap-5 md:justify-between items-center ">
              <h2 className="text-4xl text-black md:w-1/2 w-full font-semibold">
                {CurretProjectToShow.projectFirstHeading}
              </h2>
              <div className="flex md:w-1/2 w-full gap-5 justify-end items-center">
                <button
                  onClick={handleClickBackWard}
                  className="h-16 border-[#DFDCD7] border-2 cursor-pointer hover:scale-90 duration-300 transition-all w-16 flex justify-center items-center rounded-full "
                >
                  <BiArrowBack size={40} color="#DFDCD7" />
                </button>
                <button
                  onClick={handleClickFarWard}
                  className="h-16 border-[#1DDFEC] rotate-180 border-2 cursor-pointer hover:scale-95 duration-300 transition-all w-16 flex justify-center items-center rounded-full "
                >
                  <BiArrowBack size={40} color="#1DDFEC" />
                </button>
              </div>
            </div>
            <div className="ProjectImgaAndOtherDetails pb-10 w-full gap-5 flex md:flex-row flex-col justify-between items-center ">
              {/* image and navigator */}
              <div className="ImgeAndProductNavigatorButtons md:w-1/2 w-full relative">
                <img
                  preload="true"
                  src={CurrentShowImgeindex}
                  className="h-60 ImgFour rounded-2xl shadow-2xl w-140"
                  alt=""
                />
                <div className="Buttons cursor-pointer absolute z-20 bottom-0 right-2 w-fit py-2 px-4 rounded-3xl flex gap-2">
                  {CurretProjectToShow.projectImage.map((_, indx) => (
                    <span
                      onClick={() => handleImageNavigatorCick(indx)}
                      className={`w-5 hover:scale-95 duration-300 transition-all h-5 rounded-full  ${CurrentShowImageIndex == indx ? "bg-[#1ddfec] scale-105" : "bg-gray-400"} `}
                    ></span>
                  ))}
                </div>
              </div>
              {/* all Project info goes here */}
              <div className="md:w-1/2 w-full flex gap-5 justify-between items-center">
                {/* First heading description and Button */}
                <div className="flex justify-start flex-col items-start gap-2 ">
                  <h1 className="text-4xl text-[#1DDFEC]">
                    {CurretProjectToShow.projectSecondHeading}
                  </h1>
                  <p className="text-sm font-semibold text-gray-500">
                    {CurretProjectToShow.projectDescription}
                  </p>
                  <button
                    onClick={() => window.open(CurretProjectToShow.projectLink)}
                    className="active:scale-95  duration-200 transition-all cursor-pointer w-fit bg-[#f3e3d3] text-black px-5 py-1 rounded-full group flex items-center gap-2 font-bold hover:bg-white"
                  >
                    Let's Talk{" "}
                    <span className="rounded-full group-hover:rotate-0  rotate-180 group-hover:translate-x-2 group-hover:scale-105 duration-300 transition-all p-3 text-white bg-black">
                      <BsArrowUpRight size={20} />
                    </span>
                  </button>
                </div>
                {/* tech stack used */}
                <div className="text-2xl whitespace-nowrap text-black font-semibold">
                  <h1>
                    Stack And <br /> Tools Used
                  </h1>
                  <div className="AllStacDiv flex flex-col justify-center items-center gap-3 py-3">
                    {CurretProjectToShow.projectTechStack.map(
                      (StackIcon, index) => (
                        <span key={index} className="text-sm font-bold">
                          <StackIcon.icon size={40} />
                          <h1 className="text-[12px]">{StackIcon.Name}</h1>
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

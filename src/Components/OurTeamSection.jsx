import { MdOutlineGroups } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import TeamData from "../Data/TeamData";
import { VscGitMerge } from "react-icons/vsc";

const OurTeamSection = () => {
  return (
    <div className="min-h-screen px-16 py-6 md:px-5 md:py-10 w-full rounded-3xl">
      <div className="OurTaemCard  relative w-full bg-red-50 h-full ">
        <div
          style={{ borderRadius: "0px 0px 0px 100px" }}
          className="OutTeamTagOnRightTop right-0 pr-5 flex justify-end items-center w-full md:w-[75%] pt-2 pb-4 bg-[#0B0B0B]  absolute"
        >
          <p className="text-2xl sm:translate-x-0 translate-x-10 font-semibold">
            Our Team
          </p>
          <div className="flex gap-3 translate-x-30 sm:translate-x-6 items-center justify-center">
            {TeamData.map((Member, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    window.open(Member.MemGithubLink);
                  }}
                  className={`h-16 relative group cursor-pointer duration-200 transition-all hover:ring-2 hover:scale-110 w-16 ${index !== 0 && `-translate-x-${index * 8}`} bg-red-500 rounded-full`}
                >
                  <img
                    src={Member.MemImage}
                    alt={Member.MemName}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <span className="text-black group-hover:block hidden whitespace-nowrap py-2 px-3  h-fit w-fit -top-12 rounded-xl bg-white -left-5 absolute">
                    {Member.MemName}
                  </span>
                </div>
              );
            })}
            {/* <div className="h-16 w-16 bg-red-500 rounded-full"></div>
            <div className="h-16 w-16 -translate-x-8 bg-red-600 rounded-full"></div>
            <div className="h-16 w-16 -translate-x-16 bg-red-700 rounded-full"></div>
            <div className="h-16 w-16 -translate-x-24 bg-red-800 rounded-full"></div>
            <div className="h-16 w-16 -translate-x-32 bg-red-800 rounded-full"></div> */}
          </div>
          <div className="h-16 cursor-pointer active:scale-90 duration-300 transition-all sm:flex hidden w-16 -translate-x-8  -rotate-40 border border-white rounded-full bg-black text-white  justify-center items-center">
            <BsArrowDown size={24} />
          </div>
        </div>
        <img
          src="https://i.pinimg.com/videos/thumbnails/originals/d1/58/5f/d1585f6707b1d2d2d1a0f12ba8838c76.0000000.jpg"
          className="bg-cover bg-fixed w-full h-screen object-cover"
          alt=""
        />
        <div className="BottomSidedThreeCards absolute bottom-0 w-full pb-6 flex flex-wrap gap-4 justify-evenly items-center">
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

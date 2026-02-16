import { MdOutlineGroups } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import TeamData from "../Data/TeamData";
import { VscGitMerge } from "react-icons/vsc";

const OurTeamSection = () => {
  return (
    <div className="min-h-screen px-16 py-6 md:px-5 md:py-10 w-full rounded-3xl">
      <div className="OurTaemCard rounded-3xl overflow-hidden relative w-full bg-red-50 h-full ">
        <div
          style={{ borderRadius: "0px 0px 0px 100px" }}
          className="OutTeamTagOnRightTop z-30 right-0 pr-5 flex justify-end items-center w-full md:w-[75%] pt-2 pb-4 bg-[#0B0B0B]  absolute"
        >
          <p className="text-2xl   -translate-x-10 font-semibold">Our Team</p>
          <div className="flex gap-3 items-center justify-center relative">
            {TeamData.map((Member, index) => (
              <div
                key={index}
                onClick={() => window.open(Member.MemGithubLink)}
                style={{
                  transform: `translateX(-${index * 26}px)`,
                  zIndex: TeamData.length - index,
                }}
                className="h-16 w-16 relative group cursor-pointer duration-200 transition-all hover:ring-2 hover:scale-110 rounded-full overflow-hidden"
              >
                <img
                  loading="lazy"
                  src={Member.MemImage}
                  alt={Member.MemName}
                  className="w-full h-full object-cover"
                />

                <span className="absolute hidden group-hover:block whitespace-nowrap py-2 px-3 -top-12 left-1/2 -translate-x-1/2 rounded-xl bg-white text-black text-sm shadow-lg">
                  {Member.MemName}
                </span>
              </div>
            ))}
          </div>

          <div className="h-16 cursor-pointer active:scale-90 duration-300 transition-all sm:flex hidden w-16 -translate-x-8  -rotate-40 border border-white rounded-full bg-black text-white  justify-center items-center">
            <BsArrowDown size={24} />
          </div>
        </div>
        <img
        loading="lazy"
          src="https://i.pinimg.com/originals/69/40/fa/6940fa286dc8cd6a5a7535eb9af42b4a.jpg"
          className="bg-cover bg-fixed w-full h-screen object-bottom"
          alt=""
        />
        <div className="absolute top-0 w-full h-full rounded-3xl bg-[#3333338c] " />
        <div className="BottomSidedThreeCards z-20 absolute bottom-0 w-full pb-6 flex flex-wrap gap-4 justify-evenly items-center">
          <div className="ButtonAndHeadingCard flex flex-col gap-10 ">
            <button className="py-3 md:block hidden w-fit px-10 bg-[#04E1EC] rounded-4xl ">
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

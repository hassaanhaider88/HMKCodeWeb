import { TiVendorMicrosoft } from "react-icons/ti";
import { SiCisco } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { SiDell } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="px-8 py-16 flex justify-center items-center md:flex-row flex-col gap-10">
      <div>
        <h1 className="md:text-6xl text-4xl text-nowrap font-extrabold leading-[1.1] mb-8">
          YOUR <span className="text-[#07BEC8] italic">PARTNER</span> FOR
          <br />
          COMPREHENSIVE IT <br /> SOLUTIONS
        </h1>
        <div className="relative max-w-md group mb-10">
          <input
            type="text"
            placeholder="Enter Your Problem...."
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-full py-3 px-6 outline-none focus:border-[#07BEC8] transition-all"
          />
          <button className="absolute active:scale-105 duration-200 transition-all cursor-pointer right-0 top-1/2 transform -translate-y-1/2 bg-[#f3e3d3] text-black px-4 py-1 rounded-full group flex items-center gap-2 font-bold hover:bg-white">
            Let's Talk{" "}
            <span className="rounded-full  group-hover:rotate-180 group-hover:translate-x-2 group-hover:scale-105 duration-300 transition-all p-3 text-white bg-black">
              <BsArrowUpRight size={20} />
            </span>
          </button>
        </div>
        <div className="Text">
          <p className="text-sm text-gray-400">
            Our team of experts is ready to assist you with tailored IT
            solutions <br /> that meet your unique  business needs. Whether you're
            facing technical <br /> challenges or seeking  to enhance your IT
            infrastructure, we're here to <br /> help. Contact us today to discuss how
            we can support your business <br /> growth and success.
          </p>
        </div>
        <div className="BrandsThreee w-full flex items-center sm:gap-12 gap-6 mt-12 text-8xl text-gray-500">
          <SiCisco />
          <TiVendorMicrosoft />
          <SiDell />
        </div>
      </div>
      <div className="flex relative justify-center">
        <div className="absolute cursor-pointer z-20 active:scale-105 hover:scale-95 duration-300 transition-all bg-[#09a2aacc] p-1 rounded-full left-20 top-5">
          <div className="p-1 bg-[#07bec8c0] m-1 rounded-full">
            <div className="p-3 bg-[#04e1ec] m-1 rounded-full">
              <BsArrowUpRight size={20} className="rotate-90 font-bold" />
            </div>
          </div>
        </div>
        <div className="inverted-radius">
          <img
            className="w-full overflow-visible h-full object-cover z-10"
            src="./HassaanLaptopCarrer.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

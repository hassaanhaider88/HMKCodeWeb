import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-6xl text-nowrap font-extrabold leading-[1.1] mb-8">
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
            <span className="rounded-full group-hover:rotate-180 group-hover:ml-2 duration-300 transition-all p-3 text-white bg-black">
              <BsArrowUpRight size={20} />
            </span>
          </button>
        </div>
        <div className="Text">
          <p className="text-sm text-gray-400">
            Our team of experts is ready to assist you with tailored IT
            solutions that meet your unique business needs. Whether you're
            facing technical challenges or seeking to enhance your IT
            infrastructure, we're here to help. Contact us today to discuss how
            we can support your business growth and success.
          </p>
        </div>
        <div className="BrandsThreee">
            
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="absolute -z-10 w-72 h-72 bg-purple-600/20 blur-[100px] top-0 right-0"></div>
        <div className="bg-linear-to-br from-purple-600 to-transparent p-0.5 rounded-tl-[100px] rounded-br-[100px]">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
            alt="Professional"
            className="rounded-tl-[100px] rounded-br-[100px] w-full max-w-md object-cover h-125"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

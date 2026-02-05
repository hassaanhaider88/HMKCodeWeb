import React from "react";
import { BiCodeAlt, BiLayer, BiMobileAlt, BiShieldAlt } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const LeadingSolutionSection = () => {
  return (
    <section className="px-8  mt-10">
      <div className="bg-linear-to-r from-[#8C4DF6] text-white via-[#A36BEA] to-[#04E1EC] relative rounded-2xl p-12 ">
        <div
          style={{ borderRadius: "0px 0px 100px 0px" }}
          className="TopLeftDiv absolute top-0 left-0 w-100 bg-[#191919] py-4"
        >
          <button className="py-2 text-black font-semibold w-fit px-10 bg-[#F1DBC3] ml-10 rounded-4xl ">
            Our Services
          </button>
        </div>
        <div className="flex mt-16 flex-col md:flex-row justify-evenly items-start mb-12 gap-6">
          <h2 className="text-4xl  font-semibold max-w-sm leading-tight">
            WE OFFER <br /> LEADING <br /> SOLUTIONS IN
          </h2>
          <div className="flex flex-col gap-5">
            <p className="max-w-md text-sm font-semibold opacity-80">
              We provide cutting-edge IT strategies and seamless digital
              integration to help your business thrive in the modern era. We
              provide cutting-edge IT strategies and seamless digital
              integration to help your business thrive in the modern era.
            </p>
            <button className="active:scale-105  duration-200 transition-all cursor-pointer w-fit bg-[#f3e3d3] text-black px-5 py-1 rounded-full group flex items-center gap-2 font-bold hover:bg-white">
              Let's Talk{" "}
              <span className="rounded-full  group-hover:rotate-180 group-hover:translate-x-2 group-hover:scale-105 duration-300 transition-all p-3 text-white bg-black">
                <BsArrowUpRight size={20} />
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Primary Card */}
          <div className="bg-[#121212] text-white p-8 rounded-2xl flex flex-col gap-4 shadow-2xl">
            <BiCodeAlt className="text-4xl text-purple-400" />
            <h3 className="font-bold text-lg leading-tight uppercase">
              Web Design & Development
            </h3>
            <p className="text-xs text-gray-400 italic">Included with:</p>
            <ul className="text-xs space-y-2 opacity-70">
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-purple-500" /> Custom Layouts
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-purple-500" /> Responsive Design
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-purple-500" /> SEO Optimization
              </li>
            </ul>
            <button className="mt-4 bg-purple-600 w-full py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              Details
            </button>
          </div>

          {/* Icon Only Cards */}
          {[
            { icon: <BiLayer />, title: "Business Solution" },
            { icon: <BiMobileAlt />, title: "App Development" },
            { icon: <BiShieldAlt />, title: "Systems & Security" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-black/20 backdrop-blur-sm hover:bg-black/30 transition p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 border border-black/10"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-sm uppercase">{item.title}</h3>
              <button className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white mt-4">
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadingSolutionSection;

import React from "react";
import { BiCodeAlt, BiLayer, BiMobileAlt, BiShieldAlt } from "react-icons/bi";
import { BsArrowUpRight, BsFillTerminalFill } from "react-icons/bs";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import SingleCardInTeamSection from "./SingleCardInTeamSection";
import { cardsData } from "../Data/ServiceCardData";

const LeadingSolutionSection = () => {
  return (
    <section className="px-6  mt-10 mb-10">
      <div className="ServiceCardDiv relative rounded-2xl p-12 ">
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

        <div className="ServicesCards w-full  flex h-[60vh]  gap-5 justify-between items-center">
          {cardsData.map((card, index) => (
            <SingleCardInTeamSection
              key={index}
              cardData={card}
              index={index}
              activeIndex={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadingSolutionSection;

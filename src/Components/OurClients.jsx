import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const OurClients = () => {
  return (
    <div
      id="Clients"
      className="w-full flex justify-center items-center flex-col min-h-screen bg-[#0B0B0B]"
    >
      <button className="active:scale-105  duration-200 transition-all cursor-pointer w-fit bg-[#f3e3d3] text-black px-5 py-1 rounded-full group flex items-center gap-2 font-bold hover:bg-white">
        Our Clients
        <span className="rounded-full  group-hover:rotate-180 group-hover:translate-x-2 group-hover:scale-105 duration-300 transition-all p-3 text-white bg-black">
          <BsArrowUpRight size={20} />
        </span>
      </button>
      <h1 className="md:text-6xl text-4xl font-bold mt-8">
        GET ANOTHER <br /> LEVEL WITH US
      </h1>
      <p className="max-w-2xl text-center mt-6 text-sm font-semibold opacity-80">
        We are proud to have worked with a diverse range of clients across
        various industries, delivering innovative solutions that drive success
        and growth.
      </p>
      <div className="md:-mr-16 mt-5 md:mt-10">
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src="./Clients.png"
          alt="Clients Image EasyPaisa jazzcash etc"
        />
      </div>
    </div>
  );
};

export default OurClients;

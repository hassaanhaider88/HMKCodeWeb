import { MdWhatsapp } from "react-icons/md";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex  items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
        <img
          src="./HMKCodeWebLogo.png"
          className="h-15 cursor-pointer w-30"
          alt="HMK CodeWeb Logo"
          title="HMK CodeWeb Logo"
        />
      </div>
      <div className="hidden md:flex gap-12 text-md font-medium text-gray-300">
        <a href="#Footer" className="hover:text-[#07BEC8] font-semibold">
          About us
        </a>
        <a href="#Services" className="hover:text-[#07BEC8] font-semibold">
          What We Do
        </a>
        <a href="#Clients" className="hover:text-[#07BEC8] font-semibold">
          Our Results
        </a>
        <a href="#Projects" className="hover:text-[#07BEC8] font-semibold">
          Insights
        </a>
        <a href="#Faqs" className="hover:text-[#07BEC8] font-semibold">
          Contact
        </a>
      </div>
      <button
        onClick={() => window.open("https://wa.me/923437117831?text=Hello%20HMK%20CodeWeb!%20I%20would%20like%20to%20inquire%20about%20your%20services.%20%20Am%20Here%20To%20Discuss%20My%20Project%20And%20How%20You%20Can%20Help%20Me.%20Looking%20Forward%20To%20Hearing%20From%20You!")}
        className="relative hidden md:flex cursor-pointer bg-[#f3e3d3] text-black px-4 py-1 rounded-full group  items-center gap-2 font-bold hover:bg-white transition-colors"
      >
        Contact Us
        <span className="rounded-full group-hover:rotate-360 group-hover:translate-x-2 group-hover:scale-105 duration-300 transition-all p-3 text-white bg-black group-hover:bg-green-500 ">
          <MdWhatsapp size={20} className="font-bold" />
        </span>
      </button>
      <button
        onClick={() => setMenuOpen(!MenuOpen)}
        className="text-3xl duration-300 transition-all cursor-pointer md:hidden block"
      >
        {!MenuOpen ? <RxHamburgerMenu /> : <RxCross1 />}
      </button>
      {/* mobile Div menu */}
      {MenuOpen ? (
        <div className="flex flex-col gap-5 right-0 px-10 py-20 z-20 absolute bg-[#000000de] top-20 w-full h-full">
          <div className="flex flex-col gap-6 text-sm font-medium text-gray-300">
            <a href="#Footer" className="hover:text-[#07BEC8] font-semibold">
              About us
            </a>
            <a href="#Services" className="hover:text-[#07BEC8] font-semibold">
              What We Do
            </a>
            <a href="#Clients" className="hover:text-[#07BEC8] font-semibold">
              Our Results
            </a>
            <a href="#Projects" className="hover:text-[#07BEC8] font-semibold">
              Insights
            </a>
            <a href="#Faqs" className="hover:text-[#07BEC8] font-semibold">
              Contact
            </a>
          </div>
          <button
            onClick={() => window.open("wa.me/923437117831")}
            className="relative w-fit cursor-pointer bg-[#f3e3d3] text-black px-4 py-1 rounded-full group flex items-center gap-2 font-bold hover:bg-white transition-colors"
          >
            Contact Us
            <span className="rounded-full group-hover:rotate360 group-hover:translate-x-2 group-hover:scale-105 duration-300 transition-all p-3 text-white bg-black">
              <MdWhatsapp
                size={20}
                className="font-bold group-hover:scale-110"
              />
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;

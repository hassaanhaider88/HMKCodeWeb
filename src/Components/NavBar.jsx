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
        <a href="#" className="hover:text-[#07BEC8] font-semibold">
          About us
        </a>
        <a href="#" className="hover:text-[#07BEC8] font-semibold">
          What We Do
        </a>
        <a href="#" className="hover:text-[#07BEC8] font-semibold">
          Our Results
        </a>
        <a href="#" className="hover:text-[#07BEC8] font-semibold">
          Insights
        </a>
        <a href="#" className="hover:text-[#07BEC8] font-semibold">
          Contact
        </a>
      </div>
      <button className="relative cursor-pointer bg-[#f3e3d3] text-black px-4 py-1 rounded-full group flex items-center gap-2 font-bold hover:bg-white transition-colors">
        Try It Free
        <span className="rounded-full group-hover:rotate-180 group-hover:ml-2 duration-300 transition-all p-3 text-white bg-black">
          <BsArrowUpRight size={20} className="font-bold" />
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
            <a href="#" className="hover:text-purple-400">
              About us
            </a>
            <a href="#" className="hover:text-purple-400">
              What We Do
            </a>
            <a href="#" className="hover:text-purple-400">
              Our Results
            </a>
            <a href="#" className="hover:text-purple-400">
              Insights
            </a>
            <a href="#" className="hover:text-purple-400">
              Contact
            </a>
          </div>
          <button className="relative cursor-pointer bg-[#f3e3d3] text-black px-4 py-1 rounded-full group flex items-center gap-2 font-bold hover:bg-white transition-colors">
            Try It Free
            <span className="rounded-full group-hover:rotate-180 group-hover:ml-2 duration-300 transition-all p-3 text-white bg-black">
              <BsArrowUpRight size={20} className="font-bold" />
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

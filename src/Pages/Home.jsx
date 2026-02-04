import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import {
  FiArrowRight,
  FiArrowLeft,
  FiPlus,
  FiMinus,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiCheckCircle,
} from "react-icons/fi";
import {
  BiCodeAlt,
  BiLayer,
  BiMobileAlt,
  BiShieldAlt,
  BiChevronDown,
} from "react-icons/bi";

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* --- NAVIGATION --- */}
      <nav className="flex  items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <div className="w-8 h-8 bg-purple-600 rounded-lg rotate-12"></div>
          Innotec
        </div>
        <div className="hidden md:flex gap-12 text-sm font-medium text-gray-300">
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
        <button className="bg-[#f3e3d3] hidden md:flex text-black px-10 py-4 rounded-full font-bold text-sm">
          Try It Free
        </button>
        <button
          onClick={() => setMenuOpen(!MenuOpen)}
          className="text-3xl duration-300 transition-all cursor-pointer md:hidden block"
        >
          {!MenuOpen ? <RxHamburgerMenu /> : <RxCross1 />}
        </button>
        {/* mobile Div menu */}
        {
            MenuOpen ? <div className="flex flex-col gap-5 right-0 px-10 py-20 z-20 absolute bg-[#000000de] top-20 w-full h-full">
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
          <button className="bg-[#f3e3d3] w-fit flex text-black px-10 py-4 rounded-full font-bold text-sm">
            Try It Free
          </button>
        </div> : ""
        }
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-extrabold leading-[1.1] mb-8">
            YOUR <span className="text-purple-500 italic">PARTNER</span> FOR{" "}
            <br />
            COMPREHENSIVE <span className="text-gray-500">IT SOLUTIONS</span>
          </h1>
          <div className="relative max-w-md group mb-10">
            <input
              type="text"
              placeholder="Search your choice"
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-full py-4 px-6 outline-none focus:border-purple-500 transition-all"
            />
            <button className="absolute right-2 top-2 bg-[#f3e3d3] text-black px-6 py-2 rounded-full flex items-center gap-2 font-bold hover:bg-white transition-colors">
              Let's Talk <FiArrowRight />
            </button>
          </div>
          <div className="flex gap-10 text-gray-400">
            <div>
              <p className="text-2xl font-bold text-white">100+</p>
              <p className="text-xs uppercase tracking-widest">
                Total Projects
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">25k+</p>
              <p className="text-xs uppercase tracking-widest">
                Client Support
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4.8/5</p>
              <p className="text-xs uppercase tracking-widest">Reviews</p>
            </div>
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

      {/* --- SERVICES GRADIENT BOX --- */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="bg-linear-to-r from-purple-600 via-purple-400 to-[#fde68a] rounded-tl-[60px] rounded-br-[60px] p-12 text-black">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
            <h2 className="text-4xl font-black max-w-sm leading-tight">
              WE OFFER LEADING SOLUTIONS IN
            </h2>
            <p className="max-w-md text-sm font-semibold opacity-80">
              We provide cutting-edge IT strategies and seamless digital
              integration to help your business thrive in the modern era.
            </p>
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
                  <FiCheckCircle className="text-purple-500" /> Responsive
                  Design
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

      {/* --- PORTFOLIO SECTION --- */}
      <section className="bg-[#f8f8f8] text-black py-24 rounded-tl-[100px] rounded-br-[100px]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Portfolio
              </span>
              <h2 className="text-4xl font-black mt-4 leading-tight">
                EXPLORE OUR WORK THAT <br /> WE'RE PROUDLY PRESENTING
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
                <FiArrowLeft size={24} />
              </button>
              <button className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center hover:scale-105 transition">
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gray-200 h-112.5 rounded-[40px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
                  className="w-full h-full object-cover"
                  alt="Project"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">PLATFORM-X</h3>
              <p className="text-gray-500 leading-relaxed max-w-md">
                A revolutionary enterprise platform designed to synchronize
                cross-departmental data with real-time AI analytics.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="text-3xl font-black">+40%</p>
                  <p className="text-xs uppercase text-gray-400 font-bold">
                    ROI
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="text-3xl font-black">+30%</p>
                  <p className="text-xs uppercase text-gray-400 font-bold">
                    Speed
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="text-3xl font-black">+25%</p>
                  <p className="text-xs uppercase text-gray-400 font-bold">
                    Growth
                  </p>
                </div>
              </div>
              <button className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-full font-bold">
                Explore Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="max-w-4xl mx-auto px-8 py-24 text-center">
        <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">
          Have Info?
        </span>
        <h2 className="text-4xl font-black mt-2 mb-16">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-4 text-left">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`border border-gray-800 rounded-2xl p-6 cursor-pointer transition-all ${openFaq === i ? "bg-[#1a1a1a] border-purple-500" : "bg-[#121212]"}`}
              onClick={() => setOpenFaq(openFaq === i ? 0 : i)}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold">
                  What kind of IT solutions do you provide?
                </span>
                {openFaq === i ? (
                  <FiMinus className="text-purple-500" />
                ) : (
                  <FiPlus />
                )}
              </div>
              {openFaq === i && (
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  We offer a full spectrum of services including custom software
                  development, cloud infrastructure, cybersecurity audits, and
                  strategic digital transformation consulting.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-linear-to-r from-purple-900 to-[#121212] py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-6">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
              Innotec
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Empowering businesses through innovation and dedicated technology
              solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3 text-sm text-gray-400">
              <p className="text-white font-bold mb-2">Company</p>
              <a href="#" className="block hover:text-white">
                About
              </a>
              <a href="#" className="block hover:text-white">
                Services
              </a>
              <a href="#" className="block hover:text-white">
                Portfolio
              </a>
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="text-white font-bold mb-2">Contact</p>
              <p>hello@innotec.io</p>
              <p>+1 234 567 890</p>
            </div>
          </div>
          <div className="flex md:justify-end gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition cursor-pointer">
              <FiInstagram />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition cursor-pointer">
              <FiFacebook />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition cursor-pointer">
              <FiLinkedin />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

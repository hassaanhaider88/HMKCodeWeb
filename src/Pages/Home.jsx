import { useState } from "react";
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
import { BiCodeAlt, BiLayer, BiMobileAlt, BiShieldAlt } from "react-icons/bi";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import OurTeamSection from "../Components/OurTeamSection";
import LeadingSolutionSection from "../Components/LeadingSolutionSection";

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* --- NAVIGATION --- */}
      <NavBar />

      {/* --- HERO SECTION --- */}
      <HeroSection />
      {/* Our Teams */}
      <OurTeamSection />
      {/* --- SERVICES Leading Solutions BOX --- */}
      <LeadingSolutionSection/>
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

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
import OurClients from "../Components/OurClients";
import WorkSection from "../Components/OurWorkingSection";
import OurTestimonials from "../Components/OurTestimonials";
import WhyColloborateSection from "../Components/WhyColloborateSection";

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
      <LeadingSolutionSection />
      {/* Our Clients Section */}
      <OurClients />
      {/* /* --- OUR WORK SECTION --- */}
      <WorkSection />
      {/* Our tesimonials goes her */}
      <OurTestimonials />
      {/* why colloborate with us  */}
      <WhyColloborateSection/>
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

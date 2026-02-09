import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { BiCodeAlt, BiLayer, BiMobileAlt, BiShieldAlt } from "react-icons/bi";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import OurTeamSection from "../Components/OurTeamSection";
import LeadingSolutionSection from "../Components/LeadingSolutionSection";
import OurClients from "../Components/OurClients";
import WorkSection from "../Components/OurWorkingSection";
import OurTestimonials from "../Components/OurTestimonials";
import WhyColloborateSection from "../Components/WhyColloborateSection";
import FAQsSection from "../Components/FAQsSection";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white  font-sans">
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
      <WhyColloborateSection />
      {/* --- FAQ SECTION --- */}
      <FAQsSection />

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
};

export default HomePage;

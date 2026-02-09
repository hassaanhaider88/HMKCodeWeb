import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative px-20 py-20 overflow-visible">
      {/* CLIPPED BACKGROUND LAYER */}
      <div className="FooterClipPath absolute inset-0 bg-linear-to-r from-purple-900 to-[#121212] z-0"></div>
      {/* CONTENT ABOVE SHAPE */}
      <div className="relative z-10 flex justify-between items-center">
        <div className="Content flex gap-20 w-1/2 md:w-full">
          <div className="Content flex  gap-20  w-1/2 md:w-full">
            <div className="Main">
              <h2 className="text-3xl font-bold mb-4">Mneu</h2>
              <ul className="text-lg">
                <li className="mb-2 cursor-pointer">Home</li>
                <li className="mb-2 cursor-pointer">About Us</li>
                <li className="mb-2 cursor-pointer">Services</li>
                <li className="mb-2 cursor-pointer">Contact Us</li>
              </ul>
            </div>
            <div className="Support">
              <h2 className="text-3xl font-bold mb-4">Support</h2>
              <ul className="text-lg">
                <li className="mb-2 cursor-pointer">Help Center</li>
                <li className="mb-2 cursor-pointer">Terms of Service</li>
                <li className="mb-2 cursor-pointer">Privacy Policy</li>
                <li className="mb-2 cursor-pointer">Contact Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl cursor-pointer font-bold flex gap-5 mt-10 justify-center items-center relative w-fit  text-white">
        <FaFacebookF
          className="hover:text-blue-500 duration-300 hover:-translate-y-3 transition-all"
          size={50}
        />
        <FiYoutube
          className="hover:text-red-500 duration-300 hover:-translate-y-3 transition-all"
          size={50}
        />
        <FaLinkedinIn
          className="hover:text-blue-400 duration-300 hover:-translate-y-3 transition-all"
          size={50}
        />
      </h1>

      {/* IMAGE OUTSIDE CLIP */}
      <div className="absolute right-0 bottom-8 z-20 w-[38%] flex justify-end pointer-events-none">
        <img
          src="./HassaanFooter.png"
          alt=""
          className="object-contain w-full max-h-200 translate-y-8"
        />
      </div>
    </footer>
  );
};

export default Footer;

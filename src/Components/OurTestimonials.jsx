import { FaQuoteLeft } from "react-icons/fa";
import { testimonialsData } from "../Data/TestimonialsData";
import { BiArrowBack } from "react-icons/bi";

const OurTestimonials = () => {
  return (
    <div className="w-full min-h-screen flex justify-start px-10 text-white items-center flex-col">
      {/* project heading and navigation buttons */}
      <div className="flex md:flex-row flex-col w-full justify-center gap-5 md:justify-between items-center ">
        <h2 className="text-4xl md:w-1/2 w-full font-semibold">
          HERE IS WHAT OUR <br className="hidden md:block" /> CLIENTS HAVE TO
          SAYS
        </h2>
        <div className="flex md:w-1/2 w-full gap-5 justify-end items-center">
          <button className="h-16 border-[#DFDCD7] border-2 cursor-pointer hover:scale-90 duration-300 transition-all w-16 flex justify-center items-center rounded-full ">
            <BiArrowBack size={40} color="#DFDCD7" />
          </button>
          <button className="h-16 border-[#1DDFEC] rotate-180 border-2 cursor-pointer hover:scale-95 duration-300 transition-all w-16 flex justify-center items-center rounded-full ">
            <BiArrowBack size={40} color="#1DDFEC" />
          </button>
        </div>
      </div>
      {/* all reviews goes here */}
      <div className="w-full flex my-10 gap-20 flex-wrap justify-between items-center">
        {testimonialsData.map((testimonial, index) => {
          return (
            <div key={index} className="py-4 flex w-87.5 pt-5 TestimonialCard flex-col gap-4 bg-gray-500 px-5 rounded-3xl">
              <FaQuoteLeft size={40} />
              <p className="text-md mt-3 font-semibold ">
                "{testimonial.detials}"
              </p>
              <div className="flex justify-evenly items-center py-5">
                <img
                  className="w-22 ring-2 p-1 h-22 rounded-full bg-cover"
                  src={testimonial.Img}
                  alt=""
                />
                <div>
                  <h1 className="font-semibold">{testimonial.name}</h1>
                  <p className="text-sm">{testimonial.Role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTestimonials;

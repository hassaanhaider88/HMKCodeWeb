import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowDownRight, BsFillTerminalFill } from "react-icons/bs";

const SingleCardInTeamSection = ({ cardData, index, activeIndex }) => {
  const isActive = index === activeIndex;

  return (
    <div
      className={` rounded-3xl shrink-0 w-90 bg-[#2A2D37]   px-4 py-6 cursor-pointer overflow-hidden transition-all duration-300
      ${isActive ? "bg-[#2C2B31]" : "hover:bg-[#2C2B31] group"}`}
    >
      {/* Logo + Heading */}
      <div
        className={`flex justify-start items-center gap-2 transition-all duration-300 
        ${isActive ? "flex-row" : "flex-col group-hover:flex-row"}`}
      >
        <span className="h-16 w-16 rounded-full p-3 bg-[#2A2D37] flex justify-center items-center transition-transform duration-300 group-hover:scale-110">
          <cardData.icon className="h-8 w-8" />
        </span>

        <h1 className="text-2xl font-semibold">{cardData.title}</h1>
      </div>

      {/* Description */}
      <p
        className={`text-[12px] text-gray-300 my-2 overflow-hidden transition-all duration-500
        ${
          isActive
            ? "opacity-100 max-h-40"
            : "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40"
        }`}
      >
        {cardData.description}
      </p>

      {/* List */}
      <div
        className={`text-xl overflow-hidden transition-all duration-500
        ${
          isActive
            ? "opacity-100 max-h-40"
            : "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40"
        }`}
      >
        <h1 className="text-lg">Including With</h1>
        <ul>
          {cardData.items.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-2 mt-2 items-center text-gray-200"
            >
              <AiFillCheckCircle className="text-[#1DDFEC]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="flex w-full justify-center items-center">
        <button
          onClick={() =>
            window.open(
              `https://wa.me/923437117831?text=Hello!%20I%20am%20interested%20in%20your%20${cardData.title}%20services.`,
              "_blank",
            )
          }
          className={`flex transition-all duration-300 justify-center items-center bg-[#1DDFEC] py-3 px-6 rounded-full gap-4 hover:scale-95
          ${isActive ? "mt-6" : "mt-20 group-hover:mt-6"}`}
        >
          Get Started
          <BsArrowDownRight className="transition-transform duration-300 group-hover:-rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default SingleCardInTeamSection;

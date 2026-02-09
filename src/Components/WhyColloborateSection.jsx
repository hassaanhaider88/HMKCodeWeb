import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";

const WhyColloborateSection = () => {
  return (
    <div className="w-full min-h-screen px-10 md:px-20 py-10">
      <div className="w-full OurColloborativeClipPath rounded-4xl flex justify-between items-center h-full bg-linear-to-r from-[#1DDFEC] to-[#DFDCD7]">
        <div className="w-full px-12 py-10 md:w-1/2 flex flex-col justify-start items-center">
          <h1 className="text-5xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="text-md font-semibold mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            incidunt non placeat odio maiores nesciunt sed fugit. Vel vitae ad
            quod? Itaque eius maiores iusto, error laborum eaque magni esse nisi
            ad perferendis enim, ratione et odio eum, nemo dignissimos. Dolores
            voluptatibus ducimus architecto provident quia porro ad, fuga
            praesentium sequi vel. Distinctio id itaque, reiciendis quasi
            voluptas quo dolorum!
          </p>
          <div className="box bg-white text-black mt-10 px-4 rounded-4xl py-8 flex justify-center items-center flex-col">
            <div className="flex gap-5 justify-center mt-5 items-center">
              <AiFillCheckCircle size={40} />
              <div>
                <h1 className="text-lg font-bold">Collaboration</h1>
                <p className="text-[12px]">
                  Working together to achieve common goals and share knowledge.
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-center mt-5 items-center">
              <AiFillCheckCircle size={40} />
              <div>
                <h1 className="text-lg font-bold">Collaboration</h1>
                <p className="text-[12px]">
                  Working together to achieve common goals and share knowledge.
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-center mt-5 items-center">
              <AiFillCheckCircle size={40} />
              <div>
                <h1 className="text-lg font-bold">Collaboration</h1>
                <p className="text-[12px]">
                  Working together to achieve common goals and share knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://i.pinimg.com/originals/9e/4b/9b/9e4b9b040ad791fc615a903b5cff703c.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyColloborateSection;

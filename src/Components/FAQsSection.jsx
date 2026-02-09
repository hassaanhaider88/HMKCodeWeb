import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import FAQs from "../Data/FAQsData";
import { BsArrowUpRight } from "react-icons/bs";

const FAQsSection = () => {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section id="Faqs" className="max-w-4xl flex-col gap-5 flex justify-center mx-auto px-8 py-24 text-center">
      <div className="w-full flex justify-center">
        <button className=" cursor-pointer w-fit  bg-[#f3e3d3] text-black px-4 py-1 rounded-full group flex items-center gap-2 font-bold hover:bg-white transition-colors">
          Have a question?
          <span className="rounded-full group-hover:rotate-180 group-hover:translate-x-2 group-hover:scale-105 duration-300 transition-all p-3 text-white bg-black">
            <BsArrowUpRight size={20} className="font-bold" />
          </span>
        </button>
      </div>
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
                {FAQs[i - 1]?.question || "Default Question"}
              </span>
              {openFaq === i ? (
                <FiMinus className="text-purple-500" />
              ) : (
                <FiPlus className="text-purple-500" />
              )}
            </div>
            {openFaq === i && (
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                {FAQs[i - 1]?.answer ||
                  "Default answer goes here. This is a placeholder text for the FAQ answer."}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;

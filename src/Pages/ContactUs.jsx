import { useState } from "react";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
    alert("We Have Recieved Your Message Please wait..");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    navigate("/");
  };
  return (
    <div className="w-full text-gray-100 pb-10 min-h-screen bg-[#0B0B0B] ">
      <NavBar />
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="flex flex-col items-center text-sm"
      >
        <h1 className="text-4xl font-semibold text-[#00F4FF] pb-4">
          Get in touch with us
        </h1>
        <p className="text-sm text-gray-500 text-center pb-10">
          Ready to scale your business? Let’s start the conversation.”
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 w-87.5 md:w-175">
          <div className="w-full">
            <label className="" htmlFor="name">
              Your Name
            </label>
            <input
              className="h-12 p-2 pl-4 mt-2 w-full border rounded-3xl border-gray-500/30  outline-none focus:border-[#00F4FF]"
              type="text"
              required
              placeholder="Your Name Please"
              value={FormData.name}
              onChange={(e) =>
                setFormData({ ...FormData, name: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <label className="" htmlFor="name">
              Your Email
            </label>
            <input
              className="h-12 p-2 pl-4 mt-2 w-full border rounded-3xl border-gray-500/30  outline-none focus:border-[#00F4FF]"
              type="email"
              required
              placeholder="Your Email Please"
              value={FormData.email}
              onChange={(e) =>
                setFormData({ ...FormData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mt-6 w-87.5 md:w-175">
          <label className="" htmlFor="name">
            Message
          </label>
          <textarea
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded-2xl resize-none outline-none focus:border-[#00F4FF] "
            required
            placeholder="Your Message Please"
            value={FormData.message}
            onChange={(e) =>
              setFormData({ ...FormData, message: e.target.value })
            }
          ></textarea>

          <button
            type="submit"
            className="mt-5 cursor-pointer bg-[#00F4FF] w-full  text-white h-12 hover:bg-[#00f2ffcb] px-4 rounded active:scale-95 transition"
          >
            Let's Chat
          </button>
        </div>
      </form>
    </div>
  );
}

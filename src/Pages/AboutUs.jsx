import NavBar from "../Components/NavBar";

export default function AboutUs() {
  return (
    <div className="w-full pb-10 min-h-screen bg-[#0B0B0B] ">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <NavBar />
      <section className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-10 max-md:px-4">
        <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://i.pinimg.com/originals/02/61/96/026196c12bf94ebae9533c5d06e20bfe.jpg"
            alt=""
          />
          <div
            onClick={() =>
              window.open("https://chat.whatsapp.com/JhqCwKwV0B5LZrcPfWOSsM")
            }
            title="On WhatsApp"
            className="flex select-none items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white hover:scale-95 duration-200 cursor-pointer active:scale-105 p-4 rounded-xl"
          >
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
              />
              <div className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                90+
              </div>
            </div>
            <p className="text-sm font-medium text-slate-800">
              Join our developer community
            </p>
          </div>
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            What we do?
          </h1>
          <div className="w-24  h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
          <p className="mt-3">
            We are a results-driven development team focused on building modern,
            scalable digital solutions using the MERN stack and intelligent AI
            integrations. Our mission is simple: to turn ideas into reliable,
            high-performance web applications that help businesses grow and
            operate more efficiently.
          </p>{" "}
          <p className="mt-3">
            Over time, we’ve worked with clients across different industries,
            delivering secure payment integrations, complete backend systems,
            and full-scale web platforms. From integrating international payment
            gateways like bKash to building fully functional admin dashboards
            for eCommerce businesses, we focus on writing clean, maintainable
            code that performs under real-world conditions. We don’t just build
            features. We build systems that make business operations smoother
            and smarter.
          </p>{" "}
          <p className="mt-3">
            Our experience also extends to education platforms where we’ve
            developed structured systems that manage student data, track
            progress, verify certificates publicly, and give administrators
            complete control over courses and enrollments. Every project we take
            on is approached with clarity, careful planning, and attention to
            long-term scalability.
          </p>{" "}
          <p className="mt-3">
            {" "}
            What sets us apart is our practical mindset. We understand business
            logic, user experience, and technical architecture equally well.
            Whether it’s backend engineering, cloud deployment, or AI-powered
            automation, we aim to deliver solutions that are not only functional
            but future-ready.
          </p>{" "}
        </div>
      </section>
    </div>
  );
}

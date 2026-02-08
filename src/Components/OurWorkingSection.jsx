export default function WorkSection() {
  return (
    <div className="w-full py-50 bg-[#0B0B0B]">
        <div className="w-full min-h-[300vh] bg-[#ecc3c3]">
        <div className=" py-20 px-4 flex justify-center">
      <div className="work-wrapper w-full  p-10 md:p-14 relative">
        <div className="grid mt-10 md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            <span className="bg-[#F2DFC8] text-black px-5 py-2 rounded-full text-sm font-medium inline-block mb-6">
              Our Work
            </span>

            <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
              EXPLORE OUR WORK
              <br />
              THAT WE’RE PROUDLY
              <br />
              PRESENTING TO YOU.
            </h2>
          </div>

          {/* RIGHT SIDE TEXT */}
          <p className="text-white/80 text-sm md:text-base leading-relaxed mt-2">
            Dive into our portfolio, a carefully curated collection of projects
            that demonstrates our prowess in crafting tailored solutions for
            diverse industries. Each showcase is a testament to our relentless
            pursuit of excellence, where innovation meets practicality in every
            design and implementation. Explore the depth of our work, and
            witness how we’ve consistently propelled big-named brands to new
            heights through strategic and cutting-edge solutions.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="flex md:flex-row flex-col w-full gap-5 mb-5 py-10 md:h-96 h-full justify-between">
          <div className="LeftImages w-full md:w-1/2 flex h-full  gap-4">
            <div className="firtImgeSinlge w-full md:w-1/2 h-full ImgOne">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://i.pinimg.com/originals/9e/4b/9b/9e4b9b040ad791fc615a903b5cff703c.jpg"
                alt=""
              />
            </div>
            <div className="secondImageDouble fullw-full md:w-1/2 flex flex-col gap-4">
              <img
                className="w-full h-[75%] object-cover rounded-2xl"
                src="https://i.pinimg.com/originals/e7/48/fa/e748fa20e132f88533fa7d422835e8b2.jpg"
                alt=""
              />
              <img
                className="w-full h-[25%] object-cover rounded-2xl"
                src="https://i.pinimg.com/originals/be/51/b5/be51b5d5d14d8f51d2a14f7d4be5ce62.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="RightImages   h-full ImgFourw-full md:w-1/2">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src="https://i.pinimg.com/originals/ca/fa/f7/cafaf7ea57a4f85cfc4abdcf22abef35.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

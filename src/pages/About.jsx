import profileImage from "../assets/my pic.jpeg";

import {
  FaGithub,
  FaReact,
  FaPython,
  FaBrain,
} from "react-icons/fa";

function About() {

  return (

    <section className="min-h-[110vh] bg-[#151313] text-white px-4 sm:px-8 md:px-20 pt-[120px] md:pt-[150px] pb-32 overflow-hidden">

      {/* MOBILE NAVBAR SPACER */}
      <div className="h-[70px] sm:h-[90px] md:hidden"></div>

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-24 items-center md:relative md:top-24">

        {/* LEFT */}
        <div className="translate-x-0 md:translate-x-12 pt-16 sm:pt-20 md:pt-0">

          <p className="text-gray-300 text-xl sm:text-2xl mb-5 md:mb-7">

            Hello, I'm Washim,

          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] md:leading-[1.08] text-[#B9C8E3] mb-8 break-words">

            Frontend <br />
            Developer

          </h1>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end pt-6 md:pt-10">

          <div className="w-full max-w-[420px] h-[300px] sm:h-[340px] md:h-[380px] rounded-[28px] md:rounded-[35px] overflow-hidden bg-[#B9C8E3] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

            <img
              src={profileImage}
              alt="Washim Akhtar"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

      {/* ABOUT SECTION */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-20 translate-x-0 md:translate-x-10 md:relative md:top-19">

        {/* TITLE */}
        <div className="flex items-center gap-4 md:gap-8 mb-8 md:mb-10">

          <h2 className="text-4xl sm:text-5xl font-black text-[#B9C8E3]">

            about

          </h2>

          <div className="flex-1 h-[2px] bg-[#6E7688]"></div>

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-lg sm:text-[20px] md:text-[22px] leading-[2] md:leading-[2.6] max-w-6xl mt-4 md:mt-6 break-words">

          I’m a passionate Frontend Developer focused on building
          responsive, modern and premium web experiences using
          React, Tailwind CSS and JavaScript. I enjoy creating
          clean UI designs, smooth user experiences and scalable
          frontend architectures while continuously learning new
          technologies and improving my development skills.

        </p>

        {/* SKILLS */}
        <div className="grid md:grid-cols-3 gap-14 md:gap-16 mt-16 md:mt-20">

          {/* FRONTEND */}
          <div>

            <div className="flex items-center gap-4 mb-5">

              <FaReact className="text-4xl md:text-5xl text-cyan-400 flex-shrink-0" />

              <h3 className="text-3xl md:text-4xl font-bold">

                Front-End

              </h3>

            </div>

            <p className="text-gray-400 text-base md:text-lg border-b border-gray-500 inline-block pb-2">

              80+ Hours Experience

            </p>

          </div>

          {/* PYTHON */}
          <div>

            <div className="flex items-center gap-4 mb-5">

              <FaPython className="text-4xl md:text-5xl text-yellow-400 flex-shrink-0" />

              <h3 className="text-3xl md:text-4xl font-bold">

                Python

              </h3>

            </div>

            <p className="text-gray-400 text-base md:text-lg border-b border-gray-500 inline-block pb-2">

              4 Years Experience

            </p>

          </div>

          {/* MACHINE LEARNING */}
          <div>

            <div className="flex items-center gap-4 mb-5">

              <FaBrain className="text-4xl md:text-5xl text-pink-400 flex-shrink-0" />

              <h3 className="text-3xl md:text-4xl font-bold break-words">

                Machine Learning

              </h3>

            </div>

            <p className="text-gray-400 text-base md:text-lg border-b border-gray-500 inline-block pb-2">

              120+ Hours Experience

            </p>

          </div>

        </div>

      </div>

      {/* GITHUB ICON */}
      <a
        href="https://github.com/Washimakhtar786"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 text-white text-3xl md:text-4xl hover:scale-110 transition duration-300 z-40"
      >

        <FaGithub />

      </a>

    </section>
  );
}

export default About;
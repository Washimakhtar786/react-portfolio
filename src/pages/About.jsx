import profileImage from "../assets/my pic.jpeg";

import {
  FaGithub,
  FaReact,
  FaPython,
  FaBrain,
} from "react-icons/fa";

function About() {

  return (

    <section className="min-h-screen bg-[#151313] text-white px-8 md:px-20 py-32 overflow-hidden">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT */}
        <div className="translate-x-12">

          <p className="text-gray-300 text-2xl mb-7">

            Hello, I'm Washim,

          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-[1.08] text-[#B9C8E3] mb-8">

            Frontend <br />
            Developer

          </h1>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">

          <div className="w-[420px] h-[520px] rounded-[35px] overflow-hidden bg-[#B9C8E3] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

            <img
              src={profileImage}
              alt="Washim Akhtar"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

      {/* ABOUT SECTION */}
      <div className="max-w-7xl mx-auto mt-20 translate-x-10">

        {/* TITLE */}
        <div className="flex items-center gap-8 mb-10">

          <h2 className="text-5xl font-black text-[#B9C8E3]">

            about

          </h2>

          <div className="flex-1 h-[2px] bg-[#6E7688]"></div>

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-[22px] leading-[2.6] max-w-6xl mt-6">

          I’m a passionate Frontend Developer focused on building
          responsive, modern and premium web experiences using
          React, Tailwind CSS and JavaScript. I enjoy creating
          clean UI designs, smooth user experiences and scalable
          frontend architectures while continuously learning new
          technologies and improving my development skills.

        </p>

        {/* SKILLS */}
        <div className="grid md:grid-cols-3 gap-16 mt-20">

          {/* FRONTEND */}
          <div>

            <div className="flex items-center gap-4 mb-5">

              <FaReact className="text-5xl text-cyan-400" />

              <h3 className="text-4xl font-bold">

                Front-End

              </h3>

            </div>

            <p className="text-gray-400 text-lg border-b border-gray-500 inline-block pb-2">

              80+ Hours Experience

            </p>

          </div>

          {/* PYTHON */}
          <div>

            <div className="flex items-center gap-4 mb-5">

              <FaPython className="text-5xl text-yellow-400" />

              <h3 className="text-4xl font-bold">

                Python

              </h3>

            </div>

            <p className="text-gray-400 text-lg border-b border-gray-500 inline-block pb-2">

              4 Years Experience

            </p>

          </div>

          {/* MACHINE LEARNING */}
          <div>

            <div className="flex items-center gap-4 mb-5">

              <FaBrain className="text-5xl text-pink-400" />

              <h3 className="text-4xl font-bold">

                Machine Learning

              </h3>

            </div>

            <p className="text-gray-400 text-lg border-b border-gray-500 inline-block pb-2">

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
        className="fixed top-6 right-6 text-white text-4xl hover:scale-110 transition duration-300 z-50"
      >

        <FaGithub />

      </a>

    </section>
  );
}

export default About;
import profileImage from "../assets/my pic.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCheck,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Home() {

  return (

    <section className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 opacity-20">

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#ffffff10,transparent_40%)]"></div>

      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] items-center min-h-screen gap-10 pt-28">

          {/* LEFT SIDE */}
          <div className="flex justify-center lg:justify-start">

            <div className="space-y-10 ml-12 md:ml-20 lg:ml-28">

              {/* SMALL TITLE */}
              <div className="translate-x-10">

                <h2 className="text-5xl md:text-6xl font-black tracking-tight">

                  Washim
                  <span className="text-gray-400">®</span>

                </h2>

              </div>

              {/* MAIN HEADING */}
              <div className="translate-x-10">

                <h1 className="text-6xl md:text-8xl font-black leading-[0.92] tracking-tight">

                  Portfolio
                  <br />
                  Website

                </h1>

              </div>

              {/* FEATURES */}
              <div className="space-y-5 pt-2 translate-x-10">

                <div className="flex items-center gap-4 text-gray-300 text-xl">

                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">

                    <FaCheck className="text-sm" />

                  </div>

                  <p>Desktop, Tablet & Mobile</p>

                </div>

                <div className="flex items-center gap-4 text-gray-300 text-xl">

                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">

                    <FaCheck className="text-sm" />

                  </div>

                  <p>Light & Dark Mode</p>

                </div>

                <div className="flex items-center gap-4 text-gray-300 text-xl">

                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">

                    <FaCheck className="text-sm" />

                  </div>

                  <p>Clean and Modern Design</p>

                </div>

                <div className="flex items-center gap-4 text-gray-300 text-xl">

                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">

                    <FaCheck className="text-sm" />

                  </div>

                  <p>Modern React Architecture</p>

                </div>

              </div>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-5 pt-6 translate-x-10">

                <a
                  href="https://github.com/Washimakhtar786"
                  target="_blank"
                  rel="noreferrer"
                  className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >

                  <FaGithub size={24} />

                </a>

                <a
                  href="https://www.linkedin.com/in/washim-akhter-563721361"
                  target="_blank"
                  rel="noreferrer"
                  className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >

                  <FaLinkedin size={24} />

                </a>

                <a
                  href="#"
                  className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >

                  <FaTwitter size={24} />

                </a>

                <a
                  href="mailto:washim@example.com"
                  className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >

                  <MdEmail size={24} />

                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center">

            {/* GLOW */}
            <div className="absolute w-[420px] h-[420px] bg-white/5 rounded-full blur-3xl"></div>

            {/* LAPTOP CONTAINER */}
            <div className="relative rotate-[-9deg] hover:rotate-[-5deg] transition duration-500">

              {/* SCREEN */}
              <div className="bg-[#ECECEC] rounded-[28px] border-[9px] border-[#2A2A2A] shadow-[0_30px_90px_rgba(255,255,255,0.08)] overflow-hidden w-[560px] md:w-[620px] max-w-full">

                {/* TOP MENU */}
                <div className="flex justify-center py-4 bg-[#F7F7F7] border-b border-gray-300">

                  <div className="bg-black text-white px-7 py-2 rounded-full text-sm font-semibold flex gap-5">

                    <span>Home</span>
                    <span>Projects</span>
                    <span>About</span>
                    <span>Contact</span>

                  </div>

                </div>

                {/* SCREEN CONTENT */}
                <div className="relative p-8 md:p-12 text-black min-h-[420px]">

                  {/* MAIN TEXT */}
                  <h1 className="text-5xl md:text-7xl font-black leading-[0.88] tracking-tight">

                    Websites&
                    <br />
                    Branding

                  </h1>

                  {/* BUTTON */}
                  <button className="absolute top-10 right-8 border border-gray-300 px-5 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">

                    SCROLL DOWN ↓

                  </button>

                  {/* LEFT BOTTOM */}
                  <div className="absolute bottom-8 left-8">

                    <p className="text-sm font-bold mb-1">

                      Let’s Talk

                    </p>

                    <p className="text-gray-500 text-sm">

                      hello@washim.co

                    </p>

                  </div>

                  {/* RIGHT TEXT */}
                  <div className="absolute bottom-8 right-8 max-w-[220px] text-gray-500 text-sm leading-7">

                    Hello, I’m washim, an online product
                    designer focusing on brand identity,
                    advertising, and no-code instruments.

                  </div>

                </div>

              </div>

              {/* LAPTOP BASE */}
              <div className="w-[620px] md:w-[680px] max-w-full h-7 bg-[#BDBDBD] rounded-b-[30px] blur-[1px] mx-auto"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
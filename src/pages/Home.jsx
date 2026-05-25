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

    <section className="bg-black text-white relative">

      {/* MOBILE NAVBAR SPACER */}
      <div className="h-[90px] md:h-0"></div>

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 opacity-20">

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#ffffff10,transparent_40%)]"></div>

      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] items-start lg:items-center min-h-screen gap-16 pt-10 md:pt-28 pb-14">

          {/* LEFT SIDE */}
          <div className="flex justify-center lg:justify-start">

            <div className="space-y-8 w-full max-w-[520px] ml-0 md:ml-20 lg:ml-28">

              {/* SMALL TITLE */}
              <div className="md:translate-x-10">

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">

                  Washim
                  <span className="text-gray-400">®</span>

                </h2>

              </div>

              {/* MAIN HEADING */}
              <div className="md:translate-x-10">

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.92] tracking-tight">

                  Portfolio
                  <br />
                  Website

                </h1>

              </div>

              {/* FEATURES */}
              <div className="space-y-4 pt-2 md:translate-x-10">

                <div className="flex items-center gap-4 text-gray-300 text-base sm:text-lg md:text-xl">

                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">

                    <FaCheck className="text-sm" />

                  </div>

                  <p>Desktop, Tablet & Mobile</p>

                </div>

                <div className="flex items-center gap-4 text-gray-300 text-base sm:text-lg md:text-xl">

                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">

                    <FaCheck className="text-sm" />

                  </div>

                  <p>Light & Dark Mode</p>

                </div>

                <div className="flex items-center gap-4 text-gray-300 text-base sm:text-lg md:text-xl">

                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">

                    <FaCheck className="text-sm" />

                  </div>

                  <p>Clean and Modern Design</p>

                </div>

                <div className="flex items-center gap-4 text-gray-300 text-base sm:text-lg md:text-xl">

                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">

                    <FaCheck className="text-sm" />

                  </div>

                  <p>Modern React Architecture</p>

                </div>

              </div>

              {/* SOCIAL ICONS */}
              <div className="flex flex-wrap items-center gap-4 pt-6 md:translate-x-10">

                <a
                  href="https://github.com/Washimakhtar786"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >

                  <FaGithub size={22} />

                </a>

                <a
                  href="https://www.linkedin.com/in/washim-akhter-563721361"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >

                  <FaLinkedin size={22} />

                </a>

                <a
                  href="#"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >

                  <FaTwitter size={22} />

                </a>

                <a
                  href="mailto:washim@example.com"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >

                  <MdEmail size={22} />

                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center mt-4 lg:mt-0">

            {/* GLOW */}
            <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] bg-white/5 rounded-full blur-3xl"></div>

            {/* LAPTOP CONTAINER */}
            <div className="relative lg:rotate-[-9deg] lg:hover:rotate-[-5deg] transition duration-500 w-full flex justify-center">

              {/* SCREEN */}
              <div className="bg-[#ECECEC] rounded-[20px] md:rounded-[28px] border-[7px] md:border-[9px] border-[#2A2A2A] shadow-[0_30px_90px_rgba(255,255,255,0.08)] overflow-hidden w-full max-w-[620px]">

                {/* TOP MENU */}
                <div className="flex justify-center py-3 md:py-4 bg-[#F7F7F7] border-b border-gray-300">

                  <div className="bg-black text-white px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold flex gap-3 sm:gap-5">

                    <span>Home</span>
                    <span>Projects</span>
                    <span>About</span>
                    <span>Contact</span>

                  </div>

                </div>

                {/* SCREEN CONTENT */}
                <div className="relative p-5 sm:p-7 md:p-12 text-black min-h-[360px] md:min-h-[420px]">

                  {/* MAIN TEXT */}
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.88] tracking-tight">

                    Websites&
                    <br />
                    Branding

                  </h1>

                  {/* BUTTON */}
                  <button className="mt-6 md:absolute md:top-10 md:right-8 border border-gray-300 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-black hover:text-white transition">

                    SCROLL DOWN ↓

                  </button>

                  {/* MOBILE + DESKTOP CONTENT */}
                  <div className="mt-8 md:mt-0 md:absolute md:bottom-8 md:left-8">

                    <p className="text-sm font-bold mb-1">

                      Let’s Talk

                    </p>

                    <p className="text-gray-500 text-sm">

                      hello@washim.co

                    </p>

                  </div>

                  <div className="mt-6 md:mt-0 md:absolute md:bottom-8 md:right-8 max-w-[220px] text-gray-500 text-sm leading-6 md:leading-7">

                    Hello, I’m washim, an online product
                    designer focusing on brand identity,
                    advertising, and no-code instruments.

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
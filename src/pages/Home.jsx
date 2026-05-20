import Button from "../components/Button";

import profileImage from "../assets/my pic.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <section className="min-h-[85vh] flex items-center py-10">

      <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl flex flex-col justify-center pt-16">

          {/* Badge */}
          <div className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full mb-8 font-medium w-fit">
            &lt;/&gt; Frontend Developer
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
            Hello, I'm
            <span className="block text-blue-600 mt-2">
              Washim Akhtar
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-xl leading-10 mt-8 mb-20 max-w-2xl">
            I build responsive and modern web applications
            using React, JavaScript, and modern frontend
            technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6 mt-4 mb-16">

            

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-4">

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:-translate-y-1 transition duration-300"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:-translate-y-1 transition duration-300 text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:-translate-y-1 transition duration-300 text-sky-500"
            >
              <FaTwitter size={24} />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:-translate-y-1 transition duration-300 text-red-500"
            >
              <MdEmail size={24} />
            </a>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">

          {/* Background Glow */}
          <div className="absolute w-80 h-80 bg-blue-400/20 blur-3xl rounded-full"></div>

          {/* Image Card */}
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/30 p-5 rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.15)]">

            <img
              src={profileImage}
              alt="Washim Akhtar"
              className="w-[320px] md:w-[450px] h-[550px] object-cover rounded-[30px]"
            />

            {/* Floating Card */}
            <div className="absolute bottom-8 -right-8 bg-white px-5 py-4 rounded-2xl shadow-xl">

              <div className="flex items-center gap-2 mb-2">

                <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                <p className="font-semibold text-sm">
                  Available for work
                </p>

              </div>

              <p className="text-gray-600 text-sm">
                Let’s build something amazing together!
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
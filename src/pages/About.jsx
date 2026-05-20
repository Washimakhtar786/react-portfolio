import profileImage from "../assets/my pic.jpeg";

function About() {
  return (
    <section className="min-h-[85vh] flex items-center py-10">

      <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

        {/* LEFT IMAGE SECTION */}
        <div className="relative flex justify-center">

          {/* Glow Effect */}
          <div className="absolute w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full"></div>

          {/* Image Card */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200 p-5 rounded-[35px] shadow-[0_20px_80px_rgba(0,0,0,0.15)]">

            <img
              src={profileImage}
              alt="Washim Akhtar"
              className="w-[320px] md:w-[420px] h-[520px] object-cover rounded-[25px]"
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-2xl">

          {/* Small Heading */}
          <p className="text-cyan-500 font-semibold uppercase tracking-widest mb-4">
            About Me
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Passionate Frontend Developer
          </h2>

          {/* Description */}
          <p className="text-slate-700 text-lg leading-9 mb-6">
            I am a frontend developer passionate about building
            modern, responsive, and user-friendly web applications
            using React and modern frontend technologies.
          </p>

          <p className="text-slate-700 text-lg leading-9 mb-10">
            I have experience with HTML, CSS, JavaScript,
            Advanced JavaScript, React, GitHub, deployment,
            and responsive UI development.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">

            <div className="bg-white/70 border border-slate-200 backdrop-blur-lg rounded-2xl p-5 shadow-md">

              <h3 className="text-cyan-500 text-xl font-semibold mb-2">
                Frontend
              </h3>

              <p className="text-slate-700">
                React, JavaScript, Tailwind CSS
              </p>

            </div>

            <div className="bg-white/70 border border-slate-200 backdrop-blur-lg rounded-2xl p-5 shadow-md">

              <h3 className="text-cyan-500 text-xl font-semibold mb-2">
                Tools
              </h3>

              <p className="text-slate-700">
                GitHub, Render, VS Code
              </p>

            </div>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">

            <div>
              <h3 className="text-4xl font-bold text-cyan-500">
                10+
              </h3>

              <p className="text-slate-600 mt-2">
                Projects Built
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-500">
                1+
              </h3>

              <p className="text-slate-600 mt-2">
                Years Learning
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-500">
                100%
              </h3>

              <p className="text-slate-600 mt-2">
                Passionate
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
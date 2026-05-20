import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import projectsData from "../data/projectsData";

function Projects() {

  return (

    <section className="min-h-screen w-screen bg-[#050816] py-24 overflow-x-hidden">

      {/* HEADER */}
      <div className="text-center mb-20 px-6">

        <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-4">
          Portfolio
        </p>

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-9">
          A collection of projects showcasing modern frontend
          development, responsive UI engineering,
          React architecture, and scalable component design.
        </p>

      </div>

      {/* PROJECT GRID */}
      <div className="w-full max-w-[1600px] mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {projectsData.map((project, index) => (

          <div
            key={project.id}
            className="group w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] overflow-hidden hover:-translate-y-3 hover:border-cyan-400/40 transition duration-500 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
          >

            {/* IMAGE */}
            <div className="overflow-hidden relative">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20"></div>

            </div>

            {/* CONTENT */}
            <div className="p-8">

              {/* NUMBER */}
              <p className="text-cyan-400 font-semibold mb-3">
                0{index + 1}
              </p>

              {/* TITLE */}
              <h3 className="text-3xl font-bold text-white mb-5 capitalize">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-8 mb-8 min-h-[120px]">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-3 mb-6">

                {project.tech.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-4 flex-wrap mt-4">

                {/* GITHUB */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 rounded-xl transition duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                {/* LIVE DEMO */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-white/10 hover:bg-white/10 text-white px-5 py-3 rounded-xl transition duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import projectsData from "../data/projectsData";

function Projects() {

  return (

    <section className="min-h-screen w-screen bg-[#050816] overflow-x-hidden">

      {/* TOP SPACING FOR FIXED NAVBAR */}
      <div className="h-[115px]"></div>

      {/* PROJECT GRID */}
      <div className="w-full max-w-[1600px] mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10 pb-20">

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
              <p className="text-gray-400 leading-8 mb-5 min-h-[90px]">
                {project.description}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-4 mb-4">

                {project.tech.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-[15px] font-medium"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-4 flex-wrap mt-2">

                {/* GITHUB */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2.5 rounded-xl transition duration-300 text-[16px]"
                >
                  <FaGithub />
                  GitHub
                </a>

                {/* LIVE DEMO */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-white/10 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl transition duration-300 text-[16px]"
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
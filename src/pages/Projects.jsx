import { useEffect, useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // PROJECT CATEGORY IMAGES
  const projectImages = {
    portfolio:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

    dashboard:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",

    weather:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",

    ecommerce:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",

    blog:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",

    task:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",

    notes:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",

    quiz:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    expense:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",

    default:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  };

  // GET SUITABLE IMAGE
  const getProjectImage = (name) => {

    const lowerName = name.toLowerCase();

    if (lowerName.includes("portfolio"))
      return projectImages.portfolio;

    if (lowerName.includes("dashboard"))
      return projectImages.dashboard;

    if (lowerName.includes("weather"))
      return projectImages.weather;

    if (lowerName.includes("ecommerce"))
      return projectImages.ecommerce;

    if (lowerName.includes("blog"))
      return projectImages.blog;

    if (lowerName.includes("task"))
      return projectImages.task;

    if (lowerName.includes("note"))
      return projectImages.notes;

    if (lowerName.includes("quiz"))
      return projectImages.quiz;

    if (lowerName.includes("expense"))
      return projectImages.expense;

    return projectImages.default;
  };

  useEffect(() => {

    const fetchProjects = async () => {

      try {

        const response = await fetch(
          "https://api.github.com/users/Washimakhtar786/repos"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();

        const filteredProjects = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at) -
              new Date(a.updated_at)
          );

        setProjects(filteredProjects);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }

    };

    fetchProjects();

  }, []);

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

      {/* LOADING */}
      {loading && (

        <div className="text-center text-2xl font-semibold text-white">
          Loading projects...
        </div>

      )}

      {/* ERROR */}
      {error && (

        <div className="text-center text-red-500 text-xl">
          {error}
        </div>

      )}

      {/* PROJECT GRID */}
      {!loading && !error && (

        <div className="w-full max-w-[1600px] mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={project.id}
              className="group w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] overflow-hidden hover:-translate-y-3 hover:border-cyan-400/40 transition duration-500 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
            >

              {/* IMAGE */}
              <div className="overflow-hidden relative">

                <img
                  src={getProjectImage(project.name)}
                  alt={project.name}
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
                  {project.name.replace(/-/g, " ")}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 leading-8 mb-8 min-h-[120px]">

                  {project.description
                    ? project.description
                    : "Modern frontend project built using React and web technologies."}

                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-3 mb-8">

                  <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full text-sm">

                    {project.language || "Frontend"}

                  </span>

                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-4 flex-wrap">

                  {/* GITHUB */}
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 rounded-xl transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {/* LIVE */}
                  <a
                    href={project.homepage || "#"}
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

      )}

    </section>
  );
}

export default Projects;
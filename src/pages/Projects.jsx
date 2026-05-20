const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Notes App",
    description: "Notes management application using JavaScript.",
  },
  {
    id: 3,
    title: "Blog Layout",
    description: "Responsive blog UI design with reusable components.",
  },
];

function Projects() {
  return (
    <section>

      <h2 className="text-4xl font-bold mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {project.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
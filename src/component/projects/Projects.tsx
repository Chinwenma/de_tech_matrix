import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Ensure you import these
import { projectData } from "../../constants/constants";
import { ProjectType } from "../../types/types"; // Correct path to your types file


// Project Component
const Project = ({ project }: { project: ProjectType }) => {
  return (
    <section id="projects">
    <div className=" rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <FaExternalLinkAlt className="mr-1" /> Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-black flex items-center"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

// ProjectSection Component
const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="mb-12 max-w-2xl mx-auto">
          A selection of some recent works that showcase my skills in frontend development and UI design.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

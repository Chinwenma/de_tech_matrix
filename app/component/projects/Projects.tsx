import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Ensure you import these
import { projectData } from "../../constants/constants";
import { ProjectType } from "../../types/types"; // Correct path to your types file
import Link from "next/link";

// Project Component
const Project = ({ project }: { project: ProjectType }) => {
  return (
    <section id="projects">
      <div
        className=" rounded-md shadow-lg overflow-hidden md:h-[74vh] transform transition duration-300"
        data-aos="flip-left"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-60 object-cover object-top hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 backdrop-blur-md">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="mb-6 leading-relaxed text-sm">
            {project.description}
          </p>
         <div className="flex items-center justify-between mb-4">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8490ff] hover:bg-gradient-to-br from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </Link>
          )}
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 flex items-center text-sm font-medium transition-colors"
          >
            <FaGithub className="mr-2" /> GitHub
          </Link>
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
          A selection of some recent works that showcase my skills in frontend
          development and UI design.
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
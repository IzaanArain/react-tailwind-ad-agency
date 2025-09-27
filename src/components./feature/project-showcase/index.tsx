import { PROJECTS } from "../../../constants";
import Project from "./project";

const ProjectShowcase = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-12 md:px-8">
      <div>
        <h2 className="my-8 text-center justify-center text-4xl font-semibold tracking-tight">
          Projects
        </h2>
      </div>
      <div className="space-y-16">
        {PROJECTS.map((project) => (
          <Project key={project?.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;

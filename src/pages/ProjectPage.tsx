import { CardProject } from "@/components";
import { projects } from "@/services";

const ProjectsPage = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-[#f4f1de] text-gray-900 p-36 md:p-24">
        <h2 className="font-bold text-4xl my-8 text-center text-secundary">
          Projects
        </h2>
        <div className="grid grid-cols-1 items-center justify-items-center lg:grid-cols-2 sm:gap-2 md:gap-8">
        {projects.map(project => (
          <CardProject project={project} key={project.id}/>
        ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;

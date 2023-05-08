import { CardProject } from "@/components";
import { projects } from "@/services";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <>
      <section
        id="projects"
        className="min-h-screen w-full bg-[#f4f1de] text-gray-900 p-4 md:p-24 "
      >
        <h2 className="font-bold text-4xl mb-12 text-center text-secundary">
          Projects
        </h2>
        <motion.div
          className="flex flex-col gap-10 items-center lg:flex-row lg:justify-center lg:gap-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project) => (
            <CardProject project={project} key={project.id} />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default ProjectsPage;

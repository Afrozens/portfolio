import { CardProject } from "@/components";
import { projects } from "@/services";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <>
      <section
        id="projects"
        className="min-h-screen w-full bg-[#f4f1de] text-gray-900 p-4 md:py-18 md:px-24 overflow-hidden"
      >
        <h3 className="font-bold text-3xl mb-12 text-center text-secundary underline decoration-primary">
          Work
        </h3>
        <h2 className="font-bold text-6xl mb-12 text-center text-secundary ">
          Recent Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 md:gap-8 lg:gap-24 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
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

import { CardProject } from "@/components";
import { projects } from "@/services";
import {motion} from "framer-motion"

const ProjectsPage = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-[#f4f1de] text-gray-900 p-4 md:p-24">
        <h2 className="font-bold text-4xl my-8 text-center text-secundary">
          Projects
        </h2>
        <motion.div className="grid grid-cols-1 items-center justify-items-center lg:grid-cols-2 sm:gap-2 md:gap-8"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5}}>
        {projects.map(project => (
          <CardProject project={project} key={project.id}/>
        ))}
        </motion.div>
      </section>
    </>
  );
};

export default ProjectsPage;

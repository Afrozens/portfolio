import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CardProject } from "@/components";
import { getProjects } from "@/services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const ProjectsPage = () => {
  const { t } = useTranslation();
  const projects = getProjects();
  const isTouchDevice = useMemo(
    () => typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0),
    [],
  );
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#f4f1de] text-gray-900 px-6 py-16 md:px-16 lg:px-24 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={isTouchDevice ? { y: 0, filter: "blur(0px)" } : { y: 40, filter: "blur(10px)" }}
          whileInView={isTouchDevice ? undefined : { y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            {t("projects.work")}
          </span>
          <h2 className="font-bold text-5xl md:text-7xl text-secundary">
            {t("projects.recentProjects")}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>
        <motion.ul
          className="flex flex-col gap-12 md:gap-20"
          variants={containerVariants}
          initial={isTouchDevice ? false : "hidden"}
          whileInView={isTouchDevice ? undefined : "visible"}
          viewport={isTouchDevice ? undefined : { once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <CardProject index={index} project={project} key={project.id} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ProjectsPage;

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import deployIcon from "@/assets/icons/deploy.svg";
import { Project } from "@/interfaces";
import SelectTech from "./SelectTech";
import { Image } from 'antd';

type PropsTypes = {
  project: Project;
  index: number
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, filter: "blur(15px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

const CardProject = ({ project, index }: PropsTypes) => {
  const { t } = useTranslation();
  const isReversed = index % 2 !== 0;

  return (
    <motion.li
      className="w-full flex flex-col md:flex-row md:gap-10 md:items-center"
      variants={itemVariants}
    >
      <div className={`w-full md:w-1/2 ${isReversed ? "md:order-2" : ""}`}>
        <Image
          src={project.preview}
          alt={`${project.title}${t("projects.imageOf")}`}
          className="w-full h-64 md:h-80 object-cover object-center rounded-xl shadow-lg"
        />
      </div>
      <div className={`w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0 ${isReversed ? "md:order-1 md:pr-10" : "md:pl-10"}`}>
        <span className="inline-block text-primary text-xs font-bold tracking-[0.15em] uppercase mb-2">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-3xl mb-3">
          {project.title}
        </span>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <SelectTech stack={tech} key={uuid()} />
          ))}
        </div>
        <p className="text-sm font-light text-gray-600 leading-relaxed mb-4 line-clamp-4">
          {project.subTitle}
        </p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-2 w-fit px-5 py-2.5 bg-secundary font-semibold text-sm rounded-lg hover:scale-105 transition-transform"
          >
            {t("projects.deploy")}
            <img
              src={deployIcon}
              alt={t("projects.arrowAlt")}
              className="w-4 h-4"
            />
          </a>
        )}
      </div>
    </motion.li>
  );
};

export default CardProject;

import githubIcon from "@/assets/icons/github.svg";
import deployIcon from "../../assets/icons/deploy.svg";
import { Project } from "@/interfaces";
import { motion } from "framer-motion";
import { useState } from "react";

type PropsTypes = {
  project: Project;
};

const CardProject = ({ project }: PropsTypes) => {
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setTimeout(() => setImageLoading(false), 400);
  };

  return (
    <motion.div
      className="w-80 md:w-[550px]  md:h-[500px] bg-white rounded-3xl shadow-lg transition mb-8 relative scale-90"
      whileHover={{ scale: 1.05 }}
    >
      <button className="w-16 h-16 absolute left-2 top-2 flex items-center justify-center rounded-3xl bg-slate-100 cursor-pointer hover:scale-110 transition">
        <a href={project.linkTech} target="_blank" className="">
          <img
            src={githubIcon}
            alt="github icon logotype"
            className="w-10 h-10"
          />
        </a>
      </button>
      <div className="w-full h-3/4 rounded-t-3xl bg-transparent flex items-start justify-end">
        <motion.img
          src={project.preview}
          alt={`${project.title} image`}
          className="w-full h-full object-cover border-t-2 rounded-t-3xl border-t-white"
          animate={{
            opacity: imageLoading ? 0 : 1,
          }}
          transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
          onLoad={imageLoaded}
        />
      </div>
      <div className="flex justify-around items-center m-5">
        <div className="flex flex-col">
          <span className="text-base md:text-lg font-semibold lg:text-xl">
            {project.title}
          </span>
          <span className="text-xs md:text-md font-semibold lg:text-base">
            {project.subTitle}
          </span>
        </div>
        <div className="flex flex-col items-center self-end p-4 gap-4">
          <button className="w-24 h-8 md:w-36 md:h-12 bg-slate-100 self-end rounded-lg cursor-pointer hover:scale-110 transition">
            <a
              href={project.link}
              target="_blank"
              className="flex justify-center items-center gap-4"
            >
              <img
                src={deployIcon}
                alt="arrow right top icon "
                className="w-6 h-6 md:h-8 md:w-8"
              />
              <p className="text-sm">Deploy</p>
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProject;

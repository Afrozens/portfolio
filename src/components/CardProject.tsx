import githubIcon from "@/assets/icons/github.svg";
import deployIcon from "../assets/icons/deploy.svg";
import { Project } from "@/interfaces";

type PropsTypes = {
  project: Project;
};

const CardProject = ({ project }: PropsTypes) => {
  return (
    <div className="max-w-2xl max-h-xl bg-white rounded-3xl shadow-lg transition mb-8">
      <div className="w-full h-3/4 rounded-t-3xl bg-green-500 flex items-start justify-end">
      <img src={project.preview} alt={`${project.title } image`} className="w-full h-full object-cover border-t-2 rounded-t-3xl border-t-white object-center"/>
        
      </div>
      <div className="flex justify-around m-5">
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{project.title}</p>
          <p className="text-sm">1</p>
        </div>
        <div className="flex flex-col items-center self-end p-4 gap-4">
        <button className="w-36 h-12 flex bg-slate-100 self-end justify-center items-center gap-2 rounded-lg cursor-pointer hover:scale-110 transition">
          <img
            src={deployIcon}
            alt="arrow right top icon "
            className="h-8 w-8"
          />
          <p>Deploy</p>
        </button>
          
        </div>
      </div>
    </div>
  );
};

export default CardProject;

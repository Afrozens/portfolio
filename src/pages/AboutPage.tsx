import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getExperiences } from "@/services";
import { CardExperience, ViewPdf } from "@/components";
import VenezuelaFlag from "@/assets/venezuela.webp";
import PanamaFlag from "@/assets/panama.webp";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

const AboutPage = () => {
  const { t } = useTranslation();
  const [isViewPdf, setIsViewPdf] = useState<boolean>(false);
  const experiences = getExperiences();
  return (
    <>
      {isViewPdf && (
        <ViewPdf isViewPdf={isViewPdf} setIsViewPdf={setIsViewPdf} />
      )}
      <aside className="mx-auto bg-third flex justify-center items-center gap-2 pt-6 sm:py-14">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jesus-chacon-b54b4a223/"
        >
          <img
            src={LinkedinIcon}
            alt={t("about.linkedinAlt")}
            className="w-6 h-6 md:h-10 md:w-10 hover:scale-105 transition"
          />
        </a>
        <button
          className="text-gray-900 text-sm font-light hover:underline md:text-lg hover:scale-105 transition"
          onClick={() => setIsViewPdf(true)}
        >
          {t("about.view")}
          <span className="text-sm font-light md:text-lg">{t("about.cv")}</span>
        </button>
      </aside>
      <section
        id="about"
        className=" w-full bg-third flex flex-col items-center py-14 text-primary px-6 sm:px-20 sm:py-4 sm:flex-row sm:items-start  mb-6 overflow-hidden gap-10 md:gap-0"
      >
        <motion.div
          className="flex flex-col w-full relative mb-4 shrink-0 items-center sm:items-start sm:w-[33%] sm:justify-start md:pr-10"
          initial={{ opacity: 0, x: "-100%", filter: "blur(20px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <article>
            <h3 className="font-bold text-lg pb-2 border border-transparent border-b-slate-300 inline-block md:text-2xl">
              {t("about.technologies")}
            </h3>
            <ul className="flex flex-wrap gap-2 pt-2">
              {["Javascript", "Typescript", "Nodejs", "Python", "PHP", "Vue", "React", "Nextjs", "FastApi", "Laravel"].map((tech) => (
                <li key={tech} className="bg-primary/15 text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-primary/25 hover:bg-primary/25 transition-colors">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3 className="font-bold text-lg pb-2 border border-transparent border-b-slate-300 inline-block md:text-2xl">
              {t("about.more")}
            </h3>
            <ul className="flex flex-wrap gap-2 pt-2">
              {["AWS", "SQL (PostgreSQL)", "NoSQL (MongoDB)", "RAG", "Agent IA", "Module Federation", "Sockets", "Inertia", "Patterns Arquitectures", "Datadog", "Jenkins", "Gsap & Framer Motion"].map((tech) => (
                <li key={tech} className="bg-[#004E64]/10 text-third text-xs font-medium px-3 py-1.5 rounded-full border border-[#004E64]/20 hover:bg-[#004E64]/20 transition-colors">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
          <article className="mt-4">
            <p className="text-sm text-gray-500 mb-1">{t("about.mediumLabel")}</p>
            <a
              href="https://medium.com/@jesuszen2.6/encapsulaci%C3%B3n-de-servicios-con-clases-en-el-frontend-7854948ad77c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
            >
              {t("about.mediumTitle")} ↗
            </a>
          </article>
          <article className="mt-5">
            <p className="text-sm text-gray-500 mb-2">{t("about.currentlyReading")}</p>
            <ul className="space-y-1.5">
              {[
                ["How to Design APIs for AI Agents", "https://www.freecodecamp.org/news/how-to-design-apis-for-ai-agents/"],
                ["Production RAG with LangChain & Vector Databases", "https://www.freecodecamp.org/news/production-rag-with-langchain-vector-databases/"],
                ["Building a Real-Time Chat App with FastAPI & WebSocket", "https://medium.com/@jatin.v1997/building-a-real-time-chat-application-with-fastapi-and-websocket-a-complete-guide-92186ff2d06e"],
                ["Hacking Tools", "https://github.com/yogsec/Hacking-Tools"],
                ["Understanding RAG", "https://pureai.com/articles/2025/03/03/understanding-rag.aspx"],
              ].map(([title, url]) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary/80 hover:text-primary transition-colors underline underline-offset-2"
                  >
                    {title} ↗
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </motion.div>
        <div className="sm:w-[67%]">
          <motion.div
            initial={{ opacity: 0, y: "-50%", filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold text-3xl sm:text-7xl lg:text-8xl tracking-[-0.1rem] sm:tracking-[-0.3rem] pt-4">
              Jesús Chacón{" "}
              <img src={VenezuelaFlag} alt={t("about.venezuelaAlt")} className="inline w-8 h-8 md:w-20 md:h-12" />{"/"}
              <img src={PanamaFlag} alt={t("about.panamaAlt")} className="inline w-8 h-8 md:w-20 md:h-12" />
            </h2>
            <h3 className="font-semibold text-2xl tracking-widest my-4 md:text-3xl">
              <b className="text-javascript">Javascript</b>
              <b className="text-[#00008B]"> Python</b> {t("about.and")}{" "}
              <b className="text-[#7A86B8]">PHP</b> {t("about.developer")}
            </h3>
            <p className="text-sm font-light text-third md:text-lg lg:text-2xl sm:border sm:border-transparent sm:border-b-gray-300 sm:pb-10 whitespace-pre-line">
              {t("about.bio")}
            </p>
          </motion.div>
          <article>
            <h2 className="text-3xl font-bold py-10 lg:text-4xl">{t("about.experience")}</h2>
            <motion.ul
              className="flex flex-col items-center md:gap-0"
              initial={{ opacity: 0, x: "50%", filter: "blur(20px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {experiences.map((experience) => (
                <CardExperience experience={experience} key={experience.id} />
              ))}
            </motion.ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

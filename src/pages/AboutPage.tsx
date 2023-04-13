import { experiences } from "@/services";
import { CardExperience, ViewPdf } from "@/components";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import { useState } from "react";
import {motion} from "framer-motion"

const AboutPage = () => {
  const [isViewPdf, setIsViewPdf] = useState<boolean>(false);
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
            alt="linkedin icon heroicon"
            className="w-6 h-6 md:h-10 md:w-10 hover:scale-105 transition"
          />
        </a>
        <button
          className="text-gray-900 text-sm font-light hover:underline md:text-lg hover:scale-105 transition"
          onClick={() => setIsViewPdf(true)}
        >
          View
          <span className="text-sm font-light md:text-lg"> CV</span>
        </button>
      </aside>
      <section className="min-h-screen w-full bg-third flex flex-col items-center p-10 text-primary py-14 px-10 sm:px-20 sm:py-4 sm:flex-row sm:items-start sm:h-[50vh] md:h-[90vh]">
        <motion.div className="flex w-full h-72 relative mb-4 shrink-0 justify-center sm:w-[33%] sm:flex-col sm:justify-start md:pr-10"
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{duration: 0.5, delay: 0.5}}
        >
          <article>
            <h3 className="font-bold text-lg pb-2 border border-transparent border-b-slate-300 inline-block md:text-2xl">
              Technologies:
            </h3>
            <ul className="flex flex-wrap flex-col gap-2 pt-2 text-third font-light text-sm list-disc list-inside md:text-lg">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Nextjs</li>
              <li>Nodejs</li>
              <li>Tailwind</li>
              <li>Styled Component</li>
              <li>Redux TLK</li>
              <li>Tanstack Query</li>
            </ul>
          </article>
          <article className="ml-4 sm:ml-0 sm:mt-4">
            <h3 className="font-bold text-lg pb-2 border border-transparent border-b-slate-300 inline-block md:text-2xl">
              Tools and others:
            </h3>
            <ul className="flex flex-wrap flex-col gap-2 pt-2 text-third font-light text-sm list-disc list-inside md:text-lg">
              <li>Responsive web design</li>
              <li>Jest - Vitest</li>
              <li>Github</li>
              <li>Git</li>
              <li>Scrum</li>
              <li>Ajira</li>
              <li>Wordpress</li>
            </ul>
          </article>
        </motion.div>

        <div className="sm:w-[67%]">
          <motion.div
          initial={{opacity: 0, y: "-50%"}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          <h2 className="font-bold text-7xl tracking-[-0.3rem] lg:text-8xl pt-4">
            Jesus Chacon
          </h2>
          <h3 className="font-semibold text-2xl tracking-widest my-4 md:text-3xl">
            <b className="text-javascript">Javascript</b> Developer Web
          </h3>
          <p className="text-sm font-light text-third md:text-lg lg:text-2xl sm:border sm:border-transparent sm:border-b-gray-300 sm:pb-10">
            I'm a client-side web developer, I specialize in Javascript, I have
            three years knowing the programming language and one year in the
            working environment. I consider myself a person passionate about
            learning and having communication skills.
          </p>
          </motion.div>
          <article>
            <h2 className="text-3xl font-bold py-10 lg:text-4xl">Experience</h2>
            <motion.ul
            initial={{opacity: 0, y: "50%"}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}>
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

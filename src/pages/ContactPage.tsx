import { Contact} from "@/components";
import {motion} from "framer-motion"

const ContactPage = () => {
  return (
    <article id="contact" className="min-h-[20vh] w-full p-6 pr-14 flex flex-col items-center bg-secundary ">
      <motion.section className="text-gray-800 md:my-auto"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5}}>
      <Contact />
      </motion.section>
    </article>
  );
};

export default ContactPage;

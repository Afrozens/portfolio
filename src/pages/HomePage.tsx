import { AnimatedWords } from "../components";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main id="#" className="sm:flex">
      <section className="h-[80vh] w-full flex flex-col justify-center bg-primary p-16 sm:w-[67%] sm:h-[40vh] lg:h-screen">
        <div className="sm:pt-8 w-full ">
          <AnimatedWords line1="Frontend" line2="Developer" />
          <motion.p
            className="my-4 text-lg sm:text-sm text-white font-light lg:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Learn more about me as a professional in my portfolio.
          </motion.p>
        </div>
      </section>
      <section className="h-[40vh] w-full flex flex-col items-center justify-center bg-secundary sm:w-[33%] sm:h-[40vh] lg:h-screen sm:items-start"></section>
    </main>
  );
};

export default HomePage;

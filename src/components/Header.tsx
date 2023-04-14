import { useState } from "react";
import { motion } from "framer-motion";
import hamburguerIcon from "@/assets/icons/hamburguer.svg";
import quitIcon from "@/assets/icons/quit.svg";
import jesusLogotype from "@/assets/jc.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.header
      className="h-32 w-full absolute flex items-center justify-between sm:bg-transparent sm:h-28 px-8 z-[99]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <a href="#" className="hover:scale-110">
        <img
          src={jesusLogotype}
          alt="jesus chacon logotype"
          className="h-56 w-56"
        />
      </a>
      {!isOpen ? (
        <button className="z-[99]" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={hamburguerIcon}
            alt="hamburguer icon"
            className="h-14 w-14 cursor-pointer hover:scale-110"
          />
        </button>
      ) : (
        <button className="z-[99]" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={quitIcon}
            alt="quit icon"
            className="h-14 w-14 cursor-pointer hover:scale-110"
          />
        </button>
      )}
      {isOpen && (
        <motion.nav
          className="w-full h-full px-16 pt-32 fixed top-0 right-0 bg-white flex flex-col  gap-4 shadow-md sm:w-72 sm:h-96 sm:absolute sm:right-6 sm:top-4 sm:p-8 sm:pt-16 z-[50]"
          initial={{ opacity: 0 }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.7 }}
          variants={variants}
        >
          <motion.ul
            className="w-full h-36 mb-8 flex flex-col gap-4 font-light text-lg tracking-widest sm:text-sm"
            onClick={() => setIsOpen(false)}
            initial={{ scale: 0.5 }}
            animate={isOpen && { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </motion.ul>
          <div className="w-full h-36">
            <h4 className="text-xl font-semibold tracking-widest uppercase text-center mb-8 sm:text-base">
              Hello me
            </h4>
            <motion.ul
              className="w-full h-36 mb-8 flex flex-col gap-4 font-light text-sm tracking-widest"
              initial={{ scale: 0.5 }}
              animate={isOpen && { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <li>Jesuszen2.6@gmail.com</li>
              <li className="hover:scale-105 transition">
                <a href="https://github.com/Afrozens" target="_blank">
                  @Afrozens
                </a>
              </li>
            </motion.ul>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;

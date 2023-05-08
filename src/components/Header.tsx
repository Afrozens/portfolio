import { useState } from "react";
import { motion } from "framer-motion";
import hamburguerIcon from "@/assets/icons/hamburguer.svg";
import quitIcon from "@/assets/icons/quit.svg";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <motion.header
      className="h-32 w-full absolute flex items-center justify-between sm:bg-transparent sm:h-28 px-8 z-[99]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <a href="#" className="hover:scale-110 transition text-5xl font-bold">
        J
      </a>
      {!isOpen ? (
        <button className="z-[99]" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={hamburguerIcon}
            alt="hamburguer icon"
            className="h-14 w-14 cursor-pointer hover:scale-110 transition"
          />
        </button>
      ) : (
        <button className="z-[99]" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={quitIcon}
            alt="quit icon"
            className="h-14 w-14 cursor-pointer hover:scale-110 transition fixed top-8 right-8 sm:right-0 sm:top-0 sm:relative"
          />
        </button>
      )}
      {isOpen && (
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      )}
    </motion.header>
  );
};

export default Header;

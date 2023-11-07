import { useState } from "react";
import { motion } from "framer-motion";
import hamburguerIcon from "@/assets/icons/hamburguer.svg";
import quitIcon from "@/assets/icons/quit.svg";
import Navbar from "../PrimitiveElements/Navbar";
import MenuHamburguer from "../PrimitiveElements/MenuHamburguer";

const Header = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
      <MenuHamburguer isChecked={isChecked} setIsChecked={setIsChecked} />
      {isChecked && <Navbar isOpen={isChecked} setIsOpen={setIsChecked} />}
    </motion.header>
  );
};

export default Header;

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "../PrimitiveElements/Navbar";
import MenuHamburguer from "../PrimitiveElements/MenuHamburguer";

const Header = () => {
  const { i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <motion.header
      className="h-32 absolute w-full flex items-center justify-between sm:bg-transparent sm:h-28 px-4 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <a href="#" className="hover:scale-110 transition text-5xl font-bold">
        J
      </a>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-0.5 bg-white/20 backdrop-blur-sm rounded-full p-0.5">
          <button
            onClick={() => i18n.changeLanguage("es")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
              i18n.language?.startsWith("es")
                ? "bg-secundary text-gray-900 shadow-sm"
                : "text-black hover:bg-white/20"
            }`}
          >
            ES
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
              i18n.language?.startsWith("en")
                ? "bg-secundary text-gray-900 shadow-sm"
                : "text-black hover:bg-white/20"
            }`}
          >
            EN
          </button>
        </div>
        <MenuHamburguer isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>
      {isChecked && <Navbar isOpen={isChecked} setIsOpen={setIsChecked} />}
    </motion.header>
  );
};

export default Header;

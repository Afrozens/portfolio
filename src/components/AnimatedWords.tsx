import { motion } from "framer-motion";

type PropsType = {
  line1: string;
  line2?: string;
};

const AnimatedTextWord = ({ line1, line2 }: PropsType) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.h1
      className="text-secundary text-5xl font-bold font-inter tracking-widest my-4 lg:text-8xl"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {line1.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letter}>
          {char}
        </motion.span>
      ))}
      <br />
      {line2 && line2.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedTextWord;

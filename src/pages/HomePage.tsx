import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import ArrowScroll from "@/assets/icons/arrow-scroll.svg";
import GithubIcon from "@/assets/icons/github.svg";
import VenezuelaFlag from "@/assets/venezuela.webp";

const LINE_DELAY = 0.14;
const START_DELAY = 1.4;

const lineVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: START_DELAY + i * LINE_DELAY, ease: "easeOut" },
  }),
};

type LineType = "prompt" | "output" | "status";

const TerminalLine = ({ text, type, index }: { text: string; type: LineType; index: number }) => (
  <motion.div
    custom={index}
    variants={lineVariants}
    initial="hidden"
    animate="visible"
    className="mb-1"
  >
    {type === "prompt" ? (
      <span>
        <span className="text-[#fff]/70">$</span>{" "}
        <span className="text-primary">{text}</span>
      </span>
    ) : type === "status" ? (
      <span className="text-[#fff]/70">{text}</span>
    ) : (
      <span className="text-[#fff]/60">{text}</span>
    )}
  </motion.div>
);

const HomePage = () => {
  const { t } = useTranslation();
  const [bannerOpen, setBannerOpen] = useState(true);
  const name = "Jesús";

  const terminalData: { text: string; type: LineType }[] = [
    { text: "whoami", type: "prompt" },
    { text: t("terminal.output1"), type: "output" },
    { text: "specialties", type: "prompt" },
    { text: t("terminal.output2a"), type: "output" },
    { text: t("terminal.output2b"), type: "output" },
    { text: t("terminal.output2c"), type: "output" },
    { text: "stack", type: "prompt" },
    { text: t("terminal.output3"), type: "output" },
    { text: t("terminal.status"), type: "status" },
  ];

  return (
    <>
      {bannerOpen && (
        <div className="w-full z-[9999999] border-b border-white/10 pt-32 sm:pt-8 pb-3 px-4 sm:px-8">
          <div className="max-w-7xl bg-[#1a1a2e] p-5 rounded-lg mx-auto flex items-center gap-2 sm:gap-4">
            <img src={VenezuelaFlag} alt="Venezuela" className="w-10 h-7 rounded-sm shrink-0 object-cover" />
            <p className="text-xs sm:text-sm text-white/80 font-light text-center flex-1">
              {t("banner.text")}{" "}
              <a href="https://cnnespanol.cnn.com/2026/06/26/venezuela/live-news/terremotos-venezuela-en-vivo-noticias-guaira-caracas-victimas-orix" target="_blank" rel="noopener noreferrer" className="underline text-[#00A5CF] hover:text-[#00A5CF]/70 whitespace-nowrap">{t("banner.news")}</a>
              <span className="mx-1">·</span>
              <a href="https://dona.yummyrides.com/" target="_blank" rel="noopener noreferrer" className="underline text-[#7AE582] hover:text-[#7AE582]/70 whitespace-nowrap">{t("banner.donate")}</a>
            </p>
            <button onClick={() => setBannerOpen(false)} className="text-white/40 hover:text-white/80 transition-colors shrink-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </div>
      )}
      <main id="#" className="relative sm:flex overflow-hidden">
        <section className="h-screen w-full flex flex-col justify-center px-8 sm:w-[58%] sm:px-16 lg:px-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.55, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="font-mono text-xl uppercase tracking-[0.35em] text-cream block mb-3"
            >
              {t("hero.line1")}
            </motion.span>

            <h1 className="text-5xl sm:text-8xl lg:text-9xl font-bold text-cream leading-none mb-2 tracking-tight">
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.45, delay: 0.55 + i * 0.09 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-5"
            >
              <span className="text-[#7AE582]">{t("hero.line2")}</span>{" "}
              <span className="text-cream">{t("hero.line3")}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-1.5 bg-red-accent text-primary text-[10px] font-bold px-3 py-1.5 rounded-full tracking-[0.15em] uppercase shadow-lg shadow-red-accent/30">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-sm sm:text-base text-cream/70 font-light max-w-xl leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>
            
          </div>
        </section>

        <section className="hidden sm:flex h-screen w-[50%] flex-col items-center justify-center bg-navy px-6">
          <div className="w-full max-w-xl bg-gray-500 rounded-xl overflow-hidden border border-white/[0.07] shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 px-4 py-[10px] bg-white/[0.04]">
              <span className="w-[10px] h-[10px] rounded-full bg-red-500/70" />
              <span className="w-[10px] h-[10px] rounded-full bg-yellow-500/70" />
              <span className="w-[10px] h-[10px] rounded-full bg-green-500/70" />
              <span className="text-[10px] text-[#fff]/60 font-mono ml-2">~/portfolio — bash</span>
            </div>
            <div className="p-5 font-mono bg-gray-500 text-[13px] leading-relaxed min-h-[300px] overflow-hidden">
              {terminalData.map((line, i) => (
                <TerminalLine key={i} text={line.text} type={line.type} index={i} />
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: START_DELAY + terminalData.length * LINE_DELAY + 0.3 }}
                className="inline-block w-2 h-[14px] bg-[#fff]/60 ml-0.5 align-middle"
              />
            </div>
          </div>
        </section>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={300}>
            <motion.img
              src={ArrowScroll}
              alt={t("hero.arrowAlt")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
               className="h-10 w-10 absolute animate-bounce bottom-36 left-1/2 -translate-x-1/2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity brightness-0"
            />
          </Link>
      </main>
    </>
  );
};

export default HomePage;

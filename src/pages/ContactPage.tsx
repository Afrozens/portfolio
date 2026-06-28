import { useTranslation } from "react-i18next";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import githubIcon from "@/assets/icons/github.svg";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-third rounded-lg  m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center ">
          {t("contact.copyright")}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black  sm:mt-0">
          <li>
            <a
              href="https://github.com/Afrozens"
              className="hover:underline me-4 md:me-6 flex gap-1 items-center"
            >
              {t("contact.github")}
              <img
                src={githubIcon}
                alt={t("contact.githubAlt")}
                className="w-6 h-6"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jesus-chacon-b54b4a223/"
              className="hover:underline me-4 md:me-6 flex gap-1 items-center"
            >
              {t("contact.linkedin")}
              <img
                src={linkedinIcon}
                alt={t("contact.linkedinAlt")}
                className="w-6 h-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default ContactPage;

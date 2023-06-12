import linkedinIcon from "@/assets/icons/linkedin.svg";
import githubIcon from "@/assets/icons/github.svg";

const Contact = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap justify-center">
      <article className="flex flex-wrap ">
        <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 md:px-6">
          <div className="flex items-start">
            <div className="shrink-0">
              <button className="p-4 bg-white rounded-md shadow-md w-14 h-14 flex items-center justify-center hover:scale-110 transition">
                <a
                  href="https://www.linkedin.com/in/jesus-chacon-b54b4a223/"
                  target="_blank"
                >
                  <img
                    src={linkedinIcon}
                    alt="linkedin icon logotype"
                    className="w-16 h-16"
                  />
                </a>
              </button>
            </div>
            <div className="grow ml-6">
              <p className="font-bold mb-1">Linkedin</p>
              <p className="text-gray-500">Jesus Chacon</p>
            </div>
          </div>
        </div>
        <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 md:px-6">
          <div className="flex align-start">
            <div className="shrink-0">
              <button className="p-4 bg-white rounded-md shadow-md w-14 h-14 flex items-center justify-center hover:scale-110 transition">
                <a href="https://github.com/Afrozens" target="_blank">
                  <img
                    src={githubIcon}
                    alt="github icon logotype"
                    className="w-16 h-16"
                  />
                </a>
              </button>
            </div>
            <div className="grow ml-6">
              <p className="font-bold mb-1">Github</p>
              <p className="text-gray-500">Afrozens</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;

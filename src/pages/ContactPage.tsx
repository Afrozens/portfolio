import { Button, ContactForm } from "@/components";
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const ContactPage = () => {
  return (
    <article className="min-h-[60vh] w-full p-6 pr-14 flex flex-col items-center bg-secundary md">
      <section className="mb-32 text-gray-800">
    <div className="flex justify-center">
      <div className="text-center lg:max-w-3xl md:max-w-xl">
        <h2 className="text-4xl font-bold mb-12 px-6">Contact us</h2>
      </div>
    </div>
      <ContactForm />
      </section>
    </article>
  );
};

export default ContactPage;

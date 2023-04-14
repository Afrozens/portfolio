import { useRef } from "react";
import emailjs from "@emailjs/browser";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import githubIcon from "@/assets/icons/github.svg";
import toast from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast.success(`${result}, thanks for message!`)
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-12/12 px-3 lg:px-6">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
              name="user_name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
              name="user_email"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
            form-control
            block
            w-full
            h-48
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
              id="exampleFormControlTextarea13"
              placeholder="Message"
              name="message"
            />
          </div>
          <div className="form-group form-check text-center mb-6"></div>
          <button
            type="submit"
            className="
          w-full
          px-6
          py-2.5
          bg-primary
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-secundary hover:shadow-lg
          focus:bg-secundary focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-secundary active:shadow-lg
          transition
          duration-150
          ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full flex lg:justify-center lg:items-center lg:w-7/12">
        <div className="flex flex-wrap ">
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <button className="p-4 bg-white rounded-md shadow-md w-14 h-14 flex items-center justify-center hover:scale-110 transition">
                  <img
                    src={linkedinIcon}
                    alt="linkedin icon logotype"
                    className="w-16 h-16"
                  />
                </button>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">Linkedin</p>
                <p className="text-gray-500">Jesus Chacon</p>
              </div>
            </div>
          </div>
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex align-start">
              <div className="shrink-0">
                <button className="p-4 bg-white rounded-md shadow-md w-14 h-14 flex items-center justify-center hover:scale-110 transition">
                  <img
                    src={githubIcon}
                    alt="github icon logotype"
                    className="w-16 h-16"
                  />
                </button>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">Github</p>
                <p className="text-gray-500">Afrozens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

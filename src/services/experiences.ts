import { v4 as uuid } from "uuid";
import { Experience } from "@/interfaces/Experience";

export const experiences: Experience[] = [
  {
    id: uuid(),
    title: "Freelancer Frontend",
    date: "2023 Apr - Present",
    description:
      "Develop functionalities to specific assigned modules. Using Typescript, React and Next. Validating forms and assigning captchas to specific forms of the application. Connecting specific endpoints to submit handlers. Layout and fix layouts with Tailwind.",
  },
  {
    id: uuid(),
    title: "Freelancer Frontend",
    date: "2023 Jan - 2023 Apr",
    description:
      "Integrating JWT on the client side and handling user data states with Redux and Context, handling errors in the main API with Axios Interceptor and displaying them on screen with Notistack, optimizing application performance, code organization and developing functionalities such as form validation and implementing Captchas (V3).",
  },
];

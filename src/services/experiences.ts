import { v4 as uuid } from "uuid";
import { Experience } from "@/interfaces/Experience";

export const experiences: Experience[] = [
  {
    id: uuid(),
    title: "Autonomous Frontend - No Country",
    date: "2023 Apr - 2023 Jun",
    description:
      "Development of the main logic on the Client side, plus Redux integrations, troubleshooting, integration of Server Side Rendering with Next, creation of Typescript models representative of the business logic, integration of fetching in server components and layout and implementation of the component logic.",
  },
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

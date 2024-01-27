import { Project } from "@/interfaces";
import { v4 as uuid } from "uuid";

export const projects: Project[] = [
  {
    id: uuid(),
    title: "Dashboard and aplication for creation of companies LLC",
    subTitle:
      "Development of frontend and backend business logic, role management, JWT-based authentication, multi-pass registration and stripe management, handling various rendering and design patterns for smooth operation with Clean Arquitecture in mind.",
    link: "#",
    stack: [
      "python",
      "javascript",
      "mysql",
      "typescript",
      "react",
      "next",
      "fastapi",
    ],
    preview: "https://i.imgur.com/n8iHOHQ.png",
  },
  {
    id: uuid(),
    title: "Dashboard and aplication for handling food recipe",
    subTitle:
      "Total refactoring from Vue 2 and Laravel 8 to Vue 3 and Laravel 10, change from Vuetify to components from scratch, changes in structuring in both backend and frontend; separation of view logic, with business logic and view in frontend and improved UX",
    link: "https://pruebas03.esmediterraneo.es/",
    stack: ["javascript", "mysql", "typescript", "laravel", "vue", "inertia"],
    preview: "https://i.imgur.com/xSYNJ2u.png",
  },
  {
    id: uuid(),
    title: "CRM - Dashboard for Market management",
    subTitle:
      "Frontend development using the 'Atomic Design' philosophy, separating view, view logic and business logic, adapting to Laravel's modular architecture. Relying on design and rendering patterns for the proper functioning and performance, approximately 20 filters for each module generating them dynamically.",
    link: "https://merkapulgas.co/",
    stack: ["javascript", "mysql", "typescript", "vue", "laravel", "inertia"],
    preview: "https://i.imgur.com/Pz0YoTy.png",
  },
  {
    id: uuid(),
    title: "Business Chat with Sockets (Proxy and Observer)",
    subTitle:
      "Development of a chat for a CRM taking into account the project was in Javascript Vanilla and tried to have a structure and based on patterns to have an organized and functional code, the chat with uploading images and documents, linking with Twilio to send copies by SMS and Whatsapp.",
    link: "https://app.workupcloud.com/landlord/admin/dashboard",
    stack: ["javascript", "mysql", "laravel"],
    preview: "https://i.imgur.com/067Yxok.png",
  },
  {
    id: uuid(),
    title: "'Cotizador bolivares'",
    subTitle:
      "Development of a quotation engine taking into account the architecture and structuring, the use of Typescript and the correct handling of the view logic and cache.",
    link: "https://cotizador-bolivar-dolares-app.vercel.app/",
    stack: ["javascript", "typescript", "react"],
    preview: "https://i.imgur.com/koO4Fve.png",
  },
  {
    id: uuid(),
    title: "Burofy",
    subTitle:
      "Development of an application using rendering patterns in addition to the use of interfaces and/or types generated with typescript and taking into account the 'Atomic Design'.",
    link: "https://c11-18-ft-java-react-buro-fy-a1q7.vercel.app/",
    stack: ["javascript", "typescript", "react", "next"],
    preview: "https://i.imgur.com/AxhpljW.png",
  },
  {
    id: uuid(),
    title: "Arrow Music",
    subTitle:
      "Landing Page taking into account the organization and structuring with vanilla CSS without using technologies based on this, in addition to taking into account the philosophy of 'minimalist code'.",
    link: "https://jesus-chacon-maquetador-26.vercel.app/",
    stack: ["javascript", "react"],
    preview: "https://i.imgur.com/yTLYQdk.png",
  },
  {
    id: uuid(),
    title: "Likes mobile",
    subTitle:
      "Technical test with the use of styled component and focusing on the 'Container/Presentational' design pattern and the use of Firebase ",
    link: "https://freelancer-ricky-monday.vercel.app",
    stack: ["javascript", "react", "firebase"],
    preview: "https://i.imgur.com/dSmhT8P.png",
  },
];

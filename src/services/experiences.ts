import { v4 as uuid } from "uuid";
import { Experience } from "@/interfaces/Experience";

export const experiences: Experience[] = [
    {
    id: uuid(),
    title: 'Software Developer - Nacer Digital',
    date: '2026 May - Currently',
    description: 'Development of an administrative web/mobile application for the advertising market, specifically for managing billboards and other forms of advertising (wall displays, LED screens, etc.). Development of modules using RAG and LLM for an application used for learning English with artificial intelligence. Development of modules for a job search application specifically targeting Latin American talent specializing in AI. Development of an application using RAG (Chunk Late) and token embedding to manage information related to bank loans.'
  },
  {
    id: uuid(),
    title: 'Software Developer - Contractor (Lucid Motors, Swap Ecommerce, Discoverist, GENERAL Inc [Fujitsu General])',
    date: ' 2025 Jul - 2026 May',
    description: 'Development of modules handling the view and view logic, orchestrated using micro-frontends (Build Time Integration – Packages, and in other applications using a Single SPA as the orchestrator with Module Federation as the code-loading mechanism). \n\n Development and implementation of solutions on AWS using services such as Lambda, ECS, EC2, and Fargate.  \n\n Participation in the centralization of observability using DataDog and AWS Lambda Forwarder for applications on AWS Fargate, contributing to the standardization of logs (JSON) and the automation of metrics.\n\nBuilding CI/CD pipelines with AWS CDK for projects, integrating CodePipeline, CodeArtifact, and IAM permission management. \n\nDevelopment of an automated product enrichment system using Python, FastAPI, and MongoDB \n\n Implemented image processing using AI models (BLIP, CLIP) for the automatic generation of descriptions and ALT tags. \n\nCreated data pipelines for transforming and loading product catalogs from multiple CSV sources. \n\nIntegrated with OpenAI GPT and LangChain to generate SEO-optimized content and product metadata'
  },
  {
    id: uuid(),
    title: 'Software Developer - MOA Travel',
    date: ' 2024 Mar - 2026 Ene',
    description: 'Development of a web application for managing agencies and users in the booking of trips and activities, as well as the operational logic for the administrative side to manage and monitor users and agencies'
  },
  {
    id: uuid(),
    title: 'Software Developer - Simplified Practice',
    date: ' 2025 Abr - 2025 Jul',
    description: 'Development of view logic and maintenance of Shopify store modules, as well as theme creation using Liquid. (Four Seasons, Clean Program) Development of a web application with client-side socket communication built using Vue.'
  },
  {
    id: uuid(),
    title: "Software Developer - Exceptia",
    date: "2024 Ago - 2025 Mar",
    description: "Development and maintenance of web application (WEB3) on the frontend side, related to mining and cryptocurrencies. Development and orchestration of web application structure related to dating and escorts."
  },
  {
    id: uuid(),
    title: 'Software Developer - MOA Travel',
    date: '2024 Mar - Current',
    description: 'Development of a web application for the management of agencies and users for the contracting of trips and activities, in addition to the logic of the operation in the administrative part for the management and control of the users/agencies.'
  },
  {
    id: uuid(),
    title: 'Software Developer - Simplified Practice',
    date: '2024 Jun - 2024 Sept',
    description: 'Web application development mainly for the sale of medicines (specific), transmitting user data to specific apis for the communication of doctors and pharmacies, for an automated management of data and shipments. Handling different libraries for the payment process, as well as a cron for the handling of payment subscriptions with Card Connect.'
  },
  {
    id: uuid(),
    title: 'Software Developer - NextStation',
    date: '2024 Mar - 2024 May',
    description: 'Development of an application for the management of entities in addition to the control, monitoring and work behavior. Development with FastApi and PostgreSQL on the server side, in addition to the use of RabbitMQ as message broker for the communication of micro services, Development with Typescript, Vue and Nuxt for the client side.'
  },
  {
    id: uuid(),
    title: "Independent Web Developer - Avoxus",
    date: "2023 Dec - 2024 Mar",
    description:
      "Development of a web application with multi-step, role management, authentication and authorization, use of stripe API, and business logic development. handling management of LLC company creation. Both Frontend and Backend.",
  },
  {
    id: uuid(),
    title: "Independent Web Developer - Es Mediterraneo",
    date: "2023 Nov - 2024 Jan",
    description:
      "Redesigning the Frontend from scratch of an existing application with administrative panel and user dashboard, and refactor the backend, upgrade to a stable version, stable in both Vue (from Vue 2 to Vue 3) and Laravel (from Laravel 8 to Laravel 10) and inertia.",
  },
  {
    id: uuid(),
    title: "Web Developer - Novadeha SAS",
    date: "2023 Jun - 2023 Dec",
    description:
      "Refactored and scaled frontend architecture of complex app. Designed and implemented performance, scalability and maintainability improvements. Refactored vanilla JavaScript frontend applying SOLID principles and design patterns to improve code quality. Led Vue.js frontend project defining full architecture and establishing module development guidelines using best practices. In charge of preventive and corrective maintenance, integration of dynamic and reusable components in Laravel/Vue.js frontend with Inertia.js. Experienced in refactoring, scaling and optimizing frontend architecture using Vue, JavaScript and design patterns.",
  },
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
    date: "2023 Apr - 2023 May",
    description:
      "Develop functionalities to specific assigned modules. Using Typescript, React and Next. Validating forms and assigning captchas to specific forms of the application. Connecting specific endpoints to submit handlers. Layout and fix layouts with Tailwind.",
  },
  {
    id: uuid(),
    title: "Freelancer Frontend",
    date: "2022 Dec - 2023 Apr",
    description:
      "Integrating JWT on the client side and handling user data states with Redux and Context, handling errors in the main API with Axios Interceptor and displaying them on screen with Notistack, optimizing application performance, code organization and developing functionalities such as form validation and implementing Captchas (V3).",
  },
];

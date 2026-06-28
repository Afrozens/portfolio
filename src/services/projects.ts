import { Project } from "@/interfaces";
import { v4 as uuid } from "uuid";

export const projects: Project[] = [
  {
    id: uuid(),
    title: "Tutor-AI English",
    subTitle:
    "An English tutoring platform for Spanish-speaking students, with three roles: Student, Teacher, and Admin. The core value proposition is that students practice conversational English with AI, receiving real-time grammar corrections and structured feedback. GPT-4 or GPT-4 Mini (default). Each feature has its own specialized prompt builder (6 builders) that incorporates business rules, the student’s language mode, and contextual history. 4-stage pipeline — content generation → intent initiation → student responses → extraction + evaluation + XP.",
    link: "",
    stack: [
      "react",
      "next",
      "typescript",
      "nest",
      "postgresql",
      "langgraph",
      "llm"
    ],
    preview: "https://i.imgur.com/q04KJhU.png",
  },
  {
    id: uuid(),
    title: "ZazaCorp",
    subTitle:
    "A platform for managing outdoor advertising inventory (billboards, digital screens, bus stops, advertising kiosks, etc.) and coordinating fieldwork between account executives and field agents",
    link: "",
    stack: [
      "react",
      "next",
      "typescript",
      "nest",
      "postgresql",
    ],
    preview: "https://i.imgur.com/YnzuVSf.png",
  },
  {
    id: uuid(),
    title: "Swap Ecommerce",
    subTitle:
    " Modules for frontend and storefront authentication; semantic embeddings (vector search), hybrid search (keyword + semantic), and reranking, using PostgreSQL with pgvector and Vertex AI. An event-driven pipeline via Pub/Sub that automatically generates visual descriptions, alt text, filters, and embeddings (text and image). ",
    link: "https://www.discoverist.ai/",
    stack: [
      "react",
      "next",
      "typescript",
      "nest",
      "postgresql",
      "python",
      "fastapi",
      "langgraph",
      "llm"
    ],
    preview: "https://i.imgur.com/EicB5Cd.png",
  },
  {
    id: uuid(),
    title: "Discoverist",
    subTitle:
    "An AI backend for e-commerce that acts as middleware between Shopify stores and multiple AI services. At its core is a catalog enrichment pipeline: it imports products from Shopify, CSV, FTP, or URLs, processes them with OpenAI to generate optimized descriptions, SEO metadata, titles for Amazon/Google/eBay/Instagram, smart tags, and taxonomy. It manages a brand knowledge base with vector embeddings in Pinecone for semantic search, creates voice-tone profiles, and generates dynamic discounts in Shopify. It includes a quiz engine, clickstream analytics with Spark, configurable widgets (bundles, pairs, outfits, suggestions), authentication with AWS Cognito, and GDPR-compliant webhook handling. All built with asynchronous FastAPI, MongoDB, serverless deployment with Lambda, and orchestration on AWS.",
    link: "https://www.discoverist.ai/",
    stack: [
      "react",
      "typescript",
      "next",
      "mongodb",
      "python",
      "fastapi",
      "langgraph",
      "llm"
    ],
    preview: "https://i.imgur.com/ySSgSl5.png",
  },
  {
    id: uuid(),
    title: "Portal Lucid Motors",
    subTitle:
    "Internal administrative portal for Lucid Motors that enables pricing managers to manage vehicle pricing configurations (Air and Gravity) across multiple markets (US, Canada, Europe, KSA, UAE), channels (B2C, B2B, B2G, B2X), and environments (dev → stage → prod). Micro frontend using NPM packages via build-time composition",
    link: "https://lucidmotors.com/",
    stack: [
      "react",
      "typescript",
      "next",
      "javascript"
    ],
    preview: "https://i.imgur.com/p3JVsmF.png",
  }, 
  {
    id: uuid(),
    title: "General Inc (Fujitsu General)",
    subTitle:
    "Development of modules handling the view and view logic, orchestrated using micro-frontends (Build Time Integration – Packages; and in other applications using a Single SPA as the orchestrator, with Module Federation as the code-loading mechanism)",
    link: "",
    stack: [
      "vue",
      "typescript",
    ],
    preview: "https://i.imgur.com/8lVie7K.png",
  },
  {
    id: uuid(),
    title: "Shop Four Seasons",
    subTitle:
    "Refactoring, maintenance, and development of Shopify modules. Also integrating theme, template, and schema architecture using liquid",
    link: "https://shop.fourseasons.com/",
    stack: [
      "shopify",
      "liquid"
    ],
    preview: "https://i.imgur.com/mDHtjNE.png",
  },
  {
    id: uuid(),
    title: "Clean Programm",
    subTitle:
    "Refactoring and maintenance based on Shopify and React.",
    link: "https://www.cleanprogram.com/",
    stack: [
      "javascript",
      "typescript",
      "react",
      "shopify",
      "liquid",
    ],
    preview: "https://i.imgur.com/OW5zhGn.png",
  },
  {
    id: uuid(),
    title: "Aplication (web3) for mining and cryptocurrencies",
    subTitle:
    "Refactoring, maintenance and frontend development of this web3 orchestrated application. Connection of apis, authentication, and data management in the dashboard of both the administrator and users.",
    link: "https://racha.network/",
    stack: [
      "javascript",
      "typescript",
      "react",
      "next",
    ],
    preview: "https://i.imgur.com/eCku0vH.png",
  },
  {
    id: uuid(),
    title: "Aplication for medications delivery and management",
    subTitle:
    "Frontend and backend development (later migrated to Nest) in Nuxt, as well as extensively connecting apis for automated management of sending crucial health information of users to private apis, in order to connect doctors, pharmacies and the user.",
    link: "https://hombrex.com/",
    stack: [
      "javascript",
      "typescript",
      "vue",
      "nuxt",
    ],
    preview: "https://i.imgur.com/HyQ3SCA.png",
  },
  {
    id: uuid(),
    title: "MOA Travels - Aplication for travels",
    subTitle:
    "Development of frontend and backend business logic, role management, JWT based authentication, administrative and management system for agencies, travel contact interfaces for users and administrative system for super users, stripe management, handling of various rendering patterns and design for smooth operation with Clean Arquitecture.",
    link: "moa.travel",
    stack: [
      "python",
      "javascript",
      "postgresql",
      "typescript",
      "react",
      "next",
      "fastapi",
    ],
    preview: "https://i.imgur.com/h0Gacoi.png",
  },
  {
    id: uuid(),
    title: "Aplication for escorts",
    subTitle:
    "Frontend development from scratch of an application for escorts.",
    link: "#",
    stack: [
      "javascript",
      "typescript",
      "react",
      "next",
    ],
    preview: "https://i.imgur.com/xJiPfuF.png",
  },
  {
    id: uuid(),
    title: "Application for the control, monitoring and organization of companies",
    subTitle:
      "Development of frontend and backend business logic (microservices), role management, JWT based authentication, administrative and management system for companies as well as branches and divisions of the companies. Payment management, integration of employee task monitoring and control system, handling of various rendering patterns and design for smooth operation with Clean Arquitecture.", 
    link: "https://app.taskr.cl/",
    stack: [
      "python",
      "javascript",
      "postgresql",
      "typescript",
      "rabbitMQ",
      "vue",
      "nuxt",
      "fastapi",
    ],
    preview: "https://i.imgur.com/nBPVeUX.png",
  },
  {
    id: uuid(),
    title: "Dashboard and aplication for creation of companies LLC",
    subTitle:
      "Development of frontend and backend business logic, role management, JWT-based authentication, multi-pass registration and stripe management, handling various rendering and design patterns for smooth operation with Clean Arquitecture in mind.",
    link: "https://dashboard.avoxus.com/",
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
    link: "https://pruebas03.esmediterraneo.es/login",
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
];

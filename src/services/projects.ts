import i18n from "@/i18n";
import { Project } from "@/interfaces";

const projectMeta: Omit<Project, "title" | "subTitle">[] = [
  { id: "", link: "", stack: ["react", "next", "typescript", "nest", "postgresql", "langgraph", "llm"], preview: "https://i.imgur.com/q04KJhU.png" },
  { id: "", link: "", stack: ["react", "next", "typescript", "nest", "postgresql"], preview: "https://i.imgur.com/YnzuVSf.png" },
  { id: "", link: "", stack: ["react", "next", "typescript", "nest", "postgresql", "python", "fastapi", "langgraph", "llm"], preview: "https://i.imgur.com/EicB5Cd.png" },
  { id: "", link: "", stack: ["react", "typescript", "next", "mongodb", "python", "fastapi", "langgraph", "llm"], preview: "https://i.imgur.com/ySSgSl5.png" },
  { id: "", link: "", stack: ["react", "typescript", "next", "javascript"], preview: "https://i.imgur.com/p3JVsmF.png" },
  { id: "", link: "", stack: ["vue", "typescript"], preview: "https://i.imgur.com/8lVie7K.png" },
  { id: "", link: "https://shop.fourseasons.com/", stack: ["shopify", "liquid"], preview: "https://i.imgur.com/mDHtjNE.png" },
  { id: "", link: "https://www.cleanprogram.com/", stack: ["javascript", "typescript", "react", "shopify", "liquid"], preview: "https://i.imgur.com/OW5zhGn.png" },
  { id: "", link: "https://racha.network/", stack: ["javascript", "typescript", "react", "next"], preview: "https://i.imgur.com/eCku0vH.png" },
  { id: "", link: "https://hombrex.com/", stack: ["javascript", "typescript", "vue", "nuxt"], preview: "https://i.imgur.com/HyQ3SCA.png" },
  { id: "", link: "https://moa.travel", stack: ["python", "javascript", "postgresql", "typescript", "react", "next", "fastapi"], preview: "https://i.imgur.com/h0Gacoi.png" },
  { id: "", link: "", stack: ["javascript", "typescript", "react", "next"], preview: "https://i.imgur.com/xJiPfuF.png" },
  { id: "", link: "https://app.taskr.cl/", stack: ["python", "javascript", "postgresql", "typescript", "rabbitMQ", "vue", "nuxt", "fastapi"], preview: "https://i.imgur.com/nBPVeUX.png" },
  { id: "", link: "https://dashboard.avoxus.com/", stack: ["python", "javascript", "mysql", "typescript", "react", "next", "fastapi"], preview: "https://i.imgur.com/n8iHOHQ.png" },
  { id: "", link: "https://pruebas03.esmediterraneo.es/login", stack: ["javascript", "mysql", "typescript", "laravel", "vue", "inertia"], preview: "https://i.imgur.com/xSYNJ2u.png" },
  { id: "", link: "https://merkapulgas.co/", stack: ["javascript", "mysql", "typescript", "vue", "laravel", "inertia"], preview: "https://i.imgur.com/Pz0YoTy.png" },
  { id: "", link: "https://app.workupcloud.com/landlord/admin/dashboard", stack: ["javascript", "mysql", "laravel"], preview: "https://i.imgur.com/067Yxok.png" },
  { id: "", link: "https://cotizador-bolivar-dolares-app.vercel.app/", stack: ["javascript", "typescript", "react"], preview: "https://i.imgur.com/koO4Fve.png" },
  { id: "", link: "https://c11-18-ft-java-react-buro-fy-a1q7.vercel.app/", stack: ["javascript", "typescript", "react", "next"], preview: "https://i.imgur.com/AxhpljW.png" },
  { id: "", link: "https://jesus-chacon-maquetador-26.vercel.app/", stack: ["javascript", "react"], preview: "https://i.imgur.com/yTLYQdk.png" },
];

export const getProjects = (): Project[] => {
  const items = i18n.t("projectCards", { returnObjects: true }) as Array<{
    title: string;
    subTitle: string;
  }>;
  return items.map((item, index) => ({
    id: `proj-${index}`,
    title: item.title,
    subTitle: item.subTitle,
    link: projectMeta[index]?.link ?? "",
    stack: projectMeta[index]?.stack ?? [],
    preview: projectMeta[index]?.preview ?? "",
  }));
};

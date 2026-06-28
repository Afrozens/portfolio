export type typeStack =
  | "javascript"
  | "typescript"
  | "python"
  | "mysql"
  | "postgresql"
  | "fastapi"
  | "next"
  | "react"
  | "vue"
  | "inertia"
  | "firebase"
  | "laravel"
  | "rabbitMQ"
  | "nuxt"
  | "nest"
  | "mongodb"
  | "llm"
  | "liquid"
  | "langgraph"
  | "shopify";

export interface Project {
  id: string;
  title: string;
  subTitle: string;
  link: string;
  stack: typeStack[];
  preview: string;
}

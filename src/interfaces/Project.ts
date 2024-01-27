export type typeStack =
  | "javascript"
  | "typescript"
  | "python"
  | "mysql"
  | "fastapi"
  | "next"
  | "react"
  | "vue"
  | "inertia"
  | "firebase"
  | "laravel";

export interface Project {
  id: string;
  title: string;
  subTitle: string;
  link: string;
  stack: typeStack[];
  preview: string;
}

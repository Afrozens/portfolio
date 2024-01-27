import { typeStack } from "@/interfaces";
import React from "react";

const SelectTech = ({ stack }: { stack: typeStack }) => {
  const techActions = {
    javascript: "/tech/javascript.png",
    typescript: "/tech/typescript.png",
    python: "/tech/python.svg",
    mysql: "/tech/mysql.svg",
    fastapi: "/tech/fastapi.svg",
    react: "/tech/react.png",
    next: "/tech/next.png",
    vue: "/tech/vue.png",
    laravel: "/tech/laravel.png",
    inertia: "/tech/inertia.png",
    firebase: "/tech/firebase.png",
  };
  return (
    <div className="w-10 h-10 ">
      <img
        className="bg-cover w-full h-full"
        src={techActions[stack]}
        alt={techActions[stack]}
      />
    </div>
  );
};

export default SelectTech;

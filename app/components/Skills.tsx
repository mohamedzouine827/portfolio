"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import { SiJavascript, SiMysql, SiNextdotjs, SiPython, SiReact, SiTailwindcss } from "react-icons/si";

export default function Skills() {
    const skils = [
        {
            title : "React.Js",
            icon: SiReact
        },
        {
            title : "Next.Js",
            icon: SiNextdotjs
        },
        {
            title : "Javascript",
            icon: SiJavascript
        },
        {
            title : "Python",
            icon: SiPython
        },
        {
            title : "Node.Js",
            icon: SiTailwindcss
        },
        {
            title : "SQL",
            icon: SiMysql
        },
    ]
  return (
    <>
      <div className="hover:line-through decoration-black ">
        <Title text="Skills✨" />
      </div>
      <div className="justify-center items-center max-w-5xl mx-auto px-8">
        <HoverEffect items={skils}/>
      </div>
    </>
  );
}

"use client";
import React from "react";
// import githubfoto from '@/'
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "React Js",
    designation: "Software Engineer",
    image: "/react.png",
  },
  {
    id: 2,
    name: "TypeScript",
    designation: "Product Manager",
    image: "/typescript.webp",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/javascript.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/next.svg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/github.webp",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/github.webp",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center  gap-2 justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

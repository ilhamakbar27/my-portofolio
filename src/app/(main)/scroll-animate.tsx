"use client";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { motion } from "framer-motion";
// import { AuroraBackground } from "@/components/ui/aurora-bg";

export function HeroScrollDemo() {
  return (
    // <AuroraBackground className="dark" >
    <div className="flex flex-col bg-[#0C0C0C]  ">
      <ContainerScroll
        titleComponent={
          <>
            <motion.h1
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="text-4xl pb-10 font-semibold  tracking-wide text-white ">
              <span className="text-4xl tracking-tight  md:text-[4rem] font-extrabold mt-1 leading-none">
                I'm a Fullstack Developer
              </span>{" "}
              <span className="max-md:hidden  ">
                based in Indonesia. In my dynamic 1+ years as a software
                developer, I've engaged in diverse areas, from coding efficiency
                to elevating user experiences. My journey includes front-end
                development, software architecture, and refining app UI/UX. I
                take pride in navigating various roles in this ever-evolving
                tech landscape.
              </span>
              <br />
            </motion.h1>
          </>
        }>
        <Image
          src={`/contoh.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

// export const users = [
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Sarah Singh",
//     designation: "Founder, Sarah's Kitchen",
//     image: "https://picsum.photos/id/11/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "John Doe",
//     designation: "Software Engineer, Tech Corp",
//     image: "https://picsum.photos/id/12/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Jane Smith",
//     designation: "Product Manager, Innovate Inc",
//     image: "https://picsum.photos/id/13/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Robert Johnson",
//     designation: "Data Scientist, DataWorks",
//     image: "https://picsum.photos/id/14/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Emily Davis",
//     designation: "UX Designer, DesignHub",
//     image: "https://picsum.photos/id/15/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Michael Miller",
//     designation: "CTO, FutureTech",
//     image: "https://picsum.photos/id/16/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Sarah Brown",
//     designation: "CEO, StartUp",
//     image: "https://picsum.photos/id/17/300/300",
//   },
//   {
//     name: "James Wilson",
//     designation: "DevOps Engineer, CloudNet",
//     image: "https://picsum.photos/id/18/300/300",
//     badge: "Something",
//   },
//   {
//     name: "Patricia Moore",
//     designation: "Marketing Manager, MarketGrowth",
//     image: "https://picsum.photos/id/19/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Richard Taylor",
//     designation: "Frontend Developer, WebSolutions",
//     image: "https://picsum.photos/id/20/300/300",
//   },
//   {
//     name: "Linda Anderson",
//     designation: "Backend Developer, ServerSecure",
//     image: "https://picsum.photos/id/21/300/300",
//   },
//   {
//     name: "William Thomas",
//     designation: "Full Stack Developer, FullStack",
//     image: "https://picsum.photos/id/22/300/300",
//     badge: "Badger",
//   },
//   {
//     name: "Elizabeth Jackson",
//     designation: "Project Manager, ProManage",
//     image: "https://picsum.photos/id/23/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "David White",
//     designation: "Database Administrator, DataSafe",
//     image: "https://picsum.photos/id/24/300/300",
//     badge: "Advocate",
//   },
//   {
//     name: "Jennifer Harris",
//     designation: "Network Engineer, NetConnect",
//     image: "https://picsum.photos/id/25/300/300",
//   },
//   {
//     name: "Charles Clark",
//     designation: "Security Analyst, SecureIT",
//     image: "https://picsum.photos/id/26/300/300",
//   },
//   {
//     name: "Susan Lewis",
//     designation: "Systems Analyst, SysAnalyse",
//     image: "https://picsum.photos/id/27/300/300",
//   },
//   {
//     name: "Joseph Young",
//     designation: "Mobile Developer, AppDev",
//     image: "https://picsum.photos/id/28/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Margaret Hall",
//     designation: "Quality Assurance, BugFree",
//     image: "https://picsum.photos/id/29/300/300",
//     badge: "Developer",
//   },
// ];

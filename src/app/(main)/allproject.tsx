import React from "react";
import { ThreeDCardDemo } from "./projects";
// import { motion } from "framer-motion";



const Allproject = () => {
  return (
    <div className="px-[100px] max-md:px-5 pt-20 text-white bg-[#0C0C0C] ">
      <h1 className="text-6xl font-[600] max-md:text-4xl text-center tracking-tight ">
        All Projects
      </h1>
      
      <div className="grid grid-cols-3 max-md:grid-cols-1 ">
        <ThreeDCardDemo />
        {/* <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo /> */}
      </div>
    </div>
  );
};

export default Allproject;

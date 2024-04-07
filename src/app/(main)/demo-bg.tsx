"use client";

import { AuroraBackground } from "@/components/ui/aurora-bg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="light">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-5xl tracking-tighter md:text-8xl font-bold  text-center">
          I&apos;m Ilham Akbar
        </div>
        <div className="font-extralight text-base md:text-5xl  py-4">
          A Software Developer
        </div>
        <Button className="rounded-full" size={"lg"}>
          Download Resume
        </Button>
      </motion.div>
    </AuroraBackground>
  );
}

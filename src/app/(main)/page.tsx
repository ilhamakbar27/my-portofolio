import React from "react";
import { AuroraBackgroundDemo } from "./demo-bg";
import { HeroScrollDemo } from "./scroll-animate";
import Allproject from "./allproject";
import { Footer } from "@/components/footer";
// import { motion } from "framer-motion";
const page = () => {
  return (
    <div>
      <AuroraBackgroundDemo />;
      <HeroScrollDemo />
      <Allproject />
      <Footer />
    </div>
  );
};

export default page;

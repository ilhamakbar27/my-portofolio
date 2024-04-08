import React from "react";
import { AuroraBackgroundDemo } from "./demo-bg";
import { HeroScrollDemo } from "./scroll-animate";
import Allproject from "./allproject";
import { Footer } from "@/components/footer";





const page = () => {
  return (
    <>
      <AuroraBackgroundDemo />;
      <HeroScrollDemo />
      <Allproject />
      <Footer />
    </>
  
  );
};

export default page;

import React from "react";
import { Metadata } from "next";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "This is demo Layout",
  description: "Generated by create next app",
};

const DemoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex justify-center  items-center">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default DemoLayout;

import AboutPhotography from "@/components/AboutPhotography";
import Divider from "@/components/Divider";
import Navbar from "@/components/Navbar";
import Photography from "@/components/Photography";
import Team from "@/components/Team";
import React from "react";

const about = () => {
  return (
    <div className="w-full h-auto relative">
      <Navbar />
      <Team />
      <AboutPhotography />
      <Photography />
    </div>
  );
};

export default about;

import Hero from "@/components/Hero";
import Insta from "@/components/Insta";
import Kickstart from "@/components/Kickstart";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import React from "react";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Divider from "@/components/Divider";

const index = () => {
  return (
    <main className="w-full h-auto overflow-x-hidden z-20">
      <Navbar />
      <Hero />
      <Insta />
      <Project />
      <Kickstart />
      <Divider />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default index;

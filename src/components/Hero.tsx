import React from "react";
import Image from "next/image";
import SecondPage from "./Marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { FaArrowRight } from "react-icons/fa";

const raleway = Raleway({
  subsets: ["latin"],
});
const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});
const Hero = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
      className={`${raleway.className} w-full h-screen flex items-center justify-center flex-col px-4 relative`}
    >
      <div className="w-full max-w-5xl h-fit flex flex-col z-20">
        <div className="w-full max-w-xs mx-auto items-center md:max-w-5xl h-auto gap-8 flex flex-col">
          <h1 className="text-center text-4xl md:text-7xl font-semibold ">
            We are{" "}
            <span
              className={`${bhineka.className} text-red-600 font-normal inline-block relative text-5xl md:text-9xl`}
            >
              Insta Post PH
            </span>
            <br />
            we create content that{" "}
            <span className="text-yellow-400">SELLS!</span>
          </h1>

          <div className="flex w-fit flex-col mx-auto gap-4 ">
            <p className="max-w-xl text-center text-xs md:text-xl text-gray-500 w-full">
              Content marketing and social media marketing agency, helping
              businesses thrive in the digital space, by delivering instant,
              high-end quality content that sells
            </p>
            <div className="w-full gap-2 flex">
              <Button className="bg-green-400">Check out works</Button>
              <Button
                variant={"ghost"}
                className="items-center  justify-center flex gap-2"
              >
                Learn about us <FaArrowRight size={15} />
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full">
          <SecondPage />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

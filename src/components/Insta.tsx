import React from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import SecondPage from "./Marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";

const raleway = Raleway({
  subsets: ["latin"],
});
const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const Insta = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.9,
        },
      }}
      viewport={{
        once: true,
      }}
      className="w-full h-auto mt-12 bg-gray-100/50 py-8"
    >
      <div className="w-full h-2/3 grid md:grid-cols-2">
        <div className="w-full h-full py-20 lg:px-20 md:h-[100%] relative px-4 ">
          <motion.div
            initial={{
              clipPath: "inset(0 100% 0 0)",
            }}
            whileInView={{
              clipPath: "inset(0 0 0 0)",
              transition: {
                duration: 0.7,
              },
            }}
            viewport={{
              once: true,
            }}
            className="h-fit flex relative unded-2xl w-fit bg-red-400"
          >
            <img src="/intern.png" alt="" className="mx-auto object-contain " />
          </motion.div>
        </div>

        <motion.div
          initial={{
            x: "100%",
          }}
          whileInView={{
            x: "0%",
            transition: {
              duration: 0.7,
            },
          }}
          viewport={{
            once: true,
          }}
          className={`${raleway.className} h-auto flex flex-col justify-center w-full px-4 `}
        >
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl max-w-sm md:max-w-2xl">
              Get Ready! To grow your brand with{" "}
              <span className="inline-block text-red-600">
                CONTENT that SELLS!
              </span>{" "}
            </h1>
            <p className="max-w-xl text-lg text-gray-500">
              Insta Post PH delivers Instant & Top Quality Output. Your
              All-In-One Creative Team. We generate results. We create CONTENT
              THAT SELLS. We strategize with you. We study the competitors.
            </p>
            <Button className="w-fit text-xl bg-yellow-400 hover:bg-yellow-200 uppercase p-6">
              Let&apos;s go
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Insta;

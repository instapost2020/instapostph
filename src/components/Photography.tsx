import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
});

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const Photography = () => {
  const plugin = React.useRef();
  const [clicked, setClicked] = useState(false);
  const Images = [
    "/intern.png",
    "/intern.png",
    "/intern.png",
    // "/newoffice.png",
    // "/villar.jpg",
    // "/ja.jpg",
    "/newoffice.png",
    "/newoffice.png",
    // "/two.png",
    // "/ja.jpg",
    // "/newoffice.png",
    // "/two.png",
    // "/newoffice.png",
    // "/villar.jpg",
    // "/ja.jpg",
    // "/newoffice.png",
    // "/logo.png",
    // "/landingbg.png",
    // "/newdvices.png",
    // "/rose.png",
    // "/triplewave.png",
    // "/two.png",
    // "/yellow.png",
    // "/two.png",
    // "/villar.jpg",
  ];

  const [activePic, setActivePic] = useState<string>("");
  return (
    <div className={`${raleway.className} w-full h-auto relative`}>
      <div className="flex flex-col md:flex-row justify-around px-4 gap-5">
        <div className="flex items-center justify-center">
          <h1 className="text-xl sm:text-3xl lg:text-4xl max-w-2xl uppercase font-semibold mx-auto">
            Checkout some of our{" "}
            <span className="text-red-600">Photography</span> works!
          </h1>
        </div>
        <div className=" w-full py-6 mb-12 ">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full py-8"
          >
            <CarouselContent className="">
              {Images.map((item, index) => (
                <CarouselItem className="basic-1/3 md:basis-2/3 lg:basis-2/3 xl:basis-1/3 py-4 w-auto h-full">
                  <div onClick={() => setActivePic(item)} className=" ">
                    <img
                      src={item}
                      alt=""
                      className="object-contain md:object-contain w-96 h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-5" />
            <CarouselNext className="absolute right-5" />
          </Carousel>
        </div>

        {activePic && (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setActivePic("")}
              className="fixed inset-0 flex items-center justify-center bg-background/80 z-50"
            >
              <Button
                size="icon"
                onClick={() => setActivePic("")}
                variant={"default"}
                className="absolute top-5 right-5 rounded-full"
              >
                <XIcon size={16} />
              </Button>
              <motion.div
                onClick={() => setActivePic("")}
                initial={{
                  scale: 0.7,
                }}
                animate={{
                  scale: 1,
                }}
                exit={{
                  scale: 0.7,
                }}
                className="w-full h-full max-w-5xl p-5"
              >
                <img
                  onClick={() => setActivePic("")}
                  src={activePic}
                  alt=""
                  className="object-contain w-full h-full rounded-xl overflow-hidden"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Photography;

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

const raleway = Raleway({
  subsets: ["latin"],
});

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const Photography = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [clicked, setClicked] = useState(false);
  const Images = [
    "/intern.png",
    "/newoffice.png",
    "/villar.jpg",
    "/ja.jpg",
    "/newoffice.png",
    "/two.png",
    "/ja.jpg",
    "/newoffice.png",
    "/two.png",
    "/newoffice.png",
    "/villar.jpg",
    "/ja.jpg",
    "/newoffice.png",
    "/logo.png",
    "/landingbg.png",
    "/newdvices.png",
    "/rose.png",
    "/triplewave.png",
    "/two.png",
    "/yellow.png",
    "/two.png",
    "/villar.jpg",
  ];
  return (
    <div className="w-full h-full relative py-20 bg-gray-100">
      <h1
        className={`${raleway.className} text-5xl text-center pb-12 font-semibold text-gray-700`}
      >
        Checkout our{" "}
        <span
          className={`${bhineka.className} text-7xl tracking-widest text-red-600`}
        >
          Photography
        </span>{" "}
        works!
      </h1>
      {/* <div className="w-full max-w-6xl mx-auto gap-2 space-y-2 columns-2 px-2 md:columns-3 lg:columns-4"> */}
      <div className="w-full flex">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs mx-auto flex "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {Images.map((item, index) => (
                        <img src={item} key={index} alt="" className="" />
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Photography;

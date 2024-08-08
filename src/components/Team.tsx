import React, { useRef } from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { motion, useScroll, useTransform } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
});
const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const Team = () => {
  const team = [
    {
      name: "Jelynson Patricio",
      position: "OWNER | STRATEGIST",
      url: "/team/jelyellow.jpg",
    },
    {
      name: "Julius Patricio",
      position: "OWNER | DIRECTOR",
      url: "/team/julyellow.jpg",
    },
    {
      name: "Sarah De Guzman Napay",
      position: "GENERAL MANAGER",
      url: "/team/sarahyellow.jpg",
    },
    {
      name: "Charrish Mae Napay",
      position: "HUMAN RESOURCES",
      url: "/team/chayellow.jpg",
    },
    {
      name: "Ja Jose",
      position: "ACCOUNT LEAD MANAGER",
      url: "/team/jayellow.jpg",
    },
    {
      name: "Ma Kristina Villar",
      position: "CREATIVE DIRECTOR",
      url: "/team/mayellow.jpg",
    },
    {
      name: "Maria Trexie Jontarciego",
      position: "GRAPHIC ARTIST",
      url: "/team/trexxx.jpg",
    },
    {
      name: "Angela Dulay",
      position: "K.O.L MANAGER",
      url: "/team/gelayyellow.jpg",
    },
    {
      name: "Jason Gotangho",
      position: "VIDEO EDITOR | SALES",
      url: "/team/jasyellow.jpg",
    },
    {
      name: "Angeline Santos",
      position: "VIDEO EDITOR",
      url: "/team/angyellow.jpg",
    },
  ];

  return (
    <div className="w-full h-auto px-4 py-20 bg-white">
      <h1
        className={`${raleway.className} text-center text-2xl md:text-4xl text-gray-800 font-semibold mb-8 uppercase`}
      >
        Let&apos;s meet the CORE{" "}
        <span
          className={`${bhineka.className} text-red-600 text-4xl md:text-6xl`}
        >
          T E A M
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full mx-auto">
        {team.map((item, index) => (
          <motion.a
            initial={{
              clipPath: "inset(100% 0 0 0)",
              opacity: 0.6,
            }}
            whileInView={{
              clipPath: "inset(0 0 0 0)",
              opacity: 1,
              transition: {
                duration: 0.7,
              },
            }}
            viewport={{
              once: true,
            }}
            key={index}
            href="#"
            className="group relative block bg-black"
          >
            <img
              alt=""
              src={item.url}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-background">
                {item.position}
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                {item.name}
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    itong paragraph is for sayings per team, etc... etc.. etc...
                  </p>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Team;

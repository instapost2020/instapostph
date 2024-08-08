import React from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";
const raleway = Raleway({
  subsets: ["latin"],
});
const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});
const Project = () => {
  return (
    <div
      className={`${raleway.className} w-full h-full relative mt-24 gap-4 pb-20`}
    >
      <h1 className={`${raleway.className} text-center text-2xl`}>
        We are INSTA POST PH With more than a decade of experience and 10,000+
        content
      </h1>
      <div className="w-full max-w-7xl mx-auto h-auto relative grid grid-cols-1 md:grid-cols-3 gap-4 px-4  py-8">
        <motion.article
          initial={{
            clipPath: "inset(0 100% 0 0)",
          }}
          whileInView={{
            clipPath: "inset(0 0 0 0)",
            transition: {
              duration: 0.2,
            },
          }}
          className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
        >
          <img
            alt=""
            src="/intern.png"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative h-full hover:bg-none duration-300 transition-all ease-in bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                25th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Photography</h3>
              </a>

              <p className="mt-2  text-sm/relaxed text-white/95">
                Insta Post delivers high-quality photography that showcases your
                brand or products in the best light possible, enhancing your
                overall image and professionalism.
              </p>
            </div>
          </div>
        </motion.article>
        <motion.article
          initial={{
            clipPath: "inset(0 100% 0 0)",
          }}
          whileInView={{
            clipPath: "inset(0 0 0 0)",
            transition: {
              duration: 0.2,
            },
          }}
          className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
        >
          <img
            alt=""
            src="/office.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative  hover:bg-none duration-300 transition-all ease-in bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Videography</h3>
              </a>

              <p className="mt-2  text-sm/relaxed text-white/95">
                Harness the potential of video marketing to amplify your
                bran&apos;s reach and engagement. With our expertise, your
                message will resonate with your audience, leaving a lasting
                impression and driving action
              </p>
            </div>
          </div>
        </motion.article>
        <motion.article
          initial={{
            clipPath: "inset(0 100% 0 0)",
          }}
          whileInView={{
            clipPath: "inset(0 0 0 0)",
            transition: {
              duration: 0.2,
            },
          }}
          className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
        >
          <img
            alt=""
            src="/office.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative h-full hover:bg-none duration-300 transition-all ease-in bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  Social Media Management
                </h3>
              </a>

              <p className="mt-2  text-sm/relaxed text-white/95">
                We curate tailored social media strategies for each month of
                your business, crafted a month in advance, ensuring timely and
                relevant content.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default Project;

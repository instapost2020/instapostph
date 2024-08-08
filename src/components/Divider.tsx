import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});
const Divider = () => {
  return (
    <div>
      <span className="relative flex justify-center py-20">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className={`${raleway.className} relative z-10 bg-white px-6`}>
          Insta Post PH
        </span>
      </span>
    </div>
  );
};

export default Divider;

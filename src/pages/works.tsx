import React from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
});
const works = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className={`${raleway.className} text-4xl`}>
        Programming ongoing...<Link href={"/"}>Click here to go back</Link>
      </h1>
    </div>
  );
};

export default works;

import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { CgMenuRightAlt } from "react-icons/cg";

const raleway = Raleway({
  subsets: ["latin"],
});

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollHandle = () => {
    const scrolled = window.scrollY;

    if (scrolled > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
  });
  return (
    <nav
      className={
        scrolled
          ? `${raleway.className} w-full h-auto fixed top-0 pt-4 z-50 `
          : `${raleway.className} w-full h-auto fixed top-0 pt-0 z-50 bg-white`
      }
    >
      <div
        className={
          scrolled
            ? "w-full max-w-5xl mx-auto h-fit flex items-center justify-between duration-500 transition-all ease-out  text-white bg-gray-400/40 backdrop-blur-sm rounded-full px-3 py-2"
            : "w-full max-w-6xl mx-auto h-fit flex items-center justify-between duration-500 transition-all ease-out text-black bg-white rounded-none px-3 py-2"
        }
      >
        <div className="w-full flex items-center gap-8">
          <div className="w-16 h-12 md:w-24 md:h-16 relative -mt-2">
            <Image src={"/logo.png"} fill alt="Logo" className="object-cover" />
          </div>
          <div className="hidden md:flex gap-4  text-xl uppercase font-semibold">
            <Link
              className="hover:text-red-600 hover:-mt-1 duration-300 transition-all ease-out"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="hover:text-red-600 hover:-mt-1 duration-300 transition-all ease-out"
              href={"about"}
            >
              About
            </Link>
            <Link
              className="hover:text-red-600 hover:-mt-1 duration-300 transition-all ease-out"
              href={"works"}
            >
              Works
            </Link>
            <Link
              className="hover:text-red-600 hover:-mt-1 duration-300 transition-all ease-out"
              href={"gallery"}
            >
              Gallery
            </Link>
            <Link
              className="hover:text-red-600 hover:-mt-1 duration-300 transition-all ease-out"
              href={"/"}
            >
              Shop
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <Button variant={"secondary"}>GET A SCHEDULE</Button>
        </div>
        <CgMenuRightAlt
          size={30}
          onClick={() => setSideMenu(!sideMenu)}
          className="flex md:hidden font-semibold text-red-600"
        />
        <div
          className={
            sideMenu
              ? "w-full h-screen bg-white flex flex-col justify-between px-4 py-3 fixed top-0 right-0 md:hidden duration-300 transition-all ease-in z-50"
              : "w-full h-screen bg-white flex flex-col justify-between px-4 py-3 fixed top-0 right-[-200%] md:hidden duration-500 transition-all ease-in z-50"
          }
        >
          <div></div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-5xl">
              <Link href={"/"}>HOME</Link>
              <Link href={"works"}>WORKS</Link>
              <Link href={"ABOUT"}>ABOUT</Link>
              <Link href={"gallery"}>GALLERY</Link>
              <Link href={"/"}>SHOP</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="bg-yellow-400 hover:bg-yellow-200">
                GET A SCHEDULE
              </Button>
              <Button onClick={() => setSideMenu(!sideMenu)} variant={"ghost"}>
                CLOSE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

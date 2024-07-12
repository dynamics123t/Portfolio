"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header>
      <div className="w-full flex items-center bg-white justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8 ">
        <div className="w-full flex justify-between items-center">
          <nav className="flex items-center justify-center">
            <div
              onClick={() => router.push("/")}
              className="mr-4 rounded relative group cursor-pointer"
            >
              <span className="relative">
                Home
                <span
                  className={`inline-block h-[1px] bg-black absolute left-0 -bottom-0.5
              ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}
              transition-all ease duration-300`}
                ></span>
              </span>
            </div>

            <div
              onClick={() => router.push("/about")}
              className="mr-4 rounded relative group cursor-pointer"
            >
              <span className="relative">
                About
                <span
                  className={`inline-block h-[1px] bg-black absolute left-0 -bottom-0.5
              ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}
              transition-all ease duration-300`}
                ></span>
              </span>
            </div>

            <div
              onClick={() => router.push("/project")}
              className="mr-4 rounded relative group cursor-pointer"
            >
              <span className="relative">
                Project
                <span
                  className={`inline-block h-[1px] bg-black absolute left-0 -bottom-0.5
              ${pathname === "/project" ? "w-full" : "w-0 group-hover:w-full"}
              transition-all ease duration-300`}
                ></span>
              </span>
            </div>

            <div
              onClick={() => router.push("/article")}
              className="mr-4 rounded relative group cursor-pointer"
            >
              <span className="relative">
                Article
                <span
                  className={`inline-block h-[1px] bg-black absolute left-0 -bottom-0.5
              ${pathname === "/article" ? "w-full" : "w-0 group-hover:w-full"}
              transition-all ease duration-300`}
                ></span>
              </span>
            </div>
          </nav>
        </div>

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <div className="flex flex-col items-center justify-center mt-2">
            <MotionLink
              href="/"
              className="flex items-center justify-center rounded-full w-14 h-14 bg-black text-white text-base font-bold"
              whileHover={{
                backgroundColor: [
                  "#121212",
                  "#F19ED2",
                  "#FFB22C",
                  "rgba(253,29,29,1",
                  "rgba(252,176,69,1",
                  "rgba(131,58,180,1",
                  "#FFB22C",
                  "#F19ED2",
                  "#121212",
                ],
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              Ryouji
            </MotionLink>
          </div>
        </div>
        <nav className="flex items-center justify-center flex-wrap lg:mt-2 ">
          <div className="flex items-center justify-center">
            <a href="https://github.com/dynamics123t" target="_blank">
              <Image
                className="cursor-pointer w-6 mr-3 transition-transform duration-300 hover:-translate-y-2"
                src="/images/github.svg"
                alt=""
                width={25}
                height={25}
              />
            </a>
            <div>
              <Image
                className="cursor-pointer w-6 mx-3 transition-transform duration-300 hover:-translate-y-2"
                src="/images/youtube.svg"
                alt=""
                width={25}
                height={25}
              />
            </div>
            <div>
              <Image
                className="cursor-pointer w-6 mx-3 transition-transform duration-300 hover:-translate-y-2"
                src="/images/facebook.svg"
                alt=""
                width={25}
                height={25}
              />
            </div>
            <div>
              <Image
                className="cursor-pointer w-6 mx-3 transition-transform duration-300 hover:-translate-y-2"
                src="/images/instagram.svg"
                alt=""
                width={25}
                height={25}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

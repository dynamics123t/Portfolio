"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function index() {
  const router = useRouter();

  return (
    <header>
      <div className="w-full flex items-center bg-white justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8 ">
        <div className="w-full flex justify-between items-center">
          <nav className="flex items-center justify-center">
            <Link
              href="/"
              className="mr-4 rounded relative group cursor-pointer"
            >
              Home
              <span
                className="
        inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        w-full
        "
              ></span>
            </Link>
            <Link
              href="/about"
              className="mr-4 rounded relative group cursor-pointer "
            >
              About
              <span
                className="
        inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light
        w-full 
        "
              ></span>
            </Link>
            <div
              onClick={() => router.push("/project")}
              className="mr-4  rounded relative group cursor-pointer"
            >
              Project
              <span
                className="
        inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light
        w-full
        "
              ></span>
            </div>
            <div className="mr-4  rounded relative group cursor-pointer">
              Article
              <span
                className="
        inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light
        w-full 
        "
              ></span>
            </div>
          </nav>
        </div>

        <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
          <div className="flex flex-col items-center justify-center mt-2">
            <a className="flex items-center justify-center rounded-full w-20 h-20 bg-blue-500 text-black text-2xl font-bold">
              Ryouji
            </a>
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

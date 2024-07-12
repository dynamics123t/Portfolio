"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function page() {
  return (
    <div className="bg-white">
      <div className="">
        <Header />
      </div>
      <div className="flex min-h-screen items-center text-dark">
        <div className="z-0 inline-block h-full w-full bg-light p-32">
          <div className="flex w-full items-start justify-between ">
            <div className="flex w-1/2 flex-col items-center self-center ">
              <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden sm:py-0">
                <div className="inline-block text-left text-dark text-6xl font-bold w-full capitalize leading-none">
                  There is nothing difficult, just fear that you won not do it.
                </div>
              </div>
              <p className="my-4 text-left text-base font-medium">
                As a skilled front-end web developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in Nextjs and web
                development.
              </p>
              <div className="mt-2 flex items-center self-start">
                <div>
                  <a
                    className="flex items-center rounded-lg border-2 border-solid text-white bg-black p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-black hover:bg-white hover:text-black"
                    target="_blank"
                    download
                    href="/CV_Tan.pdf"
                  >
                    View CV
                    <div className="relative w-6 h-6 ml-2 flex">
                      <Image
                        className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
                        src="/images/arrow-up-right-from-square-solid-white.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                      <Image
                        className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
                        src="/images/arrow-up-right-from-square-solid.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                    </div>
                  </a>
                </div>
                <a
                  className="ml-4 text-2xl font-semibold capitalize text-dark underline"
                  href="mailto:tannguyent512001@gmail.com"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src="/images/tan.jpg"
                alt=""
                className="w-[600px] h-[600px] rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <video
          className="h-80% w-80% rounded-3xl items-center mb-16"
          controls
          autoPlay
        >
          <source
            src="/images/SnapTik_App_7342889072001633554-HD.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

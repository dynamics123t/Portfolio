import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Transition from "@/components/layout/Transition";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <div
          className="z-0 inline-block h-full w-full bg-white p-32 dark:bg-black xl:p-24 lg:p-16 
      md:p-12 sm:p-8 pt-16"
        >
          <div className="py-2 w-full mx-auto flex flex-col items-center justify-center  text-center   overflow-hidden sm:py-0">
            <h1 className="inline-block text-dark dark:text-white text-8xl font-bold w-full capitalize !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 xl:text-6xl">
              Words Can Change The World!
            </h1>
          </div>
          <ul className="grid grid-cols-3 gap-16 lg:gap-8 md:grid-cols-2 md:gap-y-16 sm:grid-cols-1">
            <li className="relative w-full p-4 col-span-1 bg-white border border-black border-solid rounded-2xl  dark:bg-black dark:border-white">
              <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-black -z-10  "></div>
              <a
                href="https://devdreaming.com/blogs/create-pagination-component-reactjs"
                className="inline-block rounded-lg overflow-hidden w-full"
                target="_blank"
              >
                <img
                  src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpagination%20component%20in%20reactjs.030eba6a.jpg&w=750&q=75"
                  alt=""
                />
              </a>
              <a
                href="https://devdreaming.com/blogs/create-pagination-component-reactjs"
                target="_blank"
              >
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
                  build a custom pagination component in reactjs from scratch
                </h2>
              </a>
              <p className="text-sm  mb-2">
                Learn how to build a custom pagination component in ReactJS from
                scratch. Follow this step-by-step guide to integrate Pagination
                component in your ReactJS project.
              </p>
              <span className="text-[#b63e96] font-semibold dark:text-primaryDark">
                9 min read
              </span>
            </li>
            <li className="relative w-full p-4 col-span-1 bg-white border border-black border-solid rounded-2xl  dark:bg-black dark:border-white">
              <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-black -z-10  "></div>
              <a
                href="https://devdreaming.com/blogs/create-pagination-component-reactjs"
                className="inline-block rounded-lg overflow-hidden w-full"
                target="_blank"
              >
                <img
                  src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcreate%20loading%20screen%20in%20react%20js.8ae23a75.jpg&w=750&q=75"
                  alt=""
                />
              </a>
              <a
                href="https://devdreaming.com/blogs/create-pagination-component-reactjs"
                target="_blank"
              >
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
                  creating stunning loading screens in react: Build 3 types of
                  loading screens
                </h2>
              </a>
              <p className="text-sm mb-2">
                Learn how to create stunning loading screens in React with 3
                different methods. Discover how to use React-Loading,
                React-Lottie & build a custom loading screen. Improve the user
                experience.
              </p>
              <span className="text-[#b63e96] font-semibold dark:text-primaryDark">
                10 min read
              </span>
            </li>
          </ul>
          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>
          <ul className="flex flex-col items-center relative">
            <li className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex items-center justify-between  bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4 dark:bg-black dark:border-white ">
              <a
                href="https://devdreaming.com/blogs/react-form-validation-custom-hook"
                target="_blank"
                className="relative"
              >
                <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
                  form validation in reactjs: build a reusable custom hook for
                  inputs and error handling
                </h2>
                <img
                  className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
                  src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fform%20validation%20in%20reactjs%20using%20custom%20react%20hook.b1a35b31.png&w=750&q=75"
                  alt=""
                />
              </a>
              <span className="text-[#b63e96] font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
                January 27, 2023
              </span>
            </li>
            <li className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex items-center justify-between  bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4 dark:bg-black dark:border-white ">
              <a
                href="https://devdreaming.com/blogs/react-form-validation-custom-hook"
                target="_blank"
                className="relative"
              >
                <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
                  Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For
                  React Developers
                </h2>
                <img
                  className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
                  src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fform%20validation%20in%20reactjs%20using%20custom%20react%20hook.b1a35b31.png&w=750&q=75"
                  alt=""
                />
              </a>
              <span className="text-[#b63e96] font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
                January 27, 2023
              </span>
            </li>
            <li className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex items-center justify-between  bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4 dark:bg-black dark:border-white ">
              <a
                href="https://devdreaming.com/blogs/react-form-validation-custom-hook"
                target="_blank"
                className="relative"
              >
                <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
                  Creating An Efficient Modal Component In React Using Hooks And
                  Portals
                </h2>
                <img
                  className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
                  src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fform%20validation%20in%20reactjs%20using%20custom%20react%20hook.b1a35b31.png&w=750&q=75"
                  alt=""
                />
              </a>
              <span className="text-[#b63e96] font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
                January 27, 2023
              </span>
            </li>
            <li className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex items-center justify-between  bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4 dark:bg-black dark:border-white ">
              <a
                href="https://devdreaming.com/blogs/react-form-validation-custom-hook"
                target="_blank"
                className="relative"
              >
                <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
                  Build A Fabulous Todo List App With React, Redux And
                  Framer-Motion
                </h2>
                <img
                  className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
                  src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fform%20validation%20in%20reactjs%20using%20custom%20react%20hook.b1a35b31.png&w=750&q=75"
                  alt=""
                />
              </a>
              <span className="text-[#b63e96] font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
                January 27, 2023
              </span>
            </li>
            <li className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex items-center justify-between  bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4 dark:bg-black dark:border-white ">
              <a
                href="https://devdreaming.com/blogs/react-form-validation-custom-hook"
                target="_blank"
                className="relative"
              >
                <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
                  Redux Simplified: A Beginner is Guide For Web Developers
                </h2>
                <img
                  className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
                  src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fform%20validation%20in%20reactjs%20using%20custom%20react%20hook.b1a35b31.png&w=750&q=75"
                  alt=""
                />
              </a>
              <span className="text-[#b63e96] font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
                January 27, 2023
              </span>
            </li>
            <li className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex items-center justify-between  bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4 dark:bg-black dark:border-white ">
              <a
                href="https://devdreaming.com/blogs/react-form-validation-custom-hook"
                target="_blank"
                className="relative"
              >
                <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
                  What Is Higher Order Component (Hoc) In React?
                </h2>
                <img
                  className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
                  src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fform%20validation%20in%20reactjs%20using%20custom%20react%20hook.b1a35b31.png&w=750&q=75"
                  alt=""
                />
              </a>
              <span className="text-[#b63e96] font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
                January 27, 2023
              </span>
            </li>
          </ul>
        </div>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

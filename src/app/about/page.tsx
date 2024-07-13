import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Transition from "@/components/layout/Transition";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="bg-white">
      <div>
        <Header></Header>
      </div>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center">
        <div
          className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 pt-16"
        >
          <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden">
            <h1
              className="inline-block text-black
      text-8xl font-bold w-full capitalize  mb-16 
"
            >
              Purpose drives passion!
            </h1>
          </div>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start left-0">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
                Hi, I am <strong>Nguyễn Duy Tân</strong>, a web developer and
                UI/UX designer with a passion for creating beautiful,
                functional, and user-centered digital experiences. With 4 years
                of experience in the field. I am always looking for new and
                innovative ways to bring my clients visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it is about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-black bg-white p-8 ">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-black "></div>
              <img
                className="h-auto w-full rounded-2xl"
                src="/images/tan.jpg"
                alt=""
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <span>40+</span>
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <span>50+</span>
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <span>1+</span>
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
            Skills
          </h2>
          <div className="w-full h-[85vh] relative flex items-center justify-center  mb-64 md:mb-32 rounded-full">
            <div className="table h-full mx-auto">
              <div className="h-fit table-cell align-middle mx-auto">
                <div className="in relative w-96 h-96 flex items-center justify-center scale-[0.75]">
                  <div className="rounded-full bg-black w-28 h-28 flex items-center justify-center absolute">
                    <div className="absolute -top-4 text-black text-sm flex flex-col items-center">
                      Web
                    </div>
                    <div className="rounded-full bg-black w-20 h-20 animate-ping"></div>
                  </div>

                  <div
                    className="rounded-full border border-black/50 w-36 h-36 flex items-center justify-center absolute animate-spin"
                    style={{ animationDuration: "4s" }}
                  >
                    <div className="absolute -top-6 text-black text-sm flex flex-col items-center">
                      HTML&CSS
                      <div className="rounded-full h-1.5 w-1.5 bg-black"></div>
                    </div>
                  </div>

                  <div
                    className="rounded-full border border-black w-48 h-48 flex items-center justify-center absolute animate-spin"
                    style={{ animationDuration: "8s" }}
                  >
                    <div className="absolute -top-7 text-black text-sm flex flex-col items-center">
                      JavaScript
                      <div className="rounded-full h-3 w-3 bg-black"></div>
                    </div>
                  </div>

                  <div
                    className="rounded-full border border-black w-60 h-60 flex items-center justify-center absolute animate-spin"
                    style={{ animationDuration: "10s" }}
                  >
                    <div className="absolute -top-7 text-black text-sm flex flex-col items-center">
                      Figma
                      <div className="rounded-full h-[0.78rem] w-[0.78rem] bg-black"></div>
                    </div>
                  </div>

                  <div
                    className="rounded-full border border-black w-72 h-72 flex items-center justify-center absolute animate-spin"
                    style={{ animationDuration: "14s" }}
                  >
                    <div className="absolute -top-[1.48rem] text-black text-sm flex flex-col items-center">
                      Web Design
                      <div className="rounded-full h-2 w-2 bg-black"></div>
                    </div>
                  </div>

                  <div
                    className="rounded-full border border-black w-[25rem] h-[25rem] flex items-center justify-center absolute animate-spin"
                    style={{ animationDuration: "35s" }}
                  >
                    <div className="absolute -top-14 text-black text-sm flex flex-col items-center">
                      Tawilwind CSS
                      <div className="rounded-full h-[4.5rem] w-[4.5rem] bg-black"></div>
                    </div>
                  </div>

                  <div
                    className="rounded-full border border-black w-[36rem] h-[36rem] flex items-center justify-center absolute animate-spin"
                    style={{ animationDuration: "60s" }}
                  >
                    <div className="absolute -top-11 text-black text-sm flex flex-col items-center">
                      ReactJS
                      <div className="rounded-full h-[3.5rem] w-[3.5rem] bg-black"></div>
                    </div>
                  </div>

                  <div
                    className="rounded-full border border-black w-[43.2rem] h-[43.2rem] flex items-center justify-center absolute animate-spin"
                    style={{ animationDuration: "90s" }}
                  >
                    <div className="absolute -top-9 text-black text-sm flex flex-col items-center">
                      Github
                      <div className="rounded-full h-[2rem] w-[2rem] bg-black"></div>
                    </div>
                  </div>

                  <div
                    className="rounded-full border border-black w-[49rem] h-[49rem] flex items-center justify-center absolute animate-spin"
                    style={{ animationDuration: "130s" }}
                  >
                    <div className="absolute -top-9 text-black text-sm flex flex-col items-center">
                      NextJS
                      <div className="rounded-full h-[1.6rem] w-[1.6rem] bg-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
              Experience
            </h2>
            <div className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
              <div
                className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl"
                style={{ transform: "scaleY(0.187879) translateZ(0px)" }}
              ></div>
              <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
                <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
                  <div style={{ transform: "none" }}>
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                      Intern Backend PHP
                      <a
                        href="https://samogroup.vn/"
                        className="capitalize text-red-600"
                        target="_blank"
                      >
                        @ Samo Technology and Communications Joint Stock Company
                      </a>
                    </h3>
                    <span className="capitalize text-black/75 font-medium">
                      2022 | Hai Chau, Da Nang City
                    </span>
                    <p className="font-medium w-full md:text-sm">
                      Worked on a team responsible for developing new features
                      for Google is search engine, including improving the
                      accuracy and relevance of search results and developing
                      new tools for data analysis and visualization.
                    </p>
                  </div>
                </li>
                <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
                  <div style={{ transform: "none" }}>
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                      Intern Front-end Web Developer
                      <a
                        href="https://masothue.com/0402146312-cong-ty-co-phan-open-lab#google_vignette"
                        className="capitalize text-red-600"
                        target="_blank"
                      >
                        @ Open Lab Joint Stock Company
                      </a>
                    </h3>
                    <span className="capitalize text-black/75 font-medium">
                      2023 | Hai Chau, Da Nang City
                    </span>
                    <p className="font-medium w-full md:text-sm">
                      Worked on a team responsible for developing a new mobile
                      app feature that allowed users to create and share
                      short-form video content, including designing and
                      implementing a new user interface and developing the
                      backend infrastructure to support the feature.
                    </p>
                  </div>
                </li>
                <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
                  <div style={{ transform: "none" }}>
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                      Intern Front-end Web Developer
                      <a
                        href="https://masothue.com/0402146312-cong-ty-co-phan-open-lab#google_vignette"
                        className="capitalize text-red-600"
                        target="_blank"
                      >
                        @ VPBO JSC
                      </a>
                    </h3>
                    <span className="capitalize text-black/75 font-medium">
                      2023 | Hai Chau, Da Nang City
                    </span>
                    <p className="font-medium w-full md:text-sm">
                      Worked on a team responsible for developing Amazon is
                      mobile app, including implementing new features such as
                      product recommendations and user reviews, and optimizing
                      the app is performance and reliability.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
              Education
            </h2>
            <div className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
              <div
                className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl"
                style={{ transform: "scaleY(0.187879) translateZ(0px)" }}
              ></div>
              <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 list-inside list-disc">
                <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
                  <div style={{ transform: "none" }}>
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                      Information technology engineer
                    </h3>
                    <span className="capitalize text-black/75 font-medium">
                      2019-2024 | Danang University of Architecture (DAU)
                    </span>
                    <p className="font-medium w-full md:text-sm">
                      Relevant courses included Data Structures and Algorithms,
                      Computer Systems Engineering, and Artificial Intelligence.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

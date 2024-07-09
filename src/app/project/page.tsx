import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import React from "react";

export default function ProjectPage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="mb-16 flex w-full flex-col items-center justify-center ">
        <div
          className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 pt-16"
        >
          <div className="py-2 w-full mx-auto flex flex-col items-center justify-center  text-center   overflow-hidden sm:py-0">
            <h1
              className="inline-block text-dark dark:text-light
      text-8xl font-bold w-full capitalize  mb-16 
"
            >
              Imagination Trumps Knowledge!
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-black bg-white p-12 shadow-2xl lg:flex-row  lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4">
                <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-black dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] "></div>
                <a
                  href="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                  className="w-[50%] cursor-pointer overflow-hidden rounded-lg lg:w-full"
                  target="_blank"
                >
                  <img
                    className="transition-transform duration-300 hover:-translate-y-2"
                    src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-screener-cover-image.5d2f6c4e.jpg&w=640&q=75"
                    alt=""
                  />
                </a>
                <div className="flex w-[50%] flex-col items-start justify-between pl-6 lg:w-full lg:pl-8 lg:pt-6">
                  <span className="text-xl font-medium text-bold  xs:text-base">
                    Featured Project
                  </span>
                  <a
                    href="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                    className="underline-offset-2 hover:underline"
                    target="_blank"
                  >
                    <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
                      Crypto Screener Application
                    </h2>
                  </a>
                  <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
                    A feature-rich Crypto Screener App using React, Tailwind
                    CSS, Context API, React Router and Recharts. It shows detail
                    regarding almost all the cryptocurrency. You can easily
                    convert the price in your local currency.
                  </p>
                  <div className="mt-2 flex items-center">
                    <a
                      href="https://github.com/codebucks27/CryptoBucks-Final-Code"
                      target="_blank"
                      className="w-10"
                    >
                      <Image
                        className="cursor-pointer"
                        src="/images/github.svg"
                        alt=""
                        width={75}
                        height={75}
                      />
                    </a>
                    <a
                      href="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                      target="_blank"
                      className="ml-4 rounded-lg bg-black p-2 px-6 text-lg font-semibold text-white dark:bg-light dark:text-dark  sm:px-4 sm:text-base "
                    >
                      Visit Project
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}

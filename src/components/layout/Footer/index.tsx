import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <footer>
      <div className="w-full border-t-2 border-solid border-dark font-medium text-lg">
        <div className="z-0 h-full w-full bg-light p-32 py-8 flex items-center justify-between ">
          <span>2024 © All Rights Reserved.</span>
          <div className="flex items-center">
            Built with
            <span className="text-primary text-2xl px-1 dark:text-primaryDark"></span>
            by
            <Image
              className="mx-2"
              src="/images/heart-solid.svg"
              alt=""
              width={15}
              height={15}
            />
            <a
              className="underline underline-offset-2"
              target="_blank"
              href="https://www.facebook.com/ryouji15"
            >
              Nguyễn Duy Tân
            </a>
          </div>
          <a
            className="underline underline-offset-2"
            target="_blank"
            href="https://devdreaming.com/"
          >
            Say hello
          </a>
        </div>
      </div>
    </footer>
  );
}

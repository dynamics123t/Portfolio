"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-full h-full flex flex-col">
        <img
          src="/images/background.jpg"
          className="w-full h-full object-cover rotate-y-180"
        />
        <div className="absolute inset-0 justify-center flex items-center">
          <form className="bg-red-500 bg-opacity-0 flex flex-col p-14 justify-center border border-solid border-white rounded-lg items-center">
            <p className="text-base text-[30px] text-white font-medium mb-6">
              Interactive Brand
            </p>
            <div className="w-full flex flex-col max-w-[550px]">
              <div className="w-full flex flex-col mb-2">
                <h2 className="text-3xl font-semibold mb-2 text-white">
                  Login
                </h2>
                <p className="text-base mb-2 text-white">
                  Welcome Back! Please enter your details.
                </p>
              </div>
              <div className="w-full flex flex-col ">
                <input
                  type="text"
                  name="email"
                  placeholder="Tên đăng nhập"
                  className="w-full text-white placeholder-white py-2 my-2 bg-transparent border-b border-white outline-none focus:outline-none"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  className="w-full text-white placeholder-white py-2 my-2 bg-transparent border-b border-white outline-none focus:outline-none"
                />
              </div>
              <div className="w-full flex items-center justify-end">
                <Link
                  href="/auth/forgotpassword"
                  className="text-white text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="w-full flex flex-col my-4">
                <button
                  type="submit"
                  className="w-full text-white my-2 font-semibold bg-[#e2a374] rounded-md p-4 text-center flex items-center justify-center"
                >
                  Login
                </button>

                <Link
                  href="/auth/signup"
                  className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center"
                >
                  Register
                </Link>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <p className="text-sm font-normal text-white">
                Dont have a account?{" "}
                <Link
                  href="/auth/signup"
                  className="font-semibold underline underline-offset-2 cursor-pointer"
                >
                  Sign up for here
                </Link>
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <Link
                href="/auth/signup"
                className="text-white text-[20px] font-semibold underline underline-offset-2 cursor-pointer"
              >
                Back to home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function index() {
  return (
    <>
      <AnimatePresence>
        <>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-red-600"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
          />
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          />
        </>
      </AnimatePresence>
    </>
  );
}

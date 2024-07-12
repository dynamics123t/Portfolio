import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="min-h-screen bg-white"></div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

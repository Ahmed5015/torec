import React from "react";
import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/about-us/Hero";
const page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center my-12 ">
        <Hero />
      </div>
    </div>
  );
};

export default page;

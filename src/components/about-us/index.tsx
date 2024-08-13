import React from "react";
import Hero from "@/components/about-us/Hero";
import NavBar from "../layout/NavBar";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center my-12 ">
        <Hero />
      </div>
    </div>
  );
};

export default AboutUs;

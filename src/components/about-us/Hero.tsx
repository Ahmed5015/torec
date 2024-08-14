import React from "react";
import Image from "next/image";

const Hero = ({ title = "About Us" }) => {
  return (
    <div className="relative h-[36rem] w-full ">
      <Image
        src="/images/about-us/AboutUsBackground.png"
        alt="About Us"
        layout="fill"
        objectFit="cover"
        className="rounded-3xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-45 rounded-3xl "></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-[700px] text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;

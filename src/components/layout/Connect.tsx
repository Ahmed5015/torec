"use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "../shared/buttons/PrimaryButton";
const primaryHandler = () => {
  return;
};
const Connect = () => {
  return (
    <div className="rounded-3xl relative h-[300px] md:h-[600px] overflow-hidden">
      <Image
        src="/images/BgContactUs.svg"
        alt="Background image for contact us"
        className="w-full "
        layout="fill"
        objectFit="cover"
      />
      <div className=" absolute top-4 left-4 md:bottom-14 md:left-3 md:flex md:flex-col  text-white px-2 md:px-4">
        <h2 className="text-3xl  md:text-6xl  font-bold mb-4">
          Let's <br />
          Connect
        </h2>
      </div>
      <div className=" absolute right-3 bottom-3  md:bottom-16 md:right-3 md:flex  md:flex-col md:justify-center md:items-center text-white px-2 md:px-4">
        <p className=" text-sm md:text-xl md:mb-8">
          Let's work together! <br /> Drop us a line to see how <br />
          we can help.
        </p>
        <div className="flex justify-end">
          <PrimaryButton
            text="Schedule Consultation"
            bgColor="secondary"
            hoverColor="white"
            Handler={primaryHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;

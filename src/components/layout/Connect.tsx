"use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "../shared/buttons/PrimaryButton";
const primaryHandler = () => {
  return;
};
const Connect = () => {
  return (
    <div className="relative">
      <Image
        src="/images/BgContactUs.svg"
        alt="Background image for contact us"
        className="w-full"
        height={1370}
        width={670}
        objectFit="cover"
      />
      <div className=" absolute bottom-14 left-3 flex flex-col  text-white px-4">
        <h2 className="text-6xl  font-bold mb-4">
          Let's <br />
          Connect
        </h2>
      </div>
      <div className=" absolute bottom-16 right-3 flex flex-col justify-center items-center text-white px-4">
        <p className="text-xl mb-8">
          Let's work together! <br /> Drop us a line to see how <br />
          we can help.
        </p>

        <PrimaryButton
          text="Schedule Consultation"
          bgColor="black"
          hoverColor="primary"
          Handler={primaryHandler}
        />
      </div>
    </div>
  );
};

export default Connect;

import React from "react";
import PrimaryButton from "../shared/buttons/PrimaryButton";

const primaryHandler = () => {
  // Placeholder function,
};

const TextSection = ({ title = "", content = "", firstSection = false }) => {
  return (
    <div className="w-full flex bg-bigStone-50 md:w-[49%] p-1  md:p-5 shadow-lg rounded-3xl  h-[300px]  md:h-[600px] lg:h-[700px]">
      <div className="flex flex-col justify-center align-middle px-8 py-16">
        {firstSection && (
          <ul className="list-disc pl-4 text-primary">
            <li>About us</li>
          </ul>
        )}

        <h2 className="md:text-2xl lg:text-4xl font-[700] text-secondary">
          {title}
        </h2>
        <p className="text-[10px] md:m-0 md:text-[14px] lg:text-lg lg:m-2 text-bigStone">
          {content}
        </p>

        {firstSection && (
          <PrimaryButton
            text="Read Our Google Reviews"
            bgColor="black"
            hoverColor="primary"
            Handler={primaryHandler}
          />
        )}
      </div>
    </div>
  );
};

export default TextSection;

import React from "react";
import PrimaryButton from "../shared/buttons/PrimaryButton";

const primaryHandler = () => {
  // Placeholder function,
};

const TextSection = ({ title = "", content = "", firstSection = false }) => {
  return (
    <div className="w-full flex bg-bigStone-50 md:w-[49%] p-5 shadow-lg rounded-3xl">
      <div className="flex flex-col justify-center align-middle px-8 py-16">
        {firstSection && (
          <ul className="list-disc pl-4 text-primary">
            <li>About us</li>
          </ul>
        )}

        <h2 className="text-4xl font-[700] text-secondary">{title}</h2>
        <p className="m-2 text-bigStone">{content}</p>
        {firstSection && (
          <PrimaryButton
            text="Read Our Google Reviews"
            bgColor="primary"
            hoverColor="primary"
            Handler={primaryHandler}
          />
        )}
      </div>
    </div>
  );
};

export default TextSection;

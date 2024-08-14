import React from "react";

const AboutUs = ({ title = "", description = "" }) => {
  return (
    <div className="p-5 rounded-lg text-center">
      <h2 className="text-3xl  md:text-4xl font-[700] text-secondary">
        {title}
      </h2>
      <p className="mt-2 text-bigStone-600">{description}</p>
    </div>
  );
};

export default AboutUs;

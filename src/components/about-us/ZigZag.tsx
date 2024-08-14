"use client";
import React, { useState } from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";
import Data from "../../data_source/DataSource.json";

const ZigZag = () => {
  const [zigZagData, setZigZagData] = useState(Data.aboutUs.zigzag);

  return (
    <div>
      {zigZagData.firstSection.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } gap-8 my-14`}
        >
          <TextSection
            title={section.text.title}
            content={section.text.content}
            firstSection={index === 0 ? true : false}
          />

          <ImageSection
            imageUrl={section.img.src}
            description={section.img.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ZigZag;

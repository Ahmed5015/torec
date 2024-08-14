import React from "react";
import Image from "next/image";

export const ImageSection = ({ imageUrl = "", description = "" }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden w-full md:w-[49%] relative h-[530px]">
      <Image
        src={imageUrl}
        alt={description}
        className="w-full"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ImageSection;

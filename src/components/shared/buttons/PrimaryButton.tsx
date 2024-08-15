import React, { useState, MouseEvent } from "react";
import Data from "../../../data_source/DataSource.json";

interface ServiceCardProps {
  text: string;
  bgColor: string;
  hoverColor: string;
  Handler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton: React.FC<ServiceCardProps> = ({
  text,
  bgColor,
  hoverColor,
  Handler,
}) => {
  const [navBarData, setNavBarData] = useState(Data);
  return (
    <div className="flex mt-3">
      <button
        onClick={Handler}
        className={` text-white   bg-${bgColor} text-[10px] md:text-[9px] lg:text-[1rem] px-3 py-2 md:px-5 md:py-3  rounded-full hover:text-${hoverColor} `}
      >
        {text}
      </button>

      <button
        className={` text-white bg-${bgColor}  p-2   lg:px-3 rounded-full hover:text-${hoverColor} `}
      >
        <svg
          className="w-4 h-4 md:h-5 md:w-5 lg:w-6 lg:h-6 -rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns={navBarData.header.navControls.icon}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default PrimaryButton;

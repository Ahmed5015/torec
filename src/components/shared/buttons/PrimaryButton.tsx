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
    <div className="flex">
      <button
        onClick={Handler}
        className={` bg-${bgColor} text-white  text-[1rem]  px-5 py-3  rounded-full hover:bg-${hoverColor} `}
      >
        {text}
      </button>

      <button
        className={` bg-${bgColor} text-white  px-5 rounded-full hover:bg-${hoverColor}`}
      >
        <svg
          className="w-6 h-6 -rotate-45"
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

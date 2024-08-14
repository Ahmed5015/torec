import React from "react";
const path = "/icons/AboutUsInfoCard.svg";
const InfoCard = ({ title = "", description = "" }) => {
  return (
    <div className="bg-secondary rounded-3xl p-6 flex flex-col items-start justify-center w-full gap-2">
      <div className="bg-white flex items-center justify-center bg-lightGray rounded-xl p-2">
        <img src={path} alt="icon" className="w-6 h-6" />
      </div>

      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-bigStone-200 text-opacity-80">{description}</p>
    </div>
  );
};

export default InfoCard;

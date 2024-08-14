import React from "react";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-10 text-center flex flex-col items-center">
      <img src={iconSrc} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="font-semibold text-lg mb-2 text-secondary">{title}</h3>
      <p className="text-bigStone-500">{description}</p>
    </div>
  );
};

export default FeatureCard;

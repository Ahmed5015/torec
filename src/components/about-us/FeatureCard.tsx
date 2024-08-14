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
    <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
      <img src={iconSrc} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;

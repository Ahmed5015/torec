import React from "react";

interface ProfileCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="max-w-full md:max-w-[49%] bg-[#222C3E] rounded-2xl  text-white py-16 px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
        {title}
      </h1>
      <h2 className="text-lg md:text-sm font-semibold text-primary mb-4">
        {subtitle}
      </h2>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default ProfileCard;

import React from "react";
import Image from "next/image";
import { PackageX } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  license?: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  license = "",
}) => {
  return (
    <div className="rounded-3xl shadow-lg overflow-hidden relative ">
      <Image
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="w-full object-cover h-96"
        height={384}
        width={384}
      />
      <div className="absolute inset-0 bg-gradient-to-b"></div>
      <div className=" text-start absolute bottom-8 left-6  z-10">
        <h3 className="text-2xl text-primary font-bold px-1">{name}</h3>
        <p className="text-[#EEFFF6] text-sm px-1 text-start">{role}</p>

        {license && (
          <p className="text-[#EEFFF6] text-sm px-1 text-start">{license}</p>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;

"use client";
import React, { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";
import Data from "../../data_source/DataSource.json";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";
import ProfileCard from "./ProfileCard";
const MeetOurTeam: React.FC = () => {
  const [teamData, setTeamData] = useState(Data.aboutUs);

  return (
    <>
      <div className="max-w-7xl   py-12">
        <h2 className="text-3xl font-bold text-start mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData &&
            teamData.team.meetOurTeam.map((member, index) => (
              <TeamMemberCard
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            ))}
        </div>
      </div>
      <div className=" flex gap-10 flex-col md:flex-row my-8">
        {" "}
        {/* Executive Summary */}
        <ImageSection
          imageUrl={teamData.team.executiveProfile.img.src}
          description={teamData.team.executiveProfile.img.description}
        />
        <ProfileCard
          title={teamData.team.executiveProfile.text.title}
          subtitle={teamData.team.executiveProfile.text.subTitle}
          description={teamData.team.executiveProfile.text.content}
        />
      </div>
      <div className="flex gap-10 flex-col md:flex-row my-8 ">
        {" "}
        {/* Our Goal */}
        <TextSection
          title={teamData.team.ourGoal.text.title}
          content={teamData.team.ourGoal.text.content}
          firstSection={false}
        />
        <ImageSection
          imageUrl={teamData.team.ourGoal.img.src}
          description={teamData.team.ourGoal.img.description}
        />
      </div>
    </>
  );
};

export default MeetOurTeam;

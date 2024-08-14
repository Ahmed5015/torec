import React from "react";
import FeatureCard from "./FeatureCard";
const expertiseIcon = "/icons/AboutUsChooseUs1.svg";
const serviceIcon = "/icons/AboutUsInfoCard.svg";
const toolsIcon = "/icons/AboutUsChooseUs2.svg";

const WhyChooseUsSection = ({ title = "", bgColor = "", color = "" }) => {
  return (
    <div className={`max-w-7xl  px-4 py-12 bg-${bgColor} rounded-2xl`}>
      <h2 className={`text-3xl font-bold text-center mb-10 text-${color}`}>
        {title}
      </h2>
      <div className="flex justify-center gap-10">
        <FeatureCard
          iconSrc={expertiseIcon}
          title="Expertise and Experience"
          description="With a proven track record of success and a deep understanding of the real estate market, we provide unparalleled expertise and experience."
        />
        <FeatureCard
          iconSrc={serviceIcon}
          title="Personalized Service"
          description="We offer tailored solutions to meet the specific needs and preferences of each client, ensuring a personalized and stress-free experience."
        />
        <FeatureCard
          iconSrc={toolsIcon}
          title="Innovative Tools"
          description="Our Client Portal provides clients with access to real-time transaction updates, document management, and step-by-step guidance, offering unparalleled transparency and control."
        />
      </div>
    </div>
  );
};

export default WhyChooseUsSection;

import React from "react";
import Hero from "@/components/about-us/Hero";
import NavBar from "../layout/NavBar";
import ZigZag from "./ZigZag";
import OurServices from "./AboutUs";
import InfoCard from "./InfoCard";
import WhyChooseUsSection from "./WhyChooseUsSection";
import MeetOurTeam from "./MeetOurTeam";
import Connect from "../layout/Connect";
import Footer from "../layout/Footer";
const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="m-12">
        <div className="flex justify-center">
          <Hero />
        </div>
        <ZigZag />
        <div className="max-w-96 mx-auto my-10">
          <OurServices
            title="Our Services:"
            description="We offer a comprehensive range of services tailored to meet the unique needs of buyers and sellers."
          />
        </div>
        <div className="flex gap-10 py-10">
          <InfoCard
            title="For Buyers"
            description="Expert guidance, comprehensive search assistance, streamlined buying processes, negotiation expertise, and client portal access."
          />
          <InfoCard
            title="For Sellers"
            description="Full-service listing programs, professional photography and videography, digital marketing and advertising, secure and convenient showings, market insights, expert negotiation, transaction management, and client portal access."
          />
        </div>
        <div className="mt-6">
          <WhyChooseUsSection
            title="Why Choose Us"
            bgColor="bigStone-50"
            color="secondary"
          />
        </div>
        <div className="mt-10">
          <WhyChooseUsSection
            title="Our Values"
            bgColor="secondary"
            color="white"
          />
        </div>

        <MeetOurTeam />
        <div>
          <Connect />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;

"use client";
import React, { useState } from "react";
import TeamMemberCard from "../about-us/TeamMemberCard";
import Data from "../../data_source/DataSource.json";
const Footer: React.FC = () => {
  const [FooterData, setFooterData] = useState(Data.footer);
  return (
    <footer className="grid grid-rows-2 md:grid-cols-3 md:grid-rows-1 mt-10 gap-5 ">
      <div className="col-span-2 md:col-span-1">
        <TeamMemberCard
          name="Summer Mayhugh"
          role={`Sales Associate`}
          imageUrl="/images/about-us/AboutUsZigZag1.svg"
          license=" License# 2014004965"
        />
      </div>
      <div className="col-span-2 max-w-full max-h-96 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-800 text-white rounded-3xl p-10  ">
        <div>
          <a href="" className="text-white text-xl font-bold">
            <img className="w-32" src={FooterData.logo} alt="Main Logo" />
          </a>
          <p className="text-[8px] mt-2">
            ©2024 BBH Affiliates, LLC. An independently owned and operated
            franchisee of BBH Affiliates, LLC. Berkshire Hathaway HomeServices
            and the Berkshire Hathaway HomeServices symbol are registered
            service marks of Columbia Insurance Company, a Berkshire Hathaway
            affiliate. Equal Housing Opportunity.
          </p>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-primary">Website</h3>
          <ul className="mt-2 space-y-1">
            <li>Buyers</li>
            <li>Seller</li>
            <li>About Us</li>
            <li>Reviews</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-primary">Contact & Details</h3>
          <ul className="mt-2 space-y-1">
            <li>Phone: 216-501-7435</li>
            <li>Email: hey@xyz.com</li>
            <li>Address: 6814 Detroit Ave. Cleveland, OH 44102</li>
          </ul>
        </div>

        <div className="flex gap-2 p-4 ">
          <img
            src="/icons/Footer/home.svg"
            alt="BHHS Affiliated"
            className="h-12"
          />
          <p className="text-[12px] ">Equal Housing Oppurtunity</p>
        </div>
        <div className="flex gap-2 flex-shrink-1 p-4  text-center">
          <img
            src="/icons/Footer/bhhsLogo.svg"
            alt="Equal Housing Opportunity"
            className="h-9"
          />

          <p className="text-[12px] text-left">
            Affiliated with Berkshire Hathaway HomeServices Professional Realty
          </p>
        </div>

        <div className="flex text-center pt-4">
          <p className="text-[12px]">© The Ohio Real Estate Consultant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

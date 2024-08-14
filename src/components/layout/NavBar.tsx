"use client";
import React, { useEffect, useState } from "react";
import Data from "../../data_source/DataSource.json";
import PrimaryButton from "../shared/buttons/PrimaryButton";
const NavBar = () => {
  const [navBarData, setNavBarData] = useState(Data);
  const primaryHandler = () => {
    return;
  };
  return (
    <nav className="p-4">
      <div className="mx-2  flex  items-center justify-between px-6">
        <a
          href={navBarData.header.logo.link}
          className="text-black text-xl font-bold"
        >
          <img
            className="w-[164px]"
            src="/logos/main_logo.svg"
            alt="Main Logo"
          />
        </a>

        <ul className="flex gap-4 space-x-4">
          {navBarData.header.nav.map((navContent, index) => {
            return (
              <li key={index}>
                <a
                  href={navContent.link}
                  className="text-secondary font-[16px] hover:text-primary active:underline "
                >
                  {navContent.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="buttons flex gap-[10px]">
          <button className="bg-[#F5F7FA] text-secondary text-[1rem]  px-6 py-5 rounded-full mx-2 ">
            Admin Login
          </button>
          <PrimaryButton
            text="Admin Login"
            bgColor="secondary"
            hoverColor="primary"
            Handler={primaryHandler}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

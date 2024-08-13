"use client";
import React, { useEffect, useState } from "react";
import MainLogo from "../../../public/logos/main_logo.svg";
import Data from "../../data_source/DataSource.json";

const NavBar = () => {
  const [navBarData, setNavBarData] = useState(Data);

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
          <button className="bg-[#F5F7FA] text-secondary text-[1rem]  px-[1.5rem] py-[1.25rem] rounded-full mx-2 ">
            Admin Login
          </button>
          <div className="flex">
            <button className="bg-secondary text-white  text-[]  px-4 py-2 rounded-full ">
              User Login
            </button>

            <button className="bg-secondary text-white  px-5 rounded-full ">
              <svg
                className="w-6 h-6 -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns={navBarData.header.navControls.icon}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

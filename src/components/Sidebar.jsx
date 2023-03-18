import React from "react";
import appLogo from "/logos/Al-fouz.png";
import dashBoardIcon from "/icons/dashboard-icon.png";
import { useState } from "react";
import hamburger from "/icons/hamburg.png";


export default function ({ navRequired }) {
  return (
    <div className="flex flex-row">
      <div
        className={`h-screen bg-blue-200 ${
          open ? "w-72 px-4" : "w-0 px-0"
        } duration-700 `}
      >
        <div className={`${open ? "flex" : "hidden"} flex flex-col w-full `}>
          <div>
            <img src={appLogo} alt="" />
          </div>
          {/* Side BAR MENU CONTENTS */}
          <div className="flex flex-row justify-between px-4 text-xl items-center cursor-pointer ">
            <img src={dashBoardIcon} alt="" />
            <div>DASHBOARD</div>
          </div>
        </div>
      </div>
    </div>
  );
}

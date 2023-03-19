import React from "react";
import appLogo from "/logos/Al-fouz.png";
import dashBoardIcon from "/icons/dashboard-icon.png";
import profileIcon from "/icons/profile-icon.png";
import projectIcon from "/icons/clipboard-icon.png";
import volunteerIcon from "/icons/volunteers-icon.png";
import awardIcon from "/icons/requests-icon.png";
import supportIcon from "/icons/customer-service-icon.png";
import { useState } from "react";
import hamburger from "/icons/hamburg.png";


export default function ({ navRequired }) {
  return (
    <div className="flex flex-row">
      <div
        className={`h-screen bg-gradient-to-t from-slate-400 to-blue-300 ${
          open ? "w-72 px-4" : "w-0 px-0"
        } duration-700 `}
      >
        <div className={`${open ? "flex" : "hidden"} flex flex-col w-full  text-white`}>
          <div>
            <img src={appLogo} alt="" />
          </div>
          {/* Side BAR MENU CONTENTS */}
          <div className="flex flex-row justify-star gap-4 pt-1 px-2 text-xl items-center cursor-pointer ">
            <img src={dashBoardIcon} alt="" />
            <div>Dashboard</div>
          </div>
          <div className="flex flex-row justify-start gap-4 pt-1 px-2 text-xl items-center cursor-pointer ">
            <img src={profileIcon} alt="" />
            <div>My Profile</div>
          </div>
          <div className="flex flex-row justify-start gap-4 pt-1 px-2 text-xl items-center cursor-pointer ">
            <img src={projectIcon} alt="" />
            <div>Projects</div>
          </div>
          <div className="flex flex-row justify-start gap-4 pt-1 px-2 text-xl items-center cursor-pointer ">
            <img src={volunteerIcon} alt="" />
            <div>Volunteers</div>
          </div>
          <div className="flex flex-row justify-start gap-4 pt-1 px-2 text-xl items-center cursor-pointer ">
            <img src={awardIcon} alt="" />
            <div>Awards</div>
          </div>
          <div className="flex flex-row justify-start gap-4 pt-1 px-2 text-xl items-center cursor-pointer ">
            <img src={supportIcon} alt="" />
            <div>Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

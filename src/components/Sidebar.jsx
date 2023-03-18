import React from "react";
import appLogo from "/logos/Al-fouz.png";
import dashBoardIcon from "/icons/dashboard-icon.png";
import { useState } from "react";
import hamburger from "/icons/hamburg.png";
import { useNavigate } from "react-router-dom";
import profileIcon from "/icons/profile-icon.png";

export default function ({ navRequired }) {
  const navigate = useNavigate();
  function handleClick(x) {
    navigate(x);
  }
  const [projectsSlide , setProjectsSlide] = useState(false)
  return (
    <div className="flex flex-row">
      <div
        className={`h-screen bg-blue-200 ${
          open ? "w-72 " : "w-0 px-0"
        } duration-700 `}
      >
        <div
          className={`${
            open ? "flex" : "hidden"
          } flex flex-col w-full text-white text-2xl capitalize font-bold `}
        >
          <div>
            <img src={appLogo} alt="" />
          </div>
          {/* Side BAR MENU CONTENTS */}
          <div
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left items-center cursor-pointer "
            onClick={() => handleClick("/")}
          >
            <img src={dashBoardIcon} alt="" />
            <div>DASHBOARD</div>
          </div>
          <div
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left items-center cursor-pointer "
            onClick={() => handleClick("/profile")}
          >
            <img src={profileIcon} alt="" />
            <div>My Profile</div>
          </div>

          <div
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left items-center cursor-pointer "
            onClick={() => setProjectsSlide(!projectsSlide)}
          >
            <img src={profileIcon} alt="" />
            <div>Projects</div>
          </div>
            <div className={`pl-10 ${projectsSlide ? 'relative ' : 'hidden h-0'} duration-300`}>

                <div className="cursor-pointer" onClick={() => handleClick("/addprojects")}>
                  <p>Add Projects</p>
                </div>
                
                <div className="cursor-pointer" onClick={() => handleClick("/yourprojects")}>
                  <p>View Projects</p>
                </div>
            </div>
          <div
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left items-center cursor-pointer "
            onClick={() => handleClick("/volunteers")}
          >
            <img src={profileIcon} alt="" />
            <div>Volunteers</div>
          </div>
          <div
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left items-center cursor-pointer "
            onClick={() => handleClick("/awards")}
          >
            <img src={profileIcon} alt="" />
            <div>Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
}

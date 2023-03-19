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
import { useNavigate } from "react-router-dom";

export default function ({ navRequired }) {
  const navigate = useNavigate();
  function handleClick(x) {
    navigate(x);
  }
  const [projectsSlide, setProjectsSlide] = useState(false)
  return (
    <div className="flex flex-row">
      <div
        className={`h-[120vh] ${open ? "w-72 px-4" : "w-0 px-0"
          } duration-700 `}
          style={{
            background:
              "linear-gradient(180deg, #5B93A6 0%, rgba(0, 0, 0, 0) 114.77%)",
          }}
      >
        <div className={`${open ? "flex" : "hidden"} flex flex-col w-full `}>
          <div>
            <img src={appLogo} alt="" />
          </div>
          {/* Side BAR MENU CONTENTS */}
          <div onClick={() => handleClick("/")} className="flex flex-row px-4  py-2 hover:bg-blue-400 text-lg items-center cursor-pointer  gap-3">
            <img src={dashBoardIcon} alt="" />
            <div>Dashboard</div>
          </div>
          <div
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left text-lg items-center cursor-pointer  gap-3"
            onClick={() => handleClick("/profile")}
          >
            <img src={profileIcon} alt="" />
            <div>My Profile</div>
          </div>

          <div
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left text-lg items-center cursor-pointer  gap-3"
            onClick={() => setProjectsSlide(!projectsSlide)}
          >
            <img src={projectIcon} alt="" />
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
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left text-lg items-center cursor-pointer  gap-3"
            onClick={() => handleClick("/volunteers")}
          >
            <img src={volunteerIcon} alt="" />
            <div>Volunteers</div>
          </div>
          <div
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left text-lg items-center cursor-pointer  gap-3"
            onClick={() => handleClick("/awards")}
          >
            <img src={awardIcon} alt="" />
            <div>Awards</div>
          </div>
          <div
            className="flex flex-row px-4 py-2 hover:bg-blue-400 justify-left text-lg items-center cursor-pointer  gap-3"
            onClick={() => handleClick("/support")}
          >
            <img src={supportIcon} alt="" />
            <div>Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

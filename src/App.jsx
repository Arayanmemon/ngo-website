import React, { useState } from "react";
import hamburger from "/icons/hamburg.png";
import appLogo from "/logos/Al-fouz.png";
import dashBoardIcon from "/icons/dashboard-icon.png";
export default function App() {
  const [open, setOpen] = useState();
  return (
    <div
      className="body bg-gradient-to-b from-slate-700 to-slate-50 min-h-[100vh]"
      style={{
        backgroundColor:
          "linear-gradient(180deg, #1C244D 0%, rgba(58, 143, 143, 0) 100%)",
      }}
    >
      {/* SIDEAR */}
      <div className="flex flex-row">
        <div
          className={`h-screen bg-blue-200 ${
            open ? "w-72 px-4" : "w-0 px-0"
          } duration-700 `}
        >
          <div className={`${open ? "flex" : "hidden"} flex flex-col w-full `}>
            <div><img src={appLogo} alt="" /></div>

            {/* Side BAR MENU CONTENTS */}

            <div className="flex flex-row justify-between px-4 text-xl items-center cursor-pointer ">
              <img src={dashBoardIcon} alt="" />
              <div >
                 DASHBOARD
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* NAVBAR */}
          <div className="flex flex-row w-full px-10 justify-between">
            <div className="flex flex-row  gap-2 mt-2">
              <div>
                <button onClick={() => setOpen(!open)}>
                  <img src={hamburger} className="w-9" />
                </button>
              </div>
              <div className="text-white my-1">Menu</div>
              <div>
                <input type="text" className="mx-4 my-1 rounded-xl" />
              </div>
            </div>
            <div className="flex flex-row">
              <div>Notifications</div>
              <div>Username + avatar</div>
            </div>
          </div>

          {/* Main Contents */}

          <div></div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import hamburger from "/icons/hamburg.png";
import appLogo from "/logos/Al-fouz.png";
import dashBoardIcon from "/icons/dashboard-icon.png";
import Sidebar from "../components/Sidebar";
export default function Dashboard() {
        const [open, setOpen] = useState(true);

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
       <Sidebar />

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

          <div>

                COntent of dashboard will be here
          </div>
        </div>
      </div>
    </div>
  );
}

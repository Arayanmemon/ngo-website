import React, { useState } from "react";
import hamburger from "/icons/ham.png";
import appLogo from "/logos/Al-fouz.png";
import dashBoardIcon from "/icons/dashboard-icon.png";
import Sidebar from "../components/Sidebar";
import annouce from "/icons/g19.png"
import notifications from '/icons/requests-icon.png'  
import s from '/icons/s.png'
export default function Dashboard() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-[100vh]">
      {/* SIDEAR */}
      <div className="flex flex-row">
        <Sidebar />

        <div className="w-full">
          {/* NAVBAR */}
          <div className="flex flex-row w-full px-10 mt-2 justify-between">
            <div className="flex flex-row items-center gap-2">
              <div>
                <button onClick={() => setOpen(!open)}>
                  <img src={hamburger} className="w-9" />
                </button>
              </div>
              <div className="text-white my-1 mr-16">Menu</div>
              <div>
                <input type="text" className="mx-4 my-1 rounded-xl px-3 py-1" placeholder="Search Projects" />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <img src={notifications} alt="" />
              </div>
              <div className="text-white ml-4 text-xl">
                  <h1>Shahzaib Iqbal</h1>
                  <p className="float-right">NGO</p>
              </div>
              <div className="ml-4">
                    <img src={s} className="w-10" alt="" />
              </div>
            </div>
          </div>

          {/* Main Contents */}

          <div className="grid grid-cols-3 mx-40 gap-x-12 mt-12">
            <div className="col-span-2 mb-8">
              <h1 className="font-bold text-white mb-4 text-4xl">Active Projects</h1>

              <div className="bg-[#6C9EB0] rounded-2xl p-5">
                  <div className="w-full text-2xl flex mb-4 justify-between px-10 flex-row text-white font-semibold">
                  <h1>
                    Flood Relief Camp
                    
                  </h1>
                  <button className="bg-[#126D8D] font-light px-12 py-2 rounded-full">Close</button>
                  
                  </div>

                  <div className="w-full text-2xl flex mb-4 justify-between px-10 flex-row text-white font-semibold">
                  <h1>
                    Flood Relief Camp
                    
                  </h1>
                  <button className="bg-[#126D8D] font-light px-12 py-2 rounded-full">Close</button>
                  
                  </div>
                
                  <div className="w-full text-2xl flex mb-4 justify-between px-10 flex-row text-white font-semibold">
                  <h1>
                    Flood Relief Camp
                    
                  </h1>
                  <button className="bg-[#126D8D] font-light px-12 py-2 rounded-full">Close</button>
                  
                  </div>
                

              </div>
            </div>
            <div className="">
            <h1 className="font-bold text-white mb-4 text-4xl">Announcements</h1>
                <div className="bg-[#6C9EB0] rounded-2xl h-[80vh] ">
                      <br />
                      <br />
                      <img src={annouce} className="w-full"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

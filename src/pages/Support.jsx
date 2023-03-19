import Sidebar from "../components/Sidebar";
import supportIcon from "/icons/customer-service-icon.png";
import React from 'react'

export default function Support() {
  return (
    <div className="">
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full mt-4">
          <div className="w-full items-center pl-4 text-6xl bg-gray-300 py-2 text-white flex ">
            <img src={supportIcon} alt="" /> <h1 className="pl-4">Support</h1>
          </div>

          <div className="w-full px-20  mt-8">
            
            </div>
        </div>
      </div>
    </div>
  )
}

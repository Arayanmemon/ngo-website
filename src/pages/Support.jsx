import Sidebar from "../components/Sidebar";
import supportIcon from "/icons/customer-service-icon.png";
import chat from "/icons/chat.png";
import arrow from "/icons/arrow.png";
import search from "/icons/search.png";
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Support() {
    const navigate = useNavigate();
    var btn = document.getElementsByClassName('accordian');
    
  return (
    <div className="">
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full mt-4">
          <div className="w-full items-center pl-4 text-4xl bg-gray-300 py-2 text-white flex">
            <img src={supportIcon} alt="" /> <h1 className="pl-4">Support</h1>
          </div>

          <div className="w-[80%] mx-auto px-6 my-8 py-2 h-auto bg-white rounded-xl">
              <div className="flex justify-between text-xl my-4"> 
                  <span><img src={arrow} alt="" /></span>
                  <span>FAQ</span>
                  <span><img src={search} alt="" /></span>
              </div>
              <h1 className="text-center text-2xl my-4">How can we help you</h1>
              <div>
                <div className="w-[35%] mx-auto my-4">
                <input type="search" name="" id="" className="bg-[#D9D9D9] w-[18rem] rounded-lg px-4 py-2" placeholder="Enter your keyword" />
                </div>
                <div className="w-[9rem] bg-[#AFD5E8] h-[8rem] px-4 py-2 rounded-lg my-4"> 
                <button onClick={() => {navigate("/SupportChat")}}>
                    <img src={chat} alt="" />
                    <p>Direct chat with</p>
                    <p>Admin</p>
                </button>
                </div>
                <span>Top Questions</span>
                <span className="text-red-500 float-right"><a href="">View all</a></span>
                <div className="my-6">
                  <div className="border-[1px] rounded-lg px-4 py-4 my-2">
                    <button className="accordian">
                    <h1 className="font-bold">How to collaborate with volunteers</h1>
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo officia porro placeat aspernatur. Pariatur ullam dignissimos reiciendis </p>
                  </div>
                  <div className="border-[1px] rounded-lg px-4 py-4 my-2">
                    <button className="accordian">
                    <h1 className="font-bold">How to collaborate with volunteers</h1>
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo officia porro placeat aspernatur. Pariatur ullam dignissimos reiciendis </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

import Sidebar from "../components/Sidebar";
import supportIcon from "/icons/customer-service-icon.png";
import arrow from "/icons/arrow.png";
import search from "/icons/search.png";
import person1 from "/icons/person1.png";
import person2 from "/icons/person2.png";
import React from 'react'

export default function SupportChat() {
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

                        <div className="w-[35%] mx-auto my-4">
                            <input type="search" name="" id="" className="bg-[#D9D9D9] w-[18rem] rounded-lg px-4 py-2" placeholder="Enter your keyword" />
                        </div>
                        {/* Answer */}
                        <div className="flex  w-[70%] bg-slate-50 my-12 rounded-lg py-4">
                            <img src={person1} alt="" />
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit praesentium consectetur eum nisi</p>
                                <p className="text-sm text-gray-500">08:25 AM</p>
                            </div>
                        </div>
                        {/* Question */}
                        <div className="w-[70%] my-12 pl-4 pr-24 py-4 ml-64 rounded-lg bg-red-100 ">
                            <p className="text-red-500">How to post something</p>
                            <p className="text-sm text-gray-500">08:30 AM</p>
                        </div>
                        {/* Answer */}
                        <div className="flex  w-[70%] bg-slate-50 my-12 rounded-lg py-4">
                            <img src={person2} alt="" />
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit praesentium consectetur eum nisi</p>
                                <p className="text-sm text-gray-500">08:25 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import Sidebar from "../components/Sidebar";
import clipboardIcon from "/icons/clipboard-icon.png";

import profile1 from "/images/profile1.png"
import profile2 from "/images/profile2.png"
import React from 'react'

export default function Awards() {
  return (
        <div className="flex flex-row">
                <Sidebar />
                <div className="w-full mt-4">
                        <div className="w-full items-center pl-4 text-4xl bg-gray-300 py-2 text-white flex ">
                               <img src={clipboardIcon} alt="" /> <h1 className="pl-4">Awards</h1>
                        </div>

                        <div className="w-full px-20  mt-8">
                        <div className="bg-white text-2xl text-black ">
                                
                                                <div className="w-full rounded-lg text-black font-bold text-3xl px-4 py-4 bg-stone-400">
                                                        Volunteers
                                                </div>
                                                <br />
                                                <br />

                                                <div className="flex flex-row items-center justify-between bg-green-600 bg-opacity-70 px-4 py-3">
                                                        <div className="flex flex-row items-center">
                                                                <img src={profile2} className="w-20" />
                                                                 <h1>Shahzaib Iqbal</h1>
                                                        </div>

                                                        <div className="flex flex-row items-center">
                                                               <button className="bg-blue-400 font-bold text-xl text-white px-4 py-2">Upload</button>
                                                        </div>


                                                        <div className="flex flex-row items-center">
                                                               <button className="bg-blue-400 font-bold text-xl text-white px-4 py-2">Reject</button>
                                                        </div>
                                                </div>

                                                <br />
                                                
                                                <div className="flex flex-row items-center justify-between bg-green-600 bg-opacity-70 px-4 py-3">
                                                        <div className="flex flex-row items-center">
                                                                <img src={profile2} className="w-20" />
                                                                 <h1>Shahzaib Iqbal</h1>
                                                        </div>

                                                        <div className="flex flex-row items-center">
                                                               <button className="bg-blue-400 font-bold text-xl text-white px-4 py-2">Upload</button>
                                                        </div>


                                                        <div className="flex flex-row items-center">
                                                               <button className="bg-blue-400 font-bold text-xl text-white px-4 py-2">Reject</button>
                                                        </div>
                                                </div>

                                                <br />
                                                
                        </div>

                        </div>
                </div>
        </div>
  )
}

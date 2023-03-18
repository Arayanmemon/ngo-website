import Sidebar from "../components/Sidebar";
import clipboardIcon from "/icons/clipboard-icon.png"
import React from 'react'

export default function AddProjects() {
  return (
        <div className="flex flex-row">
                <Sidebar />
                <div className="w-full mt-4">
                        <div className="w-full items-center pl-4 text-6xl bg-gray-300 py-2 text-white flex ">
                               <img src={clipboardIcon} alt="" /> <h1 className="pl-4">Add Project</h1>
                        </div>

                        <div className="pl-20 w-4/6 text-3xl mt-16 text-white">
                                <ul>
                                        <li className="flex justify-between items-center">
                                                <h1 className="font-bold">Name</h1>
                                                <input type="text"  className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white" />
                                        </li>
                                        <br />
                                        <li className="flex justify-between items-center">
                                                <h1 className="font-bold">Location</h1>
                                                <input type="text"  className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white" />
                                        </li>
                                        <br />
                                        <li className="flex justify-between items-center">
                                                <h1 className="font-bold">Description</h1>
                                                <input type="text"  className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white" />
                                        </li>
                                        <br />
                                        <li className="flex justify-between items-center">
                                                <h1 className="font-bold">Start Date</h1>
                                                <input type="date" placeholder="Input Start Date"  className="rounded-lg w-2/5  text-2xl px-2 py-1 bg-transparent border-2 border-white" />
                                        </li>
                                        <br />
                                        <li className="flex justify-between items-center">
                                                <h1 className="font-bold">End Date</h1>
                                                <input type="date" placeholder="Input End Date" className="rounded-lg w-2/5 text-2xl px-2 py-1 bg-transparent border-2 border-white" />
                                        </li>
                                        <br />
                                        <li className="flex justify-between items-center">
                                                <h1 className="font-bold">Service Category</h1>
                                                <input type="text"  className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white" />
                                        </li>
                                        <br />
                                        <li className="flex justify-between items-center">
                                                <h1 className="font-bold">Project Cover</h1>
                                                <input type="text"  className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white" />
                                        </li>
                                        <br /><br />
                                        <li className="flex justify-center">
                                                        <button className="text-white bg-slate-800 font-bold px-16 rounded-md py-1">SAVE</button>
                                        </li>
                                </ul>
                        </div>
                </div>
        </div>
  )
}

import Sidebar from "../components/Sidebar";
import volunteers from "/icons/volunteers-icon.png";
import React from "react";
import profile1 from "/images/profile1.png"
import profile2 from "/images/profile2.png"


export default function Volunteers() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full mt-4">
        <div className="w-full items-center pl-4 text-6xl bg-gray-300 py-2 text-white flex ">
          <img src={volunteers} alt="" /> <h1 className="pl-4">Volunteers</h1>
        </div>

        <div className="w-full px-8 mt-16">
          <table className="table-auto w-full p-3 bg-white text-black  rounded-md overflow-x-scroll">
            <thead className="rounded-lg bg-stone-400 text-3xl font-bold">
              <tr>
                <th className="px-8 py-4  rounded-l-lg  border-r border-black">#</th>

                <th className="px-8 py-4 border-r border-black">Name</th>

                <th className="px-8 py-4  border-r border-black">Contact No</th>

                <th className="px-8 py-4  rounded-r-lg ">Address</th>

              </tr>
            </thead>
            <br />
            <tbody className="text-2xl text-center gap-y-2">
      
              <tr className="bg-green-600 bg-opacity-70 rounded-lg mb-2">
                <td className="px-6 py-4 rounded-l-lg ">1</td>
                <td className="px-6 py-4 flex flex-row justify-center items-center"> <img src={profile1} className="w-16 mr-4"  />   Shahzaib</td>
                <td className="px-6 py-4 ">0300-0000000</td>
                <td className="px-6 py-4 rounded-r-lg ">Street #3 , Rawalpindi</td>
                
              </tr>
              <br />
              <tr className="bg-green-600 bg-opacity-70 rounded-lg mb-2">
                <td className="px-6 py-4 rounded-l-lg ">1</td>
                <td className="px-6 py-4 flex flex-row justify-center items-center"> <img src={profile1} className="w-16 mr-4"  />   Shahzaib</td>
            <td className="px-6 py-4 ">0300-0000000</td>
                <td className="px-6 py-4 rounded-r-lg">Street #3 , Rawalpindi</td>
                
              </tr>
<br />
              <tr className="bg-green-600 bg-opacity-70 rounded-lg">
                <td className="px-6 py-4 rounded-l-lg">1</td>
                <td className="px-6 py-4 flex flex-row justify-center items-center"> <img src={profile1} className="w-16 mr-4"  />   Shahzaib</td>
                <td className="px-6 py-4 ">0300-0000000</td>
                <td className="px-6 py-4 rounded-r-lg">Street #3 , Rawalpindi</td>
                
              </tr>

                         <br />
                         <br />

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

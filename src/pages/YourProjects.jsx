import Sidebar from "../components/Sidebar";
import clipboardIcon from "/icons/clipboard-icon.png";

import React from "react";

export default function YourProjects() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full mt-4">
        <div className="w-full items-center pl-4 text-6xl bg-gray-300 py-2 text-white flex ">
          <img src={clipboardIcon} alt="" />{" "}
          <h1 className="pl-4">Your Projects</h1>
        </div>

        <div className="w-full px-4 mt-8">
          <table className="border border-white table-auto w-full">
            <thead className="text-3xl border border-white font-bold text-center text-white">
              <th className="border border-white px-2 py-1">#</th>
              <th className="border border-white px-4 py-1">Name</th>
              <th className="border border-white px-4 py-1">Category</th>
              <th className="border border-white px-4 py-1">Start Date</th>
              <th className="border border-white px-4 py-1">End Date</th>
              <th className="border border-white px-4 py-1">Status</th>
            </thead>

            <tbody className="text-white text-2xl font-semibold text-center">
                <tr>
                        <td className="border border-white px-2 py-1">1</td>
                        <td className="border border-white px-4 py-1">Project 1</td>
                        <td className="border border-white px-4 py-1">Category 1</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">
                                <select name="" id="" className="bg-transparent">
                                        <option value="">Done</option>
                                </select>
                        </td>
                </tr>
                <tr>
                        <td className="border border-white px-2 py-1">2</td>
                        <td className="border border-white px-4 py-1">Project 2</td>
                        <td className="border border-white px-4 py-1">Category 2</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">Pending</td>
                </tr>
                <tr>
                        <td className="border border-white px-2 py-1">3</td>
                        <td className="border border-white px-4 py-1">Project 3</td>
                        <td className="border border-white px-4 py-1">Category 3</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">Pending</td>
                </tr>
                <tr>
                        <td className="border border-white px-2 py-1">4</td>
                        <td className="border border-white px-4 py-1">Project 4</td>
                        <td className="border border-white px-4 py-1">Category 4</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">Pending</td>
                </tr>
                <tr>
                        <td className="border border-white px-2 py-1">5</td>
                        <td className="border border-white px-4 py-1">Project 5</td>
                        <td className="border border-white px-4 py-1">Category 5</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">2021-01-01</td>
                        <td className="border border-white px-4 py-1">Pending</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

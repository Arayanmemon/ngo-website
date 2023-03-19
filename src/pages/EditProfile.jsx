import Sidebar from "../components/Sidebar";
import clipboardIcon from "/icons/clipboard-icon.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full mt-4 ">
        <div className="w-full items-center pl-4 text-6xl bg-gray-300 py-2 text-white flex ">
          <img src={clipboardIcon} alt="" />{" "}
          <h1 className="pl-4">Edit Profile</h1>
        </div>

        <div className=" w-full  mt-8 text-white flex flex-col px-80 ">
          <div className="self-end block my-2 ">
            <button
              className="bg-[#126D8D] text-md px-6 py-1 mx-2 rounded-lg"
              onClick={() => {
                navigate("/profile");
              }}
            >
              BACK
            </button>
          </div>

          <br />
          <br />

          <ul className="text-xl">
            <li className="flex justify-between items-center">
              <h1 className="font-bold">Name</h1>
              <input
                type="text"
                className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white"
              />
            </li>
            <br />
            <li className="flex justify-between items-center">
              <h1 className="font-bold">Email</h1>
              <input
                type="text"
                className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white"
              />
            </li>
            <br />
            <li className="flex justify-between items-center">
              <h1 className="font-bold">Description</h1>
              <input
                type="text"
                className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white"
              />
            </li>
            <br />
            <li className="flex justify-between items-center">
              <h1 className="font-bold">Registration No</h1>
              <input
                type="text"
                className="rounded-lg w-2/5  text-2xl px-2 py-1 bg-transparent border-2 border-white"
              />
            </li>
            <br />
            <li className="flex justify-between items-center">
              <h1 className="font-bold">Address</h1>
              <input
                type="text"
                className="rounded-lg w-2/5 text-2xl px-2 py-1 bg-transparent border-2 border-white"
              />
            </li>
            <br />
            <li className="flex justify-between items-center">
              <h1 className="font-bold">Certificate</h1>
              <input
                type="file"
                placeholder="Upload Certificate"
                className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white"
              />
            </li>
            <br />
            <li className="flex justify-between items-center">
              <h1 className="font-bold">Profile Image</h1>
              <input
                type="file"
                className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white"
              />
            </li>
            <br />
            <li className="flex justify-between items-center">
              <h1 className="font-bold">Cover Image</h1>
              <input
                type="file"
                className="rounded-lg  text-2xl px-2 py-1 w-2/5 bg-transparent border-2 border-white"
              />
            </li>
            <br />
            <br />
            <li className="flex justify-center">
              <button className="text-white bg-[#126D8D] text-sm  font-bold px-16 rounded-md py-1">
                SAVE
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

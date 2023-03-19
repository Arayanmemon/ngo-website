import React from 'react'
import Sidebar from "../components/Sidebar";
import profileIcon from "/icons/profile-icon.png";

export default function Profile() {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className='w-full flex flex-col gap-2 mt-4'>
          <div className="tems-center pl-4 text-6xl bg-gray-300 py-2 text-white flex ">
            <img src={profileIcon} alt="" /> <h1 className="pl-4">Profile Information</h1>
          </div>
          <div className='flex flex-col justify-between text-white mx-auto  gap-3'>

            <div className='self-end my-2'>
              <button className='bg-blue-400 px-6 py-1 mx-2 rounded-lg'>EDIT</button>
              <button className='bg-blue-400 px-2 py-1 mx-2 rounded-lg'>VIEW PROFILE</button>
            </div>
            <div className='text-xl hidden'>
              <span className='px-4 py-2 border-[1px] border-white w-[18rem] inline-block'>Name</span><span className='py-2 px-4 inline-block w-[28rem] border-[1px] border-white'>EDHI FOUNDATION</span>
            </div>
            <div className='text-xl '>
              <span className='px-4 py-2 border-[1px] border-white w-[16rem] inline-block'>Name</span><span className='py-2 px-4 inline-block w-[32rem] border-[1px] border-white'>EDHI FOUNDATION</span>
            </div>
            <div className='text-xl '>
              <span className='px-4 py-2 border-[1px] border-white w-[16rem] inline-block'>Description</span><span className='py-2 px-4 inline-block w-[32rem] border-[1px] border-white'>contact@edhi.com</span>
            </div>
            <div className='text-xl '>
              <span className='px-4 py-2 border-[1px] border-white w-[16rem] inline-block'>Name</span><span className='py-2 px-4 inline-block w-[32rem] border-[1px] border-white'>Edhi foundtion is a non profit organization</span>
            </div>
            <div className='text-xl '>
              <span className='px-4 py-2 border-[1px] border-white w-[16rem] inline-block'>Registration No.</span><span className='py-2 px-4 inline-block w-[32rem] border-[1px] border-white'>123456</span>
            </div>
            <div className='text-xl '>
              <span className='px-4 py-2 border-[1px] border-white w-[16rem] inline-block'>Address</span><span className='py-2 px-4 inline-block w-[32rem] border-[1px] border-white'>Mukha singh estate, Rawalpindi</span>
            </div>
            <div className='text-xl '>
              <span className='px-4 py-2 border-[1px] border-white w-[16rem] inline-block'>Certificate</span><span className='py-2 px-4 inline-block w-[32rem] border-[1px] border-white'><a href="#">view</a></span>
            </div>
            <div className='text-xl '>
              <span className='px-4 py-2 border-[1px] border-white w-[16rem] inline-block'>Profile Image</span><span className='py-2 px-4 inline-block w-[32rem] border-[1px] border-white'><a href="#">view</a></span>
            </div>
            <div className='text-xl '>
              <span className='px-4 py-2 border-[1px] border-white w-[16rem] inline-block'>Cover Image</span><span className='py-2 px-4 inline-block w-[32rem] border-[1px] border-white'><a href="#">view</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

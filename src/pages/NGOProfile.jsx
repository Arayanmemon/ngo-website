import Sidebar from "../components/Sidebar";
import Edhi from "/images/edhi.png";
import Edhi2 from "/images/edhi2.png";

import EdhiLogo from "/images/group.png";

import React from "react";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col m-0">
      <div>
        <img src={Edhi} className="w-full h-[40vh]" />
      </div>
      <div className="body ">
        <div className="absolute top-[29vh] left-16">
          <div className="flex flex-row ">
            <div>
              <img className="" src={EdhiLogo} alt="" />
            </div>

            <div className="ml-4">
              <br />
              <br />
              <br />
              <br />
              <h1 className="text-4xl font-light text-white ">
                Edhi Foundation
              </h1>
              <br />
              <p className="text-white font-bold">
                4.9/5 <span className="font-light text-black">(30)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-[25vh]">
          <h1 className="text-center font-bold text-3xl text-white">
            {" "}
            <span className="text-[#3EEBEB]">ONGOING</span> PROJECTS
          </h1>

          <div className="w-3/4 grid grid-cols-3 gap-4 px-auto mx-auto">
            <div className="body w-3/4  p-2 relative">
              <div className=" rounded-t-full ">
                <img src={Edhi2} alt="" />
              </div>
              <div className="z-1 aboslute top-[2000px] px-4 bg-[#2F6977]">
                <h1 className="text-white text-center font-bold text-xl">
                  Children Services
                </h1>
                <p className="text-white">
                  the history of establishing the Edhi child adoption Centre and
                    childcare services dates back to 1949. Mrs. Bilquis Edhi is
                  supervising and looking after the caring and feeding of babies
                  and children. For this purpose, exclusive cradles have been
                  placed outside all Edhi Centre's.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

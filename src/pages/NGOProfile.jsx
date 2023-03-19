import Sidebar from "../components/Sidebar";
import Edhi from "/images/edhi.png";
import EdhiLogo from "/images/group.png";

import React from "react";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col m-0">
      <div>
        <img src={Edhi} className="w-full" />
      </div>
      <div className="body ">
        <div className="absolute top-[58vh] left-16">
          <div className="flex flex-row ">
            <div>
              <img className="" src={EdhiLogo} alt="" />
            </div>

            <div className="ml-4">
            <br />
            <br />
            <br />
            <br />
              <h1 className="text-4xl font-light text-white ">Edhi Foundation</h1>
              <br />
              <p className="">4.9/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

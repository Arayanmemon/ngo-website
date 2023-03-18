import React, { useState } from "react";
export default function App() {
  const [open, setOpen] = useState();
  return (
    <div
      className="body bg-gradient-to-b from-sky-700 to-slate-50 min-h-[100vh]"
      style={{
        backgroundColor:
          "linear-gradient(180deg, #1C244D 0%, rgba(58, 143, 143, 0) 100%)",
      }}
    >

      {/* SIDEAR */}
      <div className="flex flex-row">
        <div
          className={`h-screen bg-blue-200 px-5 ${
            open ? "w-72" : "w-0 px-0"
          } duration-700 `}
        >
          <div className={`${open ? "flex" : "hidden"} flex-col px-4`}>
              sidebar options
          </div>
        </div>

        <div className="w-full">
            {/* NAVBAR */}
          <div className="flex flex-row w-full px-10 justify-between">
            <div className="flex flex-row">
              <div><button onClick={() => setOpen(!open)}>Open</button></div>
              <div>Menu</div>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="flex flex-row">
              <div>Notifications</div>
              <div>Username + avatar</div>
            </div>
          </div>


            {/* Main Contents */}
        
            <div>

              
            </div>
        </div>

      
      </div>
    </div>
  );
}

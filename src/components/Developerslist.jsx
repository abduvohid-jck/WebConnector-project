import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaConnectdevelop } from "react-icons/fa";

function Developerslist() {
  let [developers, setDevelopers] = useState([]);
  useEffect(() => {
    axios
      .get("https://nt-devconnector.onrender.com/api/profile")
      .then((res) => setDevelopers(res.data));
  }, []);

  return (
    <div>
      <div className="w-[1031px] m-auto mt-[96px]">
        <h1 className="text-[#17a2b8] mb-[16px] text-[48px] font-[700]">
          Developers
        </h1>
        <p className="text-[24px] flex gap-[5px] text-[#333333] items-center mb-[16px]">
          <FaConnectdevelop />
          Browse and connect with developers
        </p>
        {developers.map((developer) => {
          return (
            <div className="border-[#ccc] border-[1px] border-[solid] bg-[#F4F4F4] mb-[16px] flex items-center p-[16px] gap-[16px]">
              <div>
                <img
                  className="h-[234.2px] w-[234.2px] rounded-[100%]"
                  src={developer.user.avatar}
                  alt=""
                />
              </div>
              <div className="w-[469.2px]">
                <p className="text-[24px] font-[700]">{developer.user.name}</p>
                <p className="mt-[16px]">
                  {developer.status} at {developer.company}
                </p>
                <p className="mt-[16px] w-[234.6px]">{developer.location}</p>
              </div>

              <div className="w-[234.px] text-left text-[#17a2b8]">
                {developer.skills}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Developerslist;

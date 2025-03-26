import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

function Notfoundarea() {
  return (
    <div>
      <div className="w-[1036px] m-auto mt-[96px]">
        <h1 className="flex items-center text-[64px] mb-[16px] gap-[5px] text-[#17a2b8] font-[700]">
          <FaExclamationTriangle /> Page Not Found
        </h1>
        <p className="text-[48px] text-[#333333]">
          Sorry, this page does not exist
        </p>
      </div>
    </div>
  );
}

export default Notfoundarea;

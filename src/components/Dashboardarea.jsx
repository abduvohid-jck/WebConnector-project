import { FaUser } from "react-icons/fa";

function Dashboardarea() {
  return (
    <div>
      <div className="w-[1036px] m-auto mt-[96px]">
        <h1 className="text-[48px] font-[700] text-[#17a2b8] mb-[16px]">
          Dashboard
        </h1>
        <p className="flex items-center text-[24px] text-[#333333] gap-[5px]">
          <FaUser /> Welcome to DevConnector
        </p>
      </div>
    </div>
  );
}

export default Dashboardarea;

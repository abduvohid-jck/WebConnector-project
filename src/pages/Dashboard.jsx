import React from "react";
import Navbar from "../components/Navbar";
import Dashboardarea from "../components/Dashboardarea";

function Dashboard() {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <Dashboardarea />
    </div>
  );
}

export default Dashboard;

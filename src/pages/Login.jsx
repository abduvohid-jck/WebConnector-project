import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Logincard from "../components/Logincard";

function Login() {

  return (
    <div className="h-[100vh]">
      <Navbar />
      <Logincard />
    </div>
  );
}

export default Login;

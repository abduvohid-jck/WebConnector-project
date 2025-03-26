import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import RegisterCard from "../components/Registercard";

function Register() {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <RegisterCard />
    </div>
  );
}

export default Register;

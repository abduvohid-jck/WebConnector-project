import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { LanguageContext } from "../contexts/Languagecontext";
import { DarkWhiteMode } from "../contexts/Darkwhitemode";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
function Logincard() {
  let { language, setLanguage } = useContext(LanguageContext);
  let { darkwhitemode, setDarkwhitemode } = useContext(DarkWhiteMode);
  let languages = {
    eng: { title: "Sign In", description: "Sign into your account" },
    uzb: { title: "Kirish", description: "Hisobingizga kiring" },
    rus: { title: "Войти", description: "Войдите в свой аккаунт" },
  };

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`https://nt-devconnector.onrender.com/api/auth`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      });
  }

  return (
    <div>
      <div className="w-[1100px] m-auto mt-[96px]">
        <h1
          className={`text-[48px]  ${
            darkwhitemode ? "text-white" : "text-[#17a2b8]"
          } font-[700] mb-[16px]`}
        >
          {languages[language].title}
        </h1>
        <div className="flex items-center gap-[5px] mb-[16px]">
          <FaUser
            className={`${darkwhitemode ? "text-white" : "text-[#333333]"}`}
          />{" "}
          <p
            className={`text-[24px] ${
              darkwhitemode ? "text-white" : "text-[#333333]"
            }`}
          >
            {languages[language].description}
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input
            className="border-[1px] border-[solid] border-[#ccc] text-[1.2rem] p-[6.400px] block w-[100%] mb-[19.200px]"
            type="email"
            placeholder="Email Adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-[1px] border-[solid] border-[#ccc] text-[1.2rem] p-[6.400px] block w-[100%] mb-[19.200px]"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="text-white bg-[#17a2b8] py-[6.400px] px-[20.800px] mb-[16px]">
            Login
          </button>
        </form>

        <p className={`${darkwhitemode ? "text-white" : "text-[#333333]"}`}>
          Don't have an account?{" "}
          <Link to="/register" className="text-[#17a2b8]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Logincard;

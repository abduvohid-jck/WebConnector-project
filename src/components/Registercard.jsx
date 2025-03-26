import React, { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { LanguageContext } from "../contexts/Languagecontext";
import { DarkWhiteMode } from "../contexts/Darkwhitemode";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function RegisterCard() {
  let { language, setLanguage } = useContext(LanguageContext);
  let { darkwhitemode, setDarkwhitemode } = useContext(DarkWhiteMode);
  let languages = {
    eng: { title: "Sign Up", description: "Create Your Account" },
    uzb: { title: "Ro‘yxatdan o‘tish", description: "Hisobingizni yarating" },
    rus: {
      title: "Зарегистрироваться",
      description: "Создайте свою учетную запись",
    },
  };
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`https://nt-devconnector.onrender.com/api/users`, {
        name,
        email,
        password,
      })
      .then((res) => localStorage.setItem("token", res.data.token));
    navigate("/");
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
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-[1px] border-[solid] border-[#ccc] text-[1.2rem] p-[6.400px] block w-[100%] mb-[19.200px]"
            type="email"
            placeholder="Email Address"
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
            Register
          </button>
        </form>

        <p className={`${darkwhitemode ? "text-white" : "text-[#333333]"}`}>
          Already have an account?{" "}
          <Link to="/" className="text-[#17a2b8]">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterCard;

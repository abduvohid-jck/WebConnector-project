import React, { useContext } from "react";
import { FaCode } from "react-icons/fa";
import { LanguageContext } from "../contexts/Languagecontext";
import { DarkWhiteMode } from "../contexts/Darkwhitemode";
import { Link, Navigate } from "react-router-dom";

function Navbar() {
  let { language, setLanguage } = useContext(LanguageContext);
  let { darkwhitemode, setDarkwhitemode } = useContext(DarkWhiteMode);
  function isAuth() {
    return localStorage.getItem("token") !== null;
  }

  function ProtectedLink({ children }) {
    return isAuth() ? children : null;
  }

  function HideLinks({ children }) {
    return isAuth() ? null : children;
  }
  function Logout() {
    return localStorage.removeItem("token");
  }
  return (
    <div>
      <div className="flex items-center justify-between bg-[#343a40] py-[11.200px] px-[32px]">
        <p className="text-white m-[0.25rem] text-[24px] font-[700] flex items-center gap-[5px]">
          <FaCode /> DevConnector
        </p>
        <div className="flex gap-[7.200px] text-white">
          <Link to="/developers" className="p-[7.200px] mx-[4px]">
            Developers
          </Link>
          <ProtectedLink>
            <Link to="/posts" className="p-[7.200px] mx-[4px]">
              Posts
            </Link>
            <Link to="/dashboard" className="p-[7.200px] mx-[4px]">
              Dashboard
            </Link>
          </ProtectedLink>
          <HideLinks>
            <Link to="/register" className="p-[7.200px] mx-[4px]" href="#">
              Register
            </Link>
            <Link to="/" className="p-[7.200px] mx-[4px]" href="#">
              Login
            </Link>
            <select
              name="dark-white-mode"
              id="dark-white-mode"
              className="bg-[#343a40] outline-none"
              onChange={(e) => setDarkwhitemode(e.target.value)}
            >
              <option value="">White</option>
              <option value="true"> Dark</option>
            </select>
            <select
              className="bg-[#343a40] outline-none"
              name="languages"
              id="languages"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="eng">Eng</option>
              <option value="uzb">Uzb</option>
              <option value="rus">Rus</option>
            </select>
          </HideLinks>
          <ProtectedLink>
            <Link to="/" className="p-[7.200px] mx-[4px]" onClick={Logout}>
              Logout
            </Link>
          </ProtectedLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

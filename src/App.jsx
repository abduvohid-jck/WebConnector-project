import React, { useContext } from "react";
import { DarkWhiteMode } from "./contexts/Darkwhitemode";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import Notfound from "./pages/Notfound";
import Developers from "./pages/Developers";

function App() {
  let { darkwhitemode, setDarkwhitemode } = useContext(DarkWhiteMode);

  function isAuth() {
    return localStorage.getItem("token") !== null;
  }

  function ProtectedRoute({ children }) {
    return isAuth() ? children : <Navigate to="/" />;
  }

  return (
    <div className={darkwhitemode ? "bg-[#343a40]" : "bg-white"}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/developers" element={<Developers />} />
          <Route
            element={
              <ProtectedRoute>
                <Posts />
              </ProtectedRoute>
            }
            path="/posts"
          />
          <Route
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
            path="/dashboard"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

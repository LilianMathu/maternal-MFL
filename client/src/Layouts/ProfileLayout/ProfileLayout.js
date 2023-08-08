import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Appbar from "../../Components/Appbar/Appbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Dashboard from "../../Features/Dashboard/Dashboard";
import Maternal from "../../Features/Maternal MFL/Maternal";
import "./profilelayout.scss";
import NCD from "../../Features/NCD-MFL/NCD";

const ProfileLayout = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="profilelayout">
      <Appbar showSidebar={showSidebar} />

      <div
        className={
          sideBar ? "profilelayout-sidebar open" : "profilelayout-sidebar"
        }
      >
        <Sidebar />
      </div>

      <div className="profilelayout-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/maternal" element={<Maternal />} />
          <Route path="/ncd" element={<NCD />} />

          <Route path="/logout" />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileLayout;

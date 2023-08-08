import { useState } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Appbar from "../../Components/Appbar/Appbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Dashboard from "../../Features/Dashboard/Dashboard";
import Maternal from "../../Features/Maternal MFL/Maternal";
import NCD from "../../Features/NCD-MFL/NCD";
import HospitalProfile from "../../Features/Maternal MFL/HospitalProfile";
import "./profilelayout.scss";

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
          <Route path="/maternal/:hospitalId" element={<HospitalProfile />} />
          <Route path="/logout" />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileLayout;

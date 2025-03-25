import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full flex">
      <div className="w-[15%]">
        <Navbar></Navbar>
      </div>
      <div className="w-[85%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

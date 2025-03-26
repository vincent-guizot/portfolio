import React from "react";
import { Outlet } from "react-router-dom";

const ProjectLayout = () => {
  return (
    <div className="p-6">
      <Outlet></Outlet>
    </div>
  );
};

export default ProjectLayout;

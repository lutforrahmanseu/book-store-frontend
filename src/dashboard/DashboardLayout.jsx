import React from "react";
import { Outlet } from "react-router";
import SideBars from "./SideBars";


export default function DashboardLayout() {
  return (
    <div className="flex gap-4 flex-col md:flex-row my-32">
      <SideBars/>
      <Outlet />
    </div>
  );
}

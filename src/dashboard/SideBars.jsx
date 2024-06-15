import React from "react";
import { Sidebar } from "flowbite-react";

import {

  HiChartPie,
  HiInbox,
 
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useParams } from "react-router";
export default function SideBars() {
  const {id}=useParams()
  return (
    <div>
      <Sidebar className="">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiViewBoards}>
             Upload
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage
            </Sidebar.Item>
            <Sidebar.Item href={`/admin/dashboard/edit/${id}`} icon={HiUser}>
              Edit
            </Sidebar.Item>
            <Sidebar.Item href='/login' icon={HiUser}>
              Login
            </Sidebar.Item>
            <Sidebar.Item href='/logout' icon={HiUser}>
              Logout
            </Sidebar.Item>
            
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

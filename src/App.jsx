import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { FooterNav } from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterNav />
    </div>
  );
}

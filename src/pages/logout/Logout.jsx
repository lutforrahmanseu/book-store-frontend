import React, { useContext } from "react";
import { AuthContext } from "../../contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
export default function Logout() {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogout = () => {
    logOut()
      .then(() => {
        //sign out successfully
        alert("sign out successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        //
        console.log(error);
      });
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-600 px-7 py-3 text-white rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/Login";

function Sidebar() {
  const isSignIn = useSelector((state) => state.app.isSignIn);
  console.log("isSignIn in Sidebar:", isSignIn);

  return (
    <div className="bg-gray-100 w-44">
      {isSignIn && <Login />}
    </div>
  );
}

export default Sidebar;

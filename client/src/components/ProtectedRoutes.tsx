import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const jwt = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user");
  return jwt && user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;

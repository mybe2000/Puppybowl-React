import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const getToken = () => localStorage.get("token");

  return getToken() ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;

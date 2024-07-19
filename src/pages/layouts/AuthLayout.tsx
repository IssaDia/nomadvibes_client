import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;

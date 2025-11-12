import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Fotter";
import AuthHeader from "../components/auth/AuthHeader";
// import Footer from "./components/Footer";

const AuthLayout: React.FC = () => {
  return (
    <>
      <AuthHeader />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;

import { Outlet } from "react-router-dom";
import AuthHeader from "../components/auth/AuthHeader";
import Footer from "../components/common/Fotter";

const AuthLayout = () => {
  return (
    <div>
      <AuthHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;

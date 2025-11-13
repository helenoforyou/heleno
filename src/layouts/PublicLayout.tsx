import { Outlet } from "react-router-dom";
import Footer from "../components/common/Fotter";
import Header from "../components/common/Header";

const PublicLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;

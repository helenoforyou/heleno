import { Outlet } from "react-router-dom";
import Footer from "../components/common/Fotter";
import Header from "../components/common/Header";

const PublicLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;

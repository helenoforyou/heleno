import {
  Bell,
  Compass,
  Home,
  Menu,
  MessageCircle,
  Moon,
  Rss,
  Search,
  Sun,
  Users
} from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import profile from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";

const DashboardLayout = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const sidebarBg = theme === "dark" ? "bg-black" : "bg-white";
  const sidebarText = theme === "dark" ? "text-white" : "text-black";
  const sidebarHover =
    theme === "dark" ? "hover:bg-gray-900" : "hover:bg-gray-100";

  const mainBg = theme === "dark" ? "bg-black" : "bg-white";
  const mainText = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={`flex h-screen ${mainBg} ${mainText}`}>
      <div className="w-64 h-screen">
        <aside
          className={`w-full h-full p-2 border-r-2 border-gray-200 flex flex-col justify-between ${sidebarBg} ${sidebarText}`}
        >
          <div
            style={{
              fontFamily: "'Pacifico', cursive",
              padding: "25px 16px 16px",
              margin: "0 0 19px"
            }}
            className="text-3xl font-bold text-rose-700"
          >
            Foryou
          </div>
          <nav className="flex-1 h-full">
            <Link
              to="/"
              className={`flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
            >
              <Home className="mr-3" /> Home
            </Link>
            <Link
              to="/find/"
              className={`flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
            >
              <Search className="mr-3" /> Search
            </Link>
            <Link
              to="/feed/"
              className={`flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
            >
              <Rss className="mr-3" /> Feed
            </Link>
            <Link
              to="/explore/"
              className={`flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
            >
              <Compass className="mr-3" /> Explore
            </Link>
            <Link
              to="/notifications/"
              className={`flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
            >
              <Bell className="mr-3" /> Notifications
            </Link>
            <Link
              to="/connections/"
              className={`flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
            >
              <Users className="mr-3" /> Connections
            </Link>
            <Link
              to="/messages/"
              className={`flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
            >
              <MessageCircle className="mr-3" /> Messages
            </Link>
            <Link
              to="/helenoforyou/"
              className={`flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
            >
              <img
                src={profile}
                alt="profile-pic"
                className="rounded-full w-6 h-6 mr-3"
              />{" "}
              Profile
            </Link>
          </nav>

          <div className="">
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
            >
              {theme === "dark" ? (
                <Sun className="mr-3" />
              ) : (
                <Moon className="mr-3" />
              )}{" "}
              {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
            <button
              className={`w-full flex items-center px-4 py-2.5 my-1 rounded-lg transition duration-200 ease-in-out cursor-pointer focus:outline-none ${sidebarHover}`}
              onClick={() => {
                navigate("/settings/");
              }}
            >
              <Menu className="mr-3" /> More
            </button>
          </div>
        </aside>
      </div>

      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

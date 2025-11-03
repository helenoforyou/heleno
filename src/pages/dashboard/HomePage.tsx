import {
  ActivitySquareIcon,
  Calendar,
  CheckCircle,
  Clock,
  Search,
  Users,
  X
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const HomePage = () => {
  const { theme } = useTheme();
  const [searchActivity, setSearchActivity] = useState("");

  const bgPage = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-gray-900" : "bg-white";
  const accent = theme === "dark" ? "text-rose-400" : "text-rose-700";
  const statIconBg = theme === "dark" ? "bg-rose-700" : "bg-rose-500";

  const stats = [
    { title: "Total Requests", value: 12, icon: <Users className="w-6 h-6" /> },
    {
      title: "Pending Requests",
      value: 4,
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Completed Sessions",
      value: 20,
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Upcoming Sessions",
      value: 3,
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const recentActivity = [
    "You requested service from Helon Ava Collins.",
    "Session with Helon Liam Patel completed.",
    "New Helon Sophia Tan joined your network."
  ];

  const requestedSessions = [
    { helon: "Ava Collins", status: "Pending", date: "2025-11-01" },
    { helon: "Liam Patel", status: "Confirmed", date: "2025-11-05" }
  ];

  const upcomingSessions = [
    { helon: "Sophia Tan", time: "10:00 AM, 28 Oct", status: "Scheduled" },
    { helon: "Ava Collins", time: "2:00 PM, 30 Oct", status: "Scheduled" }
  ];

  const filteredActivity = recentActivity.filter((act) =>
    act.toLowerCase().includes(searchActivity.toLowerCase())
  );
  const buttonText = theme === "dark" ? "text-white" : "text-gray-900";
  const inputText =
    theme === "dark"
      ? "text-gray-100 placeholder-gray-400"
      : "text-gray-900 placeholder-gray-500";

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-500 ${bgPage} ${textColor}`}
    >
      <header className="text-center mb-8">
        <div className="flex items-center justify-center gap-2">
          <h1 className={`text-5xl font-bold ${textColor}`}>Home</h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Overview of your requests, sessions, and recent activity
        </p>
      </header>

      <div className="flex flex-wrap gap-6 mb-8 max-w-4xl mx-auto">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex items-center p-4 rounded-xl transition-transform duration-300 hover:scale-105 ${cardBg}  w-full sm:w-[48%] lg:w-[23%] `}
          >
            <div
              className={`p-3 rounded-full flex items-center justify-center ${statIconBg} text-white`}
              title={stat.title}
            >
              {stat.icon}
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <h2 className={`text-xl font-semibold flex items-center gap-2`}>
              <ActivitySquareIcon className={`${accent} w-5 h-5`} /> Recent
              Activity
            </h2>

            <div
              className={`flex items-center w-full md:max-w-[300px] gap-2 px-2 py-1 rounded-full border transition-colors duration-300 ${
                theme === "dark" ? "border-gray-800" : "border-gray-200"
              } ${bgPage}`}
            >
              <button
                className={`bg-black text-white hover:bg-gray-900 ${buttonText} h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0`}
              >
                <Search className="w-5 h-5" />
              </button>

              <input
                type="text"
                value={searchActivity}
                placeholder="Search activity..."
                onChange={(e) => setSearchActivity(e.target.value)}
                className={`w-full bg-transparent md:px-2 focus:outline-none ${inputText}`}
              />

              {searchActivity && (
                <button
                  onClick={() => setSearchActivity("")}
                  className={`text-gray-500 hover:${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  } h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0`}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {filteredActivity.length > 0 ? (
              filteredActivity.map((act, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" /> {act}
                </li>
              ))
            ) : (
              <li className="text-gray-400">No activity found</li>
            )}
          </ul>
        </div>

        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2`}>
            <Clock className={`${accent} w-5 h-5`} /> Requested Sessions
          </h2>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {requestedSessions.map((req, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-2 rounded-lg transition"
              >
                <span>{req.helon}</span>
                <span
                  className={`text-sm font-medium ${
                    req.status === "Pending"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {req.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2`}>
            <Calendar className={`${accent} w-5 h-5`} /> Upcoming Sessions
          </h2>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {upcomingSessions.map((sess, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-2 rounded-lg transition"
              >
                <div>
                  <p className="font-medium">{sess.helon}</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    {sess.time}
                  </p>
                </div>
                <span className="text-green-500 font-medium">
                  {sess.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

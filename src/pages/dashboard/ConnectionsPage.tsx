import { Search, UserCheck, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const ConnectionsPage = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  //   const navigate = useNavigate();

  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-gray-900" : "bg-rose-50";
  const accent = theme === "dark" ? "text-blue-400" : "text-blue-700";
  const inputText =
    theme === "dark"
      ? "text-gray-100 placeholder-gray-400"
      : "text-gray-900 placeholder-gray-500";

  const mockConnections = [
    { id: 1, name: "Ava Collins", status: "Following", avatar: "🦋" },
    { id: 2, name: "Liam Patel", status: "Following", avatar: "🔥" },
    { id: 3, name: "Sophia Tan", status: "Follower", avatar: "🌸" },
    { id: 4, name: "Ethan Roy", status: "Follower", avatar: "💫" },
    { id: 5, name: "Noah Khan", status: "Suggested", avatar: "🌿" },
    { id: 6, name: "Mia Lopez", status: "Suggested", avatar: "☀️" }
  ];

  const filteredConnections = mockConnections.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {};

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-500 ${bgColor}`}
    >
      <header className="text-center mb-8">
        <div className="flex items-center justify-center gap-2">
          <h1 className={`text-5xl font-bold ${textColor}`}>Connections</h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Connect with people who share your energy
        </p>
      </header>

      <header className="mb-6 w-full flex justify-center">
        <div
          className={`flex items-center flex-1 w-full max-w-full relative backdrop-blur-sm border border-gray-300 py-1.5 rounded-full transition-all duration-300 md:max-w-lg md:px-2 px-1 gap-2 ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          } ${bgColor}`}
        >
          <button
            className={`bg-black text-white hover:bg-gray-900 ${accent} h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0`}
          >
            <Search className="w-5 h-5" />
          </button>

          <input
            type="text"
            value={search}
            placeholder="Search people or stories..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className={`w-full bg-transparent md:px-2 focus:outline-none ${inputText}`}
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className={`text-gray-500 hover:${
                theme === "dark" ? "text-gray-100" : "text-gray-900"
              } h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0`}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredConnections.map((person) => (
          <div
            key={person.id}
            className={`flex flex-col items-center justify-center text-center rounded-2xl p-5 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 ${cardBg}`}
          >
            <div className="text-5xl mb-3">{person.avatar}</div>
            <h3 className={`font-semibold text-lg ${textColor}`}>
              {person.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {person.status === "Suggested"
                ? "People you may know"
                : person.status === "Follower"
                ? "Follows you"
                : "You follow"}
            </p>

            {person.status === "Following" ? (
              <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition">
                <UserCheck className="w-4 h-4" /> Following
              </button>
            ) : person.status === "Suggested" ? (
              <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition">
                <UserPlus className="w-4 h-4" /> Connect
              </button>
            ) : (
              <button className="flex items-center gap-2 bg-gray-600 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition">
                <UserCheck className="w-4 h-4" /> Follow Back
              </button>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default ConnectionsPage;

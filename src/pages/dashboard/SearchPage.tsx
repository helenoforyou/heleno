import { Search, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { theme } = useTheme();

  const bgPage = theme === "dark" ? "bg-black" : "bg-white";
  const inputText =
    theme === "dark"
      ? "text-gray-100 placeholder-gray-400"
      : "text-gray-900 placeholder-gray-500";
  const buttonText = theme === "dark" ? "text-white" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-gray-900" : "bg-rose-50";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-900";

  const mockResults = [
    {
      id: 1,
      title: "Sophie just shared a reflection on kindness 🌿",
      desc: "“Kindness costs nothing but means everything. Let’s make someone smile today.”"
    },
    {
      id: 2,
      title: "Arjun created a new group — ‘Midnight Thinkers’ 🌙",
      desc: "Join people who share thoughts, poems, and late-night feelings in a safe space."
    },
    {
      id: 3,
      title: "Lila posted a story — ‘The day I chose peace’ ☀️",
      desc: "A heartfelt reminder that growth begins when we forgive ourselves."
    }
  ];

  const handleSearch = () => {
    const trimmed = search.trim();
    navigate(trimmed ? `/find/?query=${trimmed}` : `/find/`);
  };

  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-300 ${bgPage}`}
    >
      <header className="mb-6 w-full flex justify-center">
        <div
          className={`flex items-center flex-1 w-full max-w-full relative backdrop-blur-sm border border-gray-300 py-1.5 rounded-full transition-all duration-300 md:max-w-lg md:px-2 px-1 gap-2 ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          } ${bgPage}`}
        >
          <button
            onClick={handleSearch}
            className={`bg-black text-white hover:bg-gray-900 ${buttonText} h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0`}
          >
            <Search className="w-5 h-5" />
          </button>

          <input
            type="text"
            value={search}
            placeholder="Search people, feelings, or stories..."
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

      {/* Main Content */}
      <main className="max-w-5xl mx-auto">
        {!search ? (
          <div className="text-center mt-10">
            <h2 className={`text-xl font-semibold mb-4 ${textColor}`}>
              Discover connections that feel real 💫
            </h2>
            <p className={`mb-6 text-sm md:text-base ${textColor} opacity-80`}>
              Explore trending feelings, stories, and communities that bring
              people closer.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Self Love",
                "Friendship",
                "Overcoming Fear",
                "Gratitude",
                "Healing",
                "Positivity"
              ].map((topic, index) => (
                <button
                  key={index}
                  onClick={() => setSearch(topic)}
                  className={`p-4 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 ${cardBg} ${textColor}`}
                >
                  #{topic}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <h2 className={`text-lg font-semibold mb-4 ${textColor}`}>
              Results for “{search}”
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {mockResults.map((result) => (
                <div
                  onClick={() => {
                    navigate("/testimonials/");
                  }}
                  role="button"
                  key={result.id}
                  className={`p-5 rounded-xl shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ${cardBg}`}
                >
                  <h3 className={`font-semibold text-lg mb-2 ${textColor}`}>
                    {result.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {result.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchPage;

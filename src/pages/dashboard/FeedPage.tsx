import { Search, Smile, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const FeedPage = () => {
  const results = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { theme } = useTheme();

  const bgPage = theme === "dark" ? "bg-black" : "bg-white";
  const bgCard = theme === "dark" ? "bg-gray-900" : "bg-white";
  const borderCard = theme === "dark" ? "border-gray-900" : "border-gray-300";
  const textCard = theme === "dark" ? "text-white" : "text-gray-900";
  const inputText =
    theme === "dark"
      ? "text-gray-100 placeholder-gray-400"
      : "text-gray-900 placeholder-gray-500";
  const buttonText = theme === "dark" ? "text-white" : "text-gray-900";

  const handleSearch = () => {
    const trimmed = search.trim();
    navigate(trimmed ? `/feed/?query=${trimmed}` : `/feed/`);
  };
  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-300 ${bgPage}`}
    >
      <header className="mb-4 w-full flex justify-center">
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
            placeholder="Search topics, people, or trends..."
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

      <main className="mx-auto max-w-5xl">
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 auto-rows-[150px]">
          {results.map((_, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center rounded-xl ${bgCard} border ${borderCard} text-center transition-transform duration-300 hover:shadow-md ${
                idx % 5 === 0 ? "row-span-2" : "row-span-1"
              }`}
            >
              <p className={`flex items-center gap-1 ${textCard}`}>
                For you <Smile className={`${textCard} w-4 h-4`} />
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FeedPage;

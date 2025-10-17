import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"black" | "white">("black");

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center min-h-screen text-center px-6 transition-colors duration-500",
        theme === "black" ? "bg-black" : "bg-white"
      )}
    >
      <div className="absolute right-10 top-10 flex gap-4">
        <button
          className={clsx(
            "p-3 rounded-full active:scale-95 transition-transform",
            theme === "black" ? "bg-white" : "bg-gray-100"
          )}
          onClick={() => setTheme("black")}
        >
          <Moon
            className={clsx(theme === "black" ? "text-black" : "text-gray-700")}
          />
        </button>

        <button
          className={clsx(
            "p-3 rounded-full active:scale-95 transition-transform",
            theme === "white" ? "bg-black" : "bg-gray-100"
          )}
          onClick={() => setTheme("white")}
        >
          <Sun
            className={clsx(theme === "white" ? "text-white" : "text-gray-700")}
          />
        </button>
      </div>

      <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-[#ff0080] via-[#ff8c00] to-[#ffd700] text-transparent bg-clip-text animate-gradient-x">
        Heleno.co
      </h1>

      <p
        className={clsx(
          "text-2xl md:text-3xl tracking-wide mb-10 transition-colors duration-500",
          theme === "black" ? "text-white" : "text-black"
        )}
      >
        Connect · Share · Feel
      </p>

      <p
        className={clsx(
          "text-lg uppercase tracking-[0.25em] transition-colors duration-500",
          theme === "black" ? "text-gray-500" : "text-gray-700"
        )}
      >
        This site is under construction
      </p>
    </div>
  );
};

export default App;

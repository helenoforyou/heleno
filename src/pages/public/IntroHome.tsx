import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center min-h-screen text-center px-6 transition-colors duration-500",
        isDark ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      <button
        onClick={() => setIsDark(!isDark)}
        className={clsx(
          "absolute right-10 top-10 p-3 rounded-full transition-all duration-200 active:scale-95",
          isDark ? "hover:bg-gray-900" : "hover:bg-gray-100"
        )}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="text-white" />
        ) : (
          <Moon className="text-gray-700" />
        )}
      </button>

      <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-6 uppercase">
        Heleno
      </h1>

      <p
        className={clsx(
          "text-md uppercase tracking-[0.25em] transition-colors duration-500",
          isDark ? "text-gray-500" : "text-gray-700"
        )}
      >
        This site is under construction
      </p>
    </div>
  );
};

export default Home;

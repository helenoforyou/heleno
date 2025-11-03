import { Camera } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ProfilePage = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";

  return (
    <div
      className={`min-h-screen p-4 sm:p-6 md:p-8 transition-colors duration-500 ${bgColor} ${textColor}`}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-8">
        <div className="flex flex-col items-center gap-4">
          {/* <img
            src={profile}
            alt="Profile"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500"
          /> */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500" />

          <button className="px-4 py-2 text-sm sm:text-base font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Edit profile
          </button>
        </div>

        <div className="flex-1 flex flex-col text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">Heleno</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            helenoforyou
          </p>
          <p className="max-w-full sm:max-w-md text-sm sm:text-base">
            Something beautiful is coming. Connect. Share. Feel.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <div className="text-center">
              <p className="font-semibold">0</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                posts
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold">0</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                followers
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold">0</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                following
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">
          Getting Started
        </h2>
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 border-2 border-dashed border-gray-400 rounded-xl">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-gray-400 rounded-full mb-4 text-gray-500">
            <Camera className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <p className="text-gray-500 mb-4 text-center sm:text-base text-sm">
            When you share photos, they will appear on your profile.
          </p>
          <button className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Share your first photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

import { Heart, MessageCircle, Smile, UserPlus } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const NotificationsPage = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-gray-900" : "bg-rose-100";

  const notifications = [
    {
      id: 1,
      type: "like",
      user: "Ava",
      message: "liked your post",
      icon: <Heart className="text-pink-500" />,
      time: "2m ago"
    },
    {
      id: 2,
      type: "comment",
      user: "Liam",
      message: "commented: “This is beautiful!”",
      icon: <MessageCircle className="text-blue-500" />,
      time: "10m ago"
    },
    {
      id: 3,
      type: "follow",
      user: "Olivia",
      message: "started following you",
      icon: <UserPlus className="text-green-500" />,
      time: "1h ago"
    },
    {
      id: 4,
      type: "react",
      user: "Noah",
      message: "reacted 😊 to your story",
      icon: <Smile className="text-yellow-500" />,
      time: "3h ago"
    },
    {
      id: 5,
      type: "like",
      user: "Sophia",
      message: "liked your shared feeling",
      icon: <Heart className="text-pink-500" />,
      time: "1d ago"
    }
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-500 ${bgColor}`}
    >
      <header className="text-center mb-10">
        <h1 className={`text-3xl font-bold mb-2 ${textColor}`}>
          Notifications
        </h1>
        <p
          className={`text-gray-500 ${theme === "dark" ? "text-gray-400" : ""}`}
        >
          Stay updated on how people connect with you
        </p>
      </header>

      <main className="max-w-3xl mx-auto">
        {notifications.length === 0 ? (
          <div className="text-center mt-20">
            <p className={`text-lg ${textColor}`}>
              You have no new notifications right now.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check back later to see how others interact with your posts.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`flex items-center justify-between rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 ${cardBg}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20">
                    {notif.icon}
                  </div>
                  <div>
                    <p className={`text-sm md:text-base ${textColor}`}>
                      <span className="font-semibold">{notif.user}</span>{" "}
                      {notif.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {notif.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default NotificationsPage;

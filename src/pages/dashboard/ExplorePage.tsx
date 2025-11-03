import { Flame, Globe, Heart, Image, Users } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ExplorePage = () => {
  const { theme } = useTheme();

  const bgPage = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-gray-900" : "bg-pink-50";
  const accentColor = theme === "dark" ? "text-pink-400" : "text-pink-600";

  const trendingTopics = [
    {
      icon: <Heart />,
      title: "Love & Bonds",
      desc: "Stories that warm your heart."
    },
    {
      icon: <Users />,
      title: "New Connections",
      desc: "People you might vibe with."
    },
    {
      icon: <Image />,
      title: "Moments Captured",
      desc: "Visual stories from around the world."
    },
    {
      icon: <Flame />,
      title: "Trending Feelings",
      desc: "What’s everyone talking about right now?"
    },
    {
      icon: <Globe />,
      title: "World Feels",
      desc: "Discover global emotions and experiences."
    }
  ];

  const featuredPosts = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/400x250/?friends,happy",
      title: "A day I’ll never forget",
      author: "Sophia R.",
      mood: "Grateful"
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/400x250/?nature,peace",
      title: "When silence speaks louder",
      author: "Liam C.",
      mood: "Peaceful"
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/400x250/?music,concert",
      title: "Lost in the rhythm",
      author: "Noah T.",
      mood: "Ecstatic"
    }
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-500 ${bgPage}`}
    >
      <header className="text-center mb-10">
        <h1 className={`text-3xl font-bold mb-2 ${textColor}`}>
          Explore what people feel
        </h1>
        <p
          className={`text-gray-500 ${theme === "dark" ? "text-gray-400" : ""}`}
        >
          Dive into trending emotions, experiences, and voices from around the
          world.
        </p>
      </header>

      <section className="max-w-6xl mx-auto mb-12">
        <h2 className={`text-2xl font-semibold mb-4 ${textColor}`}>
          Trending Now
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trendingTopics.map((topic, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 hover:shadow-xl transition-all duration-300 ${cardBg}`}
            >
              <div className={`text-2xl mb-3 ${accentColor}`}>{topic.icon}</div>
              <h3 className={`font-semibold mb-1 ${textColor}`}>
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className={`text-2xl font-semibold mb-4 ${textColor}`}>
          Featured Stories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${cardBg}`}
            >
              {/* <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              /> */}
              <div className="w-full h-48"></div>
              <div className="p-4">
                <h3 className={`font-semibold text-lg mb-2 ${textColor}`}>
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  by <span className="font-medium">{post.author}</span>
                </p>
                <p className={`text-sm mt-2 italic ${accentColor}`}>
                  Feeling: {post.mood}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;

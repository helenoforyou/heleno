import {
  MessageCircleHeart,
  PenBox,
  Search,
  Send,
  Smile,
  X
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

type Message = {
  from: "me" | "them";
  text: string;
};

type Chat = {
  id: number;
  name: string;
  lastMsg: string;
  avatar: string;
  messages: Message[];
};

const MessagesPage = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const inputText =
    theme === "dark"
      ? "text-gray-100 placeholder-gray-400"
      : "text-gray-900 placeholder-gray-500";
  const handleSend = () => {
    if (!message.trim() || !selectedChat) return;
    selectedChat.messages.push({ from: "me", text: message });
    setMessage("");
  };
  const [message, setMessage] = useState("");

  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-gray-900" : "bg-indigo-100";
  const accent = theme === "dark" ? "text-indigo-400" : "text-indigo-700";
  const mockChats: Chat[] = [];
  //   const mockChats: Chat[] = [
  //     {
  //       id: 1,
  //       name: "Ava Collins",
  //       lastMsg: "Hey! How are you feeling today?",
  //       avatar: "🦋",
  //       messages: [
  //         { from: "them", text: "Hey! How are you feeling today?" },
  //         { from: "me", text: "I’m feeling much better now 💫" }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       name: "Liam Patel",
  //       lastMsg: "Wanna catch up later?",
  //       avatar: "🔥",
  //       messages: [
  //         { from: "them", text: "Wanna catch up later?" },
  //         { from: "me", text: "Sure! Let’s meet online 😄" }
  //       ]
  //     },
  //     {
  //       id: 3,
  //       name: "Sophia Tan",
  //       lastMsg: "That post you shared was beautiful 🌸",
  //       avatar: "🌸",
  //       messages: [
  //         { from: "them", text: "That post you shared was beautiful 🌸" },
  //         { from: "me", text: "Thank you Sophia!" }
  //       ]
  //     }
  //   ];

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row transition-colors duration-500 ${bgColor}`}
    >
      <aside
        className={`md:w-1/3 border-r ${
          theme === "dark" ? "border-gray-800" : "border-gray-200"
        } p-4`}
      >
        <div className="flex flex-row justify-between items-center gap-2 mb-4">
          <h2 className={`text-xl font-semibold ${textColor}`}>Messages</h2>
          <button>
            <PenBox />
          </button>
        </div>

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
              //   value={search}
              placeholder="Search inbox..."
              onChange={(e) => setSearch(e.target.value)}
              //   onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className={`w-full bg-transparent md:px-2 focus:outline-none ${inputText}`}
            />

            {search && (
              <button
                // onClick={() => setSearch("")}
                className={`text-gray-500 hover:${
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                } h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0`}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </header>

        <div className="space-y-3">
          {mockChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`flex items-center gap-3 w-full text-left p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                selectedChat?.id === chat.id
                  ? `${cardBg} shadow-md`
                  : theme === "dark"
                  ? "hover:bg-gray-900"
                  : "hover:bg-indigo-50"
              }`}
            >
              <span className="text-2xl">{chat.avatar}</span>
              <div className="flex-1">
                <p className={`font-semibold ${textColor}`}>{chat.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {chat.lastMsg}
                </p>
              </div>
            </button>
          ))}
          {mockChats.length === 0 && (
            <div
              className={`flex flex-col items-center justify-center text-center py-10 px-4 transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <h2
                className={`text-lg font-semibold mb-2 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}
              >
                No Chats Yet
              </h2>
              <p className="text-sm">
                Chats will appear here after you send or receive a message.
              </p>
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 flex flex-col p-4">
        {selectedChat ? (
          <>
            <header
              className={`flex items-center gap-3 border-b pb-3 mb-4 ${
                theme === "dark" ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <span className="text-2xl">{selectedChat.avatar}</span>
              <h2 className={`text-lg font-semibold ${textColor}`}>
                {selectedChat.name}
              </h2>
            </header>

            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {selectedChat.messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-xs p-3 rounded-2xl ${
                    msg.from === "me"
                      ? "ml-auto bg-indigo-600 text-white"
                      : `${cardBg} ${textColor}`
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div
              className={`flex items-center border-t pt-3 gap-2 ${
                theme === "dark" ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <Smile className={`${accent} w-5 h-5 cursor-pointer`} />
              <input
                type="text"
                value={message}
                placeholder="Type a message..."
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className={`flex-1 bg-transparent focus:outline-none ${textColor}`}
              />
              <button
                onClick={handleSend}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div
            className={`flex flex-1 flex-col items-center justify-center px-4 text-center space-y-4 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            <MessageCircleHeart
              className={`w-16 h-16 mb-2 transition-colors duration-300 ${
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              }`}
            />
            <h2
              className={`text-2xl font-semibold transition-colors duration-300 ${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Your Messages
            </h2>
            <p
              className={`max-w-xs transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Send a message to start a chat with your connections and stay
              connected.
            </p>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Send Message
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MessagesPage;

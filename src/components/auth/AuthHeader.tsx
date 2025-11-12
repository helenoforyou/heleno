import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function AuthHeader() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isFixed
          ? "bg-white text-gray-500 shadow-lg"
          : "bg-transparent text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-semibold italic text-pink-600">
                Heleno
              </span>
            </Link>
          </motion.div>

          
        </div>
      </div>
    </motion.header>
  );
}

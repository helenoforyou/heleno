import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: 10 }}
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
          <div className="flex items-center justify-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl uppercase font-bold text-pink-600">
                  Heleno
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex space-x-10 text-[16px] font-medium"
            >
              {[
                { name: "Home", path: "/" },
                { name: "Our Story", path: "/our-story" },
                { name: "About Us", path: "/about-us" },
                { name: "Safety", path: "/safety" }
                // { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-pink-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
          </div>

          {/* Right side buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center space-x-6"
          >
            <button className="text-[16px] cursor-pointer font-medium hover:text-pink-600 transition-colors">
              Sign In
            </button>
            <button className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white px-5 py-2 rounded-full text-[16px] font-semibold shadow-md transition-all">
              Sign Up
            </button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden transition-all duration-300 bg-white text-gray-800 shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-6 text-[16px] font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Our Story", path: "/our-story" },
              { name: "How It Works", path: "/how-it-works" },
              { name: "About Us", path: "/about-us" },
              { name: "Safety", path: "/safety" }
              // { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-600"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col items-center space-y-3 pt-4 border-t w-full border-gray-200">
              <button className="text-sm font-medium hover:text-pink-600">
                Sign In
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  );
}

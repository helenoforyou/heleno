import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

const  HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100" />

      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-pink-200"
          >
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-sm text-gray-700">Where Real Connections Happen</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Share Time. Feel Heard.
            <br />
            Connect with People Who Care.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            Heleno lets you lynk with meaningful in-person time with trusted companions — 
            for emotional support, stress relief, career talks, or just a good conversation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white text-lg px-8 py-4 rounded-full font-medium flex items-center group transition-all duration-200 shadow-md">
              Lynk Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="border-2 cursor-pointer border-pink-300 hover:border-pink-600 text-black hover:bg-pink-200 text-lg px-8 py-4 rounded-full font-medium transition-all duration-200 bg-white shadow-sm">
              Become a Lynker
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 mb-5 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl text-pink-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Active Lynkers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl text-pink-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Connections Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl text-pink-600 mb-2">4.9★</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
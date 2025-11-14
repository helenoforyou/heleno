// import { motion } from "motion/react";
// import { ArrowRight, Sparkles, Construction } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100" />

//       {/* Animated Background Blobs */}
//       <motion.div
//         className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -40, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Content */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Tagline */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-pink-200"
//           >
//             <Sparkles className="w-4 h-4 text-pink-600" />
//             <span className="text-sm text-gray-700">Where Real Connections Happen</span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
//           >
//             Share Time. Feel Heard.
//             <br />
//             Connect with People Who Care.
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
//           >
//             Heleno lets you lynk meaningful in-person time with trusted companions —
//             for emotional support, stress relief, career talks, or just a good conversation.
//           </motion.p>

//           {/* UNDER CONSTRUCTION NOTICE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.25 }}
//             className="inline-flex items-center justify-center gap-3 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-medium mb-10 border border-yellow-300 shadow-sm"
//           >
//             <Construction className="w-5 h-5 text-yellow-700" />
//             <span>This website is under construction — demo version only</span>
//           </motion.div>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-4"
//           >
//             <button className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white text-lg px-8 py-4 rounded-full font-medium flex items-center group transition-all duration-200 shadow-md">
//               Lynk Now
//               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>

//             <button className="border-2 cursor-pointer border-pink-300 hover:border-pink-600 text-black hover:bg-pink-200 text-lg px-8 py-4 rounded-full font-medium transition-all duration-200 bg-white shadow-sm">
//               Become a Lynker
//             </button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-16 mb-5 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
//           >
//             <div className="text-center">
//               <div className="text-3xl sm:text-4xl text-pink-600 mb-2">10K+</div>
//               <div className="text-sm text-gray-600">Active Lynkers</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl sm:text-4xl text-pink-600 mb-2">50K+</div>
//               <div className="text-sm text-gray-600">Connections Made</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl sm:text-4xl text-pink-600 mb-2">4.9★</div>
//               <div className="text-sm text-gray-600">User Rating</div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="border-b border-gray-100 relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left space-y-8">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 sm:px-5 py-2 rounded-full border border-pink-200 shadow-sm hover:shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4 text-pink-600 animate-pulse" />
              <span className="text-sm sm:text-base font-medium text-gray-700 tracking-wide">
                Where Real Connections Happen
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-col text-gray-800"
            >
              <span>Share Time.</span>
              <span>Feel Heard.</span>
              <span>Connect with People Who Care.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-orange-500 w-fit mx-auto text-left"
            >
              Welcome to our demo website! Our mission is to provide you with
              the best experience. We’ll be reaching out to you very soon. Thank
              you for your patience and support. For the best experience, please
              visit on a desktop device.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mt-8"
            >
              <button className="px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 text-white bg-black active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto">
                Connect Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 border border-gray-300 text-gray-800 bg-white active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto">
                Become a Helon
              </button>
            </motion.div>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-rows-3 gap-6 w-full max-w-md mx-auto lg:mx-0"
            >
              {/* Row 1 */}
              <div className="grid grid-cols-3 gap-6">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden border border-rose-200 bg-white/90 backdrop-blur-sm p-6 flex flex-col justify-center rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute right-0 top-0 w-20 h-20 bg-rose-600/10 rounded-bl-[4rem]" />
                  <div className="text-3xl font-extrabold text-rose-600 mb-1">
                    10K+
                  </div>
                  <div className="text-sm text-zinc-700 font-medium tracking-wide">
                    Active Helons
                  </div>
                </motion.div>

                {/* Decorative Block 1 */}
                <div className="relative rounded-3xl bg-rose-50 border border-rose-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(244,114,182,0.2),transparent_70%)]" />
                  <div className="text-4xl text-rose-400/60 font-black select-none">
                    H
                  </div>
                </div>

                {/* Decorative Block 2 */}
                <div className="relative rounded-3xl bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-4 border-rose-300/40 flex items-center justify-center">
                    <div className="text-2xl text-rose-400/60 font-black select-none text-center">
                      E
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-6">
                {/* Decorative Block 3 */}
                <div className="relative rounded-3xl bg-white border border-zinc-200 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.15),transparent_60%)]" />
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      repeat: Infinity,
                      duration: 12,
                      ease: "linear"
                    }}
                    className="w-8 h-8 border-2 border-rose-300/40 rounded-full"
                  >
                    {" "}
                    <div className="text-4xl text-rose-400/60 font-black select-none text-center">
                      L
                    </div>
                  </motion.div>
                </div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden border border-zinc-800 bg-zinc-900 text-zinc-100 p-6 flex flex-col justify-center rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute right-0 top-0 w-20 h-20 bg-rose-600/20 rounded-bl-[4rem]" />
                  <div className="text-3xl font-extrabold text-rose-400 mb-1">
                    50K+
                  </div>
                  <div className="text-sm font-medium tracking-wide text-zinc-300">
                    Connections Made
                  </div>
                </motion.div>

                {/* Decorative Block 4 */}
                <div className="relative rounded-3xl bg-rose-100/40 border border-rose-200 flex items-center justify-center">
                  <div className="text-4xl text-rose-400/60 font-black select-none text-center">
                    E
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-3 gap-6">
                {/* Decorative Block 5 */}
                <div className="relative rounded-3xl bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                  <div className="w-3/4 h-1 bg-rose-300/40 rounded-full">
                    <div className="text-4xl text-rose-400/60 font-black select-none text-center">
                      N
                    </div>
                  </div>
                </div>

                {/* Decorative Block 6 */}
                <div className="relative rounded-3xl bg-rose-50 border border-rose-100 overflow-hidden h-32 w-32 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(225,29,72,0.2),transparent_60%)]" />

                  <motion.div
                    className="text-5xl text-rose-400/70 font-black select-none"
                    animate={{
                      x: ["-40%", "40%", "-40%"],
                      rotate: [0, 360, 720]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    O
                  </motion.div>
                </div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden border border-rose-200 bg-rose-50/80 backdrop-blur-sm p-6 flex flex-col justify-center rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute right-0 top-0 w-20 h-20 bg-rose-600/10 rounded-bl-[4rem]" />
                  <div className="text-3xl font-extrabold text-rose-600 mb-1">
                    4.9★
                  </div>
                  <div className="text-sm text-zinc-700 font-medium tracking-wide">
                    User Rating
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

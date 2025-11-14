"use client";

import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  { icon: DollarSign, title: "Earn While Helping", value: "₹500–₹2000/hr" },
  { icon: Users, title: "Build Connections", value: "Meet Amazing People" },
  { icon: Calendar, title: "Flexible Schedule", value: "Work When You Want" },
  { icon: TrendingUp, title: "Grow Your Impact", value: "Help & Get Rewarded" }
];

const ForLynkers = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start gap-12">
        {/* LEFT SIDE — Fixed width */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-[36%] text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-6">
            Become a Lynker
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 max-w-md mb-8 mx-auto lg:mx-0">
            Turn your empathy into opportunity. Share your time, connect with
            others, and get rewarded for making a difference.
          </p>

          <button className="px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold text-lg flex items-center justify-center gap-2 border border-black text-black bg-white hover:border-rose-500 hover:bg-rose-50 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md">
            Learn More
          </button>
        </motion.div>

        {/* RIGHT SIDE — Takes ALL remaining space */}
        <div className="flex-1 flex justify-end h-full min-h-[440px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-rows-3 gap-8 w-full h-full auto-rows-[1fr]"
          >
            {/* ---------- ROW 1 ---------- */}
            <div className="grid grid-cols-[1.2fr_0.9fr_0.8fr] gap-6">
              {/* Card 1 — Benefit[0] */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden border border-rose-200 bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-lg"
              >
                <div className="absolute right-0 top-0 w-24 h-24 bg-rose-600/10 rounded-bl-[4rem]" />

                <div className="flex justify-center mb-3">
                  {(() => {
                    const Icon = benefits[0].icon;
                    return <Icon className="w-10 h-10 text-rose-400" />;
                  })()}
                </div>

                <div className="text-xl font-extrabold text-rose-600">
                  {benefits[0].value}
                </div>
                <div className="text-sm text-zinc-700 tracking-wide">
                  {benefits[0].title}
                </div>
              </motion.div>

              {/* Decorative Block A */}
              <div className="relative rounded-3xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(244,114,182,0.2),transparent_70%)]" />
                <div className="text-5xl text-rose-400/60 font-black select-none">
                  C
                </div>
              </div>

              {/* Decorative Block B */}
              <div className="relative rounded-3xl bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-4 border-rose-300/40 flex items-center justify-center">
                  <div className="text-3xl text-rose-400/60 font-black select-none">
                    O
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- ROW 2 ---------- */}
            <div className="grid grid-cols-[0.9fr_1.3fr_0.7fr] gap-6">
              {/* Decorative Block C */}
              <div className="relative rounded-3xl bg-white border border-zinc-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.15),transparent_60%)]" />
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear"
                  }}
                  className="w-10 h-10 border-2 border-rose-300/40 rounded-full flex items-center justify-center"
                >
                  <div className="text-5xl text-rose-400/60 font-black">
                    N N
                  </div>
                </motion.div>
              </div>

              {/* Card 2 — Benefit[1] */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative overflow-hidden border border-zinc-800 bg-zinc-900 text-zinc-100 p-8 rounded-3xl shadow-md hover:shadow-lg"
              >
                <div className="absolute right-0 top-0 w-24 h-24 bg-rose-600/20 rounded-bl-[4rem]" />

                <div className="flex justify-center mb-3">
                  {(() => {
                    const Icon = benefits[1].icon;
                    return <Icon className="w-10 h-10 text-rose-400" />;
                  })()}
                </div>

                <div className="text-xl font-extrabold text-rose-400">
                  {benefits[1].value}
                </div>
                <div className="text-sm font-medium text-zinc-300">
                  {benefits[1].title}
                </div>
              </motion.div>

              {/* Decorative Block D */}
              <div className="relative rounded-3xl bg-rose-100/40 border border-rose-200 flex items-center justify-center">
                <div className="text-5xl text-rose-400/60 font-black">E</div>
              </div>
            </div>

            {/* ---------- ROW 3 ---------- */}
            <div className="grid grid-cols-[0.8fr_1fr_1.25fr] gap-6">
              {/* Decorative Block E */}
              <div className="relative rounded-3xl bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                <div className="text-5xl text-rose-400/60 font-black">C</div>
              </div>

              {/* Animated Block F */}
              <div className="relative rounded-3xl bg-rose-50 border border-rose-100 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(225,29,72,0.2),transparent_60%)]" />
                <motion.div
                  className="text-6xl text-rose-400/70 font-black select-none"
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
                  T
                </motion.div>
              </div>

              {/* Card 3 — Benefit[2] */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative overflow-hidden border border-rose-200 bg-rose-50/80 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-lg"
              >
                <div className="absolute right-0 top-0 w-24 h-24 bg-rose-600/10 rounded-bl-[4rem]" />

                <div className="flex justify-center mb-3">
                  {(() => {
                    const Icon = benefits[2].icon;
                    return <Icon className="w-10 h-10 text-rose-400" />;
                  })()}
                </div>

                <div className="text-xl font-extrabold text-rose-600">
                  {benefits[2].value}
                </div>
                <div className="text-sm text-zinc-700 tracking-wide font-medium">
                  {benefits[2].title}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForLynkers;

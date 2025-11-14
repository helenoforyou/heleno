"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Aarav",
    age: 24,
    story:
      "After moving to a new city, I felt isolated. Through Heleno, I met someone who listened — and that changed everything.",
    rating: 5
  },
  {
    name: "Priya",
    age: 29,
    story:
      "Heleno helped me navigate a tough career decision. My Lynker's guidance gave me the clarity I needed.",
    rating: 4
  },
  {
    name: "Rohan",
    age: 32,
    story:
      "Post-breakup was rough, but talking to someone on Heleno helped me heal faster than I thought possible.",
    rating: 5
  },
  {
    name: "Sneha",
    age: 26,
    story:
      "I was skeptical at first, but the genuine connections I've made here are incredible. It's more than an app.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-black bg-clip-text text-transparent">
            Community Stories
          </h2>
          <p className="text-lg sm:text-xl text-zinc-600">
            Real people, real connections, real impact.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isDark = index % 2 === 1;

            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden border rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 backdrop-blur-sm ${
                  isDark
                    ? "bg-zinc-900 text-zinc-100 border-zinc-800"
                    : "bg-white/80 border-rose-100"
                }`}
              >
                {/* Gradient accents */}
                <div
                  className={`absolute right-0 top-0 w-32 h-32 ${
                    isDark ? "bg-rose-500/20" : "bg-rose-400/10"
                  } rounded-bl-[5rem]`}
                />
                <div
                  className={`absolute -bottom-12 -left-10 w-40 h-40 ${
                    isDark ? "bg-purple-500/10" : "bg-pink-300/20"
                  } rounded-full blur-2xl`}
                />

                {/* Animated ring */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: 14,
                    ease: "linear"
                  }}
                  className="absolute right-6 bottom-6 w-10 h-10 border-2 border-rose-400/30 rounded-full"
                />

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-between h-80">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 fill-rose-400 text-rose-400`}
                      />
                    ))}
                  </div>

                  {/* Story */}
                  <p
                    className={`italic leading-relaxed mb-6 ${
                      isDark ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    "{testimonial.story}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${
                        isDark
                          ? "bg-rose-600 text-white"
                          : "bg-gradient-to-br from-rose-500 to-purple-500 text-white"
                      }`}
                    >
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div
                        className={`text-sm ${
                          isDark ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        {testimonial.age} years old
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

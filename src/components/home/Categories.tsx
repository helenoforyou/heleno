"use client";

import { motion } from "motion/react";
import { Heart, Coffee, Briefcase, HeartCrack, Gamepad2, Wind } from "lucide-react";

const categories = [
  {
    icon: Heart,
    title: "Emotional Support",
    description: "Talk through your feelings with someone who understands",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Coffee,
    title: "Friendly Conversations",
    description: "Casual chats over coffee or a walk in the park",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Get advice from professionals in your field",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: HeartCrack,
    title: "Post-Breakup Therapy",
    description: "Healing conversations after heartbreak",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Gamepad2,
    title: "Fun & Hobbies",
    description: "Share your passions with like-minded people",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Wind,
    title: "Stress Relief Sessions",
    description: "Unwind and find your calm",
    color: "from-indigo-500 to-purple-500",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 pb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Explore Categories
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Find the perfect Lynker for your needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all border border-pink-100"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-foreground/60 mb-4">
                    {category.description}
                  </p>

                  {/* Replaced shadcn Button with Tailwind button */}
                  <button
                    className="text-pink-600 cursor-pointer text-sm hover:underline p-0 h-auto font-medium inline-flex items-center transition-colors"
                  >
                    Find a Lynker →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories
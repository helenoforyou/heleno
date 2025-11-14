"use client";

import {
  Briefcase,
  Coffee,
  Gamepad2,
  Heart,
  HeartCrack,
  Wind
} from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

const categories = [
  {
    icon: Heart,
    title: "Emotional Support",
    description:
      "Talk through your feelings with someone who truly understands.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Coffee,
    title: "Friendly Conversations",
    description: "Relaxed chats — coffee, walks, or late-night talks.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Gain clarity and direction from real professionals.",
    color: "from-rose-600 to-pink-600"
  },
  {
    icon: HeartCrack,
    title: "Post-Breakup Therapy",
    description: "Healing talks and emotional rebuilding after heartbreak.",
    color: "from-rose-500 to-purple-500"
  },
  {
    icon: Gamepad2,
    title: "Fun & Hobbies",
    description: "Connect through shared interests and passions.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Wind,
    title: "Stress Relief Sessions",
    description: "Breathe, unwind, and find your calm again.",
    color: "from-pink-500 to-purple-500"
  }
];

const Categories = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-black py-2">
          Explore Categories
        </h2>
        <p className="text-lg text-zinc-600 mt-3">
          Find your perfect{" "}
          <span className="font-semibold text-rose-600">Helon</span> for every
          mood.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-pink-300 rounded-full shadow-inner"></div>

        <div className="space-y-20">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const isLeft = index % 2 === 0;

            return (
              <ScrollReveal delay={isLeft ? 0.1 : 0.2} key={index}>
                <div className="relative flex items-center">
                  {isLeft && (
                    <>
                      <div className="flex-1 pr-12 text-right">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100 hover:shadow-2xl transition duration-300">
                          <h4 className="mb-2 text-xl font-semibold text-gray-800">
                            {cat.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110 duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="flex-1 pl-12"></div>
                    </>
                  )}

                  {!isLeft && (
                    <>
                      <div className="flex-1 pr-12"></div>

                      <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110 duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="flex-1 pl-12">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl transition duration-300">
                          <h4 className="mb-2 text-xl font-semibold text-gray-800">
                            {cat.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

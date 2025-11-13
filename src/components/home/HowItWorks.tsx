import { motion } from "motion/react";
import { Search, Calendar, Shield } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse Lynkers based on your need (Support, Date, Guidance, etc.)",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Calendar,
    title: "Book Sessions",
    description: "Choose a time and place as you like or from our suggestions.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Connect Safely",
    description: "Meet in person with confidence. Live location tracking and verified profiles.",
    color: "from-violet-500 to-purple-500",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-500 text-foreground/60 max-w-2xl mx-auto">
            Connect in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-gray-500">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-6 lg:w-12 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks
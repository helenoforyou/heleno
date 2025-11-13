import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn While Helping",
    value: "₹500-2000/hr"
  },
  {
    icon: Users,
    title: "Build Connections",
    value: "Meet Amazing People"
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    value: "Work When You Want"
  },
  {
    icon: TrendingUp,
    title: "Grow Your Impact",
    value: "Help & Get Rewarded"
  }
];

const ForLynkers = () => {
  return (
    <section
      id="for-lynkers"
      className="py-20 sm:py-32 overflow-hidden relative"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100" />

      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -40, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6 pb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Become a Lynker
            </h2>
            <p className="text-xl text-gray-500 text-foreground/70 mb-8">
              Turn your empathy into earnings. Become a verified Lynker and help
              people through real conversations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-200"
                >
                  <Icon className="w-8 h-8 mb-3 mx-auto text-pink-600" />
                  <div className="text-sm text-foreground/70 mb-1 text-gray-500">
                    {benefit.title}
                  </div>
                  <div className="text-lg text-foreground">{benefit.value}</div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white text-lg px-8 py-4 rounded-full font-medium flex items-center group transition-all duration-200 shadow-md">
              Join as a Lynker
            </button>

            <button className="border-2 cursor-pointer border-pink-300 hover:border-pink-600 text-black hover:bg-pink-200 text-lg px-8 py-4 rounded-full font-medium transition-all duration-200 bg-white shadow-sm">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForLynkers;

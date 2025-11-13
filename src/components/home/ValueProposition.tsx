import { motion } from "motion/react";
import { Heart, Clock, Shield, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Real Emotional Support",
    description: "Not only chatting, real-time human connection.",
  },
  {
    icon: Clock,
    title: "Time-Based Flexibility",
    description: "Pay only for the time you spend.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Verified profiles & real-time location tracking.",
  },
  {
    icon: Star,
    title: "Earn as a Lynker",
    description: "Get rewarded for listening, guiding, or spending time.",
  },
];
const ValueProposition = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 pb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Why Heleno?
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-gray-500">
            More than just an app - a community that cares
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-foreground">{value.title}</h3>
                <p className="text-foreground/60 text-gray-500">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValueProposition
import { motion } from "motion/react";
import { ShieldCheck, MapPin, CreditCard, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description: "Every Lynker goes through a thorough verification process",
  },
  {
    icon: MapPin,
    title: "In-app Location Tracking",
    description: "Real-time safety features for peace of mind during meetups",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Protected transactions with end-to-end encryption",
  },
  {
    icon: ThumbsUp,
    title: "Feedback & Rating System",
    description: "Community-driven trust through transparent reviews",
  },
];

const Safety = () => {
  return (
    <section id="safety" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4 pb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Safety & Trust
          </h2>
          <p className="text-xl text-gray-500 text-foreground/60 max-w-2xl mx-auto">
            Your safety is our top priority
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 mb-4">
                  <Icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 text-foreground/60">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 text-center border border-pink-200"
        >
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-foreground">100% Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-foreground">Live Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className="text-foreground">Secure Payments</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Safety
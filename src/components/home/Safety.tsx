import { CreditCard, MapPin, ShieldCheck, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description: "Every Lynker goes through a thorough verification process"
  },
  {
    icon: MapPin,
    title: "In-app Location Tracking",
    description: "Real-time safety features for peace of mind during meetups"
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Protected transactions with end-to-end encryption"
  },
  {
    icon: ThumbsUp,
    title: "Feedback & Rating System",
    description: "Community-driven trust through transparent reviews"
  }
];

const Safety = () => {
  return (
    <section id="safety" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-purple-500 mb-6 shadow-md shadow-rose-200/60">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4 pb-4 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent font-bold">
            Safety & Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your safety is our top priority
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, _) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden border border-rose-200 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Decorative Corner */}
                <div className="absolute right-0 top-0 w-20 h-20 bg-rose-600/10 rounded-bl-[4rem]" />

                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-rose-50 to-purple-50 border border-rose-100 shadow-sm">
                    <Icon className="w-8 h-8 text-rose-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/90 border border-rose-200 rounded-3xl p-8 backdrop-blur-md shadow-lg"
        >
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <div className="relative rounded-2xl border border-rose-100 bg-rose-50/60 px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-gray-800">100% Verified</span>
            </div>

            <div className="relative rounded-2xl border border-purple-100 bg-purple-50/60 px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-gray-800">Live Tracking</span>
            </div>

            <div className="relative rounded-2xl border border-rose-100 bg-rose-50/60 px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center shadow-md">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-gray-800">Secure Payments</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Safety;

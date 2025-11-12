import { useScroll, useTransform, motion } from "motion/react";
import FloatingBlobs from "../../utils/FloatingBlobs";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      <FloatingBlobs />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Your Safety, Our Priority
            </span>
          </motion.div>
          
          <h1 className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600">
            Built on Trust,
            <br />
            Protected by Safety
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            At Heleno, we've implemented comprehensive safety measures to ensure every interaction 
            is secure, verified, and protected. Your well-being is at the heart of everything we do.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-600"
          >
            <ArrowRight className="w-6 h-6 rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
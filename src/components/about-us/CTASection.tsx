import FloatingBlobs from "../../utils/FloatingBlobs";
import ScrollReveal from "../../utils/ScrollReveal";
import { motion } from "motion/react";

export default function CTASection() {
  return (
     <section className="relative py-24 px-6 overflow-hidden bg-white">
      <FloatingBlobs />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-2xl text-pink-600">Ready to Be Part of Something Meaningful?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Whether you're looking for support or want to help others, there's a place for you at MyLynk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <motion.button
              className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white text-lg px-8 py-4 rounded-full font-medium flex items-center group transition-all duration-200 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Your Lynker
            </motion.button>
            
            <motion.button
              className="border-2 cursor-pointer border-pink-300 hover:border-pink-600 text-black hover:bg-pink-200 text-lg px-8 py-4 rounded-full font-medium transition-all duration-200 bg-white shadow-sm" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Team
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
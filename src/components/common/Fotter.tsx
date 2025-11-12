"use client";

import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <footer className="bg-[#0e1621] text-gray-300 py-12 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-white text-2xl font-bold mb-3">Heleno</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Connecting people through meaningful conversations and real experiences.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["About Us", "How It Works", "Careers", "FAQs"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-pink-600 transition">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* For Users */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h3 className="text-white font-semibold mb-4">For Users</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Find a Lynker",
              "Become a Lynker",
              "Safety Guidelines",
              "Community",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-pink-600 transition">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Terms of Service",
              "Privacy Policy",
              "Cookie Policy",
              "Contact",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-pink-600 transition">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.hr
        className="my-8 border-gray-700"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Bottom Row */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
      >
        <p className="text-sm text-gray-500">© 2025 Heleno. All rights reserved.</p>

        <div className="flex space-x-5 text-gray-400 text-xl">
          {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-pink-600 transition"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}

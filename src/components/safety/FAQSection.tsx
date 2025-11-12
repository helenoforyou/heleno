import { Heart, Minus, Plus } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";
import { useState } from "react";
import { motion } from "motion/react";


function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="border border-pink-200 rounded-2xl overflow-hidden bg-white"
      initial={false}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-pink-50/50 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <h5 className="mb-0 text-gray-800">{question}</h5>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          {isOpen ? (
            <Minus className="w-6 h-6 text-pink-600" />
          ) : (
            <Plus className="w-6 h-6 text-pink-600" />
          )}
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-2 pl-20 text-gray-600">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Heleno ensure the safety of all users?",
      answer: "We implement multiple layers of security including mandatory KYC verification, background checks for all Lynkers, real-time GPS tracking during sessions, 24/7 safety support, and AI-powered monitoring. Every Lynker undergoes thorough verification before joining the platform."
    },
    {
      question: "What should I do if I feel unsafe during a session?",
      answer: "Immediately use the SOS emergency button in the app, which alerts our 24/7 safety team and can notify local authorities. You can also end the session instantly through the app. Your safety is our top priority, and we respond to all emergency alerts within seconds."
    },
    {
      question: "Are my personal details and payment information secure?",
      answer: "Absolutely. We use end-to-end encryption for all communications and bank-grade security for payment processing. Your personal information is never shared with Lynkers until after a confirmed booking, and financial details are protected by industry-leading security standards."
    },
    {
      question: "How are Lynkers verified before joining the platform?",
      answer: "Every Lynker undergoes a comprehensive verification process including government ID verification, background checks, reference verification, and professional credential validation. We also conduct interviews and provide mandatory training on safety protocols and professional conduct."
    },
    {
      question: "Can I report inappropriate behavior?",
      answer: "Yes, absolutely. We have multiple reporting channels available 24/7 through the app, email, and phone. All reports are taken seriously and investigated immediately. We maintain a zero-tolerance policy for harassment, inappropriate conduct, or guideline violations."
    },
    {
      question: "What happens to my location data?",
      answer: "Location data is only collected during active sessions with your explicit consent and is used solely for safety purposes. The data is encrypted, stored securely, and automatically deleted after 30 days. You can disable location sharing at any time, though we recommend keeping it enabled for your safety."
    },
    {
      question: "Is my session activity monitored?",
      answer: "We use AI-powered monitoring for chat communications to detect inappropriate content, but we respect your privacy. Physical sessions are not recorded. However, we do conduct random check-ins during sessions and maintain detailed logs for safety and quality assurance purposes."
    },
    {
      question: "What is Heleno's refund policy for safety concerns?",
      answer: "If you experience any safety issues or inappropriate behavior during a session, we offer immediate full refunds and take swift action against the involved Lynker. Your trust and safety are paramount, and we stand behind our commitment to provide a secure platform."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50/30 to-purple-50/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-purple-600">
              <Heart className="w-6 h-6" />
              <span className="uppercase tracking-wider">Common Questions</span>
            </div>
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common safety-related questions about using Heleno.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
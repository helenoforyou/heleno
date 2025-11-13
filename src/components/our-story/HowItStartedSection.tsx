import { Heart, Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";


export default function HowItStartedSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-pink-600">
              <Sparkles className="w-6 h-6" />
              <span className="uppercase tracking-wider">Chapter 1</span>
            </div>
            <h2 className="mb-6">How It Started</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every great journey begins with a simple observation and a bold idea.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1676629650907-d50f2f27db20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NjE4NDE0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community support"
                className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <div className="inline-block p-3 bg-pink-100 rounded-2xl">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              
              <h3>The Spark of an Idea</h3>
              
              <p className="text-gray-700 leading-relaxed">
                In late 2023, our founder noticed a troubling pattern: despite being more "connected" than ever 
                through social media, people felt increasingly isolated and alone. Traditional therapy was expensive 
                and had long wait times, while informal support networks were scattered and unreliable.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The question emerged: <em className="text-pink-600">What if we could create a platform that made 
                meaningful human connection as easy as ordering food?</em> A place where anyone could find a compassionate 
                listener exactly when they needed one.
              </p>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-200">
                <p className="text-gray-800 italic">
                  "Everyone deserves access to emotional support, not just those who can afford traditional therapy. 
                  That's the belief that started MyLynk."
                </p>
                <p className="mt-3 text-sm text-purple-600">— Sarah Chen, Founder & CEO</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
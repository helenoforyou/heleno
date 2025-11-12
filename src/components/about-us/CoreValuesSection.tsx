import { Award, Globe, Heart, Shield, Users, Zap } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function CoreValuesSection() {
  return (
    <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 mb-4 text-purple-600">
                    <Heart className="w-6 h-6" />
                    <span className="uppercase tracking-wider">Our Values</span>
                  </div>
                  <h2 className="mb-6">What Drives Us Every Day</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    These core principles guide every decision we make and every feature we build.
                  </p>
                </div>
              </ScrollReveal>
    
              <div className="grid md:grid-cols-3 gap-8">
                <ScrollReveal delay={0.1}>
                  <div className="min-h-[270px] p-8 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-3">Empathy First</h4>
                    <p className="text-gray-600">
                      We lead with compassion and understanding. Every feature is designed with the human experience at its core.
                    </p>
                  </div>
                </ScrollReveal>
    
                <ScrollReveal delay={0.2}>
                  <div className="min-h-[270px] p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-3">Safety & Trust</h4>
                    <p className="text-gray-600">
                      Building a safe space is non-negotiable. We invest heavily in verification, moderation, and protection.
                    </p>
                  </div>
                </ScrollReveal>
    
                <ScrollReveal delay={0.3}>
                  <div className="min-h-[270px] p-8 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-3">Inclusivity</h4>
                    <p className="text-gray-600">
                      Everyone deserves support. We're building a platform that welcomes people from all backgrounds and experiences.
                    </p>
                  </div>
                </ScrollReveal>
    
                <ScrollReveal delay={0.4}>
                  <div className="min-h-[270px] p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-3">Innovation</h4>
                    <p className="text-gray-600">
                      We constantly evolve and improve. Technology should enhance human connection, not replace it.
                    </p>
                  </div>
                </ScrollReveal>
    
                <ScrollReveal delay={0.5}>
                  <div className="min-h-[270px] p-8 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-3">Accessibility</h4>
                    <p className="text-gray-600">
                      Support should be available to anyone, anywhere, at any time. We're breaking down barriers to connection.
                    </p>
                  </div>
                </ScrollReveal>
    
                <ScrollReveal delay={0.6}>
                  <div className="min-h-[270px] p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-3">Quality</h4>
                    <p className="text-gray-600">
                      We maintain high standards for our Lynkers and platform. Quality support changes lives.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
  );
}
import { CheckCircle, Clock, Heart, Shield, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function TrustIndicatorsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-purple-600">
              <Heart className="w-6 h-6" />
              <span className="uppercase tracking-wider">Trust Metrics</span>
            </div>
            <h2 className="mb-6">Built on a Foundation of Trust</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our safety measures are backed by real numbers and continuous monitoring.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-bold">
                100%
              </div>
              <div className="text-gray-600">Verified Lynkers</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-bold">
                24/7
              </div>
              <div className="text-gray-600">Safety Support</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-bold">
                50K+
              </div>
              <div className="text-gray-600">Safe Sessions</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-bold">
                4.9★
              </div>
              <div className="text-gray-600">Safety Rating</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

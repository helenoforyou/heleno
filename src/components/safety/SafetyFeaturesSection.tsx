import { Camera, FileCheck, Lock, MapPin, Phone, Shield, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function SafetyFeaturesSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-pink-600">
              <Shield className="w-6 h-6" />
              <span className="uppercase tracking-wider">Safety Features</span>
            </div>
            <h2 className="mb-6">How We Keep You Safe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple layers of protection working together to create a secure environment for every session.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-3">KYC Verification</h4>
              <p className="text-gray-600">
                Every Lynker undergoes mandatory government ID verification, background checks, and profile authentication before joining the platform.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-3">Real-Time Tracking</h4>
              <p className="text-gray-600">
                GPS-based live location sharing during active sessions ensures transparency and accountability for both users and Lynkers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-3">SOS Emergency Button</h4>
              <p className="text-gray-600">
                Instant panic button connects you to our 24/7 safety team and local authorities within seconds for immediate assistance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-3">Secure Payments</h4>
              <p className="text-gray-600">
                End-to-end encrypted payment gateways and secure transaction processing protect your financial information at all times.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-3">Profile Verification</h4>
              <p className="text-gray-600">
                Multi-step verification process including photo verification, professional credentials, and reference checks for all Lynkers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-3">Session Monitoring</h4>
              <p className="text-gray-600">
                AI-powered chat moderation and optional session check-ins ensure appropriate interactions throughout your experience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

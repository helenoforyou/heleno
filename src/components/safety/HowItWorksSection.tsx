import { CheckCircle, FileCheck, Lock, Shield, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2 mb-4 text-purple-600">
                <CheckCircle className="w-6 h-6" />
                <span className="uppercase tracking-wider">Our Process</span>
              </div>
              <h2 className="mb-6">How Safety Works at Every Step</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                From the moment you sign up to the completion of your session, safety measures are
                integrated at every touchpoint. Here's how we protect you throughout your journey.
              </p>

              <div className="space-y-6">
                <ScrollReveal delay={0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <FileCheck className="w-6 h-6 text-pink-600" />
                        <h4 className="mb-0">Verified Registration</h4>
                      </div>
                      <p className="text-gray-600">
                        Both users and Lynkers complete secure registration with phone and email verification.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="w-6 h-6 text-pink-600" />
                        <h4 className="mb-0">Smart Matching</h4>
                      </div>
                      <p className="text-gray-600">
                        Our AI recommends verified Lynkers based on ratings, reviews, and compatibility scores.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Lock className="w-6 h-6 text-pink-600" />
                        <h4 className="mb-0">Secure Booking</h4>
                      </div>
                      <p className="text-gray-600">
                        Encrypted payment processing and confirmed session details before any meeting occurs.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6 text-pink-600" />
                        <h4 className="mb-0">Active Protection</h4>
                      </div>
                      <p className="text-gray-600">
                        Real-time tracking, SOS access, and support team monitoring during your session.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                        5
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="w-6 h-6 text-pink-600" />
                        <h4 className="mb-0">Post-Session Review</h4>
                      </div>
                      <p className="text-gray-600">
                        Rating and feedback system helps maintain quality and accountability across the platform.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxODQ3NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Security technology"
                className="relative rounded-3xl w-full h-[600px] object-cover shadow-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

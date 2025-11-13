import { Heart, Shield, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";
import AnimatedCounter from "../../utils/AnimatedCounter";


export default function HowItsGoingSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 mb-4 text-pink-600">
                    <Heart className="w-6 h-6" />
                    <span className="uppercase tracking-wider">Chapter 3</span>
                  </div>
                  <h2 className="mb-6">How It's Going</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Today, MyLynk is a thriving community making real impact in people's lives every single day.
                  </p>
                </div>
              </ScrollReveal>
    
              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-8 mb-24">
                <ScrollReveal delay={0.1}>
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-pink-100">
                    <div className="text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                      <AnimatedCounter end={2500} suffix="+" />
                    </div>
                    <div className="text-gray-600">Active Lynkers</div>
                  </div>
                </ScrollReveal>
    
                <ScrollReveal delay={0.2}>
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-purple-100">
                    <div className="text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      <AnimatedCounter end={50000} suffix="+" />
                    </div>
                    <div className="text-gray-600">Connections Made</div>
                  </div>
                </ScrollReveal>
    
                <ScrollReveal delay={0.3}>
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-pink-100">
                    <div className="text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                      <AnimatedCounter end={4.9} suffix="" />
                    </div>
                    <div className="text-gray-600">Average Rating</div>
                  </div>
                </ScrollReveal>
    
                <ScrollReveal delay={0.4}>
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-purple-100">
                    <div className="text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      <AnimatedCounter end={95} suffix="%" />
                    </div>
                    <div className="text-gray-600">User Satisfaction</div>
                  </div>
                </ScrollReveal>
              </div>
    
              {/* Success Stories */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <ScrollReveal delay={0.2}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl transform rotate-3"></div>
                    <img
                      src="https://images.unsplash.com/photo-1590650423710-ffa6e7f63440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYxODMxNzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Team success"
                      className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
                    />
                  </div>
                </ScrollReveal>
    
                <ScrollReveal delay={0.4}>
                  <div className="space-y-6">
                    <h3>Making Real Impact</h3>
                    
                    <p className="text-gray-700 leading-relaxed">
                      What started as an idea has blossomed into a movement. Every day, thousands of meaningful 
                      conversations happen on our platform—from career guidance sessions to late-night emotional 
                      support, from celebrating victories to navigating life's challenges.
                    </p>
    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-200">
                        <p className="text-gray-800 mb-2">
                          "I was going through a tough breakup and didn't want to burden my friends. My Lynker 
                          provided exactly what I needed—a compassionate listener who helped me process my emotions."
                        </p>
                        <p className="text-sm text-purple-600">— Emma, 28</p>
                      </div>
    
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                        <p className="text-gray-800 mb-2">
                          "As a Lynker, I've helped over 200 people navigate their career transitions. It's incredibly 
                          rewarding to turn my experience into income while making a real difference."
                        </p>
                        <p className="text-sm text-pink-600">— Marcus, Career Coach</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
    
              {/* What We've Learned */}
              <ScrollReveal>
                <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 rounded-3xl p-12">
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-center mb-8">What We've Learned</h3>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Heart className="w-8 h-8 text-pink-600" />
                        </div>
                        <h5 className="mb-2">Connection is Universal</h5>
                        <p className="text-sm text-gray-700">
                          Everyone needs support, regardless of background or circumstance
                        </p>
                      </div>
    
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Shield className="w-8 h-8 text-purple-600" />
                        </div>
                        <h5 className="mb-2">Safety Enables Trust</h5>
                        <p className="text-sm text-gray-700">
                          Robust safety features allow genuine connections to flourish
                        </p>
                      </div>
    
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Users className="w-8 h-8 text-pink-600" />
                        </div>
                        <h5 className="mb-2">Community is Everything</h5>
                        <p className="text-sm text-gray-700">
                          Our Lynkers and users are the heart of what we do
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
  );
}
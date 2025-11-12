import { Globe, Heart, Sparkles, Users, Zap } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";
export default function CultureSection() {
  return (
      <section className="py-24 px-6 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <ScrollReveal>
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 mb-4 text-purple-600">
                        <Sparkles className="w-6 h-6" />
                        <span className="uppercase tracking-wider">Our Culture</span>
                      </div>
                      
                      <h2>Work That Matters</h2>
                      
                      <p className="text-gray-700 leading-relaxed">
                        At MyLynk, you're not just building features—you're creating connections that change lives. 
                        Every day, our team members hear stories of how the platform has helped someone through a tough time, 
                        guided a career decision, or simply made someone feel less alone.
                      </p>
      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Heart className="w-5 h-5 text-pink-600" />
                          </div>
                          <div>
                            <h5 className="mb-1">Purpose-Driven</h5>
                            <p className="text-sm text-gray-600">
                              Every role directly contributes to helping people connect and feel supported
                            </p>
                          </div>
                        </div>
      
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Users className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h5 className="mb-1">Collaborative</h5>
                            <p className="text-sm text-gray-600">
                              Cross-functional teams working together to solve complex challenges
                            </p>
                          </div>
                        </div>
      
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Zap className="w-5 h-5 text-pink-600" />
                          </div>
                          <div>
                            <h5 className="mb-1">Growth-Focused</h5>
                            <p className="text-sm text-gray-600">
                              Continuous learning opportunities and personal development programs
                            </p>
                          </div>
                        </div>
      
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Globe className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h5 className="mb-1">Remote-Friendly</h5>
                            <p className="text-sm text-gray-600">
                              Work from anywhere with flexible hours that respect your life balance
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
      
                  <ScrollReveal delay={0.2}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="relative">
                        <div className="max-h-[260px] absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl transform rotate-3"></div>
                        <img
                          src="https://images.unsplash.com/photo-1661271928535-4d174887e80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjdWx0dXJlfGVufDF8fHx8MTc2MTg0MzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Office workspace"
                          className="relative rounded-2xl w-full h-64 object-cover shadow-xl"
                        />
                      </div>
      
                      <div className="relative mt-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl transform -rotate-3"></div>
                        <img
                          src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYxODA0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Team collaboration"
                          className="relative rounded-2xl w-full h-64 object-cover shadow-xl"
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
  );
}

import { Globe, Shield, TrendingUp, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function HowItWentSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-purple-50/30 to-white">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 mb-4 text-purple-600">
                    <TrendingUp className="w-6 h-6" />
                    <span className="uppercase tracking-wider">Chapter 2</span>
                  </div>
                  <h2 className="mb-6">How It Went</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    The journey from concept to reality wasn't always smooth, but every challenge made us stronger.
                  </p>
                </div>
              </ScrollReveal>
    
              {/* Timeline */}
              <div className="relative max-w-4xl mx-auto mb-24">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-pink-300"></div>
    
                {/* Timeline Items */}
                <div className="space-y-16">
                  {/* Item 1 */}
                  <ScrollReveal delay={0.1}>
                    <div className="relative flex items-center">
                      <div className="flex-1 pr-12 text-right">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
                          <div className="text-sm text-pink-600 mb-2">January 2024</div>
                          <h4 className="mb-2">Beta Launch</h4>
                          <p className="text-gray-600">
                            Started with 50 carefully vetted Lynkers and 200 beta testers. The response was overwhelming.
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 pl-12"></div>
                    </div>
                  </ScrollReveal>
    
                  {/* Item 2 */}
                  <ScrollReveal delay={0.2}>
                    <div className="relative flex items-center">
                      <div className="flex-1 pr-12"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 pl-12">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
                          <div className="text-sm text-purple-600 mb-2">March 2024</div>
                          <h4 className="mb-2">Safety First Initiative</h4>
                          <p className="text-gray-600">
                            Implemented comprehensive verification, background checks, and real-time safety features.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
    
                  {/* Item 3 */}
                  <ScrollReveal delay={0.3}>
                    <div className="relative flex items-center">
                      <div className="flex-1 pr-12 text-right">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
                          <div className="text-sm text-pink-600 mb-2">June 2024</div>
                          <h4 className="mb-2">Platform Growth</h4>
                          <p className="text-gray-600">
                            Expanded to 500+ Lynkers across multiple categories. First 10,000 successful connections.
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 pl-12"></div>
                    </div>
                  </ScrollReveal>
    
                  {/* Item 4 */}
                  <ScrollReveal delay={0.4}>
                    <div className="relative flex items-center">
                      <div className="flex-1 pr-12"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 pl-12">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
                          <div className="text-sm text-purple-600 mb-2">September 2024</div>
                          <h4 className="mb-2">Going Global</h4>
                          <p className="text-gray-600">
                            Launched virtual sessions, enabling connections across borders and time zones.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
    
              {/* Challenges Section */}
              <ScrollReveal>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3>Learning Through Challenges</h3>
                    
                    <p className="text-gray-700 leading-relaxed">
                      Building a platform centered on trust and emotional wellbeing came with unique challenges. 
                      We had to balance accessibility with safety, scale with quality, and technology with human connection.
                    </p>
    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl">
                        <div className="w-8 h-8 bg-pink-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span>1</span>
                        </div>
                        <div>
                          <h5 className="mb-1">Building Trust</h5>
                          <p className="text-sm text-gray-600">
                            Developed rigorous verification processes while keeping onboarding smooth
                          </p>
                        </div>
                      </div>
    
                      <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                        <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span>2</span>
                        </div>
                        <div>
                          <h5 className="mb-1">Quality Control</h5>
                          <p className="text-sm text-gray-600">
                            Created comprehensive training and ongoing support for all Lynkers
                          </p>
                        </div>
                      </div>
    
                      <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl">
                        <div className="w-8 h-8 bg-pink-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span>3</span>
                        </div>
                        <div>
                          <h5 className="mb-1">Scaling Responsibly</h5>
                          <p className="text-sm text-gray-600">
                            Grew the community thoughtfully, ensuring every user felt valued
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <ScrollReveal delay={0.2}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl transform -rotate-3"></div>
                      <img
                        src="https://images.unsplash.com/photo-1559117725-6588a8acb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmV5JTIwcGF0aCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjE4NDE0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Journey path"
                        className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </ScrollReveal>
            </div>
          </section>
  );
}
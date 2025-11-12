import { Globe, Sparkles, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function FutureVisionSection() {
    return (
      <section className="py-24 px-6 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 text-purple-600">
                <Sparkles className="w-6 h-6" />
                <span className="uppercase tracking-wider">Looking Ahead</span>
              </div>
              <h2 className="mb-6">The Future of MyLynk</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're just getting started. Here's what's next on our journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={0.1}>
              <div className="p-8 min-h-[250px] bg-white rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-3">Global Expansion</h4>
                <p className="text-gray-600">
                  Bringing MyLynk to more countries and languages, making support accessible worldwide
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 min-h-[250px] bg-white rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-3">AI-Enhanced Matching</h4>
                <p className="text-gray-600">
                  Using smart technology to connect you with the perfect Lynker for your needs
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-8 min-h-[250px] bg-white rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-3">Group Sessions</h4>
                <p className="text-gray-600">
                  Introducing group support sessions and community circles for shared experiences
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* <ScrollReveal delay={0.4}>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 transform -rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGdyb3d0aHxlbnwxfHx8fDE3NjE4NDE0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Innovation and growth"
                className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl flex items-end p-12">
                <div className="text-white">
                  <h3 className="mb-4 text-white">Building Tomorrow, Together</h3>
                  <p className="text-lg text-white/90 max-w-2xl">
                    Our vision is a world where meaningful human connection is always within reach. 
                    Join us as we continue this journey.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal> */}
        </div>
      </section>
  );
}
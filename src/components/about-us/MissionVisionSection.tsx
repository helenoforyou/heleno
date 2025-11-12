import { Sparkles, Target } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function MissionVisionSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNzY4Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 text-pink-600">
                  <Target className="w-6 h-6" />
                  <span className="uppercase tracking-wider">Our Mission</span>
                </div>
                <h2 className="mb-4">Making Support Universal</h2>
                <p className="text-gray-700 leading-relaxed">
                  We believe emotional support shouldn't be a luxury. Our mission is to create a world 
                  where everyone can access compassionate listeners, experienced guides, and genuine connections 
                  at the click of a button—regardless of their location, schedule, or budget.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 mb-4 text-purple-600">
                  <Sparkles className="w-6 h-6" />
                  <span className="uppercase tracking-wider">Our Vision</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A future where no one feels alone in their struggles. Where seeking support is as normal 
                  as asking a friend for advice. Where people from all walks of life can share their experiences, 
                  earn income by helping others, and build a more connected, empathetic world.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
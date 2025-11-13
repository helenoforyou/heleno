import { ArrowRight, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";
import TeamMemberCard from "./TeamMemberCard";
import {motion} from "motion/react";


interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}



export default function TeamSection() {
      const teamMembers: TeamMember[] = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former therapist turned tech entrepreneur. Passionate about making mental health support accessible to everyone.",
      image: "/team/hermione-granger.png",
      linkedin: "#",
      twitter: "#",
      email: "sarah@mylynk.com"
    },
    {
      name: "Marcus Johnson",
      role: "Chief Technology Officer",
      bio: "Built scalable platforms for Fortune 500 companies. Expert in creating secure, user-friendly experiences.",
      image: "/team/hermione-granger.png",
      linkedin: "#",
      twitter: "#",
      email: "marcus@mylynk.com"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of Safety & Trust",
      bio: "Clinical psychologist with 15 years of experience. Ensures our platform maintains the highest safety standards.",
      image: "/team/hermione-granger.png",
      linkedin: "#",
      email: "aisha@mylynk.com"
    },
    {
      name: "David Kim",
      role: "Head of Community",
      bio: "Community builder who's grown online communities to millions. Dedicated to creating inclusive, supportive spaces.",
      image: "/team/hermione-granger.png",
      linkedin: "#",
      twitter: "#",
      email: "david@mylynk.com"
    },
    {
      name: "Emma Rodriguez",
      role: "VP of Product",
      bio: "Product designer with a human-centered approach. Previously led design teams at leading tech companies.",
      image: "/team/hermione-granger.png",
      linkedin: "#",
      twitter: "#",
      email: "emma@mylynk.com"
    },
    {
      name: "James Thompson",
      role: "Head of Operations",
      bio: "Operations expert who streamlines processes while maintaining quality. Ensures smooth experiences for all users.",
      image: "/team/hermione-granger.png",
      linkedin: "#",
      email: "james@mylynk.com"
    }
  ];
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-pink-600">
              <Users className="w-6 h-6" />
              <span className="uppercase tracking-wider">Meet The Team</span>
            </div>
            <h2 className="mb-6">The Humans Behind MyLynk</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of builders, dreamers, and empaths united by a common goal: 
              making the world a more connected place.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.name} 
              member={member} 
              delay={index * 0.1} 
            />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 rounded-3xl p-12 text-center">
            <h3 className="mb-4">Join Our Team</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference. 
              If you're excited about building meaningful technology, we'd love to hear from you.
            </p>
            <motion.button
              className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white text-lg px-8 py-4 rounded-full font-medium group transition-all duration-200 shadow-md inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
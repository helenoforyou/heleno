import { Linkedin, Mail, Twitter } from "lucide-react";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export default function TeamMemberCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="min-h-[550px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="relative overflow-hidden h-80">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          />
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6">
          <h4 className="mb-1">{member.name}</h4>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-3">
            {member.role}
          </div>
          <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
          
          <div className="flex gap-3">
            {member.linkedin && (
              <a 
                href={member.linkedin}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 flex items-center justify-center transition-all group/icon"
              >
                <Linkedin className="w-4 h-4 text-gray-600 group-hover/icon:text-white" />
              </a>
            )}
            {member.twitter && (
              <a 
                href={member.twitter}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 flex items-center justify-center transition-all group/icon"
              >
                <Twitter className="w-4 h-4 text-gray-600 group-hover/icon:text-white" />
              </a>
            )}
            {member.email && (
              <a 
                href={`mailto:${member.email}`}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 flex items-center justify-center transition-all group/icon"
              >
                <Mail className="w-4 h-4 text-gray-600 group-hover/icon:text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
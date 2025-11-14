// import { Clock, Heart, Shield, Star } from "lucide-react";
// import { motion } from "motion/react";

// const values = [
//   {
//     icon: Heart,
//     title: "Real Emotional Support",
//     description: "Not only chatting, real-time human connection."
//   },
//   {
//     icon: Clock,
//     title: "Time-Based Flexibility",
//     description: "Pay only for the time you spend."
//   },
//   {
//     icon: Shield,
//     title: "Safety First",
//     description: "Verified profiles & real-time location tracking."
//   },
//   {
//     icon: Star,
//     title: "Earn as a Lynker",
//     description: "Get rewarded for listening, guiding, or spending time."
//   }
// ];
// const ValueProposition = () => {
//   return (
//     <section className="py-20 sm:py-32 bg-gradient-to-br from-pink-50 to-purple-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl mb-4 pb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//             Why Heleno?
//           </h2>
//           <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-gray-500">
//             More than just an app - a community that cares
//           </p>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
//           {values.map((value, index) => {
//             const Icon = value.icon;
//             return (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
//                   <Icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-xl mb-2 text-foreground">{value.title}</h3>
//                 <p className="text-foreground/60 text-gray-500">
//                   {value.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValueProposition;

import { Clock, Heart, Shield, Star } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Heart,
    title: "Real Emotional Support",
    description: "Not only chatting — real-time human connection."
  },
  {
    icon: Clock,
    title: "Time-Based Flexibility",
    description: "Pay only for the time you spend."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Verified profiles and real-time location tracking."
  },
  {
    icon: Star,
    title: "Earn as a Lynker",
    description: "Get rewarded for listening, guiding, or spending time."
  }
];

const ValueProposition = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900"
            >
              <span className="block">Why</span>
              <span className="text-rose-600">Heleno?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              More than just an app — it’s a{" "}
              <span className="font-semibold text-rose-600">
                caring community
              </span>{" "}
              that truly connects and understands you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="columns-1 sm:columns-2 gap-6 w-full max-w-3xl mx-auto space-y-6"
          >
            {values.map((item, index) => {
              const Icon = item.icon;

              const colors = [
                "bg-white border-rose-200",
                "bg-zinc-900 border-zinc-700 text-zinc-100",
                "bg-rose-50 border-rose-100",
                "bg-zinc-100 border-zinc-200"
              ];

              // Different content heights simulate “reel feed” feel
              const textHeights = [
                "h-[260px]",
                "h-[360px]",
                "h-[310px]",
                "h-[290px]"
              ];

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`break-inside-avoid ${colors[index]} ${textHeights[index]} 
              backdrop-blur-sm p-6 rounded-3xl shadow-md hover:shadow-xl 
              flex flex-col justify-between relative overflow-hidden transition-all duration-300`}
                >
                  {/* Accent circle */}
                  <div className="absolute right-0 top-0 w-24 h-24 bg-rose-600/10 rounded-bl-[4rem]" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-rose-600 text-white shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-700/">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

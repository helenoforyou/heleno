import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav",
    age: 24,
    story: "After moving to a new city, I felt isolated. Through Heleno, I met someone who listened — and that changed everything.",
    rating: 5,
  },
  {
    name: "Priya",
    age: 29,
    story: "Heleno helped me navigate a tough career decision. My Lynker's guidance gave me the clarity I needed.",
    rating: 4,
  },
  {
    name: "Rohan",
    age: 32,
    story: "Post-breakup was rough, but talking to someone on Heleno helped me heal faster than I thought possible.",
    rating: 5,
  },
  {
    name: "Sneha",
    age: 26,
    story: "I was skeptical at first, but the genuine connections I've made here are incredible. It's more than an app.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 pb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Community Stories
          </h2>
          <p className="text-xl text-gray-500 text-foreground/60 max-w-2xl mx-auto">
            Real people, real connections, real impact
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Story */}
              <p className="text-foreground/70 text-gray-500 mb-6 italic">
                "{testimonial.story}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-foreground/50 text-gray-500">
                    {testimonial.age} years old
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials
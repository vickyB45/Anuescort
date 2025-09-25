// src/components/ServicesSection.jsx
import { motion } from "framer-motion";
import { Heart, Smile, Users, Star, Clock, Globe } from "lucide-react";

const services = [
  {
    icon: <Heart size={40} className="text-purple-500" />,
    title: "Romantic Experience",
    desc: "Enjoy a memorable and romantic experience with our premium services designed to make your moments special.",
  },
  {
    icon: <Smile size={40} className="text-purple-500" />,
    title: "Fun & Joy",
    desc: "We ensure a joyful and delightful experience tailored to your mood and comfort.",
  },
  {
    icon: <Users size={40} className="text-purple-500" />,
    title: "Friendly Companionship",
    desc: "Get true companionship where you feel comfortable, valued, and cared for.",
  },
  {
    icon: <Star size={40} className="text-purple-500" />,
    title: "Premium Quality",
    desc: "Top-notch services ensuring quality, trust, and a premium feel with every interaction.",
  },
  {
    icon: <Globe size={40} className="text-purple-500" />,
    title: "Diverse Options",
    desc: "We provide a wide range of experiences and services to match your preference.",
  },
  {
    icon: <Clock size={40} className="text-purple-500" />,
    title: "Flexible Timing",
    desc: "Services that match your schedule with flexible timing and convenient booking.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
       

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl hover:scale-105 transition transform duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/GirlGrid.jsx
import { motion } from "framer-motion";

const girls = [
  { name: "Anjai", age: 23, size: 26, wt: 46, hgt: "5'4\"", img: "/images/aboutImages/1.webp" },
  { name: "Isha", age: 22, size: 26, wt: 48, hgt: "5'1\"", img: "/images/aboutImages/2.webp" },
  { name: "Ankita", age: 28, size: 24, wt: 43, hgt: "5'9\"", img: "/images/aboutImages/3.webp" },
  { name: "Aachal", age: 22, size: 24, wt: 43, hgt: "5'9\"", img: "/images/aboutImages/4.webp" },
  { name: "Riya", age: 25, size: 28, wt: 50, hgt: "5'6\"", img: "/images/aboutImages/5.webp"},
  { name: "Priya", age: 24, size: 26, wt: 47, hgt: "5'3\"", img: "/images/aboutImages/6.webp" },
  { name: "Neha", age: 23, size: 25, wt: 45, hgt: "5'2\"", img: "/images/aboutImages/7.webp" },
  { name: "Simran", age: 27, size: 27, wt: 49, hgt: "5'5\"", img: "/images/aboutImages/8.webp" },
];

export default function GirlGrid() {
  return (
    <section className=" py-4">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-12">
          Our Top Models
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {girls.map((girl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className=" rounded-xl overflow-hidden shadow-lg 0 hover:scale-105 transition transform duration-300"
            >
              <img
                src={girl.img}
                alt={girl.name}
                className="w-full h-96 object-cover object-top"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-purple-400">{girl.name}</h3>
                <p className="text-[18px] md:text-[17px] font-bold md:font-normal text-gray-600 mt-2">
                  Age: {girl.age}, Size: {girl.size}, Wt: {girl.wt}, Hgt: {girl.hgt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/Testimonials.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Anuj ",
    image: "https://i.pinimg.com/1200x/88/dc/f3/88dcf366e8034728d4701705682df808.jpg",
    rating: 5,
    text: "Absolutely amazing experience, she was charming, beautiful and made me feel very comfortable throughout.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    image: "https://i.pinimg.com/736x/c7/62/fd/c762fdec1b698fb56a82fb6d3dfb6ac6.jpg",
    rating: 4,
    text: "Such a gorgeous lady with a kind heart, professional service and a smile that can melt anyone.",
  },
  {
    id: 3,
    name: "Ankit Mehra",
    image: "https://i.pinimg.com/736x/91/eb/ec/91ebec00545d195d0ba395e043ef5b2f.jpg",
    rating: 5,
    text: "The most stunning girl I have ever met, classy, elegant and really knows how to make the evening memorable.",
  },
  {
    id: 4,
    name: "Rohit Kaur",
    image: "https://i.pinimg.com/736x/9c/56/10/9c56108359fef3271da46926a63b1da2.jpg",
    rating: 5,
    text: "She is elegant, stylish and very warm. Felt like a real girlfriend experience with so much charm.",
  },
  {
    id: 5,
    name: "Ajay Singh",
    image: "https://i.pinimg.com/1200x/9b/ce/77/9bce77c787fd3c27664d4abc193a1426.jpg",
    rating: 4,
    text: "I was impressed by her personality and confidence. A truly unforgettable evening.",
  },
  {
    id: 6,
    name: "Vansh Kapoor",
    image: "https://i.pinimg.com/736x/90/ae/37/90ae37c5f67498a9cf870ca805c141e4.jpg",
    rating: 5,
    text: "From the first moment, she made me feel special and comfortable. Stunning beauty with a golden heart.",
  },
];

export default function Testimonials() {
  const [expanded, setExpanded] = useState({});

  const toggleShowMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="bg-purple-50 py-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-bold text-center text-purple-600 mb-8"
        >
          What Our Clients Say
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t) => {
            const isExpanded = expanded[t.id];
            const truncatedText =
              t.text.length > 60 ? t.text.slice(0, 60) + "..." : t.text;

            return (
              <SwiperSlide key={t.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-xl p-6 text-center hover:shadow-2xl transition h-full flex flex-col justify-between"
                >
                  {/* User Image */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mx-auto border-4 border-purple-500 object-cover"
                  />

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    {t.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 my-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm mb-4">
                    {isExpanded ? t.text : truncatedText}
                  </p>

                  {/* Show More / Less */}
                  {t.text.length > 60 && (
                    <button
                      onClick={() => toggleShowMore(t.id)}
                      className="text-purple-600 text-sm font-medium hover:underline"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  )}
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

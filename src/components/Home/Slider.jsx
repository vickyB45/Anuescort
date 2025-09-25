// src/components/ImageSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function ImageSlider() {
  const slides = [
    {
      image: "/images/banner1.jpg",
      title: "Welcome to Anuescort",
      desc: "We provide the best services with modern design & technology.",
      btn: "Contact Us",
    },
    {
      image: "/images/banner2.jpg",
      title: "Explore Our Gallery",
      desc: "Discover stunning visuals and creative work in our collection.",
      btn: "View Gallery",
    },
    {
      image: "/images/banner3.jpg",
      title: "Get in Touch",
      desc: "Have questions? Contact us for more details and support.",
      btn: "Contact Us",
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        className="overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[350px] md:h-[450px]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end mb-10 text-center text-white px-4 z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="max-w-xl text-sm md:text-lg mb-4">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

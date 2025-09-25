import { motion } from "framer-motion";
import GirlGrid from "../components/About/GirlGrid";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero / Banner Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/aboutBanner.jpg"  
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl text-purple-400 md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Discover our story, vision, and what drives us to provide premium experiences.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Text */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
             About Us Udaipur Escorts Service
            </h2>
            <p className="leading-relaxed text-gray-700">
              
            Hello, my name is Anu. How are you all doing? I hope you’re all doing well. I am a lovely and stunning Escort Service in Udaipur who will surely satisfy all of your sexual desires. I am excellent at providing sexual services to my customers, and I have worked for years and am well-versed in meeting their physical needs. My prime objective is to provide excellent service and make my clients happy.
            </p>
            <p className="leading-relaxed text-gray-700">
             In addition, I am aware of my client’s desires and work to guarantee that all of their dreams come true. So, if you’re lonely and looking for an enchanting partner who can provide all your physical requirements, feel free to call me immediately. Some people like hooking up with young and gorgeous call girls. Others, on the other hand, embrace the opportunity of spending quality time with call girls. So, I am available 24 hours a day, 7 days a week, and am an amazing partner. If you’re looking for a young and beautiful call girl, contact the best escort service in Udaipur.
            </p>
          </motion.div>

          {/* Right Image / Visual */}
          <motion.div
            initial={{ x: +30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 hidden md:block aspect-h-5 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://anuescort.com/assets/images/udaipur-escort-service.webp"
                alt="About Visual"
                className="object-cover object-top w-full h-[400px] md:h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values / Features Section */}
      
        <GirlGrid />


      {/* Call-to-Action Banner */}
      <section className="py-16 bg-purple-700 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Excellence?
          </h2>
          <a
           href="tel:+919654416731"
            className="inline-block bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Contact Us Now
          </a>
        </motion.div>
      </section>
    </main>
  );
}

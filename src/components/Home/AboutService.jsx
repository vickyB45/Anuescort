import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutService() {
  const services = [
    {
      icon: "👩‍🦰",
      title: "High Profile Call Girls in Delhi at Low Price",
      desc: "Get High Profile Delhi Call Girls at your desired location's. Our Escorts provide a Top Class Escorts Service in 5 star hotels at reasonable prices.",
    },
    {
      icon: "💃",
      title: "18+ Call Girls Service Available 24*7",
      desc: "Enjoy Your Night with Hot and sexy 18+ age Call Girls at your dream place. Our Mature Delhi Escort are very talented and well manner.",
    },
    {
      icon: "🌙",
      title: "Night With Anuescort",
      desc: "Spend Your Night With Anuescort and she will provide you the ultimate experience of sex life.",
    },
    {
      icon: "✈️",
      title: "Air Hostess Escorts in Delhi",
      desc: "Delhi Air hostess escorts may offer companionship, entertainment, and conversation to clients during various social or private engagements.",
    },
  ];

  return (
    <section className="bg-purple-600 py-16 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="uppercase tracking-wider text-sm mb-2">
            About Anuescort
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Escorts Service in Delhi?
          </h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            Are you seeking youthful, gorgeous Escorts in Delhi? We asked this
            because we're eligible for conducting high-profile and beautiful
            Delhi Escorts for your enjoyment. Enjoy now one of the most trending
            Call Girl Service in Delhi commonly known as Sexy Sonal.
          </p>
          <p className="text-gray-200 leading-relaxed mb-6">
            However, so your time has started If you have been alone for a long
            time. We're then to introduce the No.1 Escorts Service Provider in
            Delhi for you.
          </p>
          <a   href="https://wa.me/919996365001"
      target="_blank" className="cursor-pointer border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition">
            Book Now →
          </a>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className= "cursor-pointer bg-white text-gray-800 rounded-xl py-10 p-6 shadow-lg hover:shadow-xl transition"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-10"></div>
              <h3 className="text-xl tracking-wide font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// src/pages/Udaipur.jsx
import { motion } from "framer-motion";

export default function Udaipur() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      title: "Udaipur Escorts Service in With Offers Available For Whole Night",
      text: `Udaipur is known as the “Lake City of India” because of its rich cultural heritage. People from all over the globe come to Udaipur to discover its hidden beauties. In addition, some individuals come to Udaipur to escape the stress and bustle of their everyday lives. So, for some, going to new locations is a fun way to relax, and for others, meeting new people is a fun way to socialize. If you’re also optimistic and looking for Udaipur Escort Service, you’ve come to the perfect website. So, as you have reached our platform, you can now easily figure out how to get a call girl in Udaipur. Moreover, our platform is an ideal approach how to get call girl service in Udaipur.

We have a team of skilled and mature Escorts Service in Udaipur who have years of experience and are professionals in their field. If you are in Udaipur and feeling horny, then don’t worry, our call girls are here to fulfill all of your desires and provide you with the utmost pleasure. All of our independent escort girls are young, beautiful, and sexy and sure to meet the sexual needs of every man.`,
    },
    {
      title: "This Winter Season Enjoy With Vip Udaipur Female Escorts",
      text: `Get prepared for a remarkable experience of spending precious time with the Udaipur Escort Service. These young and beautiful call girls attract people through their beauty. But, some people are not familiar with the procedure about how to booking call girls in Udaipur? For them, we are here to guide them. If that is the situation, then there is no need to worry because, from our anu escort service, you can hire the dream girl of your choice.

After you meet with our Udaipur Escorts, you will get sexually aroused by their services. Therefore, if you are aroused by our Udaipur escort girls, then you are sexually excited and want to have intercourse with them. In addition to this, all of your unsatisfied physical needs would be fulfilled.

Hooking up with young and gorgeous call girls is something that many guys like. Some individuals like spending quality time with Escorts in Udaipur as well. As a result, our call girls in Udaipur are available throughout the day and night and prove to be excellent companions.`,
    },
    {
      title: "How To Get A Escort Service in Udaipur",
      text: `If you are new to the city or visiting for the first time, it can be very challenging for you to look for a Escort Service in Udaipur. Sometimes, it happens that you come across several issues due to which you fail to meet your dream girl. So end your search here, because we have made it quite easy and simple for all of you to get escort services in Udaipur. Whether you are looking for a call girl for a date, want to spend quality time with someone special, want to accompany you, or make you feel relaxed. So for all of these, you can meet with us to get a Escort Service in Udaipur.`,
    },
    {
      title: "How To Book Real Independent Udaipur Escorts",
      text: `We are a leading Udaipur Escorts Service famous for offering call girls of different age groups. You can get the opportunity to meet sexy call girls with charming physiques and attractive body figures. Therefore, in order to book call girl in Udaipur, the only thing you have to do is to visit our website and get connected with us. Once you visit our website, you can choose the girl from their profile. After you are done with selecting the women, you will have to move ahead with the procedure. Thus, by doing so, you can book Call Girl in Udaipur without any hassle.`,
    },
    {
      title: "How To Book An Escort Service in Udaipur",
      text: `Many people out there look for ways regarding how to find a call girl in Udaipur. So, for all of them, anuescort is the one-stop solution. From our escort service, you can hire young, beautiful, hot, sexy call girls and have intercourse with them. We have a myriad of girls ranging from young teenagers to mature housewives. So, choose the one as per your requirements and get all of your desires fulfilled.

Whether you are on a business trip, holiday vacation, there are a myriad of fun activities and places to explore in Jaipur. In addition to exploring places, you can also experience physical pleasure offered by our Udaipur Escorts. Our call girls will surely meet all of your physical desires and you will enjoy spending quality time with them and will surely have an unforgettable experience.`,
    },
    {
      title: "How To Find Udaipur Escort Service",
      text: `In this vast age of the internet, getting an escort service in Udaipur has become easier than ever before. You can find the call girl in Udaipur as per your requirement, our staff specializes in providing all kinds of services with 100% satisfaction to their clients. So, you can hire the dream girl of your choice from our trusted and reliable Udaipur escort service.

Whether you are in a relationship or happily married, it happens sometimes that your partner fails to fulfill your physical needs. Therefore, in such cases, one looks after a partner who can please them and fulfill all of their naughty desires. Ranging from sweet to hardcore sex, our Udaipur escorts are perfect in their field.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative py-8 text-center ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto md:px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Udaipur Escorts Service
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Experience elite companionship, ultimate pleasure & unmatched intimacy in the City of Lakes.
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto pb-16 md:px-6 px-0 space-y-16">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="bg-white border border-purple-200 rounded-2xl shadow-md py-10 px-5 hover:shadow-xl transition"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed whitespace-pre-line">{section.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-purple-700 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Elite Escorts in Udaipur Now
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Your dream girl is just a call away. Enjoy unforgettable moments, sensual companionship & ultimate relaxation.
          </p>
          <a
            href="tel:+919996365001"
            className="inline-block bg-white text-purple-700 px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-100 transition"
          >
            Call Now & Book
          </a>
        </motion.div>
      </section>
    </div>
  );
}

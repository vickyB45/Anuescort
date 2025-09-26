import React from 'react'
import Slider from "../components/Home/Slider"
import ServicesSection from '../components/Home/ServicesSection'
import AboutService from '../components/Home/AboutService'
import ServiceTable from '../components/Home/ServiceTable'
import Contact from '../components/Home/Contact'
import Testimonials from '../components/Home/Testimonials'
import FAQ from '../components/FAQ'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  return (
    <div>
      <Slider />
      <ServicesSection />
      <AboutService />
      <ServiceTable />
      <ServiceCard
        image="https://www.a2zcty.in/images/book-jaipur-escorts-services.webp"
        heading="Ajmer Road Escorts Service | Independent Call Girls Udaipur"
        text="Dreaming a sexy girl all the time but don't know how to enjoy with one. Your hard, unsatisfied time will end with just one touch of sexy Russian escorts in Jaipur. Whether feeling shy or not in the mood, these hot chicks will make you forget about everything except them. Enjoy the most exotic night of yours with a complete night ..."
      />
      <ServiceCard
        image="https://www.a2zcty.in/images/call-girl-in-jaipur.webp"
        heading="Bani Park Escorts Service | Independent Call Girls in Udaipur"
        text="Don't have someone who can help release your love to them. If yes, then you just need to book our sexy housewife escorts in Jaipur for all. These big bobs ladies are not just horny, but they know how to please anyone ..."
      />
      <ServiceCard
        image="https://www.a2zcty.in/images/escort-service-in-jaipur.webp"
        heading="C Scheme Escorts Service | Independent Call Girls in Udaipur"
        text="Looking for a night with no boundation with the girl of your dreams? Udaipur VIP model escorts could give you the exact fun. These are not just young, but they are so skilled that they will blow your mind. Enjoy erotic..."
      />
      {/* <Contact /> */}
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default Home
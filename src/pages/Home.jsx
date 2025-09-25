import React from 'react'
import Slider from "../components/Home/Slider"
import ServicesSection from '../components/Home/ServicesSection'
import AboutService from '../components/Home/AboutService'
import ServiceTable from '../components/Home/ServiceTable'
import Contact from '../components/Home/Contact'
import Testimonials from '../components/Home/Testimonials'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div>
      <Slider />
      <ServicesSection />
      <AboutService />
      <ServiceTable />
      {/* <Contact /> */}
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default Home
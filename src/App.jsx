import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Location from './pages/Location'
import Service from './pages/Service'
import ContactUs from './pages/ContactUs'
import Udaipur from './pages/Udaipur'
import CollageGirl from './pages/CollageGirl'
import HouseWife from './pages/HouseWife'
import PrettyGirl from './pages/PrettyGirl'
import Russion from './pages/Russion'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        {/* <Route path='/contact' element={<ContactUs/>}/> */}
        <Route path='/udaipur' element={<Udaipur/>}/>

        <Route path='/collage-girl' element={<CollageGirl/>}/>
        <Route path='/house-wife' element={<HouseWife/>}/>
        <Route path='/pretty-girl' element={<PrettyGirl/>}/>
        <Route path='/russion' element={<Russion/>}/>
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import './App.css'
import Navbar from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import CompanyLogo from './Components/CompanyLogo/CompanyLogo'
import Purpose from './Components/Purpose/Purpose'
import FeaturesSection from './Components/FeaturesSection/FeaturesSection'
import ScheduleSection from './Components/ScheduleSection/ScheduleSection'
import MonitorSection from './Components/MonitorSection/MonitorSection'
import PricingSection from './Components/PricingSection/PricingSection'
import ServiceSection from './Components/ServiceSection/ServiceSection'
import Testimonial from './Components/Testimonial/Testimonial'
import Newsletter from './Components/Newletter/Newsletter'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-200
      20 rounded-full blur-[80px] z-[-1]'></div>
      <div className=' overflow-hidden'>
        <Navbar />
        <Hero />
        <CompanyLogo/>
        <Purpose/>
        <FeaturesSection/>
        <ScheduleSection/>
        <MonitorSection/>
        <PricingSection/>
        <ServiceSection/>
        <Testimonial/>
        <Newsletter/>
        <Footer/> 
      </div>
    </main>
  )
}

export default App

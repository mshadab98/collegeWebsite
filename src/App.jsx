import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'> 
      <Title subTitle ="Our PROGRAM" title ="What We Offer"/>
       <Program/>
         <About/>
         <Title subTitle ="GALLERY" title ="GALLERY"/>
         <Campus/>
         <Title subTitle ="TESTIMONIALS" title ="What Student Says"/>
         <Testimonial/>
         <Title subTitle ="CONTACT US" title ="Get in Touch"/>
         <Contact/>
         <Title subTitle ="Thank you" title ="For visiting"/>
         <Footer/>
     
        


      </div>
      
    
      
    </div>
  )
}

export default App

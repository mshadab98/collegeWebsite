import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link as ScrollLink } from 'react-scroll';
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setSticky (true) : setSticky(false);
  })
},[]);

const [mobileMenu, setmobileMenu]= useState(false);
const toggleMenu = ()=>{

mobileMenu ? setmobileMenu(false) : setmobileMenu(true);

}
  return (
   <nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} alt="" className='logo' />
    <ul className={mobileMenu? '': 'hide-mobile-menu'}>
    <li>
        <ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink>
      </li>
      <li>
        <ScrollLink to='programs' smooth={true} offset={-250} duration={500}>Program</ScrollLink>
      </li>
      <li>
        <ScrollLink to='about' smooth={true} offset={-150} duration={500}>About us</ScrollLink>
      </li>
      <li>
        <ScrollLink to='campus' smooth={true} offset={-260} duration={500}>Campus</ScrollLink>
      </li>
      <li>
        <ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>Testimonial</ScrollLink>
      </li>
      <li>
        <ScrollLink to='contact' smooth={true} offset={-260} duration={500}>
          <button className='btn'>Contact us</button>
        </ScrollLink>
      </li>

    </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
   </nav>
  )
}

export default Navbar;
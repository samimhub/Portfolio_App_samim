"use client"

import { useState } from "react"
import About from "./Components/About"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import MobileNav from "./Components/MobileNav"
import Navbar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio"
import Skills from "./Components/Skills"
import Testimonial from "./Components/Testimonial"

function page() {
  const [nav,setNav] =useState(false)
  const openNav = ()=> setNav(true)
  const closeNav =()=> setNav(false)
  return (
    <>
    <MobileNav nav={nav} closeNav={closeNav}/>
     <Navbar openNav={openNav}/>
     <main>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Testimonial/>
    </main>
    <Footer/>
    </>
   
    
  )
}

export default page

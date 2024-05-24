"use client"

import React, { useState } from 'react'
import About from '../Components/About'
import Navbar from '../Components/Navbar'
import MobileNav from '../Components/MobileNav'


function page() {
    const [nav,setNav] =useState(false)
  const openNav = ()=> setNav(true)
  const closeNav =()=> setNav(false)
  return (
    <>
     <MobileNav nav={nav} closeNav={closeNav}/>
     <Navbar openNav={openNav}/>
  <About/>
  </>
  )
}
  


export default page

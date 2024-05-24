"use client"

import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import MobileNav from '../Components/MobileNav'
import Portfolio from '../Components/Portfolio'


function page() {
    const [nav,setNav] =useState(false)
  const openNav = ()=> setNav(true)
  const closeNav =()=> setNav(false)
  return (
    <>
     <MobileNav nav={nav} closeNav={closeNav}/>
     <Navbar openNav={openNav}/>
  <Portfolio/>
  </>
  )
}
  


export default page

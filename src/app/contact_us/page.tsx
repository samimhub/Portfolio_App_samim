"use client"

import { useState } from 'react'
import Contact from '../Components/Contact'
import MobileNav from '../Components/MobileNav'
import Navbar from '../Components/Navbar'

function Page() {
  
  const [nav,setNav] =useState(false)
  const openNav = ()=> setNav(true)
  const closeNav =()=> setNav(false)
  return (
    <div>
     <MobileNav nav={nav} closeNav={closeNav}/>
     <Navbar openNav={openNav}/>
      <Contact/>
    </div>
  )
}

export default Page

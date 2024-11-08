
import { NAV_LINKS } from "@/Constant"
import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"

interface Props{
  openNav:()=>void;
}

function Navbar({openNav}:Props) {
  return (
    <nav className="padding-container relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-slate-100 py-3">
      <motion.div
      initial={{opacity:0,y:-50}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.2}}
      className="flexBetween max-container">
        <Link href="/" className="bold-28 capitalize relative flex">
          <Image 
          src="/portfolio_logo.png"
          alt="logo" width={28} 
          height={25}
          className="hover:rotate-180 transition-all duration-300"/>
          <span className="text-blue-700">S</span>A
        </Link>
        <ul className="hidden h-full w-full justify-end gap-6 lg:flex px-6 py-3">
          {
            NAV_LINKS.map((link)=>(
            <li  key={link.key}>
                <Link href={link.href}  className="flexCenter text-[15px] font-[500] text-black
              hover:bg-indigo-500 shadow-indigo-500/50 px-4 py-1 rounded-full  cursor-pointer transition-all hover:scale-105 duration-400">
                  {link.label}
              </Link>
            </li>
            
              
            ))
          }
        </ul>
        <div onClick={openNav}> 
          <Bars3Icon className="W-[2rem] h-[2rem] cursor-pointer lg:hidden "/>
        </div>
      </motion.div>
  </nav>
  )
}

export default Navbar

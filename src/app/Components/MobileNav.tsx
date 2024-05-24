import Link from "next/link"
import { NAV_LINKS } from "@/Constant"
import { XMarkIcon } from "@heroicons/react/16/solid"
import Image from "next/image";

interface Props{
  nav:boolean;
  closeNav:()=>void;
}

function MobileNav({nav,closeNav}:Props) {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <nav>
      <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a] `}>
      
       <ul className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
       <Link href="/" className="bold-28 capitalize relative flex mb-10  border-2 border-indigo-500/100 py-4 px-3 rounded-full">
          <Image src="/portfolio_logo.png" alt="logo" width={28} height={25}/>
          <span className="text-blue-700">S</span><span className="text-white">A</span>
        </Link>
          {
            NAV_LINKS.map((link)=>(
              <Link href={link.href} key={link.key} className="nav_link">
                 {link.label}
              </Link>
            ))
          }
        </ul>
        <div onClick={closeNav}className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-300">
          <XMarkIcon/>
        </div>
      </div>
  </nav>
  )
}

export default MobileNav

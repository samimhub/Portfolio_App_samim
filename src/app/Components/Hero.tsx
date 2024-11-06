"use client"

import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import Button from "./Button"
import Link from "next/link"
import { delay, easeInOut, motion} from "framer-motion"

export const fadeUp=(delay:any)=>{
  return{
    initial:{
      opacity:0,
      y:50
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        stiffness:100,
        duration:0.5,
        delay:delay,
        ease:easeInOut
      }
    }
  }
}

function Hero() {
  return (
    <section className="max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32 mx-auto
                       md:gap-28  lg:py-20 lg:flex-row">
      <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full
    shadow-lg blur-[7rem] -z-10"></span>
      <motion.div 
      initial={{y:50,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={ {duration:0.6,delay:0.2,ease:"easeInOut"}}
      className="flex flex-1 flex-col flexEnd border-5 shadow-lg p-2 rounded-full lg:rounded-2xl ">
        <Image
          src="/personal_photo.jpg"
          alt="bg"
          width={280}
          height={260}
          className="w-auto rounded-full  " />
      </motion.div>
      {/*Right*/}
      <motion.div 
      variants={fadeUp(0.8)}
      initial="initial"
      animate="animate"
      className="relative z-10 flex flex-1 flex-col pt-15 font-serif">
        <motion.h4 
        variants={fadeUp(0.6)}
        initial="initial"
        animate="animate"
        className="bold-20">Hello,</motion.h4>
        <h1 className="bold-40 lg:bold-52 relative"> I&#39;m Samim Aktar</h1>
        <h2 className="bold-28 lg:bold-32 text-[1.8rem capitalize]">
          A {" "}
          <span>
            <Typewriter
              words={['Marn Stack Developer', 'Full Stack Developer', 'Best Problem Solver....', 'Experienced Developer!']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="regular-16 max-w-[555px] my-4 font-serif">A passionate and skilled MERN stack developer with a strong foundation in building dynamic and responsive web applications.</p>
        <div className="my-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {
              Array(5).fill(1).map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  height={25}
                  width={25}
                />
              ))
            }
          </div>
          <p className="bold-18 lg:bold-20">1100+ <span className="regular-16 lg;regular-20"></span>Excellent Review</p>
        </div>
        <motion.div 
        variants={fadeUp(0.6)}
        initial="initial"
        animate="animate"
        className="flexStart gap-5 pt-6">
          <a href="https://drive.google.com/file/d/1kZNqhAIJe6oWs-yAGh6bDKAJIRp3PSXP/view?usp=sharing">
            <Button
              type="button"
              title="Download CV"
              icon="/downloadd.svg"
              variant="btn_dark_rounded"
            />
          </a>
          <Link href='/contact_us'>
            <Button
              type="button"
              title="Contact me"
              icon="/arrow-right.svg"
              variant="btn_indigo_rounded"

            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

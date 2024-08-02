import Image from "next/image"
import ReadMoreButton from "./ReadMoreButton"
import {motion} from "framer-motion"

const fadeUp = (delay:any) => ({

  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
    },
  },
});


function About() {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-20 lg:py-20 bg-[]f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
      About
      </div>
      <div 
      className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <motion.div 
         variants={fadeUp(0.6)}
         initial="initial"
         animate="animate"
        className="flex-1 flexCenter flex-col m-auto rounded-3xl bg-sky-100 p-10 shadow-sky-100">
          <ReadMoreButton/>
        </motion.div>
        <motion.div 
         initial={{x:50,opacity:0}}
         animate={{x:0,opacity:1}}
         transition={ {duration:0.8,delay:0.4,ease:"easeInOut"}}
        className="flex-1 flexCenter flexCenter hover:scale-105 duration-200">
          <Image src="/about.jpg" alt="about" width={250} height={250}
          className=" w-auto rounded-full shadow-md"
          />
        </motion.div>
      </div>
    </section>

  )
}

export default About

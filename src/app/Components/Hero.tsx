"use client"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import Button from "./Button"

function Hero() {
  return (
   <section className="max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32 mx-auto
   md:gap-28  lg:py-20 lg:flex-row">
    <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full
    shadow-lg blur-[7rem] -z-10"></span>
     <div className="flex flex-1 flex-col flexEnd border-5 shadow-lg p-2 rounded-full lg:rounded-lg ">
      <Image
      src="/bg.jpg"
      alt="bg"
      width={280}
      height={250}
      className="w-auto rounded-full  "/>
    </div>
    {/*Right*/ }
    <div className="relative z-10 flex flex-1 flex-col pt-15">
      <h4 className="bold-20">Hello,</h4>
      <h1 className="bold-48 lg:bold-52 relative"> I&#39;m Samim Aktar</h1>
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
        <p className="regular-16 max-w-[555px] my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Aspernatur cum eligendi suscipit nam molestias consequuntur</p>
          <div className="my-5 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {
                Array(5).fill(1).map((_,index)=>(
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
          <div className="flexStart gap-1 pt-6">
            <Button
            type="button"
            title="Download CV"
            icon="/downloadd.svg"
            variant="btn_dark_rounded"
            />
            <Button
            type="button"
            title="Contact me"
            icon="/arrow-right.svg"
            variant="btn_indigo_rounded"
            
            />
          </div>
    </div>
   </section>
  )
}

export default Hero

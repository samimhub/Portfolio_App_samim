import Image from "next/image"
import Button from "./Button"

function About() {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-20 lg:py-20 bg-[]f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
      About
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
          <p className="mb-8 text-center">
            <span className="font-extrabold">Hello Viewers,</span> Welcome to my portfolio website! I'm Samim Aktar, a passionate Web Developer with
             a strong background in Front End Development as well as MERN Stack Development. With a keen eye for detail and a commitment to excellence, 
             I specialize in developing  innovative solutions and delivering high-quality work.
          </p>
          <Button
            type="button"
            title="Read more"
            icon="/more.svg"
            variant="btn_dark_rounded"
            />
        </div>
        <div className="flex-1 flexCenter flexCenter">
          <Image src="/about.jpg" alt="about" width={250} height={250}
          className=" w-auto rounded-full shadow-md"
          />
        </div>
      </div>
    </section>
    
  )
}

export default About

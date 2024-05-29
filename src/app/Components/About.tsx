import Image from "next/image"
import Button from "./Button"
import ReadMore from "./ReadMore"

function About() {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-20 lg:py-20 bg-[]f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
      About
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto bg-sky-100 p-6 rounded-lg shadow-sky-100">
          <ReadMore/>
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

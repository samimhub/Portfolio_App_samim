import Image from "next/image"
import Button from "./Button"

function About() {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 lg:py-20 bg-[]f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
      About
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
          <p className="mb-8 text-center">
            <span className="font-extrabold">Lorem ipsum</span> dolor, sit amet consectetur adipisicing elit. Expedita, odio nisi incidunt, 
              vitae amet enim laudantium autem accusantium sit est culpa optio quasi? 
              Quas nihil ullam dolorum dolores provident quam mollitia ipsam vero possimus ipsa ducimus voluptates laudantium eaque recusandae, 
              veniam beatae dolorem aperiam fugiat sunt ab facere cum enim ad unde. Facilis, expedita delectus.
          </p>
          <Button
            type="button"
            title="Read more"
            icon="/more.svg"
            variant="btn_dark_rounded"
            />
        </div>
        <div className="flex-1 flexCenter flexCenter">
          <Image src="/about.png" alt="about" width={333} height={333}
          className=" w-auto rounded-full shadow-sm"
          />
        </div>
      </div>
    </section>
    
  )
}

export default About

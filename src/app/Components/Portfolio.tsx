import { PORTFOLIO } from "@/Constant"
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import {motion} from "framer-motion"

const fadeUp = (delay:any) => ({

  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
    },
  },
});

function Portfolio() {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28
    lg:py-20 xl:flex-row bg-[#f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">Porfolio</div>
      <ul className="mt-12 grid gap-14 md:grid-cols-2 lg:grid-cols-3 w-[95%] m-auto">
        {
          PORTFOLIO.map((portfolio)=>(
            <PortfolioItem
            key={portfolio.topic}
            ImgURL={portfolio.ImgURL}  
            topic={portfolio.topic}
            description={portfolio.description}
            vercel={portfolio.vercel}
            github={portfolio.github}
            />
          ))
        }
      </ul>
    </section>
  );
}

type PortfolioItem={
  topic:string;
  ImgURL:string;
  description:string;
  vercel:string;
  github:string;
}
const PortfolioItem =({topic,ImgURL,description,vercel,github}:PortfolioItem) =>{
return(
  <motion.li 
  variants={fadeUp(0.6)}
      initial="initial"
      animate="animate"
  className="relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group">
   
      <div className="group-hover:scale-110 transition-all duration-1000">
        <Image src={ImgURL} alt="map" width={444} height={444}/>
      </div>
      <div className="px-6 py-4">
      <h3 className="bold-18 lg:bold-20 my-4 capitalize">{topic}</h3>
      <p className="regular-16 text-gray-30 font-serif mb-4">{description}</p>
      <div className=" flex justify-evenly items-center ">
      <Link href={vercel}>
      <Button
            type="button"
            title="Live"
            icon="/vercel.svg"
            variant="btn_white_rounded"
            />
      </Link>
      <Link href={github}>
      <Button
            type="button"
            title="View code"
            icon="/github.svg"
            variant="btn_white_rounded"
            />
      </Link>
      </div>
    </div>
  </motion.li>
)
}

export default Portfolio;
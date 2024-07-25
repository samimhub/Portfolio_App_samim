import {TESTIMONIAL} from "@/Constant"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
   <section className="max-container bg-[#f7f7f7] padding-container gap-20 py-10 pb-40 md:gap-28
   lg:py-22 xl:flex-row">
    <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-32">TESTIMONIAL</div>
    
    <ul className="mt-12 grid grid-cols-1 gap-14 md:grid-cols-1 text-center w-[100%]">
      <Slider {...settings}>
      {
        TESTIMONIAL.map((testimonial)=>(
            <TestimonialItem
            key={testimonial.title}
            ImgURL={testimonial.ImgURL}
            title={testimonial.title}
            description={testimonial.description}
            />
          ))
        }
        </Slider>
    </ul>
    
    
    
   </section>
  )
}

type TestimonialItem={
  title:string;
  ImgURL:string;
  description:string;
}
const TestimonialItem =({title,ImgURL,description}:TestimonialItem) =>{
  return(
  
   <li className="relative flex flex-col py-24 items-center">
    <div className="absolute -top-1  ">
    <Image src={ImgURL} alt="user" width={70} height={70} className="rounded-full shadow-2xl border-4
    border-white "/>
    </div>
    <h3 className="bold-18 lg:bold-20 mt-24 capitalize">{title}</h3>
    <p className="regualar-16 text-xl line-clamp-2 text-gray-30 my-8 pb-14">{description}</p>
  </li>

)
}
export default Testimonial

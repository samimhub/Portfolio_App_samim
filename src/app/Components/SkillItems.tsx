import Image from 'next/image';
import React from 'react'

type SkillItems={
    title:string;
    icon:string;
    description:string;
}
function SkillItems({title,icon,description}:SkillItems) {
  return (
   <li className='relative flex w-full flex-1 flex-col items-center text-center shadow-[0_35px_40px_-15px_rgba(0,0,0,0.3)]
   rounded-2xl p-10 hover:bg-blue-500 group duration-[1100ms] transition'>
    <div className='rounded-full p-5 bg-blue-500 absolute -top-8 group-hover:bg-black'>
        <Image
         src={icon}
         alt='map'
         width={28}
         height={28}
         />
          </div>
         <h3 className='blod-20 lg:bold-22 mt-6 capitalize group-hover:text-white'>{title}</h3>
         <p className='regular-16 text-gray-30 mt-4 group-hover:text-white'>{description}</p>
   </li>
  )
}

export default SkillItems

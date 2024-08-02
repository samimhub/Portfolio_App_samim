
import React, { useState } from 'react';
import Button from './Button';


const ReadMoreButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded); 
  };

  return (
    <div className="max-w-xl mx-auto text-center">
     <p className="mb-8 text-xl">
            <span className="font-extrabold text-2xl">Hello Viewers,</span> Welcome to my portfolio website! I&#39;m Samim Aktar, a passionate Web Developer with
             a strong background in Front End Development as well as MERN Stack Development. With a keen eye for detail and a commitment to excellence, 
             I specialize in developing  innovative solutions and delivering high-quality work.
        
          <span className={`transition-all ease-in-out duration-500 overflow:hidden inline-block ${isExpanded ? 'max-h-[10rem] opacity-100' : 'max-h-0 opacity-0'}`}
        >
           I thrive in collaborative environments and am committed to continuous learning and innovation in the ever-evolving field of web development.
          </span>
      </p>
      <div className=' flex justify-center items-center'>
      <Button
        type="button"
        title={isExpanded ? 'Read Less' : 'Read More'}
        onClick={toggleReadMore} // Pass the toggleReadMore function as onClick
        icon="/more.svg"
        variant="btn_dark_rounded "
      />
      </div>
    </div>
  );
};

export default ReadMoreButton;


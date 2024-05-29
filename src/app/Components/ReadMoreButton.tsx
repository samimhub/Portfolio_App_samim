
import React, { useState } from 'react';
import Button from './Button';


const ReadMoreButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded); 
  };

  return (
    <div className="max-w-xl mx-auto text-center">
     <p className="mb-8 ">
            <span className="font-extrabold">Hello Viewers,</span> Welcome to my portfolio website! I&#39;m Samim Aktar, a passionate Web Developer with
             a strong background in Front End Development as well as MERN Stack Development. With a keen eye for detail and a commitment to excellence, 
             I specialize in developing  innovative solutions and delivering high-quality work.
        {isExpanded && (
          <span className="inline">
           I thrive in collaborative environments and am committed to continuous learning and innovation in the ever-evolving field of web development.
          </span>
        )}
      </p>
      <Button
        type="button"
        title={isExpanded ? 'Read Less' : 'Read More'}
        onClick={toggleReadMore} // Pass the toggleReadMore function as onClick
        icon="/more.svg"
        variant="btn_dark_rounded "
      />
    </div>
  );
};

export default ReadMoreButton;


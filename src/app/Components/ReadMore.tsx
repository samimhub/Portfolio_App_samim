
import React, { useState } from 'react';
import Button from './Button';


const ReadMoreButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded); 
  };

  return (
    <div className="read-more-container">
     <p className="mb-8 text-center">
            <span className="font-extrabold">Hello Viewers,</span> Welcome to my portfolio website! I&#39;m Samim Aktar, a passionate Web Developer with
             a strong background in Front End Development as well as MERN Stack Development. With a keen eye for detail and a commitment to excellence, 
             I specialize in developing  innovative solutions and delivering high-quality work.
        {isExpanded && (
          <span className="more-text">
            Here is the additional content that will be shown when the button is clicked. I can put any text or other elements here.
          </span>
        )}
      </p>
      <Button
        type="button"
        title={isExpanded ? 'Read Less' : 'Read More'}
        onClick={toggleReadMore} // Pass the toggleReadMore function as onClick
        icon="/more.svg"
        variant="btn_dark_rounded rounded-full"
      />
    </div>
  );
};

export default ReadMoreButton;


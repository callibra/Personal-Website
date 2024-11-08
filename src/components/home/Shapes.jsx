import React from 'react';
import './Shapes.css'; 

// Importing local SVG files
import jsIcon from '../../assets/icons/js.svg';
import taillwindcssIcon from '../../assets/icons/taillwindcss.svg';
import reactIcon from '../../assets/icons/react.svg';
import nodejsIcon from '../../assets/icons/nodejs.svg';
import htmlIcon from '../../assets/icons/html.svg';
import expressIcon from '../../assets/icons/express.svg';
import wordpressIcon from '../../assets/icons/wordpress.svg';
import gitIcon from '../../assets/icons/git.svg';
import cssIcon from '../../assets/icons/css.svg';
import mongodbIcon from '../../assets/icons/mongodb.svg';
// import pythonIcon from '../../assets/icons/python.svg'; 
// import nextjsIcon from '../../assets/icons/nextjs.svg';
// import htmlIcon from '../../assets/icons/html.svg';
// import phpIcon from '../../assets/icons/php.svg';
// import nestjsIcon from '../../assets/icons/nestjs.svg';
// import bootstrapIcon from '../../assets/icons/bootstrap.svg';
// import javaIcon from '../../assets/icons/java.svg';

const Shapes = () => {
  const icons = [
    jsIcon,
    taillwindcssIcon,
    reactIcon,
    nodejsIcon,
    htmlIcon,
    expressIcon,
    wordpressIcon,
    gitIcon,
    cssIcon,
    mongodbIcon,
    // pythonIcon, 
    // nextjsIcon,
    // htmlIcon,
    // phpIcon,
    // nestjsIcon,
    // bootstrapIcon,
    // javaIcon,
  ];
  
  return (
    <div className='shapes'>
      {icons.map((icon, index) => {
        const delay = Math.random() * 2; // Random delay between 0s and 2s
        return (
          <img
            key={`icon-${index}`}
            className={`icon s${index + 1}`}
            src={icon}
            alt={`Icon ${index + 1}`}
            style={{ animationDelay: `${delay}s` }} // Apply the random delay
          />
        );
      })}
    </div>
  );
};

export default Shapes;

//////////////////////////////////// 888 ////////////////////////////////////////

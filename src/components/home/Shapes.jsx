import React from 'react';
import './Shapes.css'; 

// Importing local SVG files
import jsIcon from '../../assets/icons/js.svg';
import tsIcon from '../../assets/icons/ts.svg';
import reactIcon from '../../assets/icons/react.svg';
import nodejsIcon from '../../assets/icons/nodejs.svg';
import linuxIcon from '../../assets/icons/linux.svg';
import expressIcon from '../../assets/icons/express.svg';
import wordpressIcon from '../../assets/icons/wordpress.svg';
import githubIcon from '../../assets/icons/github.svg';
import gitIcon from '../../assets/icons/git.svg';
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
    tsIcon,
    reactIcon,
    nodejsIcon,
    linuxIcon,
    expressIcon,
    wordpressIcon,
    githubIcon,
    gitIcon,
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

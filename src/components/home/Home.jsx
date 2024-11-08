import React from 'react';
import './Home.css';
import Me from '../../assets/a.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Typewriter from "typewriter-effect";

const Home = () => {
    
    const strings = [
        "Full Stack Developer",
        "MERN Stack App",
        "Web Developer",
        "Wordpress App",
        "Ethical Hacking"
      ];
    
      const colors = [
        "#FF5733", // Color for "Full Stack Developer"
        "#33FF57", // Color for "MERN Stack App"
        "#3357FF", // Color for "Web Developer"
        "#FF33A1", // Color for "Wordpress App"
        "#FFD133"  // Color for "Ethical Hacking"
      ];

    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' />
                <h1 className="home__name">Ivan Gjorcev</h1>
                {/* <span className="home__education">I'm a Software Engineer</span> */}
                <div className="typewriter-container"> {/* Add a container for styling */}
                   <Typewriter options={{strings: strings.map((text, index) => ( `<span style="color: ${colors[index]}">${text}</span>`)),
                     autoStart: true,
                     loop: true,
                     delay: 100,
                     wrapperClassName: "typewriter-wrapper" }}/>
                </div>
                <HeaderSocials />
                <a href="#contact" className="btn"> Contact Me</a>
                <ScrollDown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home

// {/* <Typewriter options={{ strings: [ "Full Stack Developer", "MERN Stack App", "Web Developer", "React Native App", "Ethical Hacking",],
//     autoStart: true,
//     loop: true,
//     delay: 100,}}/>
// </div>
// // <div className="typewriter-container"> */} Using for single color text
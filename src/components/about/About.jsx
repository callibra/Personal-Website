import React from 'react';
import './About.css';
import Image from '../../assets/a.jpg';
import Resume from '../../assets/MyCv.pdf';
import AboutBox from './AboutBox';
import { SiSkillshare, SiCodeigniter } from 'react-icons/si';

// Importing local SVG icons
import jsIcon from '../../assets/icons/js.svg';
import tsIcon from '../../assets/icons/ts.svg';
import reactIcon from '../../assets/icons/react.svg';
import nodejsIcon from '../../assets/icons/nodejs.svg';
import pythonIcon from '../../assets/icons/python.svg';
import nestjsIcon from '../../assets/icons/nestjs.svg';
import expressIcon from '../../assets/icons/express.svg';
import mongodbIcon from '../../assets/icons/mongodb.svg';
import phpIcon from '../../assets/icons/php.svg';
import nextjsIcon from '../../assets/icons/nextjs.svg';
import githubIcon from '../../assets/icons/github.svg';
import wordpressIcon from '../../assets/icons/wordpress.svg';
import bootstrapIcon from '../../assets/icons/bootstrap.svg'
import taillwindcssIcon from '../../assets/icons/taillwindcss.svg';
import linuxIcon from '../../assets/icons/linux.svg';
import gitIcon from '../../assets/icons/git.svg';
import postmanIcon from '../../assets/icons/postman.svg';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            <span className="colored-word">• I'm a</span> web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest!<br /><br />
                            <span className="colored-word">• I started</span> my coding journey almost exactly a two year ago and now I'm working full time and doing freelance projects on the side for my friends.<br /><br />
                            <span className="colored-word">• I have</span> 3 years experience in Wordpress CMS and MERN Application.<br /><br />
                            <span className="colored-word">• I'm open</span> to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.<br /><br />
                            <span className="colored-word">• Thanks</span> to visit my portfolio web site!
                        </p>
                        <h3 className='skills-title'><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> Skills :</h3>
                        <ul className="about__list">
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> JavaScript </b> 
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <img src={jsIcon} alt="JavaScript" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> React </b> 
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <img src={reactIcon} alt="React" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> Node.js </b> 
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
            <img src={nodejsIcon} alt="Node.js" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> Express </b> 
        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
            <img src={expressIcon} alt="Express" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> MongoDB </b> 
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
            <img src={mongodbIcon} alt="MongoDB" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> GitHub </b> 
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> WordPress </b> 
        <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">
            <img src={wordpressIcon} alt="WordPress" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> Bootstrap </b> 
        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
            <img src={bootstrapIcon} alt="Bootstrap" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> Tailwindcss </b> 
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
            <img src={taillwindcssIcon} alt="Taillwindcss" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> Linux </b> 
        <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
            <img src={linuxIcon} alt="Linux" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> Git </b> 
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
            <img src={gitIcon} alt="Git" />
        </a>
    </li>
    <li>
        <b><SiSkillshare size={25} style={{ verticalAlign: 'middle' }}/> Postman </b> 
        <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
            <img src={postmanIcon} alt="Postman" />
        </a>
    </li>
</ul>
                    </div>
                    {/* <hr className="line-hr" />
                    <h3 className='skills-title'>📊 Graph :</h3>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development">
                                </span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">
                                </span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage photography">
                                </span>
                            </div>
                        </div>
                    </div> */}
                    <button className="cv-resume" onClick={downloadResume}>Download CV</button>
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About;

///////////////////// 888 ////////////////////////////

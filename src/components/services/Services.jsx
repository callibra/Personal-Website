import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/wordpress.png';
import Image4 from '../../assets/server.png'; 
import wordpressIcon from '../../assets/icons/wordpress.svg';
import phpIcon from '../../assets/icons/php.svg';
import reactIcon from '../../assets/icons/react.svg';
import nodejsIcon from '../../assets/icons/nodejs.svg';
import expressIcon from '../../assets/icons/express.svg';
import mongodbIcon from '../../assets/icons/mongodb.svg';
import bootstrapIcon from '../../assets/icons/bootstrap.svg';
import taillwindcssIcon from '../../assets/icons/taillwindcss.svg';
import linuxIcon from '../../assets/icons/linux.svg';
import kaliIcon from '../../assets/icons/kali.svg';
import mysqlIcon from '../../assets/icons/mysql.svg';
import nginxIcon from '../../assets/icons/nginx.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Frontend Development",
    description:
      "Experienced in front-end development with React.js, building dynamic web apps. Skilled in using Bootstrap for responsive design and Tailwind CSS for utility-first styling, creating modern and clean user interfaces.",
    skills: [
      <img src={reactIcon} alt="React" style={{ width: '35px', height: '35px' }} />,
      <img src={bootstrapIcon} alt="Bootstrap" style={{ width: '35px', height: '35px' }} />,
      <img src={taillwindcssIcon} alt="TailwindCSS" style={{ width: '35px', height: '35px' }} />
    ],
  },
  {
    id: 2,
    image: Image2,
    title: "Backend Development",
    description:
      "Experienced in backend development with Node.js and Express, building scalable server-side applications. Proficient in using Mongoose for MongoDB integration and skilled in building and managing APIs.",
    skills: [
      <img src={nodejsIcon} alt="Node.js" style={{ width: '35px', height: '35px' }} />,
      <img src={expressIcon} alt="Express" style={{ width: '35px', height: '35px' }} />,
      <img src={mongodbIcon} alt="MongoDB" style={{ width: '35px', height: '35px' }} />
    ],
  },
  {
    id: 3,
    image: Image3,
    title: "WordPress Development",
    description:
      "Proficient in WordPress administration and site creation, including server setup, management, and seamless integration. Focused on performance optimization, security, and ongoing maintenance to ensure reliable and efficient websites.",
    skills: [
      <img src={wordpressIcon} alt="WordPress" style={{ width: '35px', height: '35px' }} />,
      <img src={phpIcon} alt="Php" style={{ width: '35px', height: '35px' }} />,
      <img src={mysqlIcon} alt="MySQL" style={{ width: '35px', height: '35px' }} />
    ],
  },
  {
    id: 4,
    image: Image4,
    title: "Web Pen Testing & Linux Admin",
    description:
     "Experienced in web penetration testing, utilizing tools like Kali Linux for security assessments and vulnerability analysis. Proficient in configuring, managing, and securing web servers, including Nginx, on various Linux distributions, ensuring optimal performance and security.",
    skills: [
      <img src={linuxIcon} alt="Linux" style={{ width: '35px', height: '35px' }} />,
      <img src={kaliIcon} alt="Kali Linux" style={{ width: '35px', height: '35px' }} />,
      <img src={nginxIcon} alt="Nginx" style={{ width: '35px', height: '35px' }} />
    ],
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description, skills }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" width="80" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <br />
              <div
                className="services__skills"
                style={{
                  display: 'flex',
                  gap: '15px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '10px',
                }}
              >
                {skills.map((skill, index) => (
                  <span key={index} className="services__skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

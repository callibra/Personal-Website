import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { FaSquareUpwork } from "react-icons/fa6";

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/callibra' className='home__social-link' target='_blank'  rel='noreferrer'>
                <FaGithub size={40}/>
            </a>

            {/* <a href='https://hashnode.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode size={30}/>
            </a>

            <a href='https://dev.to' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev size={30}/>
            </a> */}

            <a href='https://www.linkedin.com/in/ivanivance/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn size={40}/>
            </a>

            <a href='https://www.upwork.com/freelancers/~01aaee95dd05624997' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaSquareUpwork size={40}/>
            </a>

            {/* <a href='https://www.twitter.com' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter size={30}/>
            </a> */}
        </div>
    );
};

export default HeaderSocials;

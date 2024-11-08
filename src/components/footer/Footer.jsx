import React from 'react';
import './Footer.css';

const Footer = () => {


    return (
        <div className="footer">
            <h3 className='footer-title'>&copy; {new Date().getFullYear()} Portfolio App By <a href="#" rel="noopener noreferrer" className="blank-link"> 1van4e</a>. All rights reserved.</h3>
        </div>
    )
}

export default Footer;

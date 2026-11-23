import React from 'react';
import './Footer.css';

const Footer = () => {


    return (
        <footer className="footer">
            <div className="footer__inner">
                <h3 className="footer-title">&copy; {new Date().getFullYear()} Ivan Gjorcev</h3>
                <div className="footer__meta">
                    <a href="#" rel="noopener noreferrer" className="blank-link">1van4e</a>
                    <span className="footer__rights">. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

import React, { useState } from "react";
import "./Sidebar.css";
import {
    RiCodeSSlashLine,
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiChat3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";


const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo" aria-label="Go to home">
                    <RiCodeSSlashLine className="nav-logo-icon" aria-hidden="true" />
                </a>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <RiHome2Line />
                                    <span className="nav__label">Home</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <RiUser3Line />
                                    <span className="nav__label">About Me</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <RiFileList3Line />
                                    <span className="nav__label">Services</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#work" className="nav__link">
                                    <RiBriefcase2Line />
                                    <span className="nav__label">Experience</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#education" className="nav__link">
                                    <IoSchoolOutline />
                                    <span className="nav__label">Education</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <RiStackLine />
                                    <span className="nav__label">Recent Projects</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <RiChat3Line />
                                    <span className="nav__label">Get In Touch</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="nav__footer">
                    <button onClick={props.switchTheme} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>
            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'

import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link activeClass="active" to="hero" onClick={closeMenu} spy={true} smooth={true} offset={0} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>

                        <Link activeClass="active" to="about" onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500} >
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link activeClass="active" to="testimonials" onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500} >
                            Testimonials
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link activeClass="active" to="demo" onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500} >
                            Demo
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

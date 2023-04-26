import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <div className='nav'>
            <div className="nav_logo">
                <h1>ALGORITM</h1>
            </div>
            <ul>
                <li>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="blog" spy={true} smooth={true} offset={0} duration={500} >
                        Blog
                    </Link>
                    {/* <a href="#blog">Blog</a> */}
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="service" spy={true} smooth={true} offset={0} duration={500} >
                        Service
                    </Link>
                </li>
                <li>
                    <Link to="home2" spy={true} smooth={true} offset={0} duration={500} >
                        Home2
                    </Link>
                </li>
                <li>
                    <Link to="home3" spy={true} smooth={true} offset={0} duration={500} >
                        Home3
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar
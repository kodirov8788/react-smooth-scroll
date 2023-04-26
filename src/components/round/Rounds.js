import React, { useState } from 'react'
import "./Rounds.css"
import { Link } from 'react-scroll'

function Rounds() {
    const [move, setMove] = useState(20)



    return (
        <div style={{ overflow: "hidden" }} className='rounds'>
            <div className="line1"></div>
            <ul style={{ transform: `translateY(${move}px)` }}>
                <li>
                    <Link to="home" onClick={() => setMove(30)} spy={true} smooth={true} offset={0} duration={500} >

                    </Link>
                </li>
                <li>
                    <Link to="blog" spy={true} onClick={() => setMove(0)} smooth={true} offset={0} duration={500} >

                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} onClick={() => setMove(-30)} smooth={true} offset={0} duration={500} >

                    </Link>
                </li>
                <li>
                    <Link to="service" spy={true} onClick={() => setMove(-60)} smooth={true} offset={0} duration={500} >

                    </Link>
                </li>

                <li>
                    <Link to="home2" spy={true} smooth={true} offset={0} onClick={() => setMove(-90)} duration={500} >
                    </Link>
                </li>
                <li>
                    <Link to="home3" spy={true} smooth={true} offset={0} onClick={() => setMove(-90)} duration={500} >
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Rounds
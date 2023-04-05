import './Nav.css'
import { useState } from 'react';

export default function Nav(props) {
    return (
        <>
            <nav className='navbar'>
                <p className='name'>Misael Castillo - <span style={{ color: 'white' }}>Font end developer</span></p>
                <ul>
                    <li><button onClick={() => props.setContent(0)} className='nav-content-btn'>Home</button></li>
                    <li><button onClick={() => props.setContent(1)} className='nav-content-btn'>Stack</button></li>
                    <li><button onClick={() => props.setContent(2)} className='nav-content-btn'>About</button></li>
                    <li><button onClick={() => props.setContent(3)} className='nav-content-btn'>Contact</button></li>
                </ul>
                <button type='button' className='nav-resume-btn'>Resume</button>
            </nav>
        </>
    )
}
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
    return (
        <>
            <nav className='navbar'>
                <ul>
                    <li><Link to={'/'}>Projects</Link></li>
                    <li><Link to={'/About'}>About</Link></li>
                    <li><Link to={'/Contact'}>Contact</Link></li>
                </ul>
                <button type='button' className='nav-btn'>Resume</button>
            </nav>
        </>
    )
}
import Nav from "../../Components/Nav/Nav"
import Sidebar from '../../Components/Sidebar/Sidebar'
import './About.css'

export default function About() {
    return (
        <div>
            <header className='header'>
                {/* Nav Component */}
                <Nav />
            </header>
            <Sidebar />
        </div>
    )
}
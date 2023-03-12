import './Projects.css'
import Arrow from './Img/arrowDown.png'
import Nav from '../../Components/Nav/Nav'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ProjectsList from "../../Components/ProjectsList/ProjectsList"

export default function Home() {
    return (
        <>
            {/* Nav Component */}
            <header className='header'>
                <Nav />
            </header>

            {/* Main Body */}
            <main className='Main-Section'>
                {/* Page Title */}
                <div className="title-container">
                    <h1 className='Main-Title'>Welcome to my <span className="h1-Span">Porfolio</span></h1>
                </div>
                <div className="Arrow-Container">
                    <img src={Arrow} className="Arrow" alt='Arrow Down' />
                </div>


                {/* List of Projects */}
                <section className='Projects'>
                    <ProjectsList />
                </section>
            </main>

            {/* Sidebar */}
            <aside>
                <Sidebar />
            </aside>
        </>
    )
}
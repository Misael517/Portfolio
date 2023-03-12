import Nav from "../../Components/Nav/Nav"
import Sidebar from '../../Components/Sidebar/Sidebar'
import AboutImg from './Img/AboutImg.jpg'
import HelloImg from './Img/HelloImg.png'
import './About.css'

export default function About() {
    return (
        <div>
            {/* Nav Component */}
            <header className='header'>
                <Nav />
            </header>
            {/* Main Body */}
            <main className='Main'>
                <section className="About-Section">
                    <img src={HelloImg} alt="Hello Message" className="Hello-Img" />

                    <div className="About-Container">
                        <img src={AboutImg} alt="Man coding" className="About-Img" />

                        <div className="Text-Section">
                            <p className="Text">
                                My name is <span style={{ color: 'black' }}>Misael Castillo</span>, I'm from
                                Dominican Republic, living right now in
                                New York. Currently Computer Science
                                Student at BMCC.
                            </p>
                            <p className="Text">
                                I love computers, and many things related to the tech industry. I'm constantly focus
                                on improving my skills as a front end developer. My speciation about myself is high,
                                and because of that I'm always open to learn new things.
                            </p>
                            <p className="Text">
                                Sometimes I try to learn new things like drawing, Unreal Engine 5, Blender, and another things
                                related to design. I'm friendly, and always complete my work.
                                If you want to know more about my skills, review my stack more in detail by
                                leaving the cursor over the side bar.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Sidebar />
        </div>
    )
}
import ContactImg from './Img/ContactImg.jpg'
import "./Contact.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Nav from "../../Components/Nav/Nav"
import Form from '../../Components/Form/FormComponent'

export default function Contact() {
    return (
        <div>
            {/* Nav Component */}
            <header className='header'>
                <Nav />
            </header>
            {/* Main Body */}
            <main className='Main'>
                <section className="Contact-Section">
                    <div className="Contact-Container">
                        <img src={ContactImg} alt="Laptop" className="Contact-Img" />
                        <Form />
                    </div>
                </section>
            </main>
            <Sidebar />
        </div>
    )
}
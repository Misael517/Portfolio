import "./Contact.css";
import React, { memo, } from 'react';

function Contact() {
    return (
        <div className="Contact-border">
            <div className="Contact-container">
                <div>
                    <p className="Contact-p">
                        <span className="Contact-Span">#1 - First-Email:</span> rd.ketalmisael@hotmail.com
                    </p>
                    <p className="Contact-p">
                        <span className="Contact-Span">#2 - Second-Email:</span> MisaelCastillo517@gmail.com
                    </p>
                    <p className="Contact-p">
                        <span className="Contact-Span">#3 - Linkedin:</span> <a className="Link" href="https://www.linkedin.com/in/misael-castillo-25392a1a5/" target="blank">Misael-Castillo.</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

const ContactMemo = memo(Contact);
export default ContactMemo;
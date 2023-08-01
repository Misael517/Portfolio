import styles from "./Contact.module.css";
import React, { memo, } from 'react';

function Contact() {
    return (
        <div className={styles.ContactBorder}>
            <div className={styles.ContactContainer}>
                <div>
                    <p className={styles.ContactP}>
                        <span className={styles.ContactSpan}>#1 - First-Email:</span> rd.ketalmisael@hotmail.com
                    </p>
                    <p className={styles.ContactP}>
                        <span className={styles.ContactSpan}>#2 - Second-Email:</span> MisaelCastillo517@gmail.com
                    </p>
                    <p className={styles.ContactP}>
                        <span className={styles.ContactSpan}>#3 - Linkedin:</span> <a className={styles.Link} href="https://www.linkedin.com/in/misael-castillo-25392a1a5/" target="blank">Misael-Castillo.</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

const ContactMemo = memo(Contact);
export default ContactMemo;
import styles from './Nav.module.css'
import { useState } from 'react';
import NavIcon from './Img/NavIcon.png'

export default function Nav(props) {
    const [displayNav, setDisplayNav] = useState('none')

    const handleDisplayNav = () => {
        if (displayNav === 'none') {
            setDisplayNav('block')
        } else if (displayNav === 'block') {
            setDisplayNav('none')
        }
    }

    return (
        <>
            <nav className={styles.navbar} style={{ display: props.displayNav }}>
                <p className={styles.name}>Misael Castillo - <span style={{ color: 'white' }}>Font end developer</span></p>
                <ul>
                    <li><button onClick={() => props.setContent(0)} className={styles.navContentBtn}>Home</button></li>
                    <li><button onClick={() => props.setContent(1)} className={styles.navContentBtn}>Stack</button></li>
                    <li><button onClick={() => props.setContent(2)} className={styles.navContentBtn}>About</button></li>
                    <li><button onClick={() => props.setContent(3)} className={styles.navContentBtn}>Contact</button></li>
                </ul>
                <button type='button' className={styles.navResumeBtn}>Resume</button>
            </nav >

            {/* Mobile Nav */}
            < img src={NavIcon} className={styles.navIcon} onClick={handleDisplayNav} alt='Navigation Button' />
            <p className={styles.nameMobile}>Misael Castillo - <span style={{ color: 'white' }}>Font end developer</span></p>
            <nav className={styles.navbarMobile} style={{ display: displayNav }}>
                <ul>
                    <li><button onClick={() => { props.setContent(0); setDisplayNav('none') }} className={styles.navBtnMobile}>Home</button></li>
                    <li><button onClick={() => { props.setContent(1); setDisplayNav('none') }} className={styles.navBtnMobile}>Stack</button></li>
                    <li><button onClick={() => { props.setContent(2); setDisplayNav('none') }} className={styles.navBtnMobile}>About</button></li>
                    <li><button onClick={() => { props.setContent(3); setDisplayNav('none') }} className={styles.navBtnMobile}>Contact</button></li>
                    <button type='button' className={styles.navBtnMobile}>Resume</button>
                </ul>
            </nav>
        </>
    )
}
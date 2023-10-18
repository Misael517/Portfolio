import styles from './Nav.module.css'
import { useState, useRef, useEffect } from 'react';
import NavIcon from './Img/NavIcon.png'

export default function Nav(props) {
    const [displayNav, setDisplayNav] = useState('none')
    const navIconRef = useRef(null)

    // Close the sign out button when you click outside
    const handleClickOutside = (event) => {

        if (navIconRef.current && displayNav === 'flex' && !navIconRef.current.contains(event.target)) {
            setDisplayNav('none');
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });



    return (
        <>
            <nav className={styles.navbar}>
                <p className={styles.name}>Misael Castillo - <span style={{ color: 'white' }}>Front end developer</span></p>
                <ul>
                    <li><button onClick={() => props.setContent(0)} className={styles.navContentBtn}>Home</button></li>
                    <li><button onClick={() => props.setContent(1)} className={styles.navContentBtn}>Stack</button></li>
                    <li><button onClick={() => props.setContent(2)} className={styles.navContentBtn}>About</button></li>
                    <li><button onClick={() => props.setContent(3)} className={styles.navContentBtn}>Contact</button></li>
                </ul>
                <a type='button' className={styles.navResumeBtn} href='http://tiny.cc/e4mbvz' target='_blank'>Resume</a>
            </nav >

            {/* Mobile Nav */}
            <nav className={styles.navbarMobile} ref={navIconRef}>
                <p className={styles.nameMobile}>Misael Castillo - <span style={{ color: 'white' }}>Font end developer</span></p>
                <img src={NavIcon} className={styles.navIcon} onClick={() => displayNav === 'none' ? setDisplayNav('flex') : setDisplayNav('none')} alt='Navigation Button' />

                <div className={styles.navContentMobile} style={{ display: displayNav }}>
                    <ul>
                        <li><button onClick={() => { props.setContent(0); setDisplayNav('none') }} className={styles.navBtnMobile}>Home</button></li>
                        <li><button onClick={() => { props.setContent(1); setDisplayNav('none') }} className={styles.navBtnMobile}>Stack</button></li>
                        <li><button onClick={() => { props.setContent(2); setDisplayNav('none') }} className={styles.navBtnMobile}>About</button></li>
                        <li><button onClick={() => { props.setContent(3); setDisplayNav('none') }} className={styles.navBtnMobile}>Contact</button></li>
                        <li><a type='button' className={styles.navBtnMobile} href='http://tiny.cc/e4mbvz' target='_blank'>Resume</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
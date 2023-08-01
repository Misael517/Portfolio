import styles from './About.module.css';
import { memo } from 'react';

function About() {
    return (
        <div className={styles.AboutBorder}>
            <div className={styles.AboutContainer}>
                <div>
                    <p className={styles.AboutP}>
                        My name is <span style={{ color: 'Aqua' }}>Misael Castillo</span>, I'm from
                        Dominican Republic, living right now in
                        New York.
                    </p>
                    <p className={styles.AboutP}>
                        I like computer sciece, and many things related to the tech industry. I'm constantly focus
                        on improving my skills as a front end developer because my spectations about myself are high.
                        That is why I'm always open to learn new things.
                    </p>
                    <p className={styles.AboutP}>
                        Sometimes I practice different things like drawing, Unreal Engine 5, Blender, and another things
                        related to design. I won't forget to mention that I'm friendly, and always complete my work.
                    </p>
                </div>
            </div>
        </div>
    )
}

const AboutMemo = memo(About);

export default AboutMemo;
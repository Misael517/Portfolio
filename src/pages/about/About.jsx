import styles from './About.module.css';
import { memo } from 'react';

function About() {
    return (
        <div className={styles.AboutBorder}>
            <div className={styles.AboutContainer}>
                <div>
                    <p className={styles.AboutP}>
                        Hello, My name is <span style={{ color: 'Aqua' }}>Misael Castillo</span>, and I've been living in New York for many years.
                    </p>
                    <p className={styles.AboutP}>
                        Sometimes I like to create environments using tools like Unreal Engine 5, Blender 3D, or another things
                        related to design, if I'm not doing this or coding, I'm probably having a good time with some friends.
                    </p>
                    <p className={styles.AboutP}>
                        To me things like communication, collaboration,
                        problem solving and adaptability are essential in my work environment, so I bring those when it's time to work.
                    </p>
                </div>
            </div>
        </div>
    )
}

const AboutMemo = memo(About);

export default AboutMemo;
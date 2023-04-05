import './About.css';
import { memo } from 'react';

function About() {
    return (
        <div className="About-border">
            <div className="About-container">
                <div>
                    <p className="about-p">
                        My name is <span style={{ color: 'Aqua' }}>Misael Castillo</span>, I'm from
                        Dominican Republic, living right now in
                        New York.
                    </p>
                    <p className="about-p">
                        I like computer sciece, and many things related to the tech industry. I'm constantly focus
                        on improving my skills as a front end developer because my spectations about myself are high.
                        That is why I'm always open to learn new things.
                    </p>
                    <p className="about-p">
                        Sometimes I practice different things like drawing, Unreal Engine 5, Blender, and another things
                        related to design. I won't forget to mention that I'm friendly, and always complete my work :) .
                    </p>
                </div>
            </div>
        </div>
    )
}

const AboutMemo = memo(About);

export default AboutMemo;
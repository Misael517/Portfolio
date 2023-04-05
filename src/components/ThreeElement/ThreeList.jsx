import { memo } from "react";
import { Html, Float } from "@react-three/drei";
import { useEffect, useState } from "react";
import { ReactElement } from './ThreeModels/ReactElement';
import { PokemonAPI } from './ThreeModels/PokemonAPI';
import { Player } from './ThreeModels/Player';
import './ThreeList.css';

import Ping from '/Audio/Ping.mp3';
import BackgroundMusic from '/Audio/BackgroundMusic.mp3';

const projectsList = [
    {
        Id: 1,
        name: 'PlayShop',
        image: '',
        threeElement: <ReactElement />,
        Github: 'https://github.com/Misael517/Portfolio',
        Website: 'https://www.youtube.com/'
    },

    {
        Id: 2, name: 'PokeStore',
        image: '',
        threeElement: <PokemonAPI />,
        Github: 'https://github.com/Misael517/Portfolio',
        Website: 'https://www.google.com/'
    },

    {
        Id: 3,
        name: 'DevWarrior',
        image: '',
        threeElement: <Player />,
        Github: 'https://github.com/Misael517/Portfolio',
        Website: 'https://twitter.com/home'
    },
];


// Array Component to display the content inside the array
function ProjectsArray() {
    const [currentProject, setCurrentProject] = useState(0);
    const [musicPlayed, setPlayMusic] = useState(false);

    // Audio Effect in the display buttons:
    useEffect(() => {
        const audio = new Audio(Ping)
        audio.play();

        audio.volume = 0.4;

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };

    }, [currentProject]);


    // Background Music:
    const backgroundMusic = new Audio(BackgroundMusic)

    const handleNext = () => {
        if (currentProject < 2) {
            setCurrentProject(currentProject + 1);
        }

        if (musicPlayed !== true) {
            setPlayMusic(true)
            backgroundMusic.volume = 0.4;
            backgroundMusic.play();
            backgroundMusic.loop = true

        } else {

        }
    }

    const handleBack = () => {
        if (currentProject > 0) {
            setCurrentProject(currentProject - 1);
        }
    }

    return (
        <>
            {/* Content structure to Display */}
            <Html as='div' zIndexRange={[2, 2]} transform className="Display1-border" position={[0.969, -0.04, 0]} >
                <div className="Display1">
                    <div>
                        <h2 style={{ fontSize: '2rem', color: 'aqua', textAlign: 'center' }}>{projectsList[currentProject].name}</h2>
                        <button className="Pages-btn"><a href={projectsList[currentProject].Github} target='blank'>Github</a></button>
                        <button className="Pages-btn"><a href={projectsList[currentProject].Website} target='blank'>Website</a></button>
                    </div>
                    <div>
                        <button className="Display-btn" onClick={() => handleBack()}>Back</button>
                        <button className="Display-btn" onClick={() => handleNext()}>Next</button>
                    </div>
                </div>
            </Html >

            {/* Resposive  version: */}
            <Html as='div' zIndexRange={[3, 3]} transform className="Display1-border Display1B-responsive" position={[0, -0.45, 0]} >
                <div className="Display1 Display1-responsive">
                    <div>
                        <h2 style={{ fontSize: '2rem', color: 'aqua', textAlign: 'center' }}>{projectsList[currentProject].name}</h2>
                        <button className="Pages-btn"><a href={projectsList[currentProject].Github} target='blank'>Github</a></button>
                        <button className="Pages-btn"><a href={projectsList[currentProject].Website} target='blank'>Website</a></button>
                    </div>
                    <div>
                        <button className="Display-btn" onClick={() => handleBack()}>Back</button>
                        <button className="Display-btn" onClick={() => handleNext()}>Next</button>
                    </div>
                </div>
            </Html >

            {/* Project Number Display */}
            < Html as='div' zIndexRange={[1, 1]} transform className="Display2" position={[0.5837, -0.0065, 0]}>
                <h2 style={{ fontSize: '2.9rem', }}>Project:</h2>

                <h2 style={{ fontSize: '2.9rem', }}>#{projectsList[currentProject].Id}</h2>
            </Html >

            {/* Floating 3D Objects */}
            < Float
                speed={4}
                rotationIntensity={0.3}
                floatIntensity={0.3}
                floatingRange={[0, 0.1]}
            >

                {projectsList[currentProject].threeElement}
            </Float >
        </>
    )
}

const ProjectsArrayMemo = memo(ProjectsArray);

export default ProjectsArrayMemo;
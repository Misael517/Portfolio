import { memo } from "react";
import { Html, Float } from "@react-three/drei";
import { useEffect, useState } from "react";
import styles from './ThreeList.module.css';
import { OneRepublic } from "./ThreeModels/Logo3d";
import { Controller } from "./ThreeModels/Controller";
import Ping from '/Audio/Ping.mp3';
import BackgroundMusic from '/Audio/BackgroundMusic.mp3';


const projectsList = [
    {
        Id: 1,
        name: 'PlayShop',
        threeElement: <Controller />,
        Github: 'https://github.com/Misael517/PlayShopProject',
        Website: 'https://playshop.netlify.app/'
    },

    {
        Id: 2, name: 'One Republic',
        threeElement: <OneRepublic />,
        Github: 'https://github.com/Misael517/OneRepublicWebsite',
        Website: 'https://onerepublic.netlify.app/'
    },

    // {
    //     Id: 3,
    //     name: 'DevWarrior',
    //     threeElement: <Player />,
    //     Github: '#',
    //     Website: '#'
    // },
];




// Array Component to display the content inside the array
function ProjectsArray() {
    const [currentProject, setCurrentProject] = useState(0);
    const [musicPlayed, setPlayMusic] = useState(false);


    // Audio Effect in the display buttons:
    useEffect(() => {
        const audio = new Audio(Ping)
        audio.play();

        audio.volume = 0.05;

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };

    }, [currentProject]);


    // Background Music:
    const backgroundMusic = new Audio(BackgroundMusic)

    const handleNext = () => {
        if (currentProject < 1) {
            setCurrentProject(currentProject + 1);
        }

        // if (musicPlayed !== true) {
        //     setPlayMusic(true)
        //     backgroundMusic.volume = 0.4;
        //     backgroundMusic.play();
        //     backgroundMusic.loop = false

        // } else {

        // }
    }

    const handleBack = () => {
        if (currentProject > 0) {
            setCurrentProject(currentProject - 1);
        }
    }
    


// Styles to fix firefox bug
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2
      };


    return (
        <>
            {/* Content structure to Display */}
            <Html as='div' zIndexRange={[2, 2]} style={style} className={styles.display1Border} position={[0.969, -0.04, 0]} >
                <div className={styles.display1}>
                    <div className={styles.projecContent}>
                        <h2 className={styles.projectTitle}>{projectsList[currentProject].name}</h2>
                        <div className={styles.btnContainer}>
                            <button className={styles.pagesBtn}><a href={projectsList[currentProject].Website} target='blank'>Website</a></button>
                            <button className={styles.pagesBtn}><a href={projectsList[currentProject].Github} target='blank'>Github</a></button>
                        </div>
                    </div>
                    <div>
                        <button className={styles.displayBtn} onClick={handleBack}>Back</button>
                        <button className={styles.displayBtn} onClick={handleNext}>Next</button>
                    </div>
                </div>
            </Html >

             {/* Project Number Display */}
            < Html as='div' zIndexRange={[1, 1]}  style={style} className={styles.display2} position={[0.5837, -0.0065, 0]}>
                <h2 style={{ fontSize: '3.9vh', }}>Project:</h2>

                <h2 style={{ fontSize: '3.9vh', }}>#{projectsList[currentProject].Id}</h2>
            </Html >

            {/* Resposive  version: */}
            <Html as='div' zIndexRange={[3, 3]} transform scale={0.05} className={styles.display1BResponsive} position={[0, -0.45, 0]} >
                <div className={styles.display1Responsive}>
                    <div className={styles.projecContent}>
                        <h2 className={styles.projectTitle} >{projectsList[currentProject].name}</h2>
                        <div className={styles.btnContainer}>
                            <button className={styles.pagesBtn}><a href={projectsList[currentProject].Website} target='blank'>Website</a></button>
                            <button className={styles.pagesBtn}><a href={projectsList[currentProject].Github} target='blank'>Github</a></button>
                        </div>
                    </div>
                    <div>
                        <button className={styles.displayBtn} onClick={handleBack}>Back</button>
                        <button className={styles.displayBtn} onClick={handleNext}>Next</button>
                    </div>
                </div>
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

            {/* Preload: */}
            {/* <mesh position={[0, 0, -10]} scale={1}>
                <Player />
            </mesh> */}
            <mesh position={[1.5, 0, -10]} scale={1}>
                <Controller />
            </mesh>
            <mesh position={[1.5, 0, -10]} scale={1}>
                <OneRepublic />
            </mesh>

        </>
    )
}

const ProjectsArrayMemo = memo(ProjectsArray);

export default ProjectsArrayMemo;
import { memo, } from "react";
import { OrbitControls, PerspectiveCamera, Plane, SoftShadows, } from "@react-three/drei";
import { EffectComposer, DepthOfField, } from '@react-three/postprocessing'
import ProjectsArrayMemo from './ThreeList';
import { Pedestal } from "./ThreeModels/Pedestal";
import { FlyingDisplay } from "./ThreeModels/FlyingDisplay";
import { Window } from "./ThreeModels/Window";
import { MultyDisplay } from "./ThreeModels/MultyDisplay";
import { MultyDisplay2 } from "./ThreeModels/MultyDisplay2";

function ThreeElements() {
    return (
        <>
            {/* Controls, Lights, and shadows */}
            <group>
                {/* Controls */}
                {/* <OrbitControls /> */}

                {/* Main Camera */}
                <PerspectiveCamera makeDefault near={0.1} far={1000} position={[0, 0, 24]} fov={3.4} />

                {/* Post Processing */}
                <EffectComposer>
                    <DepthOfField focusDistance={0.3} bokehScale={20} focalLength={0.01} height={512} target={[0.1, 0, 0]} />
                </EffectComposer>

                {/* Ambien Light */}
                <ambientLight intensity={0.09} color={'white'} />

                {/* Spot Light */}
                <spotLight
                    color={'white'}
                    position={[0, 1, 0]}
                    distance={30}
                    intensity={2}
                    angle={0.25}
                    castShadow
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                    shadow-radius={10}
                    shadow-bias={-0.001}
                    penumbra={0.2}
                />

                {/*Soft-Shadows */}
                <SoftShadows />
            </group>


            {/* 3D Elements in the front, and HTML */}
            <group >
                {/* Pedestal */}
                <mesh>
                    <spotLight
                        color={'aqua'}
                        position={[0, -0.90, 0]}
                        distance={10}
                        intensity={1.4}
                        castShadow
                        shadow-mapSize-width={512}
                        shadow-mapSize-height={512}
                        shadow-radius={10}
                        shadow-bias={-0.001}
                        angle={0.60}
                        power={20}
                        penumbra={0.2}
                    />
                    <Pedestal />
                </mesh>

                {/* Displays, and Displays content */}
                <FlyingDisplay />
                <ProjectsArrayMemo />
            </group>



            {/* Decoration 3D Elements at the back */}
            <group>
                <Window />
                <MultyDisplay />
                <MultyDisplay2 />
            </group>



            {/* Wall and Floor */}
            <group>
                {/* Wall */}
                <Plane position={[0, 0, -4]} rotation={[0, -0.032, 0]} scale={[4, 2, 2]} receiveShadow castShadow>
                    <meshStandardMaterial color={'#303030'} />
                </Plane>

                {/* Floor */}
                <Plane position={[0, -0.71, -0.50]} rotation={[-1.59, -0, -0.032]} scale={[4, 7, 2]} receiveShadow castShadow >
                    <meshStandardMaterial color={'black'} />
                </Plane>
            </group>
        </>
    )
}

// Memo Export
const ThreeElementsMemo = memo(ThreeElements);

export default ThreeElementsMemo;


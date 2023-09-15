import { memo } from "react";
import { OrbitControls, PerspectiveCamera, Plane } from "@react-three/drei";
import ProjectsArrayMemo from './ThreeList';
import { Pedestal } from "./ThreeModels/Pedestal";
import { FlyingDisplay } from "./ThreeModels/FlyingDisplay";

function ThreeElements() {
    return (
        <>
            {/* Controls, Lights, and shadows */}
            <group>

                {/* <OrbitControls /> */}

                {/* Main Camera */}
                <PerspectiveCamera makeDefault near={0.1} far={100} position={[0, 0, 24]} fov={3.4} />

                {/* Ambien Light */}
                <ambientLight intensity={0.09} color={'white'} />

                {/* Spot Light */}
                <spotLight
                    color={'white'}
                    position={[0, 1, 0]}
                    distance={4}
                    intensity={3.2}
                    angle={0.25}
                    castShadow
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                    shadow-radius={1}
                    shadow-bias={-0.001}
                    penumbra={0.2}
                />
            </group>

            {/* 3D Elements in the front, and HTML */}
            <group >
                {/* Pedestal */}
                <mesh>
                    <spotLight
                        color={'aqua'}
                        position={[0, -0.90, 0]}
                        distance={1.9}
                        intensity={2}
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

            {/* Floor */}
            <group>
                {/* Floor */}
                <Plane position={[0, -0.71, -0.50]} rotation={[-1.59, -0, -0.032]} scale={[4, 7, 2]} receiveShadow castShadow >
                    <meshStandardMaterial color={'#303030'} />
                </Plane>
            </group>
        </>
    )
}

// Memo Export
const ThreeElementsMemo = memo(ThreeElements);

export default ThreeElementsMemo;


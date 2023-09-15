import { memo } from "react";
import { OrbitControls, PerspectiveCamera, Plane } from "@react-three/drei";
import { Window } from "./ThreeModels/Window";
import { MultyDisplay } from "./ThreeModels/MultyDisplay";
import { MultyDisplay2 } from "./ThreeModels/MultyDisplay2";

function ThreeBackground() {
    return (
        <>
            {/* Controls, Lights, and shadows */}
            <group>

                <OrbitControls />

                {/* Main Camera */}
                <PerspectiveCamera makeDefault near={0.1} far={100} position={[0, 0, 24]} fov={3.4} />

                {/* Ambien Light */}
                <ambientLight intensity={0.115} color={'white'} />

                {/* Spot Light */}

            </group>


            {/* Decoration 3D Elements at the back */}
            <group>
                <Window />
                <MultyDisplay />
                <MultyDisplay2 />
            </group>


            {/* Wall */}
            <group>
                {/* Wall */}
                <Plane position={[0, 0, -4]} rotation={[0, -0.032, 0]} scale={[4, 2, 2]} receiveShadow castShadow>
                    <meshStandardMaterial color={'black'} />
                </Plane>
            </group>
        </>
    )
}

// Memo Export
const ThreeBackgroundMemo = memo(ThreeBackground);

export default ThreeBackgroundMemo;

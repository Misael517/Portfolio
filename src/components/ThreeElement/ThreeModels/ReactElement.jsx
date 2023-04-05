/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 react.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ReactElement(props) {
  const { nodes, materials } = useGLTF('/model/LogoElement/react-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['default']} position={[0, -0.04, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.05} castShadow receiveShadow>
        <mesh geometry={nodes.Torus001.geometry} material={materials['default']} position={[0.34, -0.08, 0.02]} rotation={[-0.16, 0, -Math.PI / 2]} scale={[3.75, 1.47, 3]} />
        <mesh geometry={nodes.Torus002.geometry} material={materials['default']} position={[-0.52, -0.1, 0.16]} rotation={[-1.18, 0, -Math.PI / 2]} scale={[3.75, 1.47, 3]} />
        <mesh geometry={nodes.Torus003.geometry} material={materials['default']} position={[-0.04, -0.11, 0]} rotation={[0.89, 0, -Math.PI / 2]} scale={[3.75, 1.47, 3]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/model/LogoElement/react-transformed.glb')

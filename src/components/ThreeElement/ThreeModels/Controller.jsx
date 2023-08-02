/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 controller.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Controller(props) {
  const { nodes, materials } = useGLTF('/model/xbox/controller-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.node_id74.geometry} material={materials['108.001']} position={[0, -0.25, -0.1]} rotation={[0, -1.57, 0]} scale={0.025} />
    </group>
  )
}

useGLTF.preload('/model/xbox/controller-transformed.glb')

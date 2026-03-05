"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei"
import type { Mesh } from "three"
import * as THREE from "three"

function Blob() {
  const meshRef = useRef<Mesh>(null!)
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.2
    meshRef.current.rotation.y = t * 0.3
  })

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.3, 32]} />
        <meshPhysicalMaterial
          ref={materialRef}
          color="#ffffff"
          transmission={0.85}
          thickness={2}
          roughness={0.05}
          metalness={0.1}
          iridescence={1}
          iridescenceIOR={1.8}
          iridescenceThicknessRange={[200, 1200]}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  )
}

export function IridescentBlob() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      style={{ background: "#0a001a" }}
      gl={{ antialias: true, alpha: false }}
    >
      {/* Nhiều nguồn sáng màu để kích hoạt hiệu ứng iridescence */}
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]}   color="#ff00ff" intensity={15} />
      <pointLight position={[-5, -5, 5]}  color="#00ccff" intensity={15} />
      <pointLight position={[5, -5, -5]}  color="#aa00ff" intensity={10} />
      <pointLight position={[-5, 5, -3]}  color="#ff3399" intensity={10} />
      <spotLight
        position={[0, 10, 5]}
        angle={0.4}
        penumbra={1}
        intensity={20}
        color="#ffffff"
      />

      <Blob />

      <Environment preset="night" />
    </Canvas>
  )
}

"use client"

import { useRef, Suspense, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, MeshDistortMaterial, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

function FluidBlob() {
  const materialRef = useRef<any>(null!)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // Làm cho khối méo mó theo thời gian một cách mượt mà
    if (materialRef.current) {
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, 0.4 + Math.sin(t) * 0.2, 0.05)
    }
  })

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[1.5, 64]} />
        {/* Kết hợp giữa biến dạng (Distort) và vật lý (Physical) */}
        <MeshDistortMaterial
          ref={materialRef}
          color="#ffffff"
          speed={2}            // Tốc độ biến dạng khối lỏng
          distort={0.4}        // Độ méo
          radius={1}
          transmission={1}     // Độ trong suốt
          thickness={3}        // Độ dày (tạo chiều sâu màu bên trong)
          roughness={0}        // Siêu bóng
          metalness={0.1}
          iridescence={1}      // Tán sắc cầu vồng
          iridescenceIOR={2}   // Tăng mạnh để dải màu rõ như ảnh mẫu
          clearcoat={1}
          clearcoatRoughness={0}
          ior={1.45}
        />
      </mesh>
    </Float>
  )
}

export function IridescentBlob() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          
          {/* Đặt các đèn màu cực mạnh sát vật thể để ép màu iridescence hiện lên */}
          <pointLight position={[5, 5, 5]} color="#ff00ff" intensity={150} />
          <pointLight position={[-5, -5, 5]} color="#00ffff" intensity={120} />
          <pointLight position={[0, -5, -5]} color="#ffaa00" intensity={100} />

          <FluidBlob />

          {/* Dùng preset 'sunset' sẽ cho nhiều màu cam/hồng hơn giống ảnh mẫu */}
          <Environment preset="sunset" /> 
          
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
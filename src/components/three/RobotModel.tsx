"use client"

import { useRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Html, Center, Environment } from "@react-three/drei"
import * as THREE from "three"
import { useInView } from "framer-motion"

// ĐÃ XÓA: useGLTF.preload("/robot.glb") -> Chặn triệt để việc tải file 3D ngầm trên Mobile

function Loader() {
  return <Html center className="text-white whitespace-nowrap text-sm font-medium">Loading 3D...</Html>
}

function Model({ isMobile }: { isMobile: boolean }) {
  const { scene } = useGLTF("/robot.glb")
  const modelRef = useRef<THREE.Group>(null)

  return (
    <group rotation={[11, 0, 0]}>
      {/* Tăng scale lên vì đã bỏ <Stage> (Stage tự zoom) */}
      <primitive ref={modelRef} object={scene} scale={isMobile ? 2.5 : 3.5} />
    </group>
  )
}

export function RobotModel() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Kiểm tra xem model có đang hiển thị trên màn hình không
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <div ref={containerRef} className="w-full h-full relative z-20">
      <Canvas 
        // TỐI ƯU 1: Đóng băng hoàn toàn Canvas khi người dùng cuộn qua chỗ khác
        frameloop={isInView ? (isMobile ? "demand" : "always") : "never"} 
        shadows={!isMobile} 
        // Kéo camera lại gần (từ 8 xuống 4) để bù trừ cho việc bỏ <Stage>
        camera={{ position: [0, 0, isMobile ? 5 : 4], fov: 45 }}
        dpr={isMobile ? 1 : [1, 2]} 
        gl={{ powerPreference: "high-performance", antialias: !isMobile }}
      >
        <Suspense fallback={<Loader />}>
          {/* TỐI ƯU 2: Tự thiết lập ánh sáng tĩnh thay vì dùng <Stage> nặng nề */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow={!isMobile} />
          <Environment preset="city" />

          {/* Dùng Center để căn giữa model nhẹ nhàng nhất */}
          <Center>
            <Model isMobile={isMobile} />
          </Center>
        </Suspense>
        <OrbitControls 
          autoRotate={!isMobile} 
          autoRotateSpeed={0.5} 
          enableZoom={false}
          enablePan={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
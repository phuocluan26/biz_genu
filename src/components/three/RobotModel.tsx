"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Stage, Html } from "@react-three/drei"
import * as THREE from "three"

useGLTF.preload("/robot.glb")

function Loader() {
  return <Html center className="text-white whitespace-nowrap text-sm font-medium">Loading 3D...</Html>
}

// Thêm prop isMobile để model tự biết đường thu nhỏ và tắt hiệu ứng
function Model({ isMobile }: { isMobile: boolean }) {
  const { scene } = useGLTF("/robot.glb")
  const modelRef = useRef<THREE.Group>(null)

  return (
    <group rotation={[11, 0, 0]}>
      {/* Thu nhỏ một chút trên mobile để không bị cắt viền */}
      <primitive ref={modelRef} object={scene} scale={isMobile ? 0.7 : 0.9} />
    </group>
  )
}

export function RobotModel() {
  // FIX LỖI CRASH CANVAS: Kiểm tra thiết bị ngay lập tức thay vì dùng useState + useEffect
  // Vì file này đã được bọc bằng next/dynamic (ssr: false) ở Hero.tsx,
  // nên window chắc chắn đã tồn tại ngay ở lần render đầu tiên.
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <div className="w-full h-full relative z-20">
      <Canvas 
        // ĐÓNG BĂNG FRAME TRÊN MOBILE: "demand" nghĩa là web chỉ tính toán 3D khi người dùng lấy tay tương tác.
        // Bình thường nó sẽ ăn 0% tài nguyên -> Cuộn trang cực mượt!
        frameloop={isMobile ? "demand" : "always"} 
        shadows={!isMobile} 
        camera={{ position: [0, 0, isMobile ? 10 : 8], fov: 45 }}
        dpr={isMobile ? 1 : [1, 2]} 
        gl={{ powerPreference: "high-performance", antialias: !isMobile }}
      >
        <Suspense fallback={<Loader />}>
          <Stage 
            adjustCamera={isMobile ? 1.2 : 1.5} 
            intensity={0.8} 
            environment="city"
          >
            <Model isMobile={isMobile} />
          </Stage>
        </Suspense>
        <OrbitControls 
          autoRotate={!isMobile} // Bắt buộc tắt tự quay trên mobile để tính năng "demand" hoạt động
          autoRotateSpeed={0.5} 
          enableZoom={false}
          enablePan={false} // Không cho kéo trượt ngang model
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
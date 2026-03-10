"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

// 1. Component vẽ Mạng lưới (Neural Network / Constellation)
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const particles: any[] = []
    const particleCount = 80 // Số lượng điểm sáng

    // Khởi tạo các hạt
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8, // Tốc độ bay
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? "#ec4899" : "#a855f7" // Trộn màu Hồng và Tím
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Vẽ đường nối giữa các hạt gần nhau
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) { // Khoảng cách để xuất hiện đường nối
            ctx.beginPath()
            ctx.strokeStyle = `rgba(168, 85, 247, ${1 - distance / 150})` // Đường nối màu tím phát sáng
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Vẽ các hạt sáng (Dots)
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        // Đập tường dội lại
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        // Hiệu ứng Glow cho chấm tròn
        ctx.shadowBlur = 15
        ctx.shadowColor = p.color
        ctx.fill()
      }

      requestAnimationFrame(draw)
    }

    draw()

    // Cập nhật lại kích thước khi xoay màn hình điện thoại
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50" />
}

// 2. Component xuất ra ngoài (Bao gồm Cả Quầng sáng + Mạng lưới)
export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0f]">
      {/* Mạng lưới hạt sáng */}
      <ParticleNetwork />

      {/* Quầng sáng khổng lồ 1 (Hồng) */}
      <motion.div 
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pink-600/15 rounded-full blur-[120px]"
      />
      {/* Quầng sáng khổng lồ 2 (Tím) */}
      <motion.div 
        animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/15 rounded-full blur-[150px]"
      />
      {/* Quầng sáng khổng lồ 3 (Xanh lục/Vàng) */}
      <motion.div 
        animate={{ x: [0, 50, 0], y: [0, -100, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-emerald-500/10 rounded-full blur-[120px]"
      />
    </div>
  )
}
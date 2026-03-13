"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Lấy tiến độ cuộn trang từ 0 đến 1
  const { scrollYProgress } = useScroll()
  
  // Làm mượt chuyển động của vòng tròn progress
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })

  useEffect(() => {
    // 1. ÉP TRÌNH DUYỆT CUỘN LÊN ĐẦU TRANG KHI RELOAD
    if (typeof window !== "undefined") {
      // Tắt tính năng tự động ghi nhớ vị trí cuộn mặc định của trình duyệt
      window.history.scrollRestoration = "manual"
      // Cuộn thẳng lên top không cần animation
      window.scrollTo(0, 0)
    }

    // 2. HIỂN THỊ NÚT KHI CUỘN XUỐNG
    const toggleVisibility = () => {
      // Hiện nút sau khi cuộn xuống 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-[100] cursor-pointer group flex items-center justify-center"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3, type: "spring" }}
      onClick={scrollToTop}
    >
      {/* Vòng tròn Progress SVG */}
      <svg width="56" height="56" viewBox="0 0 100 100" className="transform -rotate-90 drop-shadow-lg">
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />   {/* pink-500 */}
            <stop offset="50%" stopColor="#a855f7" />  {/* purple-500 */}
            <stop offset="100%" stopColor="#eab308" /> {/* yellow-500 */}
          </linearGradient>
        </defs>
        
        {/* Vòng nền xám mờ */}
        <circle
          cx="50"
          cy="50"
          r="46"
          className="stroke-white/10"
          strokeWidth="6"
          fill="none"
        />
        
        {/* Vòng Progress chạy theo tiến độ */}
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#progress-gradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>

      {/* Icon Mũi tên ở giữa */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[42px] h-[42px] bg-zinc-900/90 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-zinc-800 transition-colors border border-white/5 shadow-inner">
          <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  )
}
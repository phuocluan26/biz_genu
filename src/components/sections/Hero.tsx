"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mic, Sparkles } from "lucide-react"

// Import RobotModel động để tránh lỗi render từ server (SSR) và tối ưu loading
const RobotModel = dynamic(
  () => import("@/components/three/RobotModel").then((mod) => mod.RobotModel),
  { 
    ssr: false, 
    loading: () => (
      <div className="w-full h-full flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin opacity-50" />
      </div>
    ) 
  }
)

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/grid.png')] bg-repeat opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-col-reverse lg:flex-row">
          
          {/* CỘT TRÁI: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left z-10"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black tracking-tight leading-[1.1] mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              TRỢ LÝ AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500">
                GENU
              </span>
            </motion.h1>
            
            <motion.h2
              className="text-lg md:text-xl text-zinc-100 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Người Bạn Đồng Hành Thông Minh Trên Bàn Của Bạn.
            </motion.h2>

            <motion.p 
              className="text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Giao tiếp hoàn toàn bằng giọng nói tự nhiên. Genu giúp bạn giải đáp bài tập hóc búa, khám phá kiến thức bách khoa vô tận và tạo động lực học tập mỗi ngày qua những tương tác sinh động.
            </motion.p>
            
            <motion.div
              className="grid grid-cols-2 gap-x-4 gap-y-4 max-w-lg mx-auto lg:mx-0 mb-10 text-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="flex items-center gap-3">
                  <Mic className="w-6 h-6 text-pink-400" />
                  <span className="text-base md:text-lg font-medium">Nhận Diện Giọng Nói</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span className="text-base md:text-lg font-medium">Hỏi Đáp Thông Minh</span>
                </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="primary" size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] font-bold px-8">
                TÌM HIỂU THÊM
              </Button>
            </motion.div>
          </motion.div>

          {/* CỘT PHẢI: HIỂN THỊ ROBOT 3D (Đã được khôi phục) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full flex justify-center items-center h-[400px] lg:h-[600px] order-first lg:order-last"
          >
            {/* Background glow sau lưng Robot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-tr from-pink-500/30 to-purple-600/30 rounded-full blur-3xl pointer-events-none" />
            
            {/* Render RobotModel từ Three.js */}
            <div className="w-full h-full absolute inset-0">
              <RobotModel />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
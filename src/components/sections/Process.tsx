"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mic, BrainCircuit, Volume2, RefreshCw, ArrowUpRight } from "lucide-react"

const processes = [
  {
    id: "01",
    title: "Lắng Nghe Đa Hướng",
    description: "Hệ thống micro khử ồn thông minh giúp Genu bắt trọn từng từ bạn nói. Chỉ cần cất giọng, Genu luôn sẵn sàng.",
    color: "pink",
  },
  {
    id: "02",
    title: "Phân Tích Ngữ Cảnh",
    description: "Lõi AI phân tích từ vựng, ngữ điệu và cảm xúc, lập tức kết nối với kho dữ liệu để tìm ra câu trả lời chuẩn xác nhất.",
    color: "purple",
  },
  {
    id: "03",
    title: "Phản Hồi Đa Giác Quan",
    description: "Trả lời bằng giọng nói tự nhiên, ấm áp kết hợp cùng những biểu cảm khuôn mặt sinh động trên màn hình tương tác.",
    color: "yellow",
  },
  {
    id: "04",
    title: "Ghi Nhớ & Thích Ứng",
    description: "Học hỏi sau mỗi cuộc trò chuyện, tự động ghi nhớ sở thích để những lần tương tác sau càng thêm gắn kết.",
    color: "emerald",
  },
]

// Component chứa các hiệu ứng Hoạt ảnh đại diện cho từng bước
const ProcessVisual = ({ activeId }: { activeId: string }) => {
  switch (activeId) {
    case "01": // Hiệu ứng Sóng âm thanh (Soundwave)
      return (
        <div className="flex items-center justify-center gap-2 h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="w-3 rounded-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)]"
              animate={{ height: ["20%", "80%", "20%"] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      )
    case "02": // Hiệu ứng Mạng lưới xử lý (Neural Network / Core)
      return (
        <div className="relative flex items-center justify-center h-full w-full">
          <motion.div 
            className="absolute w-16 h-16 bg-purple-500 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.8)]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-32 h-32 border border-purple-400/50 rounded-full border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]" />
          </motion.div>
        </div>
      )
    case "03": // Hiệu ứng Phát âm thanh (Ripples / Speaking)
      return (
        <div className="relative flex items-center justify-center h-full">
          <div className="absolute z-10 w-12 h-12 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,1)]" />
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              className="absolute w-12 h-12 border-2 border-yellow-400 rounded-full"
              animate={{ scale: [1, 4], opacity: [0.8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.6,
              }}
            />
          ))}
        </div>
      )
    case "04": // Hiệu ứng Đồng bộ (Sync / Infinity Loading)
      return (
        <div className="relative flex items-center justify-center h-full">
          <motion.div
            className="w-24 h-24 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-16 h-16 border-4 border-emerald-400/20 border-b-emerald-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <RefreshCw className="absolute text-emerald-400 w-6 h-6" />
        </div>
      )
    default:
      return null
  }
}

export function Process() {
  const [activeProcess, setActiveProcess] = useState<string>("01")

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left Column: Heading & Visuals */}
          <div className="md:w-1/2 flex flex-col h-full sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 uppercase">
                  Cách Genu Hoạt Động
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Tương Tác Tự Nhiên. <br /> Phản Hồi Tức Thì.
              </h2>
              <p className="text-zinc-400 text-lg max-w-md mb-12">
                Khám phá luồng xử lý thông minh siêu tốc (chưa đến 0.2 giây) ẩn sau mỗi cuộc trò chuyện, giúp Genu thấu hiểu bạn như một người bạn thực thụ.
              </p>
            </motion.div>

            {/* Khung hiển thị Hoạt ảnh Abstract */}
            <div className="relative h-[300px] w-full rounded-3xl overflow-hidden hidden md:block border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProcess}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 p-8"
                >
                  <div className="w-full h-full border border-white/5 rounded-2xl bg-zinc-950/50 flex items-center justify-center overflow-hidden">
                    <ProcessVisual activeId={activeProcess} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Process List */}
          <div className="md:w-1/2 space-y-6">
            {processes.map((process, index) => {
              const isActive = activeProcess === process.id
              
              // Map màu viền và text khi active
              const colorClasses: Record<string, { text: string, bg: string }> = {
                "01": { text: "text-pink-500", bg: "from-pink-500/10" },
                "02": { text: "text-purple-500", bg: "from-purple-500/10" },
                "03": { text: "text-yellow-400", bg: "from-yellow-400/10" },
                "04": { text: "text-emerald-400", bg: "from-emerald-400/10" },
              }
              const activeColor = colorClasses[process.id]

              return (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveProcess(process.id)}
                  onClick={() => setActiveProcess(process.id)}
                  className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden group ${
                    isActive 
                      ? "bg-white/10 border-white/20" 
                      : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10"
                  } border`}
                >
                  {/* Background glow when active */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeProcessBg"
                      className={`absolute inset-0 bg-gradient-to-r ${activeColor.bg} to-transparent pointer-events-none`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:items-center">
                    <span className={`text-4xl md:text-5xl font-heading font-bold transition-colors duration-500 ${
                      isActive ? activeColor.text : "text-zinc-600 group-hover:text-zinc-400"
                    }`}>
                      {process.id}
                    </span>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl md:text-2xl font-heading font-semibold mb-2 transition-colors duration-500 ${
                        isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                      }`}>
                        {process.title}
                      </h3>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-zinc-400 leading-relaxed text-sm md:text-base mt-4"
                          >
                            {process.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={`mt-4 sm:mt-0 transition-all duration-500 shrink-0 ${
                      isActive ? "text-white rotate-0" : "text-zinc-600 group-hover:text-white -rotate-45"
                    }`}>
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
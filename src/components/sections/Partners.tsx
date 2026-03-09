"use client"

import { motion } from "framer-motion"
import { Sparkles, BookOpen, Music, Globe, BrainCircuit } from "lucide-react"

export function Partners() {
  // Danh sách các nền tảng tích hợp (Thay vì đối tác doanh nghiệp)
  const integrations = [
    { name: "OpenAI", icon: <BrainCircuit className="w-6 h-6" />, color: "text-emerald-400" },
    { name: "Wikipedia", icon: <Globe className="w-6 h-6" />, color: "text-zinc-300" },
    { name: "Spotify", icon: <Music className="w-6 h-6" />, color: "text-green-500" },
    { name: "Oxford Dict", icon: <BookOpen className="w-6 h-6" />, color: "text-blue-400" },
    { name: "Duolingo", icon: <Sparkles className="w-6 h-6" />, color: "text-yellow-400" },
    // Lặp lại để dải băng chuyền chạy mượt không bị đứt quãng
    { name: "OpenAI", icon: <BrainCircuit className="w-6 h-6" />, color: "text-emerald-400" },
    { name: "Wikipedia", icon: <Globe className="w-6 h-6" />, color: "text-zinc-300" },
    { name: "Spotify", icon: <Music className="w-6 h-6" />, color: "text-green-500" },
    { name: "Oxford Dict", icon: <BookOpen className="w-6 h-6" />, color: "text-blue-400" },
    { name: "Duolingo", icon: <Sparkles className="w-6 h-6" />, color: "text-yellow-400" },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-pink-500 font-bold tracking-widest text-sm uppercase mb-4"
          >
            Hệ sinh thái tri thức
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Sức Mạnh Từ Các Nền Tảng Hàng Đầu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400"
          >
            Genu kết nối trực tiếp với các kho dữ liệu khổng lồ, mang đến câu trả lời chính xác và trải nghiệm giải trí phong phú nhất.
          </motion.p>
        </div>
      </div>

      {/* Dải băng chuyền (Marquee) chạy ngang */}
      <div className="relative w-full overflow-hidden flex bg-white/5 py-8 backdrop-blur-sm">
        {/* Lớp gradient mờ 2 bên mép để tạo cảm giác fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

        <motion.div 
          className="flex gap-16 whitespace-nowrap px-8 items-center"
          animate={{ x: [0, -1000] }} // Điều chỉnh số -1000 tùy theo độ dài thực tế để lặp mượt
          transition={{
            repeat: Infinity,
            duration: 20, // Tốc độ chạy (số càng lớn chạy càng chậm)
            ease: "linear"
          }}
        >
          {integrations.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default"
            >
              <span className={item.color}>{item.icon}</span>
              <span className="text-2xl font-bold text-zinc-300 font-heading tracking-wide">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
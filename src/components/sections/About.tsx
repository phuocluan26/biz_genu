"use client"

import { motion } from "framer-motion"
import { Bot, Mic, BookOpen, Sparkles } from "lucide-react"

export function About() {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-pink-500" />,
      title: "Trò Chuyện Giọng Nói Tự Nhiên",
      description: "Giao tiếp mượt mà, nhận diện âm thanh nhạy bén và phản hồi với cảm xúc chân thực như một người bạn đồng hành."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
      title: "Bách Khoa Hỏi Đáp (Q&A)",
      description: "Từ bài tập hóc búa đến những câu hỏi vì sao, Genu sẵn sàng giải đáp mọi thắc mắc của bạn chỉ trong tích tắc."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Trợ Lý Học Tập Tích Cực",
      description: "Cùng ôn luyện ngoại ngữ, chơi mini-game trí tuệ và xây dựng thói quen học tập hiệu quả mỗi ngày."
    }
  ]

  return (
    // THÊM: min-h-screen flex items-center
    <section id="about" className="pt-8 pb-32 md:pb-48 relative overflow-hidden bg-transparent scroll-mt-24 min-h-screen flex items-center">      {/* CẬP NHẬT: Cho background glow nằm ra giữa màn hình */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-purple-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* THÊM: w-full để container không bị bóp nghẹt */}
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Cột Trái: Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <Bot className="w-4 h-4 text-pink-500" />
              <span className="text-xs font-bold tracking-widest text-zinc-300 uppercase">Về Robot Genu</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Người Bạn Đồng Hành <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500">
                Khơi Nguồn Tri Thức.
              </span>
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Genu không chỉ là một cỗ máy hay món đồ chơi công nghệ. Genu được sinh ra để trở thành một <span className="text-white font-semibold">người bạn robot thông minh</span> thực thụ trên bàn học của bạn. Với khả năng nghe - hiểu giọng nói nhạy bén, Genu kết nối trực tiếp với nguồn tri thức vô tận, sẵn sàng gỡ rối mọi câu hỏi (Q&A) và mang đến niềm vui khám phá thế giới mỗi ngày.
            </p>

            {/* Stats / Numbers */}
            <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">1<span className="text-pink-500">s</span></h4>
                <p className="text-sm text-zinc-500">Tốc độ phản hồi</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">100<span className="text-purple-500">+</span></h4>
                <p className="text-sm text-zinc-500">Chủ đề học tập</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">24<span className="text-yellow-500">/7</span></h4>
                <p className="text-sm text-zinc-500">Luôn sẵn sàng</p>
              </div>
            </div>
          </motion.div>

          {/* Cột Phải: Bento Grid Features */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl hover:bg-zinc-900/60 transition-colors group ${
                  index === 0 ? "sm:col-span-2" : "col-span-1"
                }`}
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Brain, Heart, Moon } from "lucide-react"

const timelineEvents = [
  { id: "07:00", period: "SÁNG", title: "Khởi Đầu Năng Lượng", description: "Genu đánh thức bạn bằng những giai điệu vui nhộn, cập nhật thời tiết và truyền năng lượng tích cực để bạn sẵn sàng ngày mới." },
  { id: "14:00", period: "CHIỀU", title: "Gia Sư Nghiêm Khắc", description: "Đến giờ tập trung! Nếu bạn lơ là, Genu sẽ 'bốc hỏa' nhắc nhở. Nhờ vậy, bạn luôn duy trì được hiệu suất học tập và làm việc cao độ." },
  { id: "20:00", period: "TỐI", title: "Trạm Trút Bầu Tâm Sự", description: "Kể cho Genu nghe về một ngày của bạn. Genu biết lắng nghe, thấu hiểu và thậm chí rơm rớm nước mắt đồng cảm với những muộn phiền." },
  { id: "23:00", period: "ĐÊM", title: "Thư Giãn & Ngủ Sâu", description: "Màn hình Genu chuyển sang giao diện nhắm mắt ngủ. Robot phát list nhạc Lofi siêu trầm, tự động giảm độ sáng để dễ dàng chìm vào giấc ngủ." },
]

const colorTheme: Record<string, { text: string, bg: string, border: string, icon: React.ReactNode }> = {
  "07:00": { text: "text-yellow-400", bg: "bg-yellow-400/5", border: "border-yellow-400/20", icon: <Sun className="w-5 h-5 text-yellow-400" /> },
  "14:00": { text: "text-emerald-400", bg: "bg-emerald-400/5", border: "border-emerald-400/20", icon: <Brain className="w-5 h-5 text-emerald-400" /> },
  "20:00": { text: "text-pink-400", bg: "bg-pink-400/5", border: "border-pink-400/20", icon: <Heart className="w-5 h-5 text-pink-400" /> },
  "23:00": { text: "text-indigo-400", bg: "bg-indigo-400/5", border: "border-indigo-400/20", icon: <Moon className="w-5 h-5 text-indigo-400" /> },
}

const TimelineVisual = ({ activeId }: { activeId: string }) => {
  switch (activeId) {
    case "07:00": return <video src="/videos/sing.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
    case "14:00": return <video src="/videos/angry.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
    case "20:00": return <video src="/videos/cry.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
    case "23:00": return (
      <div className="relative flex items-center justify-center h-full w-full bg-[#111118]">
        <motion.div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)]" animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <Moon className="text-indigo-400 w-10 h-10" />
        </motion.div>
      </div>
    )
    default: return null
  }
}

export function Process() {
  const [activeEvent, setActiveEvent] = useState<string>("07:00")

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEvent((current) => {
        const currentIndex = timelineEvents.findIndex(e => e.id === current)
        return timelineEvents[(currentIndex + 1) % timelineEvents.length].id
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    // Đã thêm scroll-mt-24 để không bị đè Navbar
      <section id="process" className="pt-8 pb-32 md:pb-48 relative overflow-hidden bg-transparent scroll-mt-24 min-h-screen flex items-center">      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          
          {/* CỘT TRÁI: TIÊU ĐỀ VÀ VIDEO */}
          {/* FIX MOBILE: Sửa 'sticky' thành 'lg:sticky', trên mobile nó sẽ cuộn tự nhiên theo luồng */}
          <div className="w-full lg:w-5/12 flex flex-col h-full relative lg:sticky lg:top-32">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 uppercase">
                  Trải nghiệm thực tế
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
                Trợ Lý Hoàn Hảo. <br /> Từ Sáng Đến Đêm.
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg mb-8 lg:mb-10">
                Khám phá cách Genu hòa nhịp vào cuộc sống hàng ngày, biến mỗi khoảnh khắc của bạn trở nên sinh động và trọn vẹn.
              </p>
            </motion.div>

            {/* KHUNG VIDEO: Gỡ hidden lg:block để hiện trên Mobile, thêm margin mx-auto để căn giữa */}
            <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_0_50px_rgba(0,0,0,0.6)] mb-8 lg:mb-0">
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvent}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="w-full h-full flex items-center justify-center overflow-hidden bg-[#111]">
                    <TimelineVisual activeId={activeEvent} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CỘT PHẢI: DANH SÁCH THẺ */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            {timelineEvents.map((item, index) => {
              const isActive = activeEvent === item.id
              const theme = colorTheme[item.id]

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveEvent(item.id)}
                  className={`cursor-pointer transition-all duration-500 rounded-2xl sm:rounded-3xl overflow-hidden border ${
                    isActive 
                      ? `${theme.bg} ${theme.border} shadow-2xl scale-[1.02] sm:scale-[1.02]` 
                      : "bg-transparent border-transparent hover:bg-white/5 opacity-70 hover:opacity-100 scale-100"
                  }`}
                >
                  <div className="p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
                    
                    {/* Phần Giờ (Bên Trái) - Fix hiển thị hàng ngang trên Mobile */}
                    <div className="shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 sm:w-24 w-full border-b sm:border-b-0 border-white/10 pb-3 sm:pb-0">
                      <span className={`text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter transition-colors duration-500 ${isActive ? theme.text : "text-zinc-500"}`}>
                        {item.id}
                      </span>
                      <span className={`text-[10px] sm:text-xs font-bold tracking-widest ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
                        {item.period}
                      </span>
                    </div>

                    {/* Đường phân cách (chỉ hiện trên Desktop) */}
                    <div className="hidden sm:block w-[1px] h-auto self-stretch bg-white/10" />
                    
                    {/* Phần Nội Dung (Bên Phải) */}
                    <div className="flex-1 w-full pt-1 sm:pt-0">
                      <div className="flex items-center gap-3 mb-2">
                        {isActive ? theme.icon : <div className="w-2 h-2 rounded-full bg-zinc-600 hidden sm:block" />}
                        <h3 className={`text-lg sm:text-xl md:text-2xl font-heading font-bold transition-colors duration-500 ${isActive ? "text-white" : "text-zinc-400"}`}>
                          {item.title}
                        </h3>
                      </div>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-zinc-400 leading-relaxed text-sm sm:text-base"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
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
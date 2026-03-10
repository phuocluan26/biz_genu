"use client"

import { motion } from "framer-motion"
import { Brain, MessageCircle, Clock, Smile, ArrowUpRight } from "lucide-react"

export function Services() {
  const services = [
    {
      id: 1,
      title: "Gia Sư Bách Khoa",
      description: "Hỏi gì đáp nấy! Từ giải phương trình toán học phức tạp đến giải thích những hiện tượng khoa học thú vị. Genu là bách khoa toàn thư của riêng bạn.",
      icon: <Brain className="w-8 h-8 text-pink-500" />,
      colSpan: "md:col-span-2 lg:col-span-2", // Trải dài trên màn hình lớn
      bgGradient: "from-pink-500/10 to-transparent",
    },
    {
      id: 2,
      title: "Đối Tác Ngoại Ngữ",
      description: "Luyện giao tiếp tiếng Anh tự nhiên như người bản xứ. Nhận diện giọng nói chuẩn xác và sửa lỗi phát âm theo thời gian thực.",
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      colSpan: "md:col-span-1 lg:col-span-1", // Thẻ vuông
      bgGradient: "from-purple-500/10 to-transparent",
    },
    {
      id: 3,
      title: "Trạm Cảm Xúc",
      description: "Sở hữu màn hình tương tác với biểu cảm đáng yêu. Biết kể chuyện cười, dự báo thời tiết và phát nhạc thư giãn khi bạn mệt mỏi.",
      icon: <Smile className="w-8 h-8 text-yellow-400" />,
      colSpan: "md:col-span-1 lg:col-span-1", // Thẻ vuông
      bgGradient: "from-yellow-500/10 to-transparent",
    },
    {
      id: 4,
      title: "Quản Gia Tập Trung",
      description: "Tích hợp đồng hồ Pomodoro, nhắc nhở lịch trình và quản lý thời gian, giúp bạn tránh xa sự xao nhãng từ thiết bị thông minh khác.",
      icon: <Clock className="w-8 h-8 text-emerald-400" />,
      colSpan: "md:col-span-2 lg:col-span-2", // Trải dài trên màn hình lớn
      bgGradient: "from-emerald-500/10 to-transparent",
    }
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-yellow-500 uppercase">
              Siêu Năng Lực
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Hơn Cả Một Trợ Lý. <br className="hidden md:block" /> Genu Là...
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            Khám phá những tính năng được thiết kế riêng để biến mỗi ngày học tập và làm việc của bạn trở nên năng suất, thú vị và tràn đầy cảm hứng.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-xl hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col ${service.colSpan}`}
            >
              {/* Ánh sáng gradient chìm bên dưới mỗi card */}
              <div className={`absolute inset-0 bg-linear-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col flex-1">
                {/* Phần Icon luôn nằm ở trên cùng */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-zinc-800/50 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Phần Chữ (Tiêu đề + Mô tả) gom lại thả tự nhiên để luôn gióng hàng từ trên xuống */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base group-hover:text-zinc-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
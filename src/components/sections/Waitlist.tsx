"use client"

import { motion } from "framer-motion"
import { Award, TicketPercent, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Turnstile } from '@marsidev/react-turnstile' // Import thư viện Turnstile

export function Waitlist() {
  return (
    <section id="waitlist" className="py-24 relative overflow-hidden bg-zinc-950 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-yellow-500 uppercase">
              Pre-Launch Đặc Quyền
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Sở Hữu Genu Sớm Nhất.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            Đăng ký ngay để ghi tên vào danh sách chờ. Nhận đặc quyền phiên bản giới hạn và ưu đãi độc quyền khi sản phẩm chính thức ra mắt.
          </motion.p>
        </div>

        {/* Bento Grid cho Waitlist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          {/* Card 1: Founder's Edition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="col-span-1 lg:col-span-2 p-6 rounded-3xl bg-linear-to-br from-yellow-500/20 to-zinc-900 border border-yellow-500/30 flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 border border-yellow-500/50">
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">FOUNDER'S EDITION</h3>
              <p className="text-zinc-400 text-sm">- Số lượng cực kỳ có hạn</p>
            </div>
          </motion.div>

          {/* Card 2: Voucher */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="col-span-1 lg:col-span-2 p-6 rounded-3xl bg-zinc-900/50 border border-white/10 flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0 border border-pink-500/30 border-dashed">
              <TicketPercent className="w-8 h-8 text-pink-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">ƯU ĐÃI 30%</h3>
              <p className="text-zinc-400 text-sm">- Áp dụng cho đơn hàng đầu tiên</p>
            </div>
          </motion.div>

          {/* Card 3: Hình ảnh Exploded View (Đã fix lỗi làm mờ ảnh) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="col-span-1 lg:col-span-2 rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden relative min-h-[320px]"
          >
            {/* linear giờ chỉ phủ rất mỏng ở dưới đáy để làm nổi chữ, không làm tối hình ảnh */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />
            
            <Image 
              src="/image/shape.jpg" 
              alt="Genu Core AI"
              fill
              // Gỡ bỏ hoàn toàn opacity-80 và padding, dùng object-cover để bung viền
              className="object-cover"
              priority
            />
            
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-xl font-bold text-white mb-1">Kiến Trúc Tương Lai</h3>
              <p className="text-sm text-zinc-300">Thiết kế phần cứng hoàn mỹ.</p>
            </div>
          </motion.div>

          {/* Card 4: Form Đăng Ký (Có tích hợp Cloudflare Turnstile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="col-span-1 lg:col-span-2 p-6 md:p-8 rounded-3xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-center"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Tên của bạn..." 
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email liên hệ..." 
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              {/* CLOUDFLARE TURNSTILE WIDGET */}
              <div className="flex justify-center py-1">
                <Turnstile 
                  // Lưu ý: Đây là Site Key Test của Cloudflare (luôn pass). 
                  // Khi đem website lên Live, bạn cần tạo Site Key thật trên Dashboard Cloudflare và thay vào đây nhé!
                  siteKey="1x00000000000000000000AA" 
                  options={{
                    theme: 'dark', // Đồng bộ giao diện tối của website
                  }}
                  onSuccess={(token) => {
                    console.log("Turnstile passed, token:", token);
                    // Ở đây bạn sẽ gài code gửi token này lên Backend (Go/C#) của bạn để verify
                  }}
                />
              </div>

              <button className="w-full py-4 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center gap-2 group">
                ĐĂNG KÝ NGAY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
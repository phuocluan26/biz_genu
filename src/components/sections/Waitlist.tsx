"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, TicketPercent, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { Turnstile } from '@marsidev/react-turnstile'

export function Waitlist() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Vui lòng điền đầy đủ thông tin!")
      return
    }

    if (!turnstileToken) {
      alert("Vui lòng xác thực bạn không phải là robot!")
      return
    }

    // 1. Đóng gói dữ liệu
    const payload = { ...formData, token: turnstileToken }

    // 2. BẬT TRẠNG THÁI THÀNH CÔNG NGAY LẬP TỨC (Không cần chờ API)
    setStatus("success")
    setFormData({ name: "", email: "", phone: "" }) // Xóa trắng form

    // 3. Chạy lệnh gửi API ngầm phía sau (Fire and forget)
    try {
      fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch((err) => console.error("Lỗi gửi background:", err))
    } catch (error) {
      console.error("Lỗi fetch:", error)
    }
  }

  return (
      <section id="waitlist" className="pt-8 pb-24 relative overflow-hidden bg-transparent scroll-mt-24 min-h-screen flex items-center">      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-yellow-500 uppercase">Pre-Launch Đặc Quyền</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Sở Hữu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500">
              Genu
            </span> Sớm Nhất.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-zinc-400 text-base sm:text-lg px-2">
            Đăng ký ngay để ghi tên vào danh sách chờ. Nhận đặc quyền phiên bản giới hạn và ưu đãi độc quyền khi sản phẩm chính thức ra mắt.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="col-span-1 md:col-span-1 lg:col-span-2 p-5 sm:p-6 rounded-3xl bg-linear-to-br from-yellow-500/20 to-zinc-900 border border-yellow-500/30 flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 border border-yellow-500/50">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">FOUNDER'S EDITION</h3>
              <p className="text-zinc-400 text-xs sm:text-sm">- Số lượng cực kỳ có hạn</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="col-span-1 md:col-span-1 lg:col-span-2 p-5 sm:p-6 rounded-3xl bg-zinc-900/50 border border-white/10 flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0 border border-pink-500/30 border-dashed">
              <TicketPercent className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">ƯU ĐÃI 30%</h3>
              <p className="text-zinc-400 text-xs sm:text-sm">- Áp dụng đơn hàng đầu tiên</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden relative min-h-[280px] sm:min-h-[320px]">
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />
            <Image src="/image/shape.jpg" alt="Genu Core AI" fill className="object-cover" priority />
            <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 z-20 pr-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Kiến Trúc Tương Lai</h3>
              <p className="text-xs sm:text-sm text-zinc-300">Thiết kế phần cứng hoàn mỹ.</p>
            </div>
          </motion.div>

          {/* Card 4: Form Đăng Ký */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="col-span-1 md:col-span-2 lg:col-span-2 p-5 sm:p-6 md:p-8 rounded-3xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-center">
            
            {status === "success" ? (
              // Giao diện khi đăng ký thành công
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/50">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Đăng Ký Thành Công!</h3>
                <p className="text-zinc-400">Cảm ơn bạn. Chúng tôi sẽ sớm liên hệ khi có thông tin mới nhất về Genu.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-pink-400 hover:text-pink-300 underline">Đăng ký thêm người khác</button>
              </div>
            ) : (
              // Giao diện Form
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Tên của bạn..." 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={status === "loading"}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-pink-500 transition-colors text-sm sm:text-base disabled:opacity-50"
                  />
                  <input 
                    type="email" 
                    placeholder="Email liên hệ..." 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={status === "loading"}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-pink-500 transition-colors text-sm sm:text-base disabled:opacity-50"
                  />
                  <input 
                    type="tel" 
                    placeholder="Số điện thoại..." 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    disabled={status === "loading"}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-pink-500 transition-colors text-sm sm:text-base disabled:opacity-50"
                  />
                </div>

                <div className="flex justify-center py-2 w-full overflow-hidden">
                  <div className="scale-[0.85] sm:scale-100 origin-center transition-transform">
                    <Turnstile 
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} 
                      options={{ theme: 'dark' }}
                      onSuccess={(token) => setTurnstileToken(token)}
                    />
                  </div>
                </div>

                <button 
                  disabled={status === "loading" || !turnstileToken}
                  className="w-full py-3 sm:py-4 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-bold text-base sm:text-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "ĐANG XỬ LÝ..." : "ĐĂNG KÝ NGAY"}
                  {status !== "loading" && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
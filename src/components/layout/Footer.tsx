"use client"

import Link from "next/link"
import { MapPin, Mail, Hash, ArrowRight, Bot, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-purple-900/20 via-pink-900/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[url('/images/grid.png')] bg-repeat opacity-5 pointer-events-none mask-image-fade" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Phần 1: Lời kêu gọi hành động (CTA) cực mạnh */}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-xl mb-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
              Sẵn sàng đón nhận tương lai?
            </h2>
            <p className="text-zinc-400">Ghi tên vào danh sách chờ và trở thành những người đầu tiên sở hữu Genu.</p>
          </div>
          
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative z-10 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-lg hover:bg-zinc-200 hover:scale-105 transition-all flex items-center gap-2"
          >
            ĐĂNG KÝ NGAY
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Phần 2: Nội dung chính của Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Cột 1: Thông tin thương hiệu BizGenie */}
          <div className="col-span-1 md:col-span-12 lg:col-span-5 flex flex-col">
            <Link href="/" className="inline-block mb-2">
              {/* Tên công ty với Gradient giống ảnh mẫu */}
              <span className="text-4xl font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300">
                GENU
              </span>
            </Link>
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">
              Trợ Lý AI - Khơi Nguồn Tri Thức
            </span>

            <div className="pl-4 border-l-2 border-pink-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">
                CÔNG TY CP GIẢI PHÁP <br /> & CÔNG NGHỆ BIZGENIE
              </h3>
            </div>
            
            <p className="text-zinc-400 mt-6 leading-relaxed max-w-sm">
              Chúng tôi tiên phong ứng dụng công nghệ Trí tuệ nhân tạo (AI) và học máy để kiến tạo những sản phẩm công nghệ đột phá, nâng tầm chất lượng cuộc sống và tối ưu hóa vận hành doanh nghiệp.
            </p>
          </div>

          {/* Cột 2: Điều hướng nhanh */}
          <div className="col-span-1 md:col-span-5 lg:col-span-3">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Bot className="w-5 h-5 text-pink-500" /> Về Genu Robot
            </h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-zinc-400 hover:text-pink-400 transition-colors">Thiết kế & Công nghệ</Link></li>
              <li><Link href="#services" className="text-zinc-400 hover:text-pink-400 transition-colors">Siêu năng lực AI</Link></li>
              <li><Link href="#process" className="text-zinc-400 hover:text-pink-400 transition-colors">Trải nghiệm thực tế</Link></li>
              <li><Link href="#waitlist" className="text-zinc-400 hover:text-pink-400 transition-colors">Đăng ký Waitlist</Link></li>
            </ul>
          </div>

          {/* Cột 3: Thông tin liên hệ (Dựa theo ảnh) */}
          <div className="col-span-1 md:col-span-7 lg:col-span-4">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" /> Kết nối với chúng tôi
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-yellow-500/50 transition-colors shrink-0">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="text-zinc-400 leading-relaxed pt-1">
                  Số 4 Phan Huy Ôn, Phường Thạnh Mỹ Tây, <br />Thành phố Hồ Chí Minh, Việt Nam
                </span>
              </li>
              
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-pink-500/50 transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-pink-500" />
                </div>
                <a href="mailto:contact@bizgenie.vn" className="text-zinc-400 hover:text-white transition-colors pt-1">
                  contact@bizgenie.vn
                </a>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors shrink-0">
                  <Hash className="w-5 h-5 text-purple-500" />
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-white/5 border border-white/10 pt-1">
                  <span className="text-zinc-500 text-sm font-medium mr-2">MST:</span>
                  <span className="text-zinc-300 font-mono">0318961809</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Phần 3: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} BizGenie. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
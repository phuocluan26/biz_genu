# BizGenie (GENU) 🚀

<!-- ![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) -->

**BizGenie (GENU)** là dự án Landing Page hiện đại dành cho sản phẩm trợ lý thông minh - "Người Bạn Đồng Hành Thông Minh Trên Bàn Của Bạn". 
Giao tiếp hoàn toàn bằng giọng nói tự nhiên, Genu giúp giải đáp các bài tập hóc búa, khám phá kiến thức bách khoa vô tận và tạo động lực học tập mỗi ngày qua những tương tác sinh động.

## ✨ Tính Năng Nổi Bật

- 🎙️ **Nhận Diện Giọng Nói:** Tương tác tự nhiên và liền mạch bằng giọng nói.
- 💡 **Hỏi Đáp Thông Minh:** Giải đáp nhanh chóng mọi thắc mắc và hỗ trợ học tập liên tục.
- 🤖 **Tích hợp Model 3D:** Hiển thị trực quan robot Genu thông qua WebGL/Three.js hỗ trợ tương tác.
- 🎨 **Giao diện Hiện Đại:** Thiết kế Dark Mode, Glassmorphism, phong cách Holographic cùng hiệu ứng neon nổi bật.
- 🚀 **Tối ưu Hiệu Suất:** Xây dựng trên nền tảng Server Components và tối ưu hóa Load Time bằng Next.js App Router.
- 🛡️ **Bảo Mật Tương Tác:** Tích hợp `Cloudflare Turnstile` chống spam spam bot ở biểu mẫu đăng ký Waitlist.

## 🛠️ Công Nghệ Sử Dụng

- **Framework:** [Next.js](https://nextjs.org/) (Version 16.1.6)
- **Library:** [React](https://reactjs.org/) 19 & [React DOM](https://reactjs.org/) 19
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **3D Rendering:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) & [@react-three/drei](https://github.com/pmndrs/drei) & Three.js
- **Icons:** [Lucide React](https://lucide.dev/)
- **Security Check:** [@marsidev/react-turnstile](https://github.com/marsidev/react-turnstile)

## 📦 Cài Đặt và Khởi Chạy

### Yêu cầu hệ thống:
- Node.js >= 20.x
- npm / yarn / pnpm

### Bước 1: Clone dự án
```bash
git clone <repository_url>
cd biz-GENU
```

### Bước 2: Cài đặt Dependencies
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### Bước 3: Khởi chạy môi trường máy chủ phát triển
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Sau khi khởi chạy thành công, trình duyệt sẽ có thể truy cập dự án tại: [http://localhost:3000](http://localhost:3000).

## 📂 Cấu Trúc Thư Mục Chính

- `src/app/` - Cấu hình định tuyến theo kiến trúc App Router của Next.js (Root Layout, Page, v.v.).
- `src/components/layout/` - Thành phần giao diện chung: Navbar, Footer, AmbientBackground.
- `src/components/sections/` - Các phần nội dung cốt lõi của Landing Page (Hero, About, Process, Services, Waitlist).
- `src/components/three/` - Các model 3D (RobotModel) và component Three.js.
- `src/components/ui/` - Thư viện giao diện dùng chung được chuẩn hóa (Button, Inputs, ScrollToTop,...).
- `public/` - Tài nguyên tĩnh (images, 3d models, fonts).

## 📜 Các Lệnh Scripts
- `npm run dev`: Khởi chạy môi trường phát triển cục bộ.
- `npm run build`: Đóng gói dự án theo Production Build.
- `npm run start`: Khởi chạy ứng dụng với Production Build.
- `npm run lint`: Chạy cấu hình kiểm tra chuẩn mã (ESLint).

---
*Phát triển bởi đội ngũ BizGenie Team.*

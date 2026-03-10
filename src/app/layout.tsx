import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GENU | Trợ Lý AI - Khơi Nguồn Tri Thức",
  description: "Khám phá GENU - Robot trợ lý AI đột phá từ BizGenie. Hơn cả một thiết bị công nghệ, Genu là người bạn đồng hành với khả năng giao tiếp giọng nói tự nhiên, gia sư bách khoa và đối tác luyện ngoại ngữ hoàn hảo. Tham gia danh sách chờ ngay hôm nay!",
  keywords: ["Robot AI", "Trợ lý học tập", "Genu AI", "BizGenie", "Robot thông minh", "Trợ lý ảo"],
  openGraph: {
    title: "GENU | Trợ Lý AI - Khơi Nguồn Tri Thức",
    description: "Khám phá GENU - Robot trợ lý AI đột phá từ BizGenie. Hơn cả một thiết bị công nghệ, Genu là người bạn đồng hành hoàn hảo cho việc học tập và giải trí.",
    //url: "https://bizgenie.vn", // Thay bằng domain thật của bạn
    siteName: "BizGenie",
    images: [
      {
        url: "/image/shape.jpg", // Dùng một bức ảnh đẹp của Genu làm ảnh thumbnail khi share link
        width: 1200,
        height: 630,
        alt: "Genu AI Robot",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${orbitron.variable} antialiased bg-background-dark text-white min-h-screen selection:bg-pink-500/30 selection:text-pink-200`}
      >
        {children}
      </body>
    </html>
  );
}

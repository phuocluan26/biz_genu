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
  title: "GENU | Robot AI hỗ trợ học tập",
  description:
    "Providing comprehensive business management consulting services tailored to the unique needs of our clients.",
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
        className={`${inter.variable} ${orbitron.variable} antialiased bg-[#05010d] text-white min-h-screen selection:bg-pink-500/30 selection:text-pink-200`}
      >
        {children}
      </body>
    </html>
  );
}

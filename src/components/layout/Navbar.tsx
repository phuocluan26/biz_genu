"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "PROCESS", href: "#process" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 transition-all duration-500">
      <div
        className={`w-full transition-all duration-500 flex items-center justify-between ${
          isScrolled
            ? "max-w-4xl h-16 px-6 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-lg"
            : "max-w-7xl h-20 px-4 bg-transparent border border-transparent rounded-none"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 relative z-10 group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 font-heading font-black text-xl tracking-wider">
            BIZGENIE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors rounded-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
          
          <div className="pl-4 ml-2 border-l border-white/10">
            <Button variant="primary" className="rounded-full h-9 px-6 font-semibold bg-gradient-to-r from-purple-600 to-yellow-500 text-white border-0 transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
              LET'S TALK
            </Button>
          </div>
        </nav>

        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 md:hidden bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300 p-3 rounded-xl hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="primary" className="w-full mt-4 rounded-xl py-6 text-base bg-gradient-to-r from-purple-600 to-yellow-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                LET'S TALK
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WE ARE{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">
                OPTICORE
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-zinc-300 max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where Strategies Transform Into Success. We partner with forward-thinking companies to build the future through innovative consulting and digital transformation.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="primary" size="lg">
                GET STARTED
              </Button>
              <Button variant="outline" size="lg">
                OUR SERVICES
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative h-[600px]"
          >
            {/* Animated floating abstract shape */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[400px] h-[400px]"
            >
              {/* This simulates the complex 3D shape with CSS as a placeholder until WebP is added */}
              <div className="absolute inset-0 bg-linear-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-40 mix-blend-screen" />
              <div className="absolute inset-4 bg-linear-to-bl from-pink-400 to-purple-700 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(236,72,153,0.3)] animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-10 bg-linear-to-tr from-blue-400 to-pink-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] mix-blend-overlay border border-white/30" />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

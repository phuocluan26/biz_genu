"use client"

import { motion } from "framer-motion"

export function Partners() {
  const partners = [
    "ACME Corp", "GlobalTech", "Nexus Industries", "Quantum Solutions",
    "Stark Enterprises", "Wayne Corp", "Umbrella Corp", "Cyberdyne Systems"
  ]

  // Duplicate for seamless infinite marquee effect
  const marqueeItems = [...partners, ...partners]

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Abstract Background Curve */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 mix-blend-screen">
        <div className="w-[120%] h-[400px] bg-linear-to-r from-blue-600/20 via-purple-600/30 to-pink-600/20 rounded-[100%] blur-3xl transform -rotate-6" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          WHERE STRATEGIES <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
            TRANSFORM INTO SUCCESS
          </span>
        </motion.h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden py-10 flex bg-white/5 border-y border-white/10 backdrop-blur-sm">
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap gap-16 item-center px-8"
          animate={{ x: [0, -1035] }} // Adjust value based on content width for smooth loop
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((partner, index) => (
            <div 
              key={index} 
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-zinc-400 font-medium tracking-wider flex items-center justify-center shrink-0 min-w-[200px]"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

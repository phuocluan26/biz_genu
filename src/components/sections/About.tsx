"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function About() {
  const benefits = [
    "Data-Driven Insights",
    "Agile Methodology",
    "Tailored Strategies",
    "Proven Track Record"
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 flex items-center gap-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white uppercase"
          >
            About Us
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grow h-px bg-linear-to-r from-pink-500/50 to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 3D Visual Placeholder (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] w-full bg-white/5 rounded-3xl border border-white/10 glass overflow-hidden flex items-center justify-center group"
          >
            {/* Animated background element simulating a 3D glass material */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-xl opacity-50" />
              <div className="absolute inset-8 bg-linear-to-bl from-blue-400 to-indigo-700 rounded-[50%_50%_30%_70%/50%_70%_30%_50%] backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            </motion.div>
          </motion.div>

          {/* Text Content (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              </span>
              Empowering Your Vision
            </h3>
            
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                At Opticore, we believe that the intersection of innovative strategy and cutting-edge technology is where true business transformation occurs. We are not just consultants; we are your partners in navigating the complexities of the modern digital landscape.
              </p>
              <p>
                Our team of seasoned experts brings decades of experience across diverse industries, allowing us to craft bespoke solutions that address your unique challenges and propel your organization forward.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-pink-500 w-5 h-5 shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

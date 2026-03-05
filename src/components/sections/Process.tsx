"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const processes = [
  {
    id: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your organization's core to understand the unique challenges, uncover hidden opportunities, and align on strategic objectives before formulating a plan.",
  },
  {
    id: "02",
    title: "Strategy Formulation",
    description: "Our experts design a bespoke roadmap leveraging data-driven insights and industry best practices. We outline clear, actionable steps tailored for sustainable growth.",
  },
  {
    id: "03",
    title: "Execution & Implementation",
    description: "We work alongside your team to bring the strategy to life, ensuring seamless integration of new processes and technologies with minimal disruption.",
  },
  {
    id: "04",
    title: "Optimization & Scaling",
    description: "Continuous monitoring, agile adjustments, and performance tracking to maximize ROI and scale successful initiatives across the enterprise.",
  },
]

export function Process() {
  const [activeProcess, setActiveProcess] = useState<string>("01")

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 item-start">
          
          {/* Left Column: Heading & Visuals */}
          <div className="md:w-1/2 flex flex-col h-full sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
                Our Proven Process
              </h2>
              <p className="text-zinc-400 text-lg max-w-md mb-12">
                A methodical approach designed to mitigate risk and ensure measurable results every step of the way.
              </p>
            </motion.div>

            {/* Dynamic Visual Area based on active step */}
            <div className="relative h-[300px] w-full rounded-3xl overflow-hidden glass hidden md:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProcess}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-purple-600/20 flexitems-center justify-center p-8"
                >
                  <div className="w-full h-full border border-white/20 rounded-2xl flex items-center justify-center text-7xl font-heading font-black text-white/50 text-glow">
                    {activeProcess}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Process List */}
          <div className="md:w-1/2 space-y-6">
            {processes.map((process, index) => {
              const isActive = activeProcess === process.id
              
              return (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveProcess(process.id)}
                  onClick={() => setActiveProcess(process.id)}
                  className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden group ${
                    isActive 
                      ? "bg-white/10 border-white/20" 
                      : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10"
                  } border`}
                >
                  {/* Background glow when active */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeProcessBg"
                      className="absolute inset-0 bg-linear-to-r from-pink-500/10 to-transparent pointer-events-none"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:items-center">
                    <span className={`text-4xl md:text-5xl font-heading font-bold transition-colors duration-500 ${
                      isActive ? "text-pink-500" : "text-zinc-600 group-hover:text-zinc-400"
                    }`}>
                      {process.id}
                    </span>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl md:text-2xl font-heading font-semibold mb-2 transition-colors duration-500 ${
                        isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                      }`}>
                        {process.title}
                      </h3>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-zinc-400 leading-relaxed text-sm mt-4"
                          >
                            {process.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={`mt-4 sm:mt-0 transition-all duration-500 shrink-0 ${
                      isActive ? "text-white rotate-0" : "text-zinc-600 group-hover:text-white -rotate-45"
                    }`}>
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

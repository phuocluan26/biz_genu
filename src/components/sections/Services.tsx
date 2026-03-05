"use client"

import { motion } from "framer-motion"
import { BarChart3, LineChart, Cpu, Lightbulb } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Strategy Consulting",
      description: "Comprehensive business strategy formulation to drive growth and overcome complex organizational challenges.",
      icon: <LineChart className="w-8 h-8" />,
    },
    {
      title: "Digital Transformation",
      description: "Leveraging cutting-edge technology to streamline operations and create new value propositions.",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: "Operational Excellence",
      description: "Process optimization methodologies that significantly improve efficiency and reduce redundancies.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Innovation Advisory",
      description: "Fostering a culture of innovation and identifying new market opportunities for lasting competitive advantage.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
  ]

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Huge Background Text Outline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden flex justify-center items-center">
        <span className="text-[150px] md:text-[250px] lg:text-[350px] font-heading font-black text-outline whitespace-nowrap opacity-20">
          SERVICES
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            We deliver tailored solutions across four key pillars of business transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative h-full"
            >
              {/* Animated Gradient Border */}
              <div className="absolute -inset-px bg-linear-to-br from-pink-500/50 via-purple-500/10 to-blue-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-[#0a0515] hover:bg-[#0c061a] transition-colors duration-500 rounded-2xl p-8 border border-white/10 flex flex-col items-start z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

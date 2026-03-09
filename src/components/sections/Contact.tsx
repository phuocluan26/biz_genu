"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

// Import dynamic để tránh lỗi SSR với Three.js
const IridescentBlob = dynamic(
  () => import("@/components/three/IridescentBlob").then((mod) => mod.IridescentBlob),
  { 
    ssr: false,
    loading: () => <div className="w-full h-[500px] bg-zinc-900/10 animate-pulse rounded-3xl" />
  }
)

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> {/* Đã sửa thành items-center */}
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
              Ready to Transform?
            </h2>
            <p className="text-zinc-400 mb-8">
              Fill out the form below and our team will be in touch shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 ml-1">Full Name</label>
                  <Input id="name" name="name" placeholder="John Doe" value={formState.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 ml-1">Email Address</label>
                  <Input id="email" name="email" type="email" placeholder="john@company.com" value={formState.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="flex w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                  placeholder="Your project details..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full mt-4 group">
                SEND MESSAGE
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Visual Side – Khối 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative w-full h-[600px]" // Đảm bảo có chiều cao cố định
          >
            <IridescentBlob />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
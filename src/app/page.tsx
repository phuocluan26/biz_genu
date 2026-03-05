import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Process } from "@/components/sections/Process"
import { Partners } from "@/components/sections/Partners"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <Hero />
        <About />
        <Services />
        <Process />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

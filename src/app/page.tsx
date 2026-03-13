import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Process } from "@/components/sections/Process"
import { Waitlist } from "@/components/sections/Waitlist"
import { AmbientBackground } from "@/components/layout/AmbientBackground"
// THÊM DÒNG IMPORT NÀY:
import { ScrollToTop } from "@/components/ui/ScrollToTop"

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <Hero />
        <About />
        <Services />
        <Process />
        <Waitlist />
      </main>
      <Footer />
      {/* GỌI COMPONENT Ở ĐÂY: */}
      <ScrollToTop />
    </>
  )
}
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">O</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-wider text-white">
                O-CORE
              </span>
            </Link>
            <p className="text-zinc-400 max-w-sm">
              Where Strategies Transform Into Success. Partnering with forward-thinking companies to build the future.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">SERVICES</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  Strategy Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  Operational Excellence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">COMPANY</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Opticore. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

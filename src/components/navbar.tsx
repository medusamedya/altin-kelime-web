"use client"

import { useState, useEffect } from "react"
import Image from "next/image" 
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import Link from "next/link"

// LİNKLER GÜNCELLENDİ (Başına / eklendi ve about rotası düzeltildi)
const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about", label: "Altın Kelime Nedir?" },
  { href: "/how-to-play", label: "Nasıl Oynanır?" },
  { href: "/apply", label: "Yarışmacı Ol" },
  { href: "/format", label: "Format" },
  { href: "/#contact", label: "İletişim" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-28 lg:h-28 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/Logo2.png" 
                alt="Altın Kelime Logo" 
                fill 
                className="object-contain"
                priority 
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button
              asChild
              className="gold-bg text-[#1A1A2E] hover:opacity-90 font-black px-8 shadow-lg shadow-primary/30 transition-transform hover:scale-105 border-none"
            >
              {/* BURASI DA GÜNCELLENDİ */}
              <Link href="/#apply">Yarışmacı Ol</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-lg animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="mt-4 pt-4 border-t border-border/50 flex flex-col gap-4">
                  <div className="flex justify-between items-center px-2">
                    <span className="font-medium text-muted-foreground">Tema Seçimi</span>
                    <ThemeToggle />
                  </div>
                  <Button
                    asChild
                    className="gold-bg text-[#1A1A2E] font-black py-6 text-lg w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {/* BURASI DA GÜNCELLENDİ */}
                    <Link href="/#apply">Yarışmacı Ol</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
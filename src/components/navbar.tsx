"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X, ChevronDown } from "lucide-react" // ChevronDown eklendi
import Link from "next/link"

// Menü veri yapısı güncellendi: Alt menüler için 'subLinks' desteği eklendi
const navLinks = [
  { href: "#", label: "Ana Sayfa" },
  { 
    label: "Program Hakkında", 
    subLinks: [
      { href: "#about", label: "Altın Kelime Nedir" },
      { href: "#concept", label: "Program Konsepti" }, // Yeni eklenecek bölümün linki
    ]
  },
  { href: "#how-to-play", label: "Nasıl Oynanır" },
  { href: "#apply", label: "Yarışmacı Ol" },
  { href: "#format", label: "Format" },
  { href: "#contact", label: "İletişim" },
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
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-32 lg:h-32 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/Logo.png" 
                alt="Altın Kelime Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.subLinks ? (
                  // Alt Menüsü Olan Link (Dropdown)
                  <>
                    <button className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-8">
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    {/* Hover ile Açılan Kutu */}
                    <div className="absolute top-[80%] left-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-card border border-border/50 shadow-2xl rounded-2xl p-2 translate-y-2 group-hover:translate-y-0">
                      {link.subLinks.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.href}
                          className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  // Normal Link
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-8"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button
              asChild
              className="gold-bg text-[#1A1A2E] hover:opacity-90 font-black px-8 shadow-lg shadow-primary/30 transition-transform hover:scale-105 border-none"
            >
              <Link href="#apply">Yarışmacı Ol</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-lg animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.subLinks ? (
                      // Mobilde Alt Menü Gösterimi (Girintili)
                      <div className="flex flex-col gap-2">
                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider py-2">
                          {link.label}
                        </div>
                        <div className="flex flex-col gap-2 pl-4 border-l-2 border-primary/20 ml-2">
                          {link.subLinks.map((subLink, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subLink.href}
                              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-1.5"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Mobilde Normal Link
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobilde CTA ve Tema Değiştirici */}
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
                    <Link href="#apply">Yarışmacı Ol</Link>
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
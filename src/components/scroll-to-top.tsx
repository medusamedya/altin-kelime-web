"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Sayfa kaydırma miktarını kontrol et
  useEffect(() => {
    const toggleVisibility = () => {
      // 300px aşağı kaydırınca buton görünsün
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-[100] transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="w-12 h-12 rounded-full gold-bg text-[#1A1A2E] shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all border-none group"
        aria-label="Yukarı Çık"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </div>
  )
}
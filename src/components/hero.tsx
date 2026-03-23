"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LetterTile } from "./letter-tile"

// --- STATİK VERİLER ---
const slides = [
  { image: "/images/studio.jpg", alt: "Altın Kelime TV Stüdyosu" },
  { image: "/images/game-interface.jpg", alt: "Oyun Arayüzü" },
  { image: "/images/mobile-app.jpg", alt: "Mobil Uygulama" },
]

const FULL_TEXT = "Kelime bilginize gerçekten güveniyor musunuz? Altın Kelime, strateji, hız ve kelime bilgisini bir araya getiren yeni nesil televizyon yarışmasıdır."

// --- 1. MİKRO BİLEŞEN: Daktilo Efekti ---
function TypewriterText({ text }: { text: string }) {
  const [typedText, setTypedText] = useState("")

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 30)
    return () => clearInterval(typingInterval)
  }, [text])

  return <>{typedText}</>
}

// --- 2. MİKRO BİLEŞEN: Geri Sayım Sayacı ---
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(60)

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 60))
    }, 1000)
    return () => clearInterval(countdownTimer)
  }, [])

  const formatTime = (seconds: number) => `00:${seconds.toString().padStart(2, '0')}`

  return (
    <div className={`text-3xl font-black ${timeLeft <= 10 ? 'text-destructive animate-pulse' : 'text-primary'}`}>
      {formatTime(timeLeft)}
    </div>
  )
}

// --- ANA BİLEŞEN: HERO ---
export function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Carousel mantığı
  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % slides.length), [])
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 5000)
    return () => clearInterval(slideTimer)
  }, [nextSlide])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    sectionRef.current.style.setProperty('--mouse-x', `${x}px`)
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 1. Arka Plan Slider */}
      <div className="absolute inset-0 z-0">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        className="object-cover"
        priority={index === 0}
      />
      {/* Overlay: Beyaz temada aşırı parlamayı engellemek için hafif bir karartma ekledik */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 dark:via-background/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 dark:from-background/60" />
      
      {/* Ekstra Katman: Resmin orijinal çiğ beyazlığını kırmak için */}
      <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
    </div>
  ))}
</div>

      {/* 2. Statik Işık Efektleri */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      {/* 3. OPTİMİZE EDİLMİŞ MOUSE SAHNE IŞIĞI */}
      {mounted && (
        <div 
          className="absolute inset-0 pointer-events-none z-20 transition-colors duration-500"
          style={{
            background: theme === 'dark' 
              ? `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.15) 0%, rgba(10, 10, 10, 0.8) 25%)`
              : `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.2) 0%, rgba(255, 255, 255, 0.6) 25%)`
          }}
        />
      )}

      {/* 4. Uçuşan Harfler ve İstatistik Kutuları */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
        <div className="absolute top-1/4 left-[5%] animate-float-slow hidden lg:block"><LetterTile letter="K" size="lg" variant="gold" /></div>
        <div className="absolute top-1/2 left-[10%] animate-float hidden lg:block"><LetterTile letter="E" size="md" /></div>
        <div className="absolute bottom-1/3 left-[8%] animate-float-slow hidden lg:block"><LetterTile letter="L" size="sm" variant="accent" /></div>
        <div className="absolute top-1/3 right-[8%] animate-float hidden lg:block"><LetterTile letter="İ" size="lg" /></div>
        <div className="absolute top-1/2 right-[12%] animate-float-slow hidden lg:block"><LetterTile letter="M" size="md" variant="gold" /></div>
        <div className="absolute bottom-1/4 right-[6%] animate-float hidden lg:block"><LetterTile letter="E" size="sm" variant="accent" /></div>

        <div className="absolute top-1/4 right-[15%] hidden xl:block animate-float">
          <div className="bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl p-5 shadow-2xl shadow-primary/20">
            <div className="text-xs text-primary/80 mb-1 font-medium tracking-wider">PUAN</div>
            {/* Puan kutusuna gold-text eklendi */}
            <div className="text-3xl font-black gold-text">2,450</div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-[15%] hidden xl:block animate-float-slow">
          <div className="bg-card/90 backdrop-blur-md border border-destructive/30 rounded-xl p-5 shadow-2xl">
            <div className="text-xs text-destructive/80 mb-1 font-medium tracking-wider">SÜRE</div>
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* 5. Slider Kontrolleri */}
      <button onClick={prevSlide} className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all pointer-events-auto"><ChevronLeft className="w-6 h-6" /></button>
      <button onClick={nextSlide} className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all pointer-events-auto"><ChevronRight className="w-6 h-6" /></button>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-40 flex gap-3 pointer-events-auto">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-primary" : "w-4 bg-muted-foreground/40 hover:bg-muted-foreground/60"}`} />
        ))}
      </div>

      {/* 6. Ana İçerik */}
      <div className="relative z-50 container mx-auto px-4 pt-20 lg:pt-0 pointer-events-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-8 backdrop-blur-sm animate-fade-in">
            <span className="text-primary font-bold text-sm lg:text-base tracking-wide">7 Harf – 1 Dakika – 1 Kazanan</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 text-balance">
            {/* ALTIN kelimesine gold-text uygulandı */}
            <span className="gold-text drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] inline-block">ALTIN</span>{" "}
            <span className="text-foreground inline-block">KELİME</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty min-h-[80px]">
            <TypewriterText text={FULL_TEXT} />
            <span className="inline-block w-[3px] h-[20px] bg-primary ml-1 animate-pulse align-middle" />
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-7 min-w-[220px] shadow-xl shadow-primary/30 transition-transform hover:scale-105"><Link href="#apply">Yarışmacı Ol</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:border-primary font-semibold text-lg px-10 py-7 min-w-[220px] backdrop-blur-sm transition-transform hover:scale-105"><Link href="#video" className="flex items-center gap-2"><Play className="w-5 h-5" /> Fragmanı İzle</Link></Button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-16 pointer-events-none">
            {["A", "L", "T", "I", "N"].map((letter, i) => (
              <LetterTile key={i} letter={letter} size="sm" variant={i === 2 ? "gold" : "default"} className="animate-bounce-subtle cursor-default" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Aşağı Kaydır Oku */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-40 pointer-events-none">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LetterTile } from "./letter-tile"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { useTheme } from "next-themes" // BUNU EKLE

const slides = [
  {
    image: "/images/studio.jpg",
    alt: "Altın Kelime TV Stüdyosu",
  },
  {
    image: "/images/game-interface.jpg",
    alt: "Oyun Arayüzü",
  },
  {
    image: "/images/mobile-app.jpg",
    alt: "Mobil Uygulama",
  },
]

export function Hero() {
  const { theme } = useTheme()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [typedText, setTypedText] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Hero section'ın sınırlarını bilmek için referans oluşturduk
  const sectionRef = useRef<HTMLElement>(null)

  const fullText = "Kelime bilginize gerçekten güveniyor musunuz? Altın Kelime, strateji, hız ve kelime bilgisini bir araya getiren yeni nesil televizyon yarışmasıdır."

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 5000)
    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 60))
    }, 1000)

    return () => {
      clearInterval(slideTimer)
      clearInterval(countdownTimer)
    }
  }, [nextSlide])

  useEffect(() => {
    let i = 0
    setTypedText("")
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [])

  // Mouse koordinatlarını ARTIK SADECE Hero Section'a göre hesaplıyoruz
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      
      // Hero section'ın ekrandaki konumunu alıyoruz
      const rect = sectionRef.current.getBoundingClientRect()
      
      // Işığı sadece Hero'nun içindeyken takip etmesi için (İsteğe bağlı)
      // Koordinatları Hero'nun sol üst köşesini (0,0) kabul edecek şekilde hesaplıyoruz
      setMousePosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const formatTime = (seconds: number) => {
    return `00:${seconds.toString().padStart(2, '0')}`
  }

  return (
    // sectionRef'i buraya bağladık
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
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
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      {/* DÜZELTİLEN KISIM: fixed yerine absolute kullanıldı! */}
      {/* Böylece karanlık filtre sadece Hero section'ın içinde hapsolur. */}
      {/* 3. Mouse Sahne Işığı Efekti (Temaya Duyarlı) */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 transition-colors duration-500"
        style={{
          background: theme === 'dark' 
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15) 0%, rgba(10, 10, 10, 0.8) 25%)`
            : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.2) 0%, rgba(255, 255, 255, 0.6) 25%)`
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
        <div className="absolute top-1/4 left-[5%] animate-float-slow hidden lg:block">
          <LetterTile letter="K" size="lg" variant="gold" />
        </div>
        <div className="absolute top-1/2 left-[10%] animate-float hidden lg:block">
          <LetterTile letter="E" size="md" />
        </div>
        <div className="absolute bottom-1/3 left-[8%] animate-float-slow hidden lg:block">
          <LetterTile letter="L" size="sm" variant="accent" />
        </div>

        <div className="absolute top-1/3 right-[8%] animate-float hidden lg:block">
          <LetterTile letter="İ" size="lg" />
        </div>
        <div className="absolute top-1/2 right-[12%] animate-float-slow hidden lg:block">
          <LetterTile letter="M" size="md" variant="gold" />
        </div>
        <div className="absolute bottom-1/4 right-[6%] animate-float hidden lg:block">
          <LetterTile letter="E" size="sm" variant="accent" />
        </div>

        <div className="absolute top-1/4 right-[15%] hidden xl:block animate-float">
          <div className="bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl p-5 shadow-2xl shadow-primary/20">
            <div className="text-xs text-primary/80 mb-1 font-medium tracking-wider">PUAN</div>
            <div className="text-3xl font-black text-primary">2,450</div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-[15%] hidden xl:block animate-float-slow">
          <div className="bg-card/90 backdrop-blur-md border border-destructive/30 rounded-xl p-5 shadow-2xl">
            <div className="text-xs text-destructive/80 mb-1 font-medium tracking-wider">SÜRE</div>
            <div className={`text-3xl font-black ${timeLeft <= 10 ? 'text-destructive animate-pulse' : 'text-primary'}`}>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-[20%] hidden xl:block animate-float">
          <div className="bg-card/90 backdrop-blur-md border border-border rounded-xl p-4 shadow-2xl">
            <div className="flex gap-1.5">
              {["A", "L", "T"].map((l, i) => (
                <div key={i} className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-bold text-primary">
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all pointer-events-auto"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all pointer-events-auto"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-40 flex gap-3 pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-4 bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-50 container mx-auto px-4 pt-20 lg:pt-0 pointer-events-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-8 backdrop-blur-sm animate-fade-in">
            <span className="text-primary font-bold text-sm lg:text-base tracking-wide">
              7 Harf – 1 Dakika – 1 Kazanan
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 text-balance">
            <span className="text-primary drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] inline-block">
              ALTIN
            </span>{" "}
            <span className="text-foreground inline-block">
              KELİME
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty min-h-[80px]">
            {typedText}
            <span className="inline-block w-[3px] h-[20px] bg-primary ml-1 animate-pulse align-middle" />
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-7 min-w-[220px] shadow-xl shadow-primary/30 transition-transform hover:scale-105"
            >
              <Link href="#apply">Yarışmacı Ol</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 hover:bg-primary/10 hover:border-primary font-semibold text-lg px-10 py-7 min-w-[220px] backdrop-blur-sm transition-transform hover:scale-105"
            >
              <Link href="#video" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Fragmanı İzle
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-16 pointer-events-none">
            {["A", "L", "T", "I", "N"].map((letter, i) => (
              <LetterTile 
                key={i} 
                letter={letter} 
                size="sm" 
                variant={i === 2 ? "gold" : "default"}
                className="animate-bounce-subtle hover:scale-110 transition-transform cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-40 pointer-events-none">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
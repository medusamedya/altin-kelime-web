"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MonitorPlay, Star, ChevronRight, ChevronLeft } from "lucide-react"

export function ProductionSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    "/images/studio-stage.jpg",
    "/images/studio-atmosphere.jpg",
    "/images/studio.jpg"
  ]

  // Otomatik geçiş (5 saniyede bir)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/50">
      
      {/* Arka Plan Glow Efektleri */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            Yayın Ekibi
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            Profesyonel <span className="gold-text">Prodüksiyon</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Spor yayını kalitesinde analiz, canlı yorumlar ve uzman değerlendirmeleriyle zenginleştirilmiş bir izleme deneyimi.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SOL TARAF: ANA SUNUCU KARTI */}
          <div className="lg:col-span-5">
            <div className="h-full bg-card/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col hover:border-primary/40 transition-all duration-500 group relative overflow-hidden shadow-xl">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <MonitorPlay className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-black text-foreground mb-4">Ana Sunucu</h3>
              <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
                Yarışmayı başlatan, tüm oyun sürecini yöneten ve heyecanı zirveye taşıyan isim.
              </p>

              <ul className="space-y-4 mt-auto">
                {[
                  "Oyunu başlatır ve yönetir",
                  "Yarışmacılarla etkileşim kurar",
                  "Ödül törenini gerçekleştirir"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-foreground/80 group/item cursor-default">
                    <ChevronRight className="w-4 h-4 text-primary group-hover/item:translate-x-1 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SAĞ TARAF: SİNEMATİK CAROUSEL ALANI */}
          <div className="lg:col-span-7 relative group">
            <div className="relative h-full min-h-[450px] rounded-[2.5rem] overflow-hidden border border-border/60 shadow-2xl">
              
              {/* Görsel Katmanları (Carousel) */}
              {slides.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image 
                    src={src}
                    alt={`Production Slide ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-[5s] scale-100 group-hover:scale-110"
                    priority={idx === 0}
                  />
                </div>
              ))}

              {/* Reji Ekranı Efekti (Hafif Tarama Çizgisi) */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] opacity-20" />

              {/* Görsel Üzeri Overlay */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Sabit Yazılar */}
              <div className="absolute bottom-8 left-8 right-8 z-30 flex items-end justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Canlı Yayın Standartları</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">4K UHD Yayın Kalitesi</h4>
                  <p className="text-white/70 text-sm md:text-base font-medium max-w-md leading-relaxed">
                    12 kamera açısı ve gelişmiş reji sistemleri ile her anı profesyonel bir sinematik dille yakalıyoruz.
                  </p>
                </div>
                
                <div className="hidden md:flex flex-col items-center gap-1 bg-white/5 backdrop-blur-xl p-5 rounded-[1.5rem] border border-white/10 shadow-2xl group-hover:bg-primary/20 transition-colors duration-500">
                  <Star className="w-6 h-6 text-primary fill-primary animate-pulse" />
                  <span className="text-[10px] font-black text-white tracking-widest uppercase mt-1">Premium</span>
                </div>
              </div>

              {/* Carousel Kontrolleri (Cam Efektli) */}
              <div className="absolute top-8 right-8 z-30 flex gap-2">
                <button 
                  onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
                  className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
                  className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
                {slides.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/30"}`} 
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ALT VURGU: SLOGAN ÇUBUĞU */}
        <div className="mt-12 p-8 rounded-[2rem] bg-card/30 border border-border/40 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
          <p className="text-base md:text-lg italic font-medium text-muted-foreground relative z-10">
            "Altın Kelime, yalnızca bir kelime yarışması değil; <span className="text-foreground font-black not-italic border-b-2 border-primary/30">seyir keyfi yüksek bir rekabet alanı.</span>"
          </p>
        </div>

      </div>
    </section>
  )
}
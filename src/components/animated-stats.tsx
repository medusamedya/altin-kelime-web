"use client"

import { useEffect, useRef, useState } from "react"

const statsData = [
  { label: "Yarışmacı / Bölüm", val: 5, suffix: "kişi" },
  { label: "Harf / Tur", val: 7, suffix: "kart" },
  { label: "Karar Süresi", val: 1, suffix: "dakika" },
  { label: "Başlangıç Puanı", val: 1000, suffix: "altın" },
]

export function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(statsData.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  // Sayfa kaydırma (Scroll) takibi
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() 
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Sayı Sayma (Count Up) Animasyonu
  useEffect(() => {
    if (isVisible) {
      statsData.forEach((stat, index) => {
        let startTimestamp: number | null = null;
        const duration = 2000; 

        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * stat.val);

          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = currentVal;
            return newCounts;
          });

          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      });
    }
  }, [isVisible])

  return (
    <div ref={sectionRef} className="relative py-14 overflow-hidden bg-card/40 backdrop-blur-sm border-y border-primary/20 group">
      
      {/* İÇE GÖMÜLÜ CSS ANİMASYONU */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sweep {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }
      `}} />

      {/* 1. Sabit Arka Plan Işığı */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      {/* 2. Soldan Sağa Akan Altın Parlama (Shine) Efekti */}
      <div 
        className="absolute top-0 bottom-0 w-[50%] md:w-[30%] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-60 pointer-events-none"
        style={{ animation: "sweep 4s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
      />
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {statsData.map((s, i) => (
          <div 
            key={i} 
            className={`text-center transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <p className="text-[clamp(2.5rem,5vw,4rem)] font-black gold-text leading-none mb-2 drop-shadow-lg">
              {counts[i].toLocaleString('tr-TR')}
            </p>
            <p className="text-foreground/70 text-[11px] font-bold tracking-[0.2em] uppercase">{s.label}</p>
            <p className="text-primary/70 text-xs font-medium mt-1 uppercase tracking-widest">{s.suffix}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
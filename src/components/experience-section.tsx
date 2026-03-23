"use client"

import Image from "next/image"
import { Tv, Smartphone, Gamepad2, ArrowRight } from "lucide-react"

const experiences = [
  {
    title: "TV Stüdyo Deneyimi",
    description: "Profesyonel televizyon stüdyosunda, ışıklar altında yarışmanın heyecanını yaşayın.",
    image: "/images/studio.jpg",
    icon: Tv,
  },
  {
    title: "Oyun Ekranı",
    description: "Modern ve sezgisel oyun arayüzü ile kelime yeteneklerinizi test edin.",
    image: "/images/game-interface.jpg",
    icon: Gamepad2,
  },
  {
    title: "Mobil Uygulama",
    description: "Her an her yerde oynayın, günlük meydan okumaları tamamlayın.",
    image: "/images/mobile-app.jpg",
    icon: Smartphone,
  },
]

export function ExperienceSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20 relative overflow-hidden" id="about">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-balance tracking-tight">
            Altın Kelime Deneyimini{" "}
            {/* Vurgulu kelimeye gold-text eklendi */}
            <span className="gold-text">Keşfedin</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Televizyon ekranından mobil deneyime uzanan, strateji ve kelime odaklı 
            yeni nesil yarışma evreni.
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
                
                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/90 border border-primary flex items-center justify-center shadow-lg shadow-primary/30 z-20">
                  <exp.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content (z-20 eklendi, böylece her zaman üstte kalır) */}
              <div className="p-6 lg:p-8 relative z-20">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* YENİLENEN KISIM: Her zaman görünür metin, Hover ile kayan ok */}
                <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                    Detayları Gör
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>

              {/* Hover glow effect (z-0 yapıldı ki metinleri ezmesin) */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
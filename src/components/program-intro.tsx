"use client"

import { Trophy, Clock, Brain, Target } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Kıvrak Zeka",
    description: "Kelimeleri sadece bilmek yetmez, harfleri en hızlı şekilde zihninde birleştirmelisin."
  },
  {
    icon: Clock,
    title: "Zamanla Yarış",
    description: "Her kelime için sadece 60 saniyen var. Stres yönetimi burada her şeydir."
  },
  {
    icon: Target,
    title: "Stratejik Hamle",
    description: "Rakiplerinin hamlelerini izle, jokerlerini tam zamanında ve akıllıca kullan."
  },
  {
    icon: Trophy,
    title: "Tek Kazanan",
    description: "Haftanın birincisi ol, büyük ödülü ve 'Altın Kelime' unvanını kazan."
  }
]

export function ProgramIntro() {
  // Arka planda akacak kelimeler
  const bgWords = "HIZ • STRATEJİ • 7 HARF • ZAMAN • ODAK • REKABET • HEYECAN • "
  // Kesintisiz akış için metni 10 kez çoğaltıyoruz
  const repeatedWords = bgWords.repeat(10)

  return (
    // id="format" sayesinde Navbar'daki "Format" linki buraya kayacak
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden" id="format">
      
      {/* 1. YENİLİK: Dev Tipografik Arka Plan (Marquee) */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center pointer-events-none opacity-[0.03] dark:opacity-[0.04] select-none overflow-hidden">
        {/* Sola doğru akan 1. Satır */}
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-foreground tracking-tighter">
            {repeatedWords}
          </span>
        </div>
        {/* Sağa doğru akan 2. Satır (Biraz daha yukarı çekilmiş) */}
        <div className="flex whitespace-nowrap animate-marquee-reverse -mt-10 md:-mt-20">
          <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-foreground tracking-tighter">
            {repeatedWords}
          </span>
        </div>
      </div>

      {/* 2. Ana İçerik (Foreground) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Kısım: Program Açıklaması */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                Yarışma Formatı
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-balance">
              Türkiye'nin En Zorlu <span className="text-primary drop-shadow-sm">Kelime Arenası</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Sıradan kelime oyunlarını unutun. Altın Kelime, kelime dağarcığınızı, kriz anındaki soğukkanlılığınızı ve zaman yönetimi becerinizi aynı anda test eden benzersiz bir televizyon formatıdır.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Size verilen 7 harfle, sadece 60 saniye içinde en yüksek puanlı kelimeyi bulabilir misiniz? Üstelik stüdyo ışıkları ve milyonlarca kişi sizi izlerken!
            </p>
          </div>

          {/* Sağ Kısım: Grid Kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Kart İkonu */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                {/* Kart İçeriği */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
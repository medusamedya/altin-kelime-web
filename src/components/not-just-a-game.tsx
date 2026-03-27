"use function"

import { Swords, Zap, Crown } from "lucide-react"

export function NotJustAGame() {
  const features = [
    {
      icon: Swords,
      title: "Gerçek Zamanlı Rekabet",
      description: "Milyonların gözü önünde rakiplerinle aynı anda, nefes kesen bir düelloya çık."
    },
    {
      icon: Zap,
      title: "Hız + Zeka + Strateji",
      description: "Sadece kelimeleri bilmek yetmez; zamanı yönet, jokerlerini akıllıca kullan."
    },
    {
      icon: Crown,
      title: "Skorunla Öne Çık",
      description: "Zorlu kelimeleri bularak puanları topla, liderlik tablosunda zirveye yerleş."
    }
  ]

  return (
    <section className="py-24 relative bg-background overflow-hidden border-t border-border/50">
      
      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground uppercase">
            BU SADECE BİR <br className="hidden md:block" />
            <span className="gold-text drop-shadow-sm mt-2 inline-block">KELİME OYUNU DEĞİL</span>
          </h2>
        </div>

        {/* Kartlar (Grid Yapısı) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] overflow-hidden flex flex-col items-center text-center"
            >
              {/* Kart İçi Arka Plan Parlaması */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* İkon */}
              <div className="relative w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 z-10">
                <feature.icon className="w-8 h-8 text-muted-foreground group-hover:text-[#1A1A2E] transition-colors duration-500" />
              </div>

              {/* İçerik */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                {/* Tasarım boş durmasın diye kısa bir açıklama ekledim, istersen kaldırabilirsin */}
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
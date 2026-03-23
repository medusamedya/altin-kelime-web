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

// Arka plan metinleri bileşenin dışında 1 kez oluşturulur (Performans)
const bgWords = "HIZ • STRATEJİ • 7 HARF • ZAMAN • ODAK • REKABET • HEYECAN • "
// Ekranı fazlasıyla doldurması için 8 kez çoğaltıyoruz (Çok uzun bir blok oluyor)
const baseText = bgWords.repeat(8) 

export function ProgramIntro() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden" id="format">
      
      {/* KOŞU BANDI İÇİN KUSURSUZ CSS (Bileşene Özel) */}
      <style>{`
        @keyframes infinite-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Tam yarısında sıfırlanır, kopma olmaz */
        }
        @keyframes infinite-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* 1. YENİLİK: Kusursuz Akan Tipografik Arka Plan */}
      <div 
        className="absolute inset-0 z-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Sola doğru akan 1. Satır */}
        <div 
          className="flex whitespace-nowrap w-max"
          style={{ animation: 'infinite-scroll-left 600s linear infinite' }}
        >
          {/* İki adet birebir aynı blok yan yana. Biri bitmeden diğeri ekranı doldurur. */}
          <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-foreground/5 dark:text-foreground/7 tracking-tighter shrink-0">
            {baseText}
          </span>
          <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-foreground/5 dark:text-foreground/7 tracking-tighter shrink-0">
            {baseText}
          </span>
        </div>
        
        {/* Sağa doğru akan 2. Satır (Biraz daha yukarı çekilmiş) */}
        <div 
          className="flex whitespace-nowrap w-max -mt-10 md:-mt-20"
          style={{ animation: 'infinite-scroll-right 600s linear infinite' }}
        >
          <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-foreground/4 dark:text-foreground/5 tracking-tighter shrink-0">
            {baseText}
          </span>
          <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-foreground/4 dark:text-foreground/5 tracking-tighter shrink-0">
            {baseText}
          </span>
        </div>
      </div>

      {/* 2. Ana İçerik (Foreground) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Kısım: Program Açıklaması */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                Yarışma Formatı
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-balance">
              Türkiye'nin En Zorlu <br className="hidden lg:block"/>
              <span className="gold-text inline-block mt-2">Kelime Arenası</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-medium">
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
                className="group p-6 md:p-8 rounded-3xl bg-card/60 backdrop-blur-md border border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
              >
                <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:border-primary transition-all duration-500 shadow-sm group-hover:shadow-primary/30">
                  <feature.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-black mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-medium">
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
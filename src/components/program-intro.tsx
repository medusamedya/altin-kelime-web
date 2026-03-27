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
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden" id="format">
      
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
                // --- KARTIN YENİ NORMAL HALİ VE HOVER ETKİSİ ---
                // Değişiklikler: 
                // 1. Normal border rengi 'border-primary/40' yapıldı (Eski hover rengi).
                // 2. Normal gölge 'shadow-2xl shadow-primary/15' yapıldı (Eski hover gölgesi).
                // 3. Hover için: Daha fazla yükselme (-translate-y-4), daha belirgin border ve parıltılı gölge eklendi.
                className="group p-6 md:p-8 rounded-3xl bg-card/60 backdrop-blur-md transition-all duration-500 
                           border border-primary/40 shadow-2xl shadow-primary/15
                           hover:border-primary hover:-translate-y-4 hover:shadow-primary/25 hover:scale-[1.02]"
              >
                {/* İkon Kutusu: Normal hali artık altın renkli */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm 
                                bg-primary border border-primary shadow-[0_0_25px_rgba(212,175,55,0.3)] scale-110
                                group-hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] group-hover:scale-115">
                  {/* İkon: Normal hali artık koyu charcoal renkli (Altın zemin üzerinde iyi görünmesi için) */}
                  <feature.icon className="w-7 h-7 text-[#1A1A2E] transition-colors duration-500" />
                </div>
                
                {/* Başlık: Normal hali artık altın renkli */}
                <h3 className="text-xl font-black mb-3 text-primary transition-colors duration-300">
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
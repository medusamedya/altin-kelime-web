"use client"

import { LetterTile } from "./letter-tile"
import { Timer, TrendingUp, Trophy, Layers, ArrowDownCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Kartlar Dağıtılır",
    description: "Stüdyoda heyecan dorukta! Her yarışmacıya gizli 2 harf verilir, masaya ise 5 kapalı harf konur. Stratejinizi bu gizli harfler üzerine kurun.",
    icon: Layers,
    letters: ["?", "?", "A", "R", "T", "I", "K"],
    type: "deal"
  },
  {
    number: "02",
    title: "Risk ve Strateji",
    description: "Zaman daralıyor! Puanınızı masaya sürün veya doğru harfin açılmasını bekleyin. Unutmayın, her hamle masadaki ödülü büyütür.",
    icon: Timer,
    type: "strategy"
  },
  {
    number: "03",
    title: "Büyük Açılış",
    description: "Harfler teker teker açılırken kelime ihtimalleri canlanır. 7 harfi zihninizde birleştirin ve en yüksek puanlı kombinasyonu bulun.",
    icon: TrendingUp,
    letters: ["S", "T", "R", "A", "T", "E", "J"],
    type: "reveal"
  },
  {
    number: "04",
    title: "Altın Vuruş",
    description: "TDK onaylı en uzun kelimeyi ilk gönderen masadaki tüm puanları süpürür ve 'Haftanın Kelime Şampiyonu' unvanına bir adım yaklaşır.",
    icon: Trophy,
    winningWord: "STRATEJİ",
    type: "win"
  },
]

export function HowToPlay() {
  return (
    <section id="how-to-play" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Premium Arka Plan Efektleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Nasıl Çalışır?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            4 ADIMDA <span className="text-primary underline decoration-primary/20">ZAFERE</span> ULAŞ
          </h2>
        </div>

        <div className="space-y-24 lg:space-y-40">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Görsel Alan (Preview) */}
              <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-duration-500" />
                
                <div className="relative bg-card/40 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden">
                  {/* Step Badge */}
                  <div className="absolute top-0 right-0 bg-primary px-8 py-2 rounded-bl-3xl font-black text-primary-foreground italic">
                    STEP {step.number}
                  </div>

                  {/* İçerik Tipine Göre Görselleştirme */}
                  {step.type === "deal" && (
                    <div className="flex flex-wrap justify-center gap-3 py-10">
                      {step.letters?.map((l, i) => (
                        <div key={i} className={`animate-slot`} style={{ animationDelay: `${i * 100}ms` }}>
                           <LetterTile letter={l} variant={l === "?" ? "empty" : "default"} size="lg" />
                        </div>
                      ))}
                    </div>
                  )}

                  {step.type === "strategy" && (
                    <div className="py-10 space-y-6">
                      <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-sm font-bold text-muted-foreground uppercase">Masadaki Bahis</span>
                        <span className="text-4xl font-black text-primary animate-pulse">2,500 PT</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-muted-foreground uppercase text-xs">Pas Geç</div>
                        <div className="h-12 rounded-xl bg-primary flex items-center justify-center font-bold text-primary-foreground uppercase text-xs shadow-lg shadow-primary/20">Puan Arttır</div>
                      </div>
                    </div>
                  )}

                  {step.type === "reveal" && (
                    <div className="flex flex-wrap justify-center gap-3 py-10">
                      {step.letters?.map((l, i) => (
                        <div key={i} className={i < 4 ? "animate-pulse-gold" : "opacity-40"}>
                          <LetterTile letter={l} variant={i < 4 ? "gold" : "default"} size="lg" />
                        </div>
                      ))}
                    </div>
                  )}

                  {step.type === "win" && (
                    <div className="text-center py-6 animate-in zoom-in duration-500">
                      <div className="flex justify-center gap-2 mb-6">
                        {step.winningWord?.split("").map((l, i) => (
                          <div key={i} className="animate-slot" style={{ animationDelay: `${i * 150}ms` }}>
                            <LetterTile letter={l} variant="gold" size="md" />
                          </div>
                        ))}
                      </div>
                      <div className="bg-primary/20 p-4 rounded-2xl border border-primary/30">
                        <p className="text-primary font-black text-2xl uppercase tracking-tighter">Şampiyonun Kelimesi!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Metin Alanı */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-black tracking-tight">{step.title}</h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {step.description}
                </p>
                
                {index === 3 && (
                  <div className="animate-bounce">
                    <a href="#play" className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest group">
                      Şimdi Dene <ArrowDownCircle className="group-hover:translate-y-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
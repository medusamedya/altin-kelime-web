"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { Brain, Target, ShieldAlert, Sparkles } from "lucide-react"

// Kart Verileri
const CARDS = [
  {
    id: 1,
    type: "STRATEJİ KARTI",
    title: "?",
    subtitle: "Kelime mi? Taktik mi?",
    year: "2024",
    color: "from-[#C8952A] to-[#996515]"
  },
  {
    id: 2,
    type: "HAMLE KARTI",
    title: "X2",
    subtitle: "Puan Katlayıcı",
    year: "2024",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 3,
    type: "PAS KARTI",
    title: "!",
    subtitle: "Güvenli Çekilme",
    year: "2024",
    color: "from-blue-500 to-indigo-600"
  }
]

export function StrategyCards() {
  const [activeCards, setActiveCards] = useState(CARDS)

  // Kartları döndürme (Katalog/Deste mantığı)
  const rotateCards = () => {
    setActiveCards((prev) => {
      const newArray = [...prev]
      const first = newArray.shift()
      if (first) newArray.push(first)
      return newArray
    })
  }

  return (
    <section className="py-24 relative overflow-hidden bg-background select-none">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* SOL TARAF: KATALOG (KART DESTESİ) */}
          <div className="relative h-[450px] flex items-center justify-center cursor-pointer" onClick={rotateCards}>
            {/* Arka Plan Glow */}
            <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            
            <div className="relative w-64 h-80">
              {activeCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`absolute inset-0 w-full h-full rounded-[2rem] p-6 border border-white/10 backdrop-blur-xl bg-gradient-to-br ${card.color} shadow-2xl transition-all duration-500 ease-in-out`}
                  style={{
                    transform: `
                      translateX(${index * 12}px) 
                      translateY(${index * -12}px) 
                      rotate(${index * 2}deg)
                      scale(${1 - index * 0.05})
                    `,
                    zIndex: 10 - index,
                    opacity: 1 - index * 0.25,
                  }}
                >
                  <div className="h-full flex flex-col justify-between border border-white/20 rounded-[1.5rem] p-5">
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#1A1A2E]/80 uppercase">
                      {card.type}
                    </span>
                    
                    <div className="text-center">
                      <span className="text-7xl font-black text-[#1A1A2E] drop-shadow-md">
                        {card.title}
                      </span>
                      <p className="mt-2 text-xs font-bold text-[#1A1A2E]/70 uppercase tracking-widest">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black text-[#1A1A2E]/60 uppercase">Altın Kelime</span>
                      <span className="text-[10px] font-black text-[#1A1A2E]/60 uppercase">{card.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* İpucu Yazısı */}
            <div className="absolute bottom-4 flex items-center gap-2 text-muted-foreground/60 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles size={12} /> Kartları Değiştirmek İçin Tıkla
            </div>
          </div>

          {/* SAĞ TARAF: İÇERİK LİSTESİ */}
          <div>
            <Reveal dir="up">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground leading-tight">
                Sadece <span className="text-[#C8952A]">Kelime Değil</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium mb-10 leading-relaxed">
                Altın Kelime'de kelime bilgisi yetmez. Rakiplerini okumak, doğru zamanda puan yatırmak ve gerektiğinde taktik yapmak da oyunun bir parçası.
              </p>
            </Reveal>

            <div className="space-y-4">
              {[
                { icon: Brain, num: "1", title: "Taktiksel Bekleme", desc: "Kelime kuramasan bile oyunda kal. Rakiplerini 'acaba ne buldu?' diye düşündür." },
                { icon: Target, num: "2", title: "Puan Baskısı", desc: "Yüksek puan koyarak rakiplerini tereddüte düşür ve oyundan çekilmelerini sağla." },
                { icon: ShieldAlert, num: "3", title: "Stratejik Çekilme", desc: "Bazen kaybetmek, büyük kaybetmekten iyidir. Puanlarını koru, sıradaki tura hazırlan." }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 100} dir="right">
                  <div className="group flex gap-5 p-5 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/40 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#C8952A] text-[#1A1A2E] flex items-center justify-center font-black shrink-0 shadow-[0_0_15px_rgba(200,149,42,0.3)]">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ALT BÖLÜM: JOKER KARTI (Özel Vurgu) */}
        <div className="mt-24">
          <Reveal dir="up">
            <div className="relative bg-card/60 backdrop-blur-2xl border border-primary/20 rounded-[2.5rem] p-8 md:p-12 overflow-hidden group">
              {/* Dekoratif Joker Arka Planı */}
              <div className="absolute -right-2 -bottom-10 opacity-[0.2] group-hover:opacity-[0.5] transition-opacity">
                <span className="text-[20rem] gold-text italic">J</span>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                <div className="w-32 h-44 rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-[#1A1A2E] to-black flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform duration-500">
                   <div className="w-full h-full m-2 border border-primary/30 rounded-xl flex items-center justify-center">
                      <span className="text-6xl font-black text-primary drop-shadow-glow">J</span>
                   </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">Özel Kart</span>
                    <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10px] font-black uppercase tracking-widest rounded-lg">5 ADET</span>
                  </div>
                  <h3 className="text-3xl font-black text-foreground mb-4">Joker Kartı</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed max-w-2xl">
                    63 kartlık destede 5 adet Joker bulunur. Joker, istediğin herhangi bir harf yerine kullanılabilir. Doğru anda çekilen bir Joker, oyunun seyrini tamamen değiştirebilir.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
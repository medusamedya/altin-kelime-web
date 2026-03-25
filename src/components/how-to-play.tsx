"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import { LetterTile } from "./letter-tile" 
import { ArrowDownCircle } from "lucide-react"
import { Reveal } from "./reveal" // <-- Reveal'ı kaydettiğin dosyadan import etmeyi unutma!

const steps = [
  {
    number: "01",
    title: "Kartlar Dağıtılır",
    description: "Stüdyoda heyecan dorukta! Her yarışmacıya gizli 2 harf verilir, masaya ise 5 kapalı harf konur. Stratejinizi bu gizli harfler üzerine kurun.",
    letters: ["?", "?", "A", "R", "T", "I", "K"],
    type: "deal"
  },
  {
    number: "02",
    title: "Risk ve Strateji",
    description: "Zaman daralıyor! Puanınızı masaya sürün veya doğru harfin açılmasını bekleyin. Unutmayın, her hamle masadaki ödülü büyütür.",
    type: "strategy"
  },
  {
    number: "03",
    title: "Büyük Açılış",
    description: "Harfler teker teker açılırken kelime ihtimalleri canlanır. 7 harfi zihninizde birleştirin ve en yüksek puanlı kombinasyonu bulun.",
    letters: ["S", "T", "R", "A", "T", "E", "J"],
    type: "reveal"
  },
  {
    number: "04",
    title: "Altın Vuruş",
    description: "TDK onaylı en uzun kelimeyi ilk gönderen masadaki tüm puanları süpürür ve 'Haftanın Kelime Şampiyonu' unvanına bir adım yaklaşır.",
    winningWord: "STRATEJİ",
    type: "win"
  },
]

export function HowToPlay() {
  return (
    <section id="how-to-play" className="px-6 py-28 relative bg-background">
      {/* Premium Arka Plan Efektleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,149,42,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Üst Başlık Alanı - Reveal ile aşağıdan gelir */}
        <Reveal dir="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">
              Oyun Sistemi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tight">
            4 Adımda <span className="gold-text">Altın Kelime</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Kurallar basit ama rekabet amansız. Sadece kelime dağarcığına değil, stratejiye ve hızlı düşünmeye dayalı bu formatı keşfet.
          </p>
        </Reveal>

       {/* Adımlar (Kart Yapısı) */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            /* KARTLARI REVEAL İLE SARIYORUZ */
            <Reveal 
              key={index} 
              delay={index * 150} 
              dir={index % 2 === 0 ? "left" : "right"}
            >
              <div className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden border border-primary/20 bg-card/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                
                {/* VİDEO/İNTERAKTİF ALAN (Tek-Çift sırasına göre sağa/sola geçer) */}
                <div className={`relative flex items-center justify-center p-8 md:p-12 min-h-[300px] bg-background/50 overflow-hidden ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  {/* Arka plan parlama efekti */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* İçerik Tipine Göre İnteraktif Animasyonlar */}
                  <div className="relative z-10 w-full flex items-center justify-center">
                    
                    {step.type === "deal" && step.letters && (
                      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {step.letters.map((l, i) => (
                          <div key={i} className="animate-slot hover:-translate-y-2 transition-transform" style={{ animationDelay: `${i * 100}ms` }}>
                            <LetterTile letter={l} variant={l === "?" ? "empty" : "default"} size="lg" />
                          </div>
                        ))}
                      </div>
                    )}

                    {step.type === "strategy" && (
                      <div className="w-full max-w-sm space-y-6 bg-card/80 p-6 rounded-2xl border border-border/50 shadow-xl">
                        <div className="flex justify-between items-end border-b border-white/10 pb-4">
                          <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Masadaki Bahis</span>
                          <span className="text-4xl font-black gold-text animate-pulse">2,500 PT</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-12 rounded-xl bg-background border border-border flex items-center justify-center font-bold text-muted-foreground uppercase text-xs cursor-pointer hover:bg-secondary transition-colors">Pas Geç</div>
                          {/* 1. DÜZELTME: Puan Arttır Butonu (Saf Altın Geçişi) */}
                          <div className="h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center font-bold text-primary-foreground uppercase text-xs shadow-lg shadow-primary/30 cursor-pointer hover:scale-105 hover:brightness-110 transition-all">Puan Arttır</div>
                        </div>
                      </div>
                    )}

                    {step.type === "reveal" && step.letters && (
                      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {step.letters.map((l, i) => (
                          <div key={i} className={i < 4 ? "animate-pulse" : "opacity-60"} style={{ animationDelay: `${i * 200}ms` }}>
                            <LetterTile letter={l} variant={i < 4 ? "gold" : "default"} size="lg" />
                          </div>
                        ))}
                      </div>
                    )}

                    {step.type === "win" && step.winningWord && (
                      <div className="text-center animate-in zoom-in duration-500">
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          {step.winningWord.split("").map((l, i) => (
                            <div key={i} className="animate-slot" style={{ animationDelay: `${i * 150}ms` }}>
                              <LetterTile letter={l} variant="gold" size="md" />
                            </div>
                          ))}
                        </div>
                        <div className="bg-primary/10 px-6 py-3 rounded-2xl border border-primary/30 inline-block backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                          <p className="gold-text font-black text-xl md:text-2xl uppercase tracking-tighter">Şampiyonun Kelimesi!</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* METİN ALANI */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                  
                  {/* 2. DÜZELTME: Altın Step Numarası (Gradient silindi, Glow eklendi) */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 font-black text-primary-foreground text-lg bg-primary shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300">
                    {step.number}
                  </div>
                  
                  <h3 className="text-foreground font-black text-2xl md:text-3xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {step.description}
                  </p>
                  
                  {/* İlerleme Çubukları (Progress Bars) */}
                  <div className="flex gap-2 mt-auto pt-6 border-t border-border/50">
                    {steps.map((_, j) => (
                      <div 
                        key={j} 
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${j === index ? "bg-primary shadow-[0_0_10px_rgba(212,175,55,0.5)]" : "bg-primary/10"}`} 
                      />
                    ))}
                  </div>

                  {/* 3. DÜZELTME: Sadece son adımda görünen CTA (Accent silindi, Parlama/Beyaz efekt eklendi) */}
                  {index === 3 && (
                    <div className="mt-8 animate-bounce">
                      <a href="#play" className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-widest hover:text-white hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all">
                        Şimdi Dene <ArrowDownCircle className="group-hover:translate-y-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
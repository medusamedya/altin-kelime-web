"use client"

import { Gift } from "lucide-react"

export function RewardSystem() {
  const letters = ["A", "L", "T", "I", "N", "K", "E", "L", "İ", "M", "E"]

  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/50">
      
      {/* Arka Plan Efektleri (Sadeleştirildi) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Üst Başlık Kısmı */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                Ödül Sistemi
              </span>
            </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            11 Harf, 11 <span className="gold-text">Ödül</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Her gün şampiyonu, A.L.T.I.N.K.E.L.İ.M.E harflerinden birini seçer ve içindeki ödülün sahibi olur.
          </p>
        </div>

        {/* 3D Dönen Harfler (Performanslı Grid Yapısı) */}
        {/* Tüm ekranlarda yan yana 11 kutu sığması için grid-cols-11 kullanıyoruz. */}
        <div className="grid grid-cols-11 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-16 max-w-4xl mx-auto">
          {letters.map((letter, index) => (
            <div 
              key={index} 
              className="w-full aspect-[3/4] group perspective-[1000px] cursor-pointer"
            >
              {/* İç Kapsayıcı */}
              <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-lg md:rounded-xl shadow-md">
                
                {/* Ön Yüz (Saf Altın Rengi - Animasyonsuz) */}
                <div className="absolute inset-0 bg-[#C8952A] rounded-lg md:rounded-xl flex items-center justify-center [backface-visibility:hidden] border border-[#d4af37]/50">
                  <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A2E]">
                    {letter}
                  </span>
                </div>

                {/* Arka Yüz (Koyu Zemin & Hediye İkonu) */}
                <div className="absolute inset-0 bg-card border-2 border-[#C8952A] rounded-lg md:rounded-xl flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#C8952A]" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Nasıl Çalışır Kutusu */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row gap-5 md:gap-8 items-start shadow-sm">
            
            <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center mt-1">
              <Gift className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-black text-foreground mb-2">
                Nasıl Çalışır?
              </h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                Günün şampiyonu, kapalı zarflardan birini seçer. Her zarfın üzerinde A.L.T.I.N.K.E.L.İ.M.E harflerinden biri yazar. Seçilen zarf açılır ve içindeki ödül yarışmacıya verilir. Ödüller sponsor destekli olarak belirlenir.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}
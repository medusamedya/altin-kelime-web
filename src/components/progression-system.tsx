import { Medal, Target, Star, Crown } from "lucide-react"

export function ProgressionSystem() {
  const steps = [
    {
      level: "GÜN",
      title: "Günlük Şampiyon",
      desc: "Her gün 5 yarışmacı mücadele eder, gün birincisi belirlenir.",
      icon: Medal,
    },
    {
      level: "HAFTA",
      title: "Haftalık Şampiyon",
      desc: "5 günün birincileri 6. gün karşılaşır.",
      icon: Target,
    },
    {
      level: "AY",
      title: "Aylık Şampiyon",
      desc: "4 hafta birincisi ay finalinde yarışır.",
      icon: Star,
    },
    {
      level: "SEZON",
      title: "Sezon Şampiyonu",
      desc: "5 ay birincisi büyük final için sahneye çıkar.",
      icon: Crown,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/50 select-none">
      {/* Arka Plan Işıkları */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                Yükseliş Sistemi
              </span>
            </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground leading-none">
            Zirveye Giden <br className="md:hidden"/><span className="gold-text">Yol</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Her gün yeni bir şans, her hafta yeni bir mücadele. Sezon şampiyonluğuna giden yolculuk burada başlıyor.
          </p>
        </div>

        {/* Timeline (Zaman Çizelgesi) Ağacı */}
        <div className="relative">
          {/* Ortadan İnen Parlak Çizgi */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-8 w-1 bg-gradient-to-b from-primary/10 via-primary/50 to-primary md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]" />

          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={index} className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Kart İçeriği */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                    <div className="group bg-card/40 backdrop-blur-md border border-primary/20 p-6 md:p-8 rounded-[2rem] hover:border-primary/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <span className="text-primary text-xs font-black tracking-widest uppercase mb-2 block">
                        {step.level}
                      </span>
                      <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors leading-none">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Ortadaki Yuvarlak İkon & Sayı */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)] group hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
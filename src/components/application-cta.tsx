"use client"

import { ClipboardList, Zap, CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ApplicationCTA() {
  const requirements = [
    "18 yaşını doldurmuş olmak",
    "T.C. vatandaşı olmak",
    "Türkçe kelime dağarcığına güvenmek",
    "Strateji ve hızlı düşünme yeteneği"
  ]

  const processSteps = [
    { num: "01", title: "Formu Doldur", desc: "Online başvuru formunu tamamla" },
    { num: "02", title: "Ön Eleme", desc: "Ekibimiz başvurunu değerlendirir" },
    { num: "03", title: "Casting", desc: "Yüz yüze veya online görüşme" },
    { num: "04", title: "Stüdyoya Gel", desc: "Işıklar seni bekliyor!" }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background border-t border-border/50">
      
      {/* Arka Plan Glow ve Dekoratif Harfler */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-10 left-10 md:left-20 text-[15rem] font-black text-foreground/[0.02] dark:text-foreground/[0.04] pointer-events-none -rotate-12 select-none">
        A
      </div>
      <div className="absolute bottom-10 right-10 md:right-20 text-[15rem] font-black text-foreground/[0.02] dark:text-foreground/[0.04] pointer-events-none rotate-12 select-none">
        K
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
            Başvuru
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            Sahneye Çıkma <span className="gold-text">Zamanı</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Kelime bilgine güveniyorsan, strateji kurmayı seviyorsan ve rekabetten korkmuyorsan, seni bekliyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* SOL TARAF: ŞARTLAR VE SÜREÇ */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Başvuru Şartları */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ClipboardList className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-black text-foreground">Başvuru Şartları</h3>
              </div>
              <div className="space-y-4"> {/* Boşluğu artırdım: space-y-3 -> space-y-4 */}
                {requirements.map((req, index) => (
                  <div 
                    key={index}
                    // Kart belirginliğini artırdım: bg-card/60, border-primary/20, shadow-sm
                    className="flex items-center gap-4 p-5 md:p-6 rounded-[1.5rem] bg-card/60 border border-primary/20 shadow-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-foreground text-lg">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Başvuru Süreci */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-black text-foreground">Başvuru Süreci</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"> {/* Boşluğu artırdım: gap-4 -> gap-5 */}
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    // Kart belirginliğini artırdım: bg-card/60, border-primary/20, shadow-sm
                    className="p-8 rounded-[1.5rem] bg-card/60 border border-primary/20 shadow-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group flex flex-col justify-center relative overflow-hidden"
                  >
                    {/* Arka planda devasa numara efekti */}
                    <span className="absolute -right-4 -bottom-4 text-[6rem] font-black text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none select-none">
                      {step.num}
                    </span>
                    
                    <span className="text-3xl font-black text-primary/60 group-hover:text-primary transition-colors mb-4 relative z-10">
                      {step.num}
                    </span>
                    <h4 className="font-black text-foreground text-xl mb-2 relative z-10">{step.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium relative z-10">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* SAĞ TARAF: CTA KARTI (YARIŞMACI OL) - Aynı Kaldı */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-card/60 backdrop-blur-xl border border-primary/30 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:border-primary/60 transition-colors duration-500 relative">
              
              {/* Badge */}
              <div className="absolute -top-4 left-8 bg-[#C8952A] text-[#1A1A2E] text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg tracking-widest uppercase">
                BAŞVURULAR AÇIK
              </div>

              <h3 className="text-3xl font-black text-foreground mb-4 mt-2">Yarışmacı Ol</h3>
              <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                Binlerce başvuru arasından seçilen yarışmacılardan biri ol. Büyük ödüller ve unutulmaz bir deneyim seni bekliyor.
              </p>

              {/* İstatistikler */}
              <div className="grid grid-cols-3 gap-4 mb-8 bg-background/50 rounded-2xl p-4 border border-border/50">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-black text-primary mb-1">1000+</div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Başvuru</div>
                </div>
                <div className="text-center border-x border-border/50">
                  <div className="text-xl md:text-2xl font-black text-primary mb-1">5</div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Günlük Yarışmacı</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-black text-primary mb-1">11</div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Farklı Ödül</div>
                </div>
              </div>

              {/* Aksiyon Butonu */}
              <Button 
                onClick={() => window.dispatchEvent(new Event('open-apply-modal'))}
                className="w-full gold-bg text-[#1A1A2E] font-black text-lg py-7 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.25)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Hemen Başvur
              </Button>

              <p className="text-center text-xs text-muted-foreground font-medium mt-6 px-4">
                Başvurunuz değerlendirildikten sonra sizinle iletişime geçilecektir.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
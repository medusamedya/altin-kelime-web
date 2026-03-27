"use client"
import { Handshake, CheckCircle2, Mail, Phone, Building2, Send, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SponsorshipSection() {
  const benefits = [
    "Prime-time yayın görünürlüğü",
    "Ürün yerleştirme fırsatları",
    "Ödül entegrasyonu",
    "Sosyal medya kampanyaları",
    "Özel etkinlik hakları",
    "Marka elçisi yarışmacılar"
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/50">
      
      {/* Arka Plan Glow Efektleri */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
            İş Birliği
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            Sponsor <span className="gold-text">Ol</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Türkiye'nin yeni fenomen yarışmasında markanızı milyonlara ulaştırın.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* SOL TARAF: SPONSORLUK AVANTAJLARI */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-primary" />
              <h3 className="text-2xl md:text-3xl font-black text-foreground">Sponsorluk Avantajları</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-5 md:p-6 rounded-[1.5rem] bg-card/60 border border-primary/20 shadow-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold text-foreground/90 text-sm md:text-base leading-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SAĞ TARAF: İLETİŞİM KARTI */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-card/60 backdrop-blur-xl border border-primary/30 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:border-primary/50 transition-colors duration-500 relative">
              
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3">İletişime Geçin</h3>
              <p className="text-muted-foreground font-medium leading-relaxed mb-8 text-sm md:text-base">
                Sponsorluk fırsatları ve iş birliği detayları için ekibimizle görüşün.
              </p>

              {/* İletişim Bilgileri Listesi */}
              <div className="space-y-4 mb-8">
                
                {/* E-posta */}
                <div className="flex items-center gap-4 bg-background/50 border border-border/50 p-4 rounded-2xl hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest block mb-0.5">E-posta</span>
                    <a href="mailto:sponsor@altinkelime.tv" className="font-bold text-foreground hover:text-primary transition-colors text-sm md:text-base">
                      sponsor@altinkelime.tv
                    </a>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-center gap-4 bg-background/50 border border-border/50 p-4 rounded-2xl hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest block mb-0.5">Telefon</span>
                    <a href="tel:+902120000000" className="font-bold text-foreground hover:text-primary transition-colors text-sm md:text-base">
                      +90 (212) 000 00 00
                    </a>
                  </div>
                </div>

                {/* Yapım */}
                <div className="flex items-center gap-4 bg-background/50 border border-border/50 p-4 rounded-2xl hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest block mb-0.5">Yapım</span>
                    <span className="font-bold text-foreground text-sm md:text-base">
                      Medusa Global Medya
                    </span>
                  </div>
                </div>

              </div>

              {/* Aksiyon Butonu */}
              <Button 
                onClick={() => window.location.href = "mailto:sponsor@altinkelime.tv"}
                className="w-full gold-bg text-[#1A1A2E] font-black text-base md:text-lg py-7 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.25)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                <Handshake className="w-5 h-5" />
                Sponsorluk Teklifi Al
              </Button>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
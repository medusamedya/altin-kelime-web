import { CalendarDays, Clock, Bell, Monitor, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BroadcastSchedule() {
  const schedule = [
    { day: "Pazartesi", type: "Yeni Bölüm", time: "20:00", active: false },
    { day: "Salı", type: "Yeni Bölüm", time: "20:00", active: false },
    { day: "Çarşamba", type: "Yeni Bölüm", time: "20:00", active: false },
    { day: "Perşembe", type: "Yeni Bölüm", time: "20:00", active: false },
    { day: "Cuma", type: "Yeni Bölüm", time: "20:00", active: false },
    { day: "Cumartesi", type: "Hafta Finali", time: "21:00", active: true },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/50 select-none">
      {/* Arka Plan Glow Efektleri */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* SOL TARAF: İÇERİK */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase">
              Yayın Akışı
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
              Her Akşam <br />
              <span className="gold-text">Ekranlarda</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-md">
              Hafta içi her gün yeni bir mücadele, Cumartesi büyük final. Türkiye’nin en heyecanlı kelime yarışmasını kaçırma!
            </p>

            {/* Kanal Bilgi Kartı */}
            <div className="bg-card/40 backdrop-blur-md border border-primary/20 rounded-[2rem] p-6 flex items-center gap-5 hover:border-primary/40 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Yayın Kanalı</span>
                <h4 className="text-xl font-black text-foreground">Yakında Açıklanacak</h4>
              </div>
            </div>

            <Button className="gold-bg text-[#1A1A2E] font-black px-8 py-7 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform flex items-center gap-3">
              <Bell className="w-5 h-5 fill-[#1A1A2E]" />
              Yayın Başladığında Haber Ver
            </Button>
          </div>

          {/* SAĞ TARAF: PROGRAM LİSTESİ */}
          <div className="lg:col-span-7">
            <div className="bg-card/60 backdrop-blur-2xl border border-border/60 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center gap-3 mb-8 border-b border-border/50 pb-6">
                <CalendarDays className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-black text-foreground tracking-tight">Haftalık Program</h3>
              </div>

              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-4 md:p-5 rounded-2xl transition-all duration-300 border ${
                      item.active 
                        ? "bg-[#C8952A] border-primary shadow-[0_10px_25px_rgba(200,149,42,0.2)]" 
                        : "bg-background/40 border-border/40 hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        item.active ? "bg-black/10" : "bg-card border border-border"
                      }`}>
                        <Clock className={`w-5 h-5 ${item.active ? "text-[#1A1A2E]" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <h5 className={`font-black text-base md:text-lg leading-none mb-1 ${
                          item.active ? "text-[#1A1A2E]" : "text-foreground"
                        }`}>
                          {item.day}
                        </h5>
                        <span className={`text-[11px] font-bold uppercase tracking-wider ${
                          item.active ? "text-[#1A1A2E]/70" : "text-muted-foreground"
                        }`}>
                          {item.type}
                        </span>
                      </div>
                    </div>
                    
                    <span className={`text-xl md:text-2xl font-black tracking-tighter ${
                      item.active ? "text-[#1A1A2E]" : "text-foreground"
                    }`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Saat Dilimi Bilgisi */}
              <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground/50 text-[10px] font-bold uppercase tracking-widest">
                <Globe size={12} /> Türkiye Saati (GMT+3)
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
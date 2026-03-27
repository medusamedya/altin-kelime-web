import { Eye, BrainCircuit, Target, HelpCircle, Zap } from "lucide-react"

export function AudienceExperience() {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/50 select-none">
      
     {/* Arka Plan Dekoratif Harfleri */}
      <div className="absolute top-20 left-10 md:left-20 text-[10rem] md:text-[15rem] font-black text-foreground/[0.03] dark:text-foreground/[0.08] pointer-events-none -rotate-12 select-none">
        ?
      </div>
      <div className="absolute bottom-20 left-10 md:left-32 text-[15rem] md:text-[20rem] font-black text-foreground/[0.03] dark:text-foreground/[0.08] pointer-events-none rotate-6 select-none">
        K
      </div>
      <div className="absolute top-40 right-10 md:right-20 text-[12rem] md:text-[18rem] font-black text-foreground/[0.03] dark:text-foreground/[0.08] pointer-events-none rotate-12 select-none">
        A
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* SOL TARAF: İÇERİK VE LİSTE */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                İzleyici Deneyimi
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground leading-tight">
              Sen Her Şeyi <br />
              <span className="gold-text">Görüyorsun</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-10 leading-relaxed max-w-lg">
              Yarışmacılar sadece kendi kartlarını görür. Ama sen? Sen masadaki tüm harfleri, tüm stratejileri, tüm olasılıkları görüyorsun. Bu seni oyunun gizli hakemi yapıyor.
            </p>

            <div className="space-y-4 max-w-lg">
              {/* Özellik 1 */}
              <div className="flex items-center gap-5 p-5 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Eye className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Tüm Kartları Gör</h4>
                  <p className="text-sm text-muted-foreground font-medium">Yarışmacıların elindeki gizli harfleri izle</p>
                </div>
              </div>

              {/* Özellik 2 */}
              <div className="flex items-center gap-5 p-5 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <BrainCircuit className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Stratejileri Analiz Et</h4>
                  <p className="text-sm text-muted-foreground font-medium">Kimin taktik yaptığını, kimin kelime kurduğunu bil</p>
                </div>
              </div>

              {/* Özellik 3 */}
              <div className="flex items-center gap-5 p-5 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Target className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Sonucu Tahmin Et</h4>
                  <p className="text-sm text-muted-foreground font-medium">Tüm bilgiye sahipken kazananı önceden tahmin et</p>
                </div>
              </div>
            </div>
          </div>

        {/* SAĞ TARAF: İNTERAKTİF GÖRSEL KART */}
          <div className="order-1 lg:order-2 relative w-full max-w-xl mx-auto lg:ml-auto">
            
            {/* Arka Plan Devasa Glow Efekti */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

            <div className="bg-gradient-to-b from-card/90 to-background/90 backdrop-blur-2xl border border-primary/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-primary/60 transition-colors duration-500">
              
             
              <div 
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none z-0 transition-opacity duration-500"
                style={{ animation: "shimmer 3s infinite" }}
              />

              {/* Kurdele Şeklinde Avantaj Etiketi */}
              <div className="absolute top-0 right-8 bg-gradient-to-b from-[#E5C07B] to-[#C8952A] text-[#1A1A2E] text-[10px] font-black px-5 py-2.5 rounded-b-xl shadow-[0_10px_20px_rgba(212,175,55,0.4)] flex items-center gap-1.5 z-20">
                <Zap className="w-3 h-3 fill-[#1A1A2E] " /> AVANTAJ
              </div>

              {/* ÜST BÖLÜM: Yarışmacı Görüşü */}
              <div className="relative z-10 mb-10">
                <span className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                  Yarışmacı Görüşü
                </span>
                <div className="flex gap-3 md:gap-4">
                  {/* Kapalı Kartlar (Radar Efektli) */}
                  <div className="relative w-14 h-20 md:w-16 md:h-24 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <HelpCircle className="w-6 h-6 text-primary/40 relative z-10" />
                  </div>
                  <div className="relative w-14 h-20 md:w-16 md:h-24 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <HelpCircle className="w-6 h-6 text-primary/40 relative z-10" />
                  </div>
                  {/* Açık Kartlar (Premium İç Gölge) */}
                  <div className="w-14 h-20 md:w-16 md:h-24 rounded-xl border border-border bg-gradient-to-br from-background to-muted flex items-center justify-center shadow-[inset_0_2px_15px_rgba(255,255,255,0.03)]">
                    <span className="text-2xl md:text-3xl font-black text-foreground drop-shadow-md">A</span>
                  </div>
                  <div className="w-14 h-20 md:w-16 md:h-24 rounded-xl border border-border bg-gradient-to-br from-background to-muted flex items-center justify-center shadow-[inset_0_2px_15px_rgba(255,255,255,0.03)]">
                    <span className="text-2xl md:text-3xl font-black text-foreground drop-shadow-md">R</span>
                  </div>
                </div>
              </div>

              {/* Işıklı Ayrıştırıcı Çizgi */}
              <div className="relative w-full h-px my-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-0.5 bg-primary rounded-full blur-[2px] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              </div>

              {/* ALT BÖLÜM: Senin Görüşün */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-5">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-full h-full bg-primary rounded-full blur-md opacity-50 animate-pulse" />
                    <Eye className="w-4 h-4 text-primary relative z-10" />
                  </div>
                  <span className="block text-[11px] font-bold text-primary uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                    Senin Görüşün
                  </span>
                </div>
                <div className="flex gap-3 md:gap-4">
                  {/* Senin Gördüğün Gizli Kartlar (Ultra Premium Altın) */}
                  <div className="w-14 h-20 md:w-16 md:h-24 rounded-xl border border-[#FFEAA7]/40 bg-gradient-to-br from-[#E5C07B] via-[#C8952A] to-[#996515] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.3)] transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group/card cursor-default">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                    <span className="text-2xl md:text-3xl font-black text-[#1A1A2E] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10">K</span>
                  </div>
                  <div className="w-14 h-20 md:w-16 md:h-24 rounded-xl border border-[#FFEAA7]/40 bg-gradient-to-br from-[#E5C07B] via-[#C8952A] to-[#996515] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.3)] transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group/card cursor-default">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                    <span className="text-2xl md:text-3xl font-black text-[#1A1A2E] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10">T</span>
                  </div>
                  {/* Açık Kartlar */}
                  <div className="w-14 h-20 md:w-16 md:h-24 rounded-xl border border-border bg-gradient-to-br from-background to-muted flex items-center justify-center shadow-[inset_0_2px_15px_rgba(255,255,255,0.03)]">
                    <span className="text-2xl md:text-3xl font-black text-foreground drop-shadow-md">A</span>
                  </div>
                  <div className="w-14 h-20 md:w-16 md:h-24 rounded-xl border border-border bg-gradient-to-br from-background to-muted flex items-center justify-center shadow-[inset_0_2px_15px_rgba(255,255,255,0.03)]">
                    <span className="text-2xl md:text-3xl font-black text-foreground drop-shadow-md">R</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
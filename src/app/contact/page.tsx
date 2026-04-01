import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, MapPin, Phone, Mail, Clock, Building2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form" // Az önce oluşturduğumuz etkileşimli form bileşeni
import { Metadata } from "next"

// --- METADATA AYARLARI ---
export const metadata: Metadata = {
  title: "İletişim | Altın Kelime",
  description: "Altın Kelime prodüksiyonu, format hakları veya projeleriniz hakkında Medusa Global ekibiyle iletişime geçin.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      
      {/* 1️⃣ SİNEMATİK HERO (İLETİŞİM) */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-background">
        
        {/* Arka Plan Görseli ve Gradyanlar */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/images/studio.jpg" // İletişim için uygun bir görsel
            alt="Altın Kelime İletişim" 
            fill 
            sizes="100vw"
            className="object-cover opacity-20 mix-blend-luminosity scale-105"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_40%,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>

        {/* Ana İçerik */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          
          <Reveal dir="up" delay={0}>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-[11px] tracking-[0.25em] uppercase mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary font-bold">İletişim</span>
            </div>
          </Reveal>

          <Reveal dir="up" delay={150}>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-none tracking-tight mb-6">
              <span className="block text-foreground drop-shadow-sm">BİZE</span>
              <span className="gold-text block mt-2">ULAŞIN</span>
            </h1>
          </Reveal>

          <Reveal dir="up" delay={300}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Star className="w-4 h-4 text-primary fill-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </Reveal>

          <Reveal dir="up" delay={450}>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium text-balance">
              Altın Kelime prodüksiyonu, format hakları veya yeni projeleriniz için Medusa Global ekibiyle doğrudan iletişime geçin.
            </p>
          </Reveal>
        </div>

        {/* Aşağı Kaydır Çizgisi */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground font-bold">Aşağı Kaydır</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        </div>
      </section>

      {/* 2️⃣ İLETİŞİM FORMU VE BİLGİLER BÖLÜMÜ */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* SOL KOLON: İletişim Formu Bileşeni */}
            <Reveal dir="up" delay={100} className="order-2 lg:order-1">
              <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                
                {/* Form İçi Soft Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="mb-10 relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Sorularınız mı var?</h2>
                  <p className="text-muted-foreground font-medium">Projeleriniz ve iş birlikleri için formu doldurun, ekibimiz en kısa sürede size dönsün.</p>
                </div>

                {/* Arka uç bağlantılı form bileşenimiz */}
                <ContactForm />

              </div>
            </Reveal>

            {/* SAĞ KOLON: İletişim Bilgileri & Harita */}
            <Reveal dir="up" delay={200} className="order-1 lg:order-2 flex flex-col justify-between">
              
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-[10px] md:text-xs font-black text-primary tracking-[0.2em] uppercase">Medusa Global</span>
                </div>
                <h2 className="text-4xl font-black text-foreground tracking-tight mb-8">
                  Lokasyonlarımız
                </h2>
                
                <div className="space-y-6">
                  {/* İzmir Ofisi */}
                  <div className="flex gap-4 p-6 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/30 transition-colors">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">İzmir</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">Umurbey Mahallesi, 1511. Sokak, No:3/A,<br />Alsancak, Konak / İzmir</p>
                    </div>
                  </div>

                  {/* İstanbul Ofisi */}
                  <div className="flex gap-4 p-6 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/30 transition-colors">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">İstanbul</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">Kardeşler Caddesi, No:57, Kat:6, Daire:35,<br />Şişli / İstanbul</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hızlı İletişim Kartları */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-6 rounded-2xl bg-card/30 border border-border/50">
                  <Clock className="w-6 h-6 text-primary mb-4" />
                  <h4 className="text-sm font-bold text-foreground mb-2">Ziyaretinizi Planlayın</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">Hafta içi: 09:00 – 19:00<br />Cumartesi: 09:00 – 19:00</p>
                </div>
                <div className="p-6 rounded-2xl bg-card/30 border border-border/50 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+908503026353" className="text-foreground font-bold hover:text-primary transition-colors">0 850 302 63 53</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:hello@medusaglobal.com.tr" className="text-foreground font-bold hover:text-primary transition-colors text-sm truncate">hello@medusaglobal.com.tr</a>
                  </div>
                </div>
              </div>

              <div className="w-full h-64 md:h-72 rounded-2xl overflow-hidden border border-border/50   shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.69077145308!2d27.136106576459763!3d38.42551057440866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8f0ac9e678d%3A0xe581390d9ccdfdd3!2zVW11cmJleSDEsMWfIEhhbsSx!5e0!3m2!1str!2str!4v1775044037168!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  )
}
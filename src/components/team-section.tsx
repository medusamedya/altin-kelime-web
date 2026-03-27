"use client"
import Image from "next/image"
import { Reveal } from "./reveal" // Reveal bileşeninin yolunu kontrol et
import { Trophy, Star, Video } from "lucide-react"

// Örnek Ekip Verisi (Faz 4'te Strapi'den çekilecek)
const teamMembers = [
  {
    name: "Muammer Sarıkaya",
    role: "Yapımcı / Medusa Global",
    img: "/images/avatar-1.jpg", // Kendi resim yollarını buraya ekleyeceksin
    icon: Trophy
  },
  {
    name: "Müjde Kaynar",
    role: "Format Yaratıcısı",
    img: "/images/avatar-2.jpg",
    icon: Star
  },
  {
    name: "Faruk Özdemir",
    role: "Genel Yönetmen",
    img: "/images/avatar-3.jpg",
    icon: Video
  }
]

export function TeamSection() {
  return (
    <section id="team" className="px-6 py-28 relative bg-background border-t border-border/40">
      {/* İnce Arka Plan Parlaması */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(200,149,42,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">
              Ekibimiz
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Program <span className="gold-text">Ekibi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Altın Kelime, televizyon prodüksiyonu, oyunlaştırma ve içerik geliştirme alanında ödüllü, deneyimli bir ekip tarafından hayata geçirilmektedir.
          </p>
        </Reveal>

        {/* Ekip Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => {
            const Icon = member.icon;
            return (
              <Reveal key={i} delay={i * 150} dir="up">
                <div className="group relative rounded-[2rem] overflow-hidden border border-primary/10 bg-card/30 shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Görsel Alanı */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image 
                      src={member.img} 
                      alt={member.name} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* Karartma ve Altın Gradyan Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Metin ve Bilgiler */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase font-bold block mb-2 drop-shadow-md">
                      {member.role}
                    </span>
                    <h3 className="text-white font-black text-2xl drop-shadow-lg">
                      {member.name}
                    </h3>
                  </div>

                  {/* Sağ Üstteki İkon (DÜZELTME: Saf Altın ve Koyu Kontrast) */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                      <Icon className="w-5 h-5 text-[#1A1A2E]" />
                    </div>
                  </div>

                </div>
              </Reveal>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
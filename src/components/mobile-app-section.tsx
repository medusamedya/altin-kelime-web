import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Users, Gamepad2, Smartphone, Timer } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Günlük Meydan Okuma",
    description: "Her gün güncellenen yeni kelime bulmacaları.",
  },
  {
    icon: Users,
    title: "Canlı Yarışmalar",
    description: "Gerçek zamanlı binlerce rakiple anında eşleş.",
  },
  {
    icon: Star,
    title: "Liderlik Tablosu",
    description: "Türkiye geneli sıralamada adını zirveye yazdır.",
  },
];

const phones = [
  { src: "/images/mobile-home.jpg", alt: "Ana ekran", label: "Günlük Görevler" },
  { src: "/images/mobile-daily.jpg", alt: "Günlük meydan okuma", label: "Canlı Oyun" },
  { src: "/images/mobile-game.jpg", alt: "Oyun ekranı", label: "Skor Tablosu" },
];

export function MobileAppSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background overflow-hidden relative border-t border-border/50 select-none">
      
      {/* 🚧 YENİ: "ÇOK YAKINDA" BUZLU CAM KATMANI 🚧 */}
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-md">
        <div className="bg-card/80 backdrop-blur-xl border border-primary/40 p-10 md:p-12 rounded-[3rem] shadow-[0_0_60px_rgba(212,175,55,0.15)] text-center max-w-lg mx-4 transform transition-all hover:scale-105 duration-500 group">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6 shadow-inner border border-primary/30 group-hover:bg-primary group-hover:text-[#1A1A2E] transition-colors duration-500">
            <Timer size={40} className="animate-pulse" />
          </div>
          <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="gold-text">Çok Yakında!</span>
          </h3>
          <p className="text-lg text-foreground/80 font-medium leading-relaxed">
            Altın Kelime heyecanını her an her yerde yaşayabilmeniz için mobil uygulamamız üzerinde özenle çalışıyoruz. Takipte kalın!
          </p>
        </div>
      </div>
      {/* 🚧 KATMAN BİTİŞİ 🚧 */}

      {/* Arka plan dekorasyonu - Saf Altın Işıltısı */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* İÇERİK (Katmanın Altında Kalacak Şekilde Opaklığı Hafif Kısıldı) */}
      <div className="container mx-auto px-4 relative z-10 opacity-40 pointer-events-none blur-[2px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Sol Taraf: Metinler ve İstatistikler */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                Yakında Mağazalarda
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight text-balance">
              <span className="gold-text inline-block drop-shadow-sm mb-2 uppercase">ALTIN KELİME</span> <br className="hidden md:block"/>
              CEBİNDE
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-medium">
              TV ekranındaki heyecanı bekleme! Hemen indir, günlük meydan okumalara katıl ve kelime ustası olduğunu milyonlara kanıtla.
            </p>

            {/* Özellikler */}
            <div className="space-y-4 mb-10 max-w-lg">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-4 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/50"
                >
                  <div className="w-14 h-14 bg-background border border-border rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

           {/* İndirme Butonları */}
            <div className="flex flex-wrap gap-4 mb-12">
              {/* App Store Butonu */}
              <div className="flex items-center gap-3 bg-[#000000] text-white border border-white/10 px-7 py-3 rounded-xl">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6 mb-1">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-84.3 103.6-115.8-34.6-19.6-62.8-49.8-62.7-94.8zm-91.4-182.2c19.3-23.4 32.3-56 28.8-88.5-27.1 1.2-61.6 18.2-81.8 42-17.3 20.5-32.3 53.6-28 85.9 30 2.3 62.3-15.6 81-39.4z" />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[9px] uppercase font-bold tracking-tighter opacity-70">Download on the</span>
                  <span className="text-base font-black leading-none">App Store</span>
                </div>
              </div>

              {/* Google Play Butonu */}
              <div className="flex items-center gap-3 bg-[#000000] text-white border border-white/10 px-7 py-3 rounded-xl">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[9px] uppercase font-bold tracking-tighter opacity-70">GET IT ON</span>
                  <span className="text-base font-black leading-none">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Mobil Cihaz Mock-up'ları */}
          <div className="order-1 lg:order-2 relative h-[450px] md:h-[600px] flex justify-center w-full mt-10 lg:mt-0">
            {/* Sol Telefon */}
            <div className="hidden md:block absolute left-0 lg:-left-8 top-12 z-10 transform -rotate-12 opacity-40">
              <div className="relative">
                <div className="w-48 h-[400px] bg-card/80 backdrop-blur-md rounded-[2.5rem] p-1.5 border border-border/50">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-background">
                    <Image src={phones[0].src} alt={phones[0].alt} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Orta Telefon (Ana Odak) */}
            <div className="absolute top-0 z-20">
              <div className="relative">
                <div className="w-56 md:w-64 h-[450px] md:h-[500px] bg-[#0A0A0A] rounded-[3rem] p-2.5 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-primary/30 relative z-10">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-background">
                    <Image src={phones[1].src} alt={phones[1].alt} fill className="object-cover" priority />
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Telefon */}
            <div className="hidden md:block absolute right-0 lg:-right-8 top-12 z-10 transform rotate-12 opacity-40">
              <div className="relative">
                <div className="w-48 h-[400px] bg-card/80 backdrop-blur-md rounded-[2.5rem] p-1.5 border border-border/50">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-background">
                    <Image src={phones[2].src} alt={phones[2].alt} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
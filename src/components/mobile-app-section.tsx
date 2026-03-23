
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Star, Users, Gamepad2, Smartphone } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden relative border-t border-border/50">
      {/* Arka plan dekorasyonu */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Sol Taraf: Metinler ve İstatistikler */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                Şimdi Mağazalarda
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight text-balance">
              {/* Ana başlığa gold-text eklendi */}
              <span className="gold-text inline-block drop-shadow-sm mb-2">ALTIN KELİME</span> <br className="hidden md:block"/>
              CEBİNDE
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-medium">
              TV ekranındaki heyecanı bekleme! Hemen indir, günlük meydan okumalara katıl, arkadaşlarınla yarış ve kelime ustası olduğunu milyonlara kanıtla.
            </p>

            {/* Özellikler (Features) */}
            <div className="space-y-4 mb-10 max-w-lg">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-4 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-background border border-border rounded-xl flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-accent group-hover:border-primary transition-all duration-500 shadow-sm group-hover:shadow-primary/30">
                    <feature.icon className="w-6 h-6 text-muted-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* İndirme Butonları */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 font-bold px-8 py-6 rounded-xl shadow-xl shadow-primary/20 transition-transform hover:-translate-y-1">
                <Download className="w-5 h-5" />
                App Store'dan İndir
              </Button>
              <Button size="lg" variant="outline" className="gap-2 font-bold px-8 py-6 rounded-xl border-primary/30 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all hover:-translate-y-1 backdrop-blur-sm">
                <Download className="w-5 h-5" />
                Google Play'de Keşfet
              </Button>
            </div>

            {/* Sosyal Kanıt İstatistikleri */}
            <div className="flex flex-wrap gap-8 lg:gap-10 pt-8 border-t border-border/50">
              <div>
                <p className="text-4xl md:text-5xl font-black gold-text">500K+</p>
                <p className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-[0.15em]">İndirme</p>
              </div>
              <div className="w-px bg-border/50" />
              <div>
                <p className="text-4xl md:text-5xl font-black gold-text">4.8</p>
                <p className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-[0.15em]">Puan</p>
              </div>
              <div className="w-px bg-border/50 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-4xl md:text-5xl font-black gold-text">50K+</p>
                <p className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-[0.15em]">Aktif Oyuncu</p>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Mobil Cihaz Mock-up'ları */}
          <div className="order-1 lg:order-2 relative h-[450px] md:h-[600px] flex justify-center w-full mt-10 lg:mt-0">
            
            {/* Sol Telefon (Sadece Masaüstü/Tablet) */}
            <div className="hidden md:block absolute left-0 lg:-left-8 top-12 z-10 transform -rotate-12 transition-all duration-700 hover:scale-105 hover:-rotate-6 hover:z-30 opacity-80 hover:opacity-100">
              <div className="relative">
                <div className="w-48 h-[400px] bg-card/80 backdrop-blur-md rounded-[2.5rem] p-1.5 shadow-2xl border border-border/50">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-background">
                    <Image src={phones[0].src} alt={phones[0].alt} fill className="object-cover" />
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-card rounded-full" />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-bold text-muted-foreground bg-secondary/90 px-4 py-1.5 rounded-full backdrop-blur-sm border border-border">
                    {phones[0].label}
                  </span>
                </div>
              </div>
            </div>

            {/* Orta Telefon (Mobilde de görünür, Ana Odak) */}
            <div className="absolute top-0 z-20 transform transition-all duration-700 hover:scale-[1.03] hover:-translate-y-4">
              <div className="relative">
                <div className="w-56 md:w-64 h-[450px] md:h-[500px] bg-card rounded-[3rem] p-2 shadow-2xl shadow-primary/20 border border-primary/40 group">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-background">
                    <Image src={phones[1].src} alt={phones[1].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-card rounded-full" />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-sm font-black text-primary-foreground bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-full border border-primary/50 shadow-lg shadow-primary/30 backdrop-blur-md">
                    {phones[1].label}
                  </span>
                </div>
              </div>
            </div>

            {/* Sağ Telefon (Sadece Masaüstü/Tablet) */}
            <div className="hidden md:block absolute right-0 lg:-right-8 top-12 z-10 transform rotate-12 transition-all duration-700 hover:scale-105 hover:rotate-6 hover:z-30 opacity-80 hover:opacity-100">
              <div className="relative">
                <div className="w-48 h-[400px] bg-card/80 backdrop-blur-md rounded-[2.5rem] p-1.5 shadow-2xl border border-border/50">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-background">
                    <Image src={phones[2].src} alt={phones[2].alt} fill className="object-cover" />
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-card rounded-full" />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-bold text-muted-foreground bg-secondary/90 px-4 py-1.5 rounded-full backdrop-blur-sm border border-border">
                    {phones[2].label}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
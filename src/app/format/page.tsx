"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  MonitorPlay, Globe2, Brain, Zap, Target, Users, LayoutTemplate, 
  Settings, LineChart, ChevronRight, FileText, Smartphone, Tv,
  ChevronDown,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/final-cta"
import { Reveal } from "@/components/reveal" // Kendi Reveal bileşenimiz

export default function FormatPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20 bg-background overflow-hidden">
      
     {/* 1️⃣ SİNEMATİK HERO (B2B / YATIRIMCI ODAKLI - TUTARLI TASARIM) */}
      <section id="tanitim" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
        
        {/* Arka Plan Görseli ve Gradyanlar */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/images/studio.jpg" 
            alt="Altın Kelime Stüdyo Formatı" 
            fill 
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-luminosity scale-105"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_40%,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>

        {/* Ana İçerik */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-10">
          
          <Reveal dir="up" delay={0}>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-[11px] tracking-[0.25em] uppercase mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary font-bold">Format Hakkında</span>
            </div>
          </Reveal>

          <Reveal dir="up" delay={150}>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-none tracking-tight mb-6">
              <span className="block text-foreground drop-shadow-sm">ALTIN KELİME</span>
              <span className="gold-text block mt-2">FORMATI</span>
            </h1>
          </Reveal>

          {/* Dün eklediğimiz Yıldızlı Ayıraç (Tutarlılık için) */}
          <Reveal dir="up" delay={300}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Star className="w-4 h-4 text-primary fill-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </Reveal>

          <Reveal dir="up" delay={450}>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
              Altın Kelime, kelime bilgisi ve stratejik karar alma unsurlarını bir araya getiren <span className="text-primary font-bold">modern ve lisanslanabilir</span> bir televizyon yarışması formatıdır.
            </p>
          </Reveal>

          {/* Format Sayfasına Özel B2B Özellik Kutuları */}
          <Reveal dir="up" delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-3 bg-card/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:scale-105 transition-transform">
                <Globe2 className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm text-foreground">Global Uyarlanabilirlik</span>
              </div>
              <div className="flex items-center gap-3 bg-card/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:scale-105 transition-transform">
                <Settings className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm text-foreground">Hızlı Prodüksiyon</span>
              </div>
            </div>
          </Reveal>

          <Reveal dir="up" delay={750}>
            <Button size="lg" className="gold-bg text-[#1A1A2E] font-black px-10 py-7 rounded-2xl shadow-lg hover:scale-105 transition-transform" asChild>
              <a href="#ozellikler">Format Detayları <ChevronDown className="ml-2 w-5 h-5" /></a>
            </Button>
          </Reveal>
        </div>

        {/* Aşağı Kaydır Çizgisi (Dünkü tasarımdan alındı) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground font-bold">Aşağı Kaydır</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        </div>
      </section>

      {/* 2️⃣ FORMATIN AMACI VE TEMEL YAPISI (FACT SHEET İLE BİRLİKTE) */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Sol Taraf: Tanıtım ve Amaç Metinleri */}
            <div className="lg:col-span-8 space-y-16">
              
              <Reveal dir="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-6 border-b border-border/50 pb-4 text-foreground">
                    Yalnızca Bir Oyun Değil, <br/><span className="gold-text">Bir Zeka Arenası</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-6">
                    Altın Kelime, dilimizin zengin kelime hazinesini rekabetçi ve eğlenceli bir oyun yapısı içinde sunan bir yarışma programıdır. Format; <strong className="text-foreground">bilgi, strateji ve zaman baskısını</strong> aynı potada eritir.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                    Her bölümde yarışmacılar verilen harflerle en uzun kelimeyi üretmeye çalışırken aynı zamanda oyunda kalmak için kritik kararlar verir. Bu durum programı, izleyicinin de zihinsel olarak oyuna katıldığı bir rekabet ortamına çevirir.
                  </p>
                </div>
              </Reveal>

              <Reveal dir="left" delay={200}>
                <div>
                  <h3 className="text-2xl font-black mb-8 text-foreground">Formatın Temel Yapısı</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                      <Users className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-bold text-lg mb-2">5 Yarışmacı</h4>
                      <p className="text-sm text-muted-foreground">Her bölümde 5 yarışmacı, zekalarını ve stratejilerini çarpıştırır.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                      <LayoutTemplate className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-bold text-lg mb-2">7 Harf Sistemi</h4>
                      <p className="text-sm text-muted-foreground">Yarışmacılara 2 gizli harf verilir, masada 5 harf kademeli açılır.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                      <LineChart className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-bold text-lg mb-2">Puan Rekabeti</h4>
                      <p className="text-sm text-muted-foreground">Oyuncular puan artırarak risk alır ya da güvenli limanda kalarak çekilir.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                      <Target className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-bold text-lg mb-2">Tek Kazanan</h4>
                      <p className="text-sm text-muted-foreground">En uzun ve geçerli kelimeyi zamanında üreten yarışmacı turu kazanır.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sağ Taraf: FORMAT FACT SHEET (Sticky & Premium B2B Panel) */}
            <div className="lg:col-span-4 sticky top-32">
              <Reveal dir="right" delay={300}>
                <div className="bg-gradient-to-b from-card to-background border border-primary/20 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
                  {/* Soft Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[50px] pointer-events-none" />
                  
                  <div className="flex items-center gap-3 mb-8 border-b border-border/50 pb-6">
                    <FileText className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-2xl font-black text-foreground leading-none">Format Bilgileri</h3>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Fact Sheet</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-6">
                    <li className="flex justify-between items-center group">
                      <span className="text-muted-foreground text-sm font-medium">Program Türü</span>
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors">Yarışma / Eğlence</span>
                    </li>
                    <li className="w-full h-px bg-border/40" />
                    <li className="flex justify-between items-center group">
                      <span className="text-muted-foreground text-sm font-medium">Bölüm Süresi</span>
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors">45 - 60 Dakika</span>
                    </li>
                    <li className="w-full h-px bg-border/40" />
                    <li className="flex justify-between items-center group">
                      <span className="text-muted-foreground text-sm font-medium">Yarışmacı Sayısı</span>
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors">5 Kişi</span>
                    </li>
                    <li className="w-full h-px bg-border/40" />
                    <li className="flex justify-between items-center group">
                      <span className="text-muted-foreground text-sm font-medium">Stüdyo Formatı</span>
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors">Çoklu Yarışmacı</span>
                    </li>
                    <li className="w-full h-px bg-border/40" />
                    <li className="flex justify-between items-center group">
                      <span className="text-muted-foreground text-sm font-medium">Hedef Kitle</span>
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors">Genel İzleyici (Aile)</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3️⃣ FORMAT ÖZELLİKLERİ (NEDEN GÜÇLÜ?) */}
      <section id="ozellikler" className="py-24 bg-card/20 border-y border-border/50 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <Reveal dir="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Formatın <span className="gold-text">Güçlü Yönleri</span></h2>
              <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                Altın Kelime, klasik bilgi yarışmalarına yeni bir dinamizm kazandıran özgün, sürdürülebilir ve maliyet-etkin bir üretim yapısına sahiptir.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Reveal dir="up" delay={100} className="h-full">
              <div className="h-full bg-background border border-border/50 p-8 rounded-3xl hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Bilgi ve Strateji Dengesi</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Yarışmacılar yalnızca salt kelime bilgileriyle değil, puan yönetimi ve stratejik kararlarıyla da öne çıkar.</p>
              </div>
            </Reveal>

            <Reveal dir="up" delay={200} className="h-full">
              <div className="h-full bg-background border border-border/50 p-8 rounded-3xl hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Yüksek Tempo</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Harflerin kademeli açılması ve puan rekabeti, oyunun başından sonuna kadar tempoyu sürekli canlı tutar.</p>
              </div>
            </Reveal>

            <Reveal dir="up" delay={300} className="h-full">
              <div className="h-full bg-background border border-border/50 p-8 rounded-3xl hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MonitorPlay className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">İzleyici Katılımı</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Pasif izleyicilikten çıkarır. Ekran başındakiler de harfleri takip ederek yarışmaya zihinsel olarak anında dahil olur.</p>
              </div>
            </Reveal>
          </div>

          {/* Yapım Avantajları ve Global Uyarlama (2 Kolon) */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal dir="left" delay={400} className="h-full">
              <div className="h-full bg-card/40 border border-primary/20 p-8 md:p-10 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Settings className="w-64 h-64 text-primary" />
                </div>
                <h4 className="text-2xl font-black mb-4 text-foreground relative z-10">Yapımcı Dostu (Maliyet Etkin)</h4>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-center gap-2 text-muted-foreground text-sm font-medium"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Tek ve sabit stüdyo kurulumu.</li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm font-medium"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Günde çoklu bölüm (bant) çekebilme imkanı.</li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm font-medium"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Sonsuz kelime kombinasyonu ile bitmeyen içerik.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal dir="right" delay={500} className="h-full">
              <div className="h-full bg-card/40 border border-primary/20 p-8 md:p-10 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Globe2 className="w-64 h-64 text-primary" />
                </div>
                <h4 className="text-2xl font-black mb-4 text-foreground relative z-10">Uluslararası Uyarlanabilirlik</h4>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed relative z-10">
                  Formatın temel mantığı "kelime üretimi" ve "puan stratejisine" dayandığı için, dünyanın herhangi bir dilinde ve alfabesinde hiçbir mekanik değişikliğe gerek kalmadan kolayca uyarlanabilir. Bu, global lisanslama için eşsiz bir fırsattır.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 4️⃣ 360 DERECE VİZYON (PLATFORM POTANSİYELİ) */}
      <section id="potansiyel" className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Reveal dir="up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">360° Marka <span className="gold-text">Potansiyeli</span></h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto mb-16">
              Altın Kelime yalnızca bir televizyon programı olarak kalmaz; ekosistem yaratmaya uygun, esnek bir IP (Fikri Mülkiyet) olarak tasarlanmıştır.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { label: "TV Yarışması", icon: Tv },
              { label: "Dijital Platform", icon: MonitorPlay },
              { label: "Mobil Oyun", icon: Smartphone },
              { label: "Kutu Oyunu", icon: LayoutTemplate },
            ].map((platform, i) => (
              <Reveal key={i} delay={i * 150} dir="up">
                <div className="flex flex-col items-center justify-center p-6 w-40 h-40 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors group cursor-default shadow-sm">
                  <platform.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
                  <span className="text-xs font-bold text-foreground text-center uppercase tracking-wider">{platform.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal dir="up" delay={600}>
            <div className="mt-20">
               <h3 className="text-3xl md:text-4xl font-black gold-text uppercase tracking-widest drop-shadow-md">7 Harf – 1 Dakika – 1 Kazanan</h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5️⃣ FINAL CTA (İLETİŞİM / İŞ BİRLİĞİ) */}
      <div id="iletisim">
        <FinalCTA />
      </div>

    </main>
  )
}
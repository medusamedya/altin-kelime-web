"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Brain, Target, Eye, Users, ChevronDown, ChevronRight, 
  Clock, Coins, Play, AlertCircle, ShieldAlert, Award, Calendar, Zap, Star,
  CheckCircle2,
  HelpCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LetterTile } from "@/components/letter-tile"
import { FinalCTA } from "@/components/final-cta"
// Kendi oluşturduğun optimize Reveal bileşenini import ediyoruz (Yolunu projene göre güncelleyebilirsin)
import { Reveal } from "@/components/reveal" 
import { RuleAccordion } from "@/components/rule-accordion"

// ════════════════════════════════════════════════════════════
// ANA SAYFA BİLEŞENİ
// ════════════════════════════════════════════════════════════
export default function HowToPlayPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20 bg-background overflow-hidden">
      
      {/* 1️⃣ OYUN ÖZETİ (SİNEMATİK HERO) */}
      <section id="ozet" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
        
        {/* Arka Plan Görseli ve Gradyanlar */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/images/studio.jpg" 
            alt="Altın Kelime Stüdyosu" 
            fill 
            sizes="100vw" /* Performans: Tarayıcıya resim boyutunu bildirir */
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
              <span className="text-primary font-bold">Nasıl Oynanır?</span>
            </div>
          </Reveal>

          <Reveal dir="up" delay={150}>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-none tracking-tight mb-6">
              <span className="block text-foreground drop-shadow-sm">OYUN</span>
              <span className="gold-text block mt-2">ÖZETİ</span>
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
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
              Altın Kelime’de yarışmacılar, kendilerine verilen harfler ve oyun alanında açılan harflerle en uzun ve geçerli Türkçe kelimeyi üretmeye çalışır. Ancak her turda yarışmacılar: <span className="text-primary font-bold">puanlarını yönetir, rakiplerini analiz eder ve risk alır.</span>
            </p>
          </Reveal>

          <Reveal dir="up" delay={600}>
            <p className="text-lg md:text-xl font-black text-primary mb-10 tracking-widest uppercase drop-shadow-md">
              Sadece kelimeyi değil, zamanı da yönetmelisin.
            </p>
          </Reveal>

          <Reveal dir="up" delay={750}>
            <Button size="lg" className="gold-bg text-[#1A1A2E] font-black px-10 py-7 rounded-2xl shadow-lg hover:scale-105 transition-transform" asChild>
              <a href="#kurallar">Kuralları Keşfet <ChevronDown className="ml-2 w-5 h-5" /></a>
            </Button>
          </Reveal>
        </div>

        {/* Aşağı Kaydır Çizgisi */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground font-bold">Aşağı Kaydır</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        </div>
      </section>

      {/* 2️⃣ 4 ADIMDA OYUN & İSTATİSTİKLER */}
      <section className="py-24 relative overflow-hidden bg-background">
        
        {/* İÇE GÖMÜLÜ CSS ANİMASYONU (Akan Altın Işık İçin) */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes card-sweep {
            0% { transform: translateX(-150%) skewX(-15deg); }
            100% { transform: translateX(300%) skewX(-15deg); }
          }
        `}} />

        <div className="container mx-auto px-4 relative z-10">
          
          <Reveal dir="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4"><span className="text-primary">4 Adımda</span> Altın Kelime</h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
            </div>
          </Reveal>

          {/* 4 Adım Kartları (Eşit Boyutlu) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 items-stretch">
            {[
              { step: "1", title: "Harfler Dağıtılır", desc: "Her yarışmacıya 2 harf verilir. Oyun alanında ise toplam 5 harf kademeli olarak açılır." },
              { step: "2", title: "Strateji Başlar", desc: "Yarışmacılar puan ekleyerek oyunda kalabilir, bekleyebilir ya da turdan çekilebilir." },
              { step: "3", title: "Harfler Açılır", desc: "Ortadaki harfler açıldıkça yeni kelime ihtimalleri ortaya çıkar ve heyecan yükselir." },
              { step: "4", title: "En Uzun Kelime", desc: "Süre sonunda TDK’da yer alan en uzun kelimeyi oluşturan yarışmacı turu kazanır." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} dir="up" className="h-full">
                <div className="h-full flex flex-col bg-card/40 backdrop-blur-sm p-8 rounded-3xl border border-primary/10 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                  
                  {/* AKAN ALTIN IŞIK */}
                  <div 
                    className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-0 will-change-transform"
                    style={{ animation: "card-sweep 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
                  />

                  {/* Arka Plan Devasa Rakamı */}
                  <div className="text-8xl font-black text-primary/5 absolute -top-4 -right-4 transition-colors duration-500 select-none z-0">
                    {item.step}
                  </div>
                  
                  {/* İçerik */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black mb-4 mt-6 text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-medium flex-1 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Dinamik Alt Çizgi */}
                  <div className="relative z-10 h-1.5 w-12 bg-primary/20 rounded-full mt-8 transition-all duration-500 ease-out group-hover:w-full group-hover:bg-primary" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Farklı Yapan Nedir & Sayılar */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Sol Taraf: Özellikler */}
            <div className="lg:col-span-6 space-y-8">
              <Reveal dir="left">
                <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Altın Kelime’yi <br/><span className="gold-text">farklı yapan nedir?</span></h2>
              </Reveal>
              
              <div className="space-y-4">
                {[
                  { title: "Kelime Bilgisi", desc: "Yarışmanın temelinde güçlü bir Türkçe kelime bilgisi vardır.", icon: Brain },
                  { title: "Strateji", desc: "Sadece doğru kelimeyi değil, doğru zamanı da bulmak zorunludur.", icon: Target },
                  { title: "Psikolojik Rekabet", desc: "Rakiplerin hamlelerini okumak ve baskı altında karar vermek şarttır.", icon: Eye },
                  { title: "İzleyici Katılımı", desc: "Ekran başındakiler de zihinsel olarak oyuna anında dahil olur.", icon: Users },
                ].map((f, i) => (
                  <Reveal key={i} delay={i * 100} dir="left">
                    <div className="flex gap-5 p-5 rounded-2xl bg-card/20 border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-colors duration-300 group relative">
                      <div className="w-14 h-14 rounded-2xl bg-background border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <f.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="relative z-10">
                        <h4 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{f.title}</h4>
                        <p className="text-sm text-muted-foreground font-medium">{f.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sağ Taraf: İstatistik Paneli (Temiz ve Premium Görünüm) */}
            <div className="lg:col-span-6 h-full">
              <Reveal dir="right" delay={200} className="h-full">
                <div className="relative h-full rounded-[2.5rem] border border-primary/20 bg-gradient-to-b from-card/60 to-background/90 shadow-2xl overflow-hidden group">

                  {/* Arka Plan Soft Işık (Resim yerine zarif bir parlama) */}
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
                  <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                  {/* Panel İçeriği */}
                  <div className="relative z-10 p-8 lg:p-12 flex flex-col h-full">
                    
                    {/* Panel Başlığı */}
                    <div className="flex flex-col items-center justify-center mb-10 text-center">
                      <h2 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">Sayılarla Oyun</h2>
                      <p className="text-sm text-muted-foreground mt-2 font-medium">Formatın temel dinamiği</p>
                    </div>
                    
                    {/* İç Kartlar (Bento Grid Mantığı) */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 flex-1">
                      {/* Yarışmacı */}
                      <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-background/50 border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group/box hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-5xl font-black gold-text mb-2 transition-transform group-hover/box:scale-110 duration-300">5</p>
                        <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-1">Yarışmacı</p>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Her Bölümde</p>
                      </div>
                      
                      {/* Harf */}
                      <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-background/50 border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group/box hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-5xl font-black gold-text mb-2 transition-transform group-hover/box:scale-110 duration-300">7</p>
                        <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-1">Harf</p>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Kombinasyon</p>
                      </div>
                      
                      {/* Süre */}
                      <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-background/50 border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group/box hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-5xl font-black gold-text mb-2 transition-transform group-hover/box:scale-110 duration-300">1</p>
                        <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-1">Dakika</p>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Karar Süreci</p>
                      </div>
                      
                      {/* Puan */}
                      <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-background/50 border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group/box hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-5xl font-black gold-text mb-2 transition-transform group-hover/box:scale-110 duration-300">1000</p>
                        <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-1">Puan</p>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Başlangıç</p>
                      </div>
                    </div>

                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ OYUN KURALLARI (ACCORDION, SSS & GÖRSELLİ ÖZET) */}
      <section id="kurallar" className="py-24 bg-card/30 border-y border-border/50 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <Reveal dir="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Oyun <span className="gold-text">Kuralları</span></h2>
              <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                Oyunun temel mantığı kolay görünse de rekabet, puan yönetimi ve zaman baskısı oyunu çok daha dinamik hale getirir.
              </p>
            </div>
          </Reveal>

          {/* ÜST BLOK: Kurallar ve Sık Sorulan Sorular */}
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
            
            {/* Sol Taraf: Accordion Kurallar */}
            <div className="lg:col-span-8">
              <Reveal dir="left">
                <RuleAccordion 
                  rules={[
                    { num: "01", title: "Yarışmacı Yapısı", desc: "Her oyunda 5 yarışmacı yer alır. Her yarışmacı oyuna belirli bir başlangıç puanı ile başlar ve puanlarını koruyarak finale kalmaya çalışır." },
                    { num: "02", title: "Harf Dağılımı", desc: "Her yarışmacıya 2 harf verilir. Ortaya ise toplam 5 harf açılır. Bu harflerin tamamı bir anda değil, tur mantığı içinde kademeli olarak görünür hale gelir." },
                    { num: "03", title: "Oyuna Katılım ve Puan Artırma", desc: "Yarışmacılar oyunda kalmak için puan ekleyebilir. Bir oyuncu puan artırdığında, diğer oyuncular da oyunda kalmak istiyorsa bu seviyeye çıkmak zorundadır. Turdan çekilen oyuncu o tur için oyunun dışında kalır." },
                    { num: "04", title: "Harflerin Açılması", desc: "Ortadaki harfler sırayla açılır. Her yeni harf açıldığında oyuncuların kelime kurma ihtimalleri değişir ve stratejik karar alanı genişler." },
                    { num: "05", title: "Süre ve Karar Anı", desc: "Tüm harfler açıldıktan sonra yarışmacılar sınırlı süre içinde en uzun kelimeyi oluşturmaya çalışır. Bu aşamada; hız, dikkat, kelime bilgisi ve stres altında düşünme becerisi belirleyici olur." },
                    { num: "06", title: "Geçerli Kelime Şartı", desc: "Kurulan kelimenin: Türk Dil Kurumu sözlüğünde yer alması, özel isim olmaması ve sadece verilen harflerle oluşturulması gerekir." },
                    { num: "07", title: "Kazananın Belirlenmesi", desc: "Geçerli ve en uzun kelimeyi oluşturan yarışmacı turu kazanır. Kazanan oyuncu, o turda ortaya konulan puan avantajını elde eder." },
                  ]}
                />
              </Reveal>
            </div>

            {/* Sağ Taraf: Sabit (Sticky) Genişletilmiş SSS Kutusu */}
            <div className="lg:col-span-4 space-y-8 sticky top-32">
              <Reveal dir="right" delay={200}>
                <div className="bg-background border border-border/80 rounded-3xl p-8 shadow-xl hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-8 border-b border-border/50 pb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black text-foreground">S.S.S.</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group">
                      <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Özel isimler geçerli mi?</h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">Hayır, TDK sözlüğünde yer almayan hiçbir özel isim kabul edilmez.</p>
                    </div>
                    <div className="w-full h-px bg-border/40" />
                    
                    <div className="group">
                      <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Puan eklemek zorunlu mu?</h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">Hayır. Oyuncu risk almak istemiyorsa oyundan çekilip o turu pas geçebilir.</p>
                    </div>
                    <div className="w-full h-px bg-border/40" />
                    
                    <div className="group">
                      <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Sadece ortadaki harfler yeterli mi?</h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">Evet, kelime oluşturulabilir. Ancak oyuncunun kendi elindeki gizli harfleri kullanması büyük avantaj sağlar.</p>
                    </div>
                    <div className="w-full h-px bg-border/40" />
                    
                    <div className="group">
                      <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Eşitlik olursa ne olur?</h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">İki yarışmacı aynı uzunlukta geçerli kelime bulursa, oyunun özel eşitlik bozucu kuralı devreye girer.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            
          </div>

          {/* ALT BLOK: Görselli Kısa Özet Alanı */}
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-card/20 rounded-[3rem] border border-border/50 p-6 md:p-12 overflow-hidden relative">
            {/* Arka Plan Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Sol Görsel Alanı */}
            <Reveal dir="left" delay={100}>
              <div className="relative rounded-[2rem] overflow-hidden aspect-video md:aspect-[4/3] border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group isolate">
                <Image 
                  src="/images/studio.jpg" // Buraya stüdyo genel açısı veya yarışmacı görseli gelebilir
                  alt="Altın Kelime Stüdyosu" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 -z-10" 
                  style={{ filter: "brightness(0.6) contrast(1.1)" }} 
                />
                {/* Karartma */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent -z-10" />
                
                {/* Yüzen Rozet (Glassmorphism) */}
                <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                      <Target className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Hedef</p>
                      <p className="text-white font-black text-sm">En Uzun Kelime</p>
                    </div>
                  </div>
                </div>

                {/* Yüzen Harf (Süsleme) */}
                <div className="absolute top-6 right-6 animate-float-slow">
                  <LetterTile letter="A" size="sm" variant="gold" />
                </div>
              </div>
            </Reveal>

            {/* Sağ Metin ve Özet Listesi */}
            <Reveal dir="right" delay={300}>
              <div className="relative z-10 lg:pl-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6">
                  Özetle
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-8 leading-tight">
                  Bir Bakışta <br/> <span className="gold-text">Altın Kelime</span>
                </h3>
                
                <ul className="space-y-5">
                  {[
                    "Her yarışmacıya baştan 2 gizli harf verilir.",
                    "Oyun alanında 5 harf tur içinde kademeli açılır.",
                    "Yarışmacılar stratejik olarak puan artırabilir veya turdan çekilebilir.",
                    "Strateji kadar zamanı doğru yönetmek de hayati önem taşır.",
                    "Süre bittiğinde en uzun ve geçerli kelimeyi kuran turu kazanır."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 4️⃣ TUR YAPISI (VERTICAL TIMELINE) */}
      <section id="tur-yapisi" className="py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal dir="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Tur <span className="gold-text">Yapısı</span></h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
              <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                Yarışmacılar tur tur ilerler, puanlarını korur ve bölüm sonunda en güçlü oyuncu öne çıkar.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-16 items-center">
            
            {/* Sol Taraf: Timeline */}
            <div className="md:col-span-8 relative">
              <div className="absolute left-[27px] md:left-[35px] top-4 bottom-4 w-1 bg-border rounded-full" />
              
              <div className="space-y-12">
                {[
                  { title: "Başlangıç", desc: "5 yarışmacı oyun alanına gelir ve başlangıç puanlarıyla yarışmaya başlar." },
                  { title: "İlk Harfler ve Kararlar", desc: "Yarışmacılara özel harfler dağıtılır. Ortadaki harfler açılmaya başlar. Oyuncular bu aşamada oyuna ne kadar dahil olacaklarına karar verir." },
                  { title: "Puan Rekabeti", desc: "Oyuncular puan ekleyerek turda kalır ya da geri çekilir. Stratejik baskının en güçlü hissedildiği andır." },
                  { title: "Son Harfler", desc: "Yeni harfler açıldıkça olası kelimeler şekillenmeye başlar. Yarışmacılar risk düzeyini yeniden değerlendirir." },
                  { title: "Süreli Kelime Üretimi", desc: "Tüm harfler açıldıktan sonra yarışmacılar kısıtlı süre içinde en uzun kelimeyi oluşturmaya çalışır." },
                  { title: "Sonuç ve Eleme", desc: "En uzun kelime onaylanır. Puanlar dağıtılır, puanı biten yarışmacılar elenir." },
                ].map((step, i) => (
                  <Reveal key={i} delay={i * 100} dir="up">
                    <div className="relative pl-20 md:pl-24 group">
                      <div className="absolute left-4 md:left-6 w-8 h-8 rounded-full bg-background border-4 border-border group-hover:border-primary transition-colors duration-300 z-10 top-0 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground font-medium text-base leading-relaxed bg-card/20 p-4 rounded-2xl border border-transparent transition-colors">{step.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sağ Taraf: Sezon Akışı */}
            <div className="md:col-span-4 space-y-6">
              <Reveal dir="up" delay={200}>
                <div className="p-8 rounded-3xl bg-card border border-border/50 transition-colors">
                  <Calendar className="w-10 h-10 text-primary mb-5" />
                  <h4 className="font-black text-2xl mb-2">Gün Birincisi</h4>
                  <p className="text-sm text-muted-foreground font-medium">Bölüm şampiyonu belirlenir.</p>
                </div>
              </Reveal>
              <Reveal dir="up" delay={300}>
                <div className="p-8 rounded-3xl bg-card border border-border/50 transition-colors">
                  <Award className="w-10 h-10 text-primary mb-5" />
                  <h4 className="font-black text-2xl mb-2">Hafta Finali</h4>
                  <p className="text-sm text-muted-foreground font-medium">Gün kazananları çarpışır.</p>
                </div>
              </Reveal>
              <Reveal dir="up" delay={400}>
                <div className="p-8 rounded-3xl gold-bg text-[#1A1A2E] shadow-lg">
                  <Zap className="w-10 h-10 text-[#1A1A2E] mb-5" />
                  <h4 className="font-black text-2xl mb-2">Sezon Finali</h4>
                  <p className="text-sm font-bold opacity-80">Ay birincileri büyük ödül için sezon finaline çıkar.</p>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5️⃣ ÖRNEK SENARYO (GÖRSELLİ STORY BLOCKS) */}
      <section id="senaryo" className="py-32 bg-card/30 border-t border-border/50 relative overflow-hidden">
        
        {/* Arka plan süslemeleri (Performans dostu) */}
        <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
          <LetterTile letter="A" size="lg" />
        </div>
        <div className="absolute bottom-40 left-10 opacity-5 pointer-events-none">
          <LetterTile letter="K" size="lg" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <Reveal dir="up">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Örnek Oyun <span className="gold-text">Senaryosu</span></h2>
              <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                Teoriyi pratiğe dökelim. Aşağıdaki temsilî senaryo, oyunun gerçek temposunu, stresini ve karar yapısını yansıtır.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              { scene: "Sahne 1", title: "Harfler Dağıtılıyor", text: "5 yarışmacı yerini alır. Her yarışmacıya 2 harf verilir. Ortadaki 5 harf henüz kapalıdır. Sunucu yarışmayı başlatır ve ilk karar anı yaklaşır.", icon: Users },
              { scene: "Sahne 2", title: "İlk Harf Açılıyor", text: "Ortadaki ilk harf açılır. Yarışmacılar olası kelime ihtimallerini düşünmeye başlar. Henüz tablo net değildir; bazıları bekler, bazıları erken avantaj ister.", icon: Eye },
              { scene: "Sahne 3", title: "Puan Baskısı Başlıyor", text: "Oyunculardan biri puan artırır. Bu hamle diğerleri üzerinde baskı oluşturur. Herkes sadece kelimeyi değil, rakibinin özgüvenini de okumaya çalışır.", icon: Coins },
              { scene: "Sahne 4", title: "Harfler Tamamlanıyor", text: "Son harfler de açılır. İhtimaller belirginleşmiştir. Bazı yarışmacılar güçlü görünür, bazıları ise blöf yaparak oyunda kalmaya çalışır.", icon: Brain },
              { scene: "Sahne 5", title: "Süre Başlıyor", text: "Sunucu süreyi başlatır. Yarışmacılar en uzun kelimeyi bulmalıdır. Bu an oyunun en yüksek gerilim noktasıdır; hız, dikkat ve stres yönetimi devrededir.", icon: Clock },
              { scene: "Sahne 6", title: "Kelimeler Açıklanıyor", text: "Süre sona erer. Geçerli ve en uzun kelimeyi oluşturan oyuncu turu kazanır. Puanlar güncellenir ve yeni tur başlar.", icon: Play },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} dir={i % 2 === 0 ? "left" : "right"}>
                <div className="flex flex-col md:flex-row items-stretch gap-6 bg-background rounded-3xl border border-border/50 p-6 hover:border-primary/40 transition-colors group relative">
                  <div className="md:w-48 shrink-0 flex flex-col justify-center items-center p-6 bg-card rounded-2xl border border-border">
                    <s.icon className="w-8 h-8 text-primary mb-3" />
                    <span className="text-xs font-black tracking-widest uppercase text-muted-foreground">{s.scene}</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center pr-6">
                    <h3 className="text-xl font-black text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground font-medium text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal dir="up" delay={200}>
            <div className="mt-24 text-center">
              <h3 className="text-3xl md:text-4xl font-black gold-text uppercase tracking-widest">Bir Harf Açılır. Denge Değişir.</h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6️⃣ FINAL CTA */}
      <FinalCTA />

    </main>
  )
}
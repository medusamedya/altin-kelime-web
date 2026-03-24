import Link from "next/link"
import { 
  Brain, Target, Eye, MonitorPlay, Play, CheckCircle2, ArrowRight, ShieldAlert, Zap, Users,Flame,Layers, 
  ChevronRight, Star 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LetterTile } from "@/components/letter-tile"
import { FinalCTA } from "@/components/final-cta"
import Image from "next/image"
import { AnimatedStats } from "@/components/animated-stats"
import { StudioGallery } from "@/components/studio-gallery"
import { HowToPlay } from "@/components/how-to-play"

// Meta etiketleri (SEO İçin)
export const metadata = {
  title: "Altın Kelime Nedir? | Program Konsepti",
  description: "Kelime bilgisi, stratejik düşünme ve hızlı karar alma becerilerini bir araya getiren yeni nesil televizyon yarışması.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      
     {/* 1️⃣ ÜST TANITIM BLOĞU (SİNEMATİK HERO) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
        
        {/* Arka Plan Görseli ve Gradyanlar */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/studio.jpg" // Stüdyo veya karanlık bir arka plan görseli
            alt="Altın Kelime Stüdyosu" 
            fill 
            className="object-cover opacity-40 mix-blend-luminosity"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_40%,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
          
          {/* İnce Izgara Deseni (BackgroundTiles alternatifi) */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>

        {/* Ana İçerik */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          
          {/* Breadcrumb (Geri Bağlantı) */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-[11px] tracking-[0.25em] uppercase mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-bold">Altın Kelime Nedir?</span>
          </div>

          {/* Devasa Başlık */}
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-none tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 fill-mode-both">
            <span className="block text-foreground drop-shadow-sm">ALTIN KELİME</span>
            <span className="gold-text block mt-2">NEDİR?</span>
          </h1>

          {/* Yıldızlı Ayıraç */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-1000 delay-300 fill-mode-both">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <Star className="w-4 h-4 text-primary fill-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Açıklama Metni */}
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
            Altın Kelime’de yarışmacılar verilen harflerle en uzun ve geçerli Türkçe kelimeyi üretmeye çalışır. Ancak bu <span className="text-primary font-bold">yalnızca bir kelime oyunu değildir.</span> Yarışmacılar aynı zamanda:
          </p>

          {/* Özellik Kutuları */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
            <div className="flex items-center gap-3 bg-card/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-primary/20 shadow-lg hover:bg-primary/10 transition-colors">
              <ShieldAlert className="w-5 h-5 text-primary" />
              <span className="font-bold text-sm text-foreground">Risk Alır</span>
            </div>
            <div className="flex items-center gap-3 bg-card/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-primary/20 shadow-lg hover:bg-primary/10 transition-colors">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-bold text-sm text-foreground">Rakipleri Analiz Eder</span>
            </div>
            <div className="flex items-center gap-3 bg-card/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-primary/20 shadow-lg hover:bg-primary/10 transition-colors">
              <Target className="w-5 h-5 text-primary" />
              <span className="font-bold text-sm text-foreground">Stratejik Karar Verir</span>
            </div>
          </div>

          <p className="text-lg md:text-xl font-black text-primary mb-10 tracking-widest uppercase drop-shadow-md animate-pulse">
            Her harf açıldığında oyunun dengesi değişir.
          </p>

          {/* CTA Butonu */}
          <div className="animate-in fade-in zoom-in-95 duration-1000 delay-1000 fill-mode-both">
            <Button size="lg" className="gold-bg text-[#1A1A2E] font-black px-10 py-7 rounded-2xl shadow-[0_0_40px_rgba(200,149,42,0.3)] hover:scale-105 transition-transform" asChild>
              <Link href="/#how-to-play">Nasıl Oynanır <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>

        {/* Aşağı Kaydır (Keşfet) Çizgisi */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground font-bold">Keşfet</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        </div>
      </section>
      {/* ══════════════════════════════════════════════════
          BÖLÜM 1.5 — 2 Kolonlu Tanıtım (Yüzen Kartlar)
      ══════════════════════════════════════════════════ */}
      <section className="relative px-4 py-28 max-w-7xl mx-auto overflow-hidden">
        {/* Arka plan ışığı */}
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* SOL KOLON: Metinler ve İkonlu Liste */}
          <div className="relative z-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            {/* Kategori Etiketi */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-8">
              Program Hakkında
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
              Kelime Bilgisi ve<br />
              <span className="gold-text">Stratejinin</span><br />
              Buluştuğu Yarışma
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-medium">
              Altın Kelime'de yarışmacılar verilen harflerle en uzun ve geçerli Türkçe
              kelimeyi üretmeye çalışır. Ancak bu yalnızca bir kelime oyunu değildir.
              Yarışmacılar aynı zamanda:
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                { t: "Doğru zamanda risk alır", icon: Flame },
                { t: "Rakiplerini analiz eder", icon: Brain },
                { t: "Stratejik kararlar verir", icon: Layers },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-primary/10 bg-primary/5 hover:border-primary/30 hover:bg-primary/10 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-bold">{item.t}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground text-sm font-bold italic border-l-2 border-primary/50 pl-4 mb-10 py-1">
              Her harf açıldığında oyunun dengesi değişir.
            </p>
            
            <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary hover:gold-text hover:border-primary rounded-xl font-black tracking-widest uppercase px-8 py-6 transition-all shadow-lg hover:shadow-primary/25" asChild>
              <Link href="/#how-to-play">Nasıl Oynanır <ChevronRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>

          {/* SAĞ KOLON: Görsel ve Yüzen Elementler */}
          <div className="relative z-10 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative">
              
              {/* Ana Görsel */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-primary/20 shadow-[0_0_60px_rgba(212,175,55,0.15)] group">
                <Image 
                  src="/images/avatar-1.jpg" // Buraya stüdyo veya yarışmacı resmi gelebilir
                  alt="Altın Kelime Strateji" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.7) contrast(1.1)" }} 
                />
                
                {/* Karartma Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                
                {/* Sol Alt Köşe Metni */}
                <div className="absolute bottom-8 left-32 right-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-black drop-shadow-md">Canlı Yayın</span>
                  </div>
                  <p className="text-white font-black text-2xl tracking-tight drop-shadow-lg">Büyük Karar Anı</p>
                </div>

                {/* Köşe Süslemeleri (Altın Çizgiler) */}
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/60" />
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/60" />
              </div>

              {/* Yüzen Puan Kartı (Sol Alt) */}
              <div className="absolute -bottom-8 -left-8 p-5 rounded-2xl border border-primary/30 bg-card/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.15)] animate-float z-20">
                <p className="text-primary text-[10px] tracking-widest uppercase font-bold mb-1">Puan</p>
                <p className="text-foreground font-black text-3xl mb-1">2,450</p>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
              </div>

              {/* Yüzen Harf Kartı (Sağ Üst) */}
              <div className="absolute -top-6 -right-6 flex gap-2 p-3.5 rounded-2xl border border-primary/30 bg-card/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-float-slow z-20">
                <LetterTile letter="A" size="sm" variant="gold" />
                <LetterTile letter="L" size="sm" />
                <LetterTile letter="T" size="sm" />
              </div>
              
            </div>
          </div>
        </div>
      </section>
<AnimatedStats />
      {/* 3️⃣ PROGRAMIN YAPISI (TIMELINE / 3 ADIM) - Dark Mode İyileştirmesi Yapıldı */}
<section className="py-24 bg-background relative overflow-hidden">
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4 tracking-tight">Programın Yapısı</h2>
      <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {/* Masaüstü için bağlantı çizgisi */}
      <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border/50 z-0" />
      
      {[
        { step: "01", title: "Başlangıç Aşaması", desc: "Her yarışmacıya iki harf verilir. Ortaya ise beş harf kapalı olarak yerleştirilir. Yarışmacılar ellerindeki potansiyeli değerlendirerek oyuna nasıl yaklaşacaklarına karar verir." },
        { step: "02", title: "Karar ve Rekabet", desc: "Harfler sırayla açıldıkça yarışmacılar puan artırabilir, oyunda kalabilir ya da turdan çekilebilir. Bu aşama stratejik ve psikolojik boyutu belirler." },
        { step: "03", title: "Kelime ve Sonuç", desc: "TDK’da yer alan en uzun kelimeyi üreten turu kazanır ve puanları toplar." }
      ].map((phase, i) => (
        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
          {/* Yuvarlak Adım Kutusu - Belirginleştirildi */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 z-10 relative
            {/* Hafif Altın Neon Parıltısı (Glow) */}
            shadow-[0_0_30px_rgba(212,175,55,0.1)] 
            
            {/* Işık ve Renk Ayarları */}
            bg-background           /* Light temada beyaz kalır */
            dark:bg-card           /* Dark temada koyu gri olur (Arka plandan ayrılır) */
            
            border-4               /* Kenarlık kalınlığı */
            border-card            /* Light temada ince gri */
            dark:border-primary/20 /* Dark temada sönük altın neon */
            
            {/* Hover Efektleri */}
            group-hover:scale-110 group-hover:border-primary dark:group-hover:border-primary transition-all duration-500 hover:shadow-primary/30
          ">
            <span className="text-4xl font-black gold-text transition-transform duration-500 group-hover:scale-110">{phase.step}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{phase.title}</h3>
          <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-xs">{phase.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4️⃣ FORMATIN FARKI BLOĞU */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Sol Taraf: Açıklama */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs tracking-widest uppercase">Formatın Gücü</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Altın Kelime'yi <br/>
                <span className="gold-text">Farklı Yapan Nedir?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-medium leading-relaxed">
                Altın Kelime’yi klasik kelime yarışmalarından ayıran en önemli unsur, bilgi ile stratejiyi aynı yapıda buluşturmasıdır. Yarışmacılar sadece doğru cevabı bilerek değil, doğru zamanda doğru kararı vererek de avantaj kazanır.
              </p>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Oyunun ritmi; harflerin kademeli açılması, puanların yükselmesi ve blöf ihtimalinin her an masada olmasıyla sürekli diri kalır.
              </p>
            </div>

            {/* Sağ Taraf: Vurgu Kutuları */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "7 Harf", desc: "Her tur yepyeni bir kombinasyon" },
                { title: "1 Dakika", desc: "Yüksek tempo, hızlı karar mekanizması" },
                { title: "5 Yarışmacı", desc: "Çok yönlü ve dinamik rekabet" },
                { title: "Tek Kazanan", desc: "Sona yaklaştıkça artan psikolojik baskı" }
              ].map((box, i) => (
                <div key={i} className="bg-background p-6 rounded-2xl border border-border/80 hover:border-primary/50 transition-colors shadow-sm">
                  <h4 className="text-2xl font-black text-foreground mb-2">{box.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
                <HowToPlay />

      {/* 5️⃣ KELİME EVRENİ (MARQUEE) */}
      <section className="py-12 overflow-hidden bg-primary/5 border-b border-border/40">
        <div className="flex whitespace-nowrap animate-marquee">
          {["Kelime", "Strateji", "Rekabet", "Bilgi", "Türkçe", "Eğlence", "Heyecan"].map((word, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-foreground/10 uppercase tracking-widest mx-8">
              {word} • 
            </span>
          ))}
          {["Kelime", "Strateji", "Rekabet", "Bilgi", "Türkçe", "Eğlence", "Heyecan"].map((word, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-foreground/10 uppercase tracking-widest mx-8">
              {word} • 
            </span>
          ))}
        </div>
      </section>

      {/* 6️⃣ KAPANIŞ METNİ */}
      <section className="py-32 bg-background text-center px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Bir Kelimeden Fazlası</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-medium text-balance">
            Altın Kelime, Türkçenin zenginliğini ekran heyecanıyla buluşturan; bilgiyi, stratejiyi ve rekabeti aynı anda yaşatan güçlü bir yarışma formatıdır. Her tur yeni bir gerilim, her karar yeni bir ihtimal ve her kelime oyunun kaderini değiştirebilecek bir hamledir.
          </p>
          <div className="inline-flex items-center gap-4 bg-card/50 border border-primary/20 px-8 py-4 rounded-full shadow-lg">
            <span className="text-primary font-black tracking-[0.2em] uppercase">7 Harf</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
            <span className="text-primary font-black tracking-[0.2em] uppercase">1 Dakika</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
            <span className="text-primary font-black tracking-[0.2em] uppercase">1 Kazanan</span>
          </div>
        </div>
      </section>

      {/* 7️⃣ CTA BLOĞU (Ana Sayfadaki Bileşen) */}
      <FinalCTA />

    </main>
  )
}
"use client"

import { useState, useEffect, } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Brain, Target, MonitorPlay, Trophy, ChevronRight, 
  UserCheck, AlertTriangle, Video, Timer, ArrowRight, Zap, Play, Send,
  ChevronDown,
  Award,
  Clock,
  Eye,
   Activity,
   Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LetterTile } from "@/components/letter-tile"
import { FinalCTA } from "@/components/final-cta"
import { Reveal } from "@/components/reveal"
import { GamePlayground } from "@/components/game-playground"

// ════════════════════════════════════════════════════════════
// MİNİ OYUN BİLEŞENİ (Growth Hack - Dönüşüm Arttırıcı)
// ════════════════════════════════════════════════════════════
function MiniGame() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "won" | "lost">("idle")
  const [timeLeft, setTimeLeft] = useState(15)
  const [inputValue, setInputValue] = useState("")
  const letters = ["A", "L", "T", "I", "N"]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000)
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("lost")
    }
    return () => clearInterval(timer)
  }, [gameState, timeLeft])

  const startGame = () => {
    setGameState("playing")
    setTimeLeft(15)
    setInputValue("")
  }

  const checkWord = (e: React.FormEvent) => {
    e.preventDefault()
    // Basit bir kontrol: 3 harften uzunsa kazanmış sayalım (Demo amaçlı)
    if (inputValue.length >= 3) {
      setGameState("won")
    } else {
      alert("Daha uzun bir kelime denemelisin!")
    }
  }

  return (
    <div className="bg-card/80 backdrop-blur-xl border border-primary/30 rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden isolate">
      {/* Oyun Arka Plan Süslemeleri */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />

      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-black mb-4">Kendini Test Et</h3>
        <p className="text-muted-foreground font-medium mb-8">
          Başvurmadan önce hızını görelim. Verilen harflerle 15 saniyede anlamlı bir kelime üretebilir misin?
        </p>

        {gameState === "idle" && (
          <Button onClick={startGame} size="lg" className="gold-bg text-[#1A1A2E] font-black px-10 py-6 rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/20">
            <Play className="w-5 h-5 mr-2" /> Teste Başla
          </Button>
        )}

        {gameState === "playing" && (
          <div className="animate-in zoom-in-95 duration-500">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Timer className={`w-8 h-8 ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-primary'}`} />
              <span className={`text-4xl font-black ${timeLeft <= 5 ? 'text-red-500' : 'gold-text'}`}>
                00:{timeLeft.toString().padStart(2, '0')}
              </span>
            </div>
            
            <div className="flex justify-center gap-2 mb-8">
              {letters.map((l, i) => (
                <LetterTile key={i} letter={l} size="md" variant={i % 2 === 0 ? "gold" : "default"} />
              ))}
            </div>

            <form onSubmit={checkWord} className="flex gap-2 max-w-md mx-auto">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                placeholder="Kelimenizi yazın..."
                className="flex-1 bg-background/50 border border-primary/30 rounded-xl px-6 font-bold text-lg text-center uppercase focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                autoFocus
              />
              <Button type="submit" className="gold-bg text-[#1A1A2E] font-black px-8 rounded-xl">
                Onayla
              </Button>
            </form>
          </div>
        )}

        {gameState === "won" && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
              <Target className="w-10 h-10 text-green-400" />
            </div>
            <h4 className="text-2xl font-black text-white mb-2">Harika İş Çıkardın!</h4>
            <p className="text-muted-foreground mb-8">Hızın ve kelime bilgin tam da aradığımız gibi. Sahne seni bekliyor.</p>
            <Button size="lg" className="bg-primary text-primary-foreground font-black px-10 py-6 rounded-2xl hover:bg-primary/90 transition-all" asChild>
              <a href="#basvuru-formu">Hemen Başvur <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>
        )}

        {gameState === "lost" && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/50">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            <h4 className="text-2xl font-black text-white mb-2">Süre Doldu!</h4>
            <p className="text-muted-foreground mb-8">Stüdyo heyecanı bazen kelimeleri unutturabilir. Bir daha denemeye ne dersin?</p>
            <Button onClick={startGame} variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 font-black px-10 py-6 rounded-2xl">
              Tekrar Dene
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════
// ANA SAYFA
// ════════════════════════════════════════════════════════════
export default function ApplyPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20 bg-background overflow-hidden">
      
      {/* 1️⃣ SİNEMATİK HERO (YARIŞMACI OL - TUTARLI TASARIM) */}
      <section id="basvuru-hero" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
        
        {/* Arka Plan Görseli ve Gradyanlar */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/images/studio.jpg" 
            alt="Altın Kelime Sahnesi" 
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
              <span className="text-primary font-bold">Yarışmacı Ol</span>
            </div>
          </Reveal>

          <Reveal dir="up" delay={150}>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-none tracking-tight mb-6">
              <span className="block text-foreground drop-shadow-sm">YARIŞMACI</span>
              <span className="gold-text block mt-2">OL</span>
            </h1>
          </Reveal>

          {/* Tutarlılık İçin Eklenen Yıldızlı Ayıraç */}
          <Reveal dir="up" delay={300}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Star className="w-4 h-4 text-primary fill-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </Reveal>

          <Reveal dir="up" delay={450}>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
              Kelime bilginize ve stratejik düşünme becerinize güveniyorsanız Altın Kelime sahnesinde yerinizi alabilirsiniz. Her bölümde yeni yarışmacılar, yeni kelimeler ve yeni rekabetler başlar.
            </p>
          </Reveal>

          <Reveal dir="up" delay={600}>
            <p className="text-lg md:text-xl font-black text-primary mb-10 tracking-widest uppercase drop-shadow-md">
              Siz de bu heyecanın bir parçası olun.
            </p>
          </Reveal>

          <Reveal dir="up" delay={750}>
            <Button size="lg" className="gold-bg text-[#1A1A2E] font-black px-12 py-7 rounded-2xl shadow-[0_0_40px_rgba(200,149,42,0.3)] hover:scale-105 transition-transform" asChild>
              <a href="#test">Hemen Başvur <ChevronDown className="ml-2 w-5 h-5" /></a>
            </Button>
          </Reveal>
        </div>

        {/* Aşağı Kaydır Çizgisi (Tutarlılık için eklendi) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground font-bold">Aşağı Kaydır</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        </div>
      </section>

     {/* 2️⃣ NEDEN KATILMALISIN (ASİMETRİK BENTO & GÖRSEL ŞÖLEN) */}
      <section className="py-32 relative overflow-hidden bg-background">
        
        {/* Arka plan devasa soft ışık */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <Reveal dir="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Neden <span className="gold-text">Katılmalısın?</span></h2>
              <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                Sıradan bir yarışma değil, Türkiye'nin yeni televizyon fenomeninde başrol oynama fırsatı.
              </p>
            </div>
          </Reveal>

          {/* Asimetrik Grid (Bento) Başlangıcı */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* KART 1: TELEVİZYON DENEYİMİ (2 Kolon Genişliğinde - Resimli) */}
            <Reveal dir="left" delay={100} className="md:col-span-2">
              <div className="relative h-[22rem] md:h-[26rem] rounded-[2.5rem] overflow-hidden group border border-primary/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                {/* Performans dostu görsel */}
                <Image 
                  src="/images/studio.jpg" 
                  alt="Stüdyo" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 66vw" 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  style={{ filter: "brightness(0.6) saturate(1.2)" }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />

                {/* Canlı Yayın Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Canlı Stüdyo</span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center mb-5 group-hover:-translate-y-2 transition-transform duration-500">
                    <MonitorPlay className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">Televizyon Deneyimi</h3>
                  <p className="text-white/70 font-medium max-w-md leading-relaxed">
                    Milyonların izlediği profesyonel bir stüdyo ortamında, spot ışıklarının altında yarışma heyecanını bizzat yaşa.
                  </p>
                </div>
              </div>
            </Reveal>

           {/* KART 2: BİLGİNİ GÖSTER (1 Kolon Genişliğinde) */}
            <Reveal dir="right" delay={200} className="md:col-span-1">
              <div className="relative h-[22rem] md:h-[26rem] bg-card/40 backdrop-blur-sm border border-primary/20 rounded-[2.5rem] p-8 flex flex-col justify-end overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)]">
                
                {/* Arka plan glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-700" />

                {/* Yüzen "BAŞVUR" Harfleri Süslemesi */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* B */}
                  <div className="absolute top-8 left-8 -rotate-12 opacity-30 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:rotate-0 transition-all duration-500">
                    <LetterTile letter="B" size="sm" variant="gold" />
                  </div>
                  {/* A */}
                  <div className="absolute top-4 left-24 rotate-6 opacity-20 group-hover:opacity-90 group-hover:-translate-y-1 group-hover:rotate-0 transition-all duration-500 delay-75">
                    <LetterTile letter="A" size="sm" />
                  </div>
                  {/* Ş */}
                  <div className="absolute top-10 right-12 rotate-12 opacity-40 group-hover:opacity-100 group-hover:-translate-y-3 group-hover:-rotate-6 transition-all duration-500 delay-150">
                    <LetterTile letter="Ş" size="sm" variant="gold" />
                  </div>
                  {/* V */}
                  <div className="absolute top-24 left-16 -rotate-12 opacity-10 group-hover:opacity-70 group-hover:translate-x-2 transition-all duration-500 delay-200">
                    <LetterTile letter="V" size="sm" />
                  </div>
                  {/* U */}
                  <div className="absolute top-28 right-24 rotate-45 opacity-10 blur-[1px] group-hover:opacity-80 group-hover:blur-none group-hover:rotate-12 transition-all duration-500 delay-300">
                    <LetterTile letter="U" size="sm" />
                  </div>
                  {/* R */}
                  <div className="absolute top-36 right-8 -rotate-12 opacity-5 blur-[2px] group-hover:opacity-60 group-hover:blur-none group-hover:-translate-y-2 transition-all duration-500 delay-500">
                    <LetterTile letter="R" size="sm" variant="gold" />
                  </div>
                </div>

                {/* İçerik */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-background/80 border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <Brain className="w-7 h-7 text-primary group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">Bilgini Göster</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    Türkçenin zengin kelime hazinesini kullanarak rakiplerini geride bırak ve kelime dağarcığını kanıtla.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* KART 3: STRATEJİNİ TEST ET (1 Kolon Genişliğinde) */}
            <Reveal dir="up" delay={300} className="md:col-span-1">
              <div className="relative h-[22rem] md:h-[24rem] bg-background border border-border/80 rounded-[2.5rem] p-8 flex flex-col justify-end overflow-hidden group hover:border-primary/40 transition-colors">
                {/* Izgara (Grid) arka plan süslemesi */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500" />

                <Target className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                <h3 className="text-2xl font-black text-foreground mb-3 relative z-10">Stratejini Test Et</h3>
                <p className="text-muted-foreground font-medium leading-relaxed relative z-10">Doğru anda risk al, puanlarını ustaca yönet ve kriz anlarında soğukkanlı kalarak oyunda kal.</p>
              </div>
            </Reveal>

            {/* KART 4: BÜYÜK ÖDÜLLER (2 Kolon Genişliğinde - TAMAMI ALTIN) */}
            <Reveal dir="up" delay={400} className="md:col-span-2">
              <div className="relative h-[22rem] md:h-[24rem] gold-bg rounded-[2.5rem] p-8 md:p-12 overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_50px_rgba(200,149,42,0.25)]">
                
                {/* İçe Gömülü Sweep Animasyonu */}
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes award-sweep {
                    0% { transform: translateX(-150%) skewX(-15deg); }
                    100% { transform: translateX(300%) skewX(-15deg); }
                  }
                `}} />

                {/* Shining sweep effect (Hover'da üzerinden ışık geçer) */}
                <div 
                  className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-0 will-change-transform" 
                  style={{ animation: "award-sweep 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite" }} 
                />

                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between h-full gap-6">
                  <div className="flex-1 text-center md:text-left flex flex-col justify-end h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1A1A2E]/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Trophy className="w-8 h-8 text-[#1A1A2E]" />
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-[#1A1A2E] mb-4 tracking-tight">Büyük Ödüller</h3>
                    <p className="text-[#1A1A2E]/80 font-bold text-lg md:text-xl max-w-sm leading-relaxed">
                      Gün birinciliğinden sezon finaline uzanan bu yolda ilerle, büyük ödül için amansızca mücadele et.
                    </p>
                  </div>

                  {/* Süsleme (Görünmez devasa kupa ikonu) */}
                  <div className="hidden md:flex items-center justify-center relative opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                    <Award className="w-48 h-48 text-[#1A1A2E] transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
      {/* 2.5 YARIŞMACI DENEYİMİ (ZİHİNSEL ODAK / HUD KONSEPTİ) */}
      <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
        
        {/* Arka Plan Radar/Grid Süslemeleri */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full animate-[spin_90s_linear_infinite_reverse] pointer-events-none" />
        
        {/* Merkez Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          
          <Reveal dir="up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6">
                Sahne Arkası
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
                Yarışmacı <span className="gold-text bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50">Deneyimi</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
                Altın Kelime’de yarışmacılar <span className="text-primary font-black border-b border-primary/30 pb-1">yalnızca kelime üretmez.</span>
              </p>
            </div>
          </Reveal>

          {/* 4'lü Deneyim Grid'i (Crosshair/HUD Tasarımı) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            
            {/* Ortadaki Dekoratif Çapraz Çizgiler (Sadece Masaüstünde) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 z-0" />

            {/* 1. Strateji */}
            <Reveal dir="left" delay={100}>
              <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 p-8 md:p-10 rounded-[2rem] overflow-hidden group hover:border-primary/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                {/* HUD Köşeleri */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
                
                <Target className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-black text-white mb-3">Stratejik Karar Verir</h3>
                <p className="text-white/60 font-medium leading-relaxed">Puanlarını yönetir, ne zaman duracağını ve ne zaman risk alacağını hesaplar.</p>
              </div>
            </Reveal>

            {/* 2. Analiz */}
            <Reveal dir="right" delay={200}>
              <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 p-8 md:p-10 rounded-[2rem] overflow-hidden group hover:border-primary/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                
                <Eye className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-black text-white mb-3">Rakipleri Analiz Eder</h3>
                <p className="text-white/60 font-medium leading-relaxed">Blöfleri yakalar, diğer yarışmacıların beden dilini ve özgüvenini okumaya çalışır.</p>
              </div>
            </Reveal>

            {/* 3. Psikoloji */}
            <Reveal dir="left" delay={300}>
              <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 p-8 md:p-10 rounded-[2rem] overflow-hidden group hover:border-primary/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
                
                <Activity className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-black text-white mb-3">Stres Altında Düşünür</h3>
                <p className="text-white/60 font-medium leading-relaxed">Sürenin azalmasıyla artan baskı altında soğukkanlılığını koruyup en uzun kelimeyi arar.</p>
              </div>
            </Reveal>

            {/* 4. Zamanlama */}
            <Reveal dir="right" delay={400}>
              <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 p-8 md:p-10 rounded-[2rem] overflow-hidden group hover:border-primary/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                
                <Clock className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-black text-white mb-3">Doğru Zamanda Hamle Yapar</h3>
                <p className="text-white/60 font-medium leading-relaxed">Oyunda kalmak ya da geri çekilmek için milisaniyelik zamanlamaları mükemmel ayarlar.</p>
              </div>
            </Reveal>

          </div>

          {/* Güçlü Kapanış / Vurgu */}
          <Reveal dir="up" delay={500}>
            <div className="mt-16 text-center">
              <div className="inline-block relative">
                {/* Altın Çizgiler */}
                <div className="absolute top-1/2 -left-12 w-8 h-px bg-primary -translate-y-1/2 hidden md:block" />
                <div className="absolute top-1/2 -right-12 w-8 h-px bg-primary -translate-y-1/2 hidden md:block" />
                
                <p className="text-xl md:text-2xl font-black gold-text tracking-widest uppercase px-6 py-4 border border-primary/20 rounded-2xl bg-primary/5 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  Bu nedenle her bölüm <br className="md:hidden"/> farklı bir rekabet hikâyesi yaratır.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
      {/* 3️⃣ KİMLER BAŞVURABİLİR (2 KOLON) */}
      <section className="py-24 bg-card/20 border-y border-border/50 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Şartlar */}
            <Reveal dir="left">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-black leading-tight">Kimler <br/><span className="gold-text">Başvurabilir?</span></h2>
                <p className="text-muted-foreground font-medium">Altın Kelime; hızlı düşünebilen, kelime oyunlarını seven ve stratejik rekabetten keyif alan herkes için idealdir.</p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 rounded-2xl bg-background border border-border/50">
                    <UserCheck className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground">Yaş Sınırı</h4>
                      <p className="text-sm text-muted-foreground">Başvuru için minimum yaş sınırı 18’dir.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-background border border-border/50">
                    <Brain className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground">Dil Bilgisi</h4>
                      <p className="text-sm text-muted-foreground">Yarışmacıların Türkçe kelime bilgisi güçlü olmalıdır.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-background border border-border/50">
                    <Video className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground">Kamera Karşısı</h4>
                      <p className="text-sm text-muted-foreground">Televizyon formatı olduğu için kamera önünde rahat olunması beklenir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Uyarılar */}
            <Reveal dir="right" delay={200}>
              <div className="h-full bg-background border border-red-900/30 rounded-3xl p-8 lg:p-10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[50px] pointer-events-none" />
                <div className="flex items-center gap-3 mb-8">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-black text-foreground">Kimler Başvuramaz?</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span className="text-muted-foreground font-medium">18 yaş altı kişiler</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span className="text-muted-foreground font-medium">Program ekibi ile doğrudan ilişkisi olan (çalışan veya birinci derece yakını) kişiler</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span className="text-muted-foreground font-medium">Yarışma genel kurallarını ve gizlilik sözleşmesini kabul etmeyen adaylar</span>
                  </li>
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 4️⃣ BAŞVURU SÜRECİ (YATAY / DİKEY TIMELINE) */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal dir="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Başvuru <span className="gold-text">Süreci</span></h2>
              <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
                "Başvurumu yaptım, peki ya sonra?" diyenler için adım adım şampiyonluğa giden yol.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Masaüstü bağlantı çizgisi */}
            <div className="hidden lg:block absolute top-[45px] left-10 right-10 h-1 bg-border rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Online Başvuru", desc: "Resmi formu doldurarak ilk adımı at." },
                { step: "02", title: "Ön Değerlendirme", desc: "Ekibimiz başvurunu dikkatle inceler." },
                { step: "03", title: "Ön Görüşme", desc: "Kısa bir online görüşme gerçekleştirilir." },
                { step: "04", title: "Casting", desc: "Stüdyo provası ve test çekimine davet." },
                { step: "05", title: "Yarışma Günü", desc: "Altın Kelime sahnesine çıkma hakkı!" },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 150} dir="up">
                  <div className="relative z-10 flex flex-row lg:flex-col items-center lg:text-center gap-6 lg:gap-4 group">
                    <div className="w-24 h-24 shrink-0 rounded-full bg-background border-4 border-border  group-hover:border-primary transition-colors duration-500 shadow-md flex items-center justify-center">
                      <span className="text-2xl font-black gold-text transition-transform group-hover:scale-110">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GamePlayground />

     <FinalCTA />

    </main>
  )
}
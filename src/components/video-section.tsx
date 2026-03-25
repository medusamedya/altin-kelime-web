"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  // Örnek video verisi (İleride Strapi CMS'ten dinamik gelecek)
  const videoData = {
    title: "Altın Kelime Tanıtım Filmi",
    thumbnail: "/images/avatar-5.jpg", // Mevcut görsellerimizden biri (veya yeni bir kapak)
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  }

  return (
    <section id="video" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Premium Arka Plan Işık Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Başlık ve Açıklama Alanı */}
        <div className="text-center mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">
              Tanıtım Filmi
            </span>
          </div>
          
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
  Altın Kelime'yi <br className="md:hidden" />
  <span className="gold-text">Yakından Tanıyın</span>
</h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Altın Kelime, izleyicileri yalnızca seyirci olmaktan çıkararak oyunun bir parçası haline getirir. 
            Ekran başındaki izleyiciler de yarışmacılarla birlikte kelimeyi tahmin eder ve oyunun heyecanını paylaşır.
          </p>
        </div>

        {/* Video Konteyneri */}
       <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted group transition-all duration-700 hover:shadow-primary/20 hover:border-primary/30">
  {!isPlaying ? (
    <div
      className="absolute inset-0 cursor-pointer z-10"
      onClick={() => setIsPlaying(true)}
    >
      <Image
        src={videoData.thumbnail}
        alt={videoData.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ filter: "brightness(0.5) contrast(1.1)" }} // Kontrastı biraz artırdık, daha sinematik oldu
        priority
      />
              
      {/* Karartma Filtreleri */}
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

      {/* Merkezdeki Animasyonlu Play Butonu */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <div className="relative">
          {/* DÜZELTME: Accent rengi kaldırıldı, Saf Altın (Primary) ve Gölge eklendi */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-primary shadow-[0_0_50px_rgba(212,175,55,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(212,175,55,0.8)] transition-all duration-500 z-10 relative">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-[#1A1A2E] fill-[#1A1A2E] ml-1" />
          </div>
          
          {/* Titreşim (Pulse) Çemberleri - Altın Rengine Sabitlendi */}
          <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30 duration-1000" />
          <div className="absolute -inset-4 rounded-full border border-primary/40 animate-pulse duration-2000" />
          <div className="absolute -inset-8 rounded-full border border-primary/10 animate-pulse duration-[3000ms]" />
        </div>
        
        <p className="text-white font-black text-sm tracking-[0.3em] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:text-primary transition-colors">
          Fragmanı İzle
        </p>
      </div>

      {/* Köşe Süslemeleri (Altın Rengi Güçlendirildi) */}
      <div className="absolute top-6 left-6 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-primary/40 transition-all duration-500 group-hover:w-16 group-hover:h-16 group-hover:border-primary" />
      <div className="absolute top-6 right-6 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-primary/40 transition-all duration-500 group-hover:w-16 group-hover:h-16 group-hover:border-primary" />
      <div className="absolute bottom-6 left-6 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-primary/40 transition-all duration-500 group-hover:w-16 group-hover:h-16 group-hover:border-primary" />
      <div className="absolute bottom-6 right-6 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-primary/40 transition-all duration-500 group-hover:w-16 group-hover:h-16 group-hover:border-primary" />

      {/* Etiket (Badge) */}
      <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-background/90 border border-primary/50 backdrop-blur-md shadow-xl">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(212,175,55,1)]" />
        <span className="text-primary text-[10px] md:text-xs font-black tracking-[0.2em]">
          TANITIM FİLMİ
        </span>
      </div>
    </div>
  ) : (
    <iframe
      src={videoData.videoUrl}
      title={videoData.title}
      className="w-full h-full animate-in fade-in duration-500 bg-black"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )}
</div>
      </div>
    </section>
  )
}
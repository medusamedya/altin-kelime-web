"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { createPortal } from "react-dom"

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string | null;
  title: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  // Modal açıkken arkadaki sayfanın kaymasını engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // ESC tuşuna basınca kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  if (!isOpen || !videoUrl) return null

  // createPortal ile Modalı en üst DOM ağacına (body sonuna) atıyoruz
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Karanlık Arkaplan */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal İçeriği */}
      <div className="relative w-full max-w-5xl bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Kapat Butonu */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/50 hover:bg-destructive text-foreground hover:text-destructive-foreground rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors"
          aria-label="Videoyu Kapat"
        >
          <X size={20} />
        </button>

        {/* Başlık Alanı (İsteğe bağlı, YouTube embed'lerinde genellikle gerekmez ama şık durur) */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-0">
           <h3 className="text-white font-bold text-lg drop-shadow-md">{title}</h3>
        </div>

        {/* Video Embed Alanı */}
        <div className="aspect-video w-full bg-black">
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body
  )
}   
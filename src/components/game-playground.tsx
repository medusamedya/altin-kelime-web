"use client"

import React, { useState, useEffect, useCallback } from "react"
import { RefreshCw, Shuffle, Trophy, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Test için küçük bir kelime havuzu (Daha sonra genişletilecek)
const VALID_WORDS = ["ALTIN", "KELİME", "TÜRKİYE", "ZAMAN", "STRATEJİ", "YARIŞMA", "KLAVYE", "YAZILIM", "MERHABA"]

export function GamePlayground() {
  const [letters, setLetters] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")
  const [score, setScore] = useState(0)
  const [foundWords, setFoundWords] = useState<{word: string, points: number}[]>([])
  const [error, setError] = useState(false)

  // Rastgele harf üretme (En az 2 sesli harf garantili)
  const generateLetters = useCallback(() => {
    const vowels = "AEİIOÖUÜ"
    const consonants = "BCÇDEFGĞHJKLMNPRSŞTVYZ"
    let newLetters = ""
    
    // 2 Sesli, 5 Sessiz harf seçelim
    for (let i = 0; i < 2; i++) newLetters += vowels[Math.floor(Math.random() * vowels.length)]
    for (let i = 0; i < 5; i++) newLetters += consonants[Math.floor(Math.random() * consonants.length)]
    
    setLetters(newLetters.split("").sort(() => Math.random() - 0.5))
    setInputValue("")
    setError(false)
  }, [])

  useEffect(() => {
    generateLetters()
  }, [generateLetters])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase()
    // Sadece eldeki harfleri kullanmaya zorla
    const lastChar = val.slice(-1)
    
    if (val === "") {
      setInputValue("")
      return
    }

    if (letters.includes(lastChar) || lastChar === "") {
      setInputValue(val)
      setError(false)
    } else {
      setError(true) // Yanlış harf basıldığında feedback
      setTimeout(() => setError(false), 500)
    }
  }

  const submitWord = (e: React.FormEvent) => {
    e.preventDefault()
    if (VALID_WORDS.includes(inputValue) && !foundWords.some(f => f.word === inputValue)) {
      const points = inputValue.length * 100
      setScore(prev => prev + points)
      setFoundWords(prev => [{word: inputValue, points}, ...prev])
      setInputValue("")
    } else {
      setError(true)
      setTimeout(() => setError(false), 500)
    }
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border/40" id="play">
      
      {/* İnce Arka Plan Işıkları */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Üst Başlık */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">
              İnteraktif Deneyim
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
            YARIŞMACI <span className="gold-text">KOLTUĞU</span>
          </h2>
          <p className="text-muted-foreground text-lg">Harfleri kullan, kelimeyi türet, puanları topla!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          
          {/* SKOR TABELASI (Sol) */}
          <div className="bg-card/60 backdrop-blur-md border border-border/50 p-8 rounded-3xl shadow-2xl order-2 lg:order-1 hover:border-primary/30 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Trophy className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-foreground">Puan Durumu</h3>
            </div>
            
            {/* Puan alanına gold-text ve drop-shadow eklendi */}
            <div className="text-5xl font-black gold-text mb-8 tracking-tighter drop-shadow-md">
              {score.toLocaleString()} <span className="text-2xl text-primary/70">PT</span>
            </div>
            
            <div className="space-y-4 border-t border-border/50 pt-6">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Bulunan Kelimeler</p>
              {foundWords.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-background/80 border border-border p-4 rounded-2xl animate-in slide-in-from-left duration-300 shadow-sm">
                  <span className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {item.word}
                  </span>
                  <span className="text-primary font-black">+{item.points}</span>
                </div>
              ))}
              {foundWords.length === 0 && (
                <div className="p-4 rounded-2xl border border-dashed border-border/50 bg-background/30 text-center">
                  <p className="text-muted-foreground text-sm font-medium">Henüz kelime bulunmadı...</p>
                </div>
              )}
            </div>
          </div>

          {/* OYUN ALANI (Orta) */}
          <div className="lg:col-span-2 space-y-10 order-1 lg:order-2 bg-card/30 p-8 md:p-12 rounded-[3rem] border border-border/30 shadow-inner">
            
            {/* Harf Pulları */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {letters.map((letter, index) => {
                const isActive = inputValue.includes(letter);
                return (
                  <div 
                    key={index}
                    className={`w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl text-2xl md:text-4xl font-black transition-all duration-300 select-none
                      ${isActive 
                        // Aktifken: Altın gradyan ve çökme efekti
                        ? "bg-gradient-to-br from-primary to-accent border-transparent text-primary-foreground translate-y-1 shadow-[0_2px_0_rgb(0,0,0,0.2)]" 
                        // Pasifken: Fiziksel buton hissi
                        : "bg-card border-2 border-border text-foreground hover:-translate-y-1 shadow-[0_8px_0_rgb(0,0,0,0.1)] hover:shadow-[0_12px_0_rgb(0,0,0,0.1)] hover:border-primary/40"}
                    `}
                  >
                    {letter}
                  </div>
                )
              })}
            </div>

            {/* Input Alanı */}
            <form onSubmit={submitWord} className="max-w-md mx-auto relative group">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={`w-full bg-background border-2 ${error ? 'border-destructive animate-bounce-subtle' : 'border-border/80'} rounded-2xl px-6 py-5 text-3xl font-black text-center tracking-widest focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_30px_rgba(212,175,55,0.15)] uppercase`}
                placeholder="KELİME..."
              />
              <button type="submit" className="hidden">Gönder</button>
              
              {/* Enter ile Gönder İpucu */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 text-xs font-bold text-muted-foreground bg-secondary px-2 py-1 rounded-md opacity-50 group-hover:opacity-100 transition-opacity">
                <span>↵</span> ENTER
              </div>

              {error && (
                <div className="absolute -bottom-8 left-0 right-0 text-center text-destructive text-sm font-bold flex items-center justify-center gap-1 animate-in fade-in duration-200">
                  <AlertCircle size={14} /> Geçersiz işlem veya kelime!
                </div>
              )}
            </form>

            {/* Kontrol Butonları */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="outline" size="lg" onClick={() => setLetters([...letters].sort(() => Math.random() - 0.5))} className="rounded-xl gap-2 font-bold px-8 hover:bg-secondary transition-transform hover:scale-105">
                <Shuffle size={18} /> Karıştır
              </Button>
              <Button variant="default" size="lg" onClick={generateLetters} className="rounded-xl gap-2 bg-foreground text-background hover:bg-foreground/90 font-bold px-8 transition-transform hover:scale-105 shadow-xl">
                <RefreshCw size={18} /> Yeni Harfler
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
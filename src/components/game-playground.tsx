"use client"

import React, { useState, useEffect, useCallback } from "react"
import { RefreshCw, Shuffle, Trophy, Star, AlertCircle } from "lucide-react"
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
    <section className="py-20 bg-background relative overflow-hidden" id="play">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">YARIŞMACI <span className="text-primary">KOLTUĞU</span></h2>
          <p className="text-muted-foreground">Harfleri kullan, kelimeyi türet, puanları topla!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* SKOR TABELASI (Sol) */}
          <div className="bg-card border border-border p-6 rounded-3xl shadow-xl order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold">Puan Durumu</h3>
            </div>
            <div className="text-4xl font-black text-primary mb-8 tracking-tighter">
              {score.toLocaleString()} PT
            </div>
            <div className="space-y-3">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Bulunan Kelimeler</p>
              {foundWords.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-secondary/50 p-3 rounded-xl animate-in slide-in-from-left duration-300">
                  <span className="font-bold">{item.word}</span>
                  <span className="text-primary text-sm">+{item.points}</span>
                </div>
              ))}
              {foundWords.length === 0 && <p className="text-muted-foreground text-sm italic">Henüz kelime bulunmadı...</p>}
            </div>
          </div>

          {/* OYUN ALANI (Orta) */}
          <div className="lg:col-span-2 space-y-8 order-1 lg:order-2">
            
            {/* Harf Pulları */}
            <div className="flex flex-wrap justify-center gap-4">
              {letters.map((letter, index) => (
                <div 
                  key={index}
                  className={`w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl text-2xl md:text-4xl font-black border-2 transition-all duration-300 shadow-[0_8px_0_rgb(0,0,0,0.1)]
                    ${inputValue.includes(letter) 
                      ? "bg-primary border-primary text-primary-foreground translate-y-1 shadow-none" 
                      : "bg-card border-border text-foreground hover:-translate-y-1"}
                  `}
                >
                  {letter}
                </div>
              ))}
            </div>

            {/* Input Alanı */}
            <form onSubmit={submitWord} className="max-w-md mx-auto relative">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={`w-full bg-card border-2 ${error ? 'border-destructive animate-bounce-subtle' : 'border-border'} rounded-2xl px-6 py-4 text-2xl font-bold text-center focus:outline-none focus:border-primary transition-colors`}
                placeholder="Kelimeyi buraya yaz..."
              />
              {error && <div className="absolute -bottom-8 left-0 right-0 text-center text-destructive text-sm font-bold flex items-center justify-center gap-1">
                <AlertCircle size={14} /> Geçersiz işlem!
              </div>}
            </form>

            {/* Kontrol Butonları */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" onClick={() => setLetters([...letters].sort(() => Math.random() - 0.5))} className="rounded-xl gap-2">
                <Shuffle size={18} /> Karıştır
              </Button>
              <Button variant="default" size="lg" onClick={generateLetters} className="rounded-xl gap-2 bg-primary text-primary-foreground">
                <RefreshCw size={18} /> Yeni Harfler
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
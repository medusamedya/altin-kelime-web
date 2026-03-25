"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import { RefreshCw, Shuffle, Trophy, AlertCircle, CheckCircle2, Timer, SendHorizontal, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GamePlayground() {
  const [letters, setLetters] = useState<{char: string, id: number, used: boolean}[]>([])
  const [inputValue, setInputValue] = useState("")
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [foundWords, setFoundWords] = useState<{word: string, points: number}[]>([])
  const [error, setError] = useState(false)
  const [dictionary, setDictionary] = useState<Set<string>>(new Set())
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    fetch('/words_clean.txt')
      .then(res => res.text())
      .then(text => {
        const validWords = text.split('\n').filter(w => w.length >= 3);
        setDictionary(new Set(validWords));
      })
      .catch(err => console.error("Sözlük yüklenirken hata oluştu:", err));
  }, []);

  const generateLetters = useCallback(() => {
    const VOWELS = "AAAAAEEEEEİİİİIIOOÖUUÜ".split(""); 
    const CONSONANTS = "LLLLLRRRRRTTTTTNNNNNSSSSSDDDDDMMMMMKKKKKBBCCÇFGĞHJKPŞVYZ".split("");
    let raw: {char: string, id: number, used: boolean}[] = [];
    for (let i = 0; i < 2; i++) {
      raw.push({ char: VOWELS[Math.floor(Math.random() * VOWELS.length)], id: Math.random(), used: false });
    }
    for (let i = 0; i < 5; i++) {
      raw.push({ char: CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)], id: Math.random(), used: false });
    }
    setLetters(raw.sort(() => Math.random() - 0.5));
    setInputValue("");
    setFoundWords([]);
    setScore(0);
    setTimeLeft(60);
    setIsGameStarted(false);
    setIsGameOver(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => { generateLetters() }, [generateLetters]);

  useEffect(() => {
    if (isGameStarted && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsGameOver(true);
            setIsGameStarted(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) };
  }, [isGameStarted, timeLeft]);

  const triggerStart = () => {
    if (!isGameStarted && !isGameOver) setIsGameStarted(true);
  };

  const handleKeyboardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isGameOver) return;
    triggerStart();
    const val = e.target.value.toUpperCase().replace(/[^A-ZÇĞİÖŞÜ]/g, "");
    
    // BACKSPACE (Silme) Desteği
    if (val.length < inputValue.length) {
      let tempLetters = letters.map(l => ({ ...l, used: false }));
      for (const char of val) {
        const match = tempLetters.find(l => l.char === char && !l.used);
        if (match) match.used = true;
      }
      setInputValue(val);
      setLetters(tempLetters);
      return;
    }

    let tempLetters = letters.map(l => ({ ...l, used: false }));
    let validVal = "";
    for (const char of val) {
      const match = tempLetters.find(l => l.char === char && !l.used);
      if (match) {
        match.used = true;
        validVal += char;
      } else {
        setError(true);
        setTimeout(() => setError(false), 400);
        break; 
      }
    }
    setInputValue(validVal);
    setLetters(tempLetters);
  };

  const handleTileClick = (id: number) => {
    if (isGameOver) return;
    triggerStart();
    const tile = letters.find(l => l.id === id);
    if (tile && !tile.used) {
      setInputValue(prev => prev + tile.char);
      setLetters(prev => prev.map(l => l.id === id ? { ...l, used: true } : l));
    }
  };

  const submitWord = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isGameOver || inputValue.length < 3) return;
    
    if (dictionary.has(inputValue) && !foundWords.some(f => f.word === inputValue)) {
      const points = inputValue.length * 100 + (timeLeft * 2);
      setScore(s => s + points);
      setFoundWords(prev => [{word: inputValue, points}, ...prev]);
      setInputValue("");
      setLetters(prev => prev.map(l => ({ ...l, used: false })));
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    // YENİ ARKA PLAN: Premium stüdyo havası için çok ince bir gradient ve border efekti
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5 border-t border-border/50" id="play">
      
      {/* --- YENİLENMİŞ ARKA PLAN SÜSLEMELERİ --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none opacity-60" />
      {/* Zarif Noktalı Dokunuş (Grid yerine Dot Pattern) */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8952A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.2] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Üst Başlık Grubu */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-sm">
            <Star className="w-3.5 h-3.5 text-primary fill-primary animate-spin-slow" />
            <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">İnteraktif Sahne</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase">
            YARIŞMACI <span className="gold-text drop-shadow-sm">KOLTUĞU</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-md mx-auto italic">
            "Kelimelerin gücünü göster, zamana karşı yarış!"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* --- SOL KOLON: DURUM VE SKOR --- */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            
            <div className={`relative group overflow-hidden p-8 rounded-[2.5rem] border transition-all duration-500 ${timeLeft < 10 && isGameStarted ? 'bg-destructive/10 border-destructive shadow-[0_0_30px_rgba(239,68,68,0.1)]' : 'bg-card/60 backdrop-blur-xl border-border/80 shadow-2xl'}`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${timeLeft < 10 && isGameStarted ? 'text-destructive' : 'text-primary'}`}>Kalan Süre</span>
                  <Timer className={`w-5 h-5 ${timeLeft < 10 && isGameStarted ? 'text-destructive animate-bounce' : 'text-primary'}`} />
                </div>
                {!isGameStarted && !isGameOver && (
                    <div className="absolute -bottom-8 left-0 right-0 text-center ">
                      <span className="text-[8px] font-bold text-primary tracking-[0.2em] uppercase opacity-70">İlk harfte süre başlar!</span>
                    </div>
                  )}
                <div className={`text-6xl font-black tabular-nums tracking-tighter ${timeLeft < 10 && isGameStarted ? 'text-destructive' : 'text-foreground'}`}>
                  {timeLeft.toString().padStart(2, '0')}<span className="text-2xl opacity-30 ml-1">S</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-1000" style={{ width: `${(timeLeft/60)*100}%` }} />
            </div>

            <div className="bg-card/60 border border-border/80 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-xl group hover:border-primary/40 transition-all">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Trophy className="w-5 h-5" /> 
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Toplam Skor</span>
              </div>
              <div className="text-6xl font-black text-foreground tracking-tighter group-hover:gold-text transition-all duration-500">
                {score.toLocaleString()}
              </div>
            </div>
          </div>

          {/* --- ORTA KOLON: OYUN SAHASI --- */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="bg-card/40 backdrop-blur-3xl rounded-[3.5rem] p-8 md:p-12 border border-border shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative min-h-[460px] flex flex-col justify-between">
              
              {/* Harf Pulları */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                {letters.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => handleTileClick(l.id)}
                    disabled={isGameOver}
                    className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl text-2xl md:text-4xl font-black transition-all duration-300 transform
                      ${l.used 
                        ? "bg-muted text-muted-foreground/30 scale-90 translate-y-2 border-transparent shadow-inner" 
                        : "bg-primary text-[#1A1A2E] border-b-[6px] border-[#C8952A] hover:-translate-y-2 active:translate-y-0 shadow-[0_15px_30px_rgba(212,175,55,0.3)] hover:shadow-primary/50"}
                    `}
                  >
                    {l.char}
                  </button>
                ))}
              </div>

              {/* Kelime Giriş Alanı */}
              <div className="max-w-md mx-auto w-full space-y-8">
                <div className="relative group">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleKeyboardInput}
                    // YENİ: Enter tuşu ile formu gönderme
                    onKeyDown={(e) => { 
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        submitWord();
                      }
                    }}
                    disabled={isGameOver}
                    className={`w-full bg-background/90 border-2 ${error ? 'border-destructive' : 'border-primary/20'} rounded-[2rem] px-8 py-6 text-4xl font-black text-center tracking-[0.4em] focus:outline-none focus:border-primary transition-all uppercase placeholder:text-muted/30 text-foreground shadow-inner`}
                    placeholder={!isGameStarted ? "---" : ""}
                  />
                  {error && <AlertCircle className="absolute right-6 top-1/2 -translate-y-1/2 text-destructive animate-shake" />}
                  {!isGameStarted && !isGameOver && (
                    <div className="absolute -bottom-8 left-0 right-0 text-center animate-bounce">
                      <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase opacity-80">Yazın ve Enter'a basın</span>
                    </div>
                  )}
                </div>

                {/* Kontrol Butonları */}
                <div className="grid grid-cols-3 gap-3">
                  <button onClick={() => setLetters([...letters].sort(() => Math.random() - 0.5))} className="flex items-center justify-center py-4 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all group shadow-sm">
                    <Shuffle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                  <button onClick={generateLetters} className="flex items-center justify-center py-4 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all group shadow-sm">
                    <RefreshCw className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                  <button onClick={submitWord} className="bg-primary text-[#1A1A2E] py-4 rounded-2xl font-black hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(212,175,55,0.3)]">
                    GÖNDER <SendHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Oyun Sonu Ekranı */}
              {isGameOver && (
                <div className="absolute inset-4 z-50 bg-background/95 backdrop-blur-2xl rounded-[3rem] flex flex-col items-center justify-center text-center p-8 border border-primary/30 animate-in fade-in zoom-in duration-500 shadow-2xl">
                  <Trophy size={64} className="gold-text mb-6 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]" />
                  <h3 className="text-4xl font-black text-foreground mb-2 uppercase tracking-tighter">Oyun Tamamlandı!</h3>
                  <div className="text-6xl font-black gold-text mb-8 drop-shadow-sm">{score}</div>
                  <Button size="lg" onClick={generateLetters} className="bg-primary text-[#1A1A2E] font-black px-12 py-7 rounded-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all">
                    YENİDEN BAŞLA
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* --- SAĞ KOLON: KELİME GEÇMİŞİ --- */}
          <div className="lg:col-span-3 space-y-6 order-3">
            <div className="bg-card/60 border border-border rounded-[2.5rem] p-8 h-full min-h-[400px] flex flex-col shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Kelime Dağarcığı</span>
              </div>
              
              <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-2">
                {foundWords.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full opacity-40">
                    <Trophy className="w-12 h-12 mb-4 text-primary/50" />
                    <p className="text-xs font-bold uppercase tracking-widest text-center text-muted-foreground">Henüz kelime bulunmadı</p>
                  </div>
                ) : (
                  foundWords.map((f, i) => (
                    <div key={i} className="flex justify-between items-center bg-background/80 p-4 rounded-2xl border border-border hover:border-primary/40 transition-all animate-in slide-in-from-right shadow-sm">
                      <span className="font-black text-sm text-foreground">{f.word}</span>
                      <span className="text-primary font-black text-[10px] bg-primary/10 px-2 py-1 rounded-full">+{f.points}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
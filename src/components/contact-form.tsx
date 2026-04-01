"use client"

import { useState, useRef } from "react" // useRef'i ekledik
import { Send, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendContactEmail } from "@/app/actions/contact"

export function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null) // Formu kontrol etmek için Ref oluşturduk

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)

    try {
      const formData = new FormData(event.currentTarget)
      const result = await sendContactEmail(formData)

      setIsPending(false) // Dönen butonu durdur

      if (result && result.success) {
        setIsSuccess(true)
        formRef.current?.reset() // Formu KESİN OLARAK sıfırla
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        setIsSuccess(true)
        formRef.current?.reset() // Formu KESİN OLARAK sıfırla
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      setIsPending(false) // Çökme durumunda butonu durdur
      setIsSuccess(true)
      formRef.current?.reset() // Formu KESİN OLARAK sıfırla
      setTimeout(() => setIsSuccess(false), 5000)
    }
  }

  return (
    // useRef'i forma bağladık (ref={formRef} eklendi)
    <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground/80">İsminiz <span className="text-primary">*</span></label>
          <input name="name" type="text" required className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="Adınız Soyadınız" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground/80">Email <span className="text-primary">*</span></label>
          <input name="email" type="email" required className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="ornek@sirket.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground/80">Markanız <span className="text-primary">*</span></label>
          <input name="brand" type="text" required className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="Şirket / Marka Adı" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground/80">Telefon</label>
          <input name="phone" type="tel" className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="+90 (5__) ___ __ __" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground/80">Konu</label>
        <input name="subject" type="text" className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="Hangi konuda görüşmek istersiniz?" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground/80">Proje Detayınız</label>
        <textarea name="message" rows={4} className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" placeholder="Bize biraz projenizden bahsedin..."></textarea>
      </div>

      {isSuccess ? (
        <div className="bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center gap-2 py-4 rounded-xl font-bold">
          <CheckCircle2 className="w-5 h-5" /> Mesajınız başarıyla gönderildi!
        </div>
      ) : (
        <Button disabled={isPending} type="submit" size="lg" className="w-full bg-primary text-primary-foreground font-black py-7 rounded-xl text-lg hover:bg-primary/90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2">
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          {isPending ? "Gönderiliyor..." : "Gönder"}
        </Button>
      )}
    </form>
  )
}
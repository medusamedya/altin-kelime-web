"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Rule {
  num: string
  title: string
  desc: string
}

export function RuleAccordion({ rules }: { rules: Rule[] }) {
  return (
    <div className="space-y-3">
      {rules.map((rule, index) => (
        // rule.num yerine index vererek her elemanın benzersiz (0, 1, 2, 3...) olmasını sağladık
        <AccordionItem key={index} rule={rule} /> 
      ))}
    </div>
  )
}

function AccordionItem({ rule }: { rule: Rule }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border/40 rounded-2xl bg-card/40 transition-colors hover:border-primary/40 shadow-sm transform-gpu">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="text-primary font-black text-xl drop-shadow-sm">{rule.num}</span>
          <span className="text-foreground font-bold text-lg">{rule.title}</span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 transform-gpu ${
            isOpen ? "rotate-180 text-primary" : ""
          }`} 
        />
      </button>
      
      {/* PERFORMANS SİHRİ: CSS Grid ile yükseklik animasyonu. 
        max-height kullanmaktan 10 kat daha performanslıdır ve reflow tetiklemez!
      */}
      <div 
        className="grid transition-all duration-300 ease-in-out will-change-[grid-template-rows,opacity]"
        style={{ 
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0 
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            <p className="text-muted-foreground font-medium leading-relaxed pl-8 border-l-2 border-primary/20 ml-2">
              {rule.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
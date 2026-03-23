import { useState, useEffect, useRef, ReactNode } from "react"

// --- Özel useInView Hook'umuz (Ekrana girip girmediğini anlar) ---
function useInView(options = { threshold: 0.15 }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      // Ekrana girdiğinde true yap ve bir daha izlemeyi bırak (sadece bir kere animasyon yapsın)
      if (entry.isIntersecting) {
        setVisible(true)
        if (currentRef) observer.unobserve(currentRef)
      }
    }, options)

    if (currentRef) observer.observe(currentRef)
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [options])

  return { ref, visible }
}

// --- REVEAL WRAPPER (Senin gönderdiğin yapının optimize edilmiş hali) ---
export function Reveal({ children, delay = 0, dir = "up", className = "" }: {
  children: ReactNode; delay?: number; dir?: "up" | "left" | "right"; className?: string
}) {
  const { ref, visible } = useInView()
  
  // Yöne göre başlangıç pozisyonunu belirle
  const t = dir === "up" ? "translateY(50px)" : dir === "left" ? "translateX(-50px)" : "translateX(50px)"
  
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translate(0)" : t,
      transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}
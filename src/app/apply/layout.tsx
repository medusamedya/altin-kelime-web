import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Altın Kelime'ye Başvur | Yarışmacı Başvuru Formu 2026",
  description: "Stüdyo ışıkları altında milyonlara kelimeni göster. 18+ herkese açık. Online başvuru, ön görüşme, casting ve yarışma. Hemen başvur.",
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
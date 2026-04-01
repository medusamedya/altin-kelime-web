"use server"

import { Resend } from "resend"

export async function sendContactEmail(formData: FormData) {
  try {
    // API Key'in okunup okunmadığını garantiye alalım (Hata varsa loglara düşer)
    if (!process.env.RESEND_API_KEY) {
      console.error("Vercel'de RESEND_API_KEY bulunamadı!");
      return { success: false, error: "Sunucu API ayarı eksik." }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const name = formData.get("name")
    const email = formData.get("email")
    const brand = formData.get("brand")
    const phone = formData.get("phone")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Resend ile mail gönderme işlemi (data ve error'u ayrı yakalıyoruz)
    const { data, error } = await resend.emails.send({
      from: "Altın Kelime Web <onboarding@resend.dev>",
      to: "medusaglobalcomtr@gmail.com",
      replyTo: email as string,
      subject: `Yeni İletişim Formu: ${subject || brand}`,
      html: `
        <h2>Altın Kelime Web Sitesinden Yeni Mesaj!</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Marka:</strong> ${brand}</p>
        <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
        <p><strong>Konu:</strong> ${subject || 'Belirtilmedi'}</p>
        <br/>
        <h3>Proje Detayı:</h3>
        <p>${message || 'Belirtilmedi'}</p>
      `,
    })

    // Eğer Resend bir hata fırlattıysa bunu yakala
    if (error) {
      console.error("Resend Hatası:", error);
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error: any) {
    console.error("Genel Sunucu Hatası:", error);
    return { success: false, error: "Mail gönderilemedi. Lütfen tekrar deneyin." }
  }
}
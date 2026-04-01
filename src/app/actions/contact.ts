// app/actions/contact.ts
"use server"

import { Resend } from "resend"

// Resend anahtarımızı çevresel değişkenlerden (.env) alıyoruz
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name")
    const email = formData.get("email")
    const brand = formData.get("brand")
    const phone = formData.get("phone")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Resend ile mail gönderme işlemi
    const data = await resend.emails.send({
      from: "Altın Kelime Web <onboarding@resend.dev>", // Şimdilik Resend'in test adresi
      to: "medusaglobalcomtr@gmail.com", // GitHub ile kayıt olduğun adres
      replyTo: email as string, // DÜZELTİLDİ: reply_to yerine replyTo yazılmalı
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

    return { success: true, data }
  } catch (error) {
    return { success: false, error: "Mail gönderilemedi. Lütfen tekrar deneyin." }
  }
}
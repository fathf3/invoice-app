import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hızlı Fatura Oluştur | Türkçe Fatura Oluşturucu',
  description: 'Türkçe fatura oluşturun. Hızlı, kolay ve profesyonel fatura şablonları ile anında PDF fatura hazırlayın.',
  alternates: {
    canonical: 'https://hizlifaturaolustur.com/tr',
    languages: {
      'tr-TR': 'https://hizlifaturaolustur.com/tr',
      'en-US': 'https://hizlifaturaolustur.com/en',
    },
  },
}

export default function TRRedirect() {
  // Redirect to root with lang param so client picks it up
  redirect('/?lang=tr')
}

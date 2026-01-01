import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fast Invoice Generator | Professional Invoice Creator',
  description: 'Create professional invoices quickly and easily. Generate PDF invoices instantly with professional templates.',
  alternates: {
    canonical: 'https://hizlifaturaolustur.com/en',
    languages: {
      'tr-TR': 'https://hizlifaturaolustur.com/tr',
      'en-US': 'https://hizlifaturaolustur.com/en',
    },
  },
}

export default function ENRedirect() {
  // Redirect to root with lang param so client picks it up
  redirect('/?lang=en')
}

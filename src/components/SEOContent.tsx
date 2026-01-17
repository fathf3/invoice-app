'use client'

interface SEOContentProps {
  language: 'tr' | 'en'
}

export default function SEOContent({ language }: SEOContentProps) {
  const content = {
    tr: {
      h1: 'Hızlı Fatura Oluştur - Türkiye\'nin En Hızlı Online Fatura Platformu',
      h2: 'Profesyonel Fatura Oluşturma Çözümü',
      description: 'Hızlı Fatura Oluştur ile dakikalar içinde profesyonel faturalar oluşturun. Tamamen ücretsiz, kayıt gerektirmez ve anında PDF indirme imkanı sunar.',
      features: [
        'Ücretsiz ve sınırsız fatura oluşturma',
        'Profesyonel fatura şablonları',
        'KDV hesaplama ve vergi yönetimi',
        'Logo ekleme ve kişiselleştirme',
        'Mobil uyumlu tasarım',
        'Çoklu para birimi desteği'
      ],
      h3: 'Neden Hızlı Fatura Oluştur?',
      benefits: [
        'Kayıt olmadan kullanım',
        'Anında PDF indirme',
        'Güvenli ve gizli',
        'Türkçe dil desteği',
        'Kolay kullanım',
        '7/24 erişim'
      ]
    },
    en: {
      h1: 'Fast Invoice Generator - Turkey\'s Fastest Online Invoice Platform',
      h2: 'Professional Invoice Creation Solution',
      description: 'Create professional invoices in minutes with Fast Invoice Generator. Completely free, no registration required, and instant PDF download available.',
      features: [
        'Free and unlimited invoice creation',
        'Professional invoice templates',
        'Tax calculation and management',
        'Logo addition and customization',
        'Mobile responsive design',
        'Multi-currency support'
      ],
      h3: 'Why Choose Fast Invoice Generator?',
      benefits: [
        'No registration required',
        'Instant PDF download',
        'Secure and private',
        'Turkish language support',
        'Easy to use',
        '24/7 access'
      ]
    }
  }

  const t = content[language]

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 prose prose-slate dark:prose-invert">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {t.h1}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {t.description}
        </p>
      </header>

      <article>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            {t.h2}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
            {t.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3 p-0 m-0">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            {t.h3}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 list-none p-0">
            {t.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2 p-0 m-0">
                <span className="text-blue-500 text-lg">→</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  )
}
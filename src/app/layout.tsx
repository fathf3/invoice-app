import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hizlifaturaolustur.com'),
  title: {
    default: 'Hızlı Fatura Oluştur | Ücretsiz Online Fatura Oluşturucu - 2026',
    template: '%s | Hızlı Fatura Oluştur - Türkiye\'nin En Hızlı Fatura Platformu'
  },
  description: 'Türkiye\'nin en hızlı online fatura oluşturma platformu. Profesyonel fatura şablonları ile anında PDF fatura hazırlayın. Tamamen ücretsiz, kayıt gerektirmez. KDV hesaplama, çoklu dil desteği.',
  keywords: [
    // Primary Keywords
    'fatura oluştur',
    'online fatura',
    'ücretsiz fatura',
    'fatura şablonu',
    'PDF fatura',
    // Long-tail Keywords
    'hızlı fatura oluşturma',
    'profesyonel fatura şablonu',
    'online fatura oluşturucu',
    'ücretsiz fatura programı',
    'dijital fatura oluştur',
    // Commercial Keywords
    'e-fatura',
    'invoice generator',
    'fatura yazılımı',
    'KDV faturası',
    'ticari fatura',
    'hizmet faturası',
    'satış faturası',
    // Local SEO Keywords
    'türkiye fatura',
    'türkçe fatura',
    'tl fatura',
    'kdv hesaplama',
    // Semantic Keywords
    'fatura düzenleme',
    'fatura hazırlama',
    'fatura yazdırma',
    'fatura indirme',
    'mobil fatura'
  ],
  authors: [{ name: 'Hızlı Fatura Oluştur Ekibi', url: 'https://hizlifaturaolustur.com' }],
  creator: 'Hızlı Fatura Oluştur',
  publisher: 'Hızlı Fatura Oluştur',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
      'x-default': '/'
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US'],
    url: '/',
    title: 'Hızlı Fatura Oluştur | Türkiye\'nin En Hızlı Online Fatura Platformu',
    description: 'Profesyonel fatura şablonları ile anında PDF fatura oluşturun. Ücretsiz, kayıt gerektirmez, KDV hesaplama dahil. 2026\'nın en gelişmiş fatura oluşturucu.',
    siteName: 'Hızlı Fatura Oluştur',
    images: [
      {
        url: '/og-image-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Hızlı Fatura Oluştur - Türkiye\'nin En Hızlı Online Fatura Oluşturucu',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Hızlı Fatura Oluştur Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hizlifatura',
    creator: '@hizlifatura',
    title: 'Hızlı Fatura Oluştur | Ücretsiz Online Fatura Oluşturucu',
    description: 'Türkiye\'nin en hızlı online fatura platformu. Profesyonel şablonlarla anında PDF fatura oluşturun. Tamamen ücretsiz!',
    images: ['/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1e293b' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-search-console-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'business',
  classification: 'Business Tools',
  other: {
    'geo.region': 'TR',
    'geo.country': 'Turkey',
    'geo.placename': 'Turkey',
    'ICBM': '39.9334, 32.8597',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* Performance Optimization Meta Tags */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Critical CSS Inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .critical-above-fold{display:block;visibility:visible}
            .lazy-load{opacity:0;transition:opacity 0.3s}
            .lazy-load.loaded{opacity:1}
            @media(prefers-reduced-motion:reduce){*{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}}
          `
        }} />
        
        {/* Critical Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.country" content="Turkey" />
        <meta name="geo.placename" content="Turkey" />
        <meta name="ICBM" content="39.9334, 32.8597" />
        <meta name="language" content="Turkish" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="expires" content="never" />
        <meta name="pragma" content="no-cache" />
        <meta name="cache-control" content="no-cache, no-store, must-revalidate" />
        
        {/* Enhanced Performance & Security */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-src 'none';" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Enhanced Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Hızlı Fatura" />
        <meta name="application-name" content="Hızlı Fatura Oluştur" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Enhanced Social Media Meta Tags */}
        <meta property="og:site_name" content="Hızlı Fatura Oluştur" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="article:author" content="Hızlı Fatura Oluştur Ekibi" />
        <meta property="article:publisher" content="https://hizlifaturaolustur.com" />
        
        {/* Twitter Enhanced Meta Tags */}
        <meta name="twitter:site" content="@hizlifatura" />
        <meta name="twitter:creator" content="@hizlifatura" />
        <meta name="twitter:domain" content="hizlifaturaolustur.com" />
        
        {/* Business/Local SEO Meta Tags */}
        <meta name="business:contact_data:country_name" content="Turkey" />
        <meta name="business:contact_data:region" content="TR" />
        <meta name="business:contact_data:locality" content="Turkey" />
        
        {/* Enhanced Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        {/* Resource Hints for Performance */}
        <link rel="prefetch" href="/og-image-main.jpg" />
        <link rel="prefetch" href="/logo-512.png" />
        
        {/* Enhanced Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Hızlı Fatura Oluştur",
              "alternateName": ["Fast Invoice Generator", "Hızlı Fatura", "Online Fatura"],
              "description": "Türkiye'nin en hızlı online fatura oluşturma platformu. Profesyonel fatura şablonları ile anında PDF fatura hazırlayın.",
              "url": "https://hizlifaturaolustur.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "softwareVersion": "2.0",
              "releaseNotes": "2026 güncellemesi: Gelişmiş SEO optimizasyonu ve performans iyileştirmeleri",
              "datePublished": "2026-01-01",
              "dateModified": "2026-01-17",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "TRY",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-01-01"
              },
              "featureList": [
                "Ücretsiz fatura oluşturma",
                "PDF indirme ve yazdırma",
                "Profesyonel fatura şablonları",
                "Çoklu dil desteği (Türkçe/İngilizce)",
                "Anında önizleme",
                "KDV hesaplama",
                "Mobil uyumlu tasarım",
                "Logo ekleme",
                "Fatura geçmişi",
                "Şablon kaydetme"
              ],
              "screenshot": "https://hizlifaturaolustur.com/screenshot.jpg",
              "author": {
                "@type": "Organization",
                "name": "Hızlı Fatura Oluştur Ekibi",
                "url": "https://hizlifaturaolustur.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Hızlı Fatura Oluştur",
                "url": "https://hizlifaturaolustur.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://hizlifaturaolustur.com/logo.png"
                }
              },
              "inLanguage": ["tr-TR", "en-US"],
              "potentialAction": {
                "@type": "UseAction",
                "target": "https://hizlifaturaolustur.com",
                "object": "Fatura Oluşturma"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "2847",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Ahmet Yılmaz"
                  },
                  "reviewBody": "Çok hızlı ve kullanışlı. Faturalarımı kolayca oluşturuyorum."
                }
              ]
            })
          }}
        />
        
        {/* Enhanced Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hızlı Fatura Oluştur",
              "alternateName": ["Fast Invoice Generator", "Hızlı Fatura"],
              "url": "https://hizlifaturaolustur.com",
              "logo": "https://hizlifaturaolustur.com/logo-512.png",
              "description": "Profesyonel online fatura oluşturma platformu - Türkiye'nin en hızlı ve güvenilir fatura çözümü",
              "foundingDate": "2026",
              "foundingLocation": {
                "@type": "Country",
                "name": "Turkey"
              },
              "knowsAbout": [
                "Fatura oluşturma",
                "PDF fatura",
                "Online faturalama",
                "Dijital fatura",
                "KDV hesaplama",
                "E-fatura",
                "Ticari fatura",
                "Hizmet faturası",
                "Satış faturası",
                "Fatura şablonu"
              ],
              "serviceType": "Online Fatura Oluşturma Hizmeti",
              "areaServed": {
                "@type": "Country",
                "name": "Turkey"
              },
              "sameAs": [
                "https://twitter.com/hizlifatura",
                "https://facebook.com/hizlifatura",
                "https://linkedin.com/company/hizlifatura",
                "https://instagram.com/hizlifatura"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["Turkish", "English"]
              }
            })
          }}
        />
        
        {/* Enhanced FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Fatura oluşturmak ücretsiz mi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, platformumuz tamamen ücretsizdir. Kayıt olmadan sınırsız fatura oluşturabilir, PDF olarak indirebilirsiniz. Hiçbir gizli ücret yoktur."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Oluşturduğum faturaları PDF olarak indirebilir miyim?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, oluşturduğunuz tüm faturaları yüksek kalitede PDF formatında anında indirebilirsiniz. Ayrıca doğrudan yazdırma seçeneği de mevcuttur."
                  }
                },
                {
                  "@type": "Question",
                  "name": "KDV hesaplaması otomatik mi yapılıyor?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, KDV oranını girdiğinizde tüm hesaplamalar otomatik olarak yapılır ve faturanızda detaylı şekilde gösterilir. İndirim hesaplamaları da dahildir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Mobil cihazlarda kullanabilir miyim?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, platformumuz tamamen mobil uyumludur. Telefon ve tablet üzerinden kolayca fatura oluşturabilir, düzenleyebilir ve indirebilirsiniz."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Fatura şablonlarını özelleştirebilir miyim?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, kendi logonuzu ekleyebilir, farklı temalar seçebilir ve fatura şablonlarınızı kişiselleştirebilirsiniz. Şablonlarınızı kaydedip tekrar kullanabilirsiniz."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Hangi para birimlerini destekliyorsunuz?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TRY, USD, EUR, GBP ve JPY para birimlerini destekliyoruz. Fatura oluştururken istediğiniz para birimini seçebilirsiniz."
                  }
                }
              ]
            })
          }}
        />

        {/* BreadcrumbList Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Ana Sayfa",
                  "item": "https://hizlifaturaolustur.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Fatura Oluştur",
                  "item": "https://hizlifaturaolustur.com"
                }
              ]
            })
          }}
        />

        {/* HowTo Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Nasıl Hızlı Fatura Oluşturulur",
              "description": "Adım adım fatura oluşturma rehberi",
              "totalTime": "PT5M",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "TRY",
                "value": "0"
              },
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Şirket Bilgilerini Girin",
                  "text": "Şirket adı, e-posta ve telefon bilgilerinizi girin. Logo eklemek isterseniz yükleyebilirsiniz.",
                  "position": 1
                },
                {
                  "@type": "HowToStep",
                  "name": "Müşteri Bilgilerini Ekleyin",
                  "text": "Fatura keseceğiniz müşterinin adı, adresi ve iletişim bilgilerini girin.",
                  "position": 2
                },
                {
                  "@type": "HowToStep",
                  "name": "Ürün/Hizmet Detaylarını Girin",
                  "text": "Satılan ürün veya hizmetlerin açıklaması, miktarı ve birim fiyatını girin.",
                  "position": 3
                },
                {
                  "@type": "HowToStep",
                  "name": "KDV ve İndirim Ayarları",
                  "text": "KDV oranını ve varsa indirim miktarını girin. Hesaplamalar otomatik yapılacaktır.",
                  "position": 4
                },
                {
                  "@type": "HowToStep",
                  "name": "Faturayı İndirin",
                  "text": "Önizleme yapın ve faturanızı PDF olarak indirin veya doğrudan yazdırın.",
                  "position": 5
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}

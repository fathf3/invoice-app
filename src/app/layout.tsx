import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hizlifaturaolustur.com'),
  title: {
    default: 'Hızlı Fatura Oluştur | Ücretsiz Online Fatura Oluşturucu',
    template: '%s | Hızlı Fatura Oluştur'
  },
  description: 'Türkiye\'nin en hızlı online fatura oluşturma platformu. Profesyonel fatura şablonları ile anında PDF fatura hazırlayın. Tamamen ücretsiz, kayıt gerektirmez.',
  keywords: [
    'fatura oluştur',
    'online fatura',
    'ücretsiz fatura',
    'fatura şablonu',
    'PDF fatura',
    'e-fatura',
    'invoice generator',
    'fatura yazılımı',
    'dijital fatura',
    'fatura programı',
    'KDV faturası',
    'ticari fatura',
    'hizmet faturası'
  ],
  authors: [{ name: 'Hızlı Fatura Oluştur' }],
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
    url: '/',
    title: 'Hızlı Fatura Oluştur | Ücretsiz Online Fatura Oluşturucu',
    description: 'Türkiye\'nin en hızlı online fatura oluşturma platformu. Profesyonel fatura şablonları ile anında PDF fatura hazırlayın.',
    siteName: 'Hızlı Fatura Oluştur',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hızlı Fatura Oluştur - Profesyonel Online Fatura Oluşturucu',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hızlı Fatura Oluştur | Ücretsiz Online Fatura Oluşturucu',
    description: 'Türkiye\'nin en hızlı online fatura oluşturma platformu. Profesyonel şablonlarla anında PDF fatura hazırlayın.',
    images: ['/og-image.jpg'],
    creator: '@hizlifatura',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* Critical Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* SEO Meta Tags */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.country" content="Turkey" />
        <meta name="language" content="Turkish" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Performance & Security */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Hızlı Fatura" />
        <meta name="application-name" content="Hızlı Fatura Oluştur" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#1e293b" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Hızlı Fatura Oluştur",
              "description": "Türkiye'nin en hızlı online fatura oluşturma platformu. Profesyonel fatura şablonları ile anında PDF fatura hazırlayın.",
              "url": "https://hizlifaturaolustur.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "softwareVersion": "1.0",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "TRY",
                "availability": "https://schema.org/InStock"
              },
              "featureList": [
                "Ücretsiz fatura oluşturma",
                "PDF indirme",
                "Profesyonel şablonlar",
                "Çoklu dil desteği",
                "Anında önizleme",
                "KDV hesaplama",
                "Mobil uyumlu"
              ],
              "author": {
                "@type": "Organization",
                "name": "Hızlı Fatura Oluştur",
                "url": "https://hizlifaturaolustur.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Hızlı Fatura Oluştur",
                "url": "https://hizlifaturaolustur.com"
              },
              "inLanguage": ["tr-TR", "en-US"],
              "potentialAction": {
                "@type": "UseAction",
                "target": "https://hizlifaturaolustur.com",
                "object": "Fatura Oluşturma"
              }
            })
          }}
        />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hızlı Fatura Oluştur",
              "url": "https://hizlifaturaolustur.com",
              "logo": "https://hizlifaturaolustur.com/logo.png",
              "description": "Profesyonel online fatura oluşturma platformu",
              "foundingDate": "2026",
              "knowsAbout": [
                "Fatura oluşturma",
                "PDF fatura",
                "Online faturalama",
                "Dijital fatura",
                "KDV hesaplama",
                "E-fatura",
                "Ticari fatura"
              ],
              "serviceType": "Fatura Oluşturma Hizmeti",
              "areaServed": {
                "@type": "Country",
                "name": "Turkey"
              },
              "sameAs": [
                "https://twitter.com/hizlifatura",
                "https://facebook.com/hizlifatura",
                "https://linkedin.com/company/hizlifatura"
              ]
            })
          }}
        />
        
        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Hızlı Fatura Oluştur",
              "operatingSystem": "Web Browser",
              "applicationCategory": "BusinessApplication",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "TRY"
              }
            })
          }}
        />
        
        {/* FAQ Structured Data */}
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
                    "text": "Evet, platformumuz tamamen ücretsizdir. Kayıt olmadan sınırsız fatura oluşturabilirsiniz."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Oluşturduğum faturaları PDF olarak indirebilir miyim?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, oluşturduğunuz tüm faturaları yüksek kalitede PDF formatında indirebilirsiniz."
                  }
                },
                {
                  "@type": "Question",
                  "name": "KDV hesaplaması otomatik mi yapılıyor?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, KDV oranını girdiğinizde tüm hesaplamalar otomatik olarak yapılır ve faturanızda gösterilir."
                  }
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

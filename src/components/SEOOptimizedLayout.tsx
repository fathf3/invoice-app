'use client'

import { ReactNode } from 'react'

interface SEOOptimizedLayoutProps {
  children: ReactNode
  title: string
  description: string
  keywords: string[]
  language: 'tr' | 'en'
}

export default function SEOOptimizedLayout({
  children,
  title,
  description,
  keywords,
  language
}: SEOOptimizedLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": "https://hizlifaturaolustur.com",
    "inLanguage": language === 'tr' ? 'tr-TR' : 'en-US',
    "isPartOf": {
      "@type": "WebSite",
      "name": "Hızlı Fatura Oluştur",
      "url": "https://hizlifaturaolustur.com"
    },
    "breadcrumb": {
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
          "name": title,
          "item": "https://hizlifaturaolustur.com"
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <main role="main" className="min-h-screen">
        <article itemScope itemType="https://schema.org/WebApplication">
          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="keywords" content={keywords.join(', ')} />
          {children}
        </article>
      </main>
    </>
  )
}
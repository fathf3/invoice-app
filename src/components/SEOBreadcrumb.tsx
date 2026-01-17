'use client'

interface BreadcrumbItem {
  name: string
  url: string
}

interface SEOBreadcrumbProps {
  items: BreadcrumbItem[]
  language: 'tr' | 'en'
}

export default function SEOBreadcrumb({ items, language }: SEOBreadcrumbProps) {
  const translations = {
    tr: { home: 'Ana Sayfa' },
    en: { home: 'Home' }
  }
  
  const t = translations[language]

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <li>
          <a 
            href="/" 
            className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
            itemProp="item"
            itemScope
            itemType="https://schema.org/WebPage"
          >
            <span itemProp="name">{t.home}</span>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            {index === items.length - 1 ? (
              <span 
                className="font-medium text-slate-900 dark:text-slate-100"
                itemProp="name"
              >
                {item.name}
              </span>
            ) : (
              <a 
                href={item.url}
                className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
                itemProp="item"
                itemScope
                itemType="https://schema.org/WebPage"
              >
                <span itemProp="name">{item.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
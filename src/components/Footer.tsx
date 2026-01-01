


interface FooterProps {
  language: 'tr' | 'en'
  themeMode: 'light' | 'dark'
  onStartClick: () => void
}

const translations = {
  tr: {
    copyright: 'Tüm Hakları Saklıdır.',
    privacy: 'Gizlilik',
    terms: 'Kullanım Şartları',
    github: 'GitHub',
    language: 'Dil',
    trLabel: 'Türkçe',
    enLabel: 'English',
  },
  en: {
    copyright: 'All Rights Reserved!',
    privacy: 'Privacy',
    terms: 'Terms',
    github: 'GitHub',
    language: 'Language',
    trLabel: 'Turkish',
    enLabel: 'English',
  },
}

export default function FooterPage({ language, themeMode, onStartClick  }: FooterProps) {
  const t = translations[language]
  
  const year = new Date().getFullYear()
  return (
    
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className={themeMode === 'dark' ? 'dark' : ''}>
        
    </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-gray-600 dark:text-gray-300">© {year} FATURA — {t.copyright}</div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">{t.privacy}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">{t.terms}</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">{t.github}</a>
        </div>
      </div>
    </footer>
  )
}

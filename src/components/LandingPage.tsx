interface LandingPageProps {
  language: 'tr' | 'en'
  themeMode: 'light' | 'dark'
  onStartClick: () => void
}

const translations = {
  tr: {
    welcome: 'Hoş Geldiniz!',
    subtitle: 'Profesyonel Fatura Oluşturucu ile Faturalarınızı Yönetin',
    getStarted: 'Başlamak İçin Tıklayın',
    features: 'Özellikleri',
    feature1Title: '⚡ Hızlı ve Kolay',
    feature1Desc: 'Birkaç adımda profesyonel faturalar oluşturun',
    feature2Title: '🎨 Özelleştirilebilir Tasarım',
    feature2Desc: 'Şirket logonuz ve renklarınızla kişiselleştirin',
    feature3Title: '💾 Geçmiş Kaydı',
    feature3Desc: 'Oluşturduğunuz tüm faturaları saklayın ve tekrar kullanın',
    feature4Title: '📄 PDF İndir',
    feature4Desc: 'Faturalarınızı PDF olarak indirin ve yazdırın',
    feature5Title: '🌍 Çok Dil Desteği',
    feature5Desc: 'Türkçe ve İngilizce dillerinde kullanın',
    feature6Title: '🌓 Dark Mode',
    feature6Desc: 'Gece modu ile rahat bir kullanım deneyimi',
    howToUse: 'Nasıl Kullanılır',
    step1Title: 'Adım 1: Şirket Bilgilerinizi Girin',
    step1Desc: 'Şirketinizin adı, email, telefon ve logonuzu ekleyin',
    step2Title: 'Adım 2: Müşteri Bilgisi Ekleyin',
    step2Desc: 'Fatura göndereceğiniz müşterinin adı, adresi ve iletişim bilgisini ekleyin',
    step3Title: 'Adım 3: Hizmet/Ürün Ekleyin',
    step3Desc: 'Sunduğunuz ürün veya hizmetleri, miktarları ve fiyatlarını ekleyin',
    step4Title: 'Adım 4: Ek Bilgiler',
    step4Desc: 'İndirim, vergi, kargo ücreti ve şartları ekleyin',
    step5Title: 'Adım 5: Önizleme ve İndir',
    step5Desc: 'Faturanızı önizleyin ve PDF olarak indirin',
    tips: 'İpuçları',
    tip1: '💡 Şirket bilgilerinizi önceden girin, bunlar sonraki faturaları hızlandıracak',
    tip2: '📧 Müşteri email ve adreslerini doğru girdiğinizden emin olun',
    tip3: '✅ Faturayı göndermeden önce önizlemede detayları kontrol edin',
    tip4: '🔄 Oluşturduğunuz faturaları geçmişten yükleyerek yeniden kullanabilirsiniz',
    tip5: '💰 Vergi oranını ülkenize uygun şekilde ayarlayın',
    startNow: 'Şimdi Başla',
  },
  en: {
    welcome: 'Welcome!',
    subtitle: 'Manage Your Invoices with Professional Invoice Generator',
    getStarted: 'Click to Get Started',
    features: 'Features',
    feature1Title: '⚡ Fast and Easy',
    feature1Desc: 'Create professional invoices in just a few steps',
    feature2Title: '🎨 Customizable Design',
    feature2Desc: 'Personalize with your company logo and colors',
    feature3Title: '💾 History Records',
    feature3Desc: 'Store and reuse all your created invoices',
    feature4Title: '📄 Download PDF',
    feature4Desc: 'Download and print your invoices as PDF',
    feature5Title: '🌍 Multi-Language Support',
    feature5Desc: 'Use in Turkish and English languages',
    feature6Title: '🌓 Dark Mode',
    feature6Desc: 'Comfortable user experience with night mode',
    howToUse: 'How to Use',
    step1Title: 'Step 1: Enter Company Information',
    step1Desc: 'Add your company name, email, phone and logo',
    step2Title: 'Step 2: Add Customer Information',
    step2Desc: 'Enter the customer name, address and contact information',
    step3Title: 'Step 3: Add Products/Services',
    step3Desc: 'Add the products or services, quantities and prices',
    step4Title: 'Step 4: Additional Information',
    step4Desc: 'Add discounts, taxes, shipping costs and terms',
    step5Title: 'Step 5: Preview and Download',
    step5Desc: 'Preview your invoice and download as PDF',
    tips: 'Tips',
    tip1: '💡 Enter your company information first, it will speed up future invoices',
    tip2: '📧 Make sure you enter customer emails and addresses correctly',
    tip3: '✅ Check details in preview before sending the invoice',
    tip4: '🔄 You can reload and reuse previously created invoices from history',
    tip5: '💰 Set the tax rate according to your country',
    startNow: 'Start Now',
  },
}

export default function LandingPage({ language, themeMode, onStartClick }: LandingPageProps) {
  const t = translations[language]

  return (
    <div className={themeMode === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {t.welcome}
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10">
              {t.subtitle}
            </p>
            <button
              onClick={onStartClick}
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition transform hover:scale-105"
            >
              {t.getStarted} →
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              {t.features}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t.feature1Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature1Desc}</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t.feature2Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature2Desc}</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t.feature3Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature3Desc}</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t.feature4Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature4Desc}</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t.feature5Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature5Desc}</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t.feature6Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature6Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              {t.howToUse}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  {t.step1Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.step1Desc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  {t.step2Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.step2Desc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  {t.step3Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.step3Desc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  {t.step4Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.step4Desc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  {t.step5Title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.step5Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              {t.tips}
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded">
                <p className="text-gray-800 dark:text-gray-200">{t.tip1}</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
                <p className="text-gray-800 dark:text-gray-200">{t.tip2}</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 rounded">
                <p className="text-gray-800 dark:text-gray-200">{t.tip3}</p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 rounded">
                <p className="text-gray-800 dark:text-gray-200">{t.tip4}</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 rounded">
                <p className="text-gray-800 dark:text-gray-200">{t.tip5}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {t.getStarted}
            </h2>
            <button
              onClick={onStartClick}
              className="inline-block px-10 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition transform hover:scale-105"
            >
              {t.startNow} →
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

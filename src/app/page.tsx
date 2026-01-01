'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import InvoiceForm from '@/components/InvoiceForm'
import InvoicePreview from '@/components/InvoicePreview'
import InvoiceHistory from '@/components/InvoiceHistory'
import LandingPage from '@/components/LandingPage'
import FooterPage from '@/components/Footer'

interface InvoiceData {
  id: string
  invoiceNumber: string
  date: string
  dueDate: string
  poNumber: string
  companyName: string
  companyEmail: string
  companyPhone: string
  companyLogo?: string
  clientName: string
  clientEmail: string
  clientAddress: string
  clientPhone?: string
  items: {
    description: string
    quantity: number
    rate: number
  }[]
  notes: string
  conditions: string
  tax: number
  taxLabel?: string
  discount: number
  extraSections?: { label: string; amount: number }[]
  currency: string
  theme: string
}

type Language = 'tr' | 'en'
type ThemeMode = 'light' | 'dark'

const translations = {
  tr: {
    title: 'FATURA',
    subtitle: 'Profesyonel Fatura Olusturucu',
    create: 'Fatura Olustur',
    preview: 'Önizleme',
    history: 'Gecmis',
    newInvoice: '+ Yeni Fatura',
    saved: 'Fatura basariyla kaydedildi!',
    invoiceInfo: 'Fatura Bilgileri',
    invoiceNumber: 'Fatura Numarasi',
    date: 'Tarih',
    dueDate: 'Oedeme Tarihi',
    poNumber: 'PO Numarasi',
    optional: 'Istege bagli',
    companyInfo: 'Sirket Bilgileri',
    companyName: 'Sirket Adi',
    companyEmail: 'Sirket E-Posta',
    companyPhone: 'Sirket Telefonu',
    clientInfo: 'Musteri Bilgileri',
    clientName: 'Musteri Adi',
    clientEmail: 'Musteri E-Posta',
    clientPhone: 'Musteri Telefonu',
    clientAddress: 'Musteri Adresi',
    notes: 'Notlar',
    conditions: 'Sartlar',
    discount: 'Indirim',
    discountPercent: 'Indirim Yuzdesi (%)',
    discountAmount: 'Indirim Tutari',
    theme: 'Tema',
    currency: 'Para Birimi',
    language: 'Dil',
    save: 'Kaydet',
    addLogo: '+ Logonuzu Ekleyin',
    items: 'Oge',
    itemDesc: 'Urun/hizmetin aciklamasi...',
    addItem: '+ Satir Ogesi',
    remove: 'Kaldir',
    subtotal: 'ara toplam',
    tax: 'Vergi',
    total: 'Toplam',
    download: 'Indir',
    print: 'Yazdir',
    invoice: 'FATURA',
    billTo: 'Fatura Alan',
    product: 'Urun/Hizmet',
    quantity: 'Miktar',
    rate: 'Oran',
    amount: 'Tutar',
    conditionsTitle: 'Sartlar ve Kosullar',
    light: 'Acik',
    dark: 'Koyu',
  },
  en: {
    title: 'INVOICE',
    subtitle: 'Professional Invoice Generator',
    create: 'Create Invoice',
    preview: 'Preview',
    history: 'History',
    newInvoice: '+ New Invoice',
    saved: 'Invoice saved successfully!',
    invoiceInfo: 'Invoice Information',
    invoiceNumber: 'Invoice Number',
    date: 'Date',
    dueDate: 'Due Date',
    poNumber: 'PO Number',
    optional: 'Optional',
    companyInfo: 'Company Information',
    companyName: 'Company Name',
    companyEmail: 'Company Email',
    companyPhone: 'Company Phone',
    clientInfo: 'Client Information',
    clientName: 'Client Name',
    clientEmail: 'Client Email',
    clientPhone: 'Client Phone',
    clientAddress: 'Client Address',
    notes: 'Notes',
    conditions: 'Conditions',
    discount: 'Discount',
    discountPercent: 'Discount Percentage (%)',
    discountAmount: 'Discount Amount',
    theme: 'Theme',
    currency: 'Currency',
    language: 'Language',
    save: 'Save',
    addLogo: '+ Add Your Logo',
    items: 'Items',
    itemDesc: 'Product/service description...',
    addItem: '+ Add Line Item',
    remove: 'Remove',
    subtotal: 'Subtotal',
    tax: 'Tax',
    total: 'Total',
    download: 'Download',
    print: 'Print',
    invoice: 'INVOICE',
    billTo: 'Bill To',
    product: 'Product/Service',
    quantity: 'Quantity',
    rate: 'Rate',
    amount: 'Amount',
    conditionsTitle: 'Terms and Conditions',
    light: 'Light',
    dark: 'Dark',
  },
}

export default function Home() {
  const searchParams = useSearchParams()
  const initialLang = searchParams?.get('lang') === 'en' ? 'en' : 'tr'
  const showApp = searchParams?.get('showApp') === 'true'
  const [showAppState, setShowAppState] = useState(showApp)
  const [invoices, setInvoices] = useState<InvoiceData[]>([])
  const [activeTab, setActiveTab] = useState<'form' | 'preview' | 'history'>('form')
  const [language, setLanguage] = useState<Language>(initialLang)
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const t = translations[language]

  const [currentInvoice, setCurrentInvoice] = useState<InvoiceData>({
    id: Date.now().toString(),
    invoiceNumber: '1',
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    poNumber: '',
    companyName: '',
    companyEmail: '',
    companyPhone: '',
    companyLogo: '',
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    clientPhone: '',
    items: [{ description: '', quantity: 1, rate: 0 }],
    notes: '',
    conditions: '',
    tax: 0,
    discount: 0,
    shipping: 0,
    shippingLabel: 'Shipping',
    shippingEnabled: false,
    taxLabel: t.tax,
    extraSections: [],
    currency: 'TRY',
    theme: 'classic',
  })

  const handleSaveInvoice = (invoice: InvoiceData) => {
    const existingIndex = invoices.findIndex((inv) => inv.id === invoice.id)
    if (existingIndex >= 0) {
      const updatedInvoices = [...invoices]
      updatedInvoices[existingIndex] = invoice
      setInvoices(updatedInvoices)
    } else {
      setInvoices([...invoices, invoice])
    }
    alert(t.saved)
  }

  const handleLoadInvoice = (invoice: InvoiceData) => {
    setCurrentInvoice(invoice)
    setActiveTab('preview')
  }

  const handleNewInvoice = () => {
    const newNumber = String(invoices.length + 1)
    const newInv = {
      id: Date.now().toString(),
      invoiceNumber: newNumber,
      date: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      poNumber: '',
      companyName: '',
      companyEmail: '',
      companyPhone: '',
      companyLogo: '',
      clientName: '',
      clientEmail: '',
      clientAddress: '',
      clientPhone: '',
      items: [{ description: '', quantity: 1, rate: 0 }],
      notes: '',
      conditions: '',
      tax: 0,
      discount: 0,
      shipping: 0,
      shippingLabel: 'Shipping',
      shippingEnabled: false,
      taxLabel: t.tax,
      extraSections: [],
      currency: 'USD',
      theme: 'classic',
    }
    try {
      const raw = localStorage.getItem('invoice_defaults')
      if (raw) {
        const defaults = JSON.parse(raw)
        Object.assign(newInv, defaults)
      }
    } catch (err) {
      console.error('load defaults error', err)
    }
    setCurrentInvoice(newInv)
    setActiveTab('form')
  }

  return (
    <div className={themeMode === 'dark' ? 'dark' : ''}>
      {!showAppState ? (
        <>
          <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow border-b-4 border-slate-900 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{t.title}</h1>
              </div>
              <div className="flex gap-3 items-center">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="tr">Türkçe</option>
                  <option value="en">English</option>
                </select>
                <button
                  onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
                  className="px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition"
                >
                  {themeMode === 'dark' ? '☀️' : '🌙'}
                </button>
                <button
                  onClick={() => setShowAppState(true)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition font-medium"
                >
                  {language === 'tr' ? 'Uygulamaya Git' : 'Go to App'}
                </button>
              </div>
            </div>
          </header>
          <LandingPage language={language} themeMode={themeMode} onStartClick={() => setShowAppState(true)} />
                      <FooterPage language={language} themeMode={themeMode} onStartClick={() => setShowAppState(true)} />

        </>
      ) : (
        <>
          <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow border-b-4 border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
              <div className="cursor-pointer" onClick={() => setShowAppState(false)}>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white hover:text-slate-600 dark:hover:text-slate-400 transition">
                  {t.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{t.subtitle}</p>
              </div>
              <div className="flex gap-3 items-center">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="tr">Turkce</option>
                  <option value="en">English</option>
                </select>
                <button
                  onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
                  className="px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition"
                >
                  {themeMode === 'dark' ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </header>

          <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-3 mb-6 flex-wrap">
              <button
                onClick={() => setActiveTab('form')}
                className={`w-full sm:w-auto px-6 py-2 rounded-lg font-medium transition ${
                  activeTab === 'form'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-slate-900'
                }`}
              >
                {t.create}
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`w-full sm:w-auto px-6 py-2 rounded-lg font-medium transition ${
                  activeTab === 'preview'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-slate-900'
                }`}
              >
                {t.preview}
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`w-full sm:w-auto px-6 py-2 rounded-lg font-medium transition ${
                  activeTab === 'history'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-slate-900'
                }`}
              >
                {t.history} ({invoices.length})
              </button>
              <button
                onClick={handleNewInvoice}
                className="w-full sm:w-auto px-6 py-2 rounded-lg font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                {t.newInvoice}
              </button>
            </div>
 
            {activeTab === 'form' && (
              <InvoiceForm
                invoice={currentInvoice}
                onSave={handleSaveInvoice}
                onChange={setCurrentInvoice}
                language={language}
                themeMode={themeMode}
              />
            )}

            {activeTab === 'preview' && (
              <InvoicePreview
                invoice={currentInvoice}
                language={language}
                themeMode={themeMode}
              />
            )}

            {activeTab === 'history' && (
              <InvoiceHistory
                invoices={invoices}
                onLoadInvoice={handleLoadInvoice}
                language={language}
                themeMode={themeMode}
              />
            )}
          </main>
        </>
      )}
    </div>
  )
}
